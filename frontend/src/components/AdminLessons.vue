<template>
  <div class="admin-lessons">
    <!-- CREATE -->
    <div class="admin__form-wrapper">
      <div class="admin__title-container">
        <h2 class="admin__form-title">Créer une leçon</h2>
      </div>

      <div v-if="createSuccessMessage" class="admin__message success">{{ createSuccessMessage }}</div>
      <div v-if="createErrorMessage" class="admin__message error">{{ createErrorMessage }}</div>

      <form @submit.prevent="createLesson" class="admin__create-lesson">
        <div class="admin__input-container">
          <label class="admin__label" for="lessonTitle">Titre :</label>
          <input id="lessonTitle" v-model="title" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="lessonDescription">Description :</label>
          <textarea id="lessonDescription" v-model="description" type="text" class="admin__text-input" required></textarea>
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="lessonTextContent">Contenu textuel :</label>
          <textarea id="lessonTextContent" v-model="textContent" class="admin__text-input" required></textarea>
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="lessonVideoUrl">URL vidéo :</label>
          <input id="lessonVideoUrl" v-model="videoUrl" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="lessonPrice">Prix :</label>
          <input id="lessonPrice" v-model="price" type="number" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="lessonImage">Image :</label>
          <input id="lessonImage" v-model="image" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
            <label class="admin__label">Cursus lié :</label>
            <div v-for="course in courses" :key="course._id">
                <label>
                    <input type="radio" :value="course._id" v-model="selectedCourse" required />
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
      <form @submit.prevent="fetchLessonById" class="admin__get-lesson-by-id">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Lire les données d'une leçon</h2>
        </div>

        <div v-if="readSuccessMessage" class="admin__message success">{{ readSuccessMessage }}</div>
        <div v-if="readErrorMessage" class="admin__message error">{{ readErrorMessage }}</div>

        <div class="admin__input-container">
          <label class="admin__label" for="lessonId">Entrez l'identifiant :</label>
          <input id="lessonId" v-model="lessonId" type="text" class="admin__text-input" required />
        </div>
        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>

      <div v-if="lessonData" class="admin__lesson-data">
        <table class="admin__table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Vidéo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ lessonData.title }}</td>
              <td>{{ lessonData.description }}</td>
              <td>{{ lessonData.price }}</td>
              <td><a :href="lessonData.videoUrl" target="_blank">Voir la vidéo</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- UPDATE -->
    <div class="admin__form-wrapper">
      <form @submit.prevent="updateLesson" class="admin__update-lesson">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Mettre à jour une leçon</h2>
        </div>

        <div v-if="updateSuccessMessage" class="admin__message success">{{ updateSuccessMessage }}</div>
        <div v-if="updateErrorMessage" class="admin__message error">{{ updateErrorMessage }}</div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonId">ID :</label>
          <input id="updateLessonId" v-model="updateId" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonTitle">Titre :</label>
          <input id="updateLessonTitle" v-model="updateTitle" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonDescription">Description :</label>
          <textarea id="updateLessonDescription" v-model="updateDescription" type="text" class="admin__text-input" required></textarea>
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonTextContent">Contenu textuel :</label>
          <textarea id="updateLessonTextContent" v-model="updateTextContent" class="admin__text-input" required></textarea>
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonVideoUrl">URL vidéo :</label>
          <input id="updateLessonVideoUrl" v-model="updateVideoUrl" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonPrice">Prix :</label>
          <input id="updateLessonPrice" v-model="updatePrice" type="number" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonImage">Image :</label>
          <input id="updateLessonImage" v-model="updateImage" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
            <label class="admin__label">Cursus lié :</label>
            <div v-for="course in courses" :key="course._id">
                <label>
                    <input type="radio" :value="course._id" v-model="updateCourse" required />
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
      <form @submit.prevent="deleteLesson" class="admin__delete-lesson">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Supprimer une leçon</h2>
        </div>

        <div v-if="deleteSuccessMessage" class="admin__message success">{{ deleteSuccessMessage }}</div>
        <div v-if="deleteErrorMessage" class="admin__message error">{{ deleteErrorMessage }}</div>

        <div class="admin__input-container">
          <label class="admin__label" for="deleteLessonId">ID :</label>
          <input id="deleteLessonId" v-model="deleteId" type="text" class="admin__text-input" required />
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

