import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import './Login.scss';

export default function Log() {
  const [email, setemail]= useState("");
  const [senha, setsenha]= useState("");
  const navigate = useNavigate();

  async function enviarLogin() {
    try {
      const resposta = await Axios.post('http://localhost:5777/feira', {
        email,
        senha
      });
      alert("Login bem-sucedido!");
      navigate('/');
    } catch (erro) {
      if (erro.response && erro.response.status === 401) {
        alert("Email ou senha inválidos.");
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    }
  }

  return (
    <>
      <div className="barra-superior-login">
        <img src="" alt="" />
        <nav>
          <Link to={'/for'}>Formulário</Link>
          <Link to={'#'}>Feira Profissões</Link>
          <Link to={'#'}>Site Oficial</Link>
          <Link to={'/'}>Voltar</Link>
          <Link to={'/QR'}>Vincular <br />QRcode</Link>
        </nav>
      </div>
      <div className="login-container">
        <div className="container-secundario">
          <h1>Login admin</h1>
            <input type="email" placeholder="Email" value={email} onChange={e => setemail(e.target.value)} />
            <input type="password" placeholder="Senha" value={senha} onChange={e => setsenha(e.target.value)}/>
          <button onClick={enviarLogin} className="btn-proximo">Próximo</button>
        </div>
      </div>
    </>
  )
}
