export function getStrapiMedia(url) {
  // Check if URL is a local path
  console.log( "getStrapiMedia:" );
  console.log("url:", url);
  if ( typeof url === "string" && url.startsWith("/")) {
    // Prepend Strapi address
    return `${
      process.env.GRIDSOME_STRAPI_URL || "http://api.webe.radio:1337"
    }${url}`;
  }
  // Otherwise return full URL
  return url;
}
