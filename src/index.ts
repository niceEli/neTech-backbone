import express from 'express';
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app); 

server.listen(272, () => {
    console.log("Server listening on http://localhost:272/")
})

const MONGO_URL = 'mongodb://root:VU5cwJ3LpWYtzRua7kbKCXM4BndxZsAgHPFe62DqvhSjm8EQNG@netech-backbone-mongo-1:27017/?authMechanism=DEFAULT'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router())