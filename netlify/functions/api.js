const fs = require("fs");
const path = require("path");

exports.handler = async function(event) {

    try {

        const filePath = path.join(
            __dirname,
            "..",
            "..",
            "database",
            "data.json"
        );

        const database = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

        const name =
            event.queryStringParameters?.name || "";

        const results = database.filter(user =>
            user.name
                .toLowerCase()
                .includes(name.toLowerCase())
        );

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(results)
        };

    } catch (error) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message
            })
        };
    }
};
