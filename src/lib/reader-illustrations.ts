import baruque from "@/assets/reader-illustrations/baruque.jpg";
import baruqueLuto from "@/assets/reader-illustrations/baruque-siao-em-luto.jpg";
import baruqueJerusalem from "@/assets/reader-illustrations/baruque-retorno-jerusalem.jpg";
import belEster from "@/assets/reader-illustrations/bel-e-ester.jpg";
import belEsterDragoes from "@/assets/reader-illustrations/bel-e-ester-dragoes.jpg";
import belEsterDecreto from "@/assets/reader-illustrations/bel-e-ester-contra-decreto.jpg";
import eclesiastico from "@/assets/reader-illustrations/eclesiastico.jpg";
import eclesiasticoSilencio from "@/assets/reader-illustrations/eclesiastico-silencio.jpg";
import eclesiasticoSabia from "@/assets/reader-illustrations/eclesiastico-escuta-sabia.jpg";
import enoque from "@/assets/reader-illustrations/enoque.jpg";
import enoqueCeus from "@/assets/reader-illustrations/enoque-sete-ceus.jpg";
import enoqueNoe from "@/assets/reader-illustrations/enoque-noe-diluvio.jpg";
import esdras from "@/assets/reader-illustrations/esdras.jpg";
import esdrasJovens from "@/assets/reader-illustrations/esdras-tres-jovens.jpg";
import esdrasCaravana from "@/assets/reader-illustrations/esdras-caravana-sacerdotes.jpg";
import judite from "@/assets/reader-illustrations/judite.jpg";
import juditeGuardas from "@/assets/reader-illustrations/judite-guardas-assirios.jpg";
import juditeClamor from "@/assets/reader-illustrations/judite-clamor-israel.jpg";
import oracaoSuzana from "@/assets/reader-illustrations/oracao-e-suzana.jpg";
import oracaoJardim from "@/assets/reader-illustrations/oracao-susana-jardim.jpg";
import oracaoFornalha from "@/assets/reader-illustrations/oracao-fornalha-orvalho.jpg";
import paiNosso from "@/assets/reader-illustrations/pai-nosso-original.jpg";
import paiNossoCosmos from "@/assets/reader-illustrations/pai-nosso-cosmos.jpg";
import paiNossoDespertar from "@/assets/reader-illustrations/pai-nosso-despertar.jpg";
import sabedoria from "@/assets/reader-illustrations/sabedoria-de-salomao.jpg";
import sabedoriaAlmas from "@/assets/reader-illustrations/sabedoria-almas-justos.jpg";
import sabedoriaOracao from "@/assets/reader-illustrations/sabedoria-salomao-oracao.jpg";

export type ReaderIllustration = {
  src: string;
  alt: string;
  caption: string;
  chapterIndex: number;
  afterParagraph: number;
};

type PlacedArtwork = ReaderIllustration;

