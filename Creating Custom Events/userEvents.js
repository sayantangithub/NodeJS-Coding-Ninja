const EventEmitter = require("events");

class UserEvents extends EventEmitter {
  createPost(content) {
    console.log("Post is created");
    this.emit("postCreated");
  }
}
module.exports = UserEvents;
