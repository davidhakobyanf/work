const basePath = process.env.PORTFOLIO_BASE_PATH || '';

export default {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_PORTFOLIO_BASE_PATH: basePath },
};
