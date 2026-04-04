export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  excerpt,
  mainImage,
  legacyImageUrl
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  excerpt,
  mainImage,
  legacyImageUrl,
  body
}`;

export const realizationsQuery = `*[_type == "realization"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  order,
  mainImage,
  legacyImageUrl,
  intro
}`;

export const realizationBySlugQuery = `*[_type == "realization" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  order,
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
  photo,
  legacyPhotoUrl
}`;
