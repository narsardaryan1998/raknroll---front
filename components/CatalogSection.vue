<template>
  <section id="catalogSection" class="margin-top-6vh">
    <div class="container container-padding">
      <div
        class="catalogSection_top_section align-center d-flex justify-space-between component_and_page_header_section">
        <div class="component-top-header component-top-header d-flex align-center"
             data-aos="fade-up"
             data-aos-duration="1000">
          <div class="ml-4 black-text-shadow black--text white-brush-background font-caveat">
            <p class="py-8 px-12"
               data-aos="fade-up"
               data-aos-duration="1000"
               style="line-height: normal">{{ $t('ourCatalog') }}</p>
          </div>
        </div>
        <div class="page_description margin-left-10vw white--text white-text-shadow"
             data-aos="fade-up"
             data-aos-delay="800"
             data-aos-duration="1000">
          {{ $t('outCatalogDescription') }}
        </div>
      </div>
    </div>
    <div class="catalogSection_articles cursor-pointer margin-top-6vh">
      <v-hover
        v-slot="{ hover }">
        <div class="content-height catalogSection_beer inset-shadow-from-top"
             data-aos="fade-up"
             data-aos-delay="460"
             data-aos-duration="1000">
          <NuxtLink :to='localePath("/products/pivo/all-brands/page-1")'>
            <v-img
              :class="hover ? ' scale-1-2' : ''"
              :lazy-src="require('~/assets/images/catalog/beer.jpg')"
              :src="require('~/assets/images/catalog/beer.jpg')"
              class="width-100 height-100 transition-05"
              cover>
              <div class="d-table width-100 height-100">
                <div :class="hover ? 'opacity-1-transition' : ''"
                     class="catalogSection_articles_hover width-100 height-100">
                  <span class="catalogSection_articles_hover_header">{{ $t('beer') }}</span>
                </div>
              </div>
            </v-img>
          </NuxtLink>
        </div>
      </v-hover>
      <v-hover
        v-slot="{ hover }">
        <div class="content-height catalogSection_snacks inset-shadow-from-top"
             data-aos="fade-up"
             data-aos-delay="950"
             data-aos-duration="1000">
          <NuxtLink :to='localePath("/products/zakuski/all-brands/page-1")'>
            <v-img
              :class="hover ? ' scale-1-2' : ''"
              :lazy-src="require('~/assets/images/catalog/snacks.jpg')"
              :src="require('~/assets/images/catalog/snacks.jpg')"
              class="width-100 height-100 transition-05"
              position="left">
              <div class="d-table width-100 height-100">
                <div :class="hover ? 'opacity-1-transition' : ''"
                     class="catalogSection_articles_hover width-100 height-100">
                  <span class="catalogSection_articles_hover_header">{{ $t('snacks') }}</span>
                </div>
              </div>
            </v-img>
          </NuxtLink>
        </div>
      </v-hover>
      <v-hover
        v-slot="{ hover }">
        <div class="content-height catalogSection_crayfish inset-shadow-from-top"
             data-aos="fade-up"
             data-aos-delay="200"
             data-aos-duration="1000">
          <NuxtLink :to='localePath("/products/raki/all-brands/page-1")'>
            <v-img
              :class="hover ? ' scale-1-2' : ''"
              :lazy-src="require('~/assets/images/catalog/crayfish.png')"
              :src="require('~/assets/images/catalog/crayfish.png')"
              class="width-100 height-100 transition-05">
              <div class="d-table width-100 height-100">
                <div :class="hover ? 'opacity-1-transition' : ''"
                     class="catalogSection_articles_hover width-100 height-100">
                  <span class="catalogSection_articles_hover_header">{{ $t('crayfish') }}</span>
                </div>
              </div>
            </v-img>
          </NuxtLink>
        </div>
      </v-hover>
      <v-hover
        v-slot="{ hover }">
        <div class="content-height catalogSection_dried-fish inset-shadow-from-top"
             data-aos="fade-up"
             data-aos-delay="1100"
             data-aos-duration="1000">
          <NuxtLink :to='localePath("/products/v-yalena-riba/all-brands/page-1")'>
            <v-img
              :class="hover ? ' scale-1-2' : ''"
              :lazy-src="require('~/assets/images/catalog/dried-fish.png')"
              :src="require('~/assets/images/catalog/dried-fish.png')"
              class="width-100 height-100 transition-05"
              position="center">
              <div class="d-table width-100 height-100">
                <div :class="hover ? 'opacity-1-transition' : ''"
                     class="catalogSection_articles_hover width-100 height-100">
                  <span class="catalogSection_articles_hover_header">{{ $t('driedFish') }}</span>
                </div>
              </div>
            </v-img>
          </NuxtLink>
        </div>
      </v-hover>
      <v-hover
        v-slot="{ hover }">
        <div class="content-height catalogSection_alcohol inset-shadow-from-bottom"
             data-aos="fade-up"
             data-aos-delay="400"
             data-aos-duration="1000">
          <NuxtLink :to='localePath("/products/alkogolni-napoji/all-brands/page-1")'>
            <v-img
              :class="hover ? ' scale-1-2' : ''"
              :lazy-src="require('~/assets/images/catalog/alcohol.png')"
              :src="require('~/assets/images/catalog/alcohol.png')"
              class="width-100 height-100 transition-05">
              <div class="d-table width-100 height-100">
                <div :class="hover ? 'opacity-1-transition' : ''"
                     class="catalogSection_articles_hover width-100 height-100">
                  <span class="catalogSection_articles_hover_header">{{ $t('alcoholicDrinks') }}</span>
                </div>
              </div>
            </v-img>
          </NuxtLink>
        </div>
      </v-hover>
      <v-hover
        v-slot="{ hover }">
        <div class="content-height catalogSection_rolls inset-shadow-from-bottom"
             data-aos="fade-up"
             data-aos-delay="100"
             data-aos-duration="1000">
          <NuxtLink :to='localePath("/products/roli/all-brands/page-1")'>
            <v-img
              :class="hover ? ' scale-1-2' : ''"
              :lazy-src="require('~/assets/images/catalog/rolls.png')"
              :src="require('~/assets/images/catalog/rolls.png')"
              class="width-100 height-100 transition-05">
              <div class="d-table width-100 height-100">
                <div :class="hover ? 'opacity-1-transition' : ''"
                     class="catalogSection_articles_hover width-100 height-100">
                  <span class="catalogSection_articles_hover_header">{{ $t('roll') }}</span>
                </div>
              </div>
            </v-img>
          </NuxtLink>
        </div>
      </v-hover>
      <v-hover
        v-slot="{ hover }">
        <div class="content-height catalogSection_drinks inset-shadow-from-bottom"
             data-aos="fade-up"
             data-aos-delay="800"
             data-aos-duration="1000">
          <NuxtLink :to='localePath("/products/napoji/all-brands/page-1")'>
            <v-img
              :class="hover ? ' scale-1-2' : ''"
              :lazy-src="require('~/assets/images/catalog/beverages.png')"
              :src="require('~/assets/images/catalog/beverages.png')"
              class="width-100 height-100 transition-05">
              <div class="d-table width-100 height-100">
                <div :class="hover ? 'opacity-1-transition' : ''"
                     class="catalogSection_articles_hover width-100 height-100">
                  <span class="catalogSection_articles_hover_header">{{ $t('beverages') }}</span>
                </div>
              </div>
            </v-img>
          </NuxtLink>
        </div>
      </v-hover>
      <v-hover
        v-slot="{ hover }">
        <div class="content-height catalogSection_cider inset-shadow-from-bottom"
             data-aos="fade-up"
             data-aos-delay="300"
             data-aos-duration="1000">
          <NuxtLink :to='localePath("/products/sidr/all-brands/page-1")'>
            <v-img
              :class="hover ? ' scale-1-2' : ''"
              :lazy-src="require('~/assets/images/catalog/cider.png')"
              :src="require('~/assets/images/catalog/cider.png')"
              class="width-100 height-100 transition-05"
              position="right">
              <div class="d-table width-100 height-100">
                <div :class="hover ? 'opacity-1-transition' : ''"
                     class="catalogSection_articles_hover width-100 height-100">
                  <span class="catalogSection_articles_hover_header">{{ $t('cider') }}</span>
                </div>
              </div>
            </v-img>
          </NuxtLink>
        </div>
      </v-hover>
    </div>
  </section>
