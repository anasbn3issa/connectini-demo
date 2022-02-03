/**
 * * checks local storage for user item .
 * ? if found a logged in user with JWT
 * ? then return HTTP Authorization header .
 * ! else return an empty object .
 */
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
