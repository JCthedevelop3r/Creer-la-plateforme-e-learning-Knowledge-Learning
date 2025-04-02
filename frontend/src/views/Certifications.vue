<template>
  <div class="certifications">
    <div v-for="theme in themes" :key="theme._id" class="certifications__theme">
      <table class="certifications__table">
        <tbody class="certifications__tbody">
          <!-- Display theme name -->
          <tr class="certifications__row">
            <td class="certifications__td">
              <div class="certifications__theme-name">{{ theme.name }}</div>
              <button class="certifications__certifier"></button>
            </td>
          </tr>
          <!-- Loop through theme's courses -->
          <tr v-for="course in (theme.course || [])" :key="course._id" class="certifications__row">
            <td class="certifications__td">
              <div class="certifications__course">{{ course.name }}</div>
              <button class="certifications__certifier"></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const themes = ref([]); // Store themes data

const fetchThemes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/admin/themes/get-all-themes");
    console.log("Données reçues des thèmes 1 :", themes.value);
    console.log("Données reçues des thèmes 2 :", response.data); // 🔍 Debugging
    themes.value = response.data; // Store themes data
  } catch (error) {
    console.error("Error loading themes:", error);
  }
};

// Fetch themes when component is mounted
onMounted(fetchThemes);
</script>
