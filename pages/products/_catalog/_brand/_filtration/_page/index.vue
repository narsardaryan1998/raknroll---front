<template>
  <div>
    <div id="products" class="page-container-padding-bottom">
      <client-only>
        <div class="products_top_section page-header width-100 margin-bottom-10vh"
             data-aos="fade-up"
             data-aos-duration="1000">
          <v-img
            class="width-100 height-100"
            :src="filter.category_slug === 'pivo' ? 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22852551/beer.jpg' : filter.category_slug === 'roli' ? baseUrl + 'images/photo-1583623025817-d180a2221d0a.jpg' : filter.category_slug === 'napoji' ? 'https://as1.ftcdn.net/v2/jpg/03/69/56/02/1000_F_369560255_ze7zKUVKic1yQKzmXOSym2shcEyGqKPg.jpg' : filter.category_slug === 'zakuski' ? 'https://as2.ftcdn.net/v2/jpg/02/94/39/09/1000_F_294390925_VqqKV3fbFnxBemLkPTAfHvOOnebcnHY8.jpg' : filter.category_slug === 'alkogolni-napoji' ? baseUrl + 'images/adam-jaime-dmkmrNptMpw-unsplash.jpg' : filter.category_slug === 'v-yalena-riba' ? 'https://as1.ftcdn.net/v2/jpg/02/05/02/74/1000_F_205027412_YirrLjjgtP0iNFYjmofSLC4kmBwG3EiR.jpg' : filter.category_slug === 'sidr' ? 'https://as2.ftcdn.net/v2/jpg/00/96/35/77/1000_F_96357769_jqkgF0fQbJKIAw1OfhybalW1sbZknE0M.jpg' : baseUrl + 'images/1000_F_379179036_SkNiYp7Pu0DBaPEHPL33p5gMEAwXg93z.jpg'"
            :lazy-src="filter.category_slug === 'pivo' ? 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22852551/beer.jpg' : filter.category_slug === 'roli' ? baseUrl + 'images/photo-1583623025817-d180a2221d0a.jpg' : filter.category_slug === 'napoji' ? 'https://as1.ftcdn.net/v2/jpg/03/69/56/02/1000_F_369560255_ze7zKUVKic1yQKzmXOSym2shcEyGqKPg.jpg' : filter.category_slug === 'zakuski' ? 'https://as2.ftcdn.net/v2/jpg/02/94/39/09/1000_F_294390925_VqqKV3fbFnxBemLkPTAfHvOOnebcnHY8.jpg' : filter.category_slug === 'alkogolni-napoji' ? baseUrl + 'images/adam-jaime-dmkmrNptMpw-unsplash.jpg' : filter.category_slug === 'v-yalena-riba' ? 'https://as1.ftcdn.net/v2/jpg/02/05/02/74/1000_F_205027412_YirrLjjgtP0iNFYjmofSLC4kmBwG3EiR.jpg' : filter.category_slug === 'sidr' ? 'https://as2.ftcdn.net/v2/jpg/00/96/35/77/1000_F_96357769_jqkgF0fQbJKIAw1OfhybalW1sbZknE0M.jpg' : baseUrl + 'images/1000_F_379179036_SkNiYp7Pu0DBaPEHPL33p5gMEAwXg93z.jpg'"
            cover>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000">
              <p class="width-100 text-center" v-if="!category_name"> {{ $t('allOfCatalog') }}</p>
              <p class="width-100 text-center" v-else> {{ category_name }}</p>
            </div>
          </v-img>
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
                <v-hover
                  v-slot="{ hover }">
                  <NuxtLink :to='localePath("/product/show/" + product.slug)'>
                    <v-img class="card_product_image width-100 transition-05"
                           :class="{ 'scale-1-2': hover }"
                           :src="baseUrl + product.image"
                           :lazy-src="baseUrl + product.image"
                           contain>
                    </v-img>
                  </NuxtLink>
                </v-hover>
                <v-card-title class="font-weight-bold px-2 pb-0 pt-2">{{ product.name }}</v-card-title>
                <v-card-text class="grey--text text--lighten-4 font-weight-bold text-center font-brigada">
                  <div class="pl-5 pt-4 text-left" v-if="product.weight && product.min_quantity">
                    {{ $t('minimum') + ': ' + product.min_quantity }}
                  </div>
                  <div
                    :class="product.min_quantity || product.weight ? 'pl-2 pt-2 d-flex justify-space-between' : 'pl-2 pt-2 d-flex justify-end'">
                    <div class="pl-3" v-if="product.weight">
                      {{ '1 ' + $t('portion') + ' / ' + product.weight + $t('shortGram') }}
                    </div>
                    <div class="pl-3" v-else-if="product.min_quantity">
                      {{ $t('minimum') + ': ' + product.min_quantity }}
                    </div>
                    <div class="pr-3"
                         v-if="$store.getters['cart/data'].find(cart => product.id === cart.id) && $store.getters['cart/data'].find(cart => product.id === cart.id).qty > 1">
                      {{ $t('price') + ': ' + product.final_price }} ₴ x
                      {{ $store.getters['cart/data'].find(cart => product.id === cart.id).qty }}
                    </div>
                    <div v-else class="pr-3">
                      {{ $t('price') + ': ' + product.final_price }} ₴
                    </div>
                  </div>
                  <div class="my-4 grey--text text--lighten-1">{{ product.short_description }}
                  </div>
                </v-card-text>
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
                             v-if="!$store.getters['favorites/storageData'].find(favorite => product.id === favorite.id)"
                             @click="addToFavorites(product)">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('favorites') }}</span>
                        <v-icon color="grey lighten-2">mdi-heart</v-icon>
                      </v-btn>
                      <v-btn class="p-0 width-100"
                             v-else
                             max-width="100%"
                             @click="deleteFromFavorites(product.id)">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('favorites') }}</span>
                        <v-icon
                          color="grey lighten-2">mdi-heart-off
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
                      <v-btn class="p-0 mw-100"
                             v-if="!$store.getters['favorites/storageData'].find(favorite => product.id === favorite.id)"
                             @click="addToFavorites(product)">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('favorites') }}</span>
                        <v-icon color="grey lighten-2">mdi-heart</v-icon>
                      </v-btn>
                      <v-btn class="p-0 mw-100"
                             v-else
                             @click="deleteFromFavorites(product.id)">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('favorites') }}</span>
                        <v-icon
                          color="grey lighten-2">mdi-heart-off
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
    <div id="mobileFilterModal" class="transition-05">
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
      displayQuantityArray: [8, 12, 16, 20, 24],
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
    let category = store.getters['products/data'].categories.find(category => category.slug === filter.category_slug);
    const category_name = category ? category.name : '';
    return {filter, category_name}
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
    addToFavorites(product) {
      this.$store.commit('favorites/add', product);
    },
    deleteFromFavorites(productId) {
      this.$store.commit('favorites/delete', productId);
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
</style>
