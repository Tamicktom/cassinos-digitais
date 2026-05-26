# Roteiro Complementar: Front-end, Mobile, Dark Patterns e Notificações no “Tigrinho”

**Público-alvo:** alunos de ETEC entre 15 e 18 anos  
**Tema:** como interfaces web e mobile influenciam comportamento, atenção, decisão e confiança  
**Estudo de caso fictício:** cassino digital “Tigrinho Supremo”  
**Tom:** didático, crítico, provocativo e com humor ácido responsável  
**Duração sugerida:** 45 a 75 minutos  
**Autor:** Manus AI

---

## 1. Ideia central desta segunda apresentação

Esta apresentação complementa o roteiro principal sobre arquitetura e engenharia de software, mas agora muda o foco para a parte que o usuário realmente toca: **front-end, mobile, experiência do usuário, notificações, design persuasivo e dark patterns**. Se a arquitetura é o esqueleto do sistema, a interface é o rosto que conversa com o usuário. E, em muitos produtos digitais, esse rosto pode sorrir enquanto empurra a pessoa para uma decisão ruim.

No estudo de caso fictício do **Tigrinho Supremo**, o objetivo é mostrar que front-end e mobile não são apenas “fazer tela bonita”. A camada de interface decide o que aparece primeiro, o que fica escondido, qual botão chama mais atenção, qual texto reduz culpa, qual animação recompensa o cérebro, qual notificação chama o usuário de volta e qual caminho dificulta uma escolha saudável. Em outras palavras, **design também é poder**.

> **Aviso para abrir a aula:** esta apresentação não ensina a manipular usuários nem incentiva apostas. Ela usa um produto moralmente problemático como exemplo para mostrar como técnicas de interface podem ser usadas para engajar, confundir, pressionar ou explorar pessoas. O objetivo é formar desenvolvedores mais conscientes.

---

## 2. Objetivos de aprendizagem

Ao final da aula, os alunos devem conseguir enxergar uma interface como um conjunto de decisões técnicas e psicológicas. Eles devem compreender que componentes, cores, animações, microtextos, permissões, notificações e fluxos de navegação podem facilitar a vida do usuário ou empurrá-lo para comportamentos prejudiciais.

| Objetivo | O que o aluno deve entender |
|---|---|
| Entender o papel do front-end | O front-end conecta regras de negócio, dados, comportamento e percepção visual. |
| Entender particularidades do mobile | Celular envolve toque, notificações, permissões, biometria, loja de apps e uso constante. |
| Reconhecer dark patterns | Dark patterns são decisões de design que enganam, pressionam ou dificultam escolhas livres. |
| Avaliar notificações criticamente | Notificações podem informar, lembrar, viciar, pressionar ou manipular. |
| Projetar UX responsável | Uma boa interface deve respeitar clareza, consentimento, acessibilidade e autonomia. |

---

## 3. Abertura: “O botão não é inocente”

**Tempo sugerido:** 5 minutos

Comece perguntando aos alunos:

> “Vocês já clicaram em alguma coisa porque o botão parecia mais chamativo, porque tinha um cronômetro acabando, porque apareceu uma notificação, ou porque o app praticamente implorou para vocês continuarem?”

A partir das respostas, explique que interfaces não são neutras. Todo botão tem tamanho, cor, posição, texto, contraste e contexto. Quando um botão de “Depositar agora” é grande, verde, animado e aparece no centro da tela, enquanto o botão de “Sacar” fica escondido em três menus, isso não é acidente; é uma decisão de produto.

**Frase de impacto:**

> “Interface é arquitetura de comportamento. Às vezes, o bug não está no código; está na intenção.”

---

## 4. Front-end não é só HTML bonito

**Tempo sugerido:** 6 minutos

Front-end moderno envolve renderização, estado, chamadas de API, validação, acessibilidade, performance, segurança, internacionalização, tratamento de erro, testes e integração com design systems. Em um produto como o Tigrinho Supremo, a interface precisa exibir saldo, histórico, animações, status de pagamento, notificações, resultados de jogo, promoções e mensagens em tempo real.

