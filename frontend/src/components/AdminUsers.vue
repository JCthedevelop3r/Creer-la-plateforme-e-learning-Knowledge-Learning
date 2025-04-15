<template>
    <div class="admin-users">
        <div class="admin__form-wrapper">
            <form
            class="admin__create-user"
            method="POST"
            action="/admin/users/create-user"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Créer un utilisateur</h2>
            </div>
            <div class="admin__input-container">
                <label for="createUserName" class="admin__label">Nom :</label>
                <input
                type="text"
                name="name"
                class="admin__text-input"
                id="createUserName"
                />
            </div>
            <div class="admin__input-container">
                <label for="createUserMail" class="admin__label">Email :</label>
                <input
                type="email"
                name="email"
                class="admin__text-input"
                id="createUserMail"
                />
            </div>
            <div class="admin__input-container">
                <label for="createUserPassword" class="admin__label"
                >Mot de passe :</label
                >
                <input
                type="password"
                name="password"
                class="admin__text-input"
                id="createUserPassword"
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
        </div>
        <div class="admin__form-wrapper">
            <form @submit.prevent="fetchUserById" class="admin__get-user-by-id">
            <div class="admin__title-container">
                <h2 class="admin__form-title">Lire les données d'un utilisateur</h2>
            </div>
            <div class="admin__input-container">
                <label for="getUserById" class="admin__label"
                >Entrez l'identifiant :</label
                >
                <input
                type="text"
                v-model="userId"
                class="admin__text-input"
                id="getUserById"
                required
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>

            <!--
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
                    <td>{{ userData.purchases.join(', ') }}</td>
                    <td>{{ userData.certifications.join(', ') }}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            -->
            <!--
            <script setup>
            import { ref } from "vue"
            import axios from "axios"

            const userId = ref("")
            const userData = ref(null)

            const fetchUserById = async () => {
                try {
                const response = await axios.get(`http://localhost:3000/admin/users/get-user-by-id?id=${userId.value}`)
                userData.value = response.data
                } catch (error) {
                console.error("Erreur lors de la récupération de l'utilisateur :", error)
                userData.value = null
                }
            }
            </script>
            -->
        </div>
        <div class="admin__form-wrapper">
            <form
            class="admin__update-user"
            method="POST"
            action="/admin/users/update-user"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Mettre à jour un utilisateur</h2>
            </div>
            <div class="admin__input-container">
                <label for="updateUserId" class="admin__label"
                >Entrez l'identifiant :</label
                >
                <input
                type="text"
                name="id"
                class="admin__text-input"
                id="updateUserId"
                required
                />
            </div>
            <div class="admin__input-container">
                <label for="updateUserName" class="admin__label">Nom :</label>
                <input
                type="text"
                name="name"
                class="admin__text-input"
                id="updateUserName"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateUserMail" class="admin__label">Email :</label>
                <input
                type="email"
                name="email"
                class="admin__text-input"
                id="updateUserMail"
                />
            </div>
            <div class="admin__input-container">
                <label for="updateUserPassword" class="admin__label"
                >Mot de passe :</label
                >
                <input
                type="password"
                name="password"
                class="admin__text-input"
                id="updateUserPassword"
                />
            </div>
            <div class="admin__btn-container">
                <button type="submit" class="admin__submit-button">VALIDER</button>
            </div>
            </form>
        </div>
        <div class="admin__form-wrapper">
            <form
            class="admin__delete-user"
            method="POST"
            action="/admin/users/delete-user"
            >
            <div class="admin__title-container">
                <h2 class="admin__form-title">Supprimer un utilisateur</h2>
            </div>
            <div class="admin__input-container">
                <label for="deleteUserId" class="admin__label"
                >Entrez l'identifiant :</label
                >
                <input
                type="text"
                name="id"
                class="admin__text-input"
                id="deleteUserId"
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