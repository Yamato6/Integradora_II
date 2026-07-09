import pool from "../Config/db.js";

export const getPlcData = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM plc_data ORDER BY timestamp DESC"
        );

        res.status(200).json(rows);
        } catch (error) {
            console.error("Error al obtener los datos del PLC:", error);

            res.status(500).json({
                message: "Error al obtener los datos del PLC",
                error: error.message
            });
        }
};