| Responsabilidade do front-end | Exemplo no Tigrinho Supremo |
|---|---|
| Exibir dados de forma clara | Mostrar saldo disponível, saldo bloqueado e histórico de transações. |
| Gerenciar estado | Atualizar saldo após aposta, depósito ou saque. |
| Validar entrada | Impedir valores inválidos antes de enviar para o backend. |
| Tratar erros | Informar falha de pagamento sem esconder o problema. |
| Garantir acessibilidade | Permitir uso com leitor de tela, contraste adequado e navegação por teclado. |
| Manter performance | Evitar travamentos em animações, rankings e jogos. |

Explique que o front-end não deve inventar regras financeiras por conta própria. A interface pode validar campos para melhorar a experiência, mas decisões críticas devem ser confirmadas no backend. Se o navegador do usuário consegue alterar uma variável e ganhar saldo infinito, o problema não é “hack avançado”; é convite formal para o caos.

**Humor ácido:**

> “Confiar regra de dinheiro só ao front-end é como deixar o cofre aberto e colocar uma plaquinha: ‘por favor, não roube’.”

---

## 5. Mobile muda o jogo: o cassino mora no bolso

**Tempo sugerido:** 7 minutos

No computador, o usuário precisa sentar, abrir navegador e acessar o site. No celular, o aplicativo está no bolso, na cama, no ônibus, na sala de aula e no banheiro. Isso muda completamente o impacto do produto. Aplicações mobile podem usar notificações push, biometria, vibração, deep links, atalhos, permissões, geolocalização e integração com carteiras digitais.

| Recurso mobile | Uso legítimo | Uso problemático no estudo de caso |
|---|---|---|
| Push notification | Avisar status de pagamento ou segurança. | Chamar o usuário para apostar após uma sequência de perdas. |
| Biometria | Facilitar login seguro. | Reduzir fricção para depósitos impulsivos. |
| Vibração | Confirmar uma ação importante. | Criar sensação de recompensa em cada jogada. |
| Deep link | Abrir diretamente uma tela útil. | Abrir direto em uma promoção com urgência falsa. |
| Geolocalização | Cumprir regras regionais. | Segmentar usuários vulneráveis por comportamento e região. |
| In-app messages | Explicar mudanças ou alertas. | Interromper o usuário com ofertas insistentes. |

Explique que o mobile aumenta a frequência de contato entre produto e usuário. Por isso, a responsabilidade também aumenta. Um app que manipula atenção no celular não disputa apenas uma compra; ele disputa sono, concentração, dinheiro e saúde mental.

> “Quando o app está no bolso, a arquitetura não termina no servidor. Ela entra na rotina da pessoa.”

---

## 6. Design visual: cores, contraste, animações e hierarquia

**Tempo sugerido:** 6 minutos

A primeira camada de influência está no visual. Cores, contraste, movimento e hierarquia visual direcionam atenção. Em interfaces responsáveis, esses recursos ajudam o usuário a entender o que está acontecendo. Em interfaces manipuladoras, eles escondem riscos e destacam recompensas.

| Elemento visual | Uso responsável | Uso manipulador |
|---|---|---|
| Cor | Destacar ações principais com consistência. | Usar verde para depósito e cinza escondido para saque. |
| Contraste | Garantir leitura e acessibilidade. | Deixar termos importantes quase invisíveis. |
| Movimento | Explicar mudança de estado. | Criar excitação artificial com luzes e explosões. |
| Hierarquia | Organizar informação por importância. | Mostrar bônus gigante e risco minúsculo. |
| Som e vibração | Confirmar ações relevantes. | Recompensar perdas pequenas como se fossem vitórias. |

Um ponto importante é explicar que acessibilidade não é “extra”. A Web Content Accessibility Guidelines, conhecida como WCAG, organiza critérios para tornar conteúdo web mais acessível a pessoas com diferentes necessidades, incluindo contraste, navegação e alternativas textuais.[1]

**Frase de impacto:**

> “Se a informação importante está em cinza-claro, fonte 9 e enterrada no rodapé, talvez não seja design minimalista. Talvez seja covardia com CSS.”

---

## 7. Microcopy: as palavras pequenas que empurram decisões grandes

**Tempo sugerido:** 6 minutos

Microcopy é o texto curto da interface: botões, mensagens de erro, labels, avisos, confirmações e chamadas. Ela parece detalhe, mas pode mudar a interpretação do usuário. No Tigrinho Supremo, dizer “Aposte agora” é diferente de dizer “Você está prestes a usar R$ 20 do seu saldo”.

