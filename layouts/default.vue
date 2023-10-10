<template>
  <div class="container">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default Vue.extend({
  components: {
    AppHeader,
    AppFooter,
  }
});
</script>

<style>
html {
  font-family: "Berkshire Swash", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
  height: 100%;
}

#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
}


#__layout > .container {
  position: relative;
  height: auto;
  min-height: 100%;
}

a {
  color: #666;
  text-decoration: none;
}

.container {
  max-width: 100vw;
  overflow: hidden;
  padding: 1rem 0.5rem;
  background: #fff;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container .row {
  border-bottom: 1px solid #ddd;
  padding-bottom: 2rem;
  padding-top: 2rem;
}

.container .row:first-child {
  padding-top: 0;
}

.container .row:last-child {
  border-bottom: 0;
}

#jumbotron {
	padding: 2rem;
  background-color: lightgrey;
  margin-bottom: 0;
}
#jumbotron #book-category {
  font-family: "Berkshire Swash", cursive;
  color: #3a2410;
  border-radius: 8px;
  background: #eab641;
  padding: 10px 10px 10px 20px;
  text-align: left;
  margin-bottom: 20px;
}
#jumbotron #book-list #book-list-item #container #container-row #container-image-col {
  padding-bottom: 0;
  text-align: left;
}
#jumbotron #book-list #book-list-item #container #container-row #container-image-col img {
  max-width: 184px;
}
#jumbotron #book-list #book-list-item #container #container-row #container-book-detail-col {
	text-align: left;
}
#jumbotron #book-list #book-list-item #container #container-row #container-book-detail-col #book-author-row {
	color: gray;
}
#jumbotron #book-list #book-list-item #container #container-row #book-desc-row #book-desc {
	margin-bottom: 0.5rem;
}
#jumbotron #book-list #book-list-item #container #container-row #book-price-row #book-price {
	margin-bottom: 0.5rem;
  font-size: 1.2rem;
}
@media (max-width: 576px) {
  #jumbotron {
    padding: 1rem
  }
  #jumbotron #book-list #book-list-item #container #container-row #container-image-col {
    padding-bottom: 2rem;
  }
  #jumbotron #book-list #book-list-item #container #container-row #container-image-col img {
    max-width: 210px;
  }
}
</style>
