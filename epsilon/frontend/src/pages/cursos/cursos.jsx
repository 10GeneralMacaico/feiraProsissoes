import { useState } from 'react'
import './App.scss'


function App() {
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
          <input className='pesquisa' type="search" placeholder='Pesquisar'/>
          <div className='divimg'>
            <img src="../../public/galera-do-frei.jpg" height="250px" width="300px"/>
            <p> , essa bosta não pega imagem de forma alguma <br/>mano preciso que essa merda funcione<br/>já ta ficando insano véi<br/>ssssssssssssssssssssssssssssssssssssssssssssssssssss <br/>ssssssssssssssssssssssssssssssssssssssssssssssssssss <br/>sssssssssssssssssssssss <br/></p>
          </div>
          <div className='divimg2'>
          <p> Venha conhcer esse hambiente que a tantos anos forma os melhores profissionais do mercado<br/> conheça alguns dos nossos melhores cursos como:Inglês do Teens ao avançado,Informática,Administração,Eletrônica e Mecânica</p>
            <img src= "../../public/jump-frei-jump.jpeg" height="250px" width="300px"/>
          </div>
        </section>
      </body> 
    </>
  
    
  )
}

export default App
