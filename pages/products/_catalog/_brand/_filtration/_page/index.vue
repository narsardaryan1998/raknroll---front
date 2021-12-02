<template>
  <div>
    <div id="products" class="page-container-padding-bottom">
      <client-only>
        <div class="pages_top_with_animation d-flex align-center justify-center pt-10">
          <div class="mr-3"
               data-aos="fade-right"
               data-aos-duration="1000">
            <hr>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000">
            <div class="component-top-header"
                 data-aos="fade-up"
                 data-aos-duration="1000">
              <div class="ml-4 black-text-shadow black--text white-brush-background font-caveat">
                <p class="py-8 px-sm-16 px-8"
                   data-aos="fade-up"
                   data-aos-delay="300"
                   data-aos-duration="1000" v-if="!category"> {{ $t('allOfCatalog') }}</p>
                <p class="py-8 px-sm-16 px-8"
                   data-aos="fade-up"
                   data-aos-delay="300"
                   data-aos-duration="1000" v-else> {{ category.name }}</p>
              </div>
            </div>
          </div>
          <div class="ml-3"
               data-aos="fade-left"
               data-aos-duration="1000">
            <hr>
          </div>
        </div>
      </client-only>
      <div class="products_and_filter d-flex justify-space-between container-padding container">
        <div class="products_show">
          <div class="row products_show_catalog_filter_for_mobile">
            <div class="col-12 col-sm-8 offset-sm-2">
              <v-select
                @change="filtration"
                filled
                :items="$store.getters['products/data'].categories"
                menu-props="auto"
                v-model="filter.category_slug"
                color="white"
                :placeholder="$t('allOfCatalog')"
                class="pt-0 mt-0"
                hide-details
                item-text="name"
                item-value="slug"
                item-color="white"
                single-line>
              </v-select>
            </div>
          </div>
          <div class="row products_page_products_show margin-top-6vh">
            <div class="py-0 col-sm-6 col-12 col-md-6 col-lg-3"
                 v-for="(product, index) in $store.getters['products/data'].products" :key="index">
              <v-card
                elevation="12"
                dark
                class="mx-auto my-12 mt-0 products_show_product"
                max-width="374">
                <NuxtLink :to='localePath("/product/show/" + product.slug)'>
                  <v-hover
                    v-slot="{ hover }">
                    <v-img class="card_product_image width-100 transition-05"
                           :class="{ 'scale-1-2': hover }"
                           :src="baseUrl + product.image"
                           :lazy-src="baseUrl + product.image"
                           contain>
                    </v-img>
                  </v-hover>
                  <v-card-title class="font-weight-bold px-2 pb-0 pt-2 white--text">{{ product.name }}</v-card-title>
                  <v-card-text class="grey--text text--lighten-4 font-weight-bold text-center font-brigada">
                    <div class="pl-5 pt-4 text-left" v-if="product.weight && product.min_quantity">
                      {{ $t('minimum') + ': ' + product.min_quantity }}
                    </div>
                    <div
                      :class="product.min_quantity || product.weight ? 'pl-2 pt-2 d-flex justify-space-between' : 'pl-2 pt-2 d-flex justify-end'">
                      <div class="pl-3" v-if="product.weight">
                        {{ $t('weight') + ': ' + product.weight + $t(product.unit + 'Short') }}
                      </div>
                      <div class="pl-3" v-else-if="product.min_quantity">
                        {{ $t('minimum') + ': ' + product.min_quantity }}
                      </div>
                      <div class="pr-3"
                           v-if="$store.getters['cart/data'].find(cart => product.id === cart.id) && $store.getters['cart/data'].find(cart => product.id === cart.id).qty > 1">
                        {{ $t('price') + ': ' + product.final_price }} грн x
                        {{ $store.getters['cart/data'].find(cart => product.id === cart.id).qty }}
                      </div>
                      <div v-else class="pr-3">
                        {{ $t('price') + ': ' + product.final_price }} грн
                      </div>
                    </div>
                    <div class="my-4 grey--text text--lighten-1">{{ product.short_description }}
                    </div>
                  </v-card-text>
                </NuxtLink>
                <div v-if="!$store.getters['cart/data'].find(cart => product.id === cart.id)">
                  <v-card-actions class="py-0">
                    <v-bottom-navigation
                      class="width-100 red-pattern-background"
                      horizontal>
                      <v-btn class="p-0 width-100"
                             max-width="100%"
                             @click="addToCart(product)">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('cart') }}</span>
                        <v-icon color="grey lighten-2">mdi-cart</v-icon>
                      </v-btn>
                    </v-bottom-navigation>
                  </v-card-actions>
                  <v-card-actions class="py-0">
                    <v-bottom-navigation
                      class="width-100 red-pattern-background"
                      horizontal>
                      <v-btn class="p-0 width-100"
                             @click="$router.push(localePath('/product/show/' + product.slug))"
                             max-width="100%">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('details') }}</span>
                        <v-icon
                          color="grey lighten-2">mdi-text-box-search-outline
                        </v-icon>
                      </v-btn>
                    </v-bottom-navigation>
                  </v-card-actions>
                </div>
                <div v-else>
                  <v-card-actions class="py-0">
                    <div class="d-flex justify-center width-100">
                      <div class="d-flex justify-start">
                        <v-btn
                          @click="updateQuantity({productId: product.id, value: -1})"
                          icon
                          color="grey lighten-2">
                          <v-icon>mdi-minus</v-icon>
                        </v-btn>
                      </div>
                      <div class="cart_product_counter_row_quantity text-center font-brigada px-5 width-50">
                        <p class="show_counter_quantity mb-0">
                          {{ $store.getters['cart/data'].find(cart => product.id === cart.id).qty }}</p>
                      </div>
                      <div class="d-flex justify-end">
                        <v-btn
                          @click="updateQuantity({productId: product.id, value: 1})"
                          icon
                          color="grey lighten-2">
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-card-actions>
                  <v-card-actions class="py-0">
                    <v-bottom-navigation
                      class="red-pattern-background"
                      grow>
                      <v-btn class="p-0 mw-100"
                             @click="deleteFromCart(product.id)">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('cart') }}</span>
                        <v-icon
                          color="grey lighten-2">mdi-cart-off
                        </v-icon>
                      </v-btn>
                      <v-btn class="p-0 width-100"
                             @click="$router.push(localePath('/product/show/' + product.slug))"
                             max-width="100%">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('details') }}</span>
                        <v-icon
                          color="grey lighten-2">mdi-text-box-search-outline
                        </v-icon>
                      </v-btn>
                    </v-bottom-navigation>
                  </v-card-actions>
                </div>
              </v-card>
            </div>
          </div>
          <div class="d-flex products_show_pagination justify-end align-center">
            <div>
              <v-pagination
                color="red darken-4"
                v-if="$store.getters['products/data'].paginateCount > 1"
                v-model="filter.page"
                :length="$store.getters['products/data'].paginateCount"
                :total-visible="7"
                @input="filtration($event, true)">
              </v-pagination>
            </div>
          </div>
        </div>
        <div class="products_filter d-md-flex d-none flex-column">
          <div>
            <v-text-field
              dark
              hide-details
              v-model="filter.search"
              color="red darken-4"
              @keyup.enter="(e) => {e.target.blur()}"
              @blur="filtration"
              :label="$t('searchProduct')"
              append-icon="mdi-shopping-search">
            </v-text-field>
          </div>
          <div class="margin-top-6vh">
            <v-select
              :items="$store.getters['products/data'].categories"
              menu-props="auto"
              v-model="filter.category_slug"
              @change="filtration"
              color="red darken-4"
              :placeholder="$t('allOfCatalog')"
              class="pt-0 mt-0"
              hide-details
              item-text="name"
              item-value="slug"
              item-color="red darken-4"
              single-line>
            </v-select>
          </div>
          <div class="margin-top-6vh">
            <v-select
              :items="$store.getters['products/data'].brands"
              menu-props="auto"
              @change="filtration"
              v-model="filter.brand_slug"
              color="red darken-4"
              :placeholder="$t('allBrands')"
              class="pt-0 mt-0"
              hide-details
              item-text="name"
              item-value="slug"
              item-color="red darken-4"
              single-line>
            </v-select>
          </div>
          <div class="margin-top-6vh">
            <div class="row">
              <div class="col-12">
                <span>{{ $t('price') }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col px-4 pt-0">
                <v-range-slider
                  @change="filtration"
                  v-model="filter.final_price"
                  :min="0"
                  color="red darken-4"
                  :max="23000"
                  hide-details
                  class="align-center">
                  <template v-slot:prepend>
                    <v-text-field
                      @keyup.enter="(e) => {e.target.blur()}"
                      @blur="filtration"
                      :value="filter.final_price[0]"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      color="red darken-4"
                      type="number"
                      style="width: 60px"
                      @change="$set(filter.final_price, 0, $event)">
                    </v-text-field>
                  </template>
                  <template v-slot:append>
                    <v-text-field
                      @keyup.enter="(e) => {e.target.blur()}"
                      @blur="filtration"
                      :value="filter.final_price[1]"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      color="red darken-4"
                      type="number"
                      style="width: 60px"
                      @change="$set(filter.final_price, 1, $event)">
                    </v-text-field>
                  </template>
                </v-range-slider>
              </div>
            </div>
          </div>
          <div class="margin-top-6vh display-quantity-select">
            <v-select
              :items="displayQuantityArray"
              menu-props="auto"
              v-model="filter.display_quantity"
              @change="filtration"
              color="red darken-4"
              class="pt-0 mt-0 text-center"
              hide-details
              item-color="red darken-4"
              single-line>
            </v-select>
          </div>
          <div class="mt-5">
            <v-switch
              @change="filtration"
              v-model="filter.recommended"
              :label="$t('recommended')"
              color="red darken-4"
              hide-details>
            </v-switch>
          </div>
          <div class="mt-5">
            <v-switch
              @change="filtration"
              v-model="filter.discounted"
              :label="$t('discounted')"
              color="red darken-4"
              hide-details>
            </v-switch>
          </div>
        </div>
      </div>
    </div>
    <div id="mobileFilterModal">
      <div class="mobileFilterModal_button red-pattern-background justify-center">
        <v-btn
          @click="openMobilFilterSection"
          class="ma-2 border-none m-0"
          outlined
          fab
          small>
          <v-icon
            class="border-none"
            color="white">mdi-shopping-search
          </v-icon>
        </v-btn>
      </div>
      <div class="mobileFilterModal_fields red-pattern-background black--text">
        <div class="row">
          <div class="col-12">
            <div class="pr-2 pt-2">
              <a href="javascript:void(0)"
                 class="close-button float-right"
                 @click="openMobilFilterSection">
                <div class="in">
                  <div class="close-button-block"></div>
                  <div class="close-button-block"></div>
                </div>
                <div class="out">
                  <div class="close-button-block"></div>
                  <div class="close-button-block"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="px-8 py-10">
          <div class="row">
            <div class="col-12">
              <v-text-field
                dark
                filled
                hide-details
                v-model="filter.search"
                color="white"
                :label="$t('searchProduct')"
                append-icon="mdi-shopping-search">
              </v-text-field>
            </div>
          </div>
          <div class="row margin-top-4vh">
            <div class="col-12">
              <v-select
                filled
                :items="$store.getters['products/data'].brands"
                menu-props="auto"
                v-model="filter.brand_slug"
                color="white"
                :placeholder="$t('allBrands')"
                class="pt-0 mt-0"
                hide-details
                item-text="name"
                item-value="slug"
                item-color="white"
                single-line>
              </v-select>
            </div>
          </div>
          <div class="row margin-top-4vh">
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <span class="white--text">{{ $t('price') }}</span>
                </div>
              </div>
              <div class="row">
                <div class="col px-4 pt-0">
                  <v-range-slider
                    v-model="filter.final_price"
                    :min="0"
                    color="white"
                    :max="23000"
                    hide-details
                    class="align-center">
                    <template v-slot:prepend>
                      <v-text-field
                        :value="filter.final_price[0]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        color="white"
                        type="number"
                        style="width: 60px"
                        @change="$set(filter.final_price, 0, $event)">
                      </v-text-field>
                    </template>
                    <template v-slot:append>
                      <v-text-field
                        :value="filter.final_price[1]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        color="white"
                        type="number"
                        style="width: 60px"
                        @change="$set(filter.final_price, 1, $event)">
                      </v-text-field>
                    </template>
                  </v-range-slider>
                </div>
              </div>
            </div>
          </div>
          <div class="row margin-top-4vh">
            <div class="display-quantity-select col-12">
              <v-select
                filled
                :items="displayQuantityArray"
                menu-props="auto"
                v-model="filter.display_quantity"
                color="white"
                hide-details
                :label="$t('displayQuantity')"
                class="pt-0 mt-0 text-center"
                item-color="white">
              </v-select>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <v-switch
                v-model="filter.recommended"
                :label="$t('recommended')"
                color="white"
                hide-details>
              </v-switch>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <v-switch
                v-model="filter.discounted"
                :label="$t('discounted')"
                color="white"
                hide-details>
              </v-switch>
            </div>
          </div>
          <div class="row margin-top-4vh">
            <div class="col-12">
              <v-btn
                @click="mobileFilterSearch"
                class="font-weight-bold width-100"
                large
                light>
                {{ $t('searchProduct') }}
                <v-icon class="ml-3">
                  mdi-magnify
                </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({params}) {
    if (!params.page.includes("page-")) {
      return false;
    }
    let checkPageNumber = /^\d+$/.test(params.page.replace('page-', ''));
    if (!checkPageNumber) {
      return false;
    }
    return !!(params.catalog && params.brand);
  },
  data() {
    return {
      language: this.$i18n.locale,
      mobileFilterModal: false,
      displayQuantityArray: [8, 12, 16],
      baseUrl: process.env.BASE_URL
    }
  },
  async asyncData({params, store, i18n}) {
    const filter = {
      language: i18n.locale,
      category_slug: params.catalog,
      brand_slug: params.brand,
      page: 1,
      display_quantity: 8,
      search: '',
      recommended: false,
      discounted: false,
      final_price: [0, 23000]
    }
    if (params.filtration) {
      params.filtration = JSON.parse(params.filtration)
      for (const [key, value] of Object.entries(params.filtration)) {
        filter[key] = value;
      }
    }
    filter.page = parseInt(params.page.replace('page-', ''))
    filter.category_slug = params.catalog;
    filter.brand_slug = params.brand;
    await store.dispatch('products/getData', filter);
    if (store.getters['products/data'].paginateCount < filter.page) {
      filter.page = store.getters['products/data'].paginateCount;
    }
    const category = store.getters['products/data'].categories.find(category => category.slug === filter.category_slug);
    const brand = store.getters['products/data'].brands.find(brand => brand.slug === filter.brand_slug);
    return {filter, category, brand}
  },
  head() {
    let metaTitleBrand = '';
    let metaKeysBrand = '';
    let metaDescBrand = '';
    let metaTitleCategory = '';
    let metaKeysCategory = '';
    let metaDescCategory = '';
    if (this.category) {
      metaTitleCategory = this.category.meta_title ? this.category.meta_title : this.category.name;
      metaKeysCategory = this.category.meta_keys ? this.category.meta_keys : this.category.name;
      metaDescCategory = this.category.meta_description ? this.category.meta_description : this.category.description;
    }
    if (this.brand) {
      metaTitleBrand = this.brand.meta_title ? this.brand.meta_title : this.brand.name;
      metaKeysBrand = this.brand.meta_keys ? this.brand.meta_keys : this.brand.name;
      metaDescBrand = this.brand.meta_keys ? this.brand.meta_keys : this.brand.name;
    }
    if (this.category && this.brand) {
      const i18nHead = this.$nuxtI18nHead({addSeoAttributes: true})
      return {
        title: metaTitleCategory + ' | ' + metaTitleBrand,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: metaKeysCategory + ', ' + metaKeysBrand
          },
          {
            hid: 'description',
            name: 'description',
            content: metaDescCategory + ', ' + metaDescBrand
          },
          ...i18nHead.meta
        ]
      }
    } else if (this.category) {
      const i18nHead = this.$nuxtI18nHead({addSeoAttributes: true})
      return {
        title: metaTitleCategory,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: metaKeysCategory
          },
          {
            hid: 'description',
            name: 'description',
            content: metaDescCategory
          },
          ...i18nHead.meta
        ]
      }
    } else if (this.brand) {
      const i18nHead = this.$nuxtI18nHead({addSeoAttributes: true})
      return {
        title: metaTitleBrand,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: metaKeysBrand
          },
          {
            hid: 'description',
            name: 'description',
            content: metaDescBrand
          },
          ...i18nHead.meta
        ]
      }
    }
  },
  methods: {
    filtration(e, isPaginate = false) {
      if (!isPaginate) {
        this.filter.page = 1;
      }
      let pathName = $nuxt.$route.name;
      let params = {
        catalog: this.filter.category_slug,
        brand: this.filter.brand_slug,
        page: 'page-' + this.filter.page
      };
      for (const [key, value] of Object.entries(this.filter)) {
        if (key !== 'brand_slug' && key !== 'category_slug' && key !== 'page' && key !== 'language') {
          if (value) {
            if (!params.filtration) {
              this.$set(params, 'filtration', {[key]: value});
            } else {
              this.$set(params.filtration, key, value);
            }
          }
        }
      }
      if (params.filtration) {
        params.filtration = JSON.stringify(params.filtration);
      }
      this.$router.push({name: pathName, params})
    },
    addToCart(product) {
      this.$store.commit('cart/add', product);
      document.getElementsByClassName('shoppingCartFromRightButtonBody_button_icon')[0].classList.add('cart-icon-rotate');
      document.getElementById('cartModal').classList.add('cart-modal-bounce');
      setTimeout(function () {
        document.getElementsByClassName('shoppingCartFromRightButtonBody_button_icon')[0].classList.remove('cart-icon-rotate');
      }, 601);
      setTimeout(function () {
        document.getElementById('cartModal').classList.remove('cart-modal-bounce');
      }, 1001);
    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
    // addToFavorites(product) {
    //   this.$store.commit('favorites/add', product);
    // },
    // deleteFromFavorites(productId) {
    //   this.$store.commit('favorites/delete', productId);
    // },
    updateQuantity(params) {
      this.$store.commit('cart/updateQuantity', params);
    },
    openMobilFilterSection() {
      if (!this.mobileFilterModal) {
        document.getElementById('mobileFilterModal').classList.add("open-cart-modal");
        document.getElementById('cartModal').classList.add("z-index-minus");
        document.getElementById('mobileHeader').classList.add("main-blured");
        document.getElementById('products').classList.add("main-blured");
        document.getElementsByTagName('footer')[0].classList.add("main-blured");
        document.getElementsByTagName('html')[0].classList.add("overflow-y-hidden");
        this.mobileFilterModal = true;
      } else {
        document.getElementById('mobileFilterModal').classList.remove("open-cart-modal");
        document.getElementById('cartModal').classList.remove("z-index-minus");
        document.getElementById('mobileHeader').classList.remove("main-blured");
        document.getElementById('products').classList.remove("main-blured");
        document.getElementsByTagName('footer')[0].classList.remove("main-blured");
        document.getElementsByTagName('html')[0].classList.remove("overflow-y-hidden");
        this.mobileFilterModal = false;
      }
    },
    mobileFilterSearch() {
      this.filtration();
      this.openMobilFilterSection();
    }
  }
}
</script>

<style scoped>
#products {
  margin-top: 18vh;
}

.products_filter {
  width: 15%;
}

.products_show {
  width: 80%;
}
</style>
