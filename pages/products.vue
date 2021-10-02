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
          :label="$t('searchProduct')"
          prepend-icon="mdi-shopping-search"
        ></v-text-field>
      </div>
    </div>
    <div class="products_and_filter d-flex mt-5 filter-div-margin justify-space-between">
      <div class="products_show">
        <div class="row">
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7002-2+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7002-2+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7063-16+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7063-16+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7072-18+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7072-18+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7060-15+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7060-15+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7063-16+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7063-16+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7002-2+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7002-2+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7060-15+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7060-15+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7072-18+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7072-18+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7002-2+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7002-2+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7063-16+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7063-16+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7072-18+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7072-18+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
          <div class="col-md-2 col-sm-6">
            <v-card
              elevation="0"
              dark
              class="mx-auto my-12 mt-0 products_show_product cursor-pointer"
              max-width="374">
              <v-hover
                v-slot="{ hover }">
                <v-img class="products_show_product_image"
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/LUK_7060-15+.png')"
                       :lazy-src="require('~/assets/images/products/LUK_7060-15+.png')">
                </v-img>
              </v-hover>
              <v-card-title>Cafe Badilasdasico</v-card-title>
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
                    4.5 (413) | 360 $
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                </div>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                  seating.
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
      </div>
      <div class="products_filter d-flex flex-column">
        <div>
          <v-select
            :items="['Piva', 'Rak', 'Arax', 'Dzuk']"
            menu-props="auto"
            v-model="filter.category_id"
            color="red darken-4"
            :placeholder="$t('allOfCatalog')"
            class="pt-0 mt-0"
            hide-details
            item-color="red darken-4"
            single-line>
          </v-select>
        </div>
        <div class="filter-div-margin">
          <v-select
            :items="['Heiniken', 'Kilika', 'Gyumri']"
            menu-props="auto"
            v-model="filter.brand_id"
            color="red darken-4"
            :placeholder="$t('allBrands')"
            class="pt-0 mt-0"
            hide-details
            item-color="red darken-4"
            single-line>
          </v-select>
        </div>
        <div class="filter-div-margin">
          <div class="row">
            <div class="col-12">
              <span>{{ $t('price') }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col px-4 pt-0">
              <v-range-slider
                v-model="filter.price"
                :min="0"
                color="red darken-4"
                :max="68754278"
                hide-details
                class="align-center">
                <template v-slot:prepend>
                  <v-text-field
                    :value="filter.price[0]"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    color="red darken-4"
                    type="number"
                    style="width: 60px"
                    @change="$set(filter.price, 0, $event)"
                  ></v-text-field>
                </template>
                <template v-slot:append>
                  <v-text-field
                    :value="filter.price[1]"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    color="red darken-4"
                    type="number"
                    style="width: 60px"
                    @change="$set(filter.price, 1, $event)"
                  ></v-text-field>
                </template>
              </v-range-slider>
            </div>
          </div>
        </div>
        <div class="filter-div-margin">
          <v-switch
            v-model="filter.is_recommended"
            :label="$t('recommended')"
            color="red darken-4"
            value="red darken-4"
            hide-details
          ></v-switch>
        </div>
        <div class="mt-5">
          <v-switch
            v-model="filter.is_discounted"
            :label="$t('discounted')"
            color="red darken-4"
            value="red darken-4"
            hide-details
          ></v-switch>
        </div>
        <div class="mt-5">
          <v-switch
            v-model="filter.best_seller"
            :label="$t('bestseller')"
            color="red darken-4"
            value="red darken-4"
            hide-details
          ></v-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      category_name: '',
      filter: {
        category_id: '',
        search: '',
        brand_id: '',
        is_recommended: false,
        best_seller: false,
        is_discounted: false,
        price: [0, 68754278]
      }
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

.filter-div-margin {
  margin-top: 3vw !important;
}

.products_show_product_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}
</style>
