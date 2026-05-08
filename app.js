// ==========================================
// AVA MATEMÁTICA - SISTEMA RPG PREMIUM
// Versão: 1.1.0 (Motor Informática Integrado)
// ==========================================

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
  installBanner?.classList.remove('hidden');
});

installBtn?.addEventListener('click', () => {
  installBanner?.classList.add('hidden');
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    deferredPrompt = null;
  });
});

closeInstallBtn?.addEventListener('click', () => {
  installBanner?.classList.add('hidden');
});

// ==========================================
// BANCO DE DADOS DE MISSÕES (7 MUNDOS)
// ==========================================
const courseModules = [
  {
    id: 'uc1',
    title: 'Mundo 1: Trigonometria Avançada',
    icon: '📐',
    background: './assets/world_map_uc1.png',
    badgeTitle: 'Mestre do Círculo Trigonométrico',
    badgeIcon: '📐',
    lessons: [
      {
        id: 'm1-1', title: 'Fundamentos: Razões e Identidades', type: 'fill-blanks',
        theory: { 
          title: 'Além do Triângulo Retângulo', 
          content: '<h4>O Ciclo Trigonométrico</h4><p>No 3º ano, a trigonometria deixa de ser apenas sobre triângulos e passa a ser sobre **funções circulares**. O círculo unitário (raio=1) define o Seno no eixo Y e o Cosseno no eixo X.</p><ul><li><strong>Identidade Fundamental:</strong> sen²(θ) + cos²(θ) = 1.</li><li><strong>Relações:</strong> tg(θ) = sen(θ)/cos(θ).</li></ul>',
          realWorld: 'Engenheiros usam funções senoidais para modelar ondas de rádio, som e até batimentos cardíacos.',
          curiosity: 'O termo "seno" vem do latim "sinus" (baía ou dobra), uma tradução equivocada do árabe para a corda de um arco.',
          whyStudy: 'Essencial para Física (MHS) e Engenharia Elétrica.',
          tips: 'No 2º quadrante, o Seno é positivo e o Cosseno é negativo. Memorize os sinais!'
        },
        blanks: { text: "Pela Identidade Fundamental, se sen²(x) é 0.64, então cos²(x) deve ser [[1]]. A tangente de 45° é igual a [[2]].", answers: ["0.36", "1"] },
        xpReward: 200
      },
      {
        id: 'm1-2', title: 'A Lei dos Senos e Cossenos', type: 'choice',
        theory: { 
          title: 'Triângulos Quaisquer', 
          content: '<h4>Quando não há Ângulo Reto</h4><p>Para triângulos que não possuem 90°, usamos as leis generalizadas:</p><ul><li><strong>Lei dos Senos:</strong> a/sen(A) = b/sen(B) = c/sen(C).</li><li><strong>Lei dos Cossenos:</strong> a² = b² + c² - 2bc·cos(A).</li></ul>',
          realWorld: 'Utilizada em navegação aérea e marítima para calcular distâncias entre pontos fixos e móveis.',
          curiosity: 'A Lei dos Cossenos é uma generalização do Teorema de Pitágoras para qualquer ângulo.',
          whyStudy: 'Resolve problemas complexos de topografia e astronomia.',
          tips: 'Use a Lei dos Cossenos quando conhecer dois lados e o ângulo entre eles.'
        },
        quiz: { question: "Em um triângulo com lados b=10, c=10 e ângulo A=60°, qual o valor do lado 'a'? (Dica: cos 60° = 0.5)", options: ["10", "15", "20"], correctIndex: 0 },
        xpReward: 250
      },
      {
        id: 'm1-3', title: 'Equações Trigonométricas', type: 'text', correctValue: "30",
        theory: {
          title: 'Resolvendo Incógnitas',
          content: '<h4>Equações no Círculo</h4><p>Resolver sen(x) = 0.5 envolve encontrar os ângulos que possuem essa projeção no eixo Y.</p>',
          realWorld: 'Usado para encontrar pontos de interseção em órbitas e ondas.',
          curiosity: 'Existem infinitas soluções se não limitarmos o domínio!',
          whyStudy: 'Base para resolver problemas de oscilação.',
          tips: 'Pense no 1º quadrante primeiro.'
        },
        robotMessage: "Se sen(x) = 0.5 e 0 < x < 90, qual o valor de x?",
        xpReward: 300
      },
      {
        id: 'm1-4', title: 'Transformações de Arcos', type: 'choice',
        theory: {
          title: 'Soma e Diferença',
          content: '<h4>Fórmulas de Adição</h4><p>sen(a+b) = sen(a)cos(b) + sen(b)cos(a). "Minha terra tem palmeiras onde canta o sabiá..."</p>',
          realWorld: 'Essencial para processamento de sinais digitais.',
          curiosity: 'Essa fórmula permite calcular sen(75°) usando 30° e 45°.',
          whyStudy: 'Ferramenta avançada para simplificação de funções.',
          tips: 'Cosseno de (a+b) troca o sinal no meio!'
        },
        quiz: { question: "Qual o valor de cos(a+b)?", options: ["cos(a)cos(b) - sen(a)sen(b)", "cos(a)cos(b) + sen(a)sen(b)", "sen(a)cos(b) + sen(b)cos(a)"], correctIndex: 0 },
        xpReward: 350
      },
      {
        id: 'm1-6', title: 'CHEFE: O Guardião dos Radianos', type: 'boss-list',
        theory: { 
          title: 'Prova de Maestria Trigonométrica', 
          content: '<h4>Desafio Final do Mundo 1</h4><p>O Guardião exige precisão absoluta em conversões de arcos e sinais de quadrantes. Lembre-se: π rad = 180°.</p>',
          realWorld: 'A computação gráfica usa radianos internamente para todos os cálculos de rotação.',
          curiosity: 'O radiano é a medida natural de um ângulo, relacionando o comprimento do arco com o raio.',
          whyStudy: 'Base para o cálculo diferencial e integral no ensino superior.',
          tips: 'Para passar, revise os valores notáveis de 30°, 45° e 60°.'
        },
        isBoss: true,
        exercises: [
            { level: 'fácil', question: "Converta 90 graus para radianos:", answer: "pi/2" },
            { level: 'médio', question: "Sinal do Cosseno no 3º quadrante?", answer: "negativo" },
            { level: 'difícil', question: "Valor de sen(270°)?", answer: "-1" }
        ],
        xpReward: 1000
      }
    ]
  },
  {
    id: 'uc2',
    title: 'Mundo 2: Geometria Analítica',
    icon: '📍',
    background: './assets/world_map_uc2.png',
    badgeTitle: 'Cartógrafo do Plano',
    badgeIcon: '📍',
    lessons: [
      {
        id: 'm2-1', title: 'Distância e Ponto Médio', type: 'text', correctValue: "5",
        theory: { 
            title: 'Pontos no Espaço', 
            content: '<h4>Métrica Cartesiana</h4><p>Dados A(x1, y1) e B(x2, y2), a distância d é √(Δx² + Δy²). O ponto médio M é a média aritmética das coordenadas.</p>',
            realWorld: 'Algoritmos de rotas usam geometria analítica para encontrar o caminho mais curto.',
            curiosity: 'René Descartes criou este sistema para unificar Álgebra e Geometria.',
            whyStudy: 'Fundamental para funções e modelagem gráfica.',
            tips: 'Δx é a diferença entre os X (x2 - x1).'
        },
        robotMessage: "Qual a distância entre os pontos (1, 2) e (4, 6)?",
        xpReward: 200
      },
      {
        id: 'm2-2', title: 'A Equação da Reta', type: 'choice',
        theory: { 
            title: 'Linearidade', 
            content: '<h4>y = mx + n</h4><p>m é o coeficiente angular (inclinação) e n é o coeficiente linear (onde corta o eixo Y).</p>',
            realWorld: 'Economistas usam retas para modelar oferta e demanda em mercados simples.',
            curiosity: 'Se m1 · m2 = -1, as retas são perpendiculares!',
            whyStudy: 'Base para o estudo de derivadas.',
            tips: 'm = (y2-y1)/(x2-x1).'
        },
        quiz: { question: "Qual o coeficiente angular da reta que passa por (0,0) e (2,4)?", options: ["2", "0.5", "4"], correctIndex: 0 },
        xpReward: 250
      },
      {
        id: 'm2-5', title: 'CHEFE: O General das Cônicas', type: 'boss-list',
        theory: {
            title: 'Equação da Circunferência',
            content: '<h4>O Lugar Geométrico</h4><p>A equação (x-h)² + (y-k)² = r² define um círculo com centro (h, k) e raio r. É o Teorema de Pitágoras aplicado a todos os pontos!</p>',
            realWorld: 'Radar e sonar detectam objetos em áreas circulares usando essas equações.',
            curiosity: 'Qualquer ponto na borda está à mesma distância do centro.',
            whyStudy: 'Base para o estudo de órbitas e física circular.',
            tips: 'Se h e k forem zero, o centro é na origem (0,0).'
        },
        isBoss: true,
        exercises: [
            { level: 'fácil', question: "Raio de x² + y² = 25?", answer: "5" },
            { level: 'médio', question: "Centro de (x-2)² + (y+3)² = 9? (h,k)", answer: "2,-3" },
            { level: 'difícil', question: "Reta paralela a y=3x tem m igual a?", answer: "3" }
        ],
        xpReward: 1200
      }
    ]
  },
  {
    id: 'uc3',
    title: 'Mundo 3: A Conquista do Espaço',
    icon: '🗺️',
    background: './assets/world_map_uc3.png',
    badgeTitle: 'Mestre das Áreas',
    badgeIcon: '🗺️',
    lessons: [
      {
        id: 'm3-1', title: 'Área vs Perímetro', type: 'drag-drop',
        theory: {
          title: 'Área vs Perímetro',
          image: './assets/mundo_areas.png',
          content: '<h4>Não confunda as medidas!</h4><p><strong>Perímetro:</strong> É o contorno. Imagine que você está cercando um terreno. Usamos metros (m).</p><p><strong>Área:</strong> É o preenchimento. Imagine que você está pintando o chão. Usamos metros quadrados (m²).</p>',
          realWorld: 'Pedreiros e arquitetos calculam área para definir quantidade de material.',
          curiosity: 'Um quadrado de lado 4m tem área 16m², mas um retângulo 1m x 16m tem a mesma área com perímetro bem maior!',
          whyStudy: 'Fundamental para geometria plana e questões de ENEM.',
          tips: 'Área do triângulo: (Base × Altura) / 2.'
        },
        dragDrop: { items: [{ id: 'm2', text: 'm²' }, { id: 'm', text: 'm' }], targets: [{ id: 'a', label: 'Área', accepts: 'm2' }, { id: 'p', label: 'Perímetro', accepts: 'm' }] },
        xpReward: 150
      },
      {
        id: 'm3-2', title: 'Área do Retângulo', type: 'choice',
        theory: {
          title: 'A Lei do Produto',
          content: '<h4>Calculando Áreas</h4><p>Para retângulos, basta multiplicar a <strong>Base</strong> pela <strong>Altura</strong>. Simples assim! Se o campo tem 100m de base e 70m de altura, quanto espaço ele ocupa?</p>'
        },
        quiz: { question: "Um campo de 100m x 70m. Qual a Área total?", options: ["170m²", "7000m²", "340m²"], correctIndex: 1 },
        xpReward: 200
      },
      {
        id: 'm3-3', title: 'Cálculo de Cerca', type: 'text', correctValue: "80",
        theory: {
          title: 'Somando os Lados',
          content: '<h4>O Caminho em Volta</h4><p>Um terreno quadrado de 20m tem 4 lados iguais de 20m. Quantos metros de arame você precisa para dar uma volta completa nele?</p>'
        },
        robotMessage: "Terreno quadrado de 20m. Quantos metros de cerca?",
        xpReward: 250
      },
      {
        id: 'm3-4', title: 'Área do Triângulo', type: 'text', correctValue: "24",
        theory: {
          title: 'Metade do Retângulo',
          content: '<h4>A Fórmula do Triângulo</h4><p>Área = (base × altura) / 2. Um triângulo é sempre "metade" do paralelogramo correspondente.</p>',
          realWorld: 'Usada para calcular a área de lotes triangulares.',
          curiosity: 'A fórmula de Heron calcula a área usando apenas os 3 lados, sem precisar da altura!',
          whyStudy: 'Questão clássica de concursos e ENEM.',
          tips: 'Identifice corretamente a base e a altura perpendicular a ela.'
        },
        robotMessage: "Triângulo com base 8m e altura 6m. Qual a área?",
        xpReward: 300
      },
      {
        id: 'm3-5', title: 'CHEFE: O Agrimensor Real', type: 'boss-list',
        theory: {
          title: 'O Grande Loteamento',
          content: '<h4>Prova de Maestria</h4><p>O Agrimensor exige cálculos precisos de perímetros e áreas. Lembre-se de todas as fórmulas!</p>',
          realWorld: 'Agrimensores são profissionais que medem e demarcam terrenos oficialmente.',
          curiosity: 'No Brasil, toda venda de terreno exige um laudo de agrimensor registrado.',
          whyStudy: 'Para avançar ao reino das Proporções.',
          tips: 'Revisite as fórmulas de triângulo e retângulo!'
        },
        isBoss: true,
        exercises: [
          { level: 'fácil', question: "Área de quadrado lado 5?", answer: "25" },
          { level: 'médio', question: "Perímetro de retângulo 10x5?", answer: "30" },
          { level: 'difícil', question: "Área triângulo base 10 altura 5?", answer: "25" }
        ],
        xpReward: 800
      }
    ]
  },
  {
    id: 'uc4',
    title: 'Mundo 4: A Magia das Proporções',
    icon: '🧪',
    background: './assets/world_map_uc4.png',
    badgeTitle: 'Alquimista das Porcentagens',
    badgeIcon: '🧪',
    lessons: [
      {
        id: 'm4-1', title: 'Porcentagem é uma Fração!', type: 'drag-drop',
        theory: {
          title: 'Partes de Cem',
          image: './assets/mundo_porcentagem.png',
          content: '<h4>Porcentagem é uma Fração!</h4><p>50% é o mesmo que a metade (1/2). 25% é o mesmo que a quarta parte (1/4). Entender isso é o segredo para cálculos rápidos!</p>',
          realWorld: 'Bancos, lojas e governo usam porcentagem o tempo todo para juros, descontos e tributos.',
          curiosity: 'A palavra "percent" vem do latim "per centum", que significa "por cem".',
          whyStudy: 'É o conteúdo mais cobrado em ENEM e concursos.',
          tips: 'Para calcular 10%, divida por 10. Para 1%, divida por 100.'
        },
        dragDrop: { items: [{ id: 'p50', text: '50%' }, { id: 'p25', text: '25%' }], targets: [{ id: 'f12', label: 'Frasco 1/2', accepts: 'p50' }, { id: 'f14', label: 'Frasco 1/4', accepts: 'p25' }] },
        xpReward: 150
      },
      {
        id: 'm4-2', title: 'Desconto em Compras', type: 'choice',
        theory: {
          title: 'Economia Prática',
          content: '<h4>Pague Menos</h4><p>10% de um valor é fácil: basta dividir por 10. Se algo custa R$200, 10% é R$20. O preço com desconto é: 200 - 20 = R$180.</p>'
        },
        quiz: { question: "Produto de R$200 com 10% de desconto. Preço final?", options: ["R$180", "R$20", "R$190"], correctIndex: 0 },
        xpReward: 200
      },
      {
        id: 'm4-3', title: 'Calculando 25%', type: 'choice',
        theory: {
          title: 'Quartas Partes',
          content: '<h4>Calculando 25%</h4><p>25% é metade da metade. Se 80 é o total, a metade é 40, e a metade disso é 20. Viu como é simples?</p>'
        },
        quiz: { question: "Qual o valor de 25% de 80?", options: ["20", "40", "10"], correctIndex: 0 },
        xpReward: 250
      },
      {
        id: 'm4-4', title: 'CHEFE: A Armadilha da Variação', type: 'text', correctValue: "99",
        theory: {
          title: 'Cuidado com os Números',
          content: '<h4>A Pegadinha das Porcentagens</h4><p>Se um valor sobe 10% e depois desce 10%, ele volta ao original? PENSE BEM! O segundo cálculo é sobre o NOVO valor, não sobre o antigo!</p><p>R$100 + 10% = R$110. Agora: R$110 - 10% = R$110 - R$11 = R$99. Não volta!</p>',
          realWorld: 'Investidores perdem dinheiro por ignorar esse detalhe em quedas e altas da bolsa.',
          curiosity: 'Uma queda de 50% precisa de uma alta de 100% para recuperar o valor original!',
          whyStudy: 'Protege seu dinheiro de armadilhas de marketing.',
          tips: 'Sempre calcule sobre o valor ATUAL, não o original.'
        },
        robotMessage: "R$100 sobe 10% e cai 10%. Valor final?",
        xpReward: 900
      }
    ]
  },
  {
    id: 'uc5',
    title: 'Mundo 5: Os Mestres das Medidas',
    icon: '⚖️',
    background: './assets/world_map_ict.png',
    badgeTitle: 'Equilibrador de Pesos',
    badgeIcon: '⚖️',
    lessons: [
      {
        id: 'm5-1', title: 'Massa e Tempo', type: 'drag-drop',
        theory: {
          title: 'Massa e Tempo',
          image: './assets/mundo_medidas.png',
          content: '<h4>O Peso e o Relógio</h4><p>No Brasil, medimos peso (massa) em Quilogramas (Kg) e Gramas (g). O tempo é medido em Horas, Minutos e Segundos. 1 Kg = 1000g, 1h = 60min, 1min = 60s.</p>',
          realWorld: 'Toda receita culinária usa medidas de massa e tempo.',
          curiosity: 'O quilograma foi redefinido em 2019 com base na constante de Planck, deixando de depender de um objeto físico.',
          whyStudy: 'Conversão de unidades é essencial em física e química.',
          tips: 'Para converter kg em g, multiplique por 1000.'
        },
        dragDrop: { items: [{ id: 'kg', text: 'Massa' }, { id: 'min', text: 'Tempo' }], targets: [{ id: 't1', label: 'Kg / Gramas', accepts: 'kg' }, { id: 't2', label: 'Minutos / Horas', accepts: 'min' }] },
        xpReward: 150
      },
      {
        id: 'm5-2', title: 'A Receita do Mago', type: 'text', correctValue: "1.4",
        theory: {
          title: 'De Gramas para Quilos',
          content: '<h4>De Gramas para Quilos</h4><p>Lembre-se: 1kg = 1000g. Se você tem 4 pacotes de 350g, você tem 1400g no total. Quantos QUILOS isso representa? 1400 ÷ 1000 = 1.4 kg.</p>'
        },
        robotMessage: "350g x 4 receitas. Quantos QUILOS (use ponto para decimal)?",
        xpReward: 200
      },
      {
        id: 'm5-3', title: 'Convertendo Horas', type: 'choice',
        theory: {
          title: 'Segundos Preciosos',
          content: '<h4>Convertendo Horas</h4><p>1 hora tem 60 minutos, e cada minuto tem 60 segundos. Então, 1 hora tem 3600 segundos (60x60). Quanto tempo tem em 2 horas?</p>'
        },
        quiz: { question: "Quantos segundos existem em 2 horas completas?", options: ["120", "7200", "3600"], correctIndex: 1 },
        xpReward: 250
      },
      {
        id: 'm5-4', title: 'CHEFE: Mestre da Ampulheta', type: 'boss-list',
        theory: {
          title: 'O Teste da Balança e do Tempo',
          content: '<h4>O Desafio Final de Medidas</h4><p>Prove que você sabe converter gramas em quilos, minutos em horas e mililitros em litros.</p>',
          realWorld: 'Farmacêuticos, químicos e chefs precisam dessa habilidade diariamente.',
          curiosity: 'O sistema métrico foi criado durante a Revolução Francesa para padronizar medidas mundialmente.',
          whyStudy: 'Para avançar ao Mundo dos Números Racionais.',
          tips: 'Revise: 1kg=1000g, 1h=60min, 1L=1000ml.'
        },
        isBoss: true,
        exercises: [
          { level: 'fácil', question: "2kg em gramas?", answer: "2000" },
          { level: 'médio', question: "1h30min em minutos?", answer: "90" },
          { level: 'difícil', question: "5000ml em Litros?", answer: "5" }
        ],
        xpReward: 900
      }
    ]
  },
  {
    id: 'uc6',
    title: 'Mundo 6: O Universo dos Números',
    icon: '🌌',
    background: './assets/world_map_mario.png',
    badgeTitle: 'Navegador do Infinito',
    badgeIcon: '🌌',
    lessons: [
      {
        id: 'm6-1', title: 'Frações Visuais', type: 'hotspot',
        theory: {
          title: 'Fatiando a Pizza',
          image: './assets/mundo_racionais.png',
          content: '<h4>Fração Visual</h4><p>Frações são partes iguais de um inteiro. Se dividirmos algo em 4 partes e pegarmos 1, temos 1/4. Clique no ponto que representa a fatia correta.</p>',
          realWorld: 'Frações aparecem em receitas, cortes de tecido e partilha de heranças.',
          curiosity: 'Os egípcios só usavam frações unitárias (1/n). Eles escreviam 3/4 como 1/2 + 1/4!',
          whyStudy: 'Base para toda aritmética avançada e álgebra.',
          tips: 'O número de cima é o numerador (partes que temos), o de baixo é o denominador (total de partes).'
        },
        hotspot: { image: './assets/pizza.png', points: [{ id: 'p1', x: 30, y: 30, correct: true }, { id: 'p2', x: 70, y: 70, correct: false }] },
        xpReward: 150
      },
      {
        id: 'm6-2', title: 'Decimais e Frações', type: 'drag-drop',
        theory: {
          title: 'A Mesma Coisa com Outro Nome',
          content: '<h4>A Mesma Coisa com Outro Nome</h4><p>0,5 é a mesma coisa que 1/2. 1,0 é o mesmo que um inteiro. Arraste os valores para suas posições corretas na régua.</p>'
        },
        dragDrop: { items: [{ id: 'v05', text: '1/2' }, { id: 'v1', text: '1' }], targets: [{ id: 't1', label: 'Posição 0.5', accepts: 'v05' }, { id: 't2', label: 'Posição 1.0', accepts: 'v1' }] },
        xpReward: 200
      },
      {
        id: 'm6-3', title: 'Quem é o Diferente?', type: 'choice',
        theory: {
          title: 'Equivalência Numérica',
          content: '<h4>Quem é o Diferente?</h4><p>Aprendemos que 50%, 0,5 e 1/2 são exatamente o mesmo valor. Qual destes números no quiz NÃO representa os outros?</p>'
        },
        quiz: { question: "Qual destes é diferente dos outros: 0.5, 1/2, 50%, 0.05?", options: ["1/2", "0.05", "50%"], correctIndex: 1 },
        xpReward: 250
      },
      {
        id: 'm6-4', title: 'CHEFE: Imperador dos Racionais', type: 'boss-list',
        theory: {
          title: 'Domínio Decimal',
          content: '<h4>O Teste das Dízimas</h4><p>Transforme frações em decimais e identifique padrões. Dica: Para saber o decimal de uma fração, divida o numerador pelo denominador!</p>',
          realWorld: 'Notas de provas são expressas como decimais e porcentagens.',
          curiosity: 'A dízima periódica 0,999... é matematicamente igual a 1 — surpreendente, não?',
          whyStudy: 'Base para álgebra e cálculo no ensino superior.',
          tips: '1/3 = 0,333... (dízima periódica).'
        },
        isBoss: true,
        exercises: [
          { level: 'fácil', question: "1/4 em decimal?", answer: "0.25" },
          { level: 'médio', question: "0.1 + 0.2?", answer: "0.3" },
          { level: 'difícil', question: "1/3 é dízima periódica? (sim/não)", answer: "sim" }
        ],
        xpReward: 900
      }
    ]
  },
  {
    id: 'uc7',
    title: 'Mundo 7: Funções e Modelagem',
    icon: '📈',
    background: './assets/world_map_uc1.png',
    badgeTitle: 'Lorde dos Modelos',
    badgeIcon: '📈',
    lessons: [
      {
        id: 'm7-1', title: 'Tipos de Funções e Gráficos', type: 'drag-drop',
        theory: {
          title: 'Reconhecendo Funções pelo Gráfico',
          image: './assets/mundo_funcoes.png',
          content: '<h4>As 4 Famílias de Funções</h4><ul><li><strong>1º Grau (f(x) = ax+b):</strong> gráfico em RETA.</li><li><strong>2º Grau (f(x) = ax²+bx+c):</strong> gráfico em PARÁBOLA.</li><li><strong>Exponencial (f(x) = aˣ):</strong> curva crescente ou decrescente explosiva.</li><li><strong>Logarítmica (f(x) = log x):</strong> curva de crescimento lento.</li></ul>',
          realWorld: 'Analistas financeiros identificam padrões de crescimento observando o formato do gráfico.',
          curiosity: 'Uma reta nunca dobra. Se o gráfico curva, é função de 2° grau ou superior!',
          whyStudy: 'Identificar o tipo de função pela forma é habilidade-chave no ENEM.',
          tips: 'Parábola abre para cima (a>0) ou para baixo (a<0).'
        },
        dragDrop: {
          items: [{ id: 'r', text: 'f(x) = 2x + 1' }, { id: 'p', text: 'f(x) = x² - 4' }, { id: 'e', text: 'f(x) = 3ˣ' }],
          targets: [{ id: 't1', label: 'Gráfico: Reta', accepts: 'r' }, { id: 't2', label: 'Gráfico: Parábola', accepts: 'p' }, { id: 't3', label: 'Gráfico: Exponencial', accepts: 'e' }]
        },
        xpReward: 250
      },
      {
        id: 'm7-2', title: 'Raízes (Zeros) de uma Função', type: 'text', correctValue: "3",
        theory: {
          title: 'Onde a Função Cruza o Eixo X',
          content: '<h4>O que são Raízes?</h4><p>As <strong>raízes</strong> (ou zeros) de uma função são os valores de x para os quais f(x) = 0, ou seja, onde o gráfico cruza o eixo horizontal.</p><p>Para encontrá-las, basta fazer <strong>f(x) = 0</strong> e resolver a equação.</p><p>Exemplo: f(x) = 2x - 6 → 2x - 6 = 0 → x = 3.</p>',
          realWorld: 'Físicos encontram os "zeros" de funções para descobrir quando um objeto para ou muda de direção.',
          curiosity: 'Uma parábola pode ter 0, 1 ou 2 raízes reais dependendo do discriminante Δ.',
          whyStudy: 'Fundamento para resolução de inequações e análise de comportamento de funções.',
          tips: 'Iguale f(x) a zero e isole o x.'
        },
        robotMessage: "Para f(x) = 2x - 6, qual o valor de x quando f(x) = 0? (a raiz)",
        xpReward: 300
      },
      {
        id: 'm7-3', title: 'Fórmula de Bhaskara', type: 'choice',
        theory: {
          title: 'A Fórmula que Resolve Tudo',
          content: '<h4>Bhaskara: ax² + bx + c = 0</h4><p>Para resolver qualquer equação de 2° grau, usamos:</p><p style="font-size:1.2rem; text-align:center; margin: 1rem 0; background: rgba(124,58,237,0.15); padding: 1rem; border-radius: 8px;"><strong>Δ = b² - 4ac</strong></p><p style="font-size:1.2rem; text-align:center; margin: 1rem 0; background: rgba(124,58,237,0.15); padding: 1rem; border-radius: 8px;"><strong>x = (-b ± √Δ) / 2a</strong></p><ul><li>Se Δ > 0: duas raízes reais distintas.</li><li>Se Δ = 0: uma raiz real (raiz dupla).</li><li>Se Δ < 0: sem raízes reais.</li></ul>',
          realWorld: 'Engenheiros usam Bhaskara para calcular trajetórias de projéteis e dimensionar arcos.',
          curiosity: 'O matemático indiano Bhaskara II formalizou a fórmula no século XII, mas os babilônios já a conheciam.',
          whyStudy: 'A equação mais cobrada em vestibulares e ENEM de toda a história.',
          tips: 'Calcule o Δ primeiro! Se for negativo, já sabe que não há raízes reais.'
        },
        quiz: {
          question: "Em x² - 5x + 6 = 0, qual o valor de Δ? (a=1, b=-5, c=6)",
          options: ["Δ = 1", "Δ = 25", "Δ = 25 - 24 = 1"],
          correctIndex: 2
        },
        xpReward: 350
      },
      {
        id: 'm7-4', title: 'Aplicando Bhaskara na Prática', type: 'text', correctValue: "2",
        theory: {
          title: 'Calculando as Raízes',
          content: '<h4>Passo a Passo</h4><p>f(x) = x² - 5x + 6 = 0</p><p>a=1, b=-5, c=6</p><p><strong>Δ = (-5)² - 4(1)(6) = 25 - 24 = 1</strong></p><p><strong>x = (5 ± 1) / 2</strong></p><p>x₁ = 6/2 = <strong>3</strong> e x₂ = 4/2 = <strong>2</strong></p>',
          realWorld: 'Usada para calcular quando um foguete atinge o solo: h(t) = 0.',
          curiosity: 'O símbolo ± indica que existem duas soluções, uma com + e outra com -.',
          whyStudy: 'Toda equação de 2° grau tem solução com Bhaskara.',
          tips: 'Lembre: x₁ = (-b + √Δ)/2a e x₂ = (-b - √Δ)/2a.'
        },
        robotMessage: "Em x² - 5x + 6 = 0, qual é a MENOR raiz? (use Bhaskara: Δ=1)",
        xpReward: 400
      },
      {
        id: 'm7-5', title: 'O Vértice da Parábola e Otimização', type: 'choice',
        theory: {
          title: 'Ponto Máximo ou Mínimo',
          content: '<h4>O Vértice</h4><p>O vértice V(xv, yv) é o ponto de retorno da parábola:</p><ul><li><strong>xv = -b / 2a</strong></li><li><strong>yv = -Δ / 4a</strong></li></ul><p>Se a &gt; 0 → concavidade para cima → vértice é MÍNIMO.</p><p>Se a &lt; 0 → concavidade para baixo → vértice é MÁXIMO.</p>',
          realWorld: 'Empresas maximizam lucro e minimizam custo usando o vértice de funções quadráticas.',
          curiosity: 'O lançamento de uma bola segue uma parábola cujo pico é exatamente o vértice!',
          whyStudy: 'Problemas de otimização são os mais frequentes no ENEM.',
          tips: 'Calcule xv = -b/2a e depois substitua para achar yv.'
        },
        quiz: {
          question: "Na função f(x) = x² - 4x + 5, qual o valor de xv? (a=1, b=-4)",
          options: ["xv = 2", "xv = -2", "xv = 4"],
          correctIndex: 0
        },
        xpReward: 350
      },
      {
        id: 'm7-6', title: 'Funções Exponenciais e Logarítmicas', type: 'choice',
        theory: {
          title: 'Crescimento Explosivo e Escala Logarítmica',
          content: '<h4>Exponencial vs Logarítmica</h4><p><strong>Exponencial:</strong> f(x) = aˣ (a &gt; 0, a ≠ 1)</p><ul><li>a &gt; 1 → crescimento (Ex: população, vírus).</li><li>0 &lt; a &lt; 1 → decrescimento (Ex: radioatividade).</li></ul><p><strong>Logarítmica:</strong> f(x) = log<sub>a</sub>(x)</p><ul><li>Cresce, mas cada vez mais devagar.</li><li>Escala Richter, pH e decibéis são logarítmicos.</li></ul><p><strong>Propriedade fundamental:</strong> log<sub>a</sub>(aˣ) = x</p>',
          realWorld: 'Bancos calculam juros compostos com exponencial. Geólogos medem terremotos com logaritmos.',
          curiosity: 'Uma epidemia começa crescendo exponencialmente — é por isso que medidas rápidas são essenciais!',
          whyStudy: 'Conecta matemática com biologia, física e economia.',
          tips: 'log₁₀(100) = 2, porque 10² = 100. O log desfaz a potência!'
        },
        quiz: {
          question: "Se f(x) = 2^x, qual o valor de f(5)?",
          options: ["10", "32", "25"],
          correctIndex: 1
        },
        xpReward: 350
      },
      {
        id: 'm7-b1', title: '🎨 Bônus: Desenhe a Parábola!', type: 'bonus-draw',
        isBonus: true,
        prompt: 'Desenhe no espaço abaixo uma parábola com concavidade para cima e indique onde estaria o vértice e as raízes. Use sua criatividade!',
        theory: {
          title: 'Desafio Criativo',
          content: '<h4>Hora de Desenhar!</h4><p>Coloque no papel (ou na tela) o que você aprendeu sobre parábolas. Não precisa ser perfeito — o importante é representar os conceitos corretamente.</p>',
          realWorld: 'Matemáticos e engenheiros desenham gráficos à mão para ter intuição sobre os problemas.',
          curiosity: 'Desenhando, você ativa partes diferentes do cérebro e aprende mais rápido!',
          whyStudy: 'Visualizar funções é essencial para questões do ENEM.',
          tips: 'Marque o eixo X, o eixo Y, o vértice e onde a curva cruza o eixo X (raízes).'
        },
        xpReward: 200
      },
      {
        id: 'm7-7', title: 'CHEFE: O Arquiteto de Sistemas', type: 'boss-list',
        theory: {
          title: 'Prova de Maestria Final',
          content: '<h4>Gabarito do Boss</h4><p>Você precisa acertar pelo menos 2 de 3 para vencer. Revise: Bhaskara, raízes e tipos de funções!</p>',
          realWorld: 'Cientistas de dados usam funções para prever o mercado de ações e o clima.',
          curiosity: 'A matemática é a linguagem com a qual o universo foi escrito — Galileu Galilei.',
          whyStudy: 'Dominar funções garante sucesso em toda área de Exatas.',
          tips: 'Lembre: Δ = b² - 4ac. Se Δ < 0, sem raízes reais!'
        },
        isBoss: true,
        exercises: [
          { level: 'fácil', question: "Qual a fórmula do discriminante Δ de Bhaskara?", answer: "b2-4ac" },
          { level: 'médio', question: "f(x) = x² - 9. Qual a raiz positiva?", answer: "3" },
          { level: 'difícil', question: "log base 10 de 1000?", answer: "3" }
        ],
        xpReward: 1500
      }
    ]
  }
];