| Situação | Microcopy manipuladora | Microcopy responsável |
|---|---|---|
| Depósito | “Coloque créditos e desbloqueie sua sorte!” | “Adicionar dinheiro à carteira. Este valor poderá ser usado em apostas.” |
| Perda | “Foi quase! Tente de novo!” | “Você perdeu R$ 10 nesta rodada.” |
| Saque | “Tem certeza que quer abandonar seus bônus?” | “Confirmar solicitação de saque de R$ 50.” |
| Notificação | “Seu prêmio está esperando!” | “Há uma promoção disponível. Consulte as condições antes de participar.” |
| Limite | “Você quer mesmo jogar menos?” | “Definir limite ajuda a controlar gastos.” |

Explique que palavras podem reduzir ou aumentar fricção. Fricção não é sempre ruim. Em ações de risco, como gastar dinheiro, apagar conta ou aceitar termos, um pouco de fricção pode proteger o usuário.

**Humor ácido:**

> “Quando o botão diz ‘continuar minha jornada’ em vez de ‘gastar mais dinheiro’, o UX já colocou terno e virou vilão corporativo.”

---

## 8. Dark patterns: quando a interface trabalha contra o usuário

**Tempo sugerido:** 10 minutos

Dark patterns, também chamados de deceptive patterns, são escolhas de design que induzem usuários a fazer algo que talvez não fariam se a informação estivesse clara. O termo é amplamente usado para descrever interfaces que enganam, pressionam, escondem custos, dificultam cancelamentos ou manipulam consentimento.[2]

> “Um dark pattern não precisa quebrar o sistema. Ele quebra a liberdade de escolha do usuário.”

No estudo de caso do Tigrinho Supremo, dark patterns poderiam aparecer em depósitos fáceis demais, saques difíceis, bônus confusos, urgência artificial e mensagens emocionais após perdas.

| Dark pattern | Como aparece no Tigrinho Supremo | Por que é problemático |
|---|---|---|
| Urgência falsa | “Oferta acaba em 04:59” reiniciando sempre. | Pressiona decisão impulsiva. |
| Confirmação manipulada | “Não, eu prefiro perder meu bônus” como opção de recusa. | Usa culpa ou vergonha para influenciar escolha. |
| Obstrução | Saque exige vários passos, depósito exige um toque. | Torna difícil uma ação que protege o usuário. |
| Informação escondida | Regras do bônus ficam em texto pequeno. | Impede decisão informada. |
| Roach motel | Entrar é fácil; sair ou excluir conta é difícil. | Reduz autonomia do usuário. |
| Sneaking | Taxas ou condições aparecem tarde demais. | Surpreende o usuário com custo ou regra. |
| Nagging | Pop-ups insistentes para continuar jogando. | Interrompe e pressiona repetidamente. |
| Misdirection | Botão de depósito destacado e botão de limite escondido. | Direciona atenção contra o interesse do usuário. |

Explique aos alunos que um dark pattern geralmente não surge por “acidente visual”. Ele costuma nascer de uma métrica de negócio mal escolhida. Se a empresa só mede depósito, tempo de tela e retenção, a interface será pressionada a aumentar depósito, tempo de tela e retenção, mesmo quando isso prejudica pessoas.

---

## 9. Notificações: informação, interrupção ou manipulação?

**Tempo sugerido:** 8 minutos

Notificações são uma das ferramentas mais fortes em produtos mobile. Elas podem ser úteis quando avisam algo importante, como uma tentativa de login suspeita, uma confirmação de saque ou uma falha de pagamento. Mas também podem ser abusivas quando exploram ansiedade, urgência, medo de perder algo ou vulnerabilidade emocional.

A Web Push API e os sistemas de push notification permitem que aplicações enviem mensagens ao usuário mesmo fora do fluxo normal de navegação, desde que haja permissão e suporte do navegador ou sistema operacional.[3] Em aplicativos móveis, as plataformas também estabelecem regras de uso para notificações e permissões.[4] [5]

