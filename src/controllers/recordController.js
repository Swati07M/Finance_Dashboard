// src/controllers/recordController.js

import Record from "../models/Record.js";

// CREATE
export const createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ + FILTER + PAGINATION
export const getRecords = async (req, res) => {
  try {
    const { type, category, page = 1, limit = 10 } = req.query;

    let filter = {};
    if (type) filter.type = type;
    if (category) filter.category = category;

    const records = await Record.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ date: -1 });

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
export const updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};