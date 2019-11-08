const Contact = require("../modals/Contact");

exports.getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      results: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getContact = async (req, res, next) => {
  try {
    const contacts = await Contact.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: contacts
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
exports.createContact = async (req, res, next) => {
  try {
    const contacts = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      data: contacts
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
exports.updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!contact) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
