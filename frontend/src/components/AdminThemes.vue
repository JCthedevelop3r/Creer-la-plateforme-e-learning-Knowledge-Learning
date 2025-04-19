<template>
  <div class="admin-themes">
    <!-- CREATE -->
    <div class="admin__form-wrapper">
      <div class="admin__title-container">
        <h2 class="admin__form-title">Créer un thème</h2>
      </div>
      <form @submit.prevent="createTheme" class="admin__create-theme">
        <div class="admin__input-container">
          <label class="admin__label" for="createThemeName">Nom :</label>
          <input id="createThemeName" v-model="name" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="createThemeImage">Image :</label>
          <input id="createThemeImage" v-model="image" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="createThemeDescription">Description :</label>
          <input id="createThemeDescription" v-model="description" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label">Cursus lié(s) :</label>
          <div v-for="course in courses" :key="course._id">
            <label>
              <input type="checkbox" name="courses[]" :value="course._id" v-model="selectedCourses" />
              {{ course.name }}
            </label>
          </div>
        </div>

        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>
    </div>

    <!-- READ -->
    <div class="admin__form-wrapper">
      <form @submit.prevent="fetchThemeById" class="admin__get-theme-by-id">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Lire les données d'un thème</h2>
        </div>
        <div class="admin__input-container">
          <label for="getThemeById" class="admin__label">Entrez l'identifiant :</label>
          <input v-model="themeId" type="text" class="admin__text-input" id="getThemeById" required />
        </div>
        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>

      <div v-if="themeData" class="admin__theme-data">
        <table class="admin__table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Image</th>
              <th>Cursus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ themeData.name }}</td>
              <td>{{ themeData.description }}</td>
              <td>{{ themeData.image }}</td>
              <td>
                <ul>
                  <li v-for="course in themeData.course" :key="course._id">{{ course.name }}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- UPDATE -->
    <div class="admin__form-wrapper">
      <form @submit.prevent="updateTheme" class="admin__update-theme">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Mettre à jour un thème</h2>
        </div>
        <div class="admin__input-container">
          <label class="admin__label" for="updateThemeId">ID du thème :</label>
          <input id="updateThemeId" v-model="updateId" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateThemeName">Nom :</label>
          <input id="updateThemeName" v-model="updateName" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateThemeImage">Image :</label>
          <input id="updateThemeImage" v-model="updateImage" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateThemeDescription">Description :</label>
          <input id="updateThemeDescription" v-model="updateDescription" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label">Cursus lié(s) :</label>
          <div v-for="course in courses" :key="course._id">
            <label>
              <input type="checkbox" :value="course._id" v-model="updateCourses" />
              {{ course.name }}
            </label>
          </div>
        </div>

        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>
    </div>

    <!-- DELETE -->
    <div class="admin__form-wrapper">
      <form @submit.prevent="deleteTheme" class="admin__delete-theme">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Supprimer un thème</h2>
        </div>
        <div class="admin__input-container">
          <label class="admin__label" for="deleteThemeId">Entrez l'identifiant :</label>
          <input v-model="deleteId" type="text" class="admin__text-input" id="deleteThemeId" required />
        </div>
        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// CREATE
const name = ref('')
const image = ref('')
const description = ref('')
const selectedCourses = ref([])

const createTheme = async () => {
  try {
    const response = await axios.post('http://localhost:3000/admin/themes/create-theme', {
      name: name.value,
      image: image.value,
      description: description.value,
      courses: selectedCourses.value
    })
    console.log('Thème créé :', response.data)
    name.value = image.value = description.value = ''
    selectedCourses.value = []
  } catch (error) {
    console.error('Erreur création :', error)
  }
}

// READ
const themeId = ref('')
const themeData = ref(null)

const fetchThemeById = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/admin/themes/get-theme-by-id/${themeId.value}`)
    themeData.value = response.data
  } catch (error) {
    console.error('Erreur récupération :', error)
    themeData.value = null
  }
}

// UPDATE
const updateId = ref('')
const updateName = ref('')
const updateImage = ref('')
const updateDescription = ref('')
const updateCourses = ref([])

const updateTheme = async () => {
  try {
    const response = await axios.put(`http://localhost:3000/admin/themes/update-theme/${updateId.value}`, {
      name: updateName.value,
      image: updateImage.value,
      description: updateDescription.value,
      courses: updateCourses.value
    })
    console.log('Thème mis à jour :', response.data)
  } catch (error) {
    console.error('Erreur update :', error)
  }
}

// DELETE
const deleteId = ref('')

const deleteTheme = async () => {
  try {
    const response = await axios.delete(`http://localhost:3000/admin/themes/delete-theme/${deleteId.value}`)
    console.log('Thème supprimé :', response.data)
  } catch (error) {
    console.error('Erreur suppression :', error)
  }
}

// COURSES
const courses = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin/courses/get-all-courses')
    courses.value = response.data
  } catch (error) {
    console.error('Erreur chargement cursus :', error)
  }
})
</script>
