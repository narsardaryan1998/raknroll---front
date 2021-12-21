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
                <p v-if="!category"
                   class="py-8 px-sm-16 px-8"
                   data-aos="fade-up"
                   data-aos-delay="300" data-aos-duration="1000"> {{ $t('allOfCatalog') }} </p>
                <p v-else
                   class="py-8 px-sm-16 px-8"
                   data-aos="fade-up"
                   data-aos-delay="300" data-aos-duration="1000"> {{ category.name }}</p>
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
          <v-dialog
            v-model="unavailableDialog"
            light
            max-width="800"
            style="z-index: 1000000">
            <v-card class="unavailable-category white-pattern-background">
              <v-card-title class="text-h4 d-flex justify-center px-3 black-text">
                <div>
                  {{ $t('unavailable') }} :(
                </div>
              </v-card-title>
              <v-card-text class="grey--text text--darken-4 subtitle-md-1 text-md-h6 px-5 font-weight-bold">
                <div class="row">
                  <div class="col-12">
                    {{ $t('unavailableCategoryDescription') }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex align-center">
                      <div>
                        <img alt="Phone" class="unavailable-category-img" src="~/assets/icons/icons8-phone-64-red.png"/>
                      </div>
                      <div class="pl-3">
                        <a class="grey--text text--darken-4" href="tel:380965990909">+38 (096) 599 - 09 - 09</a>
                        <br>
                        <a class="grey--text text--darken-4" href="tel:380935990909">+38 (093) 599 - 09 - 09</a>
                      </div>
                    </div>
                    <div class="d-flex align-center mt-4 mt-md-0">
                      <div>
                        <img class="unavailable-category-img" src="~/assets/icons/icons8-marker-641.png"/>
                      </div>
                      <div class="pl-3">
                        <a class="grey--text text--darken-4" href="javascript:void(0)">{{
                            $t('informationPart1.first') + ' ' + $t('informationPart1.second')
                          }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="font-weight-bold mr-5"
                  color="red darken-4"
                  text
                  @click="unavailableDialog = false">
                  {{ $t('ok') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <div class="row products_show_catalog_filter_for_mobile">
            <div class="col-12 col-sm-8 offset-sm-2">
              <v-select
                v-model="filter.category_slug"
                :items="$store.getters['products/data'].categories"
                :placeholder="$t('allOfCatalog')"
                class="pt-0 mt-0"
                color="white"
                filled
                hide-details
                item-color="white"
                item-text="name"
                item-value="slug"
                menu-props="auto"
                single-line
                @change="filtration">
              </v-select>
            </div>
          </div>
          <div class="row products_page_products_show margin-top-6vh">
            <div v-for="(product, index) in $store.getters['products/data'].products"
                 :key="index" class="py-0 col-sm-6 col-12 col-md-6 col-lg-3">
              <v-card
                class="mx-auto my-12 mt-0 products_show_product"
                dark
                elevation="12"
                max-width="374">
                <div v-if="product.discount" class="sale-icon-div products_sale-icon-div width-100">
                  <v-img
                    :lazy-src="require('~/assets/images/sale-icon-red-border.png')"
                    :src="require('~/assets/images/sale-icon-red-border.png')"
                    class="sale-icon-div-image position-relative float-right"
                    contain>
                    <span
                      class="sale-icon-div-text black--text black-text-shadow font-weight-bold">- {{
                        product.discount
                      }}%</span>
                  </v-img>
                </div>
                <NuxtLink :to='localePath("/product/show/" + product.slug)'>
                  <v-hover
                    v-slot="{ hover }">
                    <v-img :class="{ 'scale-1-2': hover }"
                           :lazy-src="baseUrl + product.image"
                           :src="baseUrl + product.image"
                           class="card_product_image width-100 transition-05"
                           contain>
                    </v-img>
                  </v-hover>
                  <v-card-title class="font-weight-bold px-2 pb-0 pt-2 white--text">{{ product.name }}</v-card-title>
                  <v-card-text class="grey--text text--lighten-4 font-weight-bold text-center font-brigada">
                    <div v-if="product.weight && product.min_quantity" class="pl-5 pt-4 text-left">
                      {{ $t('minimum') + ': ' + product.min_quantity }}
                    </div>
                    <div
                      :class="product.min_quantity || product.weight ? 'pl-2 pt-2 d-flex justify-space-between' : 'pl-2 pt-2 d-flex justify-end'">
                      <div v-if="product.weight" class="pl-3">
                        {{ $t('weight') + ': ' + product.weight + $t(product.unit + 'Short') }}
                      </div>
                      <div v-else-if="product.min_quantity" class="pl-3">
                        {{ $t('minimum') + ': ' + product.min_quantity }}
                      </div>
                      <div class="pr-3">
                        <div v-if="product.discount" class="d-flex flex-column">
                          <div class="grey--text text--lighten-1">
                            {{ $t('oldPrice') + ': ' + product.initial_price }} грн
                          </div>
                          <div>
                            {{ $t('priceWithDiscount') + ': ' + product.final_price }} грн
                          </div>
                        </div>
                        <div v-else>
                          {{ $t('price') + ': ' + product.final_price }} грн
                        </div>
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
                             max-width="100%"
                             @click="$router.push(localePath('/product/show/' + product.slug))">
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
                          color="grey lighten-2"
                          icon
                          @click="updateQuantity({productId: product.id, value: -1})">
                          <v-icon>mdi-minus</v-icon>
                        </v-btn>
                      </div>
                      <div class="cart_product_counter_row_quantity text-center font-brigada px-5 width-50">
                        <p class="show_counter_quantity mb-0">
                          {{ $store.getters['cart/data'].find(cart => product.id === cart.id).qty }}</p>
                      </div>
                      <div class="d-flex justify-end">
                        <v-btn
                          color="grey lighten-2"
                          icon
                          @click="updateQuantity({productId: product.id, value: 1})">
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
                             max-width="100%"
                             @click="$router.push(localePath('/product/show/' + product.slug))">
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
                v-if="$store.getters['products/data'].paginateCount > 1"
                v-model="filter.page"
                :length="$store.getters['products/data'].paginateCount"
                :total-visible="7"
                class="font-brigada"
                color="red darken-4"
                @input="filtration($event, true)">
              </v-pagination>
            </div>
          </div>
        </div>
        <div class="products_filter d-md-flex d-none flex-column">
          <div>
            <v-text-field
              v-model="filter.search"
              :label="$t('searchProduct')"
              append-icon="mdi-shopping-search"
              color="red darken-4"
              dark
              hide-details
              @blur="filtration"
              @keyup.enter="(e) => {e.target.blur()}">
            </v-text-field>
          </div>
          <div class="margin-top-6vh">
            <v-select
              v-model="filter.category_slug"
              :items="$store.getters['products/data'].categories"
              :placeholder="$t('allOfCatalog')"
              class="pt-0 mt-0"
              color="red darken-4"
              hide-details
              item-color="red darken-4"
              item-text="name"
              item-value="slug"
              menu-props="auto"
              single-line
              @change="filtration">
            </v-select>
          </div>
          <!--          <div class="margin-top-6vh">-->
          <!--            <v-select-->
          <!--              v-model="filter.brand_slug"-->
          <!--              :items="$store.getters['products/data'].brands"-->
          <!--              :placeholder="$t('allBrands')"-->
          <!--              class="pt-0 mt-0"-->
          <!--              color="red darken-4"-->
          <!--              hide-details-->
          <!--              item-color="red darken-4"-->
          <!--              item-text="name"-->
          <!--              item-value="slug"-->
          <!--              menu-props="auto"-->
          <!--              single-line-->
          <!--              @change="filtration">-->
          <!--            </v-select>-->
          <!--          </div>-->
          <div class="margin-top-6vh display-quantity-select">
            <v-select
              v-model="filter.display_quantity"
              :items="displayQuantityArray"
              class="pt-0 mt-0 text-center"
              color="red darken-4"
              hide-details
              item-color="red darken-4"
              menu-props="auto"
              single-line
              @change="filtration">
            </v-select>
          </div>
          <div class="mt-5">
            <v-switch
              v-model="filter.recommended"
              :label="$t('recommended')"
              color="red darken-4"
              hide-details
              @change="filtration">
            </v-switch>
          </div>
          <div class="mt-5">
            <v-switch
              v-model="filter.discounted"
              :label="$t('discounted')"
              color="red darken-4"
              hide-details
              @change="filtration">
            </v-switch>
          </div>
        </div>
      </div>
    </div>
    <div id="mobileFilterModal">
      <div class="mobileFilterModal_button red-pattern-background justify-center">
        <v-btn
          class="ma-2 border-none m-0"
          fab
          outlined
          small
          @click="openMobilFilterSection">
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
              <a class="close-button float-right"
                 href="javascript:void(0)"
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
                v-model="filter.search"
                :label="$t('searchProduct')"
                append-icon="mdi-shopping-search"
                color="white"
                dark
                filled
                hide-details>
              </v-text-field>
            </div>
          </div>
          <!--          <div class="row margin-top-4vh">-->
          <!--            <div class="col-12">-->
          <!--              <v-select-->
          <!--                v-model="filter.brand_slug"-->
          <!--                :items="$store.getters['products/data'].brands"-->
          <!--                :placeholder="$t('allBrands')"-->
          <!--                class="pt-0 mt-0"-->
          <!--                color="white"-->
          <!--                filled-->
          <!--                hide-details-->
          <!--                item-color="white"-->
          <!--                item-text="name"-->
          <!--                item-value="slug"-->
          <!--                menu-props="auto"-->
          <!--                single-line>-->
          <!--              </v-select>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="row margin-top-4vh">
            <div class="display-quantity-select col-12">
              <v-select
                v-model="filter.display_quantity"
                :items="displayQuantityArray"
                :label="$t('displayQuantity')"
                class="pt-0 mt-0 text-center"
                color="white"
                filled
                hide-details
                item-color="white"
                menu-props="auto">
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
                class="font-weight-bold width-100"
                large
                light
                @click="mobileFilterSearch">
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
      unavailableDialog: false,
      displayQuantityArray: [8, 12, 16],
      baseUrl: process.env.BASE_URL
    }
  },
  async asyncData({params, store, i18n, error}) {
    const filter = {
      language: i18n.locale,
      category_slug: params.catalog,
      brand_slug: params.brand,
      page: 1,
      display_quantity: 8,
      search: '',
      recommended: false,
      discounted: false
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
    if (!category || !brand) {
      error({statusCode: 404, message: 'Post not found'})
    }


    return {filter, category, brand}
  },
  head() {
    let metaTitleCategory = this.category.meta_title ? this.category.meta_title : this.category.name;
    let metaKeysCategory = this.category.meta_keys ? this.category.meta_keys : this.category.name;
    let metaDescCategory = this.category.meta_description ? this.category.meta_description : this.category.description;
    let metaTitleBrand = this.brand.meta_title ? this.brand.meta_title : this.brand.name;
    let metaKeysBrand = this.brand.meta_keys ? this.brand.meta_keys : this.brand.name;
    let metaDescBrand = this.brand.meta_keys ? this.brand.meta_keys : this.brand.name;

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
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$store.getters['products/data'].products.length ? this.baseUrl + this.$store.getters['products/data'].products[0].image : '/favicon.ico'
        },
        ...i18nHead.meta
      ]
    }
  },
  mounted() {
    if (this.filter.category_slug !== 'all-catalog' && this.filter.category_slug !== 'roli') {
      this.unavailableDialog = true;
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

.unavailable-category-img {
  width: 40px;
}
</style>
