# Codenes — site de serviços para PME (codenes.com.br)

Site novo de vendas da Codenes (Wesley Nunes Lima). O foco é conversão, não portfólio. O visual segue o estilo dos sites de referência (oprimo, powertuning, commandsystem): seções grandes e escuras, muito contraste, chamadas diretas e botão de WhatsApp sempre à vista.

Observação: o código antigo em Next.js (com as frases de venda, os testes e o `state.md`) não está neste projeto. O site será refeito aqui, com frases novas seguindo as regras do documento. Se você colar os textos antigos (gancho, proposta de valor, chamadas), eu troco pelos seus.

## Direção visual
- Fundo azul-grafite escuro, cor de destaque verde-azulado (teal) e detalhes em âmbar
- Títulos em Syne e textos em Figtree
- Marca "Codenes" grande no topo, seções numeradas, faixas cheias, botões grandes
- Sem fotos de banco de imagem genéricas; a foto do Wesley só entra quando você enviar o arquivo

## Páginas (pt, com estrutura pronta para en)
1. **Início**: gancho, proposta de valor, os 4 serviços, como funciona (3 passos), espaço para depoimentos (escondido até existirem casos reais), resumo das perguntas frequentes e chamada final
2. **Serviços** + uma página para cada serviço: Landing pages, Cardápio/Catálogo digital com pedidos pelo WhatsApp, Sites, Templates para barbearias e oficinas. Cada um mostra para quem é, o que inclui e um botão de orçamento
3. **Sobre**: Wesley e a Codenes, com foco em resultado
4. **FAQ**: prazo, valores, domínio, manutenção, SEO
5. **Contato**: formulário rápido que abre o WhatsApp com a mensagem já preenchida, além de e-mail, LinkedIn, GitHub e Instagram
- Menu: logo Codenes à esquerda, links, botão pt/en e botão "Orçamento"
- Rodapé com contatos; botão flutuante de WhatsApp em todas as páginas

## Formulário de WhatsApp (5 campos)
1. Nome
2. WhatsApp/telefone
3. Segmento do negócio (lista: restaurante/lanchonete, barbearia/salão, oficina, loja/varejo, serviços, outro)
4. Serviço desejado (os 4 serviços + "ainda não sei")
5. Mensagem curta (opcional)
Ao enviar, abre `wa.me/5588999375708` com o texto organizado. Nada fica salvo em servidor.

## Regras mantidas
- Marca sempre "Codenes", domínio codenes.com.br; nunca "Codeness"
- Nenhum número ou caso inventado; a parte de depoimentos fica pronta, mas escondida
- Consultoria de segurança fica de fora por enquanto
- Título e descrição próprios em cada página, dados da empresa para o Google, sitemap e robots
- Sem publicação até você pedir

## Detalhes técnicos
- Rotas TanStack: `/`, `/servicos`, `/servicos/$id`, `/sobre`, `/faq`, `/contato`; textos em `src/content/{pt,en}.ts` com tipos compartilhados; idioma via contexto + localStorage (pt padrão)
- Funções puras em `src/domain/`: `buildWhatsappUrl` (codifica só os 5 campos), `assertPublicBrand`, validação do formulário com zod
- Testes vitest para: mensagem do WhatsApp contém só os campos permitidos e o número certo; marca recusa "Codeness"; campos obrigatórios
- JSON-LD Organization no root, `public/sitemap.xml` e robots atualizados
- Cores como tokens oklch em `src/styles.css`; fontes via `<link>` no root
- Regras de estrutura registradas no `AGENTS.md`; marca, contatos e público salvos na memória
