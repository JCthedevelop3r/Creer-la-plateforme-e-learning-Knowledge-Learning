<template>
  <div class="admin-courses">
    <!-- CREATE -->
    <div class="admin__form-wrapper">
      <div class="admin__title-container">
        <h2 class="admin__form-title">Créer un cursus</h2>
      </div>
      <form @submit.prevent="createCourse" class="admin__create-course">
        <div class="admin__input-container">
          <label class="admin__label" for="createCourseName">Nom :</label>
          <input id="createCourseName" v-model="name" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="createCourseImage">Image :</label>
          <input id="createCourseImage" v-model="image" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="createCoursePrice">Prix :</label>
          <input id="createCoursePrice" v-model="price" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label">Thème(s) lié(s) :</label>
          <div v-for="theme in themes" :key="theme._id">
            <label>
              <input type="checkbox" :value="theme._id" v-model="selectedThemes" />
              {{ theme.name }}
            </label>
          </div>
        </div>

        <div class="admin__input-container">
          <label class="admin__label">Leçon(s) liée(s) :</label>
          <div v-for="lesson in lessons" :key="lesson._id">
            <label>
              <input type="checkbox" :value="lesson._id" v-model="selectedLessons" />
              {{ lesson.title }}
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
      <form @submit.prevent="fetchCourseById" class="admin__get-course-by-id">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Lire les données d'un cursus</h2>
        </div>
        <div class="admin__input-container">
          <label class="admin__label" for="getCourseById">Entrez l'identifiant :</label>
          <input v-model="courseId" type="text" class="admin__text-input" id="getCourseById" required />
        </div>
        <div class="admin__btn-container">
          <button type="submit" class="admin__submit-button">VALIDER</button>
        </div>
      </form>

      <div v-if="courseData" class="admin__course-data">
        <table class="admin__table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Leçons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ courseData.name }}</td>
              <td>{{ courseData.price }}</td>
              <td>
                <ul>
                  <li v-for="lesson in courseData.lessons" :key="lesson._id">{{ lesson.title }}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- UPDATE -->
    <div class="admin__form-wrapper">
      <form @submit.prevent="updateCourse" class="admin__update-course">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Mettre à jour un cursus</h2>
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateCourseId">ID du cursus :</label>
          <input id="updateCourseId" v-model="updateId" type="text" class="admin__text-input" required />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateCourseName">Nom :</label>
          <input id="updateCourseName" v-model="updateName" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateCourseImage">Image :</label>
          <input id="updateCourseImage" v-model="updateImage" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label" for="updateCoursePrice">Prix :</label>
          <input id="updateCoursePrice" v-model="updatePrice" type="text" class="admin__text-input" />
        </div>

        <div class="admin__input-container">
          <label class="admin__label">Thème(s) lié(s) :</label>
          <div v-for="theme in themes" :key="theme._id">
            <label>
              <input type="checkbox" :value="theme._id" v-model="selectedThemes" />
              {{ theme.name }}
            </label>
          </div>
        </div>

        <div class="admin__input-container">
          <label class="admin__label">Leçon(s) liée(s) :</label>
          <div v-for="lesson in lessons" :key="lesson._id">
            <label>
              <input type="checkbox" :value="lesson._id" v-model="updateLessons" />
              {{ lesson.title }}
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
      <form @submit.prevent="deleteCourse" class="admin__delete-course">
        <div class="admin__title-container">
          <h2 class="admin__form-title">Supprimer un cursus</h2>
        </div>
        <div class="admin__input-container">
          <label class="admin__label" for="deleteCourseId">Entrez l'identifiant :</label>
          <input v-model="deleteId" type="text" class="admin__text-input" id="deleteCourseId" required />
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
const price = ref('')
const selectedThemes = ref([])
const selectedLessons = ref([])

const createCourse = async () => {
  try {
    const response = await axios.post('http://localhost:3000/admin/courses/create-course', {
      name: name.value,
      image: image.value,
      price: price.value,
      theme: selectedThemes.value,
      lessons: selectedLessons.value
    })
    console.log('Cursus créé :', response.data)
    name.value = price.value = image.value = ''
    selectedThemes.value = []
    selectedLessons.value = []
  } catch (error) {
    console.error('Erreur création :', error)
  }
}

// READ
const courseId = ref('')
const courseData = ref(null)

const fetchCourseById = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/admin/courses/get-course-by-id/${courseId.value}`)
    courseData.value = response.data
  } catch (error) {
    console.error('Erreur récupération :', error)
    courseData.value = null
  }
}

// UPDATE
const updateId = ref('')
const updateName = ref('')
const updateImage = ref('')
const updatePrice = ref('')
const updateThemes = ref([])
const updateLessons = ref([])

const updateCourse = async () => {
  try {
    const response = await axios.put(`http://localhost:3000/admin/courses/update-course/${updateId.value}`, {
      name: updateName.value,
      image: updateImage.value,
      price: updatePrice.value,
      themes: updateThemes.value,
      lessons: updateLessons.value
    })
    console.log('Cursus mis à jour :', response.data)
  } catch (error) {
    console.error('Erreur update :', error)
  }
}

// DELETE
const deleteId = ref('')

const deleteCourse = async () => {
  try {
    const response = await axios.delete(`http://localhost:3000/admin/courses/delete-course/${deleteId.value}`)
    console.log('Cursus supprimé :', response.data)
  } catch (error) {
    console.error('Erreur suppression :', error)
  }
}

// THEMES & LESSONS

const themes = ref([])
const lessons = ref([])

onMounted(async () => {
  try {
    const themeResponse = await axios.get('http://localhost:3000/admin/themes/get-all-themes')
    themes.value = themeResponse.data

   const lessonResponse = await axios.get('http://localhost:3000/admin/lessons/get-all-lessons')
    console.log('Leçons récupérées :', lessonResponse.data)
    lessons.value = lessonResponse.data
  } catch (error) {
    console.error('Erreur lors du chargement des thèmes ou leçons :', error)
  }
})
</script>
