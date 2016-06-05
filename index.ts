/// <reference path="typings/main.d.ts" />

import * as Express from 'express';
import * as Parse_Server from 'parse-server';

import {ParseConfig} from './parse.config';

const App = Express()
const ParseServer = Parse_Server.ParseServer;
const API = new ParseServer({
    databaseURI: ParseConfig.databaseURI,
    appId: ParseConfig.appId,
    masterKey: ParseConfig.masterKey,
    fileKey: ParseConfig.fileKey,
    serverURL: ParseConfig.serverURL,
    cloud: ParseConfig.cloud
});

App.use('/parse', API);

App.listen(8000, () => {
    console.log("Application started...")
})


// * ParseServer on the Endurance
// * Database setup on mLab