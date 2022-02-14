# ViteJS + TailwindCSS + AlpineJS

This is the *lightweight* framework of my choosing. Since I don't build advanced web apps this stack is sufficient for my needs.

## How to install?

### Creating the project

`npm init vite my-project`

Select the `vanilla` framework
Select the `vanilla` variant

`cd my-project`

### Installing TailwindCSS

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

### Update the .css file

Edit the `style.css` file by removing everything and leaving just this:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Edit the PostCSS Config file

Edit the `postcss.config.js` file by removing everything and leaving just this:

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```


### Edit the Tailwind Config File

Edit the `tailwind.config.js` file by removing everything and leving just this:

```
module.exports = {
    mode: "jit", // enable tailwind just in time
    content: ["./index.html"],
    theme: {
        extend: {

        },
    },
    plugins: [],
};
```


### Activating TailwindCSS

In the `index.html` file add this line to the `<head>` element:

`<link rel="stylesheet" href="./style.css">`
 
### Installing AlpineJS

`npm install alpinejs`

Now import Alpine into your `main.js` file and initialize it like so:

```
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()
```

### Run the Dev server

`npm run dev`



## Reference

https://tailwindcss.com/docs/installation
https://alpinejs.dev/essentials/installation
https://blog.safesuk.dev/articles/tailwind-vite-vanila
