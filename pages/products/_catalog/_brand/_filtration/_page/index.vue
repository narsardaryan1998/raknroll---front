<template>
  <div id="products" class="container container-padding page-container-padding-bottom">
    <div class="products_top_section d-flex justify-space-between align-center margin-bottom-from-header">
      <div class="products_top_section_header d-flex align-center">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="0"
          data-aos-duration="1000">
          <hr class="products_top_section_header_hr">
        </div>
        <div class="ml-4"
             data-aos="fade-right"
             data-aos-once="true"
             data-aos-delay="0"
             data-aos-duration="1000">
          <span v-if="!category_name"> {{ $t('allOfCatalog') }}</span>
          <span v-else> {{ category_name }}</span>
        </div>
      </div>
      <div class="products_top_section_search"
           data-aos="fade-left"
           data-aos-delay="0"
           data-aos-duration="1000">
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
      <div class="products_show"
           data-aos="fade"
           data-aos-once="true"
           data-aos-delay="1500"
           data-aos-duration="1000">
        <div class="row">
          <div :class="filter.display_quantity > 8 ? 'col-md-2 col-sm-6 py-0' : 'col-md-3 col-sm-6 py-0'"
               v-for="(item, index) in $store.getters['products/data'].products" :key="index">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product text-center"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <NuxtLink :to='localePath("/product/show/" + item.slug)'>
                  <v-img class="products_show_product_image"
                         :class="{ 'opacity-is-50': hover }"
                         :src="'http://raknroll.ua/' + item.image"
                         :lazy-src="'http://raknroll.ua/' + item.image">
                  </v-img>
                </NuxtLink>
              </v-hover>
              <v-card-title class="justify-center">{{ item.name }}</v-card-title>
              <v-card-text>
                <v-row
                  class="mx-0 justify-center"
                  align="center">
                  <v-rating
                    :value="parseFloat(item.rating)"
                    color="red darken-4"
                    dense
                    half-increments
                    readonly
                    size="14">
                  </v-rating>
                  <div class="grey--text ml-2 font-brigada">({{ item.reviews_count }}) | {{ item.final_price }} ₴
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>{{ item.short_description }}
                </div>
              </v-card-text>
              <v-card-actions class="px-0">
                <v-bottom-navigation
                  class="products_show_product"
                  grow>
                  <v-btn class="px-0 mw-100"
                         @click="addToCart(item.id)">
                    <span>{{ $t('userButtons.cart') }}</span>
                    <v-icon>mdi-cart</v-icon>
                  </v-btn>
                  <v-btn class="px-0 mw-100">
                    <span>{{ $t('userButtons.favorites') }}</span>
                    <v-icon>mdi-heart</v-icon>
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
        <div data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="500"
             data-aos-duration="1000">
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
        <div class="margin-top-from-header"
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="700"
             data-aos-duration="1000">
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
        <div class="margin-top-from-header"
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="900"
             data-aos-duration="1000">
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
        <div class="margin-top-from-header display-quantity-select"
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="1000"
             data-aos-duration="1000">
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
        <div class="mt-5"
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="1100"
             data-aos-duration="1000">
          <v-switch
            @change="filtration"
            v-model="filter.recommended"
            :label="$t('recommended')"
            color="red darken-4"
            hide-details>
          </v-switch>
        </div>
        <div class="mt-5"
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="1250"
             data-aos-duration="1000">
          <v-switch
            @change="filtration"
            v-model="filter.discounted"
            :label="$t('discounted')"
            color="red darken-4"
            hide-details>
          </v-switch>
        </div>
        <div class="mt-5"
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="1400"
             data-aos-duration="1000">
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
      category_name: '',
      data: [],
      displayQuantityArray: [8, 12, 18, 24, 30],
      filter: {
        language: this.$i18n.locale,
        category_slug: this.$route.params.catalog,
        brand_slug: this.$route.params.brand,
        page: 1,
        display_quantity: 12,
        search: '',
        recommended: false,
        bestseller: false,
        discounted: false,
        final_price: [0, 23000]
      }
    }
  },
  async fetch() {
    if (this.$route.params.filtration) {
      this.$set(this.$route.params, 'filtration', JSON.parse(this.$route.params.filtration));
      for (const [key, value] of Object.entries(this.$route.params.filtration)) {
        this.$set(this.filter, key, value);
      }
    }
    this.$set(this.filter, 'page', parseInt(this.$route.params.page.replace('page-', '')));
    this.$set(this.filter, 'category_slug', this.$route.params.catalog);
    this.$set(this.filter, 'brand_slug', this.$route.params.brand);
    await this.$store.dispatch('products/getData', this.filter);
    if (this.$store.getters['products/data'].paginateCount < this.filter.page) {
      this.$set(this.filter, 'page', this.$store.getters['products/data'].paginateCount);
    }
    let category = this.$store.getters['products/data'].categories.find(category => category.slug === this.filter.category_slug);
    this.category_name = category ? category.name : '';
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
    addToCart(productId) {
      this.$store.dispatch('cart/store', {
        productId
      }).then(response => {
        if (response.data.success) {
          this.$store.dispatch('cart/getCount');
        }
      });
    }
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
