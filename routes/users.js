const router = require("express").Router();

let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const category = req.body.category;
  const image = req.body.image;
  const positive = req.body.positive;
  const negative = req.body.negative;
  const total = req.body.total;
  const newUser = new User({
    name,
    description,
    category,
    image,
    positive,
    negative,
    total
  });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        positive: Number(req.body.positive),
        negative: Number(req.body.negative),
        total: Number(req.body.total)
      }
    }
  )
    .then(() => res.status(200).json("User updated!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
