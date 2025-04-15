const usersService = require("../../services/usersService");

async function createUser(req, res) {
  try {
    const { name, mail, password } = req.body;

    const newUser = await usersService.createUser({ name, mail, password });

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
    const users = await usersService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des utilisateurs :",
      error.message
    );
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const user = await usersService.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération d'un utilisateur :",
      error.message
    );
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, mail, password } = req.body;

    const updatedUser = await usersService.updateUser(id, name, mail, password);

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
    const { id } = req.params;

    const deletedUser = await usersService.deleteUser(id);

    res.status(200).json({
      message: "Utilisateur supprimé avec succès !",
      id: deletedUser._id,
    });
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
  getUserById,
  updateUser,
  deleteUser,
};
