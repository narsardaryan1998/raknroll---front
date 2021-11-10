<template>
  <div id="products" class="container container-padding page-container-padding-bottom">
    <div class="products_top_section d-flex justify-space-between align-center margin-bottom-from-header">
      <div class="products_top_section_header d-flex align-center">
        <div>
          <hr class="products_top_section_header_hr">
        </div>
        <div class="ml-4">
          <span v-if="!category_name"> {{ $t('allOfCatalog') }}</span>
          <span v-else> {{ category_name }}</span>
        </div>
      </div>
      <div class="products_top_section_search">
        <v-text-field
          hide-details
          v-model="filter.search"
          color="red darken-4"
          @keyup.enter="(e) => {e.target.blur()}"
          @blur="filtration"
          :label="$t('searchProduct')"
          prepend-icon="mdi-shopping-search">
        </v-text-field>
      </div>
    </div>
    <div class="products_and_filter d-flex justify-space-between">
      <div class="products_show">
        <div class="row">
          <div class="py-0 col-sm-4 col-6 col-md-2"
               v-for="(product, index) in $store.getters['products/data'].products" :key="index">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <NuxtLink :to='localePath("/product/show/" + product.slug)'>
                  <v-img class="products_show_product_image"
                         :class="{ 'opacity-is-50': hover }"
                         :src="'http://raknroll.ua/' + product.image"
                         :lazy-src="'http://raknroll.ua/' + product.image">
                  </v-img>
                </NuxtLink>
              </v-hover>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-text class="p-0">
                <v-row
                  class="mx-0"
                  align="center">
                  <v-rating
                    :value="parseFloat(product.rating)"
                    color="red darken-4"
                    dense
                    half-increments
                    readonly
                    size="14">
                  </v-rating>
                  <div class="grey--text ml-2 font-brigada">| {{ product.final_price }} ₴
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>{{ product.short_description }}
                </div>
              </v-card-text>
              <v-card-actions class="p-0">
                <v-bottom-navigation
                  class="products_show_product"
                  grow>
                  <v-btn class="p-0 mw-100"
                         v-if="!$store.getters['cart/data'].find(cart => product.id === cart.id)"
                         @click="addToCart(product)">
                    <span>{{ $t('cart') }}</span>
                    <v-icon>mdi-cart</v-icon>
                  </v-btn>
                  <v-btn class="p-0 mw-100"
                         v-else
                         @click="deleteFromCart(product.id)">
                    <span>{{ $t('cart') }}</span>
                    <v-icon
                      color="red darken-4">mdi-cart-off
                    </v-icon>
                  </v-btn>
                  <v-btn class="p-0 mw-100"
                         v-if="!$store.getters['favorites/storageData'].find(favorite => product.id === favorite.id)"
                         @click="addToFavorites(product)">
                    <span>{{ $t('favorites') }}</span>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn class="p-0 mw-100"
                         v-else
                         @click="deleteFromFavorites(product.id)">
                    <span>{{ $t('cart') }}</span>
                    <v-icon
                      color="red darken-4">mdi-heart-off
                    </v-icon>
                  </v-btn>
                </v-bottom-navigation>
              </v-card-actions>
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
      <div class="products_filter d-flex flex-column">
        <div>
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
        <div class="margin-top-from-header">
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
        <div class="margin-top-from-header">
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
        <div class="margin-top-from-header display-quantity-select">
          <v-select
            v-if="$store.getters['products/data'].paginateCount > 1"
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
        <div class="mt-5">
          <v-switch
            @change="filtration"
            v-model="filter.bestseller"
            :label="$t('bestseller')"
            color="red darken-4"
            hide-details>
          </v-switch>
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
      displayQuantityArray: [10, 15, 20, 25, 30],
    }
  },
  async asyncData({params, store, i18n}) {
    const filter = {
      language: i18n.locale,
      category_slug: params.catalog,
      brand_slug: params.brand,
      page: 1,
      display_quantity: 10,
      search: '',
      recommended: false,
      bestseller: false,
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
  }
}
</script>

<style scoped>
#products {
  margin-top: 9vw;
}

.products_top_section_header_hr {
  width: 8vw;
  border: 0.075vw solid #ffffff;
  background-color: #ffffff;
}

.products_top_section_header {
  font-size: 3.5vw;
  width: 55%;
}

.products_top_section_search {
  width: 45%;
}

.products_filter {
  width: 15%;
}

.products_show {
  width: 80%;
}

.products_show_product_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}

</style>