| Tipo de notificação | Exemplo aceitável | Exemplo problemático |
|---|---|---|
| Segurança | “Novo login detectado em outro dispositivo.” | Não se aplica; segurança deve ser clara e útil. |
| Transacional | “Seu saque foi solicitado com sucesso.” | “Seu saque está demorando; enquanto espera, jogue mais.” |
| Educativa | “Você atingiu 80% do limite mensal definido.” | “Você está quase recuperando suas perdas.” |
| Promocional | “Nova campanha disponível. Veja termos.” | “Última chance de ganhar tudo de volta.” |
| Reengajamento | “Você tem uma mensagem de suporte.” | “Sentimos sua falta. O tigre quer você de volta.” |

Explique que a pergunta ética não é apenas “podemos mandar notificação?”. A pergunta correta é: **essa notificação ajuda o usuário ou ajuda apenas a plataforma a capturar atenção?**

**Frase de impacto:**

> “Notificação é permissão para entrar no bolso da pessoa. Use como aviso, não como coleira.”

---

## 10. Anatomia de uma notificação responsável

**Tempo sugerido:** 5 minutos

Uma notificação responsável deve ser clara, verdadeira, relevante, configurável e proporcional. Ela deve explicar o que aconteceu, evitar manipulação emocional e permitir controle pelo usuário.

| Critério | Boa prática |
|---|---|
| Clareza | O texto deve dizer exatamente o que aconteceu. |
| Relevância | Só enviar quando houver valor real para o usuário. |
| Controle | Permitir configurar tipos e frequência de notificações. |
| Transparência | Diferenciar alerta transacional de marketing. |
| Não manipulação | Evitar urgência falsa, culpa, vergonha ou promessa exagerada. |
| Horário adequado | Respeitar silêncio, sono e contexto. |

Exemplos de reescrita:

| Ruim | Melhor |
|---|---|
| “Volte agora ou perca sua chance!” | “Há uma promoção disponível até 18h. Consulte as condições.” |
| “Você está quase ganhando!” | “Você realizou uma aposta. Resultado disponível no histórico.” |
| “Deposite R$ 20 e mude sua vida!” | “Adicionar R$ 20 à carteira. Apostas envolvem risco de perda.” |
| “O tigre sente sua falta.” | “Notificação promocional. Você pode desativá-la nas configurações.” |

**Humor ácido:**

> “Se sua notificação parece mensagem de ex tóxico, talvez o problema não seja copywriting; é ética.”

---

## 11. Fluxos críticos: depósito, aposta, saque e limites

**Tempo sugerido:** 10 minutos

O estudo de caso fica mais claro quando analisamos fluxos específicos. Em produtos com dinheiro, alguns fluxos devem ser rápidos, mas não impulsivos; claros, mas não assustadores; simples, mas não irresponsáveis.

### 11.1 Depósito

O fluxo de depósito deve mostrar valor, moeda, método de pagamento, taxas, tempo de confirmação e risco. A interface não deveria esconder que dinheiro real está sendo usado.

| Decisão de interface | Risco | Alternativa responsável |
|---|---|---|
| Botões pré-definidos altos | Induzir gasto maior | Permitir valor personalizado e mostrar total claramente. |
| Um toque para depositar | Impulsividade | Confirmar valor e método antes de concluir. |
| Bônus destacado | Confundir condição | Mostrar regras principais antes da adesão. |

### 11.2 Aposta

A aposta é a ação central de risco. O sistema deve deixar claro o valor apostado e o impacto no saldo.

| Decisão de interface | Risco | Alternativa responsável |
|---|---|---|
| Animação intensa antes do resultado | Criar excitação artificial | Manter feedback visual sem mascarar resultado. |
| “Quase ganhou” | Estimular repetição | Mostrar resultado objetivo. |
| Reapostar automaticamente | Reduzir consciência | Exigir ação explícita para cada aposta. |

### 11.3 Saque

Saque deve ser tão transparente quanto depósito. Se depositar é fácil e sacar é difícil, a interface está protegendo o negócio contra o usuário.

| Decisão de interface | Risco | Alternativa responsável |
|---|---|---|
| Esconder saque no menu | Obstrução | Exibir carteira com depósito e saque no mesmo nível. |
| Linguagem de culpa | Manipulação | Usar linguagem neutra. |
| Condições só no final | Surpresa | Mostrar requisitos antes da solicitação. |

### 11.4 Limites e autoexclusão

