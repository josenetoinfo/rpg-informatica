import sys

# Define the new missions
uc1_mission = """      ,{
        id: 'uci-1-5',
        title: 'Sprint 5: O Grande Exame da Guilda (Avaliação Teórica)',
        image: './assets/world_map_mario.png',
        content: `
          <h4>Prova de Ascensão - Infraestrutura Arcana</h4>
          <p>Chegou o momento de provar seu valor perante os mestres da Guilda. Abaixo estão 20 questões teóricas essenciais sobre Redes de Computadores. Responda todas elas na caixa de texto abaixo, numerando de 1 a 20, ou resolva em seu caderno e escreva apenas "Resolvido no Caderno" na caixa após mostrar ao professor.</p>
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
        `,
        xpReward: 300,
        type: 'text',
        robotMessage: "Atenção: Para passar neste teste, sua resposta deve ser bem detalhada. Use o campo abaixo para responder às 20 questões."
      }
"""

uc2_mission = """      ,{
        id: 'uc2-6',
        title: 'Sprint 6: O Julgamento da Forja (Avaliação Teórica)',
        image: './assets/world_map_uc2.png',
        content: `
          <h4>Prova de Ascensão - Hardware e Manutenção</h4>
          <p>Mestre da Forja, é hora de validar seus conhecimentos empíricos e teóricos. Responda às 20 questões abaixo com atenção (numere-as de 1 a 20 na caixa de texto) ou resolva no caderno.</p>
          <ol style="margin-left: 20px; font-size: 0.9rem; line-height: 1.6;">
            <li>O que é Tensão Elétrica (Voltagem)?</li>
            <li>Qual a diferença entre Corrente Contínua (CC/DC) e Corrente Alternada (CA/AC)?</li>
            <li>O que é a Resistência Elétrica?</li>
            <li>Qual a função de um Resistor em um circuito?</li>
            <li>O que faz um Capacitor?</li>
            <li>Descreva o que é a Placa-Mãe (Motherboard) e sua função principal.</li>
            <li>Qual o papel do Processador (CPU) no computador?</li>
            <li>Por que os processadores modernos precisam de dissipadores e coolers?</li>
            <li>Qual a diferença entre Memória RAM e Memória ROM?</li>
            <li>O que é armazenado na memória BIOS/CMOS?</li>
            <li>Explique a diferença entre um Disco Rígido (HDD) magnético e um SSD.</li>
            <li>Qual a função da Fonte de Alimentação no gabinete?</li>
            <li>O que é Eletricidade Estática e por que precisamos da pulseira antiestática ao montar PCs?</li>
            <li>Descreva os passos básicos para a montagem de um computador de mesa.</li>
            <li>O que significa POST (Power-On Self-Test) que ocorre quando ligamos a máquina?</li>
            <li>Para que servem os Drivers do Sistema Operacional?</li>
            <li>Qual a importância de realizar o particionamento do disco antes da formatação?</li>
            <li>Cite duas ações que fazem parte da Manutenção Preventiva em um PC.</li>
            <li>Cite um exemplo de Manutenção Corretiva.</li>
            <li>Por que é crucial manter softwares de segurança, como antivírus, atualizados juntamente com rotinas de backup?</li>
          </ol>
        `,
        xpReward: 300,
        type: 'text',
        robotMessage: "O Exame Final da Forja! Digite suas respostas numeradas abaixo ou escreva um resumo consolidado após resolver as 20 questões no caderno."
      }
"""

# Read file
with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# For UC1 (Infraestrutura Arcana), we find where it ends.
# We'll look for "id: 'uci-1-4'" block end to insert our new lesson.
# A safe way is to find id: 'uc2', and trace back to the closing bracket of the lessons array of UC1.
import re

uc2_start_idx = content.find("id: 'uc2'")
if uc2_start_idx == -1:
    print("Could not find UC2")
    sys.exit(1)

# Find the end of lessons array before uc2
# We search backwards for "]" from uc2_start_idx
bracket_idx = content.rfind("]", 0, uc2_start_idx)
if bracket_idx != -1:
    # insert before this bracket
    content = content[:bracket_idx] + uc1_mission + content[bracket_idx:]
else:
    print("Could not find bracket for UC1")

# Update uc2_start_idx after insertion
uc3_start_idx = content.find("id: 'uc3'")
if uc3_start_idx == -1:
    print("Could not find UC3")
    sys.exit(1)

bracket_idx_uc2 = content.rfind("]", 0, uc3_start_idx)
if bracket_idx_uc2 != -1:
    # insert before this bracket
    content = content[:bracket_idx_uc2] + uc2_mission + content[bracket_idx_uc2:]
else:
    print("Could not find bracket for UC2")

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Missions added successfully.")
