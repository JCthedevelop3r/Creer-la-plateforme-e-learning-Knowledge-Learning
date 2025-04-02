<template>
  <div class="lesson">
    <h1 class="lesson__title">{{ lesson?.title || "Chargement..." }}</h1>
    <div class="lesson__content">
      <div class="lesson__text-wrapper">
        <p class="lesson__text">
          {{ lesson?.textContent || "Chargement du contenu..." }}
        </p>
      </div>
      <div class="lesson__video-wrapper">
        <img :src="lesson?.videoUrl" alt="Image d'une interface vidéo" class="lesson__video" />
        <!--S'il faut mettre une vrai vidéo :
      <video class="lesson__video" controls>
        <source :src="lesson?.videoUrl" type="video/mp4" />
      </video>-->
      </div>
    </div>
    <div class="lesson__button-container">
      <button class="lesson__confirm-button">VALIDER LA LEÇON</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const lessonId = ref(route.params.lessonId); // Retrieve URL parameter
const lesson = ref(null); // Store lesson data

const fetchLessonDetails = async () => {
  try {
    console.log("Requested lesson:", lessonId.value);
    
    // API call to fetch lesson details
    const response = await axios.get(`http://localhost:3000/admin/lessons/${encodeURIComponent(lessonId.value)}`);
    console.log("Received lesson data:", response.data);

    lesson.value = response.data; // Store response in `lesson`
  } catch (error) {
    console.error("Error loading lesson", error);
  }
};

// Load data on component mount
onMounted(fetchLessonDetails);

// Update if URL changes
watch(() => route.params.lessonId, (newLessonId) => {
  lessonId.value = newLessonId;
  fetchLessonDetails();
});
</script>
