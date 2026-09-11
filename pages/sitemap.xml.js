import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Sitemap = () => {
  const router = useRouter();
  return null;
};

export default Sitemap;

export async function getServerSideProps({ res }) {
  const { default: conectarDB } = await import('../lib/dbConnect');
  const { default: Post } = await import('../models/Posts');
  const { default: Proyect } = await import('../models/Proyect');

  await conectarDB();

  const [posts] = await Promise.all([
    Post.find({}).select('slug updatedAt -_id').lean(),
  ]);

  const BASE_URL = 'https://dvdev.vercel.app';

  const postUrls = posts.map((post) => {
    const lastmod = new Date(post.updatedAt).toISOString();
    return `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`;
  });

  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/blog', priority: '0.9', changefreq: 'weekly' },
    { path: '/proyectos', priority: '0.8', changefreq: 'monthly' },
    { path: '/cv', priority: '0.7', changefreq: 'monthly' },
    { path: '/contacto', priority: '0.6', changefreq: 'yearly' },
  ];

  const now = new Date().toISOString();

  const staticUrls = staticPages.map(
    (page) => `
    <url>
      <loc>${BASE_URL}${page.path}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.join('')}
  ${postUrls.join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(xml);
  res.end();

  return { props: {} };
}
