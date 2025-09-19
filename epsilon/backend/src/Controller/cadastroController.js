import { salvarUsuario, salvarLogin } from "../Repository/cadastroRepository.js";
import endpoint from "./loginController.js";

endpoint.post("/feira/registro", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }
    const id = await salvarUsuario({ nome, email, senha });
    await salvarLogin({ id_cadastro: id, email, senha });

    res.status(201).json({ message: "Usuário registrado com sucesso!", id });

  } catch (erro) {
    console.error("Erro no backend:", erro);
    res.status(500).json({ error: "Erro interno", detalhe: erro.message });
  }
});
export default endpoint;