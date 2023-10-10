
<template>
  <b-jumbotron id="jumbotron">
    <h1 id="book-category">All Books</h1>
    <b-list-group id="book-list">
      <b-list-group-item id="book-list-item">
        <b-container id="container">
          <b-row id="container-row" v-for="book in books" v-bind:key="book.book_id">
            <b-col id="container-image-col" cols="12" sm="auto">
              <b-img :src="book.imagePath_small"></b-img>
            </b-col>
            <b-col id="container-book-detail-col">
              <div>
                <h3>{{book.name}}</h3>
              </div>
              <div id="book-author-row">
                <h4>{{book.author}}</h4>
              </div>
              <div id="book-desc-row">
                <p id="book-desc">{{book.description}}</p>
              </div>
              <div id="book-price-row">
                <p id="book-price">&pound; {{book.price}}</p>
              </div>
              <div id="add-to-cart-row">
                <b-button variant="outline-secondary" @click="addToCart(book)">Add to Cart</b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-list-group-item>
    </b-list-group>
  </b-jumbotron>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { BJumbotron, BListGroup, BListGroupItem, BContainer, BRow, BCol, BImg, BButton } from 'bootstrap-vue';

export default Vue.extend({
  components: {
    BJumbotron,
    BListGroup,
    BListGroupItem,
    BContainer,
    BRow,
    BCol,
    BImg,
    BButton
  },
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/books")
      .then(resp => {
        this.books = resp.data;
      })
      .catch(error => { });
  },
  methods: {
    addToCart(book: Object) {
      this.$store.commit("books", book);
      this.$bvToast.toast("Book added to cart successfully.", {
        title: "Success",
        toaster: "b-toaster-bottom-right",
        variant: "success",
        solid: true,
      });
    }
  },
  head() {
    return {
      title: "Store | Bookland",
      meta: [
        {
          hid: "124",
          name: "Bookland store",
          content: "Books store"
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
#jumbotron {
  #book-category {
    font-family: "Berkshire Swash", cursive;
    color: #3a2410;
  }
  #book-list {
    #book-list-item {
      #container {
        #container-row {
          #container-book-detail-col {
            text-align: left;
            #book-author-row {
              color: gray;
            }
          }
          #book-desc-row {
            #book-desc {
              margin-bottom: 0.5rem;
            }
          }
          #book-price-row {
            #book-price {
              margin-bottom: 0.5rem;
            }
          }
          #add-to-cart-row {
            position: relative;
          }
        }
      }
    }
  }
}
</style>