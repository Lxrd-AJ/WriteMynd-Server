/// <reference path="typings/index.d.ts" />

import * as Express from 'express';
import * as Http from 'http';
import * as Mongoose from 'mongoose';
import * as Parse_Server from 'parse-server';
import * as Logger from 'morgan';
import * as Path from 'path';
import * as BodyParser from 'body-parser';

import {ParseConfig,Config} from './config';
import {Router} from './router';
import {IUser, User} from './models/user';
import {IPost, Post} from './models/post';

const databaseURI = `mongodb://${Config.db().user}:${Config.db().pwd}@${Config.db().host}/${Config.db().database}`
const App = Express()
const ParseServer = Parse_Server.ParseServer;
const Connection = Mongoose.connection;
const API = new ParseServer({
    databaseURI: databaseURI,
    appId: ParseConfig.appId,
    masterKey: ParseConfig.masterKey,
    fileKey: ParseConfig.fileKey,
    serverURL: ParseConfig.serverURL,
    cloud: ParseConfig.cloud,
    publicServerURL: 'http://178.62.103.146:8000/parse',
    appName: 'WriteMynd',
    verbose: true,
    emailAdapter: {
        module: 'parse-server-simple-mailgun-adapter',
        options: {
            fromAddress: "endurance@writemynd.com",
            domain: "sandbox963dc52c48f341a1b8fdc56469236547.mailgun.org",
            apiKey: Config.mailgun.apiKey
        }
    }
});

Mongoose.connect(databaseURI);
Connection.on('error', () => { console.error(`Failed to connect to ${Config.db().database}`) });
Connection.on('open', () => { 
    console.info(`Successfully connected to ${Config.db().database}`);
})

App.use('/parse', API);
App.use(Logger('short'));
App.use(Express.static(Path.join(__dirname, 'Webapp')));
App.use(BodyParser.json()); 
App.use(BodyParser.urlencoded({ extended: true }));

const Server = Http.createServer(App);
const router = new Router(App);


App.get("/", (req, res) => {
    res.sendFile( __dirname + "/Webapp/index.html" )
})

//- todo: Use port 80 instead
Server.listen(8000, () => {
    console.log("Application started  ...")
})
