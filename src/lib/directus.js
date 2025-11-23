import { createDirectus, rest, readItems } from "@directus/sdk";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

if (!DIRECTUS_URL) {
  throw new Error("NEXT_PUBLIC_DIRECTUS_URL is not set");
}

const directus = createDirectus(DIRECTUS_URL).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export async function getCollectionData(collectionName) {
  return directus.request(readItems(collectionName));
}

export function buildImageUrl(imageId) {
  const assetToken = process.env.DIRECTUS_ASSET_TOKEN;
  if (!imageId) return null;
  const url = new URL(`/assets/${imageId}`, DIRECTUS_URL);
  if (assetToken) {
    url.searchParams.set("access_token", assetToken);
  }
  return url.toString();
}

export default directus;
