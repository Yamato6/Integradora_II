import express from "express";
import dotenv from "dotenv";
import plcRoutes from "./Routes/plcRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/plc", plcRoutes);

app.get("/api/test", (req, res) => {
    res.json({
        message: "Hola desde Express"
    });
});

app.get("/api/plc", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM plac_data");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Error al consultar la base de datos" });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});