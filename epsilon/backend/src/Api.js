import { AddRotas } from "./Router.js";
import express from 'express';
import Cors from 'cors';
const api = express();
api.use(express.json());
api.use(Cors());

AddRotas(api);

api.listen(5777, ()=> console.log('Subiu'));