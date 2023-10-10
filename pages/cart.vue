<template>
  <div v-if="items && items.length > 0">
    <div class="book-category">
      <h1 class="page-title">Cart</h1>
      <p class="sub-title">The books you have sorted out to buy...</p>
    </div>
    <div class="cart-table">
      <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(action)="row">
          <b-button variant="danger" size="sm" @click="removeFromCart(row.item)">Remove</b-button>
        </template>
      </b-table>
    </div>
    <div class="botoom-spacing">
      <b-button class="cart-button" variant="secondary" v-on:click="clearCart()">Clear Cart</b-button>
      <b-button
        class="cart-button"
        variant="outline-primary"
        v-on:click="checkout()"
      >Place your order</b-button>
    </div>
  </div>
  <div v-else>
    <h3 class="cart-empty">
      Your cart is empty please <nuxt-link to="/store">click here</nuxt-link> to start shopping.
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Book } from "../domain/book";
import { BButton, BTable } from "bootstrap-vue";

export default Vue.extend({
  components: {
    BButton,
    BTable,
  },
  data() {
    return {
      totalAmount: 0,
      totalQuantity: 0,
      fields: [
      {
        key: "name",
        label: "Book Name",
      },
      {
        key: "quantity",
        label: "Quantity",
      },
      {
        key: "price",
        label: "Price",
      },
      {
        key: "action",
        label: "Action",
      }
    ],
      items: null as any,
      actions: null as any,
    };
  },
  mounted() {
    this.items = this.$store.state.bookList;
  },
  methods: {
    checkout() {
      this.totalAmount = 0;
      this.totalQuantity = 0;
      this.$store.commit("clear");
      this.items = [];
      this.showToast("Thank you for shopping with us!");
    },
    clearCart() {
      this.totalAmount = 0;
      this.totalQuantity = 0;
      this.$store.commit("clear");
      this.items = [];
      this.showToast('Removed all the books from your cart.');
    },
    removeFromCart(item: any) {
      this.$store.commit("removeFromCart", item);
      this.items = this.$store.state.bookList;
      this.showToast(`Removed '${item.name}' from your cart.`);
    },
    showToast (message: string) {
      this.$bvToast.toast(message, {
        title: "Success",
        toaster: "b-toaster-bottom-right",
        variant: "success",
        solid: true,
      });
    }
  }
});
</script>

<style>
#myGrid {
  width: 100% !important;
}

.cart-container {
  padding: 4rem 2rem;
}

.dropdown-item:hover {
  transition: smooth 0s;
  font-weight: 500;
}

.page-title {
  font-family: "Berkshire Swash", cursive;
  color: #3a2410;
  border-radius: 8px;
  background: #eab641;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 4rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.sub-title {
  margin-right: 2rem;
  margin-left: 2rem;
  background: #f2f2f2;
  padding: 0.5rem;
  border-radius: 8px;
}

.cart-table {
  padding: 40px 2rem 20px;
}
.book-category {
  font-family: "Berkshire Swash", cursive;
  color: #3a2410;
}
.botoom-spacing {
  padding-bottom: 10px;
}
.cart-button {
  font-size: 20px;
  padding: 5px 10px 5px 10px;
}
.cart-empty {
  margin: 4rem 0.5rem;
  background: #ddd;
  padding: 2rem 0;
  border-radius: 4px;
}
</style>