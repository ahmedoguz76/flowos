import {
  CalendarDays,
  CircleHelp,
  Hourglass,
  MessageCircle,
  MoreHorizontal,
  Smile,
  Sprout,
  Utensils,
  type LucideIcon,
} from "lucide-react";

export type ConcernId =
  | "appearance"
  | "chewing"
  | "speech"
  | "multiple";

export type DurationId =
  | "less-than-one-month"
  | "one-to-six-months"
  | "more-than-six-months"
  | "not-sure";

type Option<T extends string> = {
  id: T;
  title: string;
  description: string;
  icon: LucideIcon;
};

type StoryContent = {
  eyebrow: string;
  title: string;
  description: string;
  insight: string;
};

type RecommendationItem = {
  label: string;
  title: string;
  description: string;
};

type RecommendationContent = {
  title: string;
  items: RecommendationItem[];
};

export const flowConfig = {
  clinic: {
    name: "Özge Seçkin",
    guideTitle: "Eksik Diş Bilgilendirme Rehberi",
  },

  welcome: {
    eyebrow: "Kişiselleştirilmiş bilgilendirme",
    title: "Eksik dişiniz günlük yaşamınızı nasıl etkiliyor?",
    description:
      "Birkaç kısa seçimle yalnızca sizi ilgilendirebilecek içeriklere ulaşın.",
    cta: "Kendime Uygun Bilgileri Gör",
  },

  decision: {
    eyebrow: "Kısa bir seçim",
    title: "Günlük yaşamda sizi en çok hangisi etkiliyor?",
    description: "Size en yakın seçeneği seçebilirsiniz.",
    options: [
      {
        id: "appearance",
        icon: Smile,
        title: "Görünüm",
        description: "Gülümserken kendinizi rahat hissetmiyor musunuz?",
      },
      {
        id: "chewing",
        icon: Utensils,
        title: "Çiğneme",
        description: "Yemek yerken zorlanıyor musunuz?",
      },
      {
        id: "speech",
        icon: MessageCircle,
        title: "Konuşma",
        description: "Konuşurken rahatsızlık hissediyor musunuz?",
      },
      {
        id: "multiple",
        icon: MoreHorizontal,
        title: "Birden fazla durum",
        description: "Birden fazla konu günlük yaşamınızı etkiliyor mu?",
      },
    ] satisfies Option<ConcernId>[],
  },

  stories: {
    appearance: {
      eyebrow: "Görünüm",
      title: "Bu konuda yalnız değilsiniz.",
      description:
        "Birçok kişi eksik dişi nedeniyle gülümserken kendini daha çekingen hissedebiliyor.",
      insight:
        "Bu durumun günlük yaşam üzerindeki etkisi kişiden kişiye değişebilir.",
    },
    chewing: {
      eyebrow: "Çiğneme",
      title: "Günlük konfor zamanla değişebilir.",
      description:
        "Bazı kişiler eksik diş nedeniyle çiğneme alışkanlıklarının değiştiğini fark edebiliyor.",
      insight:
        "Durumun doğru değerlendirilebilmesi için klinik muayene gerekir.",
    },
    speech: {
      eyebrow: "Konuşma",
      title: "Küçük değişiklikler fark edilebilir.",
      description:
        "Eksik dişin bulunduğu bölgeye göre bazı kişiler konuşurken farklılık hissedebilir.",
      insight:
        "Her durum kişinin ağız yapısına göre ayrı değerlendirilmelidir.",
    },
    multiple: {
      eyebrow: "Birden fazla durum",
      title: "Etkiler tek bir alanla sınırlı olmayabilir.",
      description:
        "Görünüm, çiğneme ve günlük konfor bazı kişilerde birlikte etkilenebilir.",
      insight:
        "Uygun seçenekler ancak profesyonel değerlendirme sonrasında belirlenebilir.",
    },
  } satisfies Record<ConcernId, StoryContent>,

  duration: {
    eyebrow: "Bir kısa soru daha",
    title: "Bu durum ne zamandır devam ediyor?",
    description: "Size en yakın seçeneği seçebilirsiniz.",
    options: [
      {
        id: "less-than-one-month",
        icon: Sprout,
        title: "1 aydan az",
        description: "Bu durumu yakın zamanda fark ettim.",
      },
      {
        id: "one-to-six-months",
        icon: CalendarDays,
        title: "1–6 ay",
        description: "Bir süredir günlük yaşamımı etkiliyor.",
      },
      {
        id: "more-than-six-months",
        icon: Hourglass,
        title: "6 aydan uzun",
        description: "Uzun zamandır devam ediyor.",
      },
      {
        id: "not-sure",
        icon: CircleHelp,
        title: "Emin değilim",
        description: "Ne zaman başladığını tam hatırlamıyorum.",
      },
    ] satisfies Option<DurationId>[],
  },

  information: {
    eyebrow: "Kısa bir bilgilendirme",
    title: "Eksik dişlerin etkisi kişiden kişiye değişebilir.",
    body:
      "Eksik dişler bazı kişilerde görünüm, çiğneme veya konuşma konforunu etkileyebilir. Uygun seçeneklerin belirlenebilmesi için klinik değerlendirme gerekir.",
  },

  recommendations: {
    appearance: {
      title: "Görünüm konusunda şu içerikler ilginizi çekebilir.",
      items: [
        {
          label: "Rehber",
          title: "Eksik dişlerin gülüş üzerindeki etkileri",
          description:
            "Görünümde fark edilen değişikliklerin hangi başlıklarla değerlendirilebileceğini öğrenin.",
        },
        {
          label: "Bilgilendirme",
          title: "Tedavi seçenekleri nasıl değerlendirilir?",
          description:
            "Uygun yaklaşımın neden yalnızca klinik değerlendirme sonrasında belirlenebileceğini inceleyin.",
        },
        {
          label: "Hazırlık",
          title: "Muayene öncesinde bilinmesi gerekenler",
          description:
            "İlk değerlendirme öncesinde sürecin nasıl ilerleyebileceğine göz atın.",
        },
      ],
    },
    chewing: {
      title: "Çiğneme konusunda şu içerikler ilginizi çekebilir.",
      items: [
        {
          label: "Rehber",
          title: "Eksik dişlerin çiğneme konforuna etkisi",
          description:
            "Çiğneme alışkanlıklarında oluşabilecek değişiklikler hakkında genel bilgi edinin.",
        },
        {
          label: "Günlük yaşam",
          title: "Dikkat edilebilecek noktalar",
          description:
            "Değerlendirme öncesinde günlük yaşamda gözlemleyebileceğiniz durumları inceleyin.",
        },
        {
          label: "Süreç",
          title: "Klinik değerlendirme nasıl ilerler?",
          description:
            "İlk görüşmede hangi başlıkların ele alınabileceğini öğrenin.",
        },
      ],
    },
    speech: {
      title: "Konuşma konusunda şu içerikler ilginizi çekebilir.",
      items: [
        {
          label: "Bilgilendirme",
          title: "Diş eksikliğinin konuşmaya etkisi olabilir mi?",
          description:
            "Eksik dişin bulunduğu bölgeye göre oluşabilecek farklılıkları genel hatlarıyla inceleyin.",
        },
        {
          label: "Değerlendirme",
          title: "Hangi durumlarda muayene önerilir?",
          description:
            "Konuşma konforundaki değişikliklerin hangi durumlarda değerlendirilmesinin faydalı olabileceğini öğrenin.",
        },
        {
          label: "Süreç",
          title: "Muayenede neler incelenir?",
          description:
            "Klinik değerlendirme sırasında dikkate alınabilecek temel başlıklara göz atın.",
        },
      ],
    },
    multiple: {
      title: "Birden fazla konuda şu içerikler ilginizi çekebilir.",
      items: [
        {
          label: "Genel rehber",
          title: "Eksik dişlerin günlük yaşama etkileri",
          description:
            "Görünüm, çiğneme ve konuşma konforunun birlikte nasıl değerlendirilebileceğini öğrenin.",
        },
        {
          label: "Bilgilendirme",
          title: "Tedavi seçenekleri hangi kriterlere göre belirlenir?",
          description:
            "Kişiye özel karar sürecinde dikkate alınan temel unsurları inceleyin.",
        },
        {
          label: "Hazırlık",
          title: "Muayene öncesinde bilinmesi gerekenler",
          description:
            "İlk görüşme öncesinde sürecin nasıl ilerleyebileceğine dair genel bilgi edinin.",
        },
      ],
    },
  } satisfies Record<ConcernId, RecommendationContent>,

  contact: {
    eyebrow: "İsteğe bağlı iletişim",
    title: "Uzman ekiple görüşmek ister misiniz?",
    description:
      "Bilgilerinizi bırakırsanız klinik ekibi sizinle iletişime geçebilir.",
    submitLabel: "İletişim Talebi Gönder",
  },

  thankYou: {
    eyebrow: "Yolculuk tamamlandı",
    description: "İletişim talebiniz başarıyla alındı.",
    restartLabel: "Baştan Başla",
  },
} as const;