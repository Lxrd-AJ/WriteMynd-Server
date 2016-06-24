

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
    appId: "rJrwXVeierGtuubX09tjfFY8lNAdcuniTH0EdHbAhE",
    masterKey: "RuTGnR7AhxxHXpditH+l0SGBQ4aRDNmi3gWgBaaFPKc",
    fileKey: "NNl+HXmEA6dkXFSupHcd9xz5s5fuICA2GZKLtqkWE",
    serverURL: "http://localhost:80/parse",
    cloud: "./WriteMyndCloud/cloud/main.js",
    port: 80
}

interface _Config {
    db: () => {
        host: string,
        database: string,
        user: string,
        pwd: string
    },
    mailgun: {
        apiKey: string
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
    },
    mailgun: {
        apiKey: 'key-73fcba279df87ec8fa54217db8136a42'
    }
}
