<template>
  <div class="admin-users">
    <!-- CREATE -->
    <div class="admin__form-wrapper">
      <div class="admin__title-container">
        <h2 class="admin__form-title">Créer un utilisateur</h2>
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

const createUser = async () => {
  try {
    const response = await axios.post('http://localhost:3000/admin/users/create-user', {
      name: name.value,
      mail: mail.value,
      password: password.value
    })
    name.value = ""
    mail.value = ""
    password.value = ""
  } catch (error) {
    console.error("Erreur création :", error)
  }
}

// READ
const userId = ref("")
const userData = ref(null)

const fetchUserById = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/admin/users/get-user-by-id/${userId.value}`)
    userData.value = response.data
    userId.value = ""
  } catch (error) {
    console.error("Erreur récupération :", error)
    userData.value = null
  }
}

// UPDATE
const updateId = ref("")
const updateName = ref("")
const updateMail = ref("")
const updatePassword = ref("")

const updateUser = async () => {
  try {
    const response = await axios.put(`http://localhost:3000/admin/users/update-user/${updateId.value}`, {
      name: updateName.value,
      mail: updateMail.value,
      password: updatePassword.value
    })
    updateId.value = updateName.value = updateMail.value = updatePassword.value = ""
  } catch (error) {
    console.error("Erreur update :", error)
  }
}

// DELETE
const deleteId = ref("")

const deleteUser = async () => {
  try {
    const response = await axios.delete(`http://localhost:3000/admin/users/delete-user/${deleteId.value}`)
    deleteId.value = ""
  } catch (error) {
    console.error("Erreur suppression :", error)
  }
}
</script>
