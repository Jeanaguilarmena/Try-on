import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes.js';
import tryOnRoutes from './routes/tryon.routes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/tryon", tryOnRoutes);
app.use("/public", express.static("public"));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})