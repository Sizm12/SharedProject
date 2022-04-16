import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

export default class Enviroment {
  constructor() {
    const env = String(process.env.NODE_ENV || 'development').trim();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const path_url = path.resolve(__dirname, `${env}.env`);
    dotenv.config({
      path: path_url,
    });
  }

  get PORT() {
    return Number(process.env.PORT || 3000);
  }
}