// ==========================================
// ITENS DA LOJA (RPG STYLE) - PREÇOS REAJUSTADOS
// ==========================================
const shopItems = [
  { id: 'shield_silver', name: 'Escudo de Prata', icon: '🛡️', price: 1500, description: 'Proteção sólida (+15% XP)', xpBonus: 0.15 },
  { id: 'shield_gold', name: 'Escudo de Ouro', icon: '🔱', price: 5000, description: 'Brilho divino (+30% XP)', xpBonus: 0.3 },
  { id: 'book_magic', name: 'Grimório de Thoth', icon: '🔮', price: 3500, description: 'Conhecimento ancestral (+25% XP)', xpBonus: 0.25 },
  { id: 'boots_speed', name: 'Botas de Hermes', icon: '🥾', price: 2500, description: 'Velocidade de busca (+20% Moedas)', coinBonus: 0.2 },
  { id: 'amulet_luck', name: 'Amuleto da Sorte', icon: '🧿', price: 4000, description: 'Atrai mais tesouros (+40% Moedas)', coinBonus: 0.4 },
  { id: 'key_master', name: 'Chave Mestra', icon: '🗝️', price: 1200, description: 'Abre qualquer baú com perfeição', isKey: true },
  { id: 'map_legendary', name: 'Mapa Lendário', icon: '🗺️', price: 8000, description: 'Dobra todo XP recebido (+100% XP)', xpBonus: 1.0 },
  { id: 'crown_king', name: 'Coroa do Rei', icon: '👑', price: 15000, description: 'Símbolo de maestria absoluta (Status)', statusSymbol: true }
];

