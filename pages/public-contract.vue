<template>
  <div id="publicContract">
    <div class="publicContract_top-section">
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
                   data-aos-delay="300" data-aos-duration="1000">{{ $t('publicDocumentPageContent.header') }}</p>
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
    </div>
    <div class="publicContract_content container-padding margin-top-6vh">
      <div class="font-weight-black publicContract_subheaders">
        <span v-html="$t('publicDocumentPageContent.div1')"></span>
      </div>
      <div class="margin-top-4vh">
        <span v-html="$t('publicDocumentPageContent.div2')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div3')"></span>
        <span v-html="$t('publicDocumentPageContent.div4')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div5')"></span>
        <span v-html="$t('publicDocumentPageContent.div6')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div7')"></span>
        <span v-html="$t('publicDocumentPageContent.div8')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div9')"></span>
        <span v-html="$t('publicDocumentPageContent.div10')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div11')"></span>
        <span v-html="$t('publicDocumentPageContent.div12')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div13')"></span>
        <span v-html="$t('publicDocumentPageContent.div14')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div15')"></span>
        <span v-html="$t('publicDocumentPageContent.div16')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div17')"></span>
        <span v-html="$t('publicDocumentPageContent.div18')"></span>
      </div>
      <div class="margin-top-4vh">
        <span class="font-weight-black publicContract_subheaders" v-html="$t('publicDocumentPageContent.div19')"></span>
        <span v-html="$t('publicDocumentPageContent.div20')"></span>
      </div>
      <div class="margin-top-4vh">
        <span v-html="$t('publicDocumentPageContent.div21')"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "publicContract",
  data() {
    return {
      baseUrl: process.env.BASE_URL,
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: this.baseUrl.slice(0, -1) + this.$nuxt.$route.path
        }
      ]
    }
  },
}
</script>

<style scoped>
#publicContract {
  margin-top: 18vh
}

.publicContract_subheaders {
  font-size: 18px
}
</style>
