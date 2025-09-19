import conection from "./Conection.js";

export async function salvarQrcode(nome, qrcodeBuffer) {
    const Or = `
    insert into tb_qrcode(nome, qrcode) 
      values (?, ?);
    `;
    const [RES] = await conection.query(Or, [nome, qrcodeBuffer]);
    return RES.insertId;
}

export async function listarQrcodes() {
  const Or = `
  select id, nome, qrcode 
    from qr_codes`;
  const [RES] = await conection.query(sql);
  return RES;
}