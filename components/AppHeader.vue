<template>
  <header class="header">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="/">
        <img src="~assets/icons/educational-book.svg" class="siteLogo d-inline-block align-top" alt="Bookland logo">
        <h1 class="title">Bookland</h1>
      </b-navbar-brand>
    </b-navbar>

    <b-navbar-nav class="ml-auto" v-if="!($device.isMobile)">
      <nuxt-link to="/store" right>
        <img class="logo" src="~assets/icons/online-shopping.svg" alt="store logo">
      </nuxt-link>
      <nuxt-link to="/cart" right>
        <img class="logo" src="~assets/icons/shopping-cart.svg" alt="cart logo">
        <!--<span>{{ totalBooks }}</span>-->
      </nuxt-link>

      <b-nav-item-dropdown right>
        <!-- Using 'button-content' slot -->
        <template v-slot:button-content>
          <img class="logo" src="~assets/icons/bookshelf.svg" alt="categories logo">
        </template>
        <b-dropdown-text>~Categories~</b-dropdown-text>
        <b-dropdown-item>
          <nuxt-link 
            v-for="category in categories"
            v-bind:to="'/store/'+ category.toLowerCase()"
            v-bind:key="category"
          >
            {{category}}
          </nuxt-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto" v-if="$device.isMobile">
      <b-nav-item-dropdown id="dropdown-right" right text="Right align" variant="primary">
        <!-- Using 'button-content' slot -->
        <template v-slot:button-content>
          <img class="logo" src="~assets/icons/bookshelf.svg" alt="list logo">
        </template>
        <b-dropdown-item class="imp-item">
          <nuxt-link to="/store">Store</nuxt-link>
        </b-dropdown-item>
        <b-dropdown-item class="imp-item" href="/cart">
          <nuxt-link to="/cart">Cart</nuxt-link>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-text>Categories</b-dropdown-text>
        <b-dropdown-item>
          <nuxt-link 
            v-for="category in categories"
            v-bind:to="'/store/'+ category.toLowerCase()"
            v-bind:key="category"
          >
            {{category}}
          </nuxt-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { BNavbar, BNavbarBrand, BNavbarNav, BDropdownText, BNavItemDropdown, BDropdownItem, BDropdownDivider } from 'bootstrap-vue';

export default Vue.extend({
  name: "AppHeader",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BDropdownText,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider
  },
  data() {
    return {
      categories: ['Fiction', 'Non-fiction', 'Biopic', 'Food', 'Thriller', 'Horror', 'Social', 'History']
    };
  }

})

</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 0.3rem 0 0.7rem;
  letter-spacing: 0.7px;
}

.header .title {
  font-family: 'Berkshire Swash', cursive;
  display: inline-block;
  background: none;
  font-size: 3.7rem;
  color: #3a2410;
  padding-left: 5px;
  text-shadow: 0 0 5px rgb(165, 104, 69);
  margin-bottom: 0;
}

.header a {
  display: block;
  background: none;
}

.header a:hover {
  text-decoration: none;
}

.header .siteLogo {
  width: 3.7rem;
  margin-top: .2rem;
}

.logo {
  width: 45px;
  vertical-align: middle;
  opacity: 0.7;
  margin-left: 0.7rem;
  margin-right: 1rem;
}

.logo:hover {
  opacity: 1;
  transition: .3s;
}

.navbar {
  padding: 0.7rem 0.5rem 0.5rem;
}

.navbar-nav {
  flex-direction: row;
}

.navbar-nav .dropdown-menu {
  background-image: url('~@/assets/canvas.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0.2rem 0;
}

.dropdown-item,
.b-dropdown-text {
  padding-left: 1rem;
  padding-right: 1rem;
}

.dropdown-item {
  font-size: 1.3rem;
  color: #4b2807;
  font-weight: 500;
  text-align: center;
}

.dropdown-item:hover {
  transition: smooth 0.2s;
  color: #3a2410;
  font-weight: 600;
  background: initial;
}

.b-dropdown-text {
  color: #3a2410;
  font-size: 1.5rem;
  font-family: 'Berkshire Swash', cursive;
}

.dropdown-toggle::after {
  display: none;
}

@media (max-width: 576px) {
  .header {
    height: 70px;
  }

  .header .title {
    font-size: 2.5rem;
    padding-left: 0;
  }

  .header .siteLogo {
    width: 2.5rem;
  }

  .logo {
    width: 45px;
    margin: 0 8px;
  }

  .dropdown-item {
    text-align: left;
  }

  .dropdown-divider {
    border-top: 1px dotted rgb(161, 121, 20);
  }
}
</style>