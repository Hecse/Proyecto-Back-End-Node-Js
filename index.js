import express from "express";
import cors from "cors";
import productRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import bodyParser from "body-parser";
import { authentication } from "./src/middlewares/authentication.js";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: ["http://localhost:3000", "https://otrodominio.com"], // Dominios permitidos
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
  credentials: true, // Permitir cookies o credenciales
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/auth", authRouter)
app.use(authentication)

// Middleware de aplicación para ver el método y la url
app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next(); // next pasa el control al siguiente middleware o ruta
});

app.use("/api", productRouter)

// Middleware para manejar errores 404
app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado o ruta inválida");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});