import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Confirmation from "../views/Confirmation.vue";
import SignIn from "../views/SignIn.vue";
import Themes from "../views/Themes.vue";
import Theme from "../views/Theme.vue";
import Course from "../views/Course.vue";
import Lesson from "../views/Lesson.vue";
import Certifications from "../views/Certifications.vue";
import Admin from "../views/Admin.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/sign-up", component: SignUp },
  { path: "/confirmation", component: Confirmation },
  { path: "/sign-in", component: SignIn },
  { path: "/themes", component: Themes },
  { path: "/theme/:themeName", component: Theme },
  { path: "/theme/:themeName/:courseName", component: Course },
  { path: "/theme/:themeName/:courseName/:lessonId", component: Lesson },
  { path: "/certifications", component: Certifications },
  { path: "/admin", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
