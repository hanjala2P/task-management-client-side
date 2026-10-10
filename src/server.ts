import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import prisma from "./utils/prisma.js"; // আপনার প্রিজমা ইনস্ট্যান্সের সঠিক পাথ দিন

const port = process.env.PORT || 5000;

async function bootstrap() {
  try {
    
    await prisma.$connect();
    console.log("Database connected successfully! 🚀");

    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

bootstrap();