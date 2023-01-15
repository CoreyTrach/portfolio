import { createClient, groq } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2023-01-14"

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document !== 'undefined', // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
});

export const urlFor = (source: any) =>
  createImageUrlBuilder(client).image(source);
