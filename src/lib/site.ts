import { Coffee, Croissant, Heart, ShoppingBag, Sparkles, Star, Clock } from "lucide-react";

export const SITE_NAME = "Delicatensse Soares";
export const SITE_URL = "https://delicatenssesoares.lovable.app";

export const WHATS =
  "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Delicatensse%20Soares.";

const asset = (name: string) => ({ url: `/assets/${name}` });

export const img = {
  logo: asset("logo.png"),
  salaoA: asset("restaurante3.jpg"),
  salaoB: asset("restaurante4.jpg"),
  pao: asset("ex1.jpg"),
  tabua: asset("ex2.jpg"),
  sanduiche: asset("ex3.jpg"),
  boloFuba: asset("ex4.jpg"),
  cafePaoQueijo: asset("ex5.jpg"),
  boloPudim: asset("ex6.jpg"),
};

export const delicias = [
  {
    img: img.pao.url,
    nome: "Pães Artesanais",
    desc: "Fermentação natural, casca crocante e miolo macio, assados todos os dias.",
  },
  {
    img: img.tabua.url,
    nome: "Tábua da Casa",
    desc: "Queijos, frios selecionados, azeitonas e pães quentinhos para compartilhar.",
  },
  {
    img: img.boloPudim.url,
    nome: "Bolo Pudim",
    desc: "Camadas de pão de ló, doce de leite e pudim cremoso. Um clássico irresistível.",
  },
];

export const maisPedidos = [
  {
    img: img.cafePaoQueijo.url,
    nome: "Café + Pão de Queijo",
    desc: "O combo que abre o dia com aconchego.",
    preco: "R$ 18,90",
    tag: "Mais vendido",
  },
  {
    img: img.sanduiche.url,
    nome: "Sanduíche Soares",
    desc: "Pão na chapa, bacon, queijo e salada fresca.",
    preco: "R$ 32,90",
    tag: "Favorito",
  },
  {
    img: img.boloFuba.url,
    nome: "Bolo de Fubá Cremoso",
    desc: "Receita de casa, feito na hora do lanche.",
    preco: "R$ 12,90",
    tag: "Da vovó",
  },
  {
    img: tabua.url,
    nome: "Tábua para Dois",
    desc: "Perfeita para receber alguém especial.",
    preco: "R$ 79,90",
    tag: "Para dividir",
  },
];

export const cardapio = [
  {
    titulo: "Padaria",
    icone: Croissant,
    itens: [
      ["Pão de fermentação natural", "R$ 24,00"],
      ["Croissant de manteiga", "R$ 14,00"],
      ["Pão de queijo (6 un.)", "R$ 16,00"],
      ["Focaccia de alecrim", "R$ 22,00"],
    ],
  },
  {
    titulo: "Cafeteria",
    icone: Coffee,
    itens: [
      ["Espresso duplo", "R$ 9,00"],
      ["Cappuccino cremoso", "R$ 15,00"],
      ["Coado especial 250ml", "R$ 12,00"],
      ["Chocolate quente", "R$ 17,00"],
    ],
  },
  {
    titulo: "Empório & Doces",
    icone: ShoppingBag,
    itens: [
      ["Tábua de frios (individual)", "R$ 46,00"],
      ["Bolo pudim (fatia)", "R$ 19,00"],
      ["Torta de limão", "R$ 18,00"],
      ["Cesta presente", "a partir de R$ 129,00"],
    ],
  },
] as const;

export const depoimentos = [
  {
    nome: "Mariana Alves",
    texto:
      "O café da manhã aqui virou ritual de sábado. O pão sai do forno na sua frente e o atendimento é de uma gentileza rara.",
  },
  {
    nome: "Rodrigo Menezes",
    texto:
      "Levei clientes para uma reunião informal e todos pediram o endereço depois. Ambiente lindo, iluminação quente e comida impecável.",
  },
  {
    nome: "Camila Duarte",
    texto:
      "Resolvo tudo num lugar só: café da tarde, presente para a sogra e o pão da semana. A tábua para dois é o melhor programa da cidade.",
  },
];

export const motivos = [
  {
    icone: Star,
    titulo: "Qualidade em cada escolha",
    texto:
      "Produtos selecionados para oferecer uma experiência que combina sabor, praticidade e confiança.",
  },
  {
    icone: Sparkles,
    titulo: "Variedade para diferentes momentos",
    texto:
      "Uma opção para o café, para a rotina, para receber alguém em casa ou simplesmente para aproveitar seu momento.",
  },
  {
    icone: Heart,
    titulo: "Atendimento próximo",
    texto:
      "Mais do que vender produtos, queremos proporcionar uma experiência agradável desde o primeiro contato.",
  },
  {
    icone: Clock,
    titulo: "Praticidade para o seu dia",
    texto: "Tudo em um só lugar para você encontrar o que precisa com mais facilidade e comodidade.",
  },
];
