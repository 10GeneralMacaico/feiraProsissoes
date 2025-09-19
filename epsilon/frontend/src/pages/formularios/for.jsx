import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './For.scss';

function For() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

    function irFor(){
        navigate("/forS")
    }

  return (
    <>
      <header className="barra-superior-for">
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
      <div className="palavra-formulario">
        <h1>Formulário</h1>
      </div>

      <div className="container-formulario">
        <input type="text" name="nome" placeholder="Nome completo" />
        <input type="date" name="data-nascimento" />
        <input type="tel" name="telefone" placeholder="Telefone" />
        <select className="select-escolha">
            <option>Escolaridade</option>
            <option>Ensino Fundamental I</option>
            <option>Ensino Fundamental II</option>
            <option>Ensino Medio</option>
            <option>Ensino Superior</option>
        </select>
        <input type="text" name="desejo" placeholder="Deseja fazer Algum Curso?" />
        <select className="select-escolha">
            <option>Cursos</option>
            <option>Informática</option>
            <option>Administração</option>
            <option>Inglês</option>
            <option>Eletrotécnica</option>
            <option>Comunicação Visual-CV</option>
            <option>Eletromecânica de Autos</option>
        </select>
        <button onClick={irFor} className="botao-enviar-for">Enviar</button>
      </div>
    </>
  )
}


export default For
