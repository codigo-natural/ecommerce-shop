// se está importando el plugin de PurgeCSS, que se utiliza 
// para eliminar el CSS no utilizado de los archivos de estilo.
// Se almacena en la variable purgecss.

const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    // tailwindcss: Este plugin se utiliza para aplicar estilos utilizando Tailwind CSS
    require("tailwindcss"),
    // autoprefixer: Este plugin se utiliza para agregar automáticamente los prefijos de 
    // los navegadores a las propiedades CSS.
    require("autoprefixer"),
    /*
      purgecss: Este plugin se utiliza para eliminar el CSS no utilizado 
      de los archivos de estilo. En la configuración se está especificando 
      que se escaneará todos los archivos HTML del proyecto y se utilizará 
      un extractor personalizado para encontrar los selectores CSS utilizados 
      en el proyecto.
    */
    purgecss({
      content: ["./**/*.html"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    /*
      cssnano: Este plugin se utiliza para comprimir el código CSS,
      reducir su tamaño y optimizar el rendimiento. En la configuración
      se está utilizando la opción preset con el valor "default" para
      aplicar una serie de optimizaciones predefinidas.
    */
    require("cssnano")({
      preset: "default",
    }),
  ],
};
