import type {
  ConcernId,
  DurationId,
} from "@/config/flow";

export type JourneySummaryInput = {
  concern: ConcernId;
  duration: DurationId;
};

export type JourneySummary = {
  eyebrow: string;
  title: string;
  concernLabel: string;
  durationLabel: string;
  personalSummary: string;
  nextStep: string;
};

const concernContent: Record<
  ConcernId,
  {
    label: string;
    summary: string;
  }
> = {
  appearance: {
    label: "Görünüm",
    summary:
      "Yanıtlarınıza göre sizi en çok düşündüren konu gülümsemenizin görünümü.",
  },

  chewing: {
    label: "Çiğneme konforu",
    summary:
      "Yanıtlarınıza göre sizi en çok düşündüren konu rahat çiğneyebilmek.",
  },

  speech: {
    label: "Konuşma konforu",
    summary:
      "Yanıtlarınıza göre sizi en çok düşündüren konu konuşurken yaşadığınız rahatsızlık.",
  },

  multiple: {
    label: "Birden fazla konu",
    summary:
      "Yanıtlarınıza göre görünüm, çiğneme veya konuşma gibi birden fazla konu günlük yaşamınızı etkiliyor.",
  },
};

const durationContent: Record<
  DurationId,
  {
    label: string;
    sentence: string;
  }
> = {
  "less-than-one-month": {
    label: "1 aydan az",
    sentence:
      "Bu durumu yakın zamanda fark ettiğinizi belirttiniz.",
  },

  "one-to-six-months": {
    label: "1–6 ay",
    sentence:
      "Bu durumun bir süredir devam ettiğini belirttiniz.",
  },

  "more-than-six-months": {
    label: "6 aydan uzun",
    sentence:
      "Bu durumun uzun zamandır devam ettiğini belirttiniz.",
  },

  "not-sure": {
    label: "Emin değilim",
    sentence:
      "Bu durumun ne zaman başladığından emin olmadığınızı belirttiniz.",
  },
};

export function buildJourneySummary({
  concern,
  duration,
}: JourneySummaryInput): JourneySummary {
  const concernInfo = concernContent[concern];
  const durationInfo = durationContent[duration];

  return {
    eyebrow: "Size özel özet",

    title:
      "Yanıtlarınıza göre sizin için kısa bir özet hazırladık.",

    concernLabel: concernInfo.label,

    durationLabel: durationInfo.label,

    personalSummary: [
      concernInfo.summary,
      durationInfo.sentence,
    ].join(" "),

    nextStep:
      "Bu özet yalnızca verdiğiniz cevaplara dayanır. Size uygun seçeneklerin değerlendirilmesi için bir diş hekimiyle görüşebilirsiniz.",
  };
}