<template>
  <section id="catalogSection">
    <div class="catalogSection content-height catalogSection_beer">
      <v-img
        position="center center"
        class="width-100 height-100"
        src="https://as1.ftcdn.net/v2/jpg/01/01/92/96/1000_F_101929688_dTRNPrsGmQ0l6jetRctSFvvIUBl7oU7I.jpg"
        lazy-src="https://as1.ftcdn.net/v2/jpg/01/01/92/96/1000_F_101929688_dTRNPrsGmQ0l6jetRctSFvvIUBl7oU7I.jpg">
      </v-img>
    </div>
    <div class="catalogSection content-height catalogSection_snacks">
      <v-img
        class="width-100 height-100"
        src="https://as2.ftcdn.net/v2/jpg/02/94/39/09/1000_F_294390925_VqqKV3fbFnxBemLkPTAfHvOOnebcnHY8.jpg"
        lazy-src="https://as2.ftcdn.net/v2/jpg/02/94/39/09/1000_F_294390925_VqqKV3fbFnxBemLkPTAfHvOOnebcnHY8.jpg">
      </v-img>
    </div>
    <div class="catalogSection content-height catalogSection_crayfish">
      <v-img
        class="width-100 height-100"
        :src="require('~/assets/1000_F_379179036_SkNiYp7Pu0DBaPEHPL33p5gMEAwXg93z.jpg')"
        :lazy-src="require('~/assets/1000_F_379179036_SkNiYp7Pu0DBaPEHPL33p5gMEAwXg93z.jpg')">
      </v-img>
    </div>
    <div class="catalogSection content-height catalogSection_dried-fish">
      <v-img
        class="width-100 height-100"
        src="https://as1.ftcdn.net/v2/jpg/02/05/02/74/1000_F_205027412_YirrLjjgtP0iNFYjmofSLC4kmBwG3EiR.jpg"
        lazy-src="https://as1.ftcdn.net/v2/jpg/02/05/02/74/1000_F_205027412_YirrLjjgtP0iNFYjmofSLC4kmBwG3EiR.jpg">
      </v-img>
    </div>
    <div class="catalogSection content-height catalogSection_alcohol">
      <v-img
        class="width-100 height-100"
        src="https://as1.ftcdn.net/v2/jpg/02/93/05/22/1000_F_293052266_CVFBRa9DwaeuDs2LHF06gbooDv8ecite.jpg"
        lazy-src="https://as1.ftcdn.net/v2/jpg/02/93/05/22/1000_F_293052266_CVFBRa9DwaeuDs2LHF06gbooDv8ecite.jpg">
      </v-img>
    </div>
    <div class="catalogSection content-height catalogSection_rolls">
      <v-img
        class="width-100 height-100"
        src="https://as2.ftcdn.net/v2/jpg/03/23/88/07/1000_F_323880740_7dz5xQ3Jcimx84xWmV37U7lxYGSsvs4t.jpg"
        lazy-src="https://as2.ftcdn.net/v2/jpg/03/23/88/07/1000_F_323880740_7dz5xQ3Jcimx84xWmV37U7lxYGSsvs4t.jpg">
      </v-img>
    </div>
    <div class="catalogSection content-height catalogSection_drinks">
      <v-img
        class="width-100 height-100"
        src="https://as1.ftcdn.net/v2/jpg/03/69/56/02/1000_F_369560255_ze7zKUVKic1yQKzmXOSym2shcEyGqKPg.jpg"
        lazy-src="https://as1.ftcdn.net/v2/jpg/03/69/56/02/1000_F_369560255_ze7zKUVKic1yQKzmXOSym2shcEyGqKPg.jpg">
      </v-img>
    </div>
    <div class="catalogSection content-height catalogSection_cider">
      <v-img
        class="width-100 height-100"
        src="https://as2.ftcdn.net/v2/jpg/00/96/35/77/1000_F_96357769_jqkgF0fQbJKIAw1OfhybalW1sbZknE0M.jpg"
        lazy-src="https://as2.ftcdn.net/v2/jpg/00/96/35/77/1000_F_96357769_jqkgF0fQbJKIAw1OfhybalW1sbZknE0M.jpg">
      </v-img>
    </div>
  </section>
</template>

<script>
export default {
  name: "CatalogSection"
}
</script>

<style scoped>
#catalogSection {
  width: 100%;
  height: 500px;
  position: relative;
}

#catalogSection .content-height {
  position: absolute;
  height: 250px;
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
  top: 250px;
  left: 0;
  width: 22%;
}

#catalogSection .catalogSection_rolls {
  top: 250px;
  left: 22%;
  width: 36%;
}

#catalogSection .catalogSection_drinks {
  top: 250px;
  left: 58%;
  width: 23%;
}

#catalogSection .catalogSection_cider {
  top: 250px;
  left: 81%;
  width: 19%;
}
</style>
