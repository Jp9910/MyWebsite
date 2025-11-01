import BotaoEstilizado from "../components/BotaoEstilizado"

function AboutMeEnglish() {
    return (
        <div id="pagina" className="mx-30">
            <div id="resumo" className="flex justify-center w-full h-1/2 mb-20">
                <img src="src/assets/profile.jpg" alt="Foto de perfil" className="rounded-full w-64 h-64 mr-4" />
                <div className="flex-col w-1/3 space-4">
                    <p className="mb-6">
                        Olá! Sou João Paulo, um cientista da computação com conhecimentos abrangendo diversas áreas da computação, como desenvolvimento de software, ciência de dados, inteligência artificial e redes de computadores.
                        Tenho experiência em todas as etapas do desenvolvimento de software moderno, desde algoritmos à implantação. Sou dedicado e apaixonado por criar soluções de alta qualidade que agrade ao usuário ou stakeholder. 
                        Também gosto muito de colaborar em equipes dinâmicas, sempre buscando causar um impacto positivo e crescer profissionalmente.
                    </p>
                    <BotaoEstilizado>Currículo</BotaoEstilizado>
                    <BotaoEstilizado>Contato</BotaoEstilizado>
                </div>
            </div>

            <section id="whatido" className="">
                <h1 className="text-2xl border-b border-gray-200 dark:border-gray-600">O que eu faço</h1>
                <div className="grid w-auto h-auto grid-cols-2 place-content-stretch gap-5 mx-6 my-2">

                    <div className="flex items-center">
                        <div className="grid grid-flow-col grid-rows-3 gap-4 w-auto">
                            <img src="src/assets/web-dev.png" className="w-8 h-8 row-span-3" alt="icone web dev" />
                            <h1 className="text-lg col-span-2">Desenvolvimento Web</h1>
                            <p className="col-span-2 row-span-2">
                                Tenho experiência em criar aplicações web modernas e responsivas. 
                                Não sou Desenvolvedor Frontend ou Backend, e muito menos Desenvolvedor React, Desenvolvedor Springboot, ou qualquer outro framework específico, mas sim um desenvolvedor de <b>software</b> com plena capacidade de aprender rapidamente e aplicar meus conhecimentos para desenvolver soluções eficazes.
                                Dito isso, tenho experiência com diversos frameworks frontend (React, Angular, Vue) e backend (Node.js, Spring/Springboot, .Net, Laravel).
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="grid grid-flow-col grid-rows-3 gap-4 w-auto">
                            <img src="src/assets/controller.png" className="w-8 h-8 row-span-3" alt="icone web dev" />
                            <h1 className="text-lg col-span-2">Desenvolvimento de Jogos</h1>
                            <p className="col-span-2 row-span-2">
                                Sou apaixonado por jogos e tenho modesta experiência criando jogos usando múltiplas game engines.
                                Atualmente estou explorando o desenvolvimento de jogos 3D com Godot, criando sozinho um jogo de terror independente chamado "The Ascent", com previsão para lançar no início de 2026.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="grid grid-flow-col grid-rows-3 gap-4 w-auto">
                            <img src="src/assets/data-science.png" className="w-8 h-8 row-span-3" alt="icone web dev" />
                            <h1 className="text-lg col-span-2">Ciência/Análise de Dados</h1>
                            <p className="col-span-2 row-span-2">
                                Em construção.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="grid grid-flow-col grid-rows-3 gap-4 w-auto">
                            <img src="src/assets/infrastructure.png" className="w-8 h-8 row-span-3" alt="icone web dev" />
                            <h1 className="text-lg col-span-2">Análise/Desenvolvimento de Infraestrutura</h1>
                            <p className="col-span-2 row-span-2">
                                Em construção.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                
            </section>
        </div>
    )
}

export default AboutMeEnglish
