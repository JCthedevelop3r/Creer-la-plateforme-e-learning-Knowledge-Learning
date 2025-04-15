<template>
  <div class="admin-page">
    <h1>Panneau d'administration</h1>
    
    <AdminUsers />
    <AdminThemes />
    <AdminCourses />
    <AdminLessons />
  </div>
</template>

<script setup>
import AdminThemes from '../components/AdminThemes.vue';
import AdminCourses from '../components/AdminCourses.vue';
import AdminLessons from '../components/AdminLessons.vue';
import AdminUsers from '../components/AdminUsers.vue';
</script>

<style scoped>
.admin-page {
  padding: 2rem;
}
</style>
