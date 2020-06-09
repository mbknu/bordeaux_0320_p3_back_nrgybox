const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/:id/forecast/:id", (req, res) => {
    const idParams = req.params.id;

    connection.query("SELECT * FROM program_forecast_lighting WHERE id = ?", idParams,  (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(200);
      }
    });
});

module.exports = router;