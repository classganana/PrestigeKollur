type JsonLd = Record<string, unknown>;

type Props = {
  data: JsonLd | JsonLd[];
};

/** Injects JSON-LD — place once per page/layout as needed. */
export function StructuredData({ data }: Props) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
