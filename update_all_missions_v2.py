import sys
import re

new_modules = """const courseModules = [
  {
    id: 'uci-1',
    title: 'Mundo 1: Infraestrutura Arcana (UC I)',
    description: 'Redes de computadores, cabeamento, equipamentos e protocolos. A magia que conecta o mundo.',
    icon: '🌐',
    background: './assets/world_map_uc1.png',
    badgeTitle: 'Guardião da Rede',
    badgeIcon: '🛡️',
    lessons: [
      {
        id: 'uci-1-1',
        title: 'Sprint 1: A Arquitetura Invisível (OSI e TCP/IP)',
        image: './assets/network_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Para a magia da internet funcionar, os computadores precisam falar o mesmo idioma. Eles usam "Arquiteturas de Rede" chamadas <strong>Modelo OSI</strong> (7 camadas teóricas) e o <strong>TCP/IP</strong> (4 camadas práticas).</p>
          <p>Cada vez que você envia uma mensagem, ela desce por essas camadas, é dividida em pacotes, recebe um endereço IP e viaja pelo mundo físico (cabos ou wi-fi) até o destino.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Se estiver no computador, abra o Terminal (CMD) e digite <code>ping google.com</code> para ver os pacotes viajando.</li>
            <li><strong>Adaptação Mobile:</strong> Se estiver apenas com o celular, baixe o aplicativo gratuito "Fing" ou acesse as configurações de Wi-Fi e anote o seu endereço IP e Gateway.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=F_Yv22FwJt0" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Curso em Vídeo: Como funciona a Internet?</a></li>
              <li><a href="https://www.techtudo.com.br/noticias/2014/12/o-que-e-endereco-ip.ghtml" target="_blank" style="color: #60a5fa; text-decoration: underline;">📖 Leitura: O que é Endereço IP?</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'choice',
        robotMessage: "Vamos ver se você entendeu a essência da rede! O que é um endereço IP?",
        quiz: {
            question: 'Qual é a principal função de um Endereço IP na rede?',
            options: [
                'A) Proteger o computador contra vírus e magia das trevas.',
                'B) Identificar de forma única um dispositivo na rede para que os pacotes saibam onde chegar.',
                'C) Aumentar a velocidade do processador do celular.',
                'D) Funcionar como um cabo físico de internet.'
            ],
            correctIndex: 1
        }
      },
      {
        id: 'uci-1-2',
        title: 'Sprint 2: Os Fios do Destino (Cabeamento)',
        image: './assets/cables_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>As redes precisam de meios físicos. Usamos <strong>Cabos de Par Trançado (UTP)</strong> com conectores RJ-45 para ligar computadores locais (LAN), e <strong>Fibra Óptica</strong> para transmitir dados na velocidade da luz entre continentes (WAN).</p>
          <p>Para o cabo de rede funcionar, os 8 fios coloridos dentro dele precisam ser "crimpados" numa ordem exata (Padrões T568A ou T568B).</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Se estiver no laboratório, use um Alicate de Crimpagem para fazer um cabo no padrão T568A.</li>
            <li><strong>Adaptação Mobile/Casa:</strong> Pegue seu caderno e desenhe a sequência exata de cores do padrão T568A e T568B lado a lado, pintando com lápis de cor.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=1VqJ_n24oJc" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Bóson Treinamentos: Crimpagem de Cabos</a></li>
              <li><a href="https://pt.wikipedia.org/wiki/Cabo_de_par_tran%C3%A7ado" target="_blank" style="color: #60a5fa; text-decoration: underline;">📖 Leitura: Par Trançado (Wikipedia)</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Envie uma foto do seu cabo crimpado ou do desenho colorido que você fez no caderno com as ordens dos fios!"
      },
      {
        id: 'uci-1-3',
        title: 'Sprint 3: Os Portais Mágicos (Ativos de Rede)',
        image: './assets/router_fantasy.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Para interligar várias máquinas, usamos Ativos de Rede:</p>
          <ul>
            <li><strong>Switch:</strong> Conecta computadores num mesmo local (LAN). É inteligente e envia os dados só para a porta certa (Endereço MAC).</li>
            <li><strong>Roteador:</strong> O Mestre dos Portais. Ele conecta Redes Diferentes (LAN com a WAN/Internet) usando Endereços IP.</li>
            <li><strong>Access Point (Wi-Fi):</strong> Transforma o sinal de cabo em ondas de rádio (Rede Wireless).</li>
          </ul>

          <h4>Guia de Missão</h4>
          <ol>
            <li>Vá até o roteador Wi-Fi da sua casa ou laboratório, veja o modelo na etiqueta e descubra quantas portas LAN (geralmente amarelas) ele tem.</li>
            <li><strong>Alternativa Teórica:</strong> Descreva num texto a diferença entre um Switch e um Hub.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=XhPqYj9LGEg" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Qual a diferença entre Hub, Switch e Roteador?</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'text',
        robotMessage: "Descreva: Qual é o modelo do Roteador que você analisou? O que é mais seguro usar hoje em dia em uma empresa: Um Hub ou um Switch? Explique o porquê."
      },
      {
        id: 'uci-1-4',
        title: 'Sprint 4: A Forja de Mundos Virtuais (Simulação de Redes)',
        image: './assets/world_map_uc1.png',
        content: `
          <h4>Pílula de Conhecimento</h4>
          <p>Engenheiros de rede não quebram laboratórios reais para testar ideias. Eles usam simuladores como o <strong>Cisco Packet Tracer</strong> para criar computadores, cabos e roteadores virtuais, aplicando IPs e subredes antes de gastar dinheiro físico.</p>

          <h4>Guia de Missão</h4>
          <ol>
            <li>No laboratório (PC), abra o Packet Tracer e monte uma rede com 1 Switch e 3 PCs. Dê IPs (ex: 192.168.0.1) para cada um e faça o ping entre eles.</li>
            <li><strong>Adaptação Mobile:</strong> Se não tiver PC, você pode baixar o app "Cisco Packet Tracer Mobile" na sua lojinha do celular (gratuito) ou desenhar o diagrama lógico dessa rede (PCs com os IPs anotados ligados a um Switch) no caderno.</li>
          </ol>

          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=F3zWk6M5B1Y" target="_blank" style="color: #60a5fa; text-decoration: underline;">🎥 Tutorial: Iniciando no Packet Tracer</a></li>
            </ul>
          </div>
        `,
        xpReward: 100,
        type: 'file',
        robotMessage: "Envie o print da tela do seu simulador com a rede montada, ou a foto do diagrama lógico perfeito no seu caderno!"
      },
      {
        id: 'uci-1-5',
        title: 'Sprint 5: O Grande Exame da Guilda (Avaliação Teórica)',
        image: './assets/world_map_mario.png',
        content: `
          <h4>Prova de Ascensão - Infraestrutura Arcana</h4>
          <p>Chegou o momento de provar seu valor. Responda todas as 20 questões sobre Redes de Computadores numeradas abaixo, ou resolva no caderno.</p>
          <ol style="margin-left: 20px; font-size: 0.9rem; line-height: 1.6;">
            <li>O que é o Modelo OSI e qual sua finalidade?</li>
            <li>Cite as 7 camadas do Modelo OSI em ordem.</li>
            <li>Qual a principal diferença entre o Modelo OSI e a Arquitetura TCP/IP?</li>
            <li>Defina o que é uma LAN (Local Area Network).</li>
            <li>Defina o que é uma WAN (Wide Area Network).</li>
            <li>Para que serve o cabo de Par Trançado e por que os fios são trançados?</li>
            <li>Qual a principal vantagem da Fibra Óptica em relação ao cabo de cobre?</li>
            <li>O que significam os padrões T568A e T568B na crimpagem de cabos?</li>
            <li>O que é um Roteador e qual a sua função principal na rede?</li>
            <li>Explique o conceito de "Gateway Padrão".</li>
            <li>Para que serve o comando "tracert" no terminal?</li>
            <li>Qual a diferença fundamental entre um Hub e um Switch?</li>
            <li>Por que o Switch é considerado mais seguro e rápido que o Hub?</li>
            <li>O que é um Endereço MAC (MAC Address)?</li>
            <li>O que significa a sigla VLAN e qual o seu propósito?</li>
            <li>Dê um exemplo prático de onde usaríamos duas VLANs separadas no mesmo prédio.</li>
            <li>O que é uma rede Wireless e quais as vantagens e desvantagens?</li>
            <li>Como as ondas eletromagnéticas (interferência) afetam cabos de rede comuns?</li>
            <li>O que faz a camada Física do modelo OSI?</li>
            <li>Por que não podemos ter dois computadores com o mesmo endereço IP na mesma rede local?</li>
          </ol>
          <div class="highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left-color: #3b82f6; margin-top: 20px;">
            <strong>📚 Material de Consulta (Apostila Virtual)</strong><br>
            <ul>
              <li><p>Revise os vídeos das Sprints anteriores para encontrar todas as respostas teóricas destas questões!</p></li>
            </ul>
          </div>
        `,
        xpReward: 300,
        type: 'text',
        robotMessage: "Atenção: Para passar neste teste, sua resposta deve ser bem detalhada. Use o campo abaixo para responder às 20 questões."
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
  }
];"""

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the courseModules declaration.
# Find start of const courseModules = [
start_idx = content.find('const courseModules = [')
if start_idx == -1:
    print("Could not find courseModules block.")
    sys.exit(1)

# Find the end of the block. We look for '];' followed by '// Estado da Aplicação'
match_end = re.search(r"\];\s*// Estado da Aplicação", content[start_idx:])
if match_end:
    end_idx = start_idx + match_end.start() + 2 # the index right after ];
else:
    print("Could not find end of courseModules block.")
    sys.exit(1)

new_content = content[:start_idx] + new_modules + content[end_idx:]

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated the entire curriculum with reference materials successfully!")
