import { UserManager } from "oidc-client-ts";

const isLocalhost = window.location.hostname === "localhost";
const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_04DE9zl9z",
  client_id: "lvki4cf3c5cjsrif7jtduimrm",
  redirect_uri: isLocalhost
    ? "http://localhost:5173/callback"
    : "https://d3ssa7u9tniekd.cloudfront.net/callback",
  response_type: "code",
  scope: "email openid phone",
};

export const userManager = new UserManager({
  ...cognitoAuthConfig,
});

export async function signOutRedirect() {
  const clientId = "lvki4cf3c5cjsrif7jtduimrm";
  const logoutUri = isLocalhost
    ? "http://localhost:5173"
    : "https://d3ssa7u9tniekd.cloudfront.net";
  const cognitoDomain = "https://ap-southeast-204de9zl9z.auth.ap-southeast-2.amazoncognito.com";
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
}