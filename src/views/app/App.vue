<template>
  <div id="app">

    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/skills">Skills</router-link>
    </div>
    <router-view/>

    <!-- Left side bar -->
    <app-side-bar>
      <nav slot="sidebar">
        <div slot="commands">
          <div v-on:click="dialogLang()">Language</div>
        </div>
      </nav>
    </app-side-bar>

    <!-- choose language -->
    <app-dialog>
        <div slot="dialog-id" class="dialog-lang">
          <div slot="dialog-container">

            <div slot="header-bar" 
                 class="command-close" 
                 v-on:click="dialogLang()">X</div>

            <!-- texte traduit avec $t -->
            <div slot="content">
              <button v-on:click="changeLang('en')" class="en-btn">{{$t("common.language.en")}}</button>
              <button v-on:click="changeLang('fr')" class="fr-btn">{{$t("common.language.fr")}}</button>
            </div>
          </div>
        </div>
    </app-dialog>

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