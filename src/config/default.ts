export const backend = {
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL ?? "",
};

export const cognito = {
  clientId: process.env.COGNITO_CLIENT_ID ?? "",
  clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
  domain: process.env.COGNITO_DOMAIN ?? "",
  issuer: process.env.COGNITO_ISSUER ?? "",
  logoutUrl: process.env.COGNITO_LOGOUT_URL ?? "",
};
