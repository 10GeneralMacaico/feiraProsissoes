import { salvarQrcode } from "../Repository/QRcodeRepository.js";
import { Router } from "express";
import multer from 'multer';
const upload = multer({ dest:'/public/storage' });
const endpoint = Router();

endpoint.post("/qrcode", upload.single("qrcode"), async (req, res) => {
    try {
      const { nome } = req.body;
      const qrcode = req.file;

      if (!nome || !qrcode) {
        return res.status(400).json({ error: "Nome e QRCode são obrigatórios" });
      }

      const id = await salvarQrcode(nome, qrcode.buffer);
      res.status(201).json({ message: "QR Code salvo com sucesso!", id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao salvar QR Code" });
    }
});
export default endpoint;