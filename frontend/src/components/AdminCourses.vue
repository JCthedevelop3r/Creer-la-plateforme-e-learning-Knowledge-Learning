<template>
    <div class="admin-courses">
        <div class="admin__form-wrapper">
            <form
            action="/admin/courses/create-course"
            method="POST"
            class="admin__create-course"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Créer un cursus</h2>
            </div>
            <div class="admin__input-container">
                <label for="createCourseName" class="admin__label">Nom :</label>
                <input
                type="text"
                name="name"
                class="admin__text-input"
                id="createCourseName"
                required
                />
            </div>
            <div class="admin__input-container">
                <label for="createCourseDescription" class="admin__label"
                >Description :</label
                >
                <input
                type="text"
                name="description"
                class="admin__text-input"
                id="createCourseDescription"
                />
            </div>
            <div class="admin__input-container">
                <label for="createCoursePrice" class="admin__label">Prix :</label>
                <input
                type="text"
                name="price"
                class="admin__text-input"
                id="createCoursePrice"
                />
            </div>
            <div class="admin__input-container">
                <label class="admin__label">Leçon(s) liée(s) :</label>
                <div v-for="lesson in lessons" :key="lesson._id">
                <label>
                    <input type="checkbox" name="lessons[]" :value="lesson._id" />
                    {{ lesson.name }}
                </label>
                </div>
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
            <!--
                <script setup>
                    import { ref, onMounted } from 'vue';
                    import axios from 'axios';

                    // Référence pour les leçons et les leçons sélectionnées
                    const lessons = ref([]);
                    const selectedLessons = ref([]);

                    // Récupérer les leçons depuis l'API
                    onMounted(async () => {
                    try {
                        const response = await axios.get('http://localhost:3000/admin/lessons/get-all-lessons');
                        lessons.value = response.data; // Stocker les leçons récupérées
                    } catch (error) {
                        console.error('Erreur lors du chargement des leçons', error);
                    }
                    });
                </script>
            -->
        </div>

        <div class="admin__form-wrapper">
            <form @submit.prevent="fetchCourseById" class="admin__get-course-by-id">
            <div class="admin__title-container">
                <h2 class="admin__form-title">Lire les données d'un cursus</h2>
            </div>
            <div class="admin__input-container">
                <label for="getCourseById" class="admin__label"
                >Entrez l'identifiant :</label
                >
                <input
                v-model="courseId"
                type="text"
                class="admin__text-input"
                id="getCourseById"
                required
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>

            <!--
                <div v-if="courseData" class="admin__course-data">
                    <table class="admin__table">
                    <thead>
                        <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{{ courseData.name }}</td>
                        <td>{{ courseData.description }}</td>
                        <td>{{ courseData.price }}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            
                <script setup>
                import { ref } from 'vue'
                import axios from 'axios'
            
                const courseId = ref('')
                const courseData = ref(null)
            
                const fetchCourseById = async () => {
                    try {
                    const response = await axios.get(`http://localhost:3000/admin/courses/get-course-by-id/${courseId.value}`)
                    courseData.value = response.data
                    } catch (error) {
                    console.error('Erreur lors de la récupération du cursus :', error)
                    courseData.value = null
                    }
                }
                </script>
                -->
        </div>

        <div class="admin__form-wrapper">
            <form
            action="/admin/courses/update-course"
            method="POST"
            class="admin__update-course"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Mettre à jour un cursus</h2>
            </div>
            <div class="admin__input-container">
                <label for="updateCourseId" class="admin__label">ID du cursus :</label>
                <input
                type="text"
                name="id"
                class="admin__text-input"
                id="updateCourseId"
                required
                />
            </div>
            <div class="admin__input-container">
                <label for="updateCourseName" class="admin__label">Nom :</label>
                <input
                type="text"
                name="name"
                class="admin__text-input"
                id="updateCourseName"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateCourseDescription" class="admin__label"
                >Description :</label
                >
                <input
                type="text"
                name="description"
                class="admin__text-input"
                id="updateCourseDescription"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateCoursePrice" class="admin__label">Prix :</label>
                <input
                type="text"
                name="price"
                class="admin__text-input"
                id="updateCoursePrice"
                />
            </div>
            <div class="admin__input-container">
                <label class="admin__label">Leçon(s) liée(s) :</label>
                <div v-for="lesson in lessons" :key="lesson._id">
                <label>
                    <input type="checkbox" name="lessons[]" :value="lesson._id" />
                    {{ lesson.name }}
                </label>
                </div>
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
        </div>

        <div class="admin__form-wrapper">
            <form
            action="/admin/courses/delete-course"
            method="POST"
            class="admin__delete-course"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Supprimer un cursus</h2>
            </div>
            <div class="admin__input-container">
                <label for="deleteCourseId" class="admin__label"
                >Entrez l'identifiant :</label
                >
                <input
                type="text"
                name="id"
                class="admin__text-input"
                id="deleteCourseId"
                required
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
        </div>
    </div>
</template>