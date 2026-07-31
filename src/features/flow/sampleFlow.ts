import type { FlowNode } from "@/types/flow";

export const sampleFlow: FlowNode[] = [
  {
    id: "welcome",
    type: "welcome",
    title: "Eksik dişiniz günlük yaşamınızı nasıl etkiliyor?",
    description:
      "Birkaç kısa soruyla yalnızca sizi ilgilendiren bilgileri göstereceğiz.",
    next: "question1",
  },
  {
    id: "question1",
    type: "question",
    title: "Sizi en çok hangi durum etkiliyor?",
    description: "Size en yakın seçeneği işaretleyin.",
    options: [
      {
        id: "appearance",
        label: "Görünüm",
        next: "resultAppearance",
      },
      {
        id: "chewing",
        label: "Çiğneme",
        next: "resultChewing",
      },
      {
        id: "multiple",
        label: "Birden fazla durum",
        next: "resultMultiple",
      },
    ],
  },
  {
    id: "resultAppearance",
    type: "result",
    title: "Görünüm konusunda bilgi arıyorsunuz",
    description:
      "Eksik dişlerin görünüm üzerindeki etkisi kişiden kişiye değişebilir. Uygun seçenekler ancak diş hekimi değerlendirmesiyle belirlenebilir.",
  },
  {
    id: "resultChewing",
    type: "result",
    title: "Çiğneme konusunda bilgi arıyorsunuz",
    description:
      "Eksik dişler bazı kişilerde çiğneme konforunu etkileyebilir. Durumun doğru değerlendirilmesi için klinik muayene gerekir.",
  },
  {
    id: "resultMultiple",
    type: "result",
    title: "Birden fazla konuda bilgi arıyorsunuz",
    description:
      "Görünüm ve günlük kullanım birlikte değerlendirilebilir. Size uygun seçenekler ancak profesyonel değerlendirmeyle belirlenebilir.",
  },
];