import process from 'node:process'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  }
}
