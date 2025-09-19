import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App.scss'

export default function App() {
    const [count, setCount] = useState(0)

return (
    <>
        <header className="barra-superior-app">
            <img src="" alt="" />
            <nav>
                <Link to={'/for'}>Formulário</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/cadastro'}>Cadastro</Link>
                <Link to={'#'}>Site Oficial</Link>
                <Link to={'/QR'}>Vincular <br />QRcode</Link>
            </nav>
        </header>
        <section className="principal">
            <div className="imagem">
                <img src="#" height="" />
            </div>
            <div className="descricao">
                <p> Uma feira de profissões é um evento voltado para estudantes que buscam conhecer melhor o mundo acadêmico<br/>e o mercado de trabalho.
                    Durante a feira, são apresentadas diversas áreas de atuação, com explicações sobre as principais carreiras<br/>e seus caminhos de formação.
                    Os participantes têm a chance de conversar diretamente com profissionais experientes de diferentes setores.<br/>
                    Essas interações permitem esclarecer dúvidas sobre cursos, rotinas de trabalho e perspectivas de carreira.<br/>
                    Além disso, o evento mostra as tendências atuais do mercado e as oportunidades em crescimento.<br/>
                    A feira também serve como espaço para despertar novos interesses nos jovens.<br/>
                    Com isso, contribui para escolhas mais conscientes e alinhadas aos objetivos pessoais.<br/>
                    É uma oportunidade única de planejar o futuro com mais informação e segurança.</p>
            </div>
        </section>
        <section className="cursos">
            <p> Fazer um curso é um investimento no seu futuro,<br/> pois amplia suas oportunidades profissionais e pessoais.<br/>Um curso de informática ajuda a dominar ferramentas essenciais no mercado de trabalho atual.<br/> O de inglês abre portas para empresas internacionais, viagens e acesso a conteúdos do mundo inteiro.<br/> Já o de administração ensina a organizar melhor recursos, tempo e pessoas, habilidades muito valorizadas em qualquer área.<br/>Além disso, existem diversas outras opções que permitem descobrir novas habilidades e interesses.<br/> Cada curso concluído é um passo a mais rumo ao crescimento e à realização dos seus objetivos.<br/> E aqui no instituto temos todas essas opções pra ajudar na sua caminhada! </p>
            <div>
                <img src="#" height="" />
            </div>
        </section>
        <div className="infos">
            <div>sobre do frei</div>
            <div>sobre o frei</div>
        </div>
    </>
    )
}