// ==========================================
// ESTADO DO SISTEMA E VARIÁVEIS GLOBAIS
// ==========================================
let currentUser = null;
let currentModule = null;
let currentLessonIndex = 0;
let selectedQuizOption = null;
let currentHotspotSelection = null;
let audioCtx = null;

// ==========================================
// MOTOR DE INTERFACE E NAVEGAÇÃO
// ==========================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
    const target = document.getElementById(`${screenId}-screen`);
    if(target) { target.classList.add('active'); target.classList.remove('hidden'); }
    window.scrollTo(0, 0);
}

function showToast(message, icon = '✨') {
    const container = document.getElementById('toast-container');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast glass-card';
    toast.innerHTML = `<span>${icon}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function playSound(type) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        if (type === 'correct') {
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
            osc.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.3); // C6
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        } else if (type === 'error') {
            osc.frequency.setValueAtTime(150, audioCtx.currentTime);
            osc.frequency.linearRampToValueAtTime(50, audioCtx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        } else if (type === 'click') {
            osc.frequency.setValueAtTime(800, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        }
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    } catch(e) { console.log("Audio non-critical error"); }
}

// ==========================================
// PERSISTÊNCIA DE DADOS
// ==========================================
function saveStudentData() {
    if (!currentUser) return;
    let students = JSON.parse(localStorage.getItem('ava_students')) || [];
    const idx = students.findIndex(s => s.name === currentUser.name);
    if (idx !== -1) students[idx] = currentUser; else students.push(currentUser);
    localStorage.setItem('ava_students', JSON.stringify(students));
    localStorage.setItem('ava_current_user', JSON.stringify(currentUser));
}

// ==========================================
// LOGIN E INICIALIZAÇÃO
// ==========================================
const loginForm = document.getElementById('login-form');
if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('student-name').value.trim();
        const pass = document.getElementById('student-password').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked').value;
        
        let students = JSON.parse(localStorage.getItem('ava_students')) || [];
        let user = students.find(s => s.name === name);
        
        if (user) {
            if(user.password && user.password !== pass) { alert("Senha incorreta!"); return; }
            currentUser = user;
        } else {
            currentUser = { 
                name, password: pass, gender, 
                level: 1, xp: 0, coins: 100, keys: 1,
                progress: [], inventory: [], equippedItems: [], 
                completedModules: [], badges: [], answers: {}, unlocks: [],
                collectibles: []
            };
            saveStudentData();
        }
        localStorage.setItem('ava_last_username', name);
        showToast(`Bem-vindo, ${currentUser.name}!`, '🛡️');
        initWorldSelect();
    });
}

function initWorldSelect() {
    showScreen('worldSelect');
    updateStatsBar('ws');
    
    const container = document.getElementById('worlds-container');
    if(!container) return;
    container.innerHTML = '';
    
    courseModules.forEach(mod => {
        const card = document.createElement('div');
        card.className = 'world-card glass-card';
        const completedLessons = mod.lessons.filter(l => currentUser.progress.includes(l.id)).length;
        const totalLessons = mod.lessons.length;
        const isWorldCompleted = completedLessons === totalLessons;

        card.innerHTML = `
            <div class="world-icon">${mod.icon}</div>
            <h3>${mod.title}</h3>
            <div class="progress-info">${completedLessons}/${totalLessons} Missões</div>
            <button class="btn ${isWorldCompleted ? 'success-btn' : 'primary-btn'} w-full mt-4">
                ${isWorldCompleted ? '✓ Concluído' : 'Explorar'}
            </button>
        `;
        card.querySelector('button').onclick = () => { playSound('click'); initDashboard(mod); };
        container.appendChild(card);
    });
}

function updateStatsBar(prefix) {
    const xp = currentUser.xp || 0;
    const lvl = Math.floor(xp / 1000) + 1;
    const coins = currentUser.coins || 0;
    const keys = currentUser.keys || 0;

    // Elementos da barra de stats
    const elLvl = document.getElementById(`${prefix}-user-level`) || document.getElementById('user-level');
    const elXp = document.getElementById(`${prefix}-user-xp`) || document.getElementById('user-xp');
    const elCoins = document.getElementById(`${prefix}-user-coins`) || document.getElementById('user-coins');
    const elKeys = document.getElementById(`${prefix}-user-keys`) || document.getElementById('user-keys');
    const elAvatar = document.getElementById(`${prefix}-user-avatar`) || document.getElementById('user-avatar');

    if(elLvl) elLvl.innerText = lvl;
    if(elXp) elXp.innerText = xp;
    if(elCoins) elCoins.innerText = coins;
    if(elKeys) elKeys.innerText = keys;
    
    // Fix: Mostrar inicial do primeiro nome no avatar, mas manter o círculo bonito
    if(elAvatar) {
        const firstName = (currentUser.name || 'H').split(' ')[0];
        elAvatar.innerText = firstName[0].toUpperCase();
    }

    const elName = document.getElementById(`${prefix}-welcome-message`) || document.getElementById('welcome-message');
    if (elName) {
        // Fix: Mostrar nome completo ou primeiro nome de forma elegante
        elName.innerText = `Herói ${currentUser.name || 'Explorador'}`;
    }
    
    // Atualizar Barra de Progresso no Dashboard
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    if(progressBar && currentModule) {
        const done = currentModule.lessons.filter(l => currentUser.progress.includes(l.id)).length;
        const pct = Math.round((done / currentModule.lessons.length) * 100);
        progressBar.style.width = pct + '%';
        if(progressText) progressText.innerText = pct + '%';
    }
}

// ==========================================
// DASHBOARD E MAPA
// ==========================================
function initDashboard(world) {
    currentModule = world;
    showScreen('dashboard');
    updateStatsBar('db');
    renderMapNodes(world);
    updateInventoryUI();
    renderMainAvatar();
    renderAlbum();
}

function renderAlbum() {
    const grid = document.getElementById('album-grid');
    if(!grid) return;
    grid.innerHTML = '';
    const items = currentUser.collectibles || [];
    if(items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; font-size: 0.8rem; color: var(--text-secondary);">Nenhum item coletado ainda. Explore o mapa e clique nos 💎!</p>';
        return;
    }
    // Map internal keys to human-readable labels
    const worldNames = { uc1: 'Trigonometria', uc2: 'Geometria Analítica', uc3: 'Espaço', uc4: 'Proporções', uc5: 'Medidas', uc6: 'Números', uc7: 'Funções' };
    items.forEach(it => {
        const div = document.createElement('div');
        div.className = 'inventory-item';
        // Parse key like 'coll_uc7_2' into readable label
        let label = it;
        const match = it.match(/^coll_(uc\d+)_(\d+)$/);
        if (match) {
            const worldLabel = worldNames[match[1]] || match[1];
            label = `💎 ${worldLabel} #${parseInt(match[2]) + 1}`;
        }
        div.innerHTML = `<span title="${it}">${label}</span>`;
        grid.appendChild(div);
    });
}

