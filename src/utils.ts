export const getApiUrl = (): string => {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api`
    : `http://${process.env.NEXT_PUBLIC_API_URL}/api`;
};
