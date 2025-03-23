<template>
  <div class="sign-up">
    <h1 class="sign-up__title">Inscrivez-vous</h1>
    <div class="sign-up__form-container">
      <form action="/sign-up-form" method="POST" class="sign-up__form">
        <div class="sign-up__input-container">
          <label for="name" class="sign-up__label">Nom :</label>
          <input type="text" class="sign-up__input" id="name" required />
        </div>
        <div class="sign-up__input-container">
          <label for="firstname" class="sign-up__label">Prénom :</label>
          <input type="text" class="sign-up__input" id="firstname" required />
        </div>
        <div class="sign-up__input-container">
          <label for="mail" class="sign-up__label">Mail :</label>
          <input type="email" class="sign-up__input" id="mail" required />
        </div>
        <div class="sign-up__input-container">
          <label for="password" class="sign-up__label">Mot de passe :</label>
          <input
            type="password"
            class="sign-up__input"
            id="password"
            required
          />
        </div>
        <button class="sign-up__button">S'INSCRIRE</button>
      </form>
    </div>
  </div>
</template>
