import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace the content of the courseModules array starting from the second object { id: 'uc2', ... up to the end of the array.
# The first object is UC1 which ends with },
# Then comes { id: 'uc2', ...

new_modules = """  { 
    id: 'uc2', 
    title: 'Mundo 2: A Forja de Silício (UC II)', 
    description: 'Hardware, Eletrônica, Montagem de Computadores e Manutenção. A base física do mundo digital.', 
    icon: '⚙️',
    background: './assets/world_map_uc2.png',
    badgeTitle: 'Mestre da Forja',
    badgeIcon: '🛠️',
    lessons: [
      {
        id: 'uc2-1',
        title: 'Sprint 1: A Centelha da Vida (Eletrônica)',
        image: './assets/electronics_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Toda a magia dos computadores depende do controle preciso da energia. A <strong>Eletrônica Básica</strong> lida com o comportamento dos elétrons. Precisamos entender as grandezas físicas (Tensão, Corrente, Resistência e Potência) e a diferença entre condutores (que deixam a magia fluir), isolantes (que bloqueiam) e semicondutores (a base dos processadores atuais).</p>
          <p>Os componentes passivos (resistores, capacitores, diodos) e os <strong>transistores</strong> formam a base dos circuitos mágicos, permitindo operações lógicas e matemáticas na velocidade da luz.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No laboratório, identifique a diferença visual entre Resistores e Capacitores em uma placa-mãe antiga.</li>
            <li>Use o Multímetro para medir a voltagem de uma pilha e a continuidade de um cabo (teste do bipe).</li>
          </ol>

          <div class="highlight-box" style="background: rgba(139, 92, 246, 0.1); border-left-color: #8b5cf6;">
            <strong>Desafio de Guilda</strong><br>
            Crie um pequeno circuito elétrico acendendo um LED usando uma bateria e um resistor para não queimá-lo. 
          </div>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Engenheiro, tire uma foto do circuito funcionando ou do teste do multímetro e me explique: O que aconteceria se você ligasse o LED direto na bateria sem o resistor?"
      },
      {
        id: 'uc2-2',
        title: 'Sprint 2: A Anatomia da Máquina (Hardware)',
        image: './assets/motherboard_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>O coração do computador é a <strong>Placa-Mãe</strong>, a grande matriz que conecta todos os órgãos. O cérebro é o <strong>Processador (CPU)</strong>, que realiza os cálculos, e precisa de Dissipadores/Coolers para não derreter. A memória de curto prazo, rápida e volátil, é a <strong>Memória RAM</strong>, enquanto a memória permanente vive nos <strong>Discos (HDDs/SSDs/Flashes)</strong>.</p>
          <p>Também temos a Memória ROM (que guarda a BIOS e o POST, instintos básicos da máquina ao acordar) e Periféricos para a comunicação com nosso mundo físico.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Observe uma placa-mãe desligada. Localize: o Soquete do Processador, os Slots de RAM, os conectores SATA (para discos) e os Slots PCIe (para placa de vídeo).</li>
            <li>Identifique onde fica a bateria da placa-mãe (responsável por manter o relógio e a CMOS).</li>
          </ol>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "Vamos testar sua visão de Raio-X! Para que serve a memória RAM em comparação com o Disco SSD?",
        quiz: {
            question: 'Qual é a principal diferença entre a Memória RAM e o Armazenamento (SSD/HD)?',
            options: [
                'A) A RAM guarda fotos para sempre, o HD guarda o sistema operacional temporariamente.',
                'B) A RAM é a memória volátil onde rodam os programas abertos, enquanto o SSD armazena os dados de forma permanente mesmo sem energia.',
                'C) A RAM resfria o processador, o HD processa os cálculos visuais.',
                'D) Não há diferença, ambas servem para exibir vídeo.'
            ],
            correctIndex: 1
        }
      },
      {
        id: 'uc2-3',
        title: 'Sprint 3: O Ritual da Montagem (Prática)',
        image: './assets/assembly_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>A montagem de um computador é um ritual sagrado. Exige <strong>Equipamentos de Proteção</strong>, ferramentas adequadas (Chaves Philips, pulseira antiestática) e muito cuidado no manuseio das peças para evitar curtos ou quebras.</p>
          <p>O processo começa pela fixação do processador, aplicação de pasta térmica, instalação do cooler e das memórias, tudo antes de colocar a placa-mãe no <strong>Gabinete</strong>. Por fim, a instalação da <strong>Fonte de Alimentação</strong> (que transforma energia alternada em contínua) e a organização dos cabos.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Com o grupo, monte ou desmonte parcialmente um computador do laboratório.</li>
            <li>Preste muita atenção ao conectar os cabos do Painel Frontal (Power, Reset, LEDs).</li>
            <li>Ligue a máquina e acesse o SETUP da BIOS (geralmente teclando DEL ou F2 na inicialização).</li>
          </ol>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Ritual completo! Mostre-me uma foto do computador que vocês montaram ligando, ou da tela do SETUP da BIOS, e comente: Qual foi a parte mais difícil da montagem?"
      },
      {
        id: 'uc2-4',
        title: 'Sprint 4: O Sopro do Espírito (Sistemas Operacionais)',
        image: './assets/os_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Uma máquina montada sem sistema é apenas metal frio. O <strong>Sistema Operacional (Windows, GNU/Linux)</strong> é a alma que permite a comunicação entre o usuário e o Hardware.</p>
          <p>A jornada envolve criar um Pendrive de Boot (inicializável), gerenciar o particionamento do disco rígido, formatar, instalar o S.O. e, crucialmente, instalar os <strong>Drivers</strong> (os tradutores que ensinam o S.O. a usar a placa de vídeo, som, rede, etc.).</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Usando ferramentas como Rufus ou Ventoy, prepare um pendrive com uma imagem ISO de um S.O.</li>
            <li>Dê boot no computador pelo pendrive.</li>
            <li>Avance pela instalação até a etapa de particionamento (cuidado para não apagar dados importantes do laboratório, siga as ordens do Mestre Professor!).</li>
          </ol>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "O que é um 'Driver' de hardware e por que o computador pode ficar sem som ou sem internet logo após formatarmos o Windows se não instalarmos os drivers?"
      },
      {
        id: 'uc2-5',
        title: 'Sprint 5: Os Guardiões da Durabilidade (Manutenção)',
        image: './assets/maintenance_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Para garantir que a magia dure anos, precisamos da <strong>Manutenção Preventiva</strong> (limpeza física, troca de pasta térmica, desfragmentação de discos magnéticos) e <strong>Corretiva</strong> (quando a máquina para e precisamos diagnosticar qual peça falhou).</p>
          <p>A proteção virtual também faz parte: instalação de Antivírus, Firewall, softwares de Segurança e, a magia mais poderosa de todas: o <strong>Backup</strong> (A cópia de segurança em discos externos ou nuvem para acesso remoto).</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Realize uma limpeza de componentes usando pincel e álcool isopropílico.</li>
            <li>No S.O., configure uma rotina básica de Backup ou crie um Ponto de Restauração do Windows.</li>
            <li>Instale um software utilitário de diagnóstico (ex: CPU-Z ou HWMonitor).</li>
          </ol>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "Um cliente relata que o computador desliga sozinho sempre que ele tenta jogar. Qual é o diagnóstico mais provável e a ação corretiva recomendada?",
        quiz: {
            question: 'Diagnóstico de Hardware: O PC desliga durante o uso intenso (jogos). O que é?',
            options: [
                'A) O Antivírus expirou, bloqueando os jogos.',
                'B) Superaquecimento do processador ou placa de vídeo. É necessário limpar o cooler e trocar a pasta térmica.',
                'C) Falta instalar o driver do teclado.',
                'D) O cabo de rede está com a crimpagem errada.'
            ],
            correctIndex: 1
        }
      }
    ]
  },
  { 
    id: 'uc3', 
    title: 'Mundo 3: O Vale do Desenvolvimento (UC III)', 
    description: 'Foca no desenvolvimento de páginas dinâmicas utilizando HTML, CSS, JavaScript, Arquitetura e Engenharia de Software.', 
    icon: '✨',
    background: './assets/world_map_uc3.png',
    badgeTitle: 'Mago Desenvolvedor',
    badgeIcon: '🪄',
    lessons: [
      {
        id: 'uc3-1',
        title: 'Aula 1: HTML e o Famoso "UI/UX"',
        content: `
          <h4>Desvendando o Alfabeto da Web (HTML5)</h4>
          <p>O <strong>HTML (HyperText Markup Language)</strong> não é uma linguagem de programação, mas sim uma linguagem de marcação. Pense no HTML como os tijolos de uma casa: ele apenas constrói a estrutura (títulos, parágrafos, formulários).</p>
          
          <div class="highlight-box" style="background: rgba(139, 92, 246, 0.1); border-left-color: #8b5cf6;">
            <strong>O que significa Formulario, UI, UX, Ergonomia e Acessibilidade?</strong><br>
            Antes de programarmos, precisamos entender o idioma dos designers:<br><br>
            <ul>
              <li><strong>UI (Interface do Usuário):</strong> É tudo aquilo que você *vê* na tela. Os botões, as cores, os menus. É a aparência.</li>
              <li><strong>UX (Experiência do Usuário):</strong> É o que você *sente* ao usar. O aplicativo é rápido? É frustrante achar o botão de "Comprar"? Isso é a experiência.</li>
              <li><strong>Ergonomia Web:</strong> É criar botões que não sejam pequenos demais para o dedo no celular, e textos que não doam os olhos para ler.</li>
              <li><strong>Acessibilidade (a11y):</strong> É programar pensando em pessoas com deficiência. Ex: Leitores de tela para cegos lerem a sua página.</li>
              <li><strong>Formulário:</strong> É aquela caixa onde você digita seu nome e senha para fazer login (campos de input).</li>
            </ul>
          </div>
        `,
        xpReward: 50,
        type: 'text',
        robotMessage: "Agora que você domina o vocabulário: Por que aplicar critérios de 'Ergonomia' e 'Acessibilidade' ao fazer um Formulário de Login é tão importante para o sucesso de um site?"
      },
      {
        id: 'uc3-2',
        title: 'Aula 2: CSS na Prática (Minigame)',
        content: `
          <h4>A Magia das Cores e Posições (CSS3)</h4>
          <p>Se o HTML são os tijolos, o <strong>CSS (Cascading Style Sheets)</strong> é a pintura e os móveis da casa.</p>
          <p>Um dos maiores desafios do CSS no passado era colocar as coisas lado a lado na tela. Hoje, nós usamos uma tecnologia chamada <strong>Flexbox</strong> para organizar o layout com facilidade.</p>
          
          <h4>🕹️ Hora de Jogar: Flexbox Froggy</h4>
          <p>A teoria só faz sentido na prática! Tente usar comandos de CSS como <code>justify-content: flex-end;</code> ou <code>center</code> para ajudar o sapinho a chegar na vitória-régia correta no jogo abaixo. Você consegue passar das primeiras 4 fases?</p>
          
          <div class="game-container">
            <iframe class="game-frame" src="https://flexboxfroggy.com/#pt-br" title="Jogo Flexbox Froggy"></iframe>
          </div>
        `,
        xpReward: 50,
        type: 'text',
        robotMessage: "Bela jogada! Diga para mim: até que fase você conseguiu chegar no jogo do sapinho e qual foi o comando CSS que você mais usou para movê-lo na tela?"
      },
      {
        id: 'uc3-3',
        title: 'Aula 3: Interatividade com JavaScript',
        content: `
          <h4>A Inteligência da Página</h4>
          <p>O HTML constrói e o CSS pinta, mas quem dá movimento e inteligência é o <strong>JavaScript (JS)</strong>. Ele lida com o comportamento da tela.</p>
          
          <h4>Manipulando o DOM</h4>
          <p>O <strong>DOM (Document Object Model)</strong> é simplesmente o nome técnico que damos para a "Árvore de elementos do HTML" quando vista pelo JavaScript. Com o JS, você pode interagir com o DOM em tempo real.</p>
          <pre style="background:#1e1e1e; color:#d4d4d4; padding:15px; border-radius:8px; overflow-x:auto; margin: 15px 0;"><code>// Capturando um botão do HTML (DOM)
const botao = document.getElementById('meuBotao');

// Adicionando um ouvinte de clique (Event Listener)
botao.addEventListener('click', function() {
    alert('Você clicou em mim!');
    document.body.style.backgroundColor = 'purple';
});</code></pre>
        `,
        xpReward: 50,
        type: 'choice',
        robotMessage: "Vamos ver se pegou o conceito! Marque a correta sobre o DOM:",
        quiz: {
            question: 'O que significa manipular o DOM usando JavaScript em uma página web?',
            options: [
                'A) Significa estilizar a página apenas com cores CSS.',
                'B) Significa interagir dinamicamente com os elementos (botões, textos) do HTML que estão na tela.',
                'C) É o ato de salvar dados permanentemente em um banco SQL.',
                'D) É o processo de hospedar o site no servidor.'
            ],
            correctIndex: 1
        }
      },
      {
        id: 'uc3-4',
        title: 'Aula 4: Ciclo de Vida e Requisitos',
        content: `
          <h4>A "Crise do Software"</h4>
          <p>Nos anos 60, criar sistemas virou um caos. Os prazos estouravam e o código era uma bagunça. Para resolver isso, surgiu a <strong>Engenharia de Software</strong>, forçando o programador a "planejar antes de digitar".</p>
          
          <h4>O Que o Sistema Precisa Ter? (Os Requisitos)</h4>
          <p>Para não programar a coisa errada, dividimos as necessidades em dois grupos:</p>
          <ul>
            <li><strong>Requisitos Funcionais (RF):</strong> São as "Funções". O que o sistema DEVE fazer.<br>
              <em>Ex: "O sistema deve permitir login com email e senha."</em>
            </li>
            <li><strong>Requisitos Não-Funcionais (RNF):</strong> São as "Restrições de Qualidade". Como o sistema deve se comportar.<br>
              <em>Ex: "O login deve ser super rápido (menos de 2 segundos)" ou "A senha deve ser criptografada."</em>
            </li>
          </ul>
        `,
        xpReward: 50,
        type: 'text',
        robotMessage: "Imagine que você está criando um app tipo o 'iFood'. Dê um exemplo inventado por você de um Requisito Funcional e um Requisito Não Funcional que esse app teria."
      },
      {
        id: 'uc3-5',
        title: 'Aula 5: Modelagem Visual (UML)',
        content: `
          <h4>Desenhando a Planta Baixa do Sistema</h4>
          <p>Um Engenheiro Civil não constrói um prédio sem uma Planta Baixa. Nós não devemos construir sistemas sem desenhar! A <strong>UML (Unified Modeling Language)</strong> é a linguagem visual usada mundialmente para isso.</p>
          
          <p>O <strong>Diagrama de Casos de Uso</strong> é o mais simples deles. Ele mostra "quem" faz "o que" no sistema.</p>
          <ul>
            <li><strong>Ator:</strong> O usuário (representado por um boneco palito). Ex: Cliente.</li>
            <li><strong>Caso de Uso:</strong> A ação (representada por uma bolinha oval). Ex: Escolher Produto.</li>
          </ul>
        `,
        xpReward: 50,
        type: 'choice',
        robotMessage: "Teste seus conhecimentos de arquiteto:",
        quiz: {
            question: 'Se você estivesse desenhando um Diagrama de Caso de Uso UML para um caixa eletrônico, quem seriam os possíveis Atores?',
            options: [
                'A) As funções "Sacar" e "Depositar".',
                'B) O banco de dados MySQL.',
                'C) O "Cliente" e o "Administrador do Banco".',
                'D) A linguagem HTML.'
            ],
            correctIndex: 2
        }
      }
    ]
  },
  { 
    id: 'uc4', 
    title: 'Mundo 4: A Caverna dos Dados (UC IV)', 
    description: 'Bancos de dados integrados a páginas web. Estruture, armazene e recupere informações com eficiência.', 
    icon: '🗄️',
    background: './assets/world_map_uc4.png',
    badgeTitle: 'DBA Mestre',
    badgeIcon: '💾',
    lessons: [
      {
        id: 'uc4-1',
        title: 'Aula 1: Modelagem e o Jogo do SQL',
        content: `
          <h4>A Memória do Mundo</h4>
          <p>A web é movida a dados. Tudo que você curte, compra ou comenta precisa ser salvo para sempre em tabelas através de um <strong>Banco de Dados Relacional</strong>.</p>
          <p>Para conversar com o banco e buscar informações criminosas (ou de clientes), utilizamos o idioma <strong>SQL (Structured Query Language)</strong>, com o famoso comando <code>SELECT * FROM tabela</code>.</p>
          
          <h4>🕹️ Hora de Jogar: SQL Murder Mystery</h4>
          <p>Acorreu um crime! O único jeito de descobrir o culpado é vasculhando o banco de dados da polícia de SQL City. Brinque no terminal interativo abaixo usando o comando inicial <code>SELECT * FROM crime_scene_report;</code> para achar as pistas iniciais.</p>
          
          <div class="game-container" style="background: white;">
            <iframe class="game-frame" src="https://mystery.knightlab.com/walkthrough.html" title="Jogo SQL Murder Mystery"></iframe>
          </div>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Incrível! Qual comando SQL você mais gostou de usar e como ele te ajudou a explorar os dados na tela acima?"
      }
    ]
  },
  { 
    id: 'uc5', 
    title: 'Mundo 5: O Domínio do Boss (Projetos em Equipe)', 
    description: 'Projetos Dinâmicos - Forme sua "Agência Digital" virtual e execute os desafios complexos que unem tudo que você aprendeu.', 
    icon: '🚀',
    background: './assets/world_map_mario.png',
    badgeTitle: 'CEO Digital',
    badgeIcon: '🏆',
    lessons: [
      {
        id: 'uc5-1',
        title: 'Projeto Final: A Batalha contra a Ignorância',
        image: './assets/boss_monster.png',
        content: `
          <h4>Aplicando o Conhecimento na Prática</h4>
          <p>Chegou a grande etapa final. A tecnologia deve servir para melhorar a sociedade. Reúna-se com os colegas e formem uma "Agência Digital".</p>
          
          <div class="highlight-box" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
            <strong>📋 O Grande Desafio</strong><br>
            A equipe deve identificar um problema real na comunidade (ex: lixo, saúde, pequenos negócios) e projetar a ideia de um <strong>Aplicativo ou Site Web</strong> que solucionaria isso.
          </div>

          <h4>O que deve ser entregue?</h4>
          <ol>
            <li><strong>Nome do App/Site</strong> e o problema que ele resolve.</li>
            <li><strong>Requisitos:</strong> 2 Requisitos Funcionais vitais que o app teria.</li>
            <li><strong>Tabelas SQL:</strong> Pelo menos 2 tabelas de Banco de Dados essenciais que fariam o sistema funcionar por trás.</li>
          </ol>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "O grande momento! Descrevam detalhadamente abaixo todo o escopo do projeto da Agência de vocês, incluindo os requisitos e as tabelas do banco de dados, como foi pedido na aula."
      }
    ]
  }
];"""

start_str = "  {\n    id: 'uc2',"
end_str = "];\n\n// Estado da Aplicação"

start_idx = content.find("  { \n    id: 'uc2'")
if start_idx == -1:
    start_idx = content.find("  {\n    id: 'uc2'")
if start_idx == -1:
    start_idx = content.find("  { \n    id: 'uc2', \n    title: 'Mundo 2")

# regex search to be safe
import re
match = re.search(r"  \{ \n    id: 'uc2',", content)
if match:
    start_idx = match.start()
else:
    print("Could not find start idx")

match_end = re.search(r"\];\n\n// Estado da Aplicação", content)
if match_end:
    end_idx = match_end.start()
else:
    print("Could not find end idx")

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_modules + content[end_idx:]
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated successfully")
else:
    print(f"start: {start_idx}, end: {end_idx}")

