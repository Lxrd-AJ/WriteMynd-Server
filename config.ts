

interface _ParseConfig {
    databaseURI?: string,
    appId: string,
    masterKey: string,
    fileKey: string,
    serverURL: string,
    cloud: string,
    port: number
}
export const ParseConfig : _ParseConfig = {
    appId: "rJrwXVeierGtuubX09tjfFY8lNA/dcuniTH0EdHbAhE=",
    masterKey: "RuTGnR7AhxxHXpditH+l0SGBQ4aRDNmi3gWgBaaFPKc=",
    fileKey: "NNl+HXmEA6dkXFSupHcd9/xz5s5fuICA/2GZKLtqkWE=",
    serverURL: "http://localhost:8000/parse",
    cloud: "./WriteMyndCloud/cloud/main.js",
    port: 8000
}

interface _Config {
    db: () => {
        host: string,
        database: string,
        user: string,
        pwd: string
    }
}

export const Config: _Config = {
    db: () => {
        return {
            host: "127.0.0.1", //178.62.103.146
            database: "writemynd",
            user: "mr_robot",
            pwd: "enterTheDragon"
        }
    }
}