// MESSAGES
const createSuccessMessage = ref('')
const createErrorMessage = ref('')
const readSuccessMessage = ref('')
const readErrorMessage = ref('')
const updateSuccessMessage = ref('')
const updateErrorMessage = ref('')
const deleteSuccessMessage = ref('')
const deleteErrorMessage = ref('')

// CREATE
const title = ref('')
const description = ref('')
const textContent = ref('')
const videoUrl = ref('')
const price = ref('')
const image = ref('')
const selectedCourse = ref("")

const createLesson = async () => {
  try {
    const res = await axios.post('http://localhost:3000/admin/lessons/create-lesson', {
      title: title.value,
      description: description.value,
      textContent: textContent.value,
      videoUrl: videoUrl.value,
      price: price.value,
      image: image.value,
      course: selectedCourse.value
    })
    createSuccessMessage.value = "Leçon créée avec succès !"
    createErrorMessage.value = ""
    title.value = description.value = textContent.value = videoUrl.value = image.value = ''
    price.value = 0
    selectedCourse.value = ""
  } catch (error) {
    console.error('Erreur création leçon :', error)
    createSuccessMessage.value = ""
    createErrorMessage.value = "Une erreur est survenue lors de la création de la leçon."
  }
}

// READ
const lessonId = ref('')
const lessonData = ref(null)

const fetchLessonById = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/admin/lessons/get-lesson-by-id/${lessonId.value}`)
    lessonData.value = res.data
    readSuccessMessage.value = "Leçon récupérée avec succès !"
    readErrorMessage.value = ""
    lessonId.value = ""
  } catch (error) {
    console.error('Erreur récupération leçon :', error)
    lessonData.value = null
    readSuccessMessage.value = ""
    readErrorMessage.value = "Impossible de récupérer la leçon. Vérifiez l'identifiant."
  }
}

// UPDATE
const updateId = ref('')
const updateTitle = ref('')
const updateDescription = ref('')
const updateTextContent = ref('')
const updateVideoUrl = ref('')
const updatePrice = ref('')
const updateImage = ref('')
const updateCourse = ref("")

const updateLesson = async () => {
  try {
    const res = await axios.put(`http://localhost:3000/admin/lessons/update-lesson/${updateId.value}`, {
      title: updateTitle.value,
      description: updateDescription.value,
      textContent: updateTextContent.value,
      videoUrl: updateVideoUrl.value,
      price: updatePrice.value,
      image: updateImage.value,
      course: updateCourse.value
    })
    updateSuccessMessage.value = "Leçon mise à jour avec succès !"
    updateErrorMessage.value = ""
    updateId.value = updateTitle.value = updateDescription.value = updateTextContent.value = updateVideoUrl.value = updateImage.value = ''
    updatePrice.value = 0
    updateCourse.value = ""
  } catch (error) {
    console.error('Erreur update leçon :', error)
    updateSuccessMessage.value = ""
    updateErrorMessage.value = "Une erreur est survenue lors de la mise à jour de la leçon."
  }
}

// DELETE
const deleteId = ref('')

const deleteLesson = async () => {
  try {
    const res = await axios.delete(`http://localhost:3000/admin/lessons/delete-lesson/${deleteId.value}`)
    deleteSuccessMessage.value = "Leçon supprimée avec succès !"
    deleteErrorMessage.value = ""
    deleteId.value = ""
  } catch (error) {
    console.error('Erreur suppression leçon :', error)
    updateSuccessMessage.value = ""
    updateErrorMessage.value = "Une erreur est survenue lors de la mise à jour de la leçon."
  }
}

// COURSES

const courses = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin/courses/get-all-courses')
    courses.value = response.data
  } catch (error) {
    console.error('Erreur lors du chargement du cursus :', error)
  }
})
</script>

<style scoped>
.success {
  color: green;
}
.error {
  color: red;
}
</style>