Uma interface responsável permite que usuários definam limites de gasto, tempo e frequência. Também deve permitir pausas e autoexclusão de forma clara. Esse ponto é especialmente importante em produtos de risco.

| Recurso | Como apresentar de forma responsável |
|---|---|
| Limite diário | “Defina quanto você aceita gastar por dia.” |
| Limite mensal | “Ao atingir o limite, novas apostas serão bloqueadas.” |
| Pausa temporária | “Bloquear acesso por 24h, 7 dias ou 30 dias.” |
| Autoexclusão | “Encerrar acesso por período prolongado, com confirmação clara.” |
| Histórico | “Veja quanto você depositou, apostou, ganhou e perdeu.” |

---

## 12. Estado da interface: loading, erro, sucesso e latência

**Tempo sugerido:** 6 minutos

Estados de interface são parte essencial da experiência. O sistema precisa mostrar quando algo está carregando, quando falhou, quando foi concluído e quando precisa de ação do usuário. Em sistemas financeiros, estado mal comunicado gera ansiedade e suporte lotado.

| Estado | Exemplo ruim | Exemplo bom |
|---|---|---|
| Loading | Botão fica travado sem explicação. | “Processando pagamento. Não feche esta tela.” |
| Erro | “Erro 500.” | “Não conseguimos confirmar o pagamento agora. Tente novamente ou consulte o suporte.” |
| Sucesso | “Show!” | “Depósito de R$ 50 confirmado e adicionado à carteira.” |
| Pendente | Nada aparece. | “Pagamento criado. Aguardando confirmação do provedor.” |
| Timeout | Usuário não sabe se pagou. | “A confirmação demorou mais que o esperado. Verifique o histórico antes de tentar novamente.” |

Explique que um bom front-end reduz incerteza. Um front-end ruim transforma cada loading em uma sessão espírita: ninguém sabe se a transação morreu, se voltou ou se está presa no além.

---

## 13. Performance: se travar, o usuário culpa o app inteiro

**Tempo sugerido:** 6 minutos

Performance no front-end e no mobile envolve tempo de carregamento, tamanho de bundle, imagens, animações, chamadas de rede, renderização, consumo de bateria e uso de memória. Em um app com jogo, ranking e animações, é fácil transformar o celular do usuário em uma torradeira gourmet.

| Problema | Consequência | Boa prática |
|---|---|---|
| Bundle grande | App demora para abrir | Code splitting, lazy loading e remoção de dependências desnecessárias. |
| Imagens pesadas | Consumo de dados e lentidão | Compressão, formatos modernos e CDN. |
| Animações exageradas | Travamento e bateria | Animações leves e respeito a preferências de movimento reduzido. |
| Requisições demais | Latência e custo | Cache, debounce, paginação e agregação de chamadas. |
| Re-renderizações | Interface engasga | Estado bem modelado e memoização quando necessário. |

Também é importante respeitar preferências de acessibilidade como redução de movimento, porque animações intensas podem causar desconforto a algumas pessoas. Acessibilidade e performance não são luxo; são parte da qualidade do produto.[1]

---

## 14. Segurança no front-end: o usuário controla o próprio navegador

**Tempo sugerido:** 7 minutos

O front-end roda em um ambiente que o usuário pode inspecionar, modificar e automatizar. Por isso, ele nunca deve ser a única barreira de segurança. Validações no cliente são úteis para experiência, mas validações críticas precisam existir no servidor.

| Erro comum | Por que é perigoso | Correção |
|---|---|---|
| Guardar token sem cuidado | Aumenta risco em caso de XSS | Usar estratégia segura de sessão e proteção contra scripts maliciosos. |
| Expor chaves secretas no app | Qualquer pessoa pode extrair | Segredos devem ficar no backend ou em serviços adequados. |
| Confiar no valor vindo do cliente | Usuário pode alterar requisição | Backend deve recalcular e validar tudo. |
| Mostrar dados sensíveis no console | Vaza informação | Remover logs sensíveis em produção. |
| Não tratar XSS | Scripts maliciosos podem rodar | Sanitização, escaping e Content Security Policy. |

A OWASP mantém listas e materiais sobre riscos comuns em aplicações web, incluindo falhas de controle de acesso, injeção e configurações inseguras.[6]

**Frase de impacto:**

