const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexFile = require("../knexfile");
const enviornment = process.env.NODE_ENV || "development";
const db = knex(knexFile[enviornment]);
require("dotenv").config();

router.get("/", (req, res) => {
  console.log(process.env.NODE_ENV);
  db("cars")
    .then((cars) => res.status(200).json(cars))
    .catch((err) => res.status(500).json({ error: err }));
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then((car) => res.status(200).json(car))
    .catch((err) => res.status(500).nojson({ error: err }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .first()
    .then((car) => res.status(200).json(car))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .update(req.body)
    .then((updated) => res.status(201).json(updated))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .del()
    .then((deleted) =>
      deleted > 0
        ? res.status(204).json({
            message: `successfully deleted ${deleted} items. Car with id of ${id} deleted.`,
          })
        : res
            .status(404)
            .json({ error: `unable to delete user with id of ${id} ` })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
