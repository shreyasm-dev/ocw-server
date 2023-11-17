export const folder = 'public';
export const indexTemplate = (content: string): string =>
  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>MIT OCW</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="normalize.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="app">${content}</div>
  </body>
</html>
  `.trim();
