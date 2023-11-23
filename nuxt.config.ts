// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  telemetry: false,
  app: {
    head: {
      script: [
        {
          src: "https://widget.cloudinary.com/v2.0/global/all.js",
          type: "text/javascript",
        },
      ],
    },
  },
});