function renderMapNodes(world) {
    const container = document.getElementById('modules-container');
    if(!container) return;
    container.innerHTML = '';
    
    // Fundo do Mapa
    if(world.background) container.style.backgroundImage = `url(${world.background})`;
    else container.style.background = 'rgba(0,0,0,0.4)';

    let activeIdx = -1;

    world.lessons.forEach((lesson, index) => {
        const isCompleted = currentUser.progress.includes(lesson.id);
        const isLocked = index > 0 && !currentUser.progress.includes(world.lessons[index-1].id);
        
        if (!isLocked && !isCompleted && activeIdx === -1) activeIdx = index;

        const node = document.createElement('div');
        node.className = `map-node ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''} ${index === activeIdx ? 'current-location' : ''}`;
        
        // Posicionamento em Zig-Zag
        node.style.top = `${(index % 2 === 0) ? 60 : 25}%`;
        node.style.left = `${15 + (index * (75 / (world.lessons.length - 1 || 1)))}%`;

        if (index === activeIdx || (activeIdx === -1 && index === 0 && !isCompleted)) {
            const av = document.createElement('div');
            av.className = 'player-avatar-map';
            av.style.backgroundImage = `url(${currentUser.gender === 'female' ? './assets/avatar_knight_female.png' : './assets/avatar_knight.png'})`;
            node.appendChild(av);
        }
        
        node.innerHTML += `<div class="node-number">${index + 1}</div>`;
        
        if (!isLocked) {
            node.onclick = () => { playSound('click'); openTheoryModal(world, index); };
            
            // Spawn Collectible Chance
            const collKey = `coll_${world.id}_${index}`;
            if (Math.random() > 0.7 && !isCompleted && !currentUser.collectibles?.includes(collKey)) {
                const coll = document.createElement('div');
                coll.className = 'map-collectible';
                coll.innerText = '💎';
                coll.style.position = 'absolute';
                coll.style.top = '-20px';
                coll.style.right = '-20px';
                coll.style.fontSize = '1.5rem';
                coll.style.cursor = 'pointer';
                coll.onclick = (e) => {
                    e.stopPropagation();
                    if(!currentUser.collectibles) currentUser.collectibles = [];
                    currentUser.collectibles.push(collKey);
                    currentUser.coins += 100;
                    saveStudentData();
                    coll.remove();
                    showToast("Item de Coleção Encontrado! +100 Moedas", "💎");
                    renderAlbum();
                };
                node.appendChild(coll);
            }
        } else {
            node.title = "Complete a missão anterior!";
        }
        
        container.appendChild(node);
    });
}

