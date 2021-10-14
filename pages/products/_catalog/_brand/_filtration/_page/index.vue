<template>
  <div id="products" class="container container-padding">
    <div class="products_top_section d-flex justify-space-between align-center">
      <div class="products_top_section_header d-flex align-center">
        <div>
          <hr class="products_top_section_header_hr">
        </div>
        <div class="ml-4">
          <span v-if="!filter.category_name"> {{ $t('allOfCatalog') }}</span>
          <span v-else> {{ filter.category_name }}</span>
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
    <div class="products_and_filter d-flex mt-5 margin-bottom-from-header justify-space-between">
      <div class="products_show">
        <div class="row">
          <div class="col-md-2 col-sm-6" v-for="item in $store.getters['products/data'].products" :key="item.slug">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="'http://raknroll.ua/' + item.image"
                       :lazy-src="'http://raknroll.ua/' + item.image">
                </v-img>
              </v-hover>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="red darken-4"
                    dense
                    half-increments
                    readonly
                    size="14">
                  </v-rating>
                  <div class="grey--text ml-4">
                    4.5 (413) | {{ item.final_price }} $
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
                  <v-btn class="px-0 mw-100">
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
        <div class="row products_show_pagination">
          <v-pagination
            color="black"
            v-if="$store.getters['products/data'].paginateCount > 1"
            v-model="filter.page"
            :length="$store.getters['products/data'].paginateCount"
            :total-visible="7"
            @input="filtration($event, true)">
          </v-pagination>
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
        <div class="margin-bottom-from-header">
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
        <div class="margin-bottom-from-header">
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
        <div class="margin-bottom-from-header">
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
        category_name: '',
        data: [],
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
    },
    methods: {
      filtration(e, isPaginate = false) {
        if (!isPaginate) {
          console.log('acsd');
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
      }
    }
  }
</script>

<style scoped>
  #products {
    font-family: 'Caveat', cursive;
    margin-top: 9vw;
  }

  .products_top_section_header_hr {
    width: 8vw;
    border: 0.075vw solid #ffffff;
    background-color: #ffffff;
  }

  .products_top_section_header {
    font-size: 3.5vw;
    width: 40%;
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
