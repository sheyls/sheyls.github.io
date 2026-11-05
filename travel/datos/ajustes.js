/* ------------------------------------------------------------------
   AJUSTES / SETTINGS
   Los viajes NO van aquí: están en datos/viajes.csv.
   Aquí solo se cambian los textos, colores, tu base y tu ciudad natal.
   Los textos van en dos idiomas: { es: "...", en: "..." }.
------------------------------------------------------------------- */
window.TRAVEL = {
  // Textos de cabecera
  title:    { es: "Dónde me ha llevado el doctorado", en: "Where my PhD has taken me" },
  // Subtítulo opcional bajo el título (déjalo vacío para no mostrar nada)
  subtitle: "",

  // Dónde vive esto en GitHub (para el enlace "abrir viajes.csv en GitHub" de nuevo-viaje.html).
  // Está en el repo TU-USUARIO.github.io, carpeta "travel". El usuario se detecta solo desde la web.
  github: { user: "", repo: "", folder: "travel" },

  // Idioma con el que se abre la primera vez: "es", "en" o "" (vacío = según el idioma del navegador;
  // los navegadores en español la ven en español y el resto en inglés).
  defaultLang: "",

  // Vista inicial del globo: "world" o "europe"
  defaultView: "world",

  // Tu base: de aquí salen los arcos (lleva el corazón blanco)
  home: { name: "Madrid", lat: 40.4168, lon: -3.7038 },

  // Tu ciudad natal: casita roja; el país se pinta como un corazón de videojuego
  hometown: { name: { es: "La Habana", en: "Havana" }, label: { es: "Cuba, ciudad natal", en: "Cuba, hometown" },
              lat: 23.1136, lon: -82.3666, color: "#f0142f" },

  // A partir de cuántos días una estancia cuenta como "larga"
  longStayDays: 30,

  // Color de las participaciones virtuales (tipo = virtual en el CSV)
  virtualColor: "#3d9bff",

  // Quién pagó. La columna "pagado_por" del CSV usa estos identificadores (harness, external, self).
  // Puedes añadir más: copia una línea y cambia el identificador, el color y los nombres.
  funders: {
    harness:  { color: "#ff8a3d", es: "HARNESS (Marie Skłodowska-Curie)", en: "HARNESS (Marie Skłodowska-Curie)" },
    external: { color: "#b48cff", es: "Entidades externas", en: "External bodies" },
    self:     { color: "#ffc75f", es: "Por mi cuenta",      en: "Self-funded" }
  },

  // Motivos. La columna "motivo" del CSV usa estos identificadores.
  // Si escribes otra cosa en el CSV, se muestra tal cual.
  purposes: {
    base:     { es: "Base del doctorado",        en: "PhD base" },
    congreso: { es: "Congreso",                  en: "Conference" },
    taller:   { es: "Taller de formación",       en: "Training workshop" },
    escuela:  { es: "Escuela de verano",         en: "Summer school" },
    estancia: { es: "Estancia de investigación", en: "Research stay" },
    campo:    { es: "Trabajo de campo",          en: "Fieldwork" }
  }
};
