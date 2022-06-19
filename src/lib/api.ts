import { isServer } from "solid-js/web";

export default async function fetchAPI(path: string) {
  const url = ""
  const headers = isServer ? { "User-Agent": "chrome" } : {};

  let response = await fetch(url, { headers });
  let json = await response.json();

  if (json === null) {
    return { error: "Not found" };
  }
  return json;
}