// ==========================================
// MODAL DE TEORIA (PÍLULA)
// ==========================================
function openTheoryModal(world, index) {
    // Agora não abre mais modal, vai direto para a lição que mostrará a teoria integrada
    openLesson(world, index);
}

// ==========================================
// TELA DE LIÇÃO (GAME ENGINE)
// ==========================================
function openLesson(world, index) {
    currentModule = world;
    currentLessonIndex = index;
    showScreen('course');
    
    const lesson = world.lessons[index];
    const isCompleted = currentUser.progress.includes(lesson.id);
    
    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('mascot-message').innerText = "Estude a teoria antes do desafio!";
    document.getElementById('quiz-feedback').classList.add('hidden');
    
    // Reset de estados
    selectedQuizOption = null;
    currentHotspotSelection = null;
    
    // Gerenciar Dica - sempre visível com custo de 500 moedas
    const tipBtn = document.getElementById('get-tip-btn');
    tipBtn.style.display = isCompleted ? 'none' : 'block';
    const tipText = lesson.theory?.tips || lesson.theory?.hint || null;
    if (!isCompleted) {
        tipBtn.onclick = () => {
            if (tipText) {
                showTip(tipText);
            } else {
                showToast('Nenhuma dica disponível para esta missão.', '💡');
            }
        };
    }

    // Mostrar Teoria Integrada
    const theorySec = document.getElementById('theory-section');
    const quizCont = document.getElementById('quiz-container');
    const validateBtn = document.getElementById('complete-lesson-btn');
    
    theorySec.classList.remove('hidden');
    quizCont.classList.add('hidden');
    validateBtn.classList.add('hidden');

    document.getElementById('theory-title').innerText = lesson.theory?.title || "Conhecimento Requerido";
    
    let theoryHTML = lesson.theory?.content || "";
    if (lesson.theory?.realWorld) theoryHTML += `<div class="real-world-box"><strong>📍 No Mundo Real:</strong><br>${lesson.theory.realWorld}</div>`;
    if (lesson.theory?.curiosity) theoryHTML += `<div class="curiosity-box"><strong>🤔 Curiosidade:</strong><br>${lesson.theory.curiosity}</div>`;
    if (lesson.theory?.whyStudy) theoryHTML += `<p><strong>🎯 Por que estudar?</strong> ${lesson.theory.whyStudy}</p>`;
    if (lesson.theory?.tips) theoryHTML += `<p><strong>💡 Dica do Mestre:</strong> ${lesson.theory.tips}</p>`;
    
    document.getElementById('theory-body').innerHTML = theoryHTML;

    const mediaCont = document.getElementById('theory-media');
    mediaCont.innerHTML = '';
    if (lesson.theory?.image) mediaCont.innerHTML += `<img src="${lesson.theory.image}" style="width:100%; border-radius:15px; margin-top:1rem;">`;
    if (lesson.theory?.iframe) mediaCont.innerHTML += `<div style="aspect-ratio: 16/9; margin-top:1rem;"><iframe width="100%" height="100%" src="${lesson.theory.iframe}" frameborder="0" allowfullscreen></iframe></div>`;

    document.getElementById('start-activity-btn').onclick = () => {
        theorySec.classList.add('hidden');
        quizCont.classList.remove('hidden');
        validateBtn.classList.remove('hidden');
        document.getElementById('mascot-message').innerText = lesson.robotMessage || "Prepare-se para o desafio!";
        renderActivity(lesson);
    };

    if (isCompleted) {
        // Se já completou, pode pular direto para o quiz se quiser, ou ver a teoria
        validateBtn.innerText = "Próxima Missão";
        validateBtn.onclick = () => {
            if (currentLessonIndex < currentModule.lessons.length - 1) openLesson(currentModule, currentLessonIndex + 1);
            else initDashboard(currentModule);
        };
    } else {
        validateBtn.innerText = "Validar Resposta";
        validateBtn.onclick = handleValidation;
    }
}

