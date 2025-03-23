<template>
  <div class="confirmation">
    <h1 class="confirmation__title">Confirmez votre inscription</h1>
    <p class="confirmation__description">
      Nous vous avons envoyé un code de confirmation par mail. Veuillez vous
      rendre sur votre boîte mail pour récupérer le code de confirmation,
      saisissez le dans le champ ci-dessous, puis cliquez sur “valider”.
    </p>
    <div class="confirmation__form-container">
      <form
        action="/confirmation-form"
        method="POST"
        class="confirmation__form"
      >
        <div class="confirmation__input-container">
          <label for="confirmationCode" class="confirmation__label"
            >Code de confirmation :</label
          >
          <input
            type="number"
            class="confirmation__input"
            id="confirmationCode"
            required
          />
        </div>
        <button class="confirmation__button">VALIDER</button>
      </form>
    </div>
  </div>
</template>
