# 🛍️ Web App Clima – React. ts  🙌

[![React TypeScript](https://img.shields.io/badge/React_TS-3178C6?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)


WeatherApp es una aplicación web que permite consultar el clima actual de diferentes ciudades del mundo. Utiliza la API de OpenWeatherMap para obtener datos actualizado y presenta una interfaz amigable y responsiva. La aplicación está construida con React y TypeScript, lo que garantiza un desarrollo escalable y mantenible.

![HU3withoutlogo](https://i.postimg.cc/65DJD8kZ/Captura-de-pantalla-259.png)


## Tecnologías utilizadas. 🚀
### Frontend – 🖼️ Next.ts 15 (React 19)

****
|||
|:---:|:---:|
| <img style="width: 100px; min-width: 100px" src="https://reactjs.org/favicon.ico">| React 19 – Última versión con mejoras en rendimiento. |
| <img style="width: 100px; min-width: 100px" src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3lhp6q90ax8ejbpwrdrk.png">| React 19 – Última versión con mejoras en rendimiento. |
| <img style="width: 100px; min-width: 100px" src="https://miro.medium.com/v2/resize:fit:1050/0*yTnXWjd6Tkdr17HN.png">| Zod – Validaciones del lado del cliente con tipado estático. |

### Alojamiento – ☁️

****
|||
|:---:|:---:|
| <img style="width: 100px; min-width: 100px" src="https://i.pinimg.com/736x/8b/7c/ac/8b7cac4d85303b79158dd3cf2d9b63c8.jpg">| Render – plataforma en la nube que te permite desplegar web, APIs, bases de datos etc. |
| <img style="width: 100px; min-width: 100px" src="https://images.ctfassets.net/crb83veve8xb/2VaNf5PhpBlvKAUKYfmefe/5fdaf99f05704485b02e14e8d4addefb/vercel.webp">| Vercel es una plataforma de despliegue en la nube enfocada principalmente en frameworks frontend. |

### Instalación Local 🚀

#### Requisitos Previos

-	Node.js 18+
-	PostgreSQL 15+
-	PNPM 8+

#### Clonar el repositorio.

	git clone https://github.com/gaboducuara/store.git
    cd store
	cd backend

## Backend 📦
#### Instalar dependencias (Monorepo).

	pnpm install

### Configurar variables de entorno.

	DATABASE_HOST=
    DATABASE_PORT=5432
	DATABASE_USER=
    DATABASE_PASS=
	DATABASE_NAME=
    DATABASE_SSL_MODE=require
	CLOUDINARY_NAME=
    CLOUDINARY_API_KEY=
	CLOUDINARY_API_SECRET=

### Comandos útiles 🧪

##### Ejecuta el script para poblar datos iniciales.

	pnpm run seed

##### Ejecuta el backend en modo desarrollo observador.

    pnpm run start:dev

##### Ejecuta el backend en modo desarrollo.

    pnpm run start

#### Compila para producción.

	pnpm run build

## Frontend 📦

    cd store
	cd frontend

#### Instalar dependencias.

	pnpm install

#### Configurar variables de entorno.

    API_URL=http://localhost:3001
    NEXT_PUBLIC_API_URL=http://localhost:3001
    NEXT_PUBLIC_DOMAIN=http://localhost:3000

#### Ejecuta el frontend en modo desarrollo.

    pnpm run dev

#### Compila para producción.

    pnpm run build

## Endpoints Clave (API) 📚

Documentacion API.

## Deploy ☁️

- Backend: Puedes desplegarlo en plataformas como Render, Railway o Heroku.
- Frontend: Desplegado en Vercel.
- Demo en Vivo - [🛍️ Web App Store](https://store-chi-five.vercel.app/ "Store") 🌐

Agradecimientos
Gracias por visitar este proyecto 🙌 
Si llegaste hasta aquí, ¡te lo agradezco mucho!
Con gusto recibo feedback o sugerencias 💬