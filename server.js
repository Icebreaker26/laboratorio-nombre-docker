/*
 * VERSIÓN ANTERIOR DE ESTE LABORATORIO (descartada)
 *
 * La primera entrega no tenía servidor de aplicación: era un contenedor
 * nginx:alpine que solo servía un archivo estático.
 *
 *   // Dockerfile viejo
 *   FROM nginx:alpine
 *   COPY index.html /usr/share/nginx/html/index.html
 *   EXPOSE 80
 *
 *   // index.html viejo
 *   <!DOCTYPE html>
 *   <html lang="es">
 *   <head>
 *     <meta charset="UTF-8" />
 *     <title>Laboratorio No. 1 — Docker</title>
 *     <style> ... </style>
 *   </head>
 *   <body>
 *     <h1>Hola, soy <span>Alejandro Marín Torres</span></h1>
 *   </body>
 *   </html>
 *
 * */

const express = require('express');
const app = express();
const PORT = 3000;

// Se recupera el diseño (fondo oscuro, nombre resaltado) del index.html
// viejo que servía nginx, pero ahora el HTML lo arma esta ruta de Express.
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Laboratorio No. 1 — Docker</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          font-family: system-ui, sans-serif;
        }
        h1 {
          color: #e2e8f0;
          font-size: 2.5rem;
          text-align: center;
        }
        span {
          color: #38bdf8;
        }
      </style>
    </head>
    <body>
      <h1>🚀 ¡Reto Docker Completado Exitosamente por <span>Alejandro Marín Torres</span>!</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log('Corriendo en puerto ' + PORT));
