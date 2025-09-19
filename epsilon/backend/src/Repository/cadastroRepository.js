import conection from "./Conection.js";

export async function salvarUsuario({ nome, email, senha }) {
  try {
    const Or = `
      INSERT INTO cadastro (nome, email, senha)
      VALUES (?, ?, ?)
    `;
    const [RES] = await conection.execute(Or, [nome, email, senha]);
    return RES.insertId;
  } catch (erro) {
    console.error("Erro no salvarUsuario:", erro);
    throw erro;
  }
}
export async function salvarLogin({ id_cadastro, email, senha }) {
    const sql = `
      insert into tb_login (id_cadastro, email, senha)
      values (?, ?, ?)
    `;
    const [res] = await conection.execute(sql, [id_cadastro, email, senha]);
    return res.insertId;
  }
  