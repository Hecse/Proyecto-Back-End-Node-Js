import jwt from "jsonwebtoken";
//import "dotenv/config";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ajusta la ruta relativa 
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const secret_key = process.env.JWT_SECRET_KEY; 
//console.log(secret_key);

// Función para generar un token JWT
export const generateToken = (userData) => {
  const user = { id: userData.id, email: userData.email };
  const expiration = { expiresIn: "1h" };
  return jwt.sign(user, secret_key, expiration);
};