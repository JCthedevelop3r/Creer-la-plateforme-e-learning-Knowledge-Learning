import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import du router

const app = createApp(App);

app.use(router); // Activation de Vue Router

app.mount("#app");

// Allows to connect Vue to Express
fetch("http://localhost:3000/api/test")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
