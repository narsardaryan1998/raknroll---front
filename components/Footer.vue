<template>
  <footer class="mb-5">
    <div class="container-padding pt-5">
      <div class="row footer_first-line">
        <hr>
      </div>
      <div class="row">
        <div class="col-lg-3 col-6">
          <div class="footer_section_subscribe"
               data-aos="fade-up"
               data-aos-duration="1000">
            <div class="row">
              <div class="col-md-12">
                <v-form
                  ref="subscribeForm"
                  v-model="subscribeFormValide"
                  lazy-validation>
                  <div class="container">
                    <div class="row">
                      <div class="col-12 py-0">
                        <v-text-field
                          dark
                          color="white"
                          name="email"
                          v-model="subscribeForm.email"
                          :rules="emailRules"
                          :counter="50"
                          :label="$t('emailAddress')"
                          required>
                        </v-text-field>
                      </div>
                      <div class="col-12 py-0">
                        <v-btn
                          large
                          class="width-100"
                          @click="subscribe"
                          dark>
                          {{ $t('subscribe') }}
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-center mt-3 footer_section_subscribe_description">
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.e repellat sequi sit voluptates!</span>
                    </div>
                  </div>
                </v-form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer_section">
        <div class="col-lg-7 col-md-8">
          <div class="row">
            <div class="col-12 footer_section_information">
              <div class="row">
                <div class="col-md-12 text-center"
                     data-aos="fade-right"
                     data-aos-duration="1000">
                  <span class="footer_section_information_header footer_section_header">
                    {{ $t('contactUs') }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 d-flex">
                  <div class="d-flex align-center">
                    <div class="d-flex"
                         data-aos="fade-right"
                         data-aos-duration="1000">
                      <img src="~/assets/icons/icons8-clock-64.png" alt="Time"/>
                    </div>
                    <div class="ml-3 contact-us_contacts_text d-flex flex-column"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="1000">
                      <a href="javascript:void(0)">{{ $t('informationPart12.first') }} 10:00-22:00</a>
                      <a href="javascript:void(0)">{{ $t('informationPart12.second') }} 10:00-21:30</a>
                    </div>
                  </div>
                  <div class="d-flex ml-5 align-center">
                    <div class="d-flex"
                         data-aos="fade-right"
                         data-aos-delay="600"
                         data-aos-duration="1000">
                      <img src="~/assets/icons/icons8-phone-64-red.png" alt="Phone"/>
                    </div>
                    <div class="ml-3 contact-us_contacts_text transition-05 d-flex flex-column"
                         data-aos="fade-right"
                         data-aos-delay="900"
                         data-aos-duration="1000">
                      <a href="tel:380965990909">+38 (096) 599 - 09 - 09</a>
                      <a href="tel:380935990909">+38 (093) 599 - 09 - 09</a>
                    </div>
                  </div>
                  <div class="d-flex align-center ml-5">
                    <div class="d-flex"
                         data-aos="fade-right"
                         data-aos-delay="1200"
                         data-aos-duration="1000">
                      <img src="~/assets/icons/icons8-marker-641.png" alt="Location"/>
                    </div>
                    <div class="ml-3 contact-us_contacts_text d-flex flex-column"
                         data-aos="fade-right"
                         data-aos-delay="1500"
                         data-aos-duration="1000">
                      <a href="javascript:void(0)">{{ $t('informationPart1.first') }}</a>
                      <a href="javascript:void(0)">{{ $t('informationPart1.second') }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-lg-11 footer_section_menu">
              <div class="row">
                <div class="col-md-12 text-center">
                  <nav class="d-block"
                       data-aos="fade-right"
                       data-aos-delay="300"
                       data-aos-duration="1000">
                    <ul class="list-style-none footer_section_nav_navigation_menu pl-0 d-flex">
                      <li>
                        <NuxtLink
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between"
                          :to='localePath("/")'>
                          {{ $t('menuLinks.home') }}
                        </NuxtLink>
                      </li>
                      <li class="pl-5">
                        <NuxtLink
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between"
                          :to='localePath("/reviews")'>
                          {{ $t('menuLinks.reviews') }}
                        </NuxtLink>
                      </li>
                      <li class="pl-5">
                        <NuxtLink
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between"
                          :to='localePath("/contact_us")'>
                          {{ $t('menuLinks.contact_us') }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-12 footer_section_menu">
              <div class="row">
                <div class="col-md-12 text-center"
                     data-aos="fade-right"
                     data-aos-delay="500"
                     data-aos-duration="1000">
                  <nav class="d-block">
                    <ul class="list-style-none footer_section_nav_navigation_menu pl-0 d-flex justify-space-between">
                      <li v-for="category in $store.getters['categories/data']">
                        <NuxtLink class="footer_section_nav_navigation_menu_link"
                                  :to='localePath("/products/"+ category.slug +"/all-brands/page-1")'>{{
                            category.name
                          }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="row footer_socialite mt-3 ml-0">
              <div class="col-12 d-flex">
                <v-hover
                  v-slot="{ hover }">
                  <v-img
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    max-width="30"
                    :src="require('~/assets/fb-logo-red.png')"
                    :lazy-src="require('~/assets/fb-logo-red.png')"
                    contain>
                  </v-img>
                </v-hover>
                <v-hover
                  v-slot="{ hover }">
                  <v-img
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    class="ml-3"
                    max-width="30"
                    :src="require('~/assets/instaram-logo-red.png')"
                    :lazy-src="require('~/assets/instaram-logo-red.png')"
                    contain>
                  </v-img>
                </v-hover>
                <v-hover
                  v-slot="{ hover }">
                  <v-img
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    class="ml-3"
                    max-width="30"
                    :src="require('~/assets/yt-logo-red.png')"
                    :lazy-src="require('~/assets/yt-logo-red.png')"
                    contain>
                  </v-img>
                </v-hover>
                <v-hover
                  v-slot="{ hover }">
                  <v-img
                    data-aos="fade-right"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    class="ml-3"
                    max-width="30"
                    :src="require('~/assets/whatsapp-logo-red.png')"
                    :lazy-src="require('~/assets/whatsapp-logo-red.png')"
                    contain>
                  </v-img>
                </v-hover>
                <v-hover
                  v-slot="{ hover }">
                  <v-img
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    class="ml-3"
                    max-width="30"
                    :src="require('~/assets/viber-logo-red.png')"
                    :lazy-src="require('~/assets/viber-logo-red.png')"
                    contain>
                  </v-img>
                </v-hover>
                <v-hover
                  v-slot="{ hover }">
                  <v-img
                    data-aos="fade-right"
                    data-aos-delay="1200"
                    data-aos-duration="1000"
                    class="ml-3"
                    max-width="30"
                    :src="require('~/assets/telegram-logo-red.png')"
                    :lazy-src="require('~/assets/telegram-logo-red.png')"
                    contain>
                  </v-img>
                </v-hover>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-4 footer_section_map">
          <div class="row">
            <div class="col-md-12 text-center"
                 data-aos="fade-right"
                 data-aos-delay="600"
                 data-aos-duration="1000">
                  <span class="footer_section_header">
                  {{ $t('weOnMap') }}
                  </span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="map-section_map-content"
                   data-aos="fade-right"
                   data-aos-delay="1200"
                   data-aos-duration="1000">
                <div class="mapouter opacity-05">
                  <div class="gmap_canvas">
                    <iframe width="100%" height="250" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2017%20%D0%90,%20%D0%9A%D0%B8%D0%B5%D0%B2&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://123movies-to.org"></a><br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row footer_copyright_and_socialite">
      <div class="col-md-12 pb-0">
        <div class="container-padding">
          <div class="col-md-12 pt-5 mt-3">
            <div class="row footer_copyright text-center mt-3">
              <div class="col-md-12"
                   data-aos="fade-right"
                   data-aos-delay="500"
                   data-aos-duration="1000">
                © Copyright 2021 | www.raknroll.com.ua | All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      subscribeFormValide: false,
      subscribeForm: {
        email: '',
      },
      emailRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('emailAddress')}),
        v => /.+@.+/.test(v) || this.$t('validationText.mustBeValid', {fieldName: this.$t('emailAddress')}),
      ],
    }
  },
  methods: {
    subscribe() {
      if ((this.$refs.subscribeForm.validate())) {
        alert('Ok')
      }
    }
  }
}
</script>

<style scoped>
footer {
  color: rgba(205, 205, 205, 0.7) !important;
}

.footer_section_menu {
  line-height: normal;
}

.footer_first-line {
  margin-top: 3vh;
  width: 100%;
  height: 2px;
  border: none;
}

.footer_section {
  margin-top: 4vh;
  font-size: 31px;
}

.footer_section_header {
  color: white;
  font-size: 31px;
}

.footer_section_nav_navigation_menu_link {
  font-size: 19px;
  color: rgba(255, 255, 255, 0.8);
  transition: .5s;
}

.footer_section_nav_navigation_menu_link:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.footer_copyright_and_socialite {
  margin-top: 2vh;
}

.footer_socialite img {
  width: 1.3vw;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 250px;
  width: 100%;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 250px;
  width: 100%;
}

.footer_section_subscribe_description {
  font-size: 16px;
}

/*.footer_section_information{*/
/*  border-bottom: 2px solid rgba(205, 205, 205, 0.7);*/
/*}*/

.footer_section_information img {
  width: 33px;
}

.footer_section_information a {
  font-size: 17px;
  color: rgba(205, 205, 205, 0.7) !important;
  transition: .5s;
}

.footer_section_information a:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.contact-us_contacts_text {
  line-height: normal;
}
</style>
