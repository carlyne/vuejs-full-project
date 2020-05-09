<template>
  <div class="about">
    <h1>This is an about page</h1>

    <main class="view-grid v-row v-center">
      <figure class="img-box">
        <img src="https://cataas.com/cat?w=500&amp;h=500" alt="photo">
      </figure>

      <section class="view-grid v-column">
        <header class="view-grid v-row">
          <p>Dr Horrible</p>
          <p>Pr.</p>
        </header>

        <section class="view-grid v-row">
          <p>Age</p>  
          <p>27 years old</p>
        </section>

        <section class="view-grid v-row">
          <p>Things I love</p>
          <p>spaceship</p>
        </section>
      </section>

      <aside>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ullam reiciendis aut doloribus maiores nesciunt dignissimos 
        repellat sapiente quae quod a. Sint, eaque velit. Fugit tempore quidem numquam ea facilis.
      </aside>
    </main>
  </div>
</template>

<style>
  @import url('./_about.scss');
</style>

<script src="./about.js"></script>