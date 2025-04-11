const User = require("../models/User");
const bcrypt = require("bcrypt");

async function createUser({ name, mail, password }) {
  try {
    // Hashing the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      mail,
      password: hashedPassword,
    });

    await newUser.save();

    return newUser;
  } catch (error) {
    throw new Error(
      "Erreur lors de la création de l'utilisateur : " + error.message
    );
  }
}

async function getAllUsers() {
  try {
    const users = await User.find(); // Retrieves all users from the database
    return users;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des utilisateurs : " + error.message
    );
  }
}

async function updateUser(userId, name, mail, password) {
  try {
    // Hashing the password if it's updated
    let hashedPassword = password;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, mail, password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("Utilisateur introuvable");
    }

    return updatedUser;
  } catch (error) {
    throw new Error(
      "Erreur lors de la mise à jour de l'utilisateur : " + error.message
    );
  }
}

async function deleteUser(userId) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      throw new Error("Utilisateur introuvable");
    }

    return deletedUser;
  } catch (error) {
    throw new Error(
      "Erreur lors de la suppression de l'utilisateur : " + error.message
    );
  }
}

module.exports = { createUser, getAllUsers, updateUser, deleteUser };
