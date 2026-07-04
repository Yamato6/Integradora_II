import express from "express";

const app = express();

app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({
        message: "Hola desde Express"
    });
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});