export default {
  async fetch(request: Request, env: any) {
    // Try to serve the static asset first
    let response = await env.ASSETS.fetch(request);

    // For SPA routes, fall back to index.html on 404 (GET + HTML accept)
    if (response.status === 404 && request.method === "GET") {
      const accept = request.headers.get("Accept") || "";
      const wantsHtml = accept.includes("text/html");
      if (wantsHtml) {
        const url = new URL(request.url);
        url.pathname = "/index.html";
        response = await env.ASSETS.fetch(new Request(url.toString(), request));
      }
    }

    return response;
  },
};
