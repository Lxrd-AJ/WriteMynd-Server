/// <reference path="typings/main.d.ts" />

import * as Express from 'express';
import * as Parse_Server from 'parse-server';

const App = Express()
const ParseServer = Parse_Server.ParseServer;
const API = new ParseServer({
    databaseURI: "mongodb://localhost:27017/writemynd",
    appId: 'rJrwXVeierGtuubX09tjfFY8lNA/dcuniTH0EdHbAhE=',
    masterKey: 'RuTGnR7AhxxHXpditH+l0SGBQ4aRDNmi3gWgBaaFPKc=',
    fileKey: 'NNl+HXmEA6dkXFSupHcd9/xz5s5fuICA/2GZKLtqkWE=',
    serverURL: 'http://localhost:8000/parse'
})

App.use('/parse', API);

App.listen(8000, () => {
    console.log("Application started...")
})
