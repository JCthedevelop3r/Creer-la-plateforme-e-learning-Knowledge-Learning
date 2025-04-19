<template>
  <div class="admin-users">
    <!-- CREATE -->
    <div class="admin__form-wrapper">
      <div class="admin__title-container">
        <h2 class="admin__form-title">Créer un utilisateur</h2>
      </div>

      <div v-if="successMessage" class="admin__message success">
        {{ successMessage }}
      </div>

      <div v-if="errorMessage" class="admin__message error">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="createUser" class="admin__create-user">
        <div class="admin__input-container">
          <label class="admin__label" for="name">Nom :</label>
          <input id="name" v-model="name" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="mail">Email :</label>
          <input id="mail" v-model="mail" type="email" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="password">Mot de passe :</label>
          <input id="password" v-model="password" type="password" class="admin__text-input" required />
        </div>

        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>
    </div>

    <!-- READ -->
    <div class="admin__form-wrapper">
      <form @submit.prevent="fetchUserById" class="admin__get-user-by-id">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Lire les données d'un utilisateur</h2>
        </div>

        <div v-if="readSuccessMessage" class="admin__message success">{{ readSuccessMessage }}</div>
        <div v-if="readErrorMessage" class="admin__message error">{{ readErrorMessage }}</div>

        <div class="admin__input-container">
          <label for="getUserById" class="admin__label">Entrez l'identifiant :</label>
          <input v-model="userId" type="text" class="admin__text-input" id="getUserById" required />
        </div>
        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>

      <div v-if="userData" class="admin__user-data">
        <table class="admin__table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Achats</th>
              <th>Certifications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ userData.name }}</td>
              <td>{{ userData.mail }}</td>
              <td>{{ userData.purchases?.join(', ') }}</td>
              <td>{{ userData.certifications?.join(', ') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- UPDATE -->
    <div class="admin__form-wrapper">
      <form @submit.prevent="updateUser" class="admin__update-user">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Mettre à jour un utilisateur</h2>
        </div>

        <div v-if="updateSuccessMessage" class="admin__message success">{{ updateSuccessMessage }}</div>
        <div v-if="updateErrorMessage" class="admin__message error">{{ updateErrorMessage }}</div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateUserId">Identifiant :</label>
          <input id="updateUserId" v-model="updateId" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateName">Nom :</label>
          <input id="updateName" v-model="updateName" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateMail">Email :</label>
          <input id="updateMail" v-model="updateMail" type="email" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updatePassword">Mot de passe :</label>
          <input id="updatePassword" v-model="updatePassword" type="password" class="admin__text-input" />
        </div>

        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>
    </div>

    <!-- DELETE -->
    <div class="admin__form-wrapper">
      <form @submit.prevent="deleteUser" class="admin__delete-user">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Supprimer un utilisateur</h2>
        </div>

        <div v-if="deleteSuccessMessage" class="admin__message success">{{ deleteSuccessMessage }}</div>
        <div v-if="deleteErrorMessage" class="admin__message error">{{ deleteErrorMessage }}</div>

        <div class="admin__input-container">
          <label class="admin__label" for="deleteUserId">Identifiant :</label>
          <input v-model="deleteId" type="text" class="admin__text-input" id="deleteUserId" required />
        </div>
        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// CREATE
const name = ref("")
const mail = ref("")
const password = ref("")

const successMessage = ref("")
const errorMessage = ref("")

const createUser = async () => {
  try {
    const response = await axios.post('http://localhost:3000/admin/users/create-user', {
      name: name.value,
      mail: mail.value,
      password: password.value
    })

    successMessage.value = "Utilisateur créé avec succès !"
    errorMessage.value = ""

    name.value = ""
    mail.value = ""
    password.value = ""
  } catch (error) {
    console.error("Erreur création :", error)
    successMessage.value = ""
    errorMessage.value = "Erreur lors de la création de l'utilisateur."
  }
}

// READ
const userId = ref("")
const userData = ref(null)

const readSuccessMessage = ref("")
const readErrorMessage = ref("")

const fetchUserById = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/admin/users/get-user-by-id/${userId.value}`)
    userData.value = response.data
    readSuccessMessage.value = "Utilisateur récupéré avec succès !"
    readErrorMessage.value = ""
    userId.value = ""
  } catch (error) {
    console.error("Erreur récupération :", error)
    userData.value = null
    readSuccessMessage.value = ""
    readErrorMessage.value = "Utilisateur introuvable ou erreur serveur."
  }
}

// UPDATE
const updateId = ref("")
const updateName = ref("")
const updateMail = ref("")
const updatePassword = ref("")

const updateSuccessMessage = ref("")
const updateErrorMessage = ref("")

const updateUser = async () => {
  try {
    const response = await axios.put(`http://localhost:3000/admin/users/update-user/${updateId.value}`, {
      name: updateName.value,
      mail: updateMail.value,
      password: updatePassword.value
    })

    updateSuccessMessage.value = "Utilisateur mis à jour avec succès !"
    updateErrorMessage.value = ""

    updateId.value = updateName.value = updateMail.value = updatePassword.value = ""
  } catch (error) {
    console.error("Erreur update :", error)
    updateSuccessMessage.value = ""
    updateErrorMessage.value = "Erreur lors de la mise à jour de l'utilisateur."
  }
}

// DELETE
const deleteId = ref("")

const deleteSuccessMessage = ref("")
const deleteErrorMessage = ref("")

const deleteUser = async () => {
  try {
    const response = await axios.delete(`http://localhost:3000/admin/users/delete-user/${deleteId.value}`)

    deleteSuccessMessage.value = "Utilisateur supprimé avec succès !"
    deleteErrorMessage.value = ""

    deleteId.value = ""
  } catch (error) {
    console.error("Erreur suppression :", error)
    deleteSuccessMessage.value = ""
    deleteErrorMessage.value = "Erreur lors de la suppression de l'utilisateur."
  }
}
</script>

<style scoped>
.success {
  color: green;
}

.error {
  color: red;
}
</style>