<template>
  <div>
    <router-link to="/">
      <img src="~assets/blibli-logo.png" alt="blibli logo"/>
    </router-link>
    <div>
      <router-link to="/contact-us" class="button">
        Contact Us
      </router-link>
      <router-link to="/products" class="button">
        Products
      </router-link>
      <router-link to="/categories" class="button">
        Categories
      </router-link>
    </div>
  </div>
</template>

<style>
.button {
  background-color: lightblue;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-left: 10px;
}
</style>
