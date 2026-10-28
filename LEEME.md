# Capri (versión iPhone y Chromebook)

App web instalable (PWA) con la misma personalidad, memoria y herramientas que Capri de
escritorio, en 10 idiomas. Funciona en iPhone, Chromebook y cualquier navegador moderno.

## 1. Ponla en internet (una sola vez)

Una app instalable necesita una dirección HTTPS. Sube esta carpeta tal cual a un hosting
estático gratuito, por ejemplo:

- Netlify Drop (arrastras la carpeta a la web de Netlify). Si no creas cuenta, el sitio
  puede caducar: regístrate para conservarlo.
- GitHub Pages o Cloudflare Pages.

El hosting solo guarda estos archivos. Tus mensajes, tu memoria y tu clave no pasan por él.

## 2. Instálala

**iPhone:** abre la dirección en Safari, toca Compartir y luego "Añadir a pantalla de inicio".
Se abrirá como una app, sin barra del navegador.

**Chromebook:** abre la dirección en Chrome y pulsa el icono de instalar en la barra de
direcciones (o menú ⋮ > Guardar y compartir > Instalar Capri). El botón de la esquina
superior derecha abre a Capri en una **ventana flotante** que se queda encima de las demás
apps (usa Document Picture-in-Picture de Chrome).

## 3. Primer uso

    /clave sk-ant-...        conecta la IA (clave de API de Anthropic)
    /ciudad Wolfsburg        para el clima
    /idioma de               cambia el idioma (en, es, zh, hi, ar, fr, pt, ru, de, ja)
    /web on|off              búsqueda web (activada por defecto)
    /modelo claude-opus-5-5  cambia de modelo
    /ayuda                   lista de comandos

Capri responde en el idioma en que le escribas, aunque no esté en esa lista.

## Sobre la clave de API (importante)

- Se guarda **solo en este dispositivo y sin cifrar** (almacenamiento del navegador). No la
  uses en un móvil o Chromebook compartido.
- Crea en la consola de Anthropic una clave **solo para Capri** y ponle un **límite de
  gasto**. Si alguna vez dudas, bórrala allí y crea otra.
- Cada mensaje se factura a tu cuenta. Por defecto usa `claude-sonnet-5-5` (muy capaz). Para
  gastar menos: `/modelo claude-haiku-5-5`; para razonar aún mejor: `/modelo claude-opus-5-5`.
  La búsqueda web tiene su propio coste (`/web off` la apaga).

## Qué puede hacer

- **Responder casi cualquier pregunta:** estudios, matemáticas, código, idiomas, redacción,
  consejos... con explicaciones largas y bien formateadas (listas, negritas, código), que
  aparecen en directo mientras las escribe.
- **Búsqueda web** para lo actual (noticias, precios, resultados), citando las fuentes. Si tu
  cuenta de Anthropic no la tiene activada, Capri lo detecta, la apaga y te avisa.
- Retomar el hilo de la conversación aunque cierres la app.
- Charlar con personalidad propia y recordar cosas sobre ti entre sesiones (`/memoria`).
- Tareas, recordatorios (solo suenan con Capri abierta), clima, cálculos y cambio de tema.
- **Fotos y archivos de texto:** pulsa el clip, por ejemplo para fotografiar una tarea o un
  apunte y pedirle ayuda. Solo se envía la última foto de la conversación.
- Leer las respuestas en voz alta (botón del altavoz o `/voz on`).
- Cambiar su avatar por tu personaje (botón de la imagen).
- Funciona sin conexión para abrirse; para pensar necesita internet.

## Qué NO puede hacer en esta versión

iOS y los navegadores no lo permiten, o necesitan un servidor: flotar sobre otras apps en el
iPhone, ver tu pantalla, tus archivos o el portapapeles, ni conectar calendario o correo.
Eso sigue existiendo solo en la versión de escritorio.

## Privacidad

Todo lo que Capri recuerda (ajustes, memoria, tareas, chat) vive en el navegador de tu
dispositivo. Borrar los datos del sitio lo borra todo. Cada mensaje, con lo que recuerda de
ti y lo que adjuntes, se envía a la API de Anthropic para generar la respuesta.

## Para desarrolladores

- Probar en local: `python3 -m http.server` dentro de la carpeta y abrir `localhost:8000`.
- Si cambias archivos, sube el número de `CACHE` en `sw.js` para que los dispositivos
  descarguen la versión nueva.
- La personalidad está en `personality.md`; los textos, en `i18n.js` y `i18n-pwa.js`.
