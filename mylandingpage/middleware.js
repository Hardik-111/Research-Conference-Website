export function middleware() {
  return new Response(
    `
    <html>
      <head>
        <title>Maintenance</title>
        <style>
          body{
            font-family: Arial, sans-serif;
            text-align:center;
            margin-top:120px;
          }
        </style>
      </head>
      <body>
        <h1>Site Under Maintenance</h1>
        <p>Please check back later.</p>
      </body>
    </html>
    `,
    {
      status: 503,
      headers: { "content-type": "text/html" },
    }
  );
}

export const config = {
  matcher: "/:path*",
};
