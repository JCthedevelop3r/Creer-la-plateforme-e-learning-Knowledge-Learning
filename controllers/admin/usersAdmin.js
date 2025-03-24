// const usersService = require('../services/usersService');

async function createUser(req, res) {
  try {
    const { name, mail, password } = req.body;

    // const newUser = await usersService.createUser({ name, mail, password });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(
      "Erreur lors de la création d'un utilisateur :",
      error.message
    );

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getAllUsers(req, res) {
  try {
    // const users = await usersService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des utilisateurs :",
      error.message
    );
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const { name, mail, password } = req.body;

    // const updatedUser = await usersService.updateUser({ name, mail, password });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(
      "Erreur lors de la modification d'un utilisateur :",
      error.message
    );

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const { userId } = req.body;

    // const deletedUser = await usersService.deleteUser({ userId });

    res.status(200).json(deletedUser);
  } catch (error) {
    console.error(
      "Erreur lors de la suppression d'un utilisateur :",
      error.message
    );

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
