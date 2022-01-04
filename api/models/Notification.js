const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
    },
    postUser: {
      type: String,
    },
    isRead: {
      type: Boolean,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
