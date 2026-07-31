import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // ponytail: configure-pages can't inject into `export default withMDX(...)`, so set it here
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/portfolio' : '',
  images: { unoptimized: true },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
