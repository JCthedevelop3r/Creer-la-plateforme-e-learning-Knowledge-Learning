<template>
  <div class="theme">
    <h1 class="theme__title">[Nom du thème]</h1>
    <h2 class="theme__subtitle">Choisissez votre cursus :</h2>
    <div class="theme__cards">
      <!--Faire une boucle sur theme__card-->
      <div class="theme__card">
        <div class="theme__card-header">
          <h2 class="theme__card-title">[Nom du cursus]</h2>
          <div class="theme__certifier-container">
            <button class="theme__certifier"></button>
          </div>
        </div>
        <div class="theme__picture-container">
          <img src="" alt="Image du cursus" class="theme__picture" />
        </div>
        <div class="theme__description-container">
          <div class="theme__list-container">
            <ul class="theme__list">
              <li class="theme__list-item">
                Leçon 1 : Lorem ipsum dolor sit amet - [prix]€
              </li>
              <li class="theme__list-item">
                Leçon 2 : Lorem ipsum dolor sit amet - [prix]€
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
