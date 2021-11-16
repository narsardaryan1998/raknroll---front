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
               style="line-height: normal"
               data-aos="fade-up"
               data-aos-duration="1000">{{ $t('ourCatalog') }}</p>
          </div>
        </div>
        <div class="page_description margin-left-10vw white--text white-text-shadow"
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-delay="800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis praesentium quibusdam tempore! Atque eum
          explicabo, fuga magni totam unde vero! A blanditiis consequuntur cumque cupiditate doloremque fugit
          perferendis repellat voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi eum ex
          mollitia placeat porro, quaerat! Ad, commodi dolore fugit, minima nemo nisi nostrum quam quod sit veniam vitae
          voluptatum.
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
              class="width-100 height-100 transition-05"
              :class="hover ? ' scale-1-2' : ''"
              src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/22852551/beer.jpg"
              lazy-src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/22852551/beer.jpg"
              cover>
              <div class="d-table width-100 height-100">
                <div class="catalogSection_articles_hover width-100 height-100"
                     :class="hover ? 'opacity-1-transition' : ''">
                  <span class="catalogSection_articles_hover_header">Pivo</span>
                  <br>
                  <span class="catalogSection_articles_hover_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at consectetur delectus delenitiscipit velit.</span>
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
              class="width-100 height-100 transition-05"
              src="https://as2.ftcdn.net/v2/jpg/02/94/39/09/1000_F_294390925_VqqKV3fbFnxBemLkPTAfHvOOnebcnHY8.jpg"
              lazy-src="https://as2.ftcdn.net/v2/jpg/02/94/39/09/1000_F_294390925_VqqKV3fbFnxBemLkPTAfHvOOnebcnHY8.jpg">
              <div class="d-table width-100 height-100">
                <div class="catalogSection_articles_hover width-100 height-100"
                     :class="hover ? 'opacity-1-transition' : ''">
                  <span class="catalogSection_articles_hover_header">Pivo</span>
                  <br>
                  <span class="catalogSection_articles_hover_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at consectetur delectus delenitiscipit velit.</span>
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
              class="width-100 height-100 transition-05"
              :src="require('~/assets/1000_F_379179036_SkNiYp7Pu0DBaPEHPL33p5gMEAwXg93z.jpg')"
              :lazy-src="require('~/assets/1000_F_379179036_SkNiYp7Pu0DBaPEHPL33p5gMEAwXg93z.jpg')">
              <div class="d-table width-100 height-100">
                <div class="catalogSection_articles_hover width-100 height-100"
                     :class="hover ? 'opacity-1-transition' : ''">
                  <span class="catalogSection_articles_hover_header">Pivo</span>
                  <br>
                  <span class="catalogSection_articles_hover_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at consectetur delectus delenitiscipit velit.</span>
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
              class="width-100 height-100 transition-05"
              src="https://as1.ftcdn.net/v2/jpg/02/05/02/74/1000_F_205027412_YirrLjjgtP0iNFYjmofSLC4kmBwG3EiR.jpg"
              lazy-src="https://as1.ftcdn.net/v2/jpg/02/05/02/74/1000_F_205027412_YirrLjjgtP0iNFYjmofSLC4kmBwG3EiR.jpg">
              <div class="d-table width-100 height-100">
                <div class="catalogSection_articles_hover width-100 height-100"
                     :class="hover ? 'opacity-1-transition' : ''">
                  <span class="catalogSection_articles_hover_header">Pivo</span>
                  <br>
                  <span class="catalogSection_articles_hover_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at consectetur delectus delenitiscipit velit.</span>
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
              class="width-100 height-100 transition-05"
              src="https://as1.ftcdn.net/v2/jpg/02/93/05/22/1000_F_293052266_CVFBRa9DwaeuDs2LHF06gbooDv8ecite.jpg"
              lazy-src="https://as1.ftcdn.net/v2/jpg/02/93/05/22/1000_F_293052266_CVFBRa9DwaeuDs2LHF06gbooDv8ecite.jpg">
              <div class="d-table width-100 height-100">
                <div class="catalogSection_articles_hover width-100 height-100"
                     :class="hover ? 'opacity-1-transition' : ''">
                  <span class="catalogSection_articles_hover_header">Pivo</span>
                  <br>
                  <span class="catalogSection_articles_hover_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at consectetur delectus delenitiscipit velit.</span>
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
              class="width-100 height-100 transition-05"
              src="https://as2.ftcdn.net/v2/jpg/03/23/88/07/1000_F_323880740_7dz5xQ3Jcimx84xWmV37U7lxYGSsvs4t.jpg"
              lazy-src="https://as2.ftcdn.net/v2/jpg/03/23/88/07/1000_F_323880740_7dz5xQ3Jcimx84xWmV37U7lxYGSsvs4t.jpg">
              <div class="d-table width-100 height-100">
                <div class="catalogSection_articles_hover width-100 height-100"
                     :class="hover ? 'opacity-1-transition' : ''">
                  <span class="catalogSection_articles_hover_header">Pivo</span>
                  <br>
                  <span class="catalogSection_articles_hover_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at consectetur delectus delenitiscipit velit.</span>
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
              class="width-100 height-100 transition-05"
              src="https://as1.ftcdn.net/v2/jpg/03/69/56/02/1000_F_369560255_ze7zKUVKic1yQKzmXOSym2shcEyGqKPg.jpg"
              lazy-src="https://as1.ftcdn.net/v2/jpg/03/69/56/02/1000_F_369560255_ze7zKUVKic1yQKzmXOSym2shcEyGqKPg.jpg">
              <div class="d-table width-100 height-100">
                <div class="catalogSection_articles_hover width-100 height-100"
                     :class="hover ? 'opacity-1-transition' : ''">
                  <span class="catalogSection_articles_hover_header">Pivo</span>
                  <br>
                  <span class="catalogSection_articles_hover_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at consectetur delectus delenitiscipit velit.</span>
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
              class="width-100 height-100 transition-05"
              src="https://as2.ftcdn.net/v2/jpg/00/96/35/77/1000_F_96357769_jqkgF0fQbJKIAw1OfhybalW1sbZknE0M.jpg"
              lazy-src="https://as2.ftcdn.net/v2/jpg/00/96/35/77/1000_F_96357769_jqkgF0fQbJKIAw1OfhybalW1sbZknE0M.jpg">
              <div class="d-table width-100 height-100">
                <div class="catalogSection_articles_hover width-100 height-100"
                     :class="hover ? 'opacity-1-transition' : ''">
                  <span class="catalogSection_articles_hover_header">Pivo</span>
                  <br>
                  <span class="catalogSection_articles_hover_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at consectetur delectus delenitiscipit velit.</span>
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
  name: "CatalogSection"
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

.catalogSection_articles_hover_text {
  font-size: 15px;
}
</style>
