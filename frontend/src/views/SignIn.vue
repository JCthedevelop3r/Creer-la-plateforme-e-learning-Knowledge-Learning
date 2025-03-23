<template>
  <div class="sign-in">
    <h1 class="sign-in__title">Connectez-vous</h1>
    <div class="sign-in__form-container">
      <form action="/sign-in-form" method="POST" class="sign-in__form">
        <div class="sign-in__input-container">
          <label for="mail" class="sign-in__label">Mail :</label>
          <input type="email" class="sign-in__input" id="mail" required />
        </div>
        <div class="sign-in__input-container">
          <label for="password" class="sign-in__label">Mot de passe :</label>
          <input
            type="password"
            class="sign-in__input"
            id="password"
            required
          />
        </div>
        <button class="sign-in__button">SE CONNECTER</button>
      </form>
    </div>
  </div>
</template>
