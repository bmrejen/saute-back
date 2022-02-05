const express = require("express")
const {
  getSautes,
  createSaute,
  getSauteById,
  deleteSaute,
  modifySaute,
  likeSaute
} = require("../controllers/sautes")
const { authenticateUser } = require("../middleware/auth")
const { upload } = require("../middleware/multer")
const sautesRouter = express.Router()
const bodyParser = require("body-parser")

sautesRouter.use(bodyParser.json())
sautesRouter.use(authenticateUser)

sautesRouter.get("/", getSautes)
sautesRouter.post("/", upload.single("image"), createSaute)
sautesRouter.get("/:id", getSauteById)
sautesRouter.delete("/:id", deleteSaute)
sautesRouter.put("/:id", upload.single("image"), modifySaute)
sautesRouter.post("/:id/like", likeSaute)

module.exports = { sautesRouter }
