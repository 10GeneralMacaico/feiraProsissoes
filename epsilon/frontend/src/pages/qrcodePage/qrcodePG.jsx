import { Link } from 'react-router-dom';
import { useState } from "react";
import './qrcodePg.scss'
import axios from "axios";

function QR() {
  const [nome, setNome] = useState("");
  const [qrcode, setQrcode] = useState(null);

  const QRCode = async () => {
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("qrcode", qrcode);

    await axios.post("http://localhost:5777/qrcode", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    alert("Enviado com sucesso!");

    const [qrData, setQrData] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  function generateNewQrCode() {
    const uniqueData = '${new Date().getTime()}&r=${Math.random()'}
    const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent'(uniqueData)};
    setQrData(uniqueData);
    setQrUrl(apiUrl);
  };

  return (
    <>
    <header className="barra-superior-qr">
            <img src="" alt="" />
            <nav>
                <Link to={'/for'}>Formulário</Link>
                <Link to={'#'}>Feira Profissões</Link>
                <Link to={'#'}>Site Oficial</Link>
                <Link to={'/cursos'}>Cursos</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/QR'}>Vincular <br />QRcode</Link>
            </nav>
        </header>
    <div className="panel qr-panel">
    <div className="panel-body">
      <div className="qr-code-container">
        <img id="qr-code-img" src={qrUrl} alt={'QR Code para: ${qrData}'} />
      </div>
        <input
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setQrcode(e.target.files[0])}
        />
        <button onClick={QRCode}>Enviar</button>
      </div>
    </div>
    </>
  );


export default QR;

