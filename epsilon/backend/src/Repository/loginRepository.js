import conection from "./Conection.js";

export async function inserir(email, senha){
    const Or = `
    select *from tb_login
        where email = ? and senha = ?
    `
    const [RES]= await conection.query(Or,[
        email,
        senha
    ]);
    return RES;
}
export async function salvarFormulario(dados) {
    const Or = `
      INSERT INTO formulario (nome, email, idade, genero)
      VALUES (?, ?, ?, ?)
    `;
    const valores = [dados.nome, dados.email, dados.idade, dados.genero];
  
    const [RES] = await conection.query(Or, valores);
    return RES.insertId;
}