</template>

<script>
export default {
  name: "CatalogSection",
  data() {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.catalogSection_articles {
  width: 100%;
  height: 600px;
  position: relative;
}

#catalogSection .content-height {
  overflow: hidden;
  position: absolute;
  height: 300px;
}

#catalogSection .catalogSection_beer {
  top: 0;
  left: 0;
  width: 25%;
}

#catalogSection .catalogSection_snacks {
  top: 0;
  left: 25%;
  width: 20%;
}

#catalogSection .catalogSection_crayfish {
  top: 0;
  left: 45%;
  width: 33%;
}

#catalogSection .catalogSection_dried-fish {
  top: 0;
  left: 78%;
  width: 22%;
}

#catalogSection .catalogSection_alcohol {
  top: 300px;
  left: 0;
  width: 22%;
}

#catalogSection .catalogSection_rolls {
  top: 300px;
  left: 22%;
  width: 36%;
}

#catalogSection .catalogSection_drinks {
  top: 300px;
  left: 58%;
  width: 23%;
}

#catalogSection .catalogSection_cider {
  top: 300px;
  left: 81%;
  width: 19%;
}

.catalogSection_articles_hover {
  background-color: rgba(0, 0, 0, .7);
  opacity: 0;
  transition: .5s;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.catalogSection_articles_hover_header {
  font-size: 32px;
}
</style>
