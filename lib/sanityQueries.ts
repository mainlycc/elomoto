export const blogPostsQuery = `*[_type == "blogPost" && coalesce(locale, "pl") == $locale] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  excerpt,
  "imageUrl": coalesce(mainImage.asset->url, legacyImageUrl),
  mainImage,
  legacyImageUrl
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug && coalesce(locale, "pl") == $locale][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  excerpt,
  "imageUrl": coalesce(mainImage.asset->url, legacyImageUrl),
  mainImage,
  legacyImageUrl,
  body
}`;

export const realizationsQuery = `*[_type == "realization" && coalesce(locale, "pl") == $locale] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  order,
  "imageUrl": coalesce(mainImage.asset->url, legacyImageUrl),
  mainImage,
  legacyImageUrl,
  intro
}`;

export const realizationBySlugQuery = `*[_type == "realization" && slug.current == $slug && coalesce(locale, "pl") == $locale][0]{
  _id,
  title,
  "slug": slug.current,
  order,
  "imageUrl": coalesce(mainImage.asset->url, legacyImageUrl),
  mainImage,
  legacyImageUrl,
  intro,
  body,
  detailLead,
  scopeTitle,
  scopeContent,
  effectsTitle,
  effectsLead,
  effectsHighlights
}`;

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  fullName,
  position,
  order,
  "photoUrl": coalesce(photo.asset->url, legacyPhotoUrl),
  photo,
  legacyPhotoUrl
}`;
