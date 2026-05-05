import re

# Read app.js
with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to replace everything from id: 'uc3' down to the end of the courseModules array.
# First, let's find the start of uc3.
uc3_start_match = re.search(r"\s*\{\s*id:\s*'uc3',", content)
if not uc3_start_match:
    print("Could not find uc3 start")
    exit(1)

start_idx = uc3_start_match.start()

# Now find the end of the courseModules array.
# It ends right before "// Estado da Aplicação"
end_match = re.search(r"\];\s*// Estado da Aplicação", content)
if not end_match:
    print("Could not find end of courseModules array")
    exit(1)

end_idx = end_match.start()

# Let's define the new block for Mundo 3, 4, 5, 6
new_modules = """  { 
    id: 'uc3', 
    title: 'Mundo 3: O Reino da Lógica e dos Sistemas (UC III)', 
    description: 'Aprofunde-se no núcleo das máquinas: Lógica, Algoritmos, Sistemas Operacionais e Servidores.', 
    icon: '🐧',
    background: './assets/world_map_mario.png',
    badgeTitle: 'Administrador de Sistemas',
    badgeIcon: '🔐',
    lessons: [
      {
        id: 'uc3-1',
        title: 'Sprint 1: O Despertar da Lógica (Algoritmos e Arduíno)',
        image: './assets/electronics_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Para conversar com as máquinas, precisamos de <strong>Lógica de Programação</strong>. Utilizamos a lógica proposicional e booleana (Verdadeiro ou Falso) para construir estruturas de decisão (If/Else) e laços de repetição (For/While). Tudo isso se traduz em um <strong>Algoritmo</strong>: uma receita passo a passo para resolver um problema.</p>
          <p>Podemos aplicar isso diretamente no hardware utilizando microcontroladores como o <strong>Arduíno</strong>, unindo o software à eletrônica.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No laboratório (ou no Tinkercad), escreva um pequeno pseudocódigo para fazer um LED piscar de 1 em 1 segundo.</li>
            <li>Traduza esse pseudocódigo para a interface de blocos ou texto do Arduíno e faça o LED da placa brilhar!</li>
          </ol>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Mestre da Lógica! Envie uma foto do seu LED piscando no Arduíno (ou Tinkercad) e explique: Por que usamos uma estrutura de repetição (loop) neste código?"
      },
      {
        id: 'uc3-2',
        title: 'Sprint 2: Estruturas Avançadas (Busca e Ordenação)',
        image: './assets/boss_monster.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>À medida que os feitiços ficam complexos, precisamos armazenar dados em <strong>Vetores (Arrays)</strong>, <strong>Matrizes</strong>, Pilhas e Filas. Mas apenas guardar dados não basta: precisamos encontrá-los rápido.</p>
          <p>É aqui que entram os <strong>Algoritmos de Busca (Simples/Binária)</strong> e de <strong>Ordenação (Bubble Sort, Quicksort)</strong>. Para medirmos a velocidade de um código, utilizamos a <strong>Notação Big-O</strong>.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Pegue um baralho de cartas e tente ordená-lo usando o método "Bubble Sort" (comparando de duas em duas cartas).</li>
            <li>Faça uma Busca Binária mentalmente: Pense num número de 1 a 100. Faça o professor tentar adivinhar perguntando apenas "é maior ou menor?".</li>
          </ol>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "Sobre a Busca Binária, marque a opção correta:",
        quiz: {
            question: 'Por que a Busca Binária (O(log n)) é muito mais eficiente que a Busca Simples (Linear) em listas grandes?',
            options: [
                'A) Porque ela usa a placa de vídeo.',
                'B) Porque ela ignora metade da lista a cada verificação, desde que a lista esteja ordenada.',
                'C) Porque ela procura em todos os itens ao mesmo tempo usando processamento quântico.',
                'D) A Busca Simples é sempre mais rápida.'
            ],
            correctIndex: 1
        }
      },
      {
        id: 'uc3-3',
        title: 'Sprint 3: O Alicerce do Software (Arquitetura de SO)',
        image: './assets/os_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Todo computador e smartphone (Android/iOS) possui um <strong>Sistema Operacional (S.O.)</strong>. O coração do S.O. é o <strong>Kernel</strong>, que gerencia a memória, os processos e os dispositivos.</p>
          <p>Para testar diferentes reinos sem destruir o nosso, podemos usar <strong>Máquinas Virtuais e Emuladores</strong> (como o VirtualBox), que criam computadores de mentira dentro do seu computador de verdade!</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No Windows, abra o "Gerenciador de Tarefas" e observe a aba de Desempenho e Processos.</li>
            <li>No software VirtualBox, crie uma Máquina Virtual alocando 2GB de RAM e 20GB de disco.</li>
          </ol>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Envie uma captura de tela (Print) mostrando a sua Máquina Virtual criada e pronta para receber uma instalação!"
      },
      {
        id: 'uc3-4',
        title: 'Sprint 4: O Pinguim e a Janela (Windows e GNU/Linux)',
        image: './assets/os_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Enquanto o <strong>Windows</strong> brilha com sua Interface Gráfica, o <strong>GNU/Linux</strong> é o mestre silencioso dos servidores, focado em segurança, contas de usuários restritas e forte uso de Interface de Texto (Terminal).</p>
          <p>Compreender como configurar personalizações, criar pastas de trabalho, e gerenciar permissões em ambos os sistemas é essencial para a manutenção diária.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No Windows, acesse o Painel de Controle e altere a Imagem da Área de Trabalho e crie um novo Usuário Padrão.</li>
            <li>No terminal do GNU/Linux (ou numa VM), use comandos básicos como <code>ls</code>, <code>mkdir</code> e <code>chmod</code> para criar uma pasta e mudar suas permissões.</li>
          </ol>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Baseado na sua experiência prática: Qual você achou mais difícil de operar, o Windows ou o Terminal do Linux? Por quê?"
      },
      {
        id: 'uc3-5',
        title: 'Sprint 5: Os Mestres da Rede (Servidores Linux)',
        image: './assets/server_linux.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Quando a rede precisa de robustez, chamamos os servidores GNU/Linux. Eles não usam interface gráfica para poupar recursos. Neles, podemos configurar: <strong>Samba</strong> (para compartilhar arquivos com máquinas Windows), <strong>FTP</strong> (Transferência de arquivos), <strong>Apache</strong> (Servidor WEB para sites) e <strong>Proxy/Firewall</strong> (para filtrar e proteger a internet).</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Acesse o servidor Linux do laboratório via Acesso Remoto (SSH).</li>
            <li>Instale e configure um serviço básico como o Apache ou o Samba.</li>
            <li>Verifique o status do serviço e inicie-o.</li>
          </ol>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Descreva brevemente para que serve o serviço 'Samba' em uma rede que possui computadores com Windows e servidores com Linux."
      },
      {
        id: 'uc3-6',
        title: 'Sprint 6: O Catálogo Global (Windows Server)',
        image: './assets/server_windows.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>No mundo corporativo, o <strong>Windows Server</strong> reina com seu <strong>Active Directory (AD)</strong>. O AD é como o Catálogo Mágico da empresa: ele cria "Domínios", "Árvores" e "Florestas" para gerenciar milhares de contas de usuários de uma só vez.</p>
          <p>Usamos as <strong>GPOs (Group Policy)</strong> para proibir ou permitir ações. Por exemplo, podemos impedir que qualquer aluno mude o papel de parede dos computadores do laboratório aplicando uma GPO no servidor central!</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Numa Máquina Virtual com Windows Server, promova o servidor a Controlador de Domínio.</li>
            <li>Crie uma Unidade Organizacional (OU) chamada "Alunos" e crie 2 contas de usuários dentro dela.</li>
            <li>Acesse o Windows 10 de outra máquina virtual e faça login com a conta recém-criada no servidor.</li>
          </ol>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "O que é o Active Directory (AD) em um ambiente Windows Server?",
        quiz: {
            question: 'Qual a principal função do Active Directory?',
            options: [
                'A) Funciona como um antivírus que bloqueia downloads perigosos.',
                'B) É um serviço de diretório centralizado que gerencia contas de usuários, computadores e permissões em uma rede (Domínio).',
                'C) É o software responsável por criar e editar planilhas e documentos no servidor.',
                'D) É o painel que controla o overclock da placa-mãe do servidor.'
            ],
            correctIndex: 1
        }
      }
    ]
  },
  { 
    id: 'uc4', 
    title: 'Mundo 4: O Vale do Desenvolvimento (UC IV)', 
    description: 'Foca no desenvolvimento de páginas dinâmicas utilizando HTML, CSS, JavaScript, Arquitetura e Engenharia de Software.', 
    icon: '✨',
    background: './assets/world_map_uc3.png',
    badgeTitle: 'Mago Desenvolvedor',
    badgeIcon: '🪄',
    lessons: [
      {
        id: 'uc4-1',
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
        id: 'uc4-2',
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
        id: 'uc4-3',
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
        id: 'uc4-4',
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
        id: 'uc4-5',
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
    id: 'uc5', 
    title: 'Mundo 5: A Caverna dos Dados (UC V)', 
    description: 'Bancos de dados integrados a páginas web. Estruture, armazene e recupere informações com eficiência.', 
    icon: '🗄️',
    background: './assets/world_map_uc4.png',
    badgeTitle: 'DBA Mestre',
    badgeIcon: '💾',
    lessons: [
      {
        id: 'uc5-1',
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
    id: 'uc6', 
    title: 'Mundo 6: O Domínio do Boss (Projetos em Equipe)', 
    description: 'Projetos Dinâmicos - Forme sua "Agência Digital" virtual e execute os desafios complexos que unem tudo que você aprendeu.', 
    icon: '🚀',
    background: './assets/world_map_mario.png',
    badgeTitle: 'CEO Digital',
    badgeIcon: '🏆',
    lessons: [
      {
        id: 'uc6-1',
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
"""

new_content = content[:start_idx] + new_modules + content[end_idx:]

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated app.js successfully with Mundo 3 to 6.")
