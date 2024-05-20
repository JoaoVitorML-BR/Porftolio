import gitHubIcon from '../img/github.png';
import iscompatibleImage from '../img/iscompatilble-site.png';
import tubeLoadSaveImage from '../img/tubeloads-site.png';
import codeIcon from '../img/programming-code-signs.png';
import instagramIcon from '../img/instagram.png';
import linkedinIcon from '../img/linkedin.png';
import golangImage from '../img/golangImage.jpg';
import gmailIcon from '../img/gmail.png';

export const PageHome: React.FC = () => {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>

            <main >
                <div id="about" className="page-style">
                    <div className='justfiy-footer-home scrollable'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='sticky-content pt-4'>
                                        <h1 className='textStyleGeneral fs-2'>João Vitor</h1>
                                        <h2 className='textStyleGeneral fs-4'> <img src={codeIcon} width={40} height={30} alt="dev" /> Desenvolvedor backend</h2>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'>Node.js</p>
                                            <p className='fw-lighter paragath-style-tecnology'>TypeScript</p>
                                            <p className='fw-lighter paragath-style-tecnology'>Golang</p>
                                            <p className='fw-lighter paragath-style-tecnology'>PostgreSQL</p>
                                            <p className='fw-lighter paragath-style-tecnology'>MySQL</p>
                                            <p className='fw-lighter paragath-style-tecnology'>Docker</p>
                                        </div>
                                        <p className='textStyleGeneral fw-light paragath-style-tecnology'>Em 2018, descobri como os sites e aplicativos eram construidos e decidi começar a estudar sobre pelo YouTube.
                                            Então, comecei a desenvolver meus projetos pessoais assim que comprei meu computador apenas em 2020/2021. Através dele, consegui oportunidades para desenvolver algumas automações para familiares, amigos, conhecidos de amigos e, finalmente, meu estágio na prefeitura da minha cidade. <br /> <br />
                                            Dentro da prefeitura, pude continuamente aprimorar minhas habilidades como desenvolver e adquirir novos conhecimentos através de projetos desde simples ao avançado que me foram passados. Ao mesmo tempo, participei de projetos backend como Voluntário em minha faculdade.<br /><br />
                                            Meu foco principal atualmente é construir aplicações, seguindo boas praticas, padrão de arquiteturas escalonaveis para o projeto e um código limpo, para que no final, consiga atender as necessidades do cliente/usuário. <br /> <br />
                                            Embora a tecnologia seja uma das minhas grandes paixões, também cultivo outras áreas da minha vida. Sou um torcedor fiel do Asa Gigante, meu time do coração, e adoro praticar esportes físicos para manter o equilíbrio entre mente e corpo. Essas experiências fora do mundo digital me enriquecem e ajudam a ser uma pessoa mais completa e realizada.
                                        </p>
                                        <div className='container-footer-socialmidia'>
                                            <ul className='footer-icons d-flex justify-content-start'>
                                                <li className='mx-2 li-icons'>
                                                    <a href="https://github.com/JoaoVitorML-BR" target="blank"><img className='imagesFooter' alt="gitHub" src={gitHubIcon}></img></a>
                                                </li >
                                                <li className='mx-2'>
                                                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitorml-br/" target="blank"><img className='imagesFooter' alt="linkedin" src={linkedinIcon}></img></a>
                                                </li>
                                                <li className='mx-2'>
                                                    <a href="https://www.instagram.com/joao_vitor_0o/" target="blank"><img className='imagesFooter' alt="instagram" src={instagramIcon}></img></a>
                                                </li>
                                                <li className='mx-2'>
                                                    <a href="mailto:contatojoaovtml@gmail.com" target="blank">
                                                        <img className='imagesFooter-gmail' alt="email" src={gmailIcon}></img>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-line"></div>
                                <div className="col-md-6 pt-4">
                                    <h3 className='textStyleGeneral'>Experiência</h3>
                                    <div className="scrollable">
                                        <div className='container-experiences'>
                                            <h4 className='textStyleGeneral fw-normal fs-4'>Prefeitura de Arapiraca/AL</h4>
                                            <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor de automatizações Qgis</h5>
                                            <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>03/2023 até o momento</h6>
                                            <p className='textStyleGeneral fw-light paragath-style-tecnology'>Desenvolvo sistemas automatizados no QGIS, utilizando PyQGIS e PostgreSQL. Também integro a API JavaScript/TypeScript do Google Maps em projetos específicos para expandir funcionalidades usando Node.JS e React, além de criar dashboards e planilhas usando Looker, Power BI integrado com o google planilhas.<br /></p>
                                            <div className='tecnologies-style textStyleGeneral'>
                                                <p className='fw-lighter paragath-style-tecnology'>React.js</p>
                                                <p className='fw-lighter paragath-style-tecnology'>Node.js</p>
                                                <p className='fw-lighter paragath-style-tecnology'>TypeScript</p>
                                                <p className='fw-lighter paragath-style-tecnology'>PostgreSQL</p>
                                                <p className='fw-lighter paragath-style-tecnology'>Google planilhas</p>
                                                <p className='fw-lighter paragath-style-tecnology'>Qgis/PyQGIS</p>
                                                <p className='fw-lighter paragath-style-tecnology'>Python</p>
                                                <p className='fw-lighter paragath-style-tecnology'>Power BI</p>
                                            </div>
                                        </div>

                                        <div className='container-experiences'>
                                            <h4 className='textStyleGeneral fw-normal fs-4'>DIT - Núcleo de Desenvolvimento e Inovação Tecnológica - IFAL</h4>
                                            <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor Backend - Golang (Voluntário)</h5>
                                            <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>03/2023 até 03/2024</h6>
                                            <p className='textStyleGeneral fw-light paragath-style-tecnology'>Desenvolvedor trainee/junior em projeto de alto impacto para a cidade de arapiraca em parceria entre o Instituto federal de Alagoas e a Prefeitura de arapiraca, onde visou-se interligar as informações dos pacientes de hospitais públicos da cidade.<br /></p>
                                            <div className='tecnologies-style textStyleGeneral'>
                                                <p className='fw-lighter paragath-style-tecnology'>Golang</p>
                                                <p className='fw-lighter paragath-style-tecnology'>Docker</p>
                                                <p className='fw-lighter paragath-style-tecnology'>PostgreSQL</p>
                                                <p className='fw-lighter paragath-style-tecnology'>Git</p>
                                            </div>
                                        </div>
                                        <hr className='hr-style' />
                                        <h3 className='textStyleGeneral'>Projetos</h3>
                                        <div className='container-experiences'>
                                            <a href='https://www.iscompatible.com.br/' target="blank" className='link-no-underline'>
                                                <h4 className='textStyleGeneral fw-normal fs-4'>Verificador de compatibilidade de peças para computador</h4>
                                                <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor FullStack</h5>
                                                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>09/2022 até momento </h6>
                                                <div className="image-container">
                                                    <img className="images-presentation" src={iscompatibleImage} alt="iscompatible" />
                                                    <div className="gradient-border"></div>
                                                </div>
                                                <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>Esse projeto tem uma grande importância na minha vida pois nele não só pude por em prática meus conhecimentos, como também ajudar a sanar uma dor, pois alguma vez você já se viu com dúvidas na hora de montar o seu PC, questionando se aquele processador ou memória RAM eram compatíveis com a sua placa-mãe? Pois bem, o site "Is compatible ?" ou "É compatível?" foi desenvolvido justamente para aliviar essa preocupação.<br /></p>
                                                <div className='tecnologies-style textStyleGeneral'>
                                                    <p className='fw-lighter paragath-style-tecnology'>React.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>Node.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>TypeScript</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>MySQL</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>Ngix</p>
                                                </div>
                                            </a>
                                        </div>


                                        <div className='container-experiences'>
                                            <a href='https://tubeloadsave.vercel.app/' target="blank" className='link-no-underline'>
                                                <h4 className='textStyleGeneral fw-normal fs-4'>Baixador de vídeos e músicas do youtube</h4>
                                                <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor FullStack</h5>
                                                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>06/2023 até 07/2023 </h6>
                                                <div className="image-container">
                                                    <img className='images-presentation' src={tubeLoadSaveImage} alt="tubeloadsave" />
                                                    <div className="gradient-border"></div>
                                                </div>
                                                <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>A ideia por trás deste projeto foi aprimorar minhas habilidades no consumo de APIs externas, então optei por criar um downloader para vídeos ou músicas do YouTube como forma de prática.<br /></p>
                                                <div className='tecnologies-style textStyleGeneral'>
                                                    <p className='fw-lighter paragath-style-tecnology'>React.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>Node.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>TypeScript</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>PostgreSQL</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>Google planilhas</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>Qgis/PyQGIS</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>Python</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='container-experiences'>
                                            <h4 className='textStyleGeneral fw-normal fs-4'>API - Login</h4>
                                            <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor backend</h5>
                                            <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>08/2023 até 09/2023</h6>
                                            <div className="image-container">
                                                <img className="images-presentation" src={golangImage} alt="golang" />
                                                <div className="gradient-border"></div>
                                            </div>
                                            <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>Desenvolvi esse projeto pois estava precisando de uma API para permitir o login e cadastro dos itens no site iscompatible, logo, decidi fazer com go para fugir um pouco do node.js, foi de bastante aprendizado esse projeto pois nele pude aplicar conceitos da arquitetura hexagonal.<br /></p>
                                            <div className='tecnologies-style textStyleGeneral'>
                                                <p className='fw-lighter paragath-style-tecnology'>Golang</p>
                                                <p className='fw-lighter paragath-style-tecnology'>PostgreSQL</p>
                                                <p className='fw-lighter paragath-style-tecnology'>SQLC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-KyZXEAg3QhqLMpG8r+VBE3k3Im+eD6hQo8AifF+4mtZf9AaC1khgjEzodWfWTzR5" crossOrigin="anonymous"></script>
        </>
    )
}

export default PageHome;
