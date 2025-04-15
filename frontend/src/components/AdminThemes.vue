<template>
    <div class="admin-themes">
        <div class="admin__form-wrapper">
            <form
            action="admin/themes/create-theme"
            method="POST"
            class="admin__create-theme"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Créer un thème</h2>
            </div>
            <div class="admin__input-container">
                <label for="createThemeName" class="admin__label">Nom :</label>
                <input
                type="text"
                name="name"
                class="admin__text-input"
                id="createThemeName"
                />
            </div>
            <div class="admin__input-container">
                <label for="createThemeImage" class="admin__label">Image :</label>
                <select name="image" id="createThemeImage" class="admin__text-input">
                <option disabled selected value="">-- Choisir une image --</option>
                <!--Boucler sur les images-->
                <option value=""></option>
                </select>
            </div>
            <div class="admin__input-container">
                <label for="createThemeDescription" class="admin__label"
                >Description :</label
                >
                <input
                type="text"
                name="description"
                class="admin__text-input"
                id="createThemeDescription"
                />
            </div>
            <div class="admin__input-container">
                <label class="admin__label">Cursus lié(s) :</label>
                <div v-for="course in courses" :key="course._id">
                <label>
                    <input type="checkbox" name="courses[]" :value="course._id" />
                    {{ course.name }}
                </label>
                </div>
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
            <!--
                <script setup>
                import { ref, onMounted } from "vue";
                import axios from "axios";

                const courses = ref([]);

                onMounted(async () => {
                    try {
                    const response = await axios.get(
                        "http://localhost:3000/admin/courses/get-all-courses"
                    );
                    courses.value = response.data;
                    } catch (error) {
                    console.error("Erreur lors du chargement des cursus", error);
                    }
                });
                </script>
            -->
        </div>
        <div class="admin__form-wrapper">
            <form @submit.prevent="fetchThemeById" class="admin__get-theme-by-id">
            <div class="admin__title-container">
                <h2 class="admin__form-title">Lire les données d'un thème</h2>
            </div>
            <div class="admin__input-container">
                <label for="getThemeById" class="admin__label">
                Entrez l'identifiant :
                </label>
                <input
                type="text"
                v-model="themeId"
                class="admin__text-input"
                id="getThemeById"
                required
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>

            <!--
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
                            <li v-for="course in themeData.course" :key="course._id">
                            {{ course.name }}
                            </li>
                        </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>

                <script setup>
                    import { ref } from 'vue'
                    import axios from 'axios'

                    const themeId = ref('')
                    const themeData = ref(null)

                    const fetchThemeById = async () => {
                    try {
                        const response = await axios.get(`http://localhost:3000/admin/themes/get-theme-by-id/${themeId.value}`)
                        themeData.value = response.data
                    } catch (error) {
                        console.error('Erreur lors de la récupération du thème :', error)
                        themeData.value = null
                    }
                    }
                </script>
            -->
        </div>
        <div class="admin__form-wrapper">
            <form
            action="admin/themes/update-theme"
            method="POST"
            class="admin__update-theme"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Mettre à jour un thème</h2>
            </div>
            <div class="admin__input-container">
                <label for="updateThemeId" class="admin__label">ID du thème :</label>
                <input
                type="text"
                name="id"
                class="admin__text-input"
                id="updateThemeId"
                required
                />
            </div>
            <div class="admin__input-container">
                <label for="updateThemeName" class="admin__label">Nom :</label>
                <input
                type="text"
                name="name"
                class="admin__text-input"
                id="updateThemeName"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateThemeImage" class="admin__label">Image :</label>
                <select name="image" id="updateThemeImage" class="admin__text-input">
                <option disabled selected value="">-- Choisir une image --</option>
                <!--Boucler sur les images-->
                <option value=""></option>
                </select>
            </div>
            <div class="admin__input-container">
                <label for="updateThemeDescription" class="admin__label"
                >Description :</label
                >
                <input
                type="text"
                name="description"
                class="admin__text-input"
                id="updateThemeDescription"
                />
            </div>
            <div class="admin__input-container">
                <label class="admin__label">Cursus lié(s) :</label>
                <div v-for="course in courses" :key="course._id">
                <label>
                    <input type="checkbox" name="courses[]" :value="course._id" />
                    {{ course.name }}
                </label>
                </div>
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
            <!--
                <script setup>
                import { ref, onMounted } from "vue";
                import axios from "axios";

                const courses = ref([]);

                onMounted(async () => {
                    try {
                    const response = await axios.get(
                        "http://localhost:3000/admin/courses/get-all-courses"
                    );
                    courses.value = response.data;
                    } catch (error) {
                    console.error("Erreur lors du chargement des cursus", error);
                    }
                });
                </script>
            -->
        </div>
        <div class="admin__form-wrapper">
            <form
            action="/admin/themes/delete-theme"
            method="POST"
            class="admin__delete-theme"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Supprimer un thème</h2>
            </div>
            <div class="admin__input-container">
                <label for="deleteThemeId" class="admin__label">
                Entrez l'identifiant :
                </label>
                <input
                type="text"
                name="id"
                class="admin__text-input"
                id="deleteThemeId"
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