const ART = {
  baruque: [
    { src: baruque, alt: "Baruque em oração diante da cidade antiga", caption: "Baruque — oração e memória diante de Jerusalém.", chapterIndex: 0, afterParagraph: 10 },
    { src: baruqueLuto, alt: "Baruque em lamento junto às ruínas de Jerusalém", caption: "Baruque — lamento e esperança entre as ruínas.", chapterIndex: 3, afterParagraph: 18 },
    { src: baruqueJerusalem, alt: "Retorno a Jerusalém em paisagem antiga", caption: "Baruque — retorno e restauração de Jerusalém.", chapterIndex: 4, afterParagraph: 4 },
  ],
  bel: [
    { src: belEster, alt: "Bel e Ester em cenário bíblico antigo", caption: "Bel e Ester — coragem diante do poder.", chapterIndex: 0, afterParagraph: 10 },
    { src: belEsterDragoes, alt: "Cena de Bel e Ester com o dragão do relato", caption: "Bel — o confronto com o dragão.", chapterIndex: 1, afterParagraph: 5 },
    { src: belEsterDecreto, alt: "Ester diante de um decreto real", caption: "Ester — resistência ao decreto.", chapterIndex: 7, afterParagraph: 12 },
  ],
  eclesiastico: [
    { src: eclesiastico, alt: "Ancião e escriba em estudo de sabedoria", caption: "Eclesiástico — o ensino da sabedoria.", chapterIndex: 0, afterParagraph: 2 },
    { src: eclesiasticoSilencio, alt: "Ancião em contemplação silenciosa", caption: "Eclesiástico — silêncio e contemplação.", chapterIndex: 20, afterParagraph: 0 },
    { src: eclesiasticoSabia, alt: "Discípulo ouvindo um sábio em manuscrito antigo", caption: "Eclesiástico — escutar a voz do sábio.", chapterIndex: 39, afterParagraph: 17 },
  ],
  enoque: [
    { src: enoque, alt: "Enoque contemplando uma visão celestial", caption: "Enoque — visão e contemplação celestial.", chapterIndex: 0, afterParagraph: 1 },
    { src: enoqueCeus, alt: "Representação dos sete céus em arte sacra antiga", caption: "Enoque — os sete céus da visão.", chapterIndex: 51, afterParagraph: 30 },
    { src: enoqueNoe, alt: "Noé e a visão do dilúvio em arte bíblica antiga", caption: "Enoque — Noé e a visão do dilúvio.", chapterIndex: 31, afterParagraph: 15 },
  ],
  esdras: [
    { src: esdras, alt: "Esdras com manuscritos em cenário antigo", caption: "Esdras — o escriba diante dos manuscritos.", chapterIndex: 0, afterParagraph: 28 },
    { src: esdrasJovens, alt: "Três jovens em narrativa bíblica antiga", caption: "Esdras — os três jovens e a prova da fé.", chapterIndex: 3, afterParagraph: 31 },
    { src: esdrasCaravana, alt: "Caravana de sacerdotes em viagem", caption: "Esdras — a caravana dos sacerdotes.", chapterIndex: 7, afterParagraph: 47 },
  ],
  judite: [
    { src: judite, alt: "Judite em cenário de guerra do antigo Oriente", caption: "Judite — coragem diante do cerco.", chapterIndex: 0, afterParagraph: 7 },
    { src: juditeGuardas, alt: "Guardas assírios em acampamento antigo", caption: "Judite — o acampamento dos assírios.", chapterIndex: 6, afterParagraph: 15 },
    { src: juditeClamor, alt: "Povo de Israel reunido em oração", caption: "Judite — clamor de Israel.", chapterIndex: 8, afterParagraph: 6 },
  ],
  suzana: [
    { src: oracaoSuzana, alt: "Oração em cenário de manuscrito antigo", caption: "Manassés — súplica e arrependimento.", chapterIndex: 0, afterParagraph: 7 },
    { src: oracaoFornalha, alt: "Oração diante da fornalha em arte sacra", caption: "Os três jovens — fé diante da provação.", chapterIndex: 2, afterParagraph: 2 },
    { src: oracaoJardim, alt: "Susana em oração no jardim", caption: "Susana — oração e testemunho.", chapterIndex: 3, afterParagraph: 31 },
  ],
  pai: [
    { src: paiNosso, alt: "Representação antiga do Pai Nosso", caption: "Pai Nosso — a oração em tradição antiga.", chapterIndex: 0, afterParagraph: 5 },
    { src: paiNossoDespertar, alt: "Figura em despertar espiritual em arte sacra", caption: "Pai Nosso — despertar espiritual.", chapterIndex: 0, afterParagraph: 12 },
    { src: paiNossoCosmos, alt: "Céu e cosmos em composição de manuscrito antigo", caption: "Pai Nosso — oração e cosmos.", chapterIndex: 0, afterParagraph: 19 },
  ],
  sabedoria: [
    { src: sabedoria, alt: "Rei e escribas em cena de sabedoria antiga", caption: "Sabedoria de Salomão — o ensino do sábio.", chapterIndex: 0, afterParagraph: 7 },
    { src: sabedoriaAlmas, alt: "Justos acolhidos pela providência enquanto governantes observam ao longe", caption: "Sabedoria — as almas dos justos estão nas mãos de Deus.", chapterIndex: 2, afterParagraph: 9 },
    { src: sabedoriaOracao, alt: "Salomão em oração pela sabedoria diante da cidade antiga", caption: "Salomão — a oração pelo dom da sabedoria.", chapterIndex: 8, afterParagraph: 8 },
  ],
} satisfies Record<string, PlacedArtwork[]>;

const FALLBACK: PlacedArtwork[] = ART.sabedoria;

function familyForSlug(slug: string): PlacedArtwork[] {
  const s = slug.toLowerCase();
  if (s.includes("baruque") || s.includes("baruc")) return ART.baruque;
  if (s.includes("bel") || s.includes("ester")) return ART.bel;
  if (s.includes("eclesiast") || s.includes("sirac")) return ART.eclesiastico;
  if (s.includes("enoque") || s.includes("enoch")) return ART.enoque;
  if (s.includes("esdras") || s.includes("ezra")) return ART.esdras;
  if (s.includes("judite") || s.includes("judith")) return ART.judite;
  if (s.includes("suzana") || s.includes("susana") || s.includes("oracao")) return ART.suzana;
  if (s.includes("pai-nosso") || s.includes("pai_nosso") || s.includes("aramaico")) return ART.pai;
  if (s.includes("sabedoria") || s.includes("salomao") || s.includes("salomão")) return ART.sabedoria;
  return FALLBACK;
}

export function readerIllustrationsFor(slug = "", chapters = 0, paragraphsByChapter: number[] = []): ReaderIllustration[] {
  return familyForSlug(slug)
    .filter((item) => item.chapterIndex < chapters && (paragraphsByChapter[item.chapterIndex] ?? 0) > 0)
    .map((item) => ({
      ...item,
      afterParagraph: Math.min(item.afterParagraph, (paragraphsByChapter[item.chapterIndex] ?? 1) - 1),
    }))
    .sort((a, b) => a.chapterIndex - b.chapterIndex || a.afterParagraph - b.afterParagraph);
}
