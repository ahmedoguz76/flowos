"use client";

import { useState, type FormEvent } from "react";

import { flowConfig } from "@/config/flow";
import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";

type ContactData = {
  fullName: string;
  phone: string;
  consent: boolean;
};

type ContactScreenProps = {
  onSubmit: (data: ContactData) => void;
};

export function ContactScreen({
  onSubmit,
}: ContactScreenProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  const screen = flowConfig.contact;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedName = fullName.trim();
    const normalizedPhone = phone.trim();

    if (!normalizedName || !normalizedPhone) {
      setError("Lütfen adınızı ve telefon numaranızı girin.");
      return;
    }

    if (!consent) {
      setError(
        "Devam etmek için KVKK Aydınlatma Metni'ni onaylamalısınız.",
      );
      return;
    }

    setError("");

    onSubmit({
      fullName: normalizedName,
      phone: normalizedPhone,
      consent,
    });
  }

  return (
    <PlayerScreen
      screenId="contact"
      eyebrow={screen.eyebrow}
      title={screen.title}
      description={screen.description}
    >
      <form
        className="space-y-[var(--space-3)]"
        onSubmit={handleSubmit}
      >
        <Input
          id="fullName"
          label="Ad Soyad"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          autoComplete="name"
          placeholder="Adınız ve soyadınız"
        />

        <Input
          id="phone"
          label="Telefon"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          autoComplete="tel"
          inputMode="tel"
          placeholder="05xx xxx xx xx"
        />

        <Checkbox
          checked={consent}
          onChange={setConsent}
        >
          KVKK Aydınlatma Metni’ni okudum ve iletişim
          talebimin işlenmesini kabul ediyorum.
        </Checkbox>

        {error && (
          <p
            role="alert"
            className="
              rounded-[var(--radius-small)]
              border border-red-200
              bg-red-50
              px-[var(--space-2)]
              py-3
              text-sm font-medium
              text-red-700
            "
          >
            {error}
          </p>
        )}

        <Button type="submit" fullWidth>
          {screen.submitLabel} →
        </Button>
      </form>

      <p className="mt-[var(--space-2)] text-center text-xs leading-5 text-[var(--color-text-muted)]">
        Bu form tanı veya tedavi sağlamaz. Hukuki metinler gerçek
        kullanımdan önce uzman tarafından doğrulanmalıdır.
      </p>
    </PlayerScreen>
  );
}