function showTip(text) {
    if (currentUser.coins >= 500) {
        currentUser.coins -= 500;
        saveStudentData();
        updateStatsBar('db');
        alert(`DICA DO MESTRE: ${text}`);
    } else {
        showToast("Moedas insuficientes para a dica!", "❌");
    }
}

function renderActivity(lesson) {
    // Esconder todos os containers de atividade
    ['quiz-options', 'quiz-text-area-container', 'drag-drop-container', 'hotspot-container', 'fill-blanks-container'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });

    if (lesson.type === 'choice') {
        const cont = document.getElementById('quiz-options');
        cont.classList.remove('hidden');
        cont.innerHTML = `<h4>${lesson.quiz.question}</h4>`;
        lesson.quiz.options.forEach((opt, idx) => {
            const div = document.createElement('div');
            div.className = 'quiz-option';
            div.innerText = opt;
            div.onclick = () => {
                playSound('click');
                selectedQuizOption = idx;
                document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
            };
            cont.appendChild(div);
        });
    } else if (lesson.type === 'fill-blanks') {
        const cont = document.getElementById('fill-blanks-container');
        cont.classList.remove('hidden');
        let html = lesson.blanks.text;
        lesson.blanks.answers.forEach((_, i) => {
            html = html.replace(`[[${i+1}]]`, `<input type="text" class="fill-input" data-idx="${i}" placeholder="...">`);
        });
        document.getElementById('fill-blanks-text').innerHTML = html;
    } else if (lesson.type === 'hotspot') {
        const cont = document.getElementById('hotspot-container');
        cont.classList.remove('hidden');
        document.getElementById('hotspot-image').src = lesson.hotspot.image;
        const overlay = document.getElementById('hotspot-overlay');
        overlay.innerHTML = '';
        lesson.hotspot.points.forEach(p => {
            const dot = document.createElement('div');
            dot.className = 'hotspot-dot';
            dot.style.left = p.x + '%';
            dot.style.top = p.y + '%';
            dot.onclick = () => {
                playSound('click');
                currentHotspotSelection = p.id;
                document.querySelectorAll('.hotspot-dot').forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            };
            overlay.appendChild(dot);
        });
    } else if (lesson.type === 'drag-drop') {
        const cont = document.getElementById('drag-drop-container');
        cont.classList.remove('hidden');
        const itemsC = document.getElementById('drag-items');
        const targetsC = document.getElementById('drop-targets');
        itemsC.innerHTML = ''; targetsC.innerHTML = '';
        
        lesson.dragDrop.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'drag-item';
            div.innerText = item.text;
            div.draggable = true;
            div.id = `drag-${item.id}`;
            div.ondragstart = (e) => e.dataTransfer.setData('text', item.id);
            itemsC.appendChild(div);
        });
        
        lesson.dragDrop.targets.forEach(target => {
            const div = document.createElement('div');
            div.className = 'drop-target';
            div.innerHTML = `<span>${target.label}</span>`;
            div.ondragover = (e) => e.preventDefault();
            div.ondrop = (e) => {
                e.preventDefault();
                const itemId = e.dataTransfer.getData('text');
                const draggedElement = document.getElementById(`drag-${itemId}`);
                if (draggedElement) div.appendChild(draggedElement);
            };
            targetsC.appendChild(div);
        });
    } else if (lesson.type === 'text') {
        document.getElementById('quiz-text-area-container').classList.remove('hidden');
        document.getElementById('quiz-textarea').value = '';
    } else if (lesson.type === 'boss-list') {
        const cont = document.getElementById('quiz-options');
        cont.classList.remove('hidden');
        const needed = Math.ceil(lesson.exercises.length * 0.6);
        cont.innerHTML = `<h4>⚔️ Desafio do Boss</h4><p style="font-size:0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Acerte pelo menos ${needed} de ${lesson.exercises.length} questões para vencer!</p>`;
        lesson.exercises.forEach(ex => {
            const div = document.createElement('div');
            div.className = 'boss-item';
            div.innerHTML = `<p><strong>[${ex.level.toUpperCase()}]</strong> ${ex.question}</p><input type="text" class="boss-input" placeholder="Sua resposta...">`;
            cont.appendChild(div);
        });
    } else if (lesson.type === 'bonus-draw') {
        const cont = document.getElementById('quiz-options');
        cont.classList.remove('hidden');
        cont.innerHTML = `
            <h4>🎨 Atividade Bônus: Desenho</h4>
            <p style="font-size:0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">${lesson.prompt || 'Desenhe o que aprendeu sobre este tema!'}</p>
            <canvas id="bonus-canvas" width="500" height="300" style="border: 2px solid var(--primary); border-radius: 12px; cursor: crosshair; touch-action: none; max-width: 100%; background: #0f172a;"></canvas>
            <div style="display:flex; gap: 10px; margin-top: 10px; flex-wrap: wrap; align-items: center;">
                <button class="btn text-btn" onclick="clearBonusCanvas()">🗑️ Apagar</button>
                <label>Cor: <input type="color" id="draw-color" value="#7c3aed" style="border-radius:8px; padding:2px; height:32px; border:none;"></label>
                <label>Espessura: <input type="range" id="draw-size" min="2" max="20" value="5" style="flex:1;"></label>
            </div>
            <p style="font-size:0.75rem; color: var(--text-secondary); margin-top:8px;">✅ Esta é uma atividade bônus — você ganha XP só por participar!</p>`;
        setTimeout(() => initBonusCanvas(), 100);
    } else if (lesson.type === 'bonus-photo') {
        const cont = document.getElementById('quiz-options');
        cont.classList.remove('hidden');
        cont.innerHTML = `
            <h4>📷 Atividade Bônus: Foto / Anexo</h4>
            <p style="font-size:0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">${lesson.prompt || 'Tire uma foto da sua resolução no papel ou anexe um arquivo!'}</p>
            <div style="border: 2px dashed var(--primary); border-radius: 12px; padding: 2rem; text-align: center; cursor: pointer; transition: background 0.2s;" 
                 onclick="document.getElementById('bonus-file-input').click()"
                 onmouseover="this.style.background='rgba(124,58,237,0.1)'" onmouseout="this.style.background='transparent'">
                <div style="font-size:3rem;">📎</div>
                <p>Clique para tirar foto ou escolher imagem</p>
                <input type="file" id="bonus-file-input" accept="image/*" capture="environment" style="display:none;" onchange="previewBonusPhoto(this)">
            </div>
            <div id="bonus-photo-preview" style="margin-top: 1rem;"></div>
            <p style="font-size:0.75rem; color: var(--text-secondary); margin-top:8px;">✅ Esta é uma atividade bônus — você ganha XP só por participar!</p>`;
    }
}