> “Se está no JavaScript enviado ao navegador, trate como público. O inspetor de elementos é o raio-x do seu app.”

---

## 15. Design system: consistência também é arquitetura

**Tempo sugerido:** 5 minutos

Um design system organiza componentes, cores, tipografia, espaçamentos, estados, padrões de interação e regras de uso. Ele ajuda a manter consistência entre web e mobile, reduz retrabalho e evita que cada tela pareça ter sido feita por uma civilização diferente.

| Parte do design system | Exemplo |
|---|---|
| Componentes | Botão, modal, input, card, toast, bottom sheet. |
| Tokens | Cores, fontes, espaçamentos, sombras e raios. |
| Estados | Padrão para loading, erro, vazio, sucesso e desabilitado. |
| Acessibilidade | Contraste, foco visível, labels e navegação. |
| Conteúdo | Tom de voz, mensagens, microcopy e termos proibidos. |
| Ética | Regras contra dark patterns e manipulação. |

Uma sugestão prática é incluir no design system uma seção chamada **“padrões proibidos”**. Ela documenta o que a equipe não aceita fazer, como urgência falsa, botão de recusa humilhante, esconder cancelamento, esconder taxa ou dificultar saque.

> “Design system bom não padroniza só botão. Padroniza também limites éticos.”

---

## 16. Métricas: cuidado com o que você otimiza

**Tempo sugerido:** 7 minutos

Produtos digitais são guiados por métricas. O problema é que métricas erradas criam interfaces erradas. Se a equipe mede apenas cliques, tempo de tela, depósitos e retorno diário, ela pode acabar premiando decisões que prejudicam usuários.

| Métrica perigosa isolada | Risco | Métrica de equilíbrio |
|---|---|---|
| Tempo de tela | Incentivar uso excessivo | Satisfação, resolução de tarefa e limites saudáveis. |
| Cliques em depósito | Aumentar impulsividade | Taxa de arrependimento, suporte e chargeback. |
| Retenção diária | Pressionar retorno compulsivo | Controle de frequência e opt-out de notificações. |
| Conversão de bônus | Esconder condições | Reclamações, cancelamentos e compreensão dos termos. |
| Reapostas rápidas | Reduzir reflexão | Pausas, limites e alertas de gasto. |

Explique que métrica é bússola. Se a bússola aponta para o precipício, não adianta comemorar que o time está correndo rápido.

**Humor ácido:**

> “O dashboard estava verde, o usuário estava vermelho no banco. Nem toda métrica bonita significa produto saudável.”

---

## 17. Experimento A/B: testar não absolve a intenção

**Tempo sugerido:** 5 minutos

Testes A/B comparam versões de uma interface para medir qual performa melhor em determinado objetivo. Eles são úteis para melhorar clareza, conversão legítima e usabilidade. Porém, também podem ser usados para descobrir qual manipulação funciona melhor.

| Teste A/B responsável | Teste A/B problemático |
|---|---|
| Qual texto explica melhor as regras de saque? | Qual texto faz mais usuários desistirem do saque? |
| Qual tela reduz erro no cadastro? | Qual layout esconde melhor as condições do bônus? |
| Qual aviso ajuda o usuário a entender limite? | Qual notificação traz de volta mais usuários após perdas? |

A mensagem para os alunos é simples: dados não substituem ética. Se um teste prova que uma manipulação aumenta conversão, ele provou eficiência, não legitimidade.

> “Nem tudo que converte deveria existir.”

---

## 18. Roteiro sugerido de slides

