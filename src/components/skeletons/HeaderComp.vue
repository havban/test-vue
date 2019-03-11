<template>
  <div>
    <router-link to="/">
      <img src="~assets/blibli-logo.png" alt="blibli logo"/>
    </router-link>
    [ {{userData.username}} ] | [
      <span
        v-for="i in LANGS"
        :key="i + 'lang'"
        @click="changeLang(i)"
        :class="{active: isActiveLang(i)}"
        class="link">
        {{i.toUpperCase()}} |
      </span>
    ]
    <div>
      <router-link to="/contact-us" class="button">
        {{$t('app.header.menus.contactUs')}}
      </router-link>
      <router-link to="/products" class="button">
        {{$t('app.header.menus.products')}}
      </router-link>
      <router-link to="/categories" class="button">
        {{$t('app.header.menus.categories')}}
      </router-link>
    </div>
  </div>
</template>

<script src="./js/header-comp.js"></script>

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
.link {
  cursor: pointer;
}
.active {
  font-weight: bold;
}
</style>
