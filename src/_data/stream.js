require("dotenv").config();

module.exports = {
  hostName: "Chris Enns",
  hostTwitter: "iChris",
  twitchUsername: "gsfm",
  // Optional - see README
  twitchOauth: process.env.OAUTH || "",
  title: "Let's Do Some Editing",
  chatCommands: ["dev", "yay"],
  guestName: "",
  guestTwitter: "",
};
