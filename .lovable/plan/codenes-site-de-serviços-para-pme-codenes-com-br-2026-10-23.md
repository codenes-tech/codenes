**Codenes, site de serviços para PME (codenes.com.br)**

Site novo de vendas da Codenes (Wesley Nunes Lima). O foco é conversão, não portfólio. O visual usa seções grandes, muito contraste, chamadas diretas e botão de WhatsApp sempre à vista.

**Observação:** o código antigo em Next.js não está neste projeto. O site será refeito aqui, com frases novas seguindo as regras do documento.

**Direção visual**

- Tema claro como padrão, com botão para alternar para o tema escuro. A escolha fica salva no navegador.
- Tema claro: fundo branco quente, texto grafite, laranja só em botões e detalhes.
- Tema escuro: fundo grafite neutro, sem tom azulado, com o mesmo laranja um pouco mais claro para manter o contraste.
- Cor de destaque: laranja queimado, suave e agradável. Evitar azul, verde-azulado e violeta, porque os concorrentes de referência são azuis e o violeta lembra outras marcas.
- Títulos em Syne e textos em Figtree.
- Marca "Codenes" grande no topo, seções numeradas, faixas cheias, botões grandes.
- Sem fotos de banco de imagem; a foto do Wesley entra só quando o arquivo for enviado.

**Idioma:** somente português por enquanto. A estrutura de textos fica organizada para aceitar outro idioma no futuro, mas sem botão de idioma.

**Páginas**

1. **Início:** gancho, proposta de valor, os 4 serviços, como funciona (3 passos), espaço para depoimentos (escondido até existirem casos reais), resumo das perguntas frequentes e chamada final.
2. **Serviços, mais uma página para cada serviço:** Landing pages, Cardápio/Catálogo digital com pedidos pelo WhatsApp, Sites, Templates para barbearias e oficinas. Cada um mostra para quem é, o que inclui e um botão de orçamento, sem preços nem pacotes.
3. **Sobre:** Wesley e a Codenes, com foco em resultado, foto quando for enviada, e link para o LinkedIn.
4. **FAQ:** seis perguntas, abaixo.
5. **Contato:** formulário rápido que abre o WhatsApp com a mensagem pronta. Só o WhatsApp como canal de contato.

**Menu:** logo Codenes à esquerda, links, botão de tema claro/escuro e botão "Orçamento".  
**Rodapé:** WhatsApp e direitos da marca. **Botão flutuante de WhatsApp** em todas as páginas.

**Formulário de WhatsApp (5 campos)**

1. Nome
2. WhatsApp/telefone
3. Segmento do negócio (restaurante/lanchonete, barbearia/salão, oficina, loja/varejo, serviços, outro)
4. Serviço desejado (os 4 serviços mais "ainda não sei")
5. Mensagem curta (opcional)

Ao enviar, abre `wa.me/5588999375708` com o texto organizado. Nada fica salvo em servidor.

**FAQ**

1. **Em quanto tempo fica pronto?** Em até 7 dias, dependendo do projeto. Landing pages costumam ser as mais rápidas.
2. **Quanto custa?** Os valores são bem acessíveis, abaixo do que uma agência grande cobra. O preço exato depende do serviço e do que o seu negócio precisa.
3. **Preciso entender de domínio e hospedagem?** Não. A parte técnica fica por nossa conta, e o site já sai pronto para usar.
4. **E se eu precisar de ajuda ou de alterações depois?** Você sempre será atendido para tirar dúvidas. Quem não tem plano de acompanhamento conta com ajustes por até 7 dias após a entrega. Depois disso, alterações e suporte mais completo dependem do plano escolhido.
5. **Meu negócio vai aparecer no Google?** O site já sai com SEO configurado. O resultado depende de tempo, mas você já sai na frente de quem não tem site.
6. **Como funciona o pedido pelo WhatsApp?** O cliente escolhe no cardápio digital e o pedido chega organizado no seu WhatsApp. Não cobramos taxa por pedido.

**Regras mantidas**

- Marca sempre "Codenes", domínio codenes.com.br; nunca "Codeness".
- Nenhum número ou caso inventado; depoimentos prontos, mas escondidos.
- Consultoria de segurança fica de fora por enquanto.
- Sem menção a reembolso ou direito do consumidor no site até o contrato estar definido.
- Título e descrição próprios em cada página, dados da empresa para o Google, sitemap e robots.
- Sem publicação até você pedir.

**Detalhes técnicos**

- Rotas TanStack: `/`, `/servicos`, `/servicos/$id`, `/sobre`, `/faq`, `/contato`.
- Textos em `src/content/pt.ts`, com tipos prontos para outro idioma depois.
- Tema claro/escuro via contexto e localStorage, claro como padrão.
- Funções puras em `src/domain/`: `buildWhatsappUrl` (codifica só os 5 campos), `assertPublicBrand`, validação do formulário com zod.
- Testes vitest: mensagem do WhatsApp com só os campos permitidos e o número certo; marca recusa "Codeness"; campos obrigatórios.
- JSON-LD Organization no root, `public/sitemap.xml` e robots atualizados.
- Cores como tokens oklch em `src/styles.css`, com variantes clara e escura; fontes via `<link>` no root.
- Regras de estrutura registradas no `AGENTS.md`.