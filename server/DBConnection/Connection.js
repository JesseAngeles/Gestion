class Connection {
    constructor() {
        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host: "brfxppsjoazsidiiqbkc-mysql.services.clever-cloud.com",
            user: "upbm9xxhq5bpo5te",
            password: "KkvBzaJmDPevIcvRR5Dd",
            database: "brfxppsjoazsidiiqbkc",
            port: 3306
        })
    };

    createTheConnection() {
        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host: "brfxppsjoazsidiiqbkc-mysql.services.clever-cloud.com",
            user: "upbm9xxhq5bpo5te",
            password: "KkvBzaJmDPevIcvRR5Dd",
            database: "brfxppsjoazsidiiqbkc",
            port: 3306
        });
        connection.connect((err) => {
            if (err) {
                throw err;
            }
        });
        return connection;
    };
}

module.exports = {
    Connection
}