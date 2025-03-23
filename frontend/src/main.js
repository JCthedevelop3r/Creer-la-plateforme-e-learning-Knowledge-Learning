import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

// Allows to connect Vue to Express
fetch("http://localhost:3000/api/test")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
