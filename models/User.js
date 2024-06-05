const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      maxLength: [100, "Name is too large"],
      default: "N/A",
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      default: "123456",
    },
    email: {
      type: String,
      validate: {
        validator: (value) => validator.isEmail(value), // Validate the email format
        message: "Invalid email address",
      },
      default: "demo@demo.com",
    },
    address: {
      type: String,
      default: "N/A",
    },
    role: {
      type: String,
      enum: ["suparAdmin", "admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