function handleValidation() {
    const lesson = currentModule.lessons[currentLessonIndex];
    const feedback = document.getElementById('quiz-feedback');
    let ok = false;
    const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[°ºª]/g, "").replace(/[.,]/g, "").replace(/\s+/g, ' ').trim();

    if (lesson.type === 'choice') {
        ok = (selectedQuizOption === lesson.quiz.correctIndex);
    } else if (lesson.type === 'fill-blanks') {
        const inputs = Array.from(document.querySelectorAll('.fill-input')).map(i => norm(i.value));
        ok = (JSON.stringify(inputs) === JSON.stringify(lesson.blanks.answers.map(a => norm(a))));
    } else if (lesson.type === 'hotspot') {
        const point = lesson.hotspot.points.find(p => p.id === currentHotspotSelection);
        ok = point && point.correct;
    } else if (lesson.type === 'text') {
        const val = norm(document.getElementById('quiz-textarea').value);
        ok = (val === norm(lesson.correctValue)) || (val.length >= 25);
    } else if (lesson.type === 'boss-list') {
        // BOSS MAIS FÁCIL: precisa acertar pelo menos 60% das questões
        const inputs = Array.from(document.querySelectorAll('.boss-input')).map(i => norm(i.value));
        const answers = lesson.exercises.map(e => norm(e.answer));
        const correct = inputs.filter((inp, i) => inp === answers[i]).length;
        const needed = Math.ceil(answers.length * 0.6);
        ok = correct >= needed;
        if (!ok) {
            feedback.innerText = `Você acertou ${correct} de ${answers.length}. Precisa de ${needed} para derrotar o Boss!`;
            feedback.className = 'quiz-feedback error';
            feedback.classList.remove('hidden');
            playSound('error');
            return;
        }
    } else if (lesson.type === 'drag-drop') {
        ok = true;
        document.querySelectorAll('.drop-target').forEach((target, idx) => {
            const targetData = lesson.dragDrop.targets[idx];
            const children = Array.from(target.querySelectorAll('.drag-item')).map(c => c.id.replace('drag-', ''));
            if (Array.isArray(targetData.accepts)) {
                if (!children.every(c => targetData.accepts.includes(c))) ok = false;
            } else {
                if (!children.includes(targetData.accepts)) ok = false;
            }
        });
    } else if (lesson.type === 'bonus-draw' || lesson.type === 'bonus-photo') {
        // Atividades bônus: sempre aprovadas
        ok = true;
    }

    if (ok) {
        playSound('correct');
        feedback.innerText = "Excelente trabalho! Missão cumprida.";
        feedback.className = "quiz-feedback success";
        feedback.classList.remove('hidden');
        
        if (!currentUser.progress.includes(lesson.id)) {
            let bonusXP = 0;
            let bonusCoins = 0;
            currentUser.equippedItems.forEach(id => {
                const item = shopItems.find(i => i.id === id);
                if(item?.xpBonus) bonusXP += lesson.xpReward * item.xpBonus;
                if(item?.coinBonus) bonusCoins += 50 * item.coinBonus;
            });

            currentUser.progress.push(lesson.id);
            currentUser.xp += Math.round(lesson.xpReward + bonusXP);
            currentUser.coins += Math.round(50 + bonusCoins);
            
            // Chance de dropar chave
            if (Math.random() > 0.7) {
                currentUser.keys = (currentUser.keys || 0) + 1;
                showToast("Você encontrou uma Chave Mágica! 🔑", "✨");
            }
            
            saveStudentData();
        }
        
        if (lesson.isBoss) {
            playBossDefeatAnimation(() => {
                finishLesson(lesson);
            });
        } else {
            finishLesson(lesson);
        }
    } else {
        playSound('error');
        feedback.innerText = "Ops! Algo está incorreto. Revise sua resposta.";
        feedback.className = "quiz-feedback error";
        feedback.classList.remove('hidden');
    }
}

function playBossDefeatAnimation(callback) {
    const overlay = document.createElement('div');
    overlay.className = 'boss-defeat-overlay';
    overlay.innerHTML = `
        <h2 style="color: var(--primary); margin-bottom: 2rem; font-size: 2.5rem;">CHEFE DERROTADO!</h2>
        <div class="boss-defeat-anim">
            <img src="${currentUser.gender === 'female' ? './assets/avatar_knight_female.png' : './assets/avatar_knight.png'}" class="anim-hero">
            <img src="./assets/boss_icon.png" class="anim-boss" onerror="this.src='./icons/robot.svg'">
        </div>
    `;
    document.body.appendChild(overlay);
    playSound('correct');
    
    setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            overlay.remove();
            callback();
        }, 500);
    }, 2500);
}

function finishLesson(lesson) {
    setTimeout(() => {
        if (currentLessonIndex < currentModule.lessons.length - 1) openLesson(currentModule, currentLessonIndex + 1);
        else {
            showToast("Mundo Concluído!", "🏆");
            initDashboard(currentModule);
        }
    }, 1500);
}

// ==========================================
// ATIVIDADES BÔNUS: CANVAS E FOTO
// ==========================================
let bonusCtx = null, bonusDrawing = false;

function initBonusCanvas() {
    const canvas = document.getElementById('bonus-canvas');
    if (!canvas) return;
    bonusCtx = canvas.getContext('2d');
    bonusCtx.lineCap = 'round';
    bonusCtx.lineJoin = 'round';

    const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const src = e.touches ? e.touches[0] : e;
        return { x: (src.clientX - rect.left) * scaleX, y: (src.clientY - rect.top) * scaleY };
    };

    const startDraw = (e) => { e.preventDefault(); bonusDrawing = true; const p = getPos(e); bonusCtx.beginPath(); bonusCtx.moveTo(p.x, p.y); };
    const draw = (e) => {
        if (!bonusDrawing) return; e.preventDefault();
        const color = document.getElementById('draw-color')?.value || '#7c3aed';
        const size = document.getElementById('draw-size')?.value || 5;
        bonusCtx.strokeStyle = color;
        bonusCtx.lineWidth = size;
        const p = getPos(e);
        bonusCtx.lineTo(p.x, p.y);
        bonusCtx.stroke();
    };
    const stopDraw = () => bonusDrawing = false;

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mouseleave', stopDraw);
    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDraw);
}

function clearBonusCanvas() {
    const canvas = document.getElementById('bonus-canvas');
    if (canvas && bonusCtx) bonusCtx.clearRect(0, 0, canvas.width, canvas.height);
}

function previewBonusPhoto(input) {
    const preview = document.getElementById('bonus-photo-preview');
    if (!preview || !input.files[0]) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        preview.innerHTML = `
            <p style="color: var(--success); margin-bottom: 8px;">✅ Imagem anexada com sucesso!</p>
            <img src="${e.target.result}" style="max-width: 100%; border-radius: 12px; border: 2px solid var(--primary);">`;
    };
    reader.readAsDataURL(input.files[0]);
}


// ==========================================
// LOJA E INVENTÁRIO
// ==========================================
function initShop() {
    const grid = document.getElementById('shop-items-grid');
    if(!grid) return;
    document.getElementById('shop-user-coins').innerText = currentUser.coins;
    grid.innerHTML = '';
    
    shopItems.forEach(item => {
        const isOwned = currentUser.inventory.includes(item.id);
        const card = document.createElement('div');
        card.className = 'glass-card shop-item-card';
        card.innerHTML = `
            <div style="font-size: 2.5rem; margin-bottom: 10px;">${item.icon}</div>
            <h4>${item.name}</h4>
            <p style="font-size: 0.8rem; color: var(--text-secondary);">${item.description}</p>
            <p style="color: var(--primary); font-weight: bold; margin: 10px 0;">${item.price} Moedas</p>
            <button class="btn ${isOwned ? 'success-btn' : 'primary-btn'} w-full" ${isOwned ? 'disabled' : ''}>
                ${isOwned ? 'Adquirido' : 'Comprar'}
            </button>
        `;
        card.querySelector('button').onclick = () => buyItem(item);
        grid.appendChild(card);
    });
}

function buyItem(item) {
    if (currentUser.coins >= item.price) {
        currentUser.coins -= item.price;
        currentUser.inventory.push(item.id);
        playSound('correct');
        saveStudentData();
        initShop();
        showToast(`Você comprou: ${item.name}`, '🛒');
    } else {
        playSound('error');
        showToast("Moedas insuficientes!", "❌");
    }
}

