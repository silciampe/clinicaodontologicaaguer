export const siteUrl =
  process.env.VITE_SITE_URL ?? "https://clinicaodontologicaaguer.vercel.app";

export const seo = {
  siteName: "Clínica Dental Aguer",
  title: "Clínica Dental Aguer | Odontología en San Nicolás de los Arroyos",
  description:
    "Clínica odontológica en San Nicolás de los Arroyos, Buenos Aires. Implantes, ortodoncia, endodoncia y odontología infantil. España 416. Atención personalizada y tecnología digital.",
  locale: "es_AR",
  ogImage: "/imagenes/portada-chica.jpg",
  telephone: "+54-336-4421631",
  whatsapp: "+5493364379169",
  address: {
    street: "España 416",
    locality: "San Nicolás de los Arroyos",
    region: "Buenos Aires",
    country: "AR",
    postalCode: "2900",
  },
  openingHours: ["Mo-Fr 08:00-19:00"],
  mapsUrl:
    "https://maps.google.com/?q=Clinica+Dental+Aguer+España+416+San+Nicolás",
  geo: {
    latitude: -33.3387855,
    longitude: -60.2170457,
  },
};

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteUrl}/#clinica`,
    name: seo.siteName,
    description: seo.description,
    url: siteUrl,
    image: absoluteUrl(seo.ogImage),
    telephone: seo.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: seo.address.street,
      addressLocality: seo.address.locality,
      addressRegion: seo.address.region,
      postalCode: seo.address.postalCode,
      addressCountry: seo.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: seo.geo.latitude,
      longitude: seo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    sameAs: [seo.mapsUrl],
    areaServed: {
      "@type": "City",
      name: "San Nicolás de los Arroyos",
    },
    medicalSpecialty: [
      "Dentistry",
      "Orthodontics",
      "Endodontics",
      "Pediatric Dentistry",
    ],
  };
}

export function buildSeoHeadHtml() {
  const ogImage = absoluteUrl(seo.ogImage);

  return `
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${siteUrl}/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${seo.siteName}" />
    <meta property="og:locale" content="${seo.locale}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:url" content="${siteUrl}/" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="geo.region" content="AR-B" />
    <meta name="geo.placename" content="San Nicolás de los Arroyos" />
    <meta name="geo.position" content="${seo.geo.latitude};${seo.geo.longitude}" />
    <meta name="ICBM" content="${seo.geo.latitude}, ${seo.geo.longitude}" />
    <script type="application/ld+json">${JSON.stringify(buildJsonLd())}</script>
  `.trim();
}

export function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

export function buildSitemapXml() {
  const lastmod = new Date().toISOString().slice(0, 10);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
}
