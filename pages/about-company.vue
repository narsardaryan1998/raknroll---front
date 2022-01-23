<template>
  <div id="aboutCompany">
    <div class="aboutCompany_top-section">
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
                   data-aos-delay="300" data-aos-duration="1000">{{ $t('menuLinks.aboutCompany') }}</p>
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
    <div class="aboutCompany_content container-padding margin-top-6vh">
      <div class="margin-top-4vh"
           data-aos="fade-right"
           data-aos-duration="1000">
        <span v-html="$t('aboutCompanyPageContent.div1')"></span>
      </div>
      <div class="margin-top-4vh"
           data-aos="fade-right"
           data-aos-delay="150"
           data-aos-duration="1000">
        <span v-html="$t('aboutCompanyPageContent.div2')"></span>
      </div>
      <div class="margin-top-4vh"
           data-aos="fade-right"
           data-aos-delay="200"
           data-aos-duration="1000">
        <span v-html="$t('aboutCompanyPageContent.div3')"></span>
      </div>
      <div class="margin-top-4vh"
           data-aos="fade-right"
           data-aos-delay="250"
           data-aos-duration="1000">
        <span v-html="$t('aboutCompanyPageContent.div4')"></span>
      </div>
      <div class="margin-top-4vh"
           data-aos="fade-right"
           data-aos-delay="350"
           data-aos-duration="1000">
        <span v-html="$t('aboutCompanyPageContent.div5')"></span>
      </div>
      <div class="margin-top-4vh"
           data-aos="fade-right"
           data-aos-delay="450"
           data-aos-duration="1000">
        <span v-html="$t('aboutCompanyPageContent.div6')"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-company",
  head() {
    return {
      title: this.$t('seo.title.aboutCompany')
    }
  },
}
</script>

<style scoped>
#aboutCompany{margin-top:18vh}
</style>