function updateInventoryUI() {
    const list = document.getElementById('inventory-list');
    if(!list) return;
    list.innerHTML = '';
    
    if(currentUser.inventory.length === 0) {
        list.innerHTML = '<p style="grid-column: 1/-1; font-size: 0.8rem; color: var(--text-secondary);">Vazio</p>';
    } else {
        currentUser.inventory.forEach(id => {
            const item = shopItems.find(i => i.id === id);
            if(item) {
                const el = document.createElement('div');
                el.className = `inventory-item ${currentUser.equippedItems.includes(id) ? 'equipped' : ''}`;
                el.innerHTML = `<span>${item.icon}</span>`;
                el.onclick = () => { playSound('click'); toggleEquip(id); };
                list.appendChild(el);
            }
        });
    }
}

function toggleEquip(id) {
    const idx = currentUser.equippedItems.indexOf(id);
    if(idx > -1) currentUser.equippedItems.splice(idx, 1);
    else currentUser.equippedItems.push(id);
    saveStudentData();
    updateInventoryUI();
    renderMainAvatar();
}

function renderMainAvatar() {
    const img = document.getElementById('main-avatar-img');
    const acc = document.getElementById('avatar-accessories');
    if(!img || !acc) return;
    
    img.src = currentUser.gender === 'female' ? './assets/avatar_knight_female.png' : './assets/avatar_knight.png';
    acc.innerHTML = '';
    
    currentUser.equippedItems.forEach(id => {
        const item = shopItems.find(i => i.id === id);
        if(item) {
            const icon = document.createElement('div');
            icon.className = 'equipped-icon-overlay';
            icon.innerText = item.icon;
            acc.appendChild(icon);
        }
    });
}

// ==========================================
// SISTEMA DE BAÚS (TREASURE)
// ==========================================
// Checar se a Chave Mestra do inventário conta como chave
function getAvailableKeys() {
    let keys = currentUser.keys || 0;
    // Chave Mestra na mochila também vale como chave
    if (currentUser.inventory.includes('key_master')) keys += 999;
    return keys;
}

document.getElementById('dashboard-chest')?.addEventListener('click', () => {
    if (getAvailableKeys() > 0) openChest();
    else showToast("Você precisa de uma Chave! Compre na loja ou complete missões. 🔑", "❌");
});

function openChest() {
    const hasMasterKey = currentUser.inventory.includes('key_master');
    const hasNormalKey = (currentUser.keys || 0) > 0;
    
    if (!hasMasterKey && !hasNormalKey) {
        playSound('error');
        const modal = document.getElementById('chest-modal');
        const anim = document.getElementById('chest-animation-img');
        const reward = document.getElementById('chest-reward');
        const title = document.getElementById('chest-modal-title');
        modal.classList.remove('hidden');
        reward.classList.remove('hidden');
        anim.src = './assets/chest_closed.png';
        title.innerText = "BAÚ TRANCADO!";
        document.getElementById('reward-item-display').innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
            <p style="color: var(--error); font-weight:bold;">Você não possui uma Chave Mágica!</p>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 10px;">Complete missões (30% de chance) ou compre a <strong>Chave Mestra</strong> na Loja do Reino por 1.200 moedas.</p>
        `;
        return;
    }
    // Consome chave normal primeiro; Chave Mestra é permanente (não consome)
    if (hasNormalKey) {

        currentUser.keys--;
        saveStudentData();
        updateStatsBar('db');
    }
    
    const modal = document.getElementById('chest-modal');
    const anim = document.getElementById('chest-animation-img');
    const reward = document.getElementById('chest-reward');
    const title = document.getElementById('chest-modal-title');
    
    modal.classList.remove('hidden');
    reward.classList.add('hidden');
    anim.src = './assets/chest_closed.png';
    title.innerText = "Abrindo Baú do Reino...";
    
    // Animação de tremor épico
    anim.style.animation = 'shake 0.5s infinite';
    playSound('click');
    
    setTimeout(() => {
        anim.style.animation = 'none';
        anim.src = './assets/chest_open.png';
        playSound('correct');
        title.innerText = "BAÚ ABERTO!";
        
        const possible = [
            { type: 'coins', val: 250, txt: '250 Moedas de Ouro!', icon: '💰' },
            { type: 'xp', val: 600, txt: '600 XP de Sabedoria!', icon: '✨' },
            { type: 'coins', val: 1000, txt: 'TESOURO LENDÁRIO! 1000 Moedas', icon: '👑' }
        ];
        const r = possible[Math.floor(Math.random() * possible.length)];
        
        if(r.type === 'coins') currentUser.coins += r.val;
        if(r.type === 'xp') currentUser.xp += r.val;
        
        document.getElementById('reward-item-display').innerHTML = `
            <div style="font-size: 4rem; margin-bottom: 1rem; filter: drop-shadow(0 0 10px gold);">${r.icon}</div>
            <p style="font-size: 1.4rem; font-weight: bold; color: var(--primary);">${r.txt}</p>
        `;
        reward.classList.remove('hidden');
        saveStudentData();
        updateStatsBar('db');
        showToast("Recompensa Coletada!", "🎁");
    }, 2000);
}

document.getElementById('close-chest-modal-btn')?.addEventListener('click', () => {
    document.getElementById('chest-modal').classList.add('hidden');
});

// ==========================================
// RANKING E ÁREA DO PROFESSOR
// ==========================================
function initRanking() {
    const podium = document.getElementById('podium-container');
    const list = document.getElementById('ranking-list');
    if(!podium || !list) return;
    
    let students = JSON.parse(localStorage.getItem('ava_students')) || [];
    students.sort((a,b) => (b.xp || 0) - (a.xp || 0));
    
    podium.innerHTML = '';
    list.innerHTML = '';
    
    students.slice(0, 3).forEach((s, idx) => {
        const p = document.createElement('div');
        p.className = `podium-item podium-${idx+1}`;
        p.innerHTML = `<div class="podium-name">${s.name}</div><div class="podium-rank-box">${idx+1}</div>`;
        podium.appendChild(p);
    });
    
    students.forEach((s, idx) => {
        const row = document.createElement('div');
        row.className = `ranking-row ${s.name === currentUser.name ? 'me' : ''}`;
        row.innerHTML = `<span>#${idx+1}</span><span>${s.name}</span><span>Lvl ${Math.floor((s.xp||0)/1000)+1}</span><span>${s.xp||0} XP</span>`;
        list.appendChild(row);
    });
}

document.getElementById('teacher-btn')?.addEventListener('click', () => {
    const pass = prompt("Senha do Mestre:");
    if(pass === 'Joseneto2020') {
        showScreen('teacher');
        renderTeacherStudents();
    } else if(pass !== null) alert("Acesso Negado!");
});

document.getElementById('teacher-access-btn')?.addEventListener('click', () => {
    const pass = prompt("Senha do Mestre:");
    if(pass === 'Joseneto2020') {
        showScreen('teacher');
        renderTeacherStudents();
    } else if(pass !== null) alert("Acesso Negado!");
});

function renderTeacherStudents() {
    const cont = document.getElementById('student-list-container');
    if(!cont) return;
    const students = JSON.parse(localStorage.getItem('ava_students')) || [];
    cont.innerHTML = '';
    students.forEach(s => {
        const li = document.createElement('li');
        li.className = 'glass-card mb-2';
        li.innerHTML = `<strong>${s.name}</strong> - XP: ${s.xp || 0} - Nível: ${Math.floor((s.xp||0)/1000)+1}`;
        cont.appendChild(li);
    });
}

// ==========================================
// LISTENERS AUXILIARES
// ==========================================
document.getElementById('back-to-worlds-btn')?.addEventListener('click', () => initWorldSelect());
document.getElementById('back-to-dashboard')?.addEventListener('click', () => initDashboard(currentModule));
document.getElementById('logout-btn')?.addEventListener('click', () => {
    localStorage.removeItem('ava_current_user');
    location.reload();
});
document.getElementById('open-shop-btn')?.addEventListener('click', () => { showScreen('shop'); initShop(); });
document.getElementById('back-from-shop-btn')?.addEventListener('click', () => initWorldSelect());
document.getElementById('back-to-login-btn')?.addEventListener('click', () => showScreen('login'));
document.getElementById('back-from-ranking-btn')?.addEventListener('click', () => initWorldSelect());
document.getElementById('open-ranking-btn')?.addEventListener('click', () => { showScreen('ranking'); initRanking(); });
document.getElementById('dashboard-chest')?.addEventListener('click', () => openChest());

// Tabs do Professor
document.querySelectorAll('.teacher-tab-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.teacher-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.teacher-tab-content').forEach(c => c.classList.add('hidden'));
        btn.classList.add('active');
        document.getElementById(`tab-${btn.dataset.tab}`).classList.remove('hidden');
        if(btn.dataset.tab === 'students') renderTeacherStudents();
    };
});

// ==========================================
// INICIALIZAÇÃO FINAL
// ==========================================
(function init() {
    const lastName = localStorage.getItem('ava_last_username');
    if (lastName) {
        const input = document.getElementById('student-name');
        if (input) input.value = lastName;
    }

    const saved = localStorage.getItem('ava_current_user');
    if (saved) {
        currentUser = JSON.parse(saved);
        if(!currentUser.keys) currentUser.keys = 1;
        if(!currentUser.inventory) currentUser.inventory = [];
        if(!currentUser.equippedItems) currentUser.equippedItems = [];
        if(!currentUser.collectibles) currentUser.collectibles = [];
        initWorldSelect();
    } else {
        showScreen('login');
    }
})();
