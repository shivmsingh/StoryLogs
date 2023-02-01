const fs = require("fs-extra"); // Importing the fs-extra module

// Try block to copy the config.env.example file
try {
  // Copying the config.env.example file to config.env
  fs.copySync("./config/config.env.example", "./config/config.env");
  // Logging success message if file is copied successfully
  console.log("Environment file created successfully.");
} catch (err) {
  // Logging error message if an error occurs while copying the file
  console.error(err);
}
