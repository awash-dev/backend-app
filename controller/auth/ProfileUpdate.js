const UserModel = require("../../model/UserModel");

// User Update Controller
const ProfileUpdate = async (req, res) => {
  const { id } = req.params; // Get the user ID from the request parameters
  const { username, email, password } = req.body; // Destructure the updated fields
  const profileImage = req.file ? req.file.path : null; // Get the image path if a new image is uploaded

  // Create an object to hold the updated fields
  const updateFields = {};
  if (username) updateFields.username = username;
  if (email) updateFields.email = email;
  if (password) updateFields.password = password;
  if (profileImage) updateFields.profileImage = profileImage;

  try {
    // Find the user by ID and update it
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      updateFields,
      { new: true, runValidators: true } // Return the updated document and run validation
    );

    // Check if the user was found and updated
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the updated user
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { ProfileUpdate };