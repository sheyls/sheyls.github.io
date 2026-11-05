# Dónde me ha llevado el doctorado · Where my PhD has taken me

Globo pixel-art con mis estancias, congresos y talleres del doctorado, en español e inglés.
Pixel-art globe of my PhD stays, conferences and workshops, in Spanish and English.

## Añadir un viaje (lo normal)

Todos los viajes están en **`datos/viajes.csv`**, una tabla que se puede editar directamente en GitHub.

**Opción fácil:** abre `nuevo-viaje.html` en tu web (`https://TU-USUARIO.github.io/travel/nuevo-viaje.html`).
Escribes la ciudad, pulsas *buscar coordenadas*, rellenas el resto y te da la línea lista para copiar,
con un enlace que abre el CSV en GitHub para pegarla.

**A mano:** en GitHub abre `datos/viajes.csv`, pulsa el lápiz, añade una línea al final y pulsa *Commit changes*.
En uno o dos minutos aparece en el globo.

### Columnas de `viajes.csv`

| columna | qué va | ejemplo |
|---|---|---|
| `ciudad` | nombre en español | `Turín` |
| `ciudad_en` | nombre en inglés, solo si cambia | `Turin` |
| `pais` / `pais_en` | país en español / inglés | `Italia` / `Italy` |
| `lat`, `lon` | coordenadas (Google Maps: clic derecho en la ciudad) | `45.0703`, `7.6869` |
| `inicio` | fecha: día, mes o año | `2026-05-14`, `2026-05` o `2026` |
| `fin` | vacío = mismo día/mes; `hoy` = sigue en curso; o otra fecha | `2026-09` |
| `pagado_por` | identificador de `datos/ajustes.js` | `harness`, `external`, `self` |
| `motivo` | identificador de `datos/ajustes.js` o texto libre | `congreso`, `taller`, `estancia` |
| `evento` | nombre del congreso (opcional; se muestra en lugar del motivo) | `ISWC 2026` |
| `nota` / `nota_en` | texto de la ficha (opcional) | |
| `tipo` | vacío = viaje; `virtual` = en remoto; `base` = tu sitio fijo | `virtual` |

Si un texto lleva comas, ponlo entre comillas: `"Ontology Engineering Group, UPM"`.
Si una fila tiene un error (por ejemplo sin coordenadas), la página lo avisa arriba y se salta esa fila.

Cómo se muestran las fechas: si pones solo el mes, la ficha dice "dic 2025"; si pones el día exacto,
dice la fecha y cuántos días duró.

## Cambiar textos, colores, base o ciudad natal

Todo eso está en **`datos/ajustes.js`**: título, subtitulo, idioma inicial, tu base (Madrid, con el corazón),
tu ciudad natal (La Habana, con la casita), los colores de quién pagó y los nombres de los motivos.

## Publicar en GitHub Pages

1. Esta carpeta vive dentro del repo `TU-USUARIO.github.io`, en `travel/`.
2. **Settings → Pages → Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Estará en `https://TU-USUARIO.github.io/travel/` (y la portada `https://TU-USUARIO.github.io/` lleva aquí).

## Verlo en tu ordenador

La página lee el CSV, así que no funciona con doble clic sobre `index.html`. Usa un servidor local:

```
python3 -m http.server 8000
```

y entra en http://localhost:8000.

## Créditos

Fronteras: [Natural Earth](https://www.naturalearthdata.com/) (dominio público) vía [world-atlas](https://github.com/topojson/world-atlas).
Librerías: [d3](https://d3js.org/) y [topojson-client](https://github.com/topojson/topojson-client) (ISC).
Tipografías: Pixelify Sans y VT323 (SIL Open Font License), incluidas en `assets/fonts`.
Búsqueda de coordenadas en `nuevo-viaje.html`: [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/) (© colaboradores de OpenStreetMap).
