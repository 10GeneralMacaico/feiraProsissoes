import { Link } from 'react-router-dom';
import { useState } from 'react'
import './App.scss'


function Curs() {
  const [count, setCount] = useState(0)

  return (
    <>
        <title> Feira de prego veio</title>
      <body className='a'>
        <header>
        <div className="barra-superior-login">
        <img src="" alt="" />
        <nav>
          <Link to={'/for'}>Formulário</Link>
          <Link to={'/'}>Voltar</Link>
          <Link to={'#'}>Site Oficial</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/cadastro'}>Cadastro</Link>
          <Link to={'/QR'}>Vincular <br />QRcode</Link>
        </nav>
      </div>
        </header>
        <section className='principal'>
          <div className='divimg'>
            <img src="../../public/galera-do-frei.jpg" height="250px" width="300px"/>
            <p> Fazer um curso é uma ótima forma de adquirir novos conhecimentos e habilidades que abrem <br/>> portas no mercado de trabalho. Além de enriquecer o currículo, também aumenta a confiança pessoal e profissional. <br/>Cursos permitem acompanhar as mudanças e exigências do mundo atual, mantendo-se atualizado.<br/> Eles ainda podem gerar novas oportunidades de carreira e crescimento pessoal. </p>
          </div>
          <div className='divimg2'>
          <p> Venha conhcer esse hambiente que a tantos anos forma os melhores profissionais do mercado<br/> conheça alguns dos nossos melhores cursos como:Inglês do Teens ao avançado,Informática,Administração,Eletrônica, Mecânica e etc. <br/> Aqui nós moldamos futuros profissionais dando oportunidades para o crescimento e desenvolvimento pessoal </p>
            <img src= "../../public/jump-frei-jump.jpeg" height="250px" width="300px"/>
          </div>
        </section>
      </body> 
    </>
  
    
  )
}

export default Curs;




