import { Helmet } from "react-helmet-async";

function SEO({ title, description, keywords, author, image, url }) {
  const siteTitle = "Ukattah Divine (Codevine)";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = url || "https://codevine.dev"; // replace with your real domain

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "Codevine, Ukattah Divine, Frontend Developer, React, Portfolio"} />
      <meta name="author" content={author || "Ukattah Divine"} />

      {/* Open Graph / Social Preview */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={image || `${siteUrl}/meta-thumbnail.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || `${siteUrl}/meta-thumbnail.png`} />
    </Helmet>
  );
}

export default SEO;