| Slide | Título | Conteúdo principal |
|---|---|---|
| 1 | Front-end, Mobile e o Tigrinho no bolso | Apresentação do foco da aula. |
| 2 | Aviso ético | Não incentivar apostas; estudar interface e responsabilidade. |
| 3 | O botão não é inocente | Interfaces direcionam comportamento. |
| 4 | Front-end além da tela bonita | Estado, API, validação, erro e acessibilidade. |
| 5 | Mobile muda tudo | Push, biometria, vibração, deep links e rotina. |
| 6 | Visual que orienta ou manipula | Cor, contraste, animação e hierarquia. |
| 7 | Microcopy | Textos pequenos, decisões grandes. |
| 8 | O que são dark patterns? | Conceito e exemplos. |
| 9 | Dark patterns no Tigrinho Supremo | Urgência falsa, obstrução, culpa e informação escondida. |
| 10 | Notificações | Informação, interrupção ou manipulação. |
| 11 | Notificação responsável | Clareza, controle, relevância e horário. |
| 12 | Fluxo de depósito | Como reduzir impulsividade. |
| 13 | Fluxo de aposta | Como mostrar risco com clareza. |
| 14 | Fluxo de saque | Saque não pode ser caça ao tesouro. |
| 15 | Limites e autoexclusão | UX como proteção. |
| 16 | Estados da interface | Loading, erro, sucesso e pendência. |
| 17 | Performance mobile | Bundle, bateria, animações e dados. |
| 18 | Segurança no front-end | Não confiar no cliente. |
| 19 | Design system ético | Padrões consistentes e padrões proibidos. |
| 20 | Métricas e A/B testing | Otimizar sem vender a alma. |
| 21 | Atividade prática | Caça aos dark patterns. |
| 22 | Conclusão | Interface é responsabilidade. |

---

## 19. Atividade prática: caça aos dark patterns

**Tempo sugerido:** 10 a 15 minutos

Divida a turma em grupos. Apresente uma tela fictícia do Tigrinho Supremo descrita verbalmente ou desenhada no quadro:

> “A tela inicial mostra um tigre animado, saldo no canto superior, botão gigante ‘Ganhe agora’, botão pequeno ‘Sacar’ em cinza, cronômetro de promoção, pop-up dizendo ‘você está a um passo da sorte’, notificação pendente e um menu de configurações escondido.”

Peça que os grupos identifiquem problemas e proponham uma versão mais responsável. Eles devem pensar em clareza, acessibilidade, controle, risco, linguagem e hierarquia.

| Elemento da tela | Problema possível | Correção esperada |
|---|---|---|
| Botão “Ganhe agora” | Promessa enganosa | “Jogar rodada” ou “Apostar R$ X”. |
| Saque escondido | Obstrução | Colocar depósito e saque no mesmo nível. |
| Cronômetro | Urgência falsa | Mostrar prazo real ou remover. |
| Pop-up emocional | Manipulação | Mensagem neutra e informativa. |
| Saldo pequeno | Reduz consciência financeira | Mostrar saldo e gasto recente claramente. |
| Configurações escondidas | Falta de controle | Exibir limites, notificações e privacidade com acesso fácil. |

---

## 20. Checklist de front-end/mobile responsável

Use este checklist como encerramento prático. Ele ajuda os alunos a pensar como profissionais antes de implementar uma interface.

| Pergunta | Por que importa |
|---|---|
| A ação principal está clara e honesta? | Evita que o usuário clique sem entender. |
| O usuário sabe quanto dinheiro está usando? | Reduz confusão e prejuízo. |
| O caminho de saída é tão fácil quanto o de entrada? | Protege autonomia. |
| O app permite controlar notificações? | Respeita atenção e rotina. |
| As mensagens evitam culpa, vergonha e urgência falsa? | Reduz manipulação emocional. |
| O design funciona com acessibilidade? | Inclui mais pessoas e melhora qualidade. |
| O front-end trata erro com transparência? | Reduz ansiedade e suporte. |
| O backend valida decisões críticas? | Evita fraude e inconsistência. |
| O design system proíbe padrões abusivos? | Cria cultura de responsabilidade. |
| As métricas medem danos, não só conversão? | Impede otimização predatória. |

---

## 21. Possível fala de abertura pronta

“Na aula anterior, a gente olhou para a arquitetura do sistema: banco, backend, cloud, filas, CI/CD e tudo aquilo que fica escondido. Agora vamos olhar para a parte mais perigosa porque parece inofensiva: a interface. Hoje a pergunta não é só como fazer uma tela funcionar. É como uma tela faz uma pessoa agir. Usando nosso cassino fictício, o Tigrinho Supremo, vamos ver como botão, cor, notificação, texto e animação podem informar ou manipular. A diferença entre UX e armadilha às vezes cabe em uma frase de botão.”

---

## 22. Possível fala de encerramento pronta

