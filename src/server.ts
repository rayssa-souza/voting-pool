import app from "./app";
import dotenv from "dotenv";
import { sequelize } from "./config/db";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been estabalished successfully");
  } catch (error: unknown) {
    console.log({ message: error });
  }
});
