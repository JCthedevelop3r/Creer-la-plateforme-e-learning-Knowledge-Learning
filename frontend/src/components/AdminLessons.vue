<template>
    <div class="admin-lessons">
        <div class="admin__form-wrapper">
            <form
            action="/admin/lessons/create-lesson"
            method="POST"
            class="admin__create-lesson"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Créer une leçon</h2>
            </div>
            <div class="admin__input-container">
                <label for="createLessonTitle" class="admin__label">Titre :</label>
                <input
                type="text"
                name="title"
                class="admin__text-input"
                id="createLessonTitle"
                required
                />
            </div>
            <div class="admin__input-container">
                <label for="createLessonDescription" class="admin__label"
                >Description :</label
                >
                <input
                type="text"
                name="description"
                class="admin__text-input"
                id="createLessonDescription"
                />
            </div>
            <div class="admin__input-container">
                <label for="createLessonTextContent" class="admin__label"
                >Contenu textuel :</label
                >
                <textarea
                name="textContent"
                class="admin__text-input"
                id="createLessonTextContent"
                required
                ></textarea>
            </div>
            <div class="admin__input-container">
                <label for="createLessonVideoUrl" class="admin__label"
                >URL vidéo :</label
                >
                <input
                type="url"
                name="videoUrl"
                class="admin__text-input"
                id="createLessonVideoUrl"
                required
                />
            </div>
            <div class="admin__input-container">
                <label for="createLessonPrice" class="admin__label">Prix :</label>
                <input
                type="number"
                name="price"
                class="admin__text-input"
                id="createLessonPrice"
                required
                />
            </div>
            <div class="admin__input-container">
                <label for="createLessonImage" class="admin__label">Image :</label>
                <input
                type="file"
                name="image"
                class="admin__text-input"
                id="createLessonImage"
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
        </div>

        <div class="admin__form-wrapper">
            <form @submit.prevent="fetchLessonById" class="admin__get-lesson-by-id">
            <div class="admin__title-container">
                <h2 class="admin__form-title">Lire les données d'une leçon</h2>
            </div>
            <div class="admin__input-container">
                <label for="getLessonById" class="admin__label"
                >Entrez l'identifiant :</label
                >
                <input
                v-model="lessonId"
                type="text"
                class="admin__text-input"
                id="getLessonById"
                required
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
        </div>
        <!--
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

                <script setup>
                    import { ref } from 'vue';
                    import axios from 'axios';
                    
                    // Références pour l'ID de la leçon et les données de la leçon
                    const lessonId = ref('');  // Stocke l'ID de la leçon
                    const lessonData = ref(null);  // Stocke les données de la leçon récupérées
                    const errorMessage = ref('');  // Stocke les erreurs
                    
                    // Fonction pour récupérer les données de la leçon depuis l'API
                    const fetchLessonById = async () => {
                    errorMessage.value = '';  // Réinitialiser les erreurs
                    try {
                        // Effectuer la requête pour récupérer la leçon par ID
                        const response = await axios.get(`/admin/lessons/get-lesson-by-id/${lessonId.value}`);
                        lessonData.value = response.data;  // Stocker les données de la leçon
                    } catch (error) {
                        console.error('Erreur lors de la récupération de la leçon:', error);
                        lessonData.value = null;  // Réinitialiser les données de la leçon en cas d'erreur
                        errorMessage.value = 'Erreur lors de la récupération de la leçon. Veuillez vérifier l\'ID et réessayer.';
                    }
                    };
                </script>
            -->
        <div class="admin__form-wrapper">
            <form
            action="/admin/lessons/update-lesson"
            method="POST"
            class="admin__update-lesson"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Mettre à jour une leçon</h2>
            </div>
            <div class="admin__input-container">
                <label for="updateLessonId" class="admin__label"
                >ID de la leçon :</label
                >
                <input
                type="text"
                name="id"
                class="admin__text-input"
                id="updateLessonId"
                required
                />
            </div>
            <div class="admin__input-container">
                <label for="updateLessonTitle" class="admin__label">Titre :</label>
                <input
                type="text"
                name="title"
                class="admin__text-input"
                id="updateLessonTitle"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateLessonDescription" class="admin__label"
                >Description :</label
                >
                <input
                type="text"
                name="description"
                class="admin__text-input"
                id="updateLessonDescription"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateLessonTextContent" class="admin__label"
                >Contenu textuel :</label
                >
                <textarea
                name="textContent"
                class="admin__text-input"
                id="updateLessonTextContent"
                ></textarea>
            </div>
            <div class="admin__input-container">
                <label for="updateLessonVideoUrl" class="admin__label"
                >URL vidéo :</label
                >
                <input
                type="url"
                name="videoUrl"
                class="admin__text-input"
                id="updateLessonVideoUrl"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateLessonPrice" class="admin__label">Prix :</label>
                <input
                type="number"
                name="price"
                class="admin__text-input"
                id="updateLessonPrice"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateLessonImage" class="admin__label">Image :</label>
                <input
                type="file"
                name="image"
                class="admin__text-input"
                id="updateLessonImage"
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
        </div>

        <div class="admin__form-wrapper">
            <form
            action="/admin/lessons/delete-lesson"
            method="POST"
            class="admin__delete-lesson"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Supprimer une leçon</h2>
            </div>
            <div class="admin__input-container">
                <label for="deleteLessonId" class="admin__label"
                >Entrez l'identifiant :</label
                >
                <input
                type="text"
                name="id"
                class="admin__text-input"
                id="deleteLessonId"
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