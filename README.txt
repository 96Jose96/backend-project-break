Tienda de ropa en línea que incluye un catálogo de productos y un panel de administración para gestionar productos. Utiliza una base de datos MongoDB alojada en Atlas y ofrece una API para la administración de productos, tanto para el catálogo público como para el dashboard del administrador.

Requisitos previos:

Tener instalados los siguientes elementos:

- Node.js
- MongoDB Atlas (para conectar la base de datos)

Tecnologías usadas:

- Node.js: Entorno de ejecución de JavaScript del lado del servidor.
- Express.js: Framework para la creación de la API y las rutas.
- MongoDB/Mongoose: Base de datos utilizada para almacenar los productos.
- Multer: Middleware para la gestión de archivos (subida de imágenes de productos).
- Cors: Middleware para habilitar el CORS.
- Method-override: permite enviar peticiones PUT y DELETE desde un formulario HTML a través de un POST.
- dotenv: Para cargar variables de entorno desde un archivo `.env`.

Instalación

1. Clonar el repositorio:
    git clone https://github.com/tuusuario/backend-project-break.git

2. Instalar las dependencias:
    npm install

3. Crear un archivo .env en el directorio raíz y añadir las siguientes variables de entorno:
    PORT = puerto que prefieras
    MONGO_URI = <tu_url_de_mongo_atlas>

4. Ejecutar el servidor:
    npm start

Endpoints

Rutas Públicas

- GET /products: Devuelve una lista de productos disponibles.
  
- GET /products/:productId: Devuelve información detallada de un producto específico por su ID.

Rutas del Dashboard (Administrador)

- POST /dashboard: Crea un nuevo producto en el catálogo.

- GET /dashboard: Devuelve una lista de todos los productos disponibles en el dashboard para su gestión.

- GET /dashboard/new: Muestra un formulario para crear un nuevo producto.

- GET /dashboard/:productId/edit: Devuelve el formulario para modificar un producto específico.

- GET /dashboard/:productId: Devuelve la información de un producto específico por su ID.

- POST /dashboard/:productId: Actualiza un producto específico en base a su ID.

- DELETE /dashboard/:productId: Elimina un producto específico.

- PUT /dashboard/:productId: Actualiza un producto específico en base a su ID.