“Front-end e mobile não são a camada superficial do software. Eles são a camada onde o sistema toca a vida da pessoa. Uma notificação pode ser útil ou invasiva. Um botão pode ser claro ou manipulador. Uma animação pode explicar ou viciar. Um fluxo pode respeitar ou prender. Como futuros profissionais de tecnologia, vocês vão criar interfaces que influenciam decisões. A pergunta é: vocês querem só aumentar clique ou querem construir produtos que tratem usuários como pessoas?”

---

## 23. Piadas e frases de impacto

| Frase | Momento ideal |
|---|---|
| “O botão não é inocente.” | Abertura sobre interface e comportamento. |
| “Covardia com CSS.” | Ao falar de informação escondida. |
| “UX de vilão corporativo.” | Ao falar de microcopy manipuladora. |
| “Mensagem de ex tóxico.” | Ao falar de notificação abusiva. |
| “Saque não pode ser caça ao tesouro.” | Ao falar de obstrução. |
| “Nem tudo que converte deveria existir.” | Ao falar de A/B testing. |
| “Dashboard verde, usuário vermelho no banco.” | Ao falar de métricas. |
| “O inspetor de elementos é o raio-x do seu app.” | Ao falar de segurança no front-end. |

---

## 24. Mini-glossário

| Termo | Explicação simples |
|---|---|
| Front-end | Parte visual e interativa de um sistema, geralmente no navegador ou app. |
| Mobile | Aplicações feitas para celular, com recursos como toque, push, biometria e permissões. |
| UX | Experiência do usuário ao usar um produto ou serviço. |
| UI | Interface visual: telas, botões, cores, componentes e layout. |
| Microcopy | Pequenos textos da interface, como botões, avisos e mensagens de erro. |
| Dark pattern | Padrão de design que engana, pressiona ou dificulta uma escolha livre. |
| Push notification | Mensagem enviada ao dispositivo mesmo fora da tela principal do app. |
| Deep link | Link que abre uma tela específica dentro do aplicativo. |
| Design system | Conjunto de componentes, estilos e regras para padronizar interfaces. |
| A/B testing | Experimento que compara duas versões para medir resultado. |
| Fricção | Esforço necessário para concluir uma ação; pode proteger ou atrapalhar. |
| Acessibilidade | Prática de criar produtos utilizáveis por pessoas com diferentes capacidades e contextos. |

---

## 25. Conclusão geral

A camada de front-end e mobile é uma das partes mais importantes de um sistema porque é onde as decisões arquiteturais, comerciais e éticas viram experiência concreta. No caso fictício do Tigrinho Supremo, a mesma tecnologia que poderia informar com clareza também poderia manipular comportamento. A mesma notificação que poderia alertar sobre segurança poderia explorar ansiedade. O mesmo botão que poderia facilitar uma ação poderia esconder uma armadilha.

A principal mensagem para os alunos é que **interfaces têm consequências**. Fazer uma tela bonita é bom. Fazer uma tela rápida é melhor. Mas fazer uma tela clara, acessível, honesta e responsável é o que diferencia um desenvolvedor que apenas implementa de um profissional que entende o impacto do próprio trabalho.

> “Front-end não é maquiagem do sistema. É a conversa entre o software e a pessoa. E toda conversa pode respeitar ou manipular.”

---

## 26. Referências úteis para aprofundamento

[1]: https://www.w3.org/WAI/standards-guidelines/wcag/ "W3C — Web Content Accessibility Guidelines (WCAG)"  
[2]: https://www.deceptive.design/ "Deceptive Design — Types of deceptive patterns"  
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Push_API "MDN Web Docs — Push API"  
[4]: https://developer.apple.com/design/human-interface-guidelines/notifications "Apple Human Interface Guidelines — Notifications"  
[5]: https://developer.android.com/develop/ui/views/notifications "Android Developers — Notifications"  
[6]: https://owasp.org/www-project-top-ten/ "OWASP Top 10 — Web Application Security Risks"  
[7]: https://developer.mozilla.org/en-US/docs/Web/Performance "MDN Web Docs — Web performance"  
[8]: https://material.io/design/communication/confirmation-acknowledgement.html "Material Design — Confirmation and acknowledgement"  
[9]: https://www.nngroup.com/articles/dark-patterns/ "Nielsen Norman Group — Dark Patterns in UX"  
[10]: https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html "W3C — Animation from Interactions"

References: [1], [2], [3], [4], [5], [6], [7], [8], [9], [10]
