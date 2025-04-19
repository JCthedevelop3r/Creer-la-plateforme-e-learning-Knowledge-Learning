<template>
  <div class="admin-lessons">
    <!-- CREATE -->
    <div class="admin__form-wrapper">
      <div class="admin__title-container">
        <h2 class="admin__form-title">Créer une leçon</h2>
      </div>
      <form @submit.prevent="createLesson" class="admin__create-lesson">
        <div class="admin__input-container">
          <label class="admin__label" for="lessonTitle">Titre :</label>
          <input id="lessonTitle" v-model="title" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="lessonDescription">Description :</label>
          <input id="lessonDescription" v-model="description" type="text" class="admin__text-input" />
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
          <input id="lessonImage" v-model="image" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
            <label class="admin__label">Cursus lié(s) :</label>
            <div v-for="course in courses" :key="course._id">
                <label>
                    <input type="checkbox" :value="course._id" v-model="selectedCourses" />
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

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonId">ID :</label>
          <input id="updateLessonId" v-model="updateId" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonTitle">Titre :</label>
          <input id="updateLessonTitle" v-model="updateTitle" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonDescription">Description :</label>
          <input id="updateLessonDescription" v-model="updateDescription" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonTextContent">Contenu textuel :</label>
          <textarea id="updateLessonTextContent" v-model="updateTextContent" class="admin__text-input"></textarea>
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonVideoUrl">URL vidéo :</label>
          <input id="updateLessonVideoUrl" v-model="updateVideoUrl" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonPrice">Prix :</label>
          <input id="updateLessonPrice" v-model="updatePrice" type="number" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateLessonImage">Image :</label>
          <input id="updateLessonImage" v-model="updateImage" type="text" class="admin__text-input" />
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
      <form @submit.prevent="deleteLesson" class="admin__delete-lesson">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Supprimer une leçon</h2>
        </div>
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

// CREATE
const title = ref('')
const description = ref('')
const textContent = ref('')
const videoUrl = ref('')
const price = ref('')
const image = ref('')
const selectedCourses = ref([])

const createLesson = async () => {
  try {
    const res = await axios.post('http://localhost:3000/admin/lessons/create-lesson', {
      title: title.value,
      description: description.value,
      textContent: textContent.value,
      videoUrl: videoUrl.value,
      price: price.value,
      image: image.value,
      course: selectedCourses.value
    })
    title.value = description.value = textContent.value = videoUrl.value = image.value = ''
    price.value = 0
    selectedCourses.value = []
  } catch (error) {
    console.error('Erreur création leçon :', error)
  }
}

// READ
const lessonId = ref('')
const lessonData = ref(null)

const fetchLessonById = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/admin/lessons/get-lesson-by-id/${lessonId.value}`)
    lessonData.value = res.data
    lessonId.value = ""
  } catch (error) {
    console.error('Erreur récupération leçon :', error)
    lessonData.value = null
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
const updateCourses = ref([])

const updateLesson = async () => {
  try {
    const res = await axios.put(`http://localhost:3000/admin/lessons/update-lesson/${updateId.value}`, {
      title: updateTitle.value,
      description: updateDescription.value,
      textContent: updateTextContent.value,
      videoUrl: updateVideoUrl.value,
      price: updatePrice.value,
      image: updateImage.value,
      course: updateCourses.value
    })
    console.log('Leçon mise à jour :', res.data)
    updateTitle.value = updateDescription.value = updateTextContent.value = updateVideoUrl.value = updateImage.value = ''
    updatePrice.value = 0
    updateCourses.value = []
  } catch (error) {
    console.error('Erreur update leçon :', error)
  }
}

// DELETE
const deleteId = ref('')

const deleteLesson = async () => {
  try {
    const res = await axios.delete(`http://localhost:3000/admin/lessons/delete-lesson/${deleteId.value}`)
    deleteId.value = ""
  } catch (error) {
    console.error('Erreur suppression leçon :', error)
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
