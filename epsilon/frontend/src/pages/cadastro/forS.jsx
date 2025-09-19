import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './forS.scss'

function ForS() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: ""
  })

  const navigate = useNavigate()

  const F = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const FF = async () => {
    try {
      await axios.post("http://localhost:5777/feira/registro", form)
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("Preencha todos os campos!")
      } else {
        alert("Erro ao conectar com o servidor.")
      }
      console.error("Erro no cadastro:", err)
    }
  }

  return (
    <>
      <header className="barra-superior-fors">
        <img src="" alt="" />
        <nav>
          <Link to={'/'}>Voltar</Link>
          <Link to={'#'}>Feira Profissões</Link>
          <Link to={'#'}>Site Oficial</Link>
          <Link to={'/cursos'}>Cursos</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/QR'}>Vincular <br />QRcode</Link>
        </nav>
      </header>

      <div className="for">
        <h1>Formulário de Cadastro</h1>
      </div>

      <div className="container-formulario-fors">
        <input type="text" name="nome" placeholder="Nome" onChange={F}/>
        <input type="email" name="email" placeholder="Email" onChange={F}/>
        <input type="password" name="senha" placeholder="Senha" onChange={F}/>
        <button onClick={FF} className="botao-enviar-fors">Criar</button>
      </div>
    </>
  )
}

export default ForS

