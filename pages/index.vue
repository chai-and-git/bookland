<template>
  <div class="home">
    <div class="description">
      <h2 class="title">Welcome to the land of books...</h2>
      <h3 class="subtitle">Grab a cup of coffee and savour upon your favorite author's book!</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "Bookland",
      meta: [
        {
          hid: "123",
          name: "Bookland",
          content: "A land of books"
        }
      ]
    };
  }
});
</script>

<style>
.home {
  align-content: center;
  background-image: url("~@/assets/library.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(97vh - 90px);
  text-align: center;
  position: relative;
  -webkit-box-shadow: 0 0 10px rgb(219, 146, 37);
  box-shadow: 0 0 15px rgb(219, 146, 37);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.home .description {
  width: 85%;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  top: 50%;
  margin: 0;
}

.home .title,
.home .subtitle {
  color: #ffffff;
  font-weight: 300;
}

.home .title {
  font-family: "Berkshire Swash", cursive;
  font-size: 3rem;
  text-shadow: 0 0 8px rgb(0, 0, 0);
  display: block;
  letter-spacing: 1px;
}

.home .subtitle {
  font-size: 1.8rem;
  text-shadow: 0 0 5px rgb(0, 0, 0);
}

@media (max-width: 576px) {
  .home {
    min-height: calc(97vh - 70px);
    letter-spacing: 2px;
  }

  .home .description {
    width: 90%;
  }

  .home .title {
    font-size: 2rem;
    text-align: left;
    padding-bottom: 0.7rem;
  }

  .home .subtitle {
    font-size: 1.1rem;
    text-align: right;
  }
}
</style>
