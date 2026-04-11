import Script from "next/script";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <Script
      id={`jsonld-${String(data["@type"] ?? "data")}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

