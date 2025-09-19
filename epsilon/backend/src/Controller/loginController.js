import * as repository from "../Repository/loginRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post('/feira', async(req,resp)=>{
    const { email, senha } = req.body;
    const RES = await repository.inserir(email, senha);

    if (RES.length === 0) {
        return resp.status(401).send({ erro: "Email ou senha inválidos" });
    }
    resp.status(200).send({ mensagem: "Login autorizado", usuario: RES[0] });
});

export default endpoint;