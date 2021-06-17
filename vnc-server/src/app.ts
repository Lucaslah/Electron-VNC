import express, { Application, Request, Response } from "express";
import http from "http";

interface Config {
    port: number;
}

export default class App {
    private app: Application;
    private server: http.Server;
    private config: Config;
    constructor(config: Config) {
        this.app = express();
        this.config = config;
    }

    public init(): void {
        this.app.use(express.static("public"));
    }

    public createServer(): void {
        this.server = http.createServer(this.app);
    }

    public start(): void {
        this.server.listen(this.config.port);
        this.server.on("listening", () => {
            console.log("Server Ready!");
        });
    }

}