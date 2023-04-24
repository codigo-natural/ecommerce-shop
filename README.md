# comando utilizados en el proyecto

**Dependencias**

- `npm init -y`
- `npm install tailwindcss autoprefixer postcss-cli`

**Inicializamos las herramientas instaladas:**

<!-- Genera archivo configuracion vacio de nombre tailwind.config.js -->

- `npx tailwindcss init`
  
# Directivas de Tailwind

Directiva es una instrucción que utiliza tailwind para insertar código en el archivo final de css que genera.

`@tailwind base`
Esto inyecta los estilos base de Tailwind y cualquier estilo base registrado por plugins.

`@tailwind components`
Esto inyecta las clases de componentes de Tailwind y cualquier clase de componente registrado por los plugins.

`@tailwind utilities`
Esto inyecta las clases de utilidad de Tailwind y cualquier clase de utilidad registrada por los plugins.

`@tailwind screens`
Esta directiva sirve para controlar donde Tailwind inyecta las variaciones responsivas de cada utilidad. Si se omite, Tailwind añadirá estas clases al final de tu css, por defecto.


**Recursos externos utilizados:**
- [alpinejs](https://alpinejs.dev/)
- [unsplash](https://unsplash.com/es)
> PurgeCSS : Sirve en Tailwind para quitar el código CSS que no estemos usando.
- [purgecss](https://purgecss.com/plugins/postcss.html)
>  Minifica el código CSS para que pese lo menos posible.
- [nanocss](https://cssnano.co/)