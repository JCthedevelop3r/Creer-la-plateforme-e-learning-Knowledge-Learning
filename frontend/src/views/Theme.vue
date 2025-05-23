<template>
  <div class="theme">
    <h1 class="theme__title">{{ theme?.name || "Chargement..." }}</h1>
    <h2 class="theme__subtitle">Choisissez votre cursus :</h2>
    <div class="theme__cards">
      <router-link 
        v-for="(course, index) in courses"
        :key="index"
        :to="{path: `${theme.name}/${encodeURIComponent(course.name)}`}"
        class="theme__cards-link"
      >
        <div class="theme__card">
          <div class="theme__card-header">
            <h2 class="theme__card-title">{{ course.name }}</h2>
            <div class="theme__certifier-container">
              <button class="theme__certifier"></button>
            </div>
          </div>
          <div class="theme__picture-container">
            <img :src="course.image" alt="Image du cursus" class="theme__picture" />
          </div>
          <div class="theme__description-container">
            <div class="theme__list-container">
              <ul class="theme__list">
                <li v-for="(lesson, lessonIndex) in course.lessons" :key="lessonIndex" class="theme__list-item">
                  {{ lesson?.title || "Chargement..." }} - {{ course.price }}€
                </li>
              </ul>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const themeName = route.params.themeName;
const theme = ref(null);
const courses = ref([]);

const fetchThemeDetails = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/admin/themes/${themeName}`);
    theme.value = response.data;
    courses.value = [...response.data.course];

    await fetchLessonsForCourses();
  } catch (error) {
    console.error("Erreur lors du chargement du thème", error);
  }
};

const fetchLessonsForCourses = async () => {
  try {
    // Loop through each course
    for (const course of courses.value) {
      // Retrieve lessons directly for each course
      const lessonsPromises = course.lesson.map(lessonId => 
        axios.get(`http://localhost:3000/admin/lessons/${lessonId}`)
      );

      // Wait for all promises to resolve and get the lessons
      const lessonsResponses = await Promise.all(lessonsPromises);

      // Add the lessons to the course
      course.lessons = lessonsResponses.map(response => response.data);

      console.log(`Course updated with lessons:`, course); // Log to verify data
    }
  } catch (error) {
    console.error("Error while fetching lessons:", error);
  }
};


onMounted(fetchThemeDetails);

// Update data if URL changes
watch(() => route.params.themeName, (newThemeName) => {
  themeName.value = newThemeName;
  fetchThemeDetails();
});
</script>