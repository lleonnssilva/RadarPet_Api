const mongoose = require("mongoose");

const Pet = new mongoose.Schema(
  {
    name: { type: String, require: true },
    type: { type: String, require: true },
    icon: { type: String, require: true },
    contactName: { type: String, require: true },
    phone: { type: String, require: true },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
    description: { type: String, require: true },
    missedDate: { type: Date, require: true },
    coordinate: {
      latitude: { type: String, require: true },
      longitude: { type: String, require: true }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", Pet);
