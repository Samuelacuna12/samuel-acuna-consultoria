# Samuel Acuña — Consultoría empresarial

Sitio estático en español con dos landings independientes. HTML, CSS y JavaScript nativos, sin instalación ni compilación.

## Vista local

Desde esta carpeta ejecuta `python3 -m http.server 8080` y abre http://localhost:8080.

## Publicación

GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root).
Cada commit a main actualiza la página. Las rutas de recursos son relativas.

## Edición

- `index.html`: presentación personal y elección de servicio.
- `empresa.html` y `ventas.html`: contenido, precios, metadatos y enlaces de cada oferta.
- `styles.css`: diseño responsive y ajustes de movimiento reducido.
- `app.js`: navegación por secciones, seis pilares, año del pie y explorador de entregables. En escritorio utiliza pestañas; en teléfono abre cada explicación debajo de su botón.
- `favicon.svg` y `social.png`: favicon y tarjeta social originales.

La entrada `index.html` permite elegir entre dos landings independientes: `empresa.html` y `ventas.html`. Cada página presenta dolores y soluciones propios.

Todos los botones de contacto abren WhatsApp al +57 300 035 7484, con un mensaje específico para el servicio. No hay formularios, backend, analítica ni almacenamiento de datos. Las cifras de trayectoria son declaraciones profesionales de Samuel; no son garantías de resultados.

## Revisión antes de publicar cambios

Verificar escritorio y móvil, navegación de teclado, apertura de las seis áreas, enlaces de WhatsApp, precios y condiciones comerciales. Actualizar canonical y metadatos sociales si cambia la URL pública.

## Identidad visual

Diseño blanco y azul, retrato original de Samuel y tipografía Manrope alojada localmente. Licencia en `fonts/OFL-Manrope.txt`. La presentación personal y las cifras de trayectoria aparecen antes de elegir el servicio.
