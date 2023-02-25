module.exports = class Application {
    #express = require("express");
    #app = this.#express();
    constructor(PORT, DB_URL) {
        this.configDatabase(DB_URL);
        this.configApplication();
        this.createServer(PORT);
        this.createRoutes();
        this.errorHandler();
    }

    configApplication() {
        const path = require("path");
        this.#app.use(this.#express.json());
        this.#app.use(this.#express.urlencoded({extended: true}));
        this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));
    }

    createServer(PORT) {
        const http = require("http");
        const server = http.createServer(this.#app);
        server.listen(PORT, (err) => {
            if (err) throw err;
            else console.log(`server run on http://127.0.0.1:${PORT}`)
        });
    }
    
    configDatabase(DB_URL) {
        const mongoose = require("mongoose");
        mongoose.connect(DB_URL, (err) => {
            if(err) throw err;
            return console.log("Connect to DB successfully....");
        })
    }

    errorHandler() {
        this.#app.use((req, res, next) => {
            return res.status.json({
                status: 404,
                success: false,
                message: "Not Found!"
            });
        });
        this.#app.use((err, req, res, next) => {
            const status = err?.status || 500;
            const message = err?.message || "Internal Server Error";
            return res.status(status).json({
                status,
                success: false,
                message,
            });
        })
    }

    createRoutes() {
        this.#app.get("/", (req ,res, next) => {
            return res.json({
                 message: "This is a new Express application",
            })
        })
    }
};