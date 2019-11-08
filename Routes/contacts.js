const express = require("express");

const {
  getAllContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact
} = require("../controllers/contacts");

const router = express.Router();

router
  .route("/")
  .get(getAllContacts)
  .post(createContact);

router
  .route("/:id")
  .get(getContact)
  .delete(deleteContact)
  .put(updateContact);

module.exports = router;
