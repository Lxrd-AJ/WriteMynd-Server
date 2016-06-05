interface _ParseConfig {
    databaseURI: string,
    appId: string,
    masterKey: string,
    fileKey: string,
    serverURL: string,
    cloud: string
}
export const ParseConfig : _ParseConfig = {
    databaseURI: "mongodb://localhost:27017/writemynd",
    appId: "rJrwXVeierGtuubX09tjfFY8lNA/dcuniTH0EdHbAhE=",
    masterKey: "RuTGnR7AhxxHXpditH+l0SGBQ4aRDNmi3gWgBaaFPKc=",
    fileKey: "NNl+HXmEA6dkXFSupHcd9/xz5s5fuICA/2GZKLtqkWE=",
    serverURL: "http://localhost:8000/parse",
    cloud: "./WriteMyndCloud/cloud/main.js"
}
