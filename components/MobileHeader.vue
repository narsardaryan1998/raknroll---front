<template>
  <header id="mobileHeader">
    <div
      class="mobileHeader_nav d-flex justify-space-between align-sm-start align-center container container-padding products_show_products_black_background">
      <div class="mobileHeader_logo">
        <NuxtLink :to='localePath("/")' class="mobileHeader_logo_link">
          <v-img
            :lazy-src="require('~/assets/images/raknroll-logo.png')"
            :src="require('~/assets/images/raknroll-logo.png')"
            alt="RAK'N'ROLL logo"
            class="mobileHeader_logo_link_img"
            contain
            width="70px">
          </v-img>
        </NuxtLink>
      </div>
      <div class="mobileHeader_phone-and-language d-flex justify-space-around">
        <div class="mobileHeader-language d-flex">
          <div>
            <v-img
              v-if="!menuModalIsOpened"
              :lazy-src="require('~/assets/images/flags/' + $i18n.locale + '.png')"
              :src="require('~/assets/images/flags/' + $i18n.locale + '.png')"
              class="mt-2"
              contain
              position="center"
              width="20">
            </v-img>
          </div>
          <div class="pl-3">
            <v-select
              v-show="!menuModalIsOpened"
              v-model="$i18n.locale"
              :items="$i18n.locales"
              class="pt-0 mt-0 without-border-select"
              color="red darken-4"
              hide-details
              item-color="red darken-4"
              item-text="name"
              item-value="code"
              menu-props="auto"
              single-line
              @change="changeLanguage">
            </v-select>
          </div>
        </div>
        <div class="mobileHeader_phone">
          <v-select
            v-show="!menuModalIsOpened"
            :items="[{number: '+38 (096) 599 - 09 - 09', key: 'phone1'}, {number: '+38 (093) 599 - 09 - 09', key: 'phone2'}]"
            :placeholder="$t('callUs') + ' :)'"
            class="pt-0 mt-0 without-border-select"
            color="red darken-4"
            hide-details
            item-color="red darken-4"
            item-text="number"
            item-value="key"
            menu-props="auto"
            prepend-icon="mdi-phone"
            single-line
            @change="call($event)">
          </v-select>
          <a ref="phone1" href="tel:+380965990909"></a>
          <a ref="phone2" href="tel:+380935990909"></a>
        </div>
      </div>
      <div class="mobileHeader_actions d-flex justify-end align-center">
        <div>
          <button ref="menuHamburgerButton"
                  aria-label="Main Menu"
                  class="menu"
                  onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
                  @click="openMenuModal">
            <svg height="35" viewBox="0 0 100 100" width="35">
              <path class="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
              <path class="line line2" d="M 20,50 H 80"/>
              <path class="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="mobileHeader_modal" ref="mobileHeaderModal">
      <v-list class="transparent p-0 pr-0" dark shaped>
        <v-list-item-group
          v-model="selectedItem"
          color="primary">
          <div v-for="(category, index) in $store.getters['categories/data']" class="mobileHeader_modal_list_border">
            <a href="javascript:void(0)"
               @click="goToPath(localePath('/products/'+ category.slug +'/all-subcategories/all-brands/page-1'))"
               v-if="!category.subcategories.length">
              <v-list-item>
                <v-list-item-icon
                  class="mr-3">
                  <v-img
                    v-if="category.icon"
                    max-width="25"
                    max-height="25"
                    :lazy-src="require('~/assets/images/catalogIcons/' + category.icon + '.png')"
                    :src="require('~/assets/images/catalogIcons/' + category.icon + '.png')">
                  </v-img>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    color="grey lighten-3 pl-2">{{ category.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </a>
            <v-list-group color="white" v-else-if="category.subcategories.length">
              <template v-slot:activator class="vzgoo">
                <v-list-item-icon
                  class="mr-3">
                  <v-img
                    v-if="category.icon"
                    max-width="25"
                    max-height="25"
                    :lazy-src="require('~/assets/images/catalogIcons/' + category.icon + '.png')"
                    :src="require('~/assets/images/catalogIcons/' + category.icon + '.png')">
                  </v-img>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                      category.name
                    }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <a href="javascript:void(0)"
                 @click="goToPath(localePath('/products/'+ category.slug +'/all-subcategories/all-brands/page-1'))">
                <v-list-item>
                  <v-list-item-icon
                    class="mr-3">
                    <v-icon
                      color="grey lighten-3"
                      small
                      dark>
                      mdi-subdirectory-arrow-right
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title
                    color="grey lighten-3">{{ $t('all') }}
                  </v-list-item-title>
                </v-list-item>
              </a>
              <a href="javascript:void(0)" v-for="subcategory in category.subcategories"
                 @click="goToPath(localePath('/products/'+ category.slug +'/' + subcategory.slug + '/all-brands/page-1'))">
                <v-list-item>
                  <v-list-item-icon
                    class="mr-3">
                    <v-icon
                      color="grey lighten-3"
                      small
                      dark>
                      mdi-subdirectory-arrow-right
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title
                    color="grey lighten-3">{{ subcategory.name }}
                  </v-list-item-title>
                </v-list-item>
              </a>
            </v-list-group>
          </div>
          <div class="mobileHeader_modal_list_border">
            <a href="javascript:void(0)"
               @click='goToPath(localePath(`/products/all-catalog/all-subcategories/all-brands/%7B"display_quantity":8,"discounted":true%7D/page-1`))'>
              <v-list-item>
                <v-list-item-icon
                  class="mr-3">
                  <v-img
                    max-width="25"
                    max-height="25"
                    :lazy-src="require('~/assets/images/catalogIcons/sales.png')"
                    :src="require('~/assets/images/catalogIcons/sales.png')">
                  </v-img>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    color="grey lighten-3 pl-2">{{ $t('sales') }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </a>
          </div>
        </v-list-item-group>
      </v-list>
      <div class="row mobileHeader_modal_nav_navigation_pages mt-8">
        <div class="col-12">
          <nav class="d-block">
            <ul class="list-style-none pl-0 d-flex justify-center">
              <li>
                <a class="list-style-none mobileHeader_modal_nav_navigation_page pl-4 black-text-shadow"
                   href="javascript:void(0)"
                   @click="goToPath(localePath('/reviews'))">
                  {{ $t('menuLinks.reviews') }}</a>
              </li>
              <li>
                <a class="list-style-none mobileHeader_modal_nav_navigation_page pl-4 black-text-shadow"
                   href="javascript:void(0)"
                   @click="goToPath(localePath('/delivery-and-payment'))">
                  {{ $t('menuLinks.delivery-and-payment') }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row mobileHeader_modal_nav_navigation_pages mt-2">
        <div class="col-12">
          <nav class="d-block">
            <ul class="list-style-none pl-0 d-flex justify-center">
              <li>
                <a class="list-style-none mobileHeader_modal_nav_navigation_page pl-4 black-text-shadow"
                   href="javascript:void(0)"
                   @click="goToPath(localePath('/public-contract'))">
                  {{ $t('menuLinks.publicContract') }}</a>
              </li>
              <li>
                <a class="list-style-none mobileHeader_modal_nav_navigation_page pl-4 black-text-shadow"
                   href="javascript:void(0)"
                   @click="goToPath(localePath('/about-company'))">
                  {{ $t('menuLinks.aboutCompany') }}</a>
              </li>
              <li>
                <a class="list-style-none mobileHeader_modal_nav_navigation_page px-4 black-text-shadow"
                   href="javascript:void(0)"
                   @click="goToPath(localePath('/contact-us'))">
                  {{ $t('menuLinks.contact-us') }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row footer_socialite mt-5 mx-0">
        <div class="col-12 d-flex justify-center px-0">
          <v-hover
            v-slot="{ hover }">
            <a href="https://www.facebook.com/RAKnROLL-100396829019534"
               rel="nofollow"
               target="_blank">
              <v-img
                :lazy-src="require('~/assets/images/fb-logo-red.png')"
                :src="require('~/assets/images/fb-logo-red.png')"
                contain
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                max-width="30">
              </v-img>
            </a>
          </v-hover>
          <v-hover
            v-slot="{ hover }">
            <a href="https://instagram.com/rak._n_.roll?r=nametag"
               rel="nofollow"
               target="_blank">
              <v-img
                :lazy-src="require('~/assets/images/instaram-logo-red.png')"
                :src="require('~/assets/images/instaram-logo-red.png')"
                class="ml-3"
                contain
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
                max-width="30">
              </v-img>
            </a>
          </v-hover>
          <v-hover
            v-slot="{ hover }">
            <a href="viber://chat?number=%2B380965990909" rel="nofollow" target="_blank">
              <v-img
                :lazy-src="require('~/assets/images/viber-logo-red.png')"
                :src="require('~/assets/images/viber-logo-red.png')"
                class="ml-3"
                contain
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="1000"
                max-width="30">
              </v-img>
            </a>
          </v-hover>
          <v-hover
            v-slot="{ hover }">
            <a href="https://telegram.me/Raknroll2021" rel="nofollow" target="_blank">
              <v-img
                :lazy-src="require('~/assets/images/telegram-logo-red.png')"
                :src="require('~/assets/images/telegram-logo-red.png')"
                class="ml-3"
                contain
                data-aos="fade-right"
                data-aos-delay="1200"
                data-aos-duration="1000"
                max-width="30">
              </v-img>
            </a>
          </v-hover>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ModalHeader",
  data() {
    return {
      menuModalIsOpened: false,
      language: this.$i18n.locale,
      selectedItem: null
    }
  },
  methods: {
    changeLanguage() {
      this.$store.dispatch('categories/getData', {
        language: this.$i18n.locale
      });
      this.getCartDataByLanguage();
      let routePath = $nuxt.$route.path;
      let pushTo = '';
      if (routePath.includes("/ru/")) {
        pushTo = routePath.replace("ru/", this.$i18n.locale === "uk" ? "" : this.$i18n.locale + "/")
      } else if (routePath.includes("/ru")) {
        pushTo = routePath.replace("/ru", this.$i18n.locale === "uk" ? "/" : "/" + this.$i18n.locale)
      } else if (routePath.includes("/en/")) {
        pushTo = routePath.replace("en/", this.$i18n.locale === "uk" ? "" : this.$i18n.locale + "/")
      } else if (routePath.includes("/en")) {
        pushTo = routePath.replace("/en", this.$i18n.locale === "uk" ? "/" : "/" + this.$i18n.locale)
      } else {
        pushTo = this.$i18n.locale !== "uk" ? "/" + this.$i18n.locale + routePath : routePath;
      }
      this.$router.push({path: pushTo});
    },
    addToCart(productId) {
      this.$store.commit('cart/add', productId);
    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
    getCartDataByLanguage() {
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      if (cartArray && cartArray.length) {
        let productIds = [];
        for (let i = 0; i < cartArray.length; i++) {
          productIds.push(cartArray[i].id)
        }
        this.$store.dispatch('cart/getData', {
          language: this.$i18n.locale,
          productIds
        });
      }
    },
    openMenuModal() {
      if (!this.menuModalIsOpened) {
        this.menuModalIsOpened = true;
        document.getElementById('cartModal').classList.add("z-index-minus");
        this.$refs.mobileHeaderModal.classList.add('mobileHeader_modal_open');
        document.getElementsByTagName('html')[0].classList.add("overflow-y-hidden");
        document.getElementsByClassName('v-main')[0].classList.add("main-blured");
        document.getElementsByTagName('footer')[0].classList.add("main-blured");
      } else {
        this.menuModalIsOpened = false;
        document.getElementById('cartModal').classList.remove("z-index-minus");
        this.$refs.mobileHeaderModal.classList.remove('mobileHeader_modal_open');
        document.getElementsByTagName('html')[0].classList.remove("overflow-y-hidden");
        document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
        document.getElementsByTagName('footer')[0].classList.remove("main-blured");
      }
    },
    goToPath(path) {
      this.$router.push(path);
      this.$refs.menuHamburgerButton.click();
    },
    call(e) {
      this.$refs[e].click();
    }
  },
}
</script>

<style scoped>
#mobileHeader{top:0;position:fixed;width:100%;z-index:100}.mobileHeader_phone-and-language{width:50%}.mobileHeader_actions,.mobileHeader_logo{width:25%}.mobileHeader_phone{width:70%}.mobileHeader-language{width:30%}.mobileHeader_nav{z-index:1000000;position:fixed;top:0}.mobileHeader_modal{overflow-y:scroll;overflow-x:hidden;padding-top:94px;width:100%;height:100%;background-color:rgb(0 0 0 / 24%);position:fixed;top:0;z-index:10000;transform:translateX(100%);transition:.5s}.mobileHeader_modal_open{transform:translateX(0);transition:.5s}.mobileHeader_modal_nav_navigation_menu li{border-bottom:1px solid rgba(255,255,255,.12)}.mobileHeader_modal_nav_navigation_menu_link{font-size:20px}.mobileHeader_modal_nav_navigation_page{color:#fff}.nuxt-link-exact-active{color:#b71c1c!important}
</style>
