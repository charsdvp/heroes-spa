Si quieren hacer el build de la app para hacer el deploy, si se fijan verán que los assets con las imágenes no se copian automáticamente a la carpeta dist con el build de producción.



Esto es debido a Vite y como estamos creando las URL's de las imágenes en HeroCard.jsx.



Si importamos directamente una imagen con import imgUrl from '/assets/heroes/marvel-spider.jpg', Vite se encargará de gestionarlo y añadirá el archivo al build de producción, pero nosotros estamos creando la URL con const heroImageUrl = `/assets/heroes/${ id }.jpg`;, de ahí que Vite no las copie automáticamente.



La solución sería crear una carpeta llamada public en la raíz del proyecto (al mismo nivel que package.json o index.html) y dentro de esta carpeta mover la carpeta heroes que contiene todas las imágenes.

De esta forma ya añadimos la carpeta heroes al build de producción.



Para acceder a "public" tenemos que usar la ruta raíz /, por lo que ahora modificaremos la URL de heroImageUrl en el archivo HeroCard.jsx quedando: const heroImageUrl = `/heroes/${ id }.jpg`;.



De esta forma ya se copian automáticamente las imágenes, y funciona nuestra app tanto en desarrollo como producción.

**También se debe cambiar en el componente HeroPage para que al ingresar al link de Mas... se pueda ver la imagen.**

Si quieren leer más sobre los assets y cómo manejarlos en Vite: https://vitejs.dev/guide/assets.html.