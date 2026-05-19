// Configuração do PWA - Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Registrado!', reg.scope))
      .catch(err => console.log('Falha no Service Worker', err));
  });
}

// Lógica de Instalação do PWA
let deferredPrompt;
const installBanner = document.getElementById('install-banner');
const installBtn = document.getElementById('install-btn');
const closeInstallBtn = document.getElementById('close-install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBanner.classList.remove('hidden');
});

installBtn.addEventListener('click', () => {
  installBanner.classList.add('hidden');
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    }
    deferredPrompt = null;
  });
});

closeInstallBtn.addEventListener('click', () => {
  installBanner.classList.add('hidden');
});

// Dados Iniciais dos Módulos: Curso Rico, Lúdico e Livre de Jargões
const courseModules = [
  {
    id: 'uci-1',
    title: 'Mundo 1: Infraestrutura Arcana (UC I)',
    description: 'Compreenda os fundamentos das redes, a magia da comunicação de dados e a arquitetura física que sustenta o mundo digital.',
    icon: '🌐',
    background: './assets/world_map_uc1.png',
    badgeTitle: 'Guardião da Rede',
    badgeIcon: '🛡️',
    lessons: [
      {
        id: 'uci-1-1',
        title: 'Sprint 1: O DNA da Conectividade (Teoria e Comunicação)',
        image: './assets/network_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Neste semestre, você inicia sua jornada compreendendo como os dispositivos se conectam e trocam informações. Uma <strong>Rede de Computadores</strong> é formada pela interligação de dispositivos autônomos que cooperam entre si por meio de regras padronizadas (protocolos) para compartilhar recursos e serviços.</p>
          <p>A <strong>Comunicação de Dados</strong> é o processo de envio e recepção dessas informações. Ela envolve cinco elementos essenciais: o <strong>Emissor</strong> (quem envia), o <strong>Receptor</strong> (quem recebe), a <strong>Mensagem</strong> (o dado em si), o <strong>Meio de Transmissão</strong> (o caminho físico) e os <strong>Protocolos</strong> (as regras do idioma).</p>
          <p>Os dados podem ser transmitidos de forma <strong>Analógica</strong> ou <strong>Digital</strong>, utilizando codificações que garantem a integridade e segurança da informação durante o trajeto.</p>

          <div class="highlight-box" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981; margin-top: 20px;">
            <strong>✨ Item Escondido:</strong> Ao longo do texto, pacotes de dados perdidos podem ser encontrados. 
            <span style="cursor:pointer; font-size: 1.2rem;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 100; showToast('Você capturou um Pacote de Dados Raro! +100 Moedas', '📦'); saveStudentData(); this.style.opacity='0.3'; }">📦</span>
          </div>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Identifique em sua casa ou escola: quem é o <strong>Emissor</strong> e quem é o <strong>Meio</strong> quando você envia um WhatsApp?</li>
            <li>Desenhe o esquema básico da comunicação (Emissor -> Meio -> Receptor) e identifique onde entram os protocolos.</li>
          </ol>
        `,
        xpReward: 150,
        type: 'choice',
        robotMessage: "Do ponto de vista teórico, como podemos definir uma rede de computadores?",
        quiz: {
            question: 'O que define melhor uma rede de computadores segundo a teoria?',
            options: [
                'A) Um conjunto de cabos coloridos jogados em uma sala.',
                'B) Um sistema distribuído de dispositivos autônomos que cooperam por meio de regras de comunicação.',
                'C) Apenas a conexão Wi-Fi do celular.',
                'D) Um computador isolado que não compartilha dados.'
            ],
            correctIndex: 1
        }
      },
      {
        id: 'uci-1-2',
        title: 'Sprint 2: Arquiteturas de Outros Mundos (OSI e TCP/IP)',
        image: './assets/network_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Para que a comunicação global funcione, utilizamos modelos de referência. O <strong>Modelo OSI</strong> organiza a rede em 7 camadas teóricas: 1. Física, 2. Enlace, 3. Rede, 4. Transporte, 5. Sessão, 6. Apresentação e 7. Aplicação. Cada camada resolve um problema específico, facilitando o diagnóstico.</p>
          <p>Já a <strong>Arquitetura TCP/IP</strong> é a base prática da internet, dividida em 4 camadas: Acesso à Rede, Internet, Transporte e Aplicação. O <strong>Protocolo IP</strong> cuida do endereço (onde chegar), enquanto o <strong>TCP</strong> garante que os dados cheguem inteiros e na ordem certa.</p>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>🔍 Dica de Especialista:</strong> Se a internet cair, o técnico olha primeiro a camada 1 (Física - cabos). Se o IP estiver errado, o problema é na camada 3 (Rede).
            <span style="cursor:pointer; margin-left: 10px;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 150; showToast('Manual do Administrador Encontrado! +150 Moedas', '📜'); saveStudentData(); this.style.opacity='0.3'; }">📜</span>
          </div>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Liste as 7 camadas do modelo OSI em ordem crescente (da base para o topo).</li>
            <li>Pesquise: Qual camada do modelo OSI é responsável pelo roteamento (endereçamento IP)?</li>
          </ol>
        `,
        xpReward: 150,
        type: 'choice',
        robotMessage: "Qual é a principal finalidade da divisão em camadas no modelo OSI?",
        quiz: {
            question: 'Por que o modelo OSI é dividido em 7 camadas?',
            options: [
                'A) Para facilitar o entendimento, o desenvolvimento e a solução de problemas de forma modular.',
                'B) Para tornar o sistema mais lento e complexo.',
                'C) Porque existem 7 continentes no mundo.',
                'D) Para que cada camada use um cabo de cor diferente.'
            ],
            correctIndex: 0
        }
      },
      {
        id: 'uci-1-3',
        title: 'Sprint 3: Fronteiras Geográficas e Meios Físicos',
        image: './assets/network_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>As redes são classificadas pela sua abrangência. As <strong>LANs (Local Area Networks)</strong> são redes locais (casas, escolas) com alta velocidade e baixa latência. As <strong>WANs (Wide Area Networks)</strong> conectam grandes áreas (cidades, países) e dependem de infraestruturas externas de provedores.</p>
          <p>Toda essa comunicação viaja por <strong>Meios Físicos</strong>: sinais elétricos (cobre), ópticos (fibra) ou ondas eletromagnéticas (wireless). A escolha do meio afeta a largura de banda, o alcance e a latência da rede.</p>

          <div class="highlight-box" style="background: rgba(245, 158, 11, 0.1); border-left-color: #f59e0b; margin-top: 20px;">
            <strong>⚡ Fato Curioso:</strong> A fibra óptica transmite dados por pulsos de luz, sendo imune a interferências magnéticas!
            <span style="cursor:pointer; margin-left: 10px;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 120; showToast('Fragmento de Cristal Óptico! +120 Moedas', '💎'); saveStudentData(); this.style.opacity='0.3'; }">💎</span>
          </div>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Dê um exemplo real de uma LAN e de uma WAN que você utiliza no dia a dia.</li>
            <li>Explique por que uma rede industrial pode preferir fibra óptica em vez de cabos de cobre.</li>
          </ol>
        `,
        xpReward: 150,
        type: 'text',
        robotMessage: "Explique a diferença fundamental entre redes LAN e WAN quanto à sua abrangência e administração.",
      },
      {
        id: 'uci-1-4',
        title: 'Sprint 4: A Forja do Cabeamento (Par Trançado e Fibra)',
        image: './assets/cables_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>O <strong>Cabo de Par Trançado (UTP)</strong> é o herói das LANs. Seus fios são entrelaçados para cancelar interferências. Já o <strong>Cabo Coaxial</strong> possui uma blindagem robusta, e a <strong>Fibra Óptica</strong> reina nas conexões de longa distância e alta performance devido à sua imunidade a ruídos.</p>
          <p>Na prática, o par trançado é o mais comum devido ao custo-benefício, enquanto a fibra é essencial para interligar prédios ou fornecer internet de alta capacidade.</p>

          <div class="highlight-box" style="background: rgba(139, 92, 246, 0.1); border-left-color: #8b5cf6; margin-top: 20px;">
            <strong>🛠️ Ferramenta de Mestre:</strong> Para montar um cabo de rede, você precisará de um alicate de crimpagem e conectores RJ-45.
            <span style="cursor:pointer; margin-left: 10px;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 200; showToast('Alicate de Ouro Encontrado! +200 Moedas', '🔧'); saveStudentData(); this.style.opacity='0.3'; }">🔧</span>
          </div>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Pesquise as categorias de cabos UTP (Cat5e, Cat6, Cat6a). Qual a diferença de velocidade entre elas?</li>
            <li>Desenhe os 8 fios coloridos internos de um cabo de rede e tente memorizar a sequência do padrão T568A.</li>
          </ol>
        `,
        xpReward: 150,
        type: 'text',
        robotMessage: "Descreva as características dos meios físicos cabeados e destaque a principal diferença entre par trançado e fibra óptica.",
      },
      {
        id: 'uci-1-5',
        title: 'Sprint 5: Engenharia e Normas (Cabeamento Estruturado)',
        image: './assets/cables_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>O <strong>Cabeamento Estruturado</strong> é a padronização que garante organização e facilidade de manutenção. Baseia-se em normas internacionais como a <strong>TIA/EIA-568</strong> e a <strong>ISO/IEC 11801</strong>.</p>
          <p>Uma rede estruturada utiliza elementos como <strong>Racks</strong> (armários), <strong>Patch Panels</strong> (painéis de manobra), tomadas de rede identificadas e certificação técnica, permitindo que a infraestrutura dure muitos anos e suporte novas tecnologias.</p>

          <div class="highlight-box" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981; margin-top: 20px;">
            <strong>📊 Visão de Projeto:</strong> Um bom projeto de rede evita o "emaranhado de fios" e reduz drasticamente o tempo de manutenção.
            <span style="cursor:pointer; margin-left: 10px;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 150; showToast('Esquema Técnico Perfeito! +150 Moedas', '📐'); saveStudentData(); this.style.opacity='0.3'; }">📐</span>
          </div>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Explique a importância de etiquetar cada cabo e tomada em uma empresa.</li>
            <li>O que acontece se uma empresa não seguir as normas de cabeamento ao montar sua rede?</li>
          </ol>
        `,
        xpReward: 150,
        type: 'text',
        robotMessage: "Qual é a função das normas de cabeamento como a TIA/EIA-568 e por que segui-las é uma exigência profissional?",
      },
      {
        id: 'uci-1-6',
        title: 'Sprint 6: Ondas Invisíveis e Alternativas (Wireless e Satélite)',
        image: './assets/network_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>As <strong>Redes Sem Fio (Wireless)</strong> utilizam ondas de rádio (Wi-Fi, Bluetooth) para oferecer mobilidade. Elas operam em frequências e canais definidos para evitar interferências. No entanto, exigem cuidados extras com segurança e controle de acesso.</p>
          <p>Existem também <strong>Tecnologias Alternativas</strong> como o <strong>PLC</strong> (dados via rede elétrica), rádio enlace, redes móveis (4G/5G) e o <strong>Satélite</strong>, que é a salvação para áreas rurais e remotas.</p>

          <div class="highlight-box" style="background: rgba(139, 92, 246, 0.1); border-left-color: #8b5cf6; margin-top: 20px;">
            <strong>📡 Sinal Forte:</strong> As redes 5G prometem latências baixíssimas, permitindo até cirurgias remotas!
            <span style="cursor:pointer; margin-left: 10px;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 100; showToast('Antena de Ganho Épico! +100 Moedas', '📡'); saveStudentData(); this.style.opacity='0.3'; }">📡</span>
          </div>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Identifique 3 dispositivos na sua casa que usam Bluetooth e 3 que usam Wi-Fi.</li>
            <li>Qual a principal desvantagem da internet via satélite comparada à fibra óptica (dica: pense na distância até o espaço)?</li>
          </ol>
        `,
        xpReward: 150,
        type: 'choice',
        robotMessage: "Sobre tecnologias sem fio, qual opção descreve uma característica das redes móveis 5G?",
        quiz: {
            question: 'Qual a principal evolução trazida pelo 5G em relação ao 4G?',
            options: [
                'A) Funciona sem precisar de energia elétrica.',
                'B) Só funciona em dias de sol.',
                'C) Maior velocidade de transmissão e baixíssima latência.',
                'D) Usa cabos de cobre mais grossos.'
            ],
            correctIndex: 2
        }
      },
      {
        id: 'uci-1-7',
        title: 'Sprint 7: O Domínio dos Ativos (Roteadores, Switches e VLANs)',
        image: './assets/router_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Os <strong>Switches</strong> conectam dispositivos em uma mesma rede local de forma inteligente, usando endereços físicos (MAC). Já o <strong>Roteador</strong> é o mestre que interliga redes diferentes, encaminhando pacotes via endereços IP.</p>
          <p>Uma técnica avançada é a criação de <strong>VLANs (Redes Virtuais)</strong>, que permite segmentar logicamente uma rede física em várias redes independentes, aumentando a segurança e reduzindo o tráfego desnecessário.</p>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>🛡️ Segurança:</strong> Com VLANs, você pode isolar a rede dos convidados da rede dos servidores da empresa!
            <span style="cursor:pointer; margin-left: 10px;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 250; showToast('Chave de Acesso ao Switch Core! +250 Moedas', '🔑'); saveStudentData(); this.style.opacity='0.3'; }">🔑</span>
          </div>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Acesse a interface do seu roteador (geralmente 192.168.0.1) e veja quantos dispositivos estão conectados agora.</li>
            <li>Explique por que um Switch é mais eficiente que um antigo Hub.</li>
          </ol>
        `,
        xpReward: 200,
        type: 'text',
        robotMessage: "Explique a finalidade da criação de VLANs e como essa prática contribui para a segurança da rede.",
      },
      {
        id: 'uci-1-8',
        title: 'Sprint 8: Planejamento e Visão Sistêmica (2º Bimestre)',
        image: './assets/world_map_uc1.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Ao iniciar o 2º bimestre, focamos no <strong>Planejamento de uma Rede</strong>. Um projeto bem estruturado começa com o levantamento das necessidades do cliente, o desenho da topologia e a escolha correta dos equipamentos.</p>
          <p>O profissional deve ter uma visão sistêmica para antecipar problemas, otimizar recursos e garantir que a rede possa crescer no futuro sem precisar ser totalmente refeita.</p>

          <div class="highlight-box" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981; margin-top: 20px;">
            <strong>🏗️ Fundação Sólida:</strong> Planejar economiza tempo e dinheiro, evitando o retrabalho.
            <span style="cursor:pointer; margin-left: 10px;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 150; showToast('Planta Baixa de Rede Aprovada! +150 Moedas', '🏗️'); saveStudentData(); this.style.opacity='0.3'; }">🏗️</span>
          </div>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Imagine que você vai montar a rede de uma pequena biblioteca com 5 computadores. Quais equipamentos básicos você compraria?</li>
            <li>Por que é importante documentar a rede (fazer um mapa de onde passam os cabos)?</li>
          </ol>
        `,
        xpReward: 200,
        type: 'text',
        robotMessage: "Por que a elaboração de um projeto de rede estruturada é essencial antes da instalação física?",
      },
      {
        id: 'uci-1-9',
        title: 'Sprint 9: O Grande Exame do Guardião da Rede',
        image: './assets/boss_monster.png',
        content: `
          <h4>Desafio Final do Mundo 1</h4>
          <p>Você percorreu todo o caminho, desde os sinais elétricos até o planejamento lógico. Agora, prove que é um verdadeiro Guardião da Rede respondendo a este exame consolidado.</p>
          <ol style="margin-left: 20px;">
            <li>Defina o que é um protocolo de comunicação.</li>
            <li>Cite as camadas do modelo TCP/IP.</li>
            <li>Qual a principal vantagem da fibra óptica sobre o par trançado?</li>
            <li>O que é uma VLAN e para que serve?</li>
            <li>Qual a diferença entre um Switch e um Roteador?</li>
          </ol>

          <div class="highlight-box" style="background: rgba(239, 68, 68, 0.1); border-left-color: #ef4444; margin-top: 20px;">
            <strong>🏆 Tesouro Final:</strong> O conhecimento é o maior prêmio, mas um bônus de moedas não faz mal!
            <span style="cursor:pointer; margin-left: 10px;" onclick="if(!this.collected){ this.collected=true; currentUser.coins = (currentUser.coins || 0) + 500; showToast('BAÚ DO CONHECIMENTO ABERTO! +500 Moedas', '💰'); saveStudentData(); this.style.opacity='0.3'; }">💰</span>
          </div>
        `,
        xpReward: 500,
        type: 'text',
        robotMessage: "Parabéns, Herói! Escreva um resumo detalhado respondendo às 5 questões acima para fechar este Mundo com chave de ouro.",
      }
    ]
  },
  { 
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
          <p>Toda a magia dos computadores depende do controle da energia. A <strong>Eletrônica Básica</strong> lida com Tensão (Volts), Corrente (Amperes) e Resistência (Ohms). Os componentes passivos (resistores, capacitores) e os <strong>transistores</strong> formam a base dos circuitos.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No laboratório, meça a voltagem de uma pilha com um Multímetro.</li>
            <li><strong>Adaptação Mobile:</strong> Como não há multímetro no celular, pesquise na internet qual é a diferença entre um Resistor e um Capacitor e anote as funções de cada um.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=vV6yQd9A86M" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Mundo da Elétrica: Tensão, Corrente e Resistência</a></li>
              <li><a href="https://www.youtube.com/watch?v=0kH8fG-t6Fk" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Como usar um Multímetro</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Envie uma foto do teste do multímetro ou do resumo que você fez sobre Resistores e Capacitores!"
      },
      {
        id: 'uc2-2',
        title: 'Sprint 2: A Anatomia da Máquina (Hardware)',
        image: './assets/motherboard_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>O coração é a <strong>Placa-Mãe</strong>. O cérebro é o <strong>Processador (CPU)</strong>. A memória de curto prazo (rápida) é a <strong>RAM</strong>, enquanto a memória permanente vive nos <strong>Discos (HDDs/SSDs)</strong>.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Observe uma placa-mãe física e aponte onde fica o Processador e a RAM.</li>
            <li><strong>Adaptação Mobile:</strong> Acesse imagens de placas-mãe na internet e estude a posição dos conectores. Escreva um resumo sobre a diferença de velocidade entre HDD e SSD.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=8V3-L1X1Jow" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Peças de um PC explicadas! (Adrenaline)</a></li>
              <li><a href="https://www.youtube.com/watch?v=2Tz8DIf1TMA" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 HDD x SSD x NVMe (Qual a diferença?)</a></li>
            </ul>
          </div>
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
          <p>A montagem exige pulseira antiestática e cuidado. Começamos pelo processador, pasta térmica, cooler, memórias RAM e depois fixamos a placa no gabinete, antes de conectar a Fonte de Alimentação (que transforma energia alternada da tomada em contínua para o PC).</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No laboratório, desmonte e monte um computador.</li>
            <li><strong>Adaptação Celular/Web:</strong> Assista ao vídeo de montagem abaixo e liste no caderno a ordem correta das peças a serem encaixadas, ou jogue o app "PC Creator" no celular.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=YmDqK5DXYz0" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Guia de Montagem de PC (MW Informática)</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Ritual completo! Mostre-me uma foto do computador que vocês montaram, ou a lista anotada no seu caderno com os passos de montagem retirados do vídeo."
      },
      {
        id: 'uc2-4',
        title: 'Sprint 4: O Sopro do Espírito (Sistemas Operacionais)',
        image: './assets/os_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Uma máquina precisa de um Sistema Operacional (Windows, Linux). O processo de formatação envolve criar um Pendrive de Boot, acessar a BIOS/UEFI, particionar o disco e, por fim, instalar os <strong>Drivers</strong> (tradutores de hardware) e programas essenciais.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Formate um PC no laboratório usando um pendrive bootável feito no Rufus.</li>
            <li><strong>Adaptação Teórica (Celular):</strong> Descreva passo a passo, em texto, o que é formatação e por que precisamos instalar "Drivers" de vídeo e áudio logo em seguida.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=o04K5n4yGDE" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Como criar pendrive de boot com RUFUS</a></li>
              <li><a href="https://www.techtudo.com.br/noticias/2014/10/o-que-e-um-driver.ghtml" target="_blank" style="color: #60a5fa; text-decoration: underline;">📖 Leitura: O que é um Driver?</a></li>
            </ul>
          </div>
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
          <p>A magia dura anos com <strong>Manutenção Preventiva</strong> (limpeza física, troca de pasta térmica) e segurança de software (Antivírus e Backups em nuvem/externos). A Manutenção <strong>Corretiva</strong> ocorre quando algo queima e precisamos testar as peças e substituir.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No laboratório, limpe os contatos da memória RAM usando uma borracha branca e use limpa-contato.</li>
            <li><strong>Adaptação Mobile:</strong> Pesquise sobre "Sintomas de PC superaquecendo" e liste 3 soluções preventivas que podem ser feitas.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=ZfAHEt96vAw" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Como limpar o PC corretamente e trocar pasta térmica</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "Qual é o diagnóstico mais provável para um computador que desliga sozinho sempre que se tenta jogar jogos pesados?",
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
      },
      {
        id: 'uc2-6',
        title: 'Sprint 6: O Julgamento da Forja (Avaliação Teórica)',
        image: './assets/world_map_uc2.png',
        content: `
          <h4>Prova de Ascensão - Hardware e Manutenção</h4>
          <p>Responda às 20 questões abaixo com atenção (numere-as de 1 a 20 na caixa de texto) ou resolva no caderno.</p>
          <ol style="margin-left: 20px; font-size: 0.9rem; line-height: 1.6;">
            <li>O que é Tensão Elétrica (Voltagem)?</li>
            <li>Qual a diferença entre Corrente Contínua (CC/DC) e Corrente Alternada (CA/AC)?</li>
            <li>O que é a Resistência Elétrica?</li>
            <li>Qual a função de um Resistor em um circuito?</li>
            <li>O que faz um Capacitor?</li>
            <li>Descreva o que é a Placa-Mãe e sua função.</li>
            <li>Qual o papel do Processador (CPU)?</li>
            <li>Por que processadores precisam de dissipadores?</li>
            <li>Qual a diferença entre Memória RAM e ROM?</li>
            <li>O que é armazenado na memória BIOS/CMOS?</li>
            <li>Explique a diferença entre HDD magnético e um SSD.</li>
            <li>Qual a função da Fonte de Alimentação?</li>
            <li>O que é Eletricidade Estática e por que usar pulseira antiestática?</li>
            <li>Descreva os passos básicos de montagem de um PC.</li>
            <li>O que significa POST (Power-On Self-Test)?</li>
            <li>Para que servem os Drivers do SO?</li>
            <li>Qual a importância do particionamento de disco?</li>
            <li>Cite duas ações de Manutenção Preventiva.</li>
            <li>Cite um exemplo de Manutenção Corretiva.</li>
            <li>Por que é crucial manter backups regulares?</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <p>Revise os materiais de leitura e vídeos das 5 missões anteriores para gabaritar a prova!</p>
          </div>
        `,
        xpReward: 300,
        type: 'text',
        robotMessage: "O Exame Final da Forja! Digite suas respostas numeradas abaixo ou escreva um resumo consolidado após resolver as 20 questões no caderno."
      }
    ]
  },
  { 
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
          <p>Utilizamos a lógica (Verdadeiro ou Falso) para construir Estruturas de Decisão (If/Else) e Repetição (For/While) em <strong>Algoritmos</strong>: receitas passo a passo para resolver problemas.</p>
          <p>No <strong>Arduíno</strong>, o código instrui a eletrônica (ex: acender e apagar LED em loop).</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li><strong>Simulador Web/Mobile:</strong> Acesse o site <a href="https://www.tinkercad.com/" target="_blank">Tinkercad Circuits</a> (funciona no navegador e no celular), adicione um Arduíno Uno e faça o LED piscar via blocos ou código.</li>
            <li>Se não puder acessar o Tinkercad, escreva um Pseudocódigo num papel simulando um Loop que conta de 1 a 10.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=8mei6uVttho" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Curso de Lógica de Programação (Curso em Vídeo)</a></li>
              <li><a href="https://www.youtube.com/watch?v=KzXpWvYm2X8" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Introdução ao Arduíno no Tinkercad</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Envie uma foto da tela do Tinkercad com seu LED piscando ou do Pseudocódigo no caderno!"
      },
      {
        id: 'uc3-2',
        title: 'Sprint 2: Estruturas Avançadas (Busca e Ordenação)',
        image: './assets/boss_monster.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Armazenamos dados em <strong>Vetores (Arrays)</strong>. Para encontrar algo neles, usamos <strong>Algoritmos de Busca</strong> (a Busca Binária ignora metade da lista por vez, sendo extremamente rápida). E para organizar, usamos ordenadores como o Bubble Sort (Bolha).</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li><strong>Desafio Analógico:</strong> Embaralhe 5 cartas de baralho. Ordene-as na mão usando o "Bubble Sort" (olhe 2 cartas adjacentes, troque se estiverem fora de ordem, e repita até o fim).</li>
            <li>Tente descrever como a Notação Big-O mede o tempo gasto pelos programas em pior caso.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=lyZQPjUT5B4" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Entendendo o Bubble Sort Visualmente</a></li>
              <li><a href="https://www.youtube.com/watch?v=D6xkbGLQesk" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Busca Binária Explicada</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "Sobre a Busca Binária, marque a opção correta:",
        quiz: {
            question: 'Por que a Busca Binária é mais eficiente que a Busca Simples em listas ordenadas?',
            options: [
                'A) Ela usa a placa de vídeo em vez da CPU.',
                'B) Ela ignora metade da lista a cada verificação.',
                'C) Ela lê todos os itens simultaneamente.',
                'D) Nenhuma das anteriores.'
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
          <p>O coração de todo SO (Windows, Android, Linux) é o <strong>Kernel</strong>, que conversa com o hardware. Podemos rodar múltiplos SOs dentro do Windows criando <strong>Máquinas Virtuais (VM)</strong> com o VirtualBox.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No PC, baixe o VirtualBox e crie uma VM alocando memória RAM.</li>
            <li><strong>Adaptação Mobile/Teórica:</strong> Acesse as configurações de memória e armazenamento do seu smartphone. Pesquise e explique qual é o Sistema Operacional do seu celular e se o Kernel dele é baseado em Linux (sim, o Android é!).</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=52sS703b0dM" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 O que é Kernel de forma simples</a></li>
              <li><a href="https://www.youtube.com/watch?v=-sIqN6q13H4" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Como instalar e usar o VirtualBox</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Envie um print da sua Máquina Virtual criada ou anote e mande as especificações de memória e Kernel do seu próprio celular."
      },
      {
        id: 'uc3-4',
        title: 'Sprint 4: O Pinguim e a Janela (Terminal Linux)',
        image: './assets/os_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>O <strong>GNU/Linux</strong> é poderoso no mundo dos servidores por ser controlável totalmente via Interface de Texto (Linha de Comando). Comandos como <code>ls</code> (listar), <code>cd</code> (entrar em pasta) e <code>mkdir</code> (criar pasta) são a mágica de manipular os arquivos sem mouse.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li><strong>Emulador de Bolso (Web/Mobile):</strong> Abra o navegador, acesse <a href="https://bellard.org/jslinux/" target="_blank">bellard.org/jslinux/</a> (Escolha Alpine Linux).</li>
            <li>Digite no terminal do site os seguintes comandos: <code>mkdir laboratório</code> (Enter) e depois <code>ls</code> (Enter) para ver a pasta criada.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=T1u1oYjHXYM" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Comandos Básicos de Linux (Diolinux)</a></li>
              <li><a href="https://bellard.org/jslinux/" target="_blank" style="color: #60a5fa; text-decoration: underline;">🐧 Emulador: JSLinux na Web</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Acessou o JSLinux? Qual foi a sensação de criar uma pasta escrevendo apenas texto (comandos) em vez de clicar com o botão direito do mouse?"
      },
      {
        id: 'uc3-5',
        title: 'Sprint 5: Os Mestres da Rede (Servidores Linux)',
        image: './assets/server_linux.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Um servidor não tem tela, ele é acessado remotamente (SSH). Instalamos serviços nele: <strong>Samba</strong> para arquivos compatíveis com Windows, <strong>Apache</strong> para hospedar sites Web e <strong>Proxy</strong> para controle de internet.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No laboratório, configure um servidor Samba para compartilhar uma pasta na rede local.</li>
            <li><strong>Estudo de Caso Teórico (Celular/Web):</strong> Imagine que uma empresa precisa que arquivos importantes sejam acessíveis apenas pelo Setor de RH. Descreva como o recurso de compartilhamento e "Permissões de Diretório" do Linux resolveria isso.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=R9nU-Lq0Vtc" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 O que é o Servidor Samba?</a></li>
              <li><a href="https://www.youtube.com/watch?v=FjI5jY1W2wU" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Entendendo Permissões de Arquivos no Linux</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Descreva brevemente como você resolveria o caso do Setor de RH usando compartilhamento (Samba) e gerenciamento de grupos de permissão."
      },
      {
        id: 'uc3-6',
        title: 'Sprint 6: O Catálogo Global (Windows Server)',
        image: './assets/server_windows.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>O <strong>Active Directory (AD)</strong> do Windows Server gerencia quem pode ou não acessar os recursos de uma rede corporativa inteira. O AD organiza tudo em Domínios, Árvores e Florestas, usando GPOs (Políticas de Grupo) para bloquear pendrives, forçar senhas e restringir acesso aos PCs.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Suba um Windows Server no VirtualBox, ative o domínio e cadastre 1 usuário.</li>
            <li><strong>Estudo de Caso (Celular):</strong> A Escola precisa bloquear o uso de Painel de Controle e de USBs nos computadores dos laboratórios, mas os professores devem ter passe livre. Como a configuração de GPOs resolveria esse problema sem precisar alterar máquina por máquina?</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=R_L-w6dZ5rY" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Introdução ao Active Directory (AD)</a></li>
              <li><a href="https://www.youtube.com/watch?v=x9q9VfD2_XQ" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 O que são GPOs (Políticas de Grupo)?</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "O que é o Active Directory (AD) em um ambiente Windows Server?",
        quiz: {
            question: 'Qual a principal função de uma GPO (Group Policy) no Windows Server?',
            options: [
                'A) Melhorar a placa de vídeo do servidor para jogos.',
                'B) Aplicar regras, restrições e configurações em massa para vários usuários e computadores na rede de forma centralizada.',
                'C) Instalar o Linux dentro do Windows.',
                'D) Fornecer o endereço IP dinâmico.'
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
          <p>O <strong>HTML</strong> constrói a estrutura com tags. Já os conceitos de <strong>UI</strong> (Interface Visual) e <strong>UX</strong> (Experiência do Usuário) ditam que as telas devem ter boa <em>Ergonomia</em> e <em>Acessibilidade</em> (leitura de tela para deficientes visuais).</p>
          
          <h4>Guia de Missão</h4>
          <p>Abra um editor de texto ou o site <strong>CodePen.io</strong> (funciona em celulares também) e crie um Formulário com as tags <code>&lt;input&gt;</code> e <code>&lt;button&gt;</code>.</p>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=E6HgYJmMHGw" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Curso de HTML5 e CSS3 - Curso em Vídeo</a></li>
              <li><a href="https://codepen.io/pen/" target="_blank" style="color: #60a5fa; text-decoration: underline;">💻 Emulador de Código: CodePen (Web e Celular)</a></li>
            </ul>
          </div>
        `,
        xpReward: 50,
        type: 'text',
        robotMessage: "Por que aplicar critérios de 'Ergonomia' e 'Acessibilidade' ao fazer um formulário é importante na web moderna?"
      },
      {
        id: 'uc4-2',
        title: 'Aula 2: CSS na Prática (Minigame)',
        content: `
          <h4>A Magia das Cores e Posições (CSS3)</h4>
          <p>O CSS colore a estrutura do HTML. Para alinhar elementos facilmente, utilizamos a tecnologia <strong>Flexbox</strong> (com <code>justify-content</code> e <code>align-items</code>).</p>
          
          <h4>🕹️ Guia de Missão: Flexbox Froggy</h4>
          <p>Pode ser feito no PC ou celular! Clique no minigame interativo abaixo e use comandos CSS para levar o sapo à vitória-régia.</p>
          <div class="game-container">
            <iframe class="game-frame" src="https://flexboxfroggy.com/#pt-br" title="Jogo Flexbox Froggy"></iframe>
          </div>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=Qf-jsH2s9y8" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Entendendo o Flexbox na Prática (Origamid)</a></li>
            </ul>
          </div>
        `,
        xpReward: 50,
        type: 'text',
        robotMessage: "Bela jogada! Diga para mim: até que fase você conseguiu chegar no jogo do sapinho e qual comando você mais usou?"
      },
      {
        id: 'uc4-3',
        title: 'Aula 3: Interatividade com JavaScript',
        content: `
          <h4>A Inteligência da Página</h4>
          <p>O <strong>JavaScript (JS)</strong> manipula o HTML em tempo real. A árvore do HTML é vista pelo JS como o <strong>DOM (Document Object Model)</strong>.</p>
          <pre style="background:#1e1e1e; color:#d4d4d4; padding:15px; border-radius:8px; overflow-x:auto; margin: 15px 0;"><code>// Exemplo de manipulação do DOM
const botao = document.getElementById('meuBotao');
botao.addEventListener('click', function() {
    alert('Clicou!');
});</code></pre>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=Ptbk2af68e8" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Curso de JavaScript (O que é o DOM?)</a></li>
            </ul>
          </div>
        `,
        xpReward: 50,
        type: 'choice',
        robotMessage: "Vamos ver se pegou o conceito! Marque a correta sobre o DOM:",
        quiz: {
            question: 'O que significa manipular o DOM usando JavaScript?',
            options: [
                'A) Significa estilizar cores no servidor Apache.',
                'B) Interagir dinamicamente com os elementos (botões, textos) do HTML que estão na tela.',
                'C) É salvar dados no banco MySQL.',
                'D) Nenhuma das anteriores.'
            ],
            correctIndex: 1
        }
      },
      {
        id: 'uc4-4',
        title: 'Aula 4: Ciclo de Vida e Engenharia',
        content: `
          <h4>O Que o Sistema Precisa Ter?</h4>
          <p>Antes de codar, os Engenheiros de Software criam <strong>Requisitos Funcionais</strong> (o que o sistema FAZ, ex: 'fazer login') e <strong>Requisitos Não-Funcionais</strong> (restrições de qualidade, ex: 'ser seguro' ou 'carregar em 2 segundos').</p>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=rX_dIofB6G4" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Engenharia de Requisitos (Funcional vs Não Funcional)</a></li>
            </ul>
          </div>
        `,
        xpReward: 50,
        type: 'text',
        robotMessage: "Imagine o App do iFood. Dê um exemplo criado por você de um Requisito Funcional e um Não-Funcional dele."
      },
      {
        id: 'uc4-5',
        title: 'Aula 5: Modelagem Visual (UML)',
        content: `
          <h4>Desenhando a Planta Baixa do Sistema</h4>
          <p>A <strong>UML (Unified Modeling Language)</strong> ajuda a visualizar sistemas. O <strong>Diagrama de Casos de Uso</strong> mostra os <em>Atores</em> (usuários, representados por bonecos) interagindo com <em>Casos de Uso</em> (ações, representadas em ovais).</p>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=A2WpDqZf6sI" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Como criar Diagramas de Casos de Uso (UML)</a></li>
            </ul>
          </div>
        `,
        xpReward: 50,
        type: 'choice',
        robotMessage: "Teste seus conhecimentos:",
        quiz: {
            question: 'Num diagrama UML de um Caixa Eletrônico, quem seriam exemplos válidos de Atores?',
            options: [
                'A) As funções "Sacar" e "Depositar".',
                'B) O banco de dados SQL.',
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
        title: 'Aula 1: Bancos Relacionais e o SQL',
        content: `
          <h4>A Memória do Mundo</h4>
          <p>Tudo na web (compras, contas) precisa ser salvo num <strong>Banco de Dados Relacional</strong> (tabelas com linhas e colunas). A linguagem para buscar essas linhas é o <strong>SQL</strong> (ex: <code>SELECT * FROM usuarios WHERE idade > 18;</code>).</p>
          
          <h4>🕹️ Hora de Jogar: SQL Murder Mystery</h4>
          <p>No celular ou no PC: Acesse o mini-terminal integrado abaixo e use <code>SELECT * FROM crime_scene_report;</code> para procurar as pistas do assassinato em SQL City.</p>
          <div class="game-container" style="background: white;">
            <iframe class="game-frame" src="https://mystery.knightlab.com/walkthrough.html" title="Jogo SQL Murder Mystery"></iframe>
          </div>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=Ofktsne-utM" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Curso de Bancos de Dados MySQL (Curso em Vídeo)</a></li>
              <li><a href="https://www.w3schools.com/sql/" target="_blank" style="color: #60a5fa; text-decoration: underline;">📖 Tutorial de SQL Interativo (W3Schools)</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Qual comando SQL você testou no terminal interativo acima e o que ele mostrou?"
      }
    ]
  },
  { 
    id: 'uc6', 
    title: 'Mundo 6: O Domínio do Boss (Projetos)', 
    description: 'Projetos Dinâmicos - Forme sua "Agência Digital" virtual e execute os desafios complexos que unem tudo que você aprendeu.', 
    icon: '🚀',
    background: './assets/world_map_mario.png',
    badgeTitle: 'CEO Digital',
    badgeIcon: '🏆',
    lessons: [
      {
        id: 'uc6-1',
        title: 'Projeto Final: Agência Digital',
        image: './assets/boss_monster.png',
        content: `
          <h4>Aplicando o Conhecimento</h4>
          <p>Identifiquem um problema real na comunidade e projetem a ideia (App ou Site Web) para solucioná-lo, juntando Redes, SO, Programação Web e Banco de Dados.</p>
          
          <h4>Entregáveis:</h4>
          <ol>
            <li><strong>Nome do App</strong> e sua função.</li>
            <li><strong>Requisitos:</strong> 2 Funcionais e 1 Não-Funcional.</li>
            <li><strong>Banco de Dados:</strong> O nome de 2 Tabelas SQL necessárias.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=M2_o383A-G4" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Como criar o Escopo de um Projeto de Software</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Descrevam todo o escopo do projeto da Agência de vocês detalhando as 3 etapas solicitadas acima."
      }
    ]
  },
  { 
    id: 'uc7', 
    title: 'Mundo 7: Investigação Científica e Tecnológica (ICT)', 
    description: 'Desenvolva soluções reais usando o método científico, engenharia e ética. Transforme curiosidade em inovação!', 
    icon: '🔬',
    background: './assets/world_map_ict.png',
    badgeTitle: 'Mestre Investigador',
    badgeIcon: '🔍',
    lessons: [
      {
        id: 'uc7-1',
        title: 'Sprint 1: O Detetive da Ciência',
        image: './assets/detective_science.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>A <strong>Investigação Científica e Tecnológica (ICT)</strong> é a arte de resolver problemas reais. Imagine-se como um detetive da ciência: seu trabalho não é prender criminosos, mas sim descobrir novos conhecimentos e resolver mistérios sobre o universo e a tecnologia.</p>
          <p>A investigação científica é metódica: ela começa com uma <strong>curiosidade</strong> ("Por que o céu é azul?") e busca respostas baseadas em evidências sólidas.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Pense em um problema simples que você observa na sua escola ou bairro (ex: desperdício de papel, falta de lixeiras, etc).</li>
            <li>Escreva qual seria a "Pergunta de Pesquisa" para esse problema.</li>
          </ol>

          <div class="highlight-box">
            <strong>📚 Contexto Profissional</strong><br>
            <p>Para um Inspetor de Qualidade, pesquisar é fundamental para entender falhas em processos e aplicar melhorias contínuas.</p>
          </div>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "Onde começa toda investigação científica?",
        quiz: {
            question: 'Qual é o ponto de partida de uma investigação científica?',
            options: [
                'A) Comprar equipamentos caros.',
                'B) Uma curiosidade ou uma pergunta sobre o mundo ao nosso redor.',
                'C) Copiar a resposta de um colega.',
                'D) Decorar fórmulas matemáticas.'
            ],
            correctIndex: 1
        }
      },
      {
        id: 'uc7-2',
        title: 'Sprint 2: Ciência vs Tecnologia',
        image: './assets/innovation_technology.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Embora andem juntas, há uma diferença importante:</p>
          <ul>
            <li><strong>Pesquisa Científica:</strong> Busca entender "Como o mundo funciona" (Ex: Por que as abelhas estão sumindo?).</li>
            <li><strong>Pesquisa Tecnológica:</strong> Busca "Resolver um problema prático" (Ex: Como criar uma bateria que dure uma semana?).</li>
          </ul>
          <p>Ambas são essenciais para melhorar nossa qualidade de vida e nos preparar para os desafios do futuro.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Identifique um exemplo de pesquisa tecnológica que você usa todos os dias (Dica: pense no seu celular ou internet).</li>
            <li>Anote como esse avanço resolveu um problema que as pessoas tinham antigamente.</li>
          </ol>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "Qual dessas opções é um exemplo de Pesquisa Tecnológica?",
        quiz: {
            question: 'Qual dos exemplos abaixo melhor representa uma pesquisa TECNOLÓGICA?',
            options: [
                'A) Estudar o movimento das estrelas para entender a idade do universo.',
                'B) Desenvolver um novo tipo de filtro para purificar água de baixo custo usando materiais reciclados.',
                'C) Observar o comportamento de formigas na floresta.',
                'D) Ler um livro de história antiga.'
            ],
            correctIndex: 1
        }
      },
      {
        id: 'uc7-3',
        title: 'Sprint 3: A Bússola Metodológica',
        image: './assets/science_compass.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>A <strong>Metodologia Científica</strong> é como uma bússola que nos guia para não nos perdermos em "achismos". Ela garante que nossas soluções sejam baseadas em <strong>evidências sólidas</strong> e não em suposições que parecem boas na teoria, mas falham na prática.</p>
          <p>Sem método, corremos o risco de gastar tempo e recursos em ideias que não funcionam. Na área de Qualidade, isso significa evitar decisões improvisadas que podem comprometer a segurança ou a eficiência.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Imagine que você quer provar que "estudar ouvindo música clássica melhora a nota".</li>
            <li>Como você faria um teste justo (científico) para provar isso? Escreva sua ideia.</li>
          </ol>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Explique com suas palavras: Por que não podemos confiar apenas no nosso 'sentimento' ou 'achismo' ao resolver um problema técnico?"
      },
      {
        id: 'uc7-4',
        title: 'Sprint 4: A Forja da Inovação (Ideação)',
        image: './assets/ideation_process.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>O <strong>Processo de Ideação</strong> é onde a criatividade encontra o método. Ele segue passos claros:</p>
          <ol>
            <li><strong>Identificação do Problema:</strong> Pergunta clara e específica.</li>
            <li><strong>Pesquisa Preliminar:</strong> O que já existe sobre isso?</li>
            <li><strong>Geração de Ideias:</strong> Brainstorming (chuva de ideias).</li>
            <li><strong>Prototipagem e Testes:</strong> Criar um modelo simples para testar.</li>
            <li><strong>Análise de Resultados:</strong> Funcionou? O que os dados dizem?</li>
            <li><strong>Comunicação:</strong> Compartilhar a descoberta.</li>
          </ol>

          <h4>Guia de Missão</h4>
          <p>Escolha um dos passos acima e explique por que ele é crucial para o sucesso de um projeto.</p>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Descreva: Qual é a importância de criar um 'Protótipo' antes de lançar o produto final?"
      },
      {
        id: 'uc7-5',
        title: 'Sprint 5: Qualidade com Evidências',
        image: './assets/quality_research.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>No cotidiano de um Inspetor de Qualidade, a ICT é aplicada seguindo etapas práticas para garantir que o produto final seja perfeito:</p>
          <ul>
            <li><strong>Coleta de Dados:</strong> Entrevistas, relatórios de falhas e questionários.</li>
            <li><strong>Ferramentas de Análise:</strong> Diagramas de Ishikawa (Espinha de Peixe) ou Pareto.</li>
            <li><strong>Soluções Colaborativas:</strong> Uso de métodos como 5W2H ou PDCA.</li>
            <li><strong>Monitoramento:</strong> Uso de indicadores para saber se a melhoria foi real e sustentável.</li>
          </ul>

          <div class="highlight-box">
            <strong>Exemplo de Sucesso:</strong> Uma empresa com alta rejeição de peças usou a ICT para criar um checklist digital. Resultado: Redução imediata de falhas e economia de recursos.
          </div>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Como a metodologia científica ajuda um Inspetor de Qualidade a tomar decisões melhores no trabalho?"
      },
      {
        id: 'uc7-6',
        title: 'Sprint 6: O Guardião da Integridade (Ética)',
        image: './assets/ethics_privacy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Pesquisar não é "fazer qualquer coisa a qualquer custo". A <strong>Ética na Pesquisa</strong> garante o respeito à dignidade, direitos e bem-estar de todos os envolvidos.</p>
          <p>Pontos principais:</p>
          <ul>
            <li><strong>Comitês de Ética:</strong> Avaliam se a pesquisa com humanos ou animais é segura e justa.</li>
            <li><strong>Integridade:</strong> Não falsificar dados ou resultados.</li>
            <li><strong>LGPD (Lei Geral de Proteção de Dados):</strong> Respeitar a privacidade e os dados pessoais coletados em pesquisas.</li>
          </ul>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "O que significa agir com 'Ética' ao realizar uma pesquisa com pessoas?",
        quiz: {
            question: 'Sobre a Ética na Pesquisa, qual afirmação é VERDADEIRA?',
            options: [
                'A) Posso usar dados de pessoas sem a permissão delas se for para a ciência.',
                'B) Cientistas não precisam seguir leis como a LGPD.',
                'C) Ética na pesquisa serve para garantir o respeito à dignidade e aos direitos dos participantes.',
                'D) Posso inventar dados se o resultado original não for o que eu esperava.'
            ],
            correctIndex: 2
        }
      },
      {
        id: 'uc7-7',
        title: 'Sprint 7: O Grande Inquérito (Avaliação)',
        content: `
          <h4>Desafio Final de ICT</h4>
          <p>Para concluir este mundo e ganhar seu selo de <strong>Mestre Investigador</strong>, responda com atenção às questões abaixo:</p>
          <ol>
            <li>Qual a importância da investigação científica para o desenvolvimento do conhecimento?</li>
            <li>Cite um exemplo de pesquisa científica e um de pesquisa tecnológica.</li>
            <li>Por que o 'Processo de Ideação' é importante antes de construir uma solução?</li>
            <li>Como a LGPD protege os participantes de uma pesquisa?</li>
          </ol>
        `,
        xpReward: 300,
        type: 'text',
        robotMessage: "Este é o seu teste final deste mundo! Responda detalhadamente às 4 questões acima para validar sua ascensão."
      }
    ]
  }
];

// Estado da Aplicação
let currentUser = null;
let currentModule = null;
let currentLessonIndex = 0;
let selectedQuizOption = null;
let currentUploadedImage = null;

// Sistema de Som (Sintetizador Web Audio)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'click') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'coin') {
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'correct') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        oscillator.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        oscillator.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'error') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

// Global click sound
document.addEventListener('click', () => playSound('click'));

// Configurar Event Listener Global do Input de Arquivo
document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('quiz-file-input');
  if (fileInput) {
    fileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 400;
          let width = img.width;
          let height = img.height;
          if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
          canvas.width = width; canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          currentUploadedImage = canvas.toDataURL('image/jpeg', 0.6);
          document.getElementById('file-preview-image').src = currentUploadedImage;
          document.getElementById('file-preview-container').classList.remove('hidden');
        }
        img.src = event.target.result;
      }
      reader.readAsDataURL(file);
    });
  }
});

// Elementos da Interface
const screens = {
  login: document.getElementById('login-screen'),
  worldSelect: document.getElementById('world-select-screen'),
  dashboard: document.getElementById('dashboard-screen'),
  course: document.getElementById('course-screen'),
  teacher: document.getElementById('teacher-screen'),
  shop: document.getElementById('shop-screen'),
  ranking: document.getElementById('ranking-screen')
};

// Navegação
function showScreen(screenName) {
  if (screenName === 'login') {
      updateLoginHistory();
  }
  Object.values(screens).forEach(screen => {
    if(screen) {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    }
  });
  if(screens[screenName]) {
      screens[screenName].classList.remove('hidden');
      setTimeout(() => screens[screenName].classList.add('active'), 10);
  }
}

function showToast(message, icon = '💰') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'glass-card toast-item';
    toast.style.padding = '0.75rem 1.25rem';
    toast.style.borderLeft = '4px solid var(--primary)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '0.75rem';
    toast.style.animation = 'slideIn 0.3s forwards';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    
    toast.innerHTML = `
        <span style="font-size: 1.5rem;">${icon}</span>
        <span style="font-weight: bold; color: white;">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Login
let selectedGender = 'male';
document.querySelectorAll('.gender-option').forEach(opt => {
    opt.addEventListener('click', () => {
        document.querySelectorAll('.gender-option').forEach(o => {
            o.classList.remove('selected');
            o.style.borderColor = 'var(--glass-border)';
            o.style.boxShadow = 'none';
        });
        opt.classList.add('selected');
        opt.style.borderColor = 'var(--primary)';
        opt.style.boxShadow = '0 0 15px var(--primary)';
        selectedGender = opt.getAttribute('data-gender');
    });
});

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('student-name').value.trim();
  if (name) loginStudent(name, selectedGender);
});

function updateLoginHistory() {
    const students = JSON.parse(localStorage.getItem('ava_students')) || [];
    const historyContainer = document.getElementById('login-history');
    const historyList = document.getElementById('login-history-list');
    
    if (students.length > 0) {
        historyContainer.classList.remove('hidden');
        historyList.innerHTML = '';
        
        // Mostrar os últimos 5 alunos que acessaram
        students.slice(-5).reverse().forEach(s => {
            const btn = document.createElement('button');
            btn.className = 'btn text-btn';
            btn.style.fontSize = '0.8rem';
            btn.style.padding = '0.4rem 0.8rem';
            btn.style.background = 'rgba(255,255,255,0.05)';
            btn.style.border = '1px solid var(--glass-border)';
            btn.innerText = s.name.split(' ')[0];
            btn.addEventListener('click', () => loginStudent(s.name));
            historyList.appendChild(btn);
        });
    } else {
        historyContainer.classList.add('hidden');
    }
}

function loginStudent(name, gender = 'male') {
  let students = JSON.parse(localStorage.getItem('ava_students')) || [];
  let student = students.find(s => s.name.toLowerCase() === name.toLowerCase());
  
  if (!student) {
    student = {
      name,
      gender,
      progress: [],
      completedModules: [],
      xp: 0,
      level: 1,
      coins: 100, // Saldo inicial
      keys: 1,    // Chave inicial
      inventory: [], // IDs de acessórios comprados/ganhos
      equippedItems: [], // IDs de acessórios equipados
      badges: [],
      answers: {}, // Armazena respostas textuais: { "1-1": "Texto da resposta" }
      pendingProgress: [] // IDs de missões aguardando aprovação
    };
    students.push(student);
    localStorage.setItem('ava_students', JSON.stringify(students));
  }
  // Garantir compatibilidade com dados antigos salvos no navegador
  if(!student.gender) student.gender = 'male';
  if(student.xp === undefined || isNaN(student.xp)) student.xp = 0;
  if(student.level === undefined || isNaN(student.level)) student.level = 1;
  if(student.coins === undefined) student.coins = 0;
  if(student.keys === undefined) student.keys = 0;
  if(!student.inventory) student.inventory = [];
  if(!student.equippedItems) student.equippedItems = [];
  if(!student.progress) student.progress = [];
  if(!student.completedModules) student.completedModules = [];
  if(!student.badges) student.badges = [];
  if(!student.answers) student.answers = {};
  if(!student.pendingProgress) student.pendingProgress = [];

  currentUser = student;
  initWorldSelect();
}

function saveStudentData() {
  let students = JSON.parse(localStorage.getItem('ava_students')) || [];
  const index = students.findIndex(s => s.name === currentUser.name);
  if (index !== -1) {
    students[index] = currentUser;
    localStorage.setItem('ava_students', JSON.stringify(students));
  }
}

// World Select
function initWorldSelect() {
  showScreen('worldSelect');
  
  document.getElementById('ws-welcome-message').innerText = `Olá, ${currentUser.name.split(' ')[0]}`;
  document.getElementById('ws-user-avatar').innerText = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('ws-user-level').innerText = Math.floor(currentUser.xp / 200) + 1;
  document.getElementById('ws-user-xp').innerText = currentUser.xp;
  document.getElementById('ws-user-coins').innerText = currentUser.coins || 0;
  document.getElementById('ws-user-keys').innerText = currentUser.keys || 0;

  const container = document.getElementById('worlds-container');
  container.innerHTML = '';

  courseModules.forEach(world => {
    const isCompleted = currentUser.completedModules.includes(world.id);
    const settings = JSON.parse(localStorage.getItem('ava_settings')) || { lockedModules: [] };
    const isTeacherLocked = settings.lockedModules.includes(world.id);
    
    const card = document.createElement('div');
    card.className = `world-card ${isTeacherLocked ? 'teacher-locked' : ''}`;
    card.style.backgroundImage = `url(${world.background})`;
    if(isTeacherLocked) card.style.filter = 'grayscale(1) brightness(0.5)';
    
    const totalLessons = world.lessons.length;
    const completedLessons = world.lessons.filter(l => currentUser.progress.includes(l.id)).length;
    
    card.innerHTML = `
      <div style="background: rgba(15, 23, 42, 0.8); padding: 1rem; border-radius: 12px; height: 100%; display: flex; flex-direction: column;">
          <div class="module-icon">${isTeacherLocked ? '🔒' : world.icon}</div>
          <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${world.title}</h4>
          <p style="font-size: 0.9rem; flex-grow: 1; margin-bottom: 0.5rem;">${isTeacherLocked ? 'Este mundo ainda não foi liberado pelo professor para o bimestre atual.' : world.description}</p>
          <p style="font-size: 0.85rem; color: #a855f7; font-weight: bold; margin-bottom: 1rem;">Missões: ${completedLessons}/${totalLessons}</p>
          <div class="status-badge ${isCompleted ? 'status-completed' : (isTeacherLocked ? 'status-error' : 'status-pending')}">
            ${isCompleted ? '✓ Mundo Concluído' : (isTeacherLocked ? 'Bloqueado pelo Mestre' : 'Selo: ' + world.badgeTitle)}
          </div>
      </div>
    `;
    
    if(!isTeacherLocked) {
        card.addEventListener('click', () => initDashboard(world));
    } else {
        card.addEventListener('click', () => alert("Este mundo está trancado pelo Cetro do Mestre. Aguarde a liberação do professor!"));
    }
    container.appendChild(card);
  });
}

// Dashboard (Map)
function initDashboard(world) {
  currentModule = world; // Guardando o Mundo Selecionado
  showScreen('dashboard');
  
  // Mostra o Aviso Chamativo do Mundo
  const introModal = document.getElementById('world-intro-modal');
  if(introModal) introModal.classList.remove('hidden');

  const apostilaBtn = document.getElementById('dashboard-apostila-btn');
  if (apostilaBtn) {
      if (world.id === 'uci-1') {
          apostilaBtn.href = './uc1.pdf';
          apostilaBtn.innerText = '📖 Apostila UC1';
      } else {
          apostilaBtn.href = './apostila.pdf';
          apostilaBtn.innerText = '📖 Apostila Geral';
      }
  }
  
  document.getElementById('welcome-message').innerText = `Olá, ${currentUser.name.split(' ')[0]}`;
  document.getElementById('user-avatar').innerText = currentUser.name.charAt(0).toUpperCase();
  
  updateGamificationStats();
  updateProgress();
  renderBadges();
  renderMapNodes(world);
}

function updateGamificationStats() {
  currentUser.level = Math.floor(currentUser.xp / 200) + 1;
  document.getElementById('user-level').innerText = currentUser.level;
  document.getElementById('user-xp').innerText = currentUser.xp;
  document.getElementById('user-coins').innerText = currentUser.coins || 0;
  document.getElementById('user-keys').innerText = currentUser.keys || 0;
  updateInventoryUI();
}

function updateProgress() {
  const total = courseModules.length;
  const completed = currentUser.completedModules.length;
  const percentage = Math.round((completed / total) * 100);
  
  const progressText = document.getElementById('progress-text');
  if (progressText) progressText.innerText = `${percentage}%`;
  
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) progressBar.style.width = `${percentage}%`;
}

function renderBadges() {
  const container = document.getElementById('badges-container');
  const emptyMsg = document.getElementById('empty-badges');
  
  container.querySelectorAll('.badge-item').forEach(el => el.remove());

  if (currentUser.badges.length > 0) {
    emptyMsg.classList.add('hidden');
    currentUser.badges.forEach(badge => {
      const badgeEl = document.createElement('div');
      badgeEl.className = 'badge-item';
      badgeEl.title = badge.title;
      badgeEl.innerText = badge.icon;
      container.appendChild(badgeEl);
    });
  } else {
    emptyMsg.classList.remove('hidden');
  }
}

function renderMapNodes(world) {
  const container = document.getElementById('modules-container');
  container.innerHTML = '';
  
  const listContainer = document.getElementById('lessons-grid');
  if (listContainer) listContainer.innerHTML = '';

  // O container do mapa precisa ter a imagem da fase atual
  document.querySelector('.world-map-container').style.backgroundImage = `url(${world.background})`;

  const numLessons = world.lessons.length;
  world.lessons.forEach((lesson, index) => {
    const isCompleted = currentUser.progress.includes(lesson.id);
    
    // LÓGICA DE BLOQUEIO: Só a primeira fase está aberta ou se a anterior foi concluída
    let isLocked = false;
    if (index > 0) {
        const previousLesson = world.lessons[index - 1];
        if (!currentUser.progress.includes(previousLesson.id)) {
            isLocked = true;
        }
    }

    // NÓ DO MAPA
    const node = document.createElement('div');
    node.className = `map-node ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
    
    // Distribuição no eixo X: começa em 15% e vai até 85%
    let left = 15;
    if (numLessons > 1) {
       left = 15 + (index * (70 / (numLessons - 1)));
    } else {
       left = 50; // se só tem 1 fase, fica no meio
    }
    
    let top = (index % 2 === 0) ? 65 : 35; // Zig zag
    
    // Boss level styling
    const isBoss = index === numLessons - 1 && (world.id === 'uc4' || world.id === 'uc7' || lesson.title.includes('Projeto Final') || lesson.title.includes('Avaliação'));
    if (isBoss) {
        node.classList.add('boss-node');
        top = 20;
        left = 85;
    }

    node.style.top = `${top}%`;
    node.style.left = `${left}%`;

    let bossReqHtml = "";
    if(isBoss) {
        const reqs = shopItems.filter(i => i.requiredForBoss);
        bossReqHtml = `
            <div class="boss-requirements">
                <strong>Requisitos para o Boss:</strong>
                <ul>
                    ${reqs.map(r => `<li style="color: ${currentUser.equippedItems.includes(r.id) ? '#10b981' : '#f87171'}">${r.icon} ${r.name}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    node.innerHTML = `
      <div class="node-label" style="position:absolute; top:35px; left:50%; transform:translateX(-50%); color:white; font-size:0.85rem; font-weight:700; white-space:nowrap; text-shadow: 2px 2px 4px #000, -2px -2px 4px #000, 2px -2px 4px #000, -2px 2px 4px #000; pointer-events:none;">
        ${lesson.title.split(':')[0]}
      </div>
      <div class="map-tooltip">
        <h4>${lesson.title}</h4>
        <p style="color:var(--primary); font-weight:bold; margin-top:5px;">${isLocked ? '🔒 Missão Bloqueada' : (isCompleted ? '✓ Concluída' : 'Fase Pendente')}</p>
        ${bossReqHtml}
        <div style="margin-top: 5px; font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px;">
            ${isLocked ? 'Conclua a missão anterior para liberar' : 'Clique para acessar'}
        </div>
      </div>
    `;
    
    if (!isLocked) {
        node.addEventListener('click', () => openLessonDirectly(world, index));
    }
    container.appendChild(node);

    // LISTA DE FASES (Fallback)
    if (listContainer) {
      const card = document.createElement('div');
      card.className = `glass-card ${isCompleted ? 'completed-card' : ''} ${isLocked ? 'locked' : ''}`;
      card.style.padding = '1.2rem';
      card.style.cursor = isLocked ? 'not-allowed' : 'pointer';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.gap = '0.5rem';
      card.style.transition = 'transform 0.2s, border-color 0.2s';
      card.style.opacity = isLocked ? '0.6' : '1';
      
      card.innerHTML = `
        <h4 style="margin:0; font-size:1.1rem; color: ${isCompleted ? 'var(--success)' : (isLocked ? 'var(--text-secondary)' : 'var(--primary)')};">${isLocked ? '🔒 ' : ''}${lesson.title}</h4>
        <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">${isCompleted ? '✓ Missão Cumprida' : (isLocked ? 'Bloqueada' : 'Missão Disponível')}</p>
        <button class="btn ${isCompleted ? 'success-btn' : 'primary-btn'} w-full" style="margin-top: 0.5rem; padding: 0.5rem;" ${isLocked ? 'disabled' : ''}>
            ${isCompleted ? 'Revisar Conteúdo' : (isLocked ? 'Bloqueado' : 'Acessar Missão')}
        </button>
      `;
      
      if (!isLocked) {
          card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px)';
            card.style.borderColor = isCompleted ? 'var(--success)' : 'var(--primary)';
          });
          card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'var(--glass-border)';
          });
          card.addEventListener('click', () => openLessonDirectly(world, index));
      }
      
      listContainer.appendChild(card);
    }
  });
}

function openLessonDirectly(world, index) {
  const lesson = world.lessons[index];
  const isBoss = index === world.lessons.length - 1 && (world.id === 'uc4' || world.id === 'uc7' || lesson.title.includes('Projeto Final') || lesson.title.includes('Avaliação'));

  if (isBoss) {
      const missingItems = shopItems.filter(i => i.requiredForBoss && !currentUser.equippedItems.includes(i.id));
      if (missingItems.length > 0) {
          playSound('error');
          alert(`PARE! Você não pode enfrentar o Boss Final sem os itens necessários: ${missingItems.map(i => i.name).join(', ')}. Visite a Loja!`);
          return;
      }
  }

  // Verificação extra de segurança para bloqueio sequencial
  if (index > 0) {
      const previousLessonId = world.lessons[index - 1].id;
      if (!currentUser.progress.includes(previousLessonId)) {
          alert("Ops! Você precisa concluir a missão anterior antes de avançar para esta.");
          return;
      }
  }
  
  currentModule = world;
  currentLessonIndex = index;
  showScreen('course');
  openLesson(currentLessonIndex);
}

function openLesson(index) {
  selectedQuizOption = null;
  const lesson = currentModule.lessons[index];
  
  document.getElementById('lesson-title').innerText = currentModule.title;
  document.getElementById('lesson-subtitle').innerText = lesson.title;
  
  const coverImage = document.getElementById('lesson-cover-image');
  if(coverImage) {
      if(lesson.image) {
          coverImage.src = lesson.image;
          coverImage.classList.remove('hidden');
      } else {
          coverImage.classList.add('hidden');
      }
  }

  document.getElementById('lesson-article').innerHTML = lesson.content;
  injectHiddenItem();
  
  // Mascote Robô
  document.getElementById('mascot-message').innerText = lesson.robotMessage || "Vamos resolver mais esse desafio juntos!";
  
  // Controle do Textarea do Guia de Missão
  const guiaContainer = document.getElementById('guia-missao-container');
  const guiaTextarea = document.getElementById('guia-missao-textarea');
  const isCompleted = currentUser.progress.includes(lesson.id);

  if(guiaContainer && guiaTextarea) {
      if(lesson.content.includes("Guia de Missão") || lesson.content.includes("Guia de Missao")) {
          guiaContainer.classList.remove('hidden');
          guiaTextarea.value = currentUser.answers[lesson.id + '_guia'] || '';
          if (isCompleted) {
              guiaTextarea.disabled = true;
          } else {
              guiaTextarea.disabled = false;
          }
      } else {
          guiaContainer.classList.add('hidden');
      }
  }
  
  const btn = document.getElementById('complete-lesson-btn');
  const feedback = document.getElementById('quiz-feedback');
  const optionsContainer = document.getElementById('quiz-options');
  const textAreaContainer = document.getElementById('quiz-text-area-container');
  const textArea = document.getElementById('quiz-textarea');
  const fileAreaContainer = document.getElementById('quiz-file-area-container');
  const fileInput = document.getElementById('quiz-file-input');
  
  feedback.className = 'quiz-feedback hidden';
  feedback.innerText = '';
  optionsContainer.innerHTML = '';
  textArea.value = currentUser.answers[lesson.id] || '';
  
  // Limpar Preview de Imagem
  currentUploadedImage = null;
  const previewContainer = document.getElementById('file-preview-container');
  if(previewContainer) previewContainer.classList.add('hidden');
  if(fileInput) fileInput.value = '';

  if(lesson.type === 'text') {
      optionsContainer.classList.add('hidden');
      if(fileAreaContainer) fileAreaContainer.classList.add('hidden');
      textAreaContainer.classList.remove('hidden');
      if (isCompleted) {
          textArea.disabled = true;
          feedback.innerText = 'Missão validada pelo professor. Resposta bloqueada para edição.';
          feedback.className = 'quiz-feedback success';
          feedback.classList.remove('hidden');
      } else {
          textArea.disabled = false;
      }
  } else if (lesson.type === 'file') {
      optionsContainer.classList.add('hidden');
      textAreaContainer.classList.add('hidden');
      if(fileAreaContainer) fileAreaContainer.classList.remove('hidden');
      if ((isCompleted || isPending) && currentUser.answers[lesson.id]) {
          document.getElementById('file-preview-image').src = currentUser.answers[lesson.id];
          if(previewContainer) previewContainer.classList.remove('hidden');
          if(fileInput) fileInput.disabled = isCompleted;
      } else {
          if(fileInput) fileInput.disabled = false;
      }
  } else {
      textAreaContainer.classList.add('hidden');
      if(fileAreaContainer) fileAreaContainer.classList.add('hidden');
      optionsContainer.classList.remove('hidden');
      document.getElementById('quiz-question').innerText = lesson.quiz ? lesson.quiz.question : (lesson.robotMessage || "");
      
      if (lesson.quiz) {
        // Lógica de Dica (Scroll of Oracle)
        const hasHintPower = currentUser.equippedItems.some(id => {
            const item = shopItems.find(i => i.id === id);
            return item && item.hintPower;
        });

        if (hasHintPower && !isCompleted && !isPending) {
            const hintBtn = document.createElement('button');
            hintBtn.className = 'btn warning-btn w-full mb-4';
            hintBtn.innerHTML = '🔮 Usar Dica do Oráculo';
            hintBtn.onclick = () => {
                const correctLetter = ['A', 'B', 'C', 'D'][lesson.quiz.correctIndex];
                showToast(`O Oráculo sussurra: A resposta correta é a letra ${correctLetter}`, "✨");
                hintBtn.disabled = true;
                hintBtn.style.opacity = '0.5';
            };
            optionsContainer.appendChild(hintBtn);
        }

        lesson.quiz.options.forEach((opt, idx) => {
          const optEl = document.createElement('div');
          optEl.className = 'quiz-option';
          if (isCompleted && idx === lesson.quiz.correctIndex) optEl.classList.add('correct');
          optEl.innerText = opt;
          if (!isCompleted && !isPending) {
              optEl.addEventListener('click', () => selectQuizOption(idx, optEl));
          } else {
              optEl.style.cursor = 'default';
              optEl.style.opacity = '0.8';
          }
          optionsContainer.appendChild(optEl);
        });
      }
  }

  const isPending = currentUser.pendingProgress && currentUser.pendingProgress.includes(lesson.id);

  if (isCompleted) {
    btn.innerText = "Rever Resposta ✓";
    btn.classList.remove('primary-btn');
    btn.classList.add('success-btn');
    
    if(index < currentModule.lessons.length - 1) {
       btn.innerText = "Próxima Missão →";
       btn.classList.replace('success-btn', 'primary-btn');
       btn.disabled = false;
       const newBtn = btn.cloneNode(true);
       btn.parentNode.replaceChild(newBtn, btn);
       newBtn.addEventListener('click', () => {
         currentLessonIndex++;
         openLesson(currentLessonIndex);
       });
       return;
    } else {
        btn.disabled = false;
        btn.innerText = "Mundo Concluído! Voltar ao Início";
        btn.onclick = () => initWorldSelect();
        return;
    }
  } else if (isPending) {
    btn.innerText = "Atualizar Resposta (Pendente)";
    btn.classList.remove('primary-btn');
    btn.classList.add('warning-btn');
    btn.disabled = false;
  } else {
    btn.innerText = "Enviar Resposta e Validar";
    btn.classList.remove('success-btn', 'warning-btn');
    btn.classList.add('primary-btn');
    btn.disabled = false;
  }
  
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener('click', handleValidation);
}

function selectQuizOption(index, element) {
  selectedQuizOption = index;
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
}

function handleValidation() {
  const lesson = currentModule.lessons[currentLessonIndex];
  if (currentUser.progress.includes(lesson.id)) return;

  const feedback = document.getElementById('quiz-feedback');
  
  let isValid = false;

  // Validação do Guia de Missão (se presente)
  const guiaContainer = document.getElementById('guia-missao-container');
  const guiaTextarea = document.getElementById('guia-missao-textarea');
  if(guiaContainer && !guiaContainer.classList.contains('hidden') && guiaTextarea) {
      const guiaText = guiaTextarea.value.trim();
      if(guiaText.length < 5) {
          feedback.innerText = 'O Robô diz: "Por favor, responda primeiro às perguntas do Guia de Missão logo abaixo do texto da aula!"';
          feedback.className = 'quiz-feedback error';
          feedback.classList.remove('hidden');
          return;
      }
      currentUser.answers[lesson.id + '_guia'] = guiaText;
  }

  if (lesson.type === 'text') {
      const text = document.getElementById('quiz-textarea').value.trim();
      if(text.length < 30) {
          feedback.innerText = 'O Robô diz: "Sua resposta está muito curta. Tente jogar ou revisar a lição mais um pouquinho e explique com detalhes!"';
          feedback.className = 'quiz-feedback error';
          feedback.classList.remove('hidden');
          return;
      }
      currentUser.answers[lesson.id] = text;
      isValid = true;
  } else if (lesson.type === 'file') {
      if (!currentUploadedImage && !currentUser.answers[lesson.id]) {
          feedback.innerText = 'Por favor, anexe uma foto da missão para avançar!';
          feedback.className = 'quiz-feedback error';
          feedback.classList.remove('hidden');
          return;
      }
      if (currentUploadedImage) currentUser.answers[lesson.id] = currentUploadedImage;
      isValid = true;
      if (currentUploadedImage) currentUser.answers[lesson.id] = currentUploadedImage;
      isValid = true;
  } else {
      if (selectedQuizOption === null) {
        feedback.innerText = 'Por favor, selecione uma opção primeiro!';
        feedback.className = 'quiz-feedback error';
        feedback.classList.remove('hidden');
        return;
      }
      const options = document.querySelectorAll('.quiz-option');
      if (selectedQuizOption === lesson.quiz.correctIndex) {
          isValid = true;
          options[selectedQuizOption].classList.add('correct');
      } else {
          playSound('error');
          feedback.innerText = 'Resposta incorreta. Leia a aula novamente e tente outra opção!';
          feedback.className = 'quiz-feedback error';
          feedback.classList.remove('hidden');
          options[selectedQuizOption].classList.add('incorrect');
          setTimeout(() => options[selectedQuizOption].classList.remove('incorrect'), 1500);
          return;
      }
  }

  if (isValid) {
    // Se for quiz de múltipla escolha, aprova na hora
    if (lesson.type === 'choice') {
        currentUser.progress.push(lesson.id);
        awardRewards(lesson);
    } else {
        // Se for texto ou arquivo, fica pendente
        if (!currentUser.pendingProgress.includes(lesson.id)) {
            currentUser.pendingProgress.push(lesson.id);
        }
        feedback.innerText = 'O Robô diz: "Sua resposta foi atualizada! Aguardando a validação final do professor para liberar seus prêmios."';
        feedback.className = 'quiz-feedback warning';
        feedback.classList.remove('hidden');
        showToast("Resposta Enviada!", "📤");
    }
    
    saveStudentData();
    
    const btn = document.getElementById('complete-lesson-btn');
    if(currentLessonIndex < currentModule.lessons.length - 1) {
       btn.innerText = "Próxima Missão →";
       btn.classList.replace('primary-btn', 'success-btn');
       const newBtn = btn.cloneNode(true);
       btn.parentNode.replaceChild(newBtn, btn);
       newBtn.addEventListener('click', () => {
         currentLessonIndex++;
         openLesson(currentLessonIndex);
       });
    } else {
       btn.innerText = "Aguardando Validação do Mundo";
       if(lesson.type === 'choice') btn.innerText = "Mundo Concluído! Voltar";
       btn.classList.replace('primary-btn', 'success-btn');
       btn.onclick = () => initWorldSelect();
    }
  }
}

function awardRewards(lesson) {
    let xpReward = lesson.xpReward;
    let coinReward = 50;
    
    currentUser.equippedItems.forEach(itemId => {
        const item = shopItems.find(i => i.id === itemId);
        if(item) {
            if(item.xpBonus) xpReward = Math.round(xpReward * (1 + item.xpBonus));
            if(item.coinBonus) coinReward = Math.round(coinReward * (1 + item.coinBonus));
        }
    });

    currentUser.xp += xpReward;
    currentUser.coins = (currentUser.coins || 0) + coinReward;
    
    playSound('correct');
    showToast(`+${coinReward} Moedas!`, '💰');
    
    const allLessonsCompleted = currentModule.lessons.every(l => currentUser.progress.includes(l.id));
    if(allLessonsCompleted && !currentUser.completedModules.includes(currentModule.id)) {
        currentUser.completedModules.push(currentModule.id);
        currentUser.badges.push({ title: currentModule.badgeTitle, icon: currentModule.badgeIcon });
    }
}

document.getElementById('back-to-dashboard').addEventListener('click', () => {
  initDashboard(currentModule);
});

document.getElementById('back-to-worlds-btn').addEventListener('click', () => {
  initWorldSelect();
});

document.getElementById('logout-btn').addEventListener('click', () => {
  currentUser = null;
  document.getElementById('login-form').reset();
  showScreen('login');
});

const closeIntroBtn = document.getElementById('close-world-intro-btn');
if(closeIntroBtn) {
    closeIntroBtn.addEventListener('click', () => {
        document.getElementById('world-intro-modal').classList.add('hidden');
    });
}

// Área do Professor
function openTeacherArea() {
  const pass = prompt("🔐 Digite a senha do Grande Mestre:");
  if (pass === 'Joseneto2020') {
      showScreen('teacher');
      renderStudentList();
  } else if (pass !== null) {
      alert("Senha Incorreta! Apenas o Grande Mestre tem acesso a esta zona.");
      showToast("Senha Incorreta!", "❌");
  }
}

// Garantir que os botões funcionem após o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const teacherBtn = document.getElementById('teacher-btn');
    if(teacherBtn) teacherBtn.onclick = openTeacherArea;

    const teacherAccessBtn = document.getElementById('teacher-access-btn');
    if(teacherAccessBtn) teacherAccessBtn.onclick = openTeacherArea;
});

document.getElementById('back-to-login-btn').addEventListener('click', () => {
  showScreen('login');
});

function renderStudentList() {
  const list = document.getElementById('student-list-container');
  const students = JSON.parse(localStorage.getItem('ava_students')) || [];
  list.innerHTML = '';
  
  if (students.length === 0) {
    list.innerHTML = '<li class="glass-card" style="margin-bottom: 1rem; border-color: rgba(239, 68, 68, 0.5); padding: 1rem;">Nenhum herói registrado neste dispositivo ainda.</li>';
  }

  // Abas do Professor
  document.querySelectorAll('.teacher-tab-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.teacher-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.teacher-tab-content').forEach(c => c.classList.add('hidden'));
        btn.classList.add('active');
        document.getElementById(`tab-${btn.dataset.tab}`).classList.remove('hidden');
        if(btn.dataset.tab === 'unlocks') renderModuleUnlocks();
        if(btn.dataset.tab === 'pending') renderPendingApprovals();
    };
  });

  document.getElementById('view-ranking-btn').onclick = () => {
    showScreen('ranking');
    initRanking();
  };

  document.getElementById('reset-ranking-btn').onclick = () => {
    if(confirm("ATENÇÃO: Isso apagará TODOS os dados de alunos e resetará o ranking. Deseja continuar?")) {
        localStorage.removeItem('ava_students');
        renderStudentList();
        showToast("Ranking Resetado!", "🧹");
    }
  };
  
  students.forEach(s => {
    const cModules = s.completedModules || [];
    const percentage = Math.round((cModules.length / courseModules.length) * 100);
    const textAnswersCount = s.answers ? Object.keys(s.answers).length : 0;

    const li = document.createElement('li');
    li.style.flexDirection = "column";
    li.style.gap = "0.5rem";
    li.innerHTML = `
      <div style="display:flex; justify-content:space-between; width:100%;">
        <span><strong>${s.name}</strong> (Nível ${s.level || 1})</span>
        <span>Progressão: ${percentage}%</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-secondary);">
        XP Acumulado: ${s.xp || 0} | Missões Descritivas Entregues: ${textAnswersCount} | Badges (Conquistas): ${s.badges ? s.badges.length : 0}
      </div>
      <button class="btn text-btn mt-2" style="padding: 0; text-align: left; font-size: 0.85rem; text-decoration: underline;" onclick="viewStudentImages('${s.name}')">📸 Visualizar Fotos das Missões</button>
    `;
    list.appendChild(li);
  });
}

// Exportar CSV - Lógica Unificada
function downloadCSV(dataArray, filename) {
  if (dataArray.length === 0) {
    alert("Não há dados para exportar.");
    return;
  }
  
  let csvContent = "data:text/csv;charset=utf-8,";
  
  // Cabeçalhos Fixos
  let headers = "Nome do Estudante,Nível,XP Acumulado,Missões Finalizadas,Conquistas,Progresso (%)";
  
  // Cabeçalhos Dinâmicos (Todas as lições de todos os módulos)
  const allLessonIds = [];
  courseModules.forEach(mod => {
      mod.lessons.forEach(l => {
          allLessonIds.push(l.id);
          let safeTitle = l.title.replace(/,/g, '').replace(/"/g, '""');
          headers += `,"Resposta: ${safeTitle}"`;
      });
  });
  csvContent += headers + "\n";
  
  dataArray.forEach(s => {
    const cModules = s.completedModules || [];
    const percentage = Math.round((cModules.length / courseModules.length) * 100);
    const level = s.level || 1;
    const xp = s.xp || 0;
    const badgesCount = s.badges ? s.badges.length : 0;
    const aulas = s.progress ? s.progress.length : 0;
    
    let row = `"${s.name}","${level}","${xp}","${aulas}","${badgesCount}","${percentage}%"`;
    
    allLessonIds.forEach(id => {
        let answer = s.answers && s.answers[id] ? s.answers[id] : "Não realizada";
        let guia = s.answers && s.answers[id + '_guia'] ? s.answers[id + '_guia'] : "";
        if (typeof answer === 'string' && answer.startsWith('data:image')) {
            answer = "[ FOTO ANEXADA ]";
        } else {
            answer = answer.replace(/"/g, '""').replace(/\n/g, ' - ');
        }
        if(guia) {
            guia = guia.replace(/"/g, '""').replace(/\n/g, ' - ');
            answer = "Guia: " + guia + " | Desafio: " + answer;
        }
        row += `,"${answer}"`;
    });

    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Botão do Professor (Todos os Alunos)
document.getElementById('export-csv-btn').addEventListener('click', () => {
  const students = JSON.parse(localStorage.getItem('ava_students')) || [];
  downloadCSV(students, "relatorio_geral_classe.csv");
});

// Botão do Aluno (Apenas o Próprio Progresso)
document.getElementById('student-export-csv-btn').addEventListener('click', () => {
  if (currentUser) {
    downloadCSV([currentUser], `meu_progresso_${currentUser.name.replace(/\s+/g, '_').toLowerCase()}.csv`);
  }
});

// Ver imagens do Aluno (Área do Professor)
window.viewStudentImages = function(studentName) {
  const students = JSON.parse(localStorage.getItem('ava_students')) || [];
  const student = students.find(s => s.name === studentName);
  if(!student || !student.answers) return alert("Nenhuma resposta encontrada.");
  
  let html = `<div style="padding: 20px; background: var(--glass-bg); backdrop-filter: blur(16px); color: white; border-radius: 12px; border: 1px solid var(--glass-border); max-height: 85vh; width: 90%; max-width: 500px; overflow-y: auto;">
      <h3 style="margin-bottom: 15px; color: var(--primary);">Fotos: ${studentName}</h3>`;
  
  let hasImages = false;
  Object.keys(student.answers).forEach(key => {
      const ans = student.answers[key];
      if(typeof ans === 'string' && ans.startsWith('data:image')) {
          hasImages = true;
          let lessonTitle = "Missão " + key;
          courseModules.forEach(mod => {
             const l = mod.lessons.find(x => x.id === key);
             if(l) lessonTitle = l.title;
          });
          html += `<div style="margin-bottom: 20px;">
                      <strong style="display:block; margin-bottom: 5px;">${lessonTitle}</strong>
                      <img src="${ans}" style="max-width: 100%; border: 1px solid var(--glass-border); border-radius: 8px;">
                   </div>`;
      }
  });

  if(!hasImages) {
      html += `<p style="margin-bottom: 20px; color: var(--text-secondary);">O aluno não possui fotos anexadas.</p>`;
  }
  
  html += `<button onclick="document.getElementById('image-modal').remove()" class="btn primary-btn w-full">Fechar</button></div>`;
  
  const modal = document.createElement('div');
  modal.id = 'image-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0'; modal.style.left = '0'; modal.style.width = '100vw'; modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(0,0,0,0.6)';
  modal.style.display = 'flex'; modal.style.justifyContent = 'center'; modal.style.alignItems = 'center';
  modal.style.zIndex = '9999';
  modal.innerHTML = html;
  
  document.body.appendChild(modal);
}

// Boss Battle Trigger
window.triggerBossBattle = function() {
  const modal = document.createElement('div');
  modal.id = 'boss-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0'; modal.style.left = '0'; modal.style.width = '100vw'; modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(0,0,0,0.95)';
  modal.style.display = 'flex'; modal.style.justifyContent = 'center'; modal.style.alignItems = 'center';
  modal.style.zIndex = '99999';
  modal.style.transition = 'all 2s ease';
  
  modal.innerHTML = `
    <div style="text-align:center; color:white; animation: shake 0.5s infinite;">
      <h1 style="color: #ef4444; font-size: 3rem; text-transform: uppercase; margin-bottom: 20px;">Monstro da Ignorância</h1>
      <img src="./assets/boss_monster.png" style="max-width: 80%; max-height: 60vh; border-radius: 20px; border: 5px solid #ef4444; box-shadow: 0 0 50px #ef4444;" id="boss-img">
    </div>
  `;
  document.body.appendChild(modal);

  if(!document.getElementById('boss-keyframes')) {
      const style = document.createElement('style');
      style.id = 'boss-keyframes';
      style.innerHTML = `
        @keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 20% { transform: translate(-3px, 0px) rotate(1deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 40% { transform: translate(1px, -1px) rotate(1deg); } 50% { transform: translate(-1px, 2px) rotate(-1deg); } 60% { transform: translate(-3px, 1px) rotate(0deg); } 70% { transform: translate(3px, 1px) rotate(-1deg); } 80% { transform: translate(-1px, -1px) rotate(1deg); } 90% { transform: translate(1px, 2px) rotate(0deg); } 100% { transform: translate(1px, -2px) rotate(-1deg); } }
        @keyframes flashAndFade { 0% { filter: brightness(1); } 50% { filter: brightness(10) invert(1); opacity: 1; transform: scale(1.1); } 100% { filter: brightness(0); opacity: 0; transform: scale(0.1); } }
      `;
      document.head.appendChild(style);
  }

  setTimeout(() => {
    const img = document.getElementById('boss-img');
    if(img) img.style.animation = 'flashAndFade 3s forwards';
    
    setTimeout(() => {
      modal.innerHTML = `
        <div style="text-align:center; color:white; animation: fadeIn 2s forwards;">
          <h1 style="color: #10b981; font-size: 4rem; text-transform: uppercase; text-shadow: 0 0 20px #10b981;">VITÓRIA!</h1>
          <p style="font-size: 1.5rem; max-width: 600px; margin: 20px auto;">Sua Guilda destruiu a Ignorância. O conhecimento flui livremente pelos cabos do reino.</p>
          <p style="font-size: 1.2rem; color: #a855f7;">Módulo Boss Concluído! XP Máximo adquirido!</p>
          <button onclick="document.getElementById('boss-modal').remove()" class="btn success-btn mt-4">Retornar como Herói</button>
        </div>
      `;
    }, 3000);
  }, 3000);
}

// RPG - Loja e Inventário
const shopItems = [
  { id: 'shield_arcane', name: 'Escudo Arcano', price: 200, icon: '🛡️', category: 'accessory', minLevel: 1, effect: 'Defesa contra ignorância (+10% XP)', xpBonus: 0.1 },
  { id: 'boot_speed', name: 'Botas da Fibra Óptica', price: 250, icon: '🥾', category: 'accessory', minLevel: 1, effect: 'Navegação rápida (+5% XP)', xpBonus: 0.05 },
  { id: 'cloak_master', name: 'Capa do Mestre', price: 350, icon: '🧥', category: 'accessory', minLevel: 3, effect: 'Sorte de explorador (+20% Moedas)', coinBonus: 0.2 },
  { id: 'scroll_oracle', name: 'Pergaminho do Oráculo', price: 400, icon: '📜', category: 'consumable', minLevel: 2, effect: 'Revela dicas nas missões (Equipe para usar)', hintPower: true },
  { id: 'sword_silicon', name: 'Espada de Silício', price: 500, icon: '⚔️', category: 'weapon', minLevel: 5, effect: 'Necessária para enfrentar Bosses Finais', requiredForBoss: true },
  { id: 'ring_double', name: 'Anel do Dobro', price: 700, icon: '💍', category: 'accessory', minLevel: 4, effect: 'Dobra ganhos de moedas (+100% Moedas)', coinBonus: 1.0 },
  { id: 'helmet_gold', name: 'Elmo de Ouro', price: 800, icon: '🪖', category: 'accessory', minLevel: 8, effect: 'Aura de Sabedoria Máxima (+25% XP)', xpBonus: 0.25 },
  { id: 'staff_wizard', name: 'Cajado do Mago TI', price: 1500, icon: '🪄', category: 'weapon', minLevel: 10, effect: 'Poder supremo de processamento (+50% XP)', xpBonus: 0.5 },
  { id: 'gem_intel', name: 'Gema da Intel', price: 2500, icon: '💎', category: 'relic', minLevel: 15, effect: 'Conhecimento total (+100% XP e Moedas)', xpBonus: 1.0, coinBonus: 1.0 }
];

document.getElementById('open-shop-btn').addEventListener('click', () => {
    showScreen('shop');
    initShop();
});

document.getElementById('back-from-shop-btn').addEventListener('click', () => {
    initWorldSelect();
});

function initShop() {
    const grid = document.getElementById('shop-items-grid');
    document.getElementById('shop-user-coins').innerText = currentUser.coins;
    grid.innerHTML = '';

    shopItems.forEach(item => {
        const isOwned = currentUser.inventory.includes(item.id);
        const isLevelLocked = (currentUser.level || 1) < item.minLevel;
        
        const card = document.createElement('div');
        card.className = `glass-card shop-item-card ${isLevelLocked ? 'locked-item' : ''}`;
        card.style.textAlign = 'center';
        card.style.opacity = isLevelLocked ? '0.7' : '1';

        card.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem; filter: ${isLevelLocked ? 'grayscale(1) blur(2px)' : 'none'}">${item.icon}</div>
            <h4>${item.name}</h4>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0.3rem 0;">${item.effect}</p>
            <p style="color: var(--primary); font-weight: bold; margin: 0.5rem 0;">${item.price} Moedas</p>
            ${isLevelLocked ? `<div class="item-requirement-locked">🔒 Requer Nível ${item.minLevel}</div>` : ''}
            <button class="btn ${isOwned ? 'success-btn' : 'primary-btn'} w-full" 
                    ${isOwned || isLevelLocked ? 'disabled' : ''} 
                    onclick="buyItem('${item.id}')">
                ${isOwned ? 'Adquirido' : (isLevelLocked ? 'Bloqueado' : 'Comprar')}
            </button>
        `;
        grid.appendChild(card);
    });
}

window.buyItem = function(itemId) {
    const item = shopItems.find(i => i.id === itemId);
    if (!item) return;

    if (currentUser.coins >= item.price) {
        currentUser.coins -= item.price;
        currentUser.inventory.push(item.id);
        playSound('correct');
        saveStudentData();
        initShop();
        alert(`Você adquiriu o ${item.name}!`);
    } else {
        alert("Moedas insuficientes! Complete mais missões para ganhar ouro.");
    }
}

function updateInventoryUI() {
    const list = document.getElementById('inventory-list');
    if(!list) return;
    list.innerHTML = '';

    if (currentUser.inventory.length === 0) {
        list.innerHTML = '<p style="grid-column: 1/-1; font-size: 0.8rem; color: var(--text-secondary);">Sua mochila está vazia.</p>';
    } else {
        currentUser.inventory.forEach(itemId => {
            const item = shopItems.find(i => i.id === itemId);
            if(item) {
                const itemEl = document.createElement('div');
                itemEl.className = 'inventory-item';
                itemEl.title = item.name;
                itemEl.innerHTML = `<span>${item.icon}</span>`;
                list.appendChild(itemEl);
            }
        });
    }
}

// Sistema de Baús
document.getElementById('dashboard-chest').addEventListener('click', () => {
    if (currentUser.keys > 0) {
        openChest();
    } else {
        alert("Você precisa de uma Chave Mágica 🔑 para abrir este baú! Complete missões para encontrar chaves.");
    }
});

function openChest() {
    currentUser.keys--;
    saveStudentData();
    updateGamificationStats();

    const modal = document.getElementById('chest-modal');
    const rewardDiv = document.getElementById('chest-reward');
    const animImg = document.getElementById('chest-animation-img');
    const title = document.getElementById('chest-modal-title');
    
    modal.classList.remove('hidden');
    rewardDiv.classList.add('hidden');
    animImg.src = './assets/chest_closed.png';
    title.innerText = "Abrindo Baú Tesouro...";

    // Animação de tremor
    animImg.style.animation = 'shake 0.5s infinite';

    setTimeout(() => {
        animImg.style.animation = 'none';
        animImg.src = './assets/chest_open.png';
        title.innerText = "BAÚ ABERTO!";
        
        // Gerar recompensa aleatória
        const rewards = [
            { type: 'coins', amount: 150, text: '150 Moedas de Ouro!', icon: '💰' },
            { type: 'coins', amount: 300, text: '300 Moedas de Ouro! (RARO)', icon: '💰' },
            { type: 'key', amount: 2, text: '2 Chaves Mágicas!', icon: '🔑' },
            { type: 'xp', amount: 500, text: '500 XP de Sabedoria!', icon: '✨' }
        ];
        
        const reward = rewards[Math.floor(Math.random() * rewards.length)];
        
        if(reward.type === 'coins') currentUser.coins += reward.amount;
        if(reward.type === 'key') currentUser.keys += reward.amount;
        if(reward.type === 'xp') currentUser.xp += reward.amount;
        
        playSound('correct');
        document.getElementById('reward-item-display').innerHTML = `
            <div style="font-size: 3rem;">${reward.icon}</div>
            <p style="font-size: 1.2rem; font-weight: bold; color: var(--primary);">${reward.text}</p>
        `;
        
        rewardDiv.classList.remove('hidden');
        saveStudentData();
        updateGamificationStats();
    }, 2000);
}

document.getElementById('close-chest-modal-btn').addEventListener('click', () => {
    document.getElementById('chest-modal').classList.add('hidden');
});

// Personalização do Avatar
document.getElementById('customize-avatar-btn').addEventListener('click', () => {
    initCustomization();
    document.getElementById('customize-modal').classList.remove('hidden');
});

document.getElementById('close-customize-modal-btn').addEventListener('click', () => {
    document.getElementById('customize-modal').classList.add('hidden');
    updateGamificationStats(); // Atualiza o avatar no dashboard
});

function initCustomization() {
    const grid = document.getElementById('customization-items-grid');
    grid.innerHTML = '';

    if (currentUser.inventory.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; font-size: 0.8rem; color: var(--text-secondary);">Você não possui acessórios ainda. Visite a Loja!</p>';
    } else {
        currentUser.inventory.forEach(itemId => {
            const item = shopItems.find(i => i.id === itemId);
            if(item) {
                const isEquipped = currentUser.equippedItems.includes(itemId);
                const itemEl = document.createElement('div');
                itemEl.className = `inventory-item ${isEquipped ? 'equipped' : ''}`;
                itemEl.style.cursor = 'pointer';
                itemEl.title = item.name;
                itemEl.innerHTML = `<span>${item.icon}</span>`;
                itemEl.addEventListener('click', () => toggleEquip(itemId));
                grid.appendChild(itemEl);
            }
        });
    }
    renderPreviewAvatar();
}

function toggleEquip(itemId) {
    const index = currentUser.equippedItems.indexOf(itemId);
    if (index > -1) {
        currentUser.equippedItems.splice(index, 1);
    } else {
        currentUser.equippedItems.push(itemId);
    }
    saveStudentData();
    initCustomization();
}

function renderPreviewAvatar() {
    const container = document.getElementById('preview-accessories');
    const img = document.getElementById('preview-avatar-img');
    
    if (currentUser.gender === 'female') {
        img.src = './assets/avatar_knight_female.png';
    } else {
        img.src = './assets/avatar_knight.png';
    }

    container.innerHTML = '';
    currentUser.equippedItems.forEach(itemId => {
        const item = shopItems.find(i => i.id === itemId);
        if(item) {
            const icon = document.createElement('div');
            icon.className = 'equipped-icon-overlay';
            icon.innerText = item.icon;
            container.appendChild(icon);
        }
    });
}

function renderMainAvatar() {
    const container = document.getElementById('avatar-accessories');
    const img = document.getElementById('main-avatar-img');
    if(!container || !img) return;

    if (currentUser.gender === 'female') {
        img.src = './assets/avatar_knight_female.png';
    } else {
        img.src = './assets/avatar_knight.png';
    }

    container.innerHTML = '';
    currentUser.equippedItems.forEach(itemId => {
        const item = shopItems.find(i => i.id === itemId);
        if(item) {
            const icon = document.createElement('div');
            icon.className = 'equipped-icon-overlay';
            icon.innerText = item.icon;
            container.appendChild(icon);
        }
    });
}

// Sobrescrever updateGamificationStats para incluir o avatar
const originalUpdateStats = updateGamificationStats;
updateGamificationStats = function() {
    originalUpdateStats();
    renderMainAvatar();
}

function injectHiddenItem() {
    // 25% de chance de aparecer um item escondido na lição
    if (Math.random() > 0.25) return;

    const article = document.getElementById('lesson-article');
    const paragraphs = article.querySelectorAll('p');
    if (paragraphs.length === 0) return;

    const targetP = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    const item = document.createElement('span');
    item.className = 'hidden-item-collectible';
    
    const items = ['💎', '🪙', '🧪', '📜'];
    const chosen = items[Math.floor(Math.random() * items.length)];
    item.innerText = chosen;
    item.title = "Clique para coletar!";
    
    item.onclick = (e) => {
        e.stopPropagation();
        const reward = 30 + Math.floor(Math.random() * 50);
        currentUser.coins += reward;
        playSound('coin');
        showToast(`Item Escondido! +${reward} Moedas`, '✨');
        item.style.display = 'none';
        saveStudentData();
        updateGamificationStats();
    };

    targetP.appendChild(item);
}

function renderModuleUnlocks() {
    const container = document.getElementById('module-unlock-list');
    const settings = JSON.parse(localStorage.getItem('ava_settings')) || { lockedModules: [] };
    container.innerHTML = '';

    courseModules.forEach(world => {
        const item = document.createElement('div');
        item.className = 'module-unlock-item';
        const isLocked = settings.lockedModules.includes(world.id);
        
        item.innerHTML = `
            <div>
                <span style="font-size: 1.2rem;">${world.icon}</span>
                <strong>${world.title}</strong>
            </div>
            <label class="switch">
                <input type="checkbox" ${!isLocked ? 'checked' : ''} onchange="toggleModuleLock('${world.id}', this.checked)">
                <span class="slider"></span>
            </label>
        `;
        container.appendChild(item);
    });
}

window.toggleModuleLock = function(moduleId, isUnlocked) {
    let settings = JSON.parse(localStorage.getItem('ava_settings')) || { lockedModules: [] };
    if (isUnlocked) {
        settings.lockedModules = settings.lockedModules.filter(id => id !== moduleId);
    } else {
        if (!settings.lockedModules.includes(moduleId)) {
            settings.lockedModules.push(moduleId);
        }
    }
    localStorage.setItem('ava_settings', JSON.stringify(settings));
    showToast(isUnlocked ? "Missão Liberada!" : "Missão Bloqueada!", isUnlocked ? "🔓" : "🔒");
}

// RANKING
document.getElementById('back-from-ranking-btn').addEventListener('click', () => {
    showScreen('teacher');
});

function initRanking() {
    const students = JSON.parse(localStorage.getItem('ava_students')) || [];
    const sorted = [...students].sort((a, b) => (b.xp || 0) - (a.xp || 0));
    
    // Podium
    const podiumContainer = document.getElementById('podium-container');
    podiumContainer.innerHTML = '';
    
    const top3 = sorted.slice(0, 3);
    top3.forEach((s, i) => {
        const item = document.createElement('div');
        item.className = `podium-item podium-${i+1}`;
        item.innerHTML = `
            <div class="podium-rank-box">${i+1}</div>
            <div class="podium-name">${s.name.split(' ')[0]}</div>
            <div style="font-size: 0.7rem;">LVL ${s.level || 1}</div>
        `;
        podiumContainer.appendChild(item);
    });

    // List
    const list = document.getElementById('ranking-list');
    list.innerHTML = '';
    sorted.forEach((s, i) => {
        const row = document.createElement('div');
        row.className = `ranking-row ${s.name === currentUser.name ? 'me' : ''}`;
        row.innerHTML = `
            <div style="font-weight: bold;">#${i+1}</div>
            <div>${s.name}</div>
            <div>✨ ${s.xp || 0} XP</div>
            <div>💰 ${s.coins || 0}</div>
        `;
        list.appendChild(row);
    });
}

// Importar Dados de Ranking
document.getElementById('import-ranking-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            let students = JSON.parse(localStorage.getItem('ava_students')) || [];
            
            // Se for um array de estudantes
            if (Array.isArray(importedData)) {
                importedData.forEach(newS => {
                    const idx = students.findIndex(s => s.name.toLowerCase() === newS.name.toLowerCase());
                    if (idx > -1) {
                        if ((newS.xp || 0) > (students[idx].xp || 0)) students[idx] = newS;
                    } else {
                        students.push(newS);
                    }
                });
            } else if (importedData.name) { // Se for um único estudante
                const idx = students.findIndex(s => s.name.toLowerCase() === importedData.name.toLowerCase());
                if (idx > -1) {
                    if ((importedData.xp || 0) > (students[idx].xp || 0)) students[idx] = importedData;
                } else {
                    students.push(importedData);
                }
            }
            
            localStorage.setItem('ava_students', JSON.stringify(students));
            showToast("Dados Importados!", "📥");
            if(currentUser) {
                const updated = students.find(s => s.name === currentUser.name);
                if(updated) currentUser = updated;
            }
            initRanking();
        } catch(err) {
            alert("Erro ao importar dados.");
        }
    };
    reader.readAsText(file);
});

function renderPendingApprovals() {
    const container = document.getElementById('pending-list-container');
    const students = JSON.parse(localStorage.getItem('ava_students')) || [];
    container.innerHTML = '';
    
    let hasPending = false;
    students.forEach(student => {
        if(student.pendingProgress && student.pendingProgress.length > 0) {
            hasPending = true;
            student.pendingProgress.forEach(lessonId => {
                const lesson = findLessonById(lessonId);
                const item = document.createElement('div');
                item.className = 'glass-card mb-4';
                item.style.padding = '1rem';
                item.style.marginBottom = '1rem';
                
                let answerDisplay = student.answers[lessonId];
                if(answerDisplay && answerDisplay.startsWith('data:image')) {
                    answerDisplay = `<img src="${answerDisplay}" style="max-width:200px; display:block; margin: 10px 0; border-radius: 8px;">`;
                } else {
                    answerDisplay = `<p style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; margin: 10px 0;">${answerDisplay || 'Sem resposta'}</p>`;
                }

                item.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong>${student.name}</strong>
                        <span class="badge-level">LVL ${student.level || 1}</span>
                    </div>
                    <div style="font-size: 0.9rem; color: var(--primary); margin-top: 5px;">${lesson ? lesson.title : lessonId}</div>
                    ${answerDisplay}
                    <div style="display:flex; gap: 10px; margin-top: 10px;">
                        <button class="btn success-btn" onclick="approveMission('${student.name}', '${lessonId}')">Aprovar ✓</button>
                        <button class="btn error-btn" onclick="rejectMission('${student.name}', '${lessonId}')">Reprovar ✗</button>
                    </div>
                `;
                container.appendChild(item);
            });
        }
    });

    if(!hasPending) {
        container.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--text-secondary);">Nenhuma missão pendente de avaliação.</p>';
    }
}

function findLessonById(id) {
    for(const mod of courseModules) {
        const l = mod.lessons.find(x => x.id === id);
        if(l) return l;
    }
    return null;
}

window.approveMission = function(studentName, lessonId) {
    let students = JSON.parse(localStorage.getItem('ava_students')) || [];
    const sIdx = students.findIndex(s => s.name === studentName);
    if(sIdx === -1) return;
    
    const student = students[sIdx];
    student.pendingProgress = student.pendingProgress.filter(id => id !== lessonId);
    if(!student.progress.includes(lessonId)) {
        student.progress.push(lessonId);
        
        // Award rewards
        const lesson = findLessonById(lessonId);
        if(lesson) {
            let xpReward = lesson.xpReward;
            let coinReward = 50;
            student.xp = (student.xp || 0) + xpReward;
            student.coins = (student.coins || 0) + coinReward;
            
            // Check module completion
            courseModules.forEach(mod => {
                if(mod.lessons.some(l => l.id === lessonId)) {
                    const allDone = mod.lessons.every(l => student.progress.includes(l.id));
                    if(allDone && !student.completedModules.includes(mod.id)) {
                        student.completedModules.push(mod.id);
                        student.badges.push({ title: mod.badgeTitle, icon: mod.badgeIcon });
                    }
                }
            });
        }
    }
    
    localStorage.setItem('ava_students', JSON.stringify(students));
    renderPendingApprovals();
    showToast(`Missão de ${studentName.split(' ')[0]} aprovada!`, "✅");
}

window.rejectMission = function(studentName, lessonId) {
    if(!confirm("Deseja realmente reprovar esta resposta? O aluno terá que enviar novamente.")) return;
    
    let students = JSON.parse(localStorage.getItem('ava_students')) || [];
    const sIdx = students.findIndex(s => s.name === studentName);
    if(sIdx === -1) return;
    
    const student = students[sIdx];
    student.pendingProgress = student.pendingProgress.filter(id => id !== lessonId);
    // Removemos a resposta para que ele possa enviar de novo
    delete student.answers[lessonId];
    
    localStorage.setItem('ava_students', JSON.stringify(students));
    renderPendingApprovals();
    showToast(`Missão de ${studentName.split(' ')[0]} reprovada.`, "❌");
}

// Inicialização
updateLoginHistory();
