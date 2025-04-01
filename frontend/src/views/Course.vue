<template>
  <div class="course">
    <h1 class="course__title">{{ course?.name || "Chargement..." }}</h1>
    <h2 class="course__subtitle">Choisissez votre leçon :</h2>
    <div class="course__cards">
      <router-link
        v-for="(lesson, index) in lessons"
        :key="index"
        :to="{path: `${encodeURIComponent(course.name)}/${encodeURIComponent(lesson.title)}`}"
        class="theme__cards-link"
      >
        <div class="course__card">
          <div class="course__card-header">
            <h2 class="course__card-title">{{ lesson.title }}</h2>
          </div>
          <div class="course__picture-container">
            <img :src="lesson.picture" alt="Image de la leçon" class="course__picture" />
          </div>
          <div class="course__description-container">
            <p class="course__description">
              {{ lesson.description }}
            </p>
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
const courseName = ref(route.params.courseName);
const course = ref(null);
const lessons = ref([]);

const fetchCourseDetails = async () => {
  try {
    console.log("courseName extrait de la route :", courseName.value);

    const response = await axios.get(`http://localhost:3000/admin/courses/${encodeURIComponent(courseName.value)}`);
    console.log("Données reçues des cursus :", response.data);
    
    course.value = response.data;
    lessons.value = [...response.data.lesson];

  } catch (error) {
    console.error("Erreur lors du chargement du cursus", error);
  }
};

onMounted(fetchCourseDetails);

watch(() => route.params.courseName, (newCourseName) => {
  courseName.value = newCourseName;
  fetchCourseDetails();
});

</script>
