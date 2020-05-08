<template>
  <div id="app">

    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>

    <!-- Bottom nav-bar-->
    <app-nav-bar>
      <nav slot="menu">
        <ul>
          <li>
            <router-link to='./about'>{{$t("common.nav.about")}}</router-link>
          </li>
          <li>
            <router-link to='./contact'>{{$t("common.nav.contact")}}</router-link>
          </li>
        </ul>
      </nav>
    </app-nav-bar>

  </div>
</template>

<style>
  @import url("./_app.scss");
</style>

<script src="./app.js"></script>