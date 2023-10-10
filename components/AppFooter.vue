<template>
  <footer class="site-footer">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h6>About Us</h6>
        <p class="text-justify">
          Welcome to our online book store, with an extensive selection of books at reasonable prices.
          Here you will find a wealth of fiction and popular non-fiction, hard to find titles, classic texts of thriller and everything in between.
        </p>
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul class="footer-links">
          <li v-for="category in categories" :key="category.name">
            <a :href="category.url">{{category.name}}</a>
          </li>
        </ul>
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul class="footer-links">
          <li v-for="links in quickLinks" :key="links.name">
            <a :href="links.url">{{links.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <p class="copyright-text">
          Copyright &copy; 2020 All Rights Reserved by
          <a href="#">Bookland</a>.
        </p>
      </div>

      <div class="col-md-6 col-sm-6 col-xs-12">
        <ul class="social-icons">
          Connect with Us :
          <li>
            <a class="linkedin" href="https://in.linkedin.com/">
              <img src="~assets/icons/icon-linkedin.png" alt="Linkedin" />
            </a>
          </li>
          <li>
            <a class="twitter" href="https://twitter.com/login?lang=en">
               <img src="~assets/icons/icon-twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a class="facebook" href="https://www.facebook.com/">
              <img src="~assets/icons/icon-facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a class="pinterest" href="https://in.pinterest.com/">
              <img src="~assets/icons/icon-pinterest.png" alt="Pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>>

<script lang="ts">
import Vue from "vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

export default Vue.extend({
  name: "AppFooter",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      categories: null as any,
      quickLinks: null as any
    };
  },

  beforeMount() {
    this.categories = [
      { name: "Fiction", url: "/store/fiction" },
      { name: "Non-fiction", url: "/store/non-fiction" },
      { name: "Food", url: "/store/food" },
      { name: "Thriller", url: "/store/thriller" },
      { name: "Social", url: "/store/social" }
    ];
    this.quickLinks = [
      { name: "Contact Us", url: "#" },
      { name: "Contribute", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Sitemap", url: "#" },
      { name: "Social", url: "#" }
    ];
  }
});
</script>

<style>
.site-footer {
  background-color: #26272b;
  padding: 40px 10px 20px;
  font-size: 15px;
  line-height: 24px;
  color: #808080;
  margin: 1rem 0.5rem;
  bottom: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer p {
  padding: 0 80px;
}
.site-footer a {
  color: #808080;
}
.site-footer a:hover {
  color: #1a75ff;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #808080;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #b3b3ff;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: center;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin-top: 8px;
}
@media (max-width: 991px) {
  .site-footer p {
    padding: 0 40px;
  }

  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}

.social-icons a {
  background-color: #efecec;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}

.social-icons a.linkedin img  {
  width: 24px;
  opacity: 0.3;
}

.social-icons a.twitter img {
  width: 24px;
  opacity: 0.3;
}

.social-icons a.facebook img {
  width: 16px;
  opacity: 0.3;
}

.social-icons a.pinterest img {
  width: 24px;
  opacity: 0.3;
}

.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.pinterest:hover {
  background-color: #c91517;
}

.social-icons a.facebook:hover img,
.social-icons a.twitter:hover img,
.social-icons a.linkedin:hover img,
.social-icons a.pinterest:hover img {
  opacity: 1;
}

@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>
