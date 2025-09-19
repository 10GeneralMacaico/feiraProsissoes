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
                <p>Uma feira de profissões é um evento voltado para estudantes que buscam conhecer melhor o mundo acadêmico e o mercado de trabalho.
                    Durante a feira, são apresentadas diversas áreas de atuação, com explicações sobre as principais carreiras e seus caminhos de formação.
                    Os participantes têm a chance de conversar diretamente com profissionais experientes de diferentes setores.
                    Essas interações permitem esclarecer dúvidas sobre cursos, rotinas de trabalho e perspectivas de carreira.
                    Além disso, o evento mostra as tendências atuais do mercado e as oportunidades em crescimento.
                    A feira também serve como espaço para despertar novos interesses nos jovens.
                    Com isso, contribui para escolhas mais conscientes e alinhadas aos objetivos pessoais.
                    É uma oportunidade única de planejar o futuro com mais informação e segurança.</p>
            </div>
        </section>
        <section className="cursos">
            <p>Venha conhecer os cursos do nosso instituto! Oferecemos uma variedade de opções voltadas para jovens e adultos que desejam se qualificar profissionalmente. Nossos cursos são focados em capacitação técnica e no desenvolvimento de habilidades comportamentais, sociais e tecnológicas, essenciais para o mercado de trabalho atual. Escolha o curso que mais se adequa aos seus objetivos e prepare-se para construir um futuro promissor!</p>
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