<template>
  <div class="themes">
    <h1 class="themes__title">Bienvenue [Nom-Prénom utilisateur] !</h1>
    <p class="themes__description">
      Explorez les différents thèmes que propose Knowledge Learning et
      choisissez votre domaine d'apprentissage.
    </p>
    <div class="themes__cards">
      <router-link
        v-for="(theme, index) in themes"
        :key="index"
        :to="{ path: `/theme/${theme.name}` }"
        class="themes__card-link"
      >
        <div class="themes__card">
          <div class="themes__card-header">
            <h2 class="theme__title--h2">{{ theme.name }}</h2>
          </div>
          <div class="themes__picture-container">
            <img :src="theme.image" alt="Image du thème" class="themes__picture" />
          </div>
          <div class="themes__card-description-container">
            <div class="themes__card-description">
              {{ theme.description }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const themes = ref([]);

const fetchThemes = async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin/themes/get-all-themes');
    themes.value = response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des thèmes', error);
  }
};

onMounted(fetchThemes);
</script>
