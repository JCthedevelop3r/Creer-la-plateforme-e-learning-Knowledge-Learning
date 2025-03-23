<template>
  <div class="themes">
    <h1 class="themes__title">Bienvenue [Nom-Prénom utilisateur] !</h1>
    <p class="themes__description">
      Explorez les différents thèmes que propose Knowledge Learning et
      choisissez votre domaine d'apprentissage.
    </p>
    <div class="themes__cards">
      <!--Faire une boucle sur themes__card-->
      <div class="themes__card">
        <div class="themes__card-header">
          <h2 class="theme__title--h2">[Nom du thème]</h2>
        </div>
        <div class="themes__picture-container">
          <img src="" alt="Image du thème" class="themes__picture" />
        </div>
        <div class="themes__card-description-container">
          <div class="themes__card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mollis mattis ante, vitae mattis odio tempus cursus. Integer tempor
            erat.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
