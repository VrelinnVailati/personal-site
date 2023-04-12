export const getApiUrl = (): string => {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api`
    : `http://${process.env.API_URL}/api`;
};
