const mongoose = require("mongoose");

const File = new mongoose.Schema(
  {
    //pet: { type: Schema.Types.ObjectId, ref: "Pet", require: true },
    //pet_id: { type: mongoose.Schema.Types.ObjectId, ref: "Pet" },
    title: { type: String, require: true },
    path: { type: String, require: true }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

File.virtual("url").get(function() {
  const url = process.env.URL || "http://10.0.0.5:3333";
  return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);
