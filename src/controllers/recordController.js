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


// READ + FILTER + PAGINATION + DATE FILTER ✅
export const getRecords = async (req, res) => {
  try {
    const {
      type,
      category,
      startDate,
      endDate,
      page = 1,
      limit = 10
    } = req.query;

    let filter = {
      createdBy: req.user.id   // 🔐 important
    };

    // ✅ Type filter
    if (type) filter.type = type;

    // ✅ Category filter
    if (category) filter.category = category;
    // category (case-sensitive)
    if (category) {
    filter.category = { $regex: new RegExp(`^${category}$`, "i") };
    }

    // ✅ DATE FILTER 
    if (startDate || endDate) {
      filter.date = {};

      if (startDate) {
        filter.date.$gte = new Date(startDate);
      }

      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999); 
        filter.date.$lte = end;
      }
    }

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