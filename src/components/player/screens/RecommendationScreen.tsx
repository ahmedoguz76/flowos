import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type RecommendationScreenProps = {
  concern: string;
  onContinue: () => void;
};

const recommendationsByConcern: Record<
  string,
  {
    title: string;
    items: {
      label: string;
      title: string;
      description: string;
    }[];
  }
> = {
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
};

export function RecommendationScreen({
  concern,
  onContinue,
}: RecommendationScreenProps) {
  const recommendation =
    recommendationsByConcern[concern] ??
    recommendationsByConcern.multiple;

  return (
    <PlayerScreen
      screenId="recommendation"
      eyebrow="Size uygun içerikler"
      title={recommendation.title}
      description="Bu içerikler yalnızca bilgilendirme amaçlıdır. Kesin değerlendirme klinik muayene ile yapılır."
    >
      <div className="grid gap-[var(--space-2)]">
        {recommendation.items.map((item) => (
          <Card
            key={item.title}
            variant="soft"
            className="p-[var(--space-3)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              {item.label}
            </p>

            <h3 className="mt-[var(--space-1)] text-lg font-semibold tracking-[-0.025em] text-[var(--color-text-primary)]">
              {item.title}
            </h3>

            <p className="mt-[var(--space-1)] text-sm leading-6 text-[var(--color-text-secondary)]">
              {item.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-[var(--space-4)]">
        <Button
          type="button"
          fullWidth
          onClick={onContinue}
        >
          Uzmanla iletişim seçeneklerini gör →
        </Button>
      </div>
    </PlayerScreen>
  );
}