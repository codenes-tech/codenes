import type { SiteContent } from "./types";

export const pt: SiteContent = {
  hero: {
    eyebrow: "Sites que vendem para pequenas e médias empresas",
    hook: "Site bonito que não vende é só despesa.",
    value:
      "A Codenes cria landing pages, sites e cardápios digitais pensados para transformar visitas em contatos no WhatsApp e em faturamento para o seu negócio.",
    ctaPrimary: "Pedir orçamento no WhatsApp",
    ctaSecondary: "Ver serviços",
  },
  steps: [
    { title: "Conversa rápida", text: "Você conta como funciona o seu negócio e o que precisa vender." },
    { title: "Criação", text: "Montamos textos, visual e SEO focados em gerar contato. Pronto em até 7 dias." },
    { title: "No ar", text: "Seu site publicado, rápido no celular e com o WhatsApp a um toque." },
  ],
  services: [
    {
      id: "landing-pages",
      name: "Landing pages",
      tagline: "Uma página, um objetivo: fazer o cliente chamar você.",
      forWho: "Para quem quer divulgar um serviço, uma promoção ou anunciar no Google e Instagram.",
      includes: ["Texto persuasivo focado em conversão", "Botão de WhatsApp em destaque", "Carregamento rápido no celular", "SEO básico configurado"],
    },
    {
      id: "catalogo-digital",
      name: "Catálogo digital",
      tagline: "Seus produtos com foto e preço, e o pedido chega pronto no WhatsApp.",
      forWho: "Para lojas e varejo que querem mostrar produtos e receber pedidos sem complicação.",
      includes: ["Cadastro de produtos com foto e preço", "Pedido organizado direto no WhatsApp", "Sem taxa por pedido", "Link fácil de compartilhar"],
    },
    {
      id: "cardapio-digital",
      name: "Cardápio digital",
      tagline: "Seu cliente escolhe, o pedido chega pronto no WhatsApp.",
      forWho: "Para restaurantes, lanchonetes e delivery que querem receber pedidos organizados.",
      includes: ["Cardápio com fotos que dão água na boca", "Pedido organizado direto no WhatsApp", "Sem taxa por pedido", "Fácil de atualizar pratos e preços"],
    },
    {
      id: "oficina",
      name: "Sites para oficinas",
      tagline: "Modelo pronto para oficinas mecânicas, no ar em poucos dias.",
      forWho: "Para oficinas que querem passar confiança e receber pedidos de orçamento.",
      includes: ["Estrutura feita para o seu segmento", "Serviços, horários e localização", "Pedido de orçamento via WhatsApp", "Personalização com sua marca"],
    },
    {
      id: "barbearia",
      name: "Sites para barbearias",
      tagline: "Modelo pronto para barbearias e salões, no ar em poucos dias.",
      forWho: "Para barbearias e salões que querem agenda cheia.",
      includes: ["Estrutura feita para o seu segmento", "Serviços, horários e localização", "Agendamento via WhatsApp", "Personalização com sua marca"],
    },
  ],
  about: {
    title: "Resultado antes de enfeite.",
    paragraphs: [
      "A Codenes nasceu para ajudar pequenos negócios, MEIs e quem quer empreender a vender mais pela internet. Muita gente fica travada no digital, sem saber por onde começar ou com medo de gastar à toa, e a ideia aqui é tirar esse peso das suas costas.",
      "Cada projeto junta tecnologia, copywriting e SEO: o visual chama atenção, o texto convence e a estrutura ajuda você a ser encontrado no Google.",
      "O atendimento é direto, sem intermediários e sem linguagem complicada. Você fala com quem faz.",
    ],
  },
  faq: [
    { q: "Em quanto tempo fica pronto?", a: "Em até 7 dias, dependendo do projeto. Landing pages costumam ser as mais rápidas." },
    { q: "Quanto custa?", a: "Os valores são bem acessíveis, abaixo do que uma agência grande cobra. O preço exato depende do serviço e do que o seu negócio precisa." },
    { q: "Preciso entender de domínio e hospedagem?", a: "Não. A parte técnica fica por nossa conta, e o site já sai pronto para usar." },
    { q: "E se eu precisar de ajuda ou de alterações depois?", a: "Você sempre será atendido para tirar dúvidas. Quem não tem plano de acompanhamento conta com ajustes por até 7 dias após a entrega. Depois disso, alterações e suporte mais completo dependem do plano escolhido." },
    { q: "Meu negócio vai aparecer no Google?", a: "O site já sai com SEO configurado. O resultado depende de tempo, mas você já sai na frente de quem não tem site." },
    { q: "Como funciona o pedido pelo WhatsApp?", a: "O cliente escolhe no cardápio digital e o pedido chega organizado no seu WhatsApp. Não cobramos taxa por pedido." },
  ],
  proof: { published: false, items: [] },
  finalCta: {
    title: "Vamos colocar seu negócio para vender online?",
    text: "Responda 5 perguntas rápidas e receba seu orçamento pelo WhatsApp.",
  },
};
