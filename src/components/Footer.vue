<template>
  <div id="footer">
    <span>
      <!--<router-link id="logo" to="/"></router-link>-->
      <span>
        <a href="http://facebook.com">
          <img class="img-social-link" src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="http://facebook.com">
          <img class="img-social-link" src="/images/twitter.png" alt="Twitter" />
        </a>
        <a href="http://facebook.com">
          <img class="img-social-link" src="/images/instagram.png" alt="Instagram" />
        </a>
      </span>
    </span>

    <span>
      <select name="currency" id="currency">
        <option value="" disabled selected>Moeda</option>
        <option value="reais">R$</option>
        <option value="dollars">US$</option>
        <option value="euros">€</option>
      </select>

      <select name="country" id="country">
        <option value="" disabled selected>País</option>
        <option value="brasil">Brasil</option>
        <option value="argentina">Argentina</option>
        <option value="estados-unidos">Estados Unidos</option>
        <option value="inglaterra">Inglaterra</option>
      </select>
    </span>
  </div>
</template>
