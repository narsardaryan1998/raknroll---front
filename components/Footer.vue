<template>
  <footer class="mb-5">
    <div class="container-padding pt-5">
      <div class="row footer_information pt-5">
        <div class="col-md-3 footer_information_working-hours">
          <div class="row footer_information_working-hours_icon">
            <div class="col-md-12 text-center">
              <v-btn
                light
                color="red darken-4"
                fab
                x-large>
                <img src="~/assets/icons/icons8-clock-64 (1).png" alt="Time"/>
              </v-btn>
            </div>
          </div>
          <div class="row footer_information_working-hours_text footer_information_text mt-0">
            <div class="col-md-12 text-center">
              <a href="javascript:void(0)">{{ $t('informationPart12.first') }} 10:00-22:00</a>
              <br>
              <a href="javascript:void(0)">{{ $t('informationPart12.second') }} 10:00-21:30</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 footer_information_phone">
          <div class="row footer_information_working-hours_icon">
            <div class="col-md-12 text-center">
              <v-btn
                light
                color="red darken-4"
                fab
                x-large>
                <img src="~/assets/icons/icons8-phone-64 (1).png" alt="Time"/>
              </v-btn>
            </div>
          </div>
          <div class="row footer_information_working-hours_text footer_information_text mt-0">
            <div class="col-md-12 text-center">
              <a href="tel:380965990909">+38 (096) 599 - 09 - 09</a>
              <br>
              <a href="tel:380935990909">+38 (093) 599 - 09 - 09</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 footer_information_email">
          <div class="row footer_information_working-hours_icon">
            <div class="col-md-12 text-center">
              <v-btn
                light
                color="red darken-4"
                fab
                x-large>
                <img src="~/assets/icons/icons8-mail-64 (1).png" alt="Time"/>
              </v-btn>
            </div>
          </div>
          <div class="row footer_information_working-hours_text footer_information_text mt-0">
            <div class="col-md-12 text-center">
              <a href="javascript:void(0)">support@raknroll.com.ua</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 footer_information_location">
          <div class="row footer_information_working-hours_icon">
            <div class="col-md-12 text-center">
              <v-btn
                light
                color="red darken-4"
                fab
                x-large>
                <img src="~/assets/icons/icons8-user-location-64.png" alt="Time"/>
              </v-btn>
            </div>
          </div>
          <div class="row footer_information_working-hours_text footer_information_text mt-0">
            <div class="col-md-12 text-center">
              <a href="javascript:void(0)">{{ $t('informationPart1.first') }}</a>
              <br>
              <a href="javascript:void(0)">{{ $t('informationPart1.second') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer_first-line">
        <hr>
      </div>
      <div class="row footer_section">
        <div class="col-md-3 footer_section_subscribe">
          <div class="row">
            <div class="col-md-12 text-center">
                  <span class="footer_section_menu_header footer_section_header">
                    {{ $t('subscribe') }}
                  </span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <v-form
                ref="subscribeForm"
                v-model="subscribeFormValide"
                lazy-validation>
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 py-0">
                      <v-text-field
                        filled
                        dark
                        rounded
                        color="white"
                        name="email"
                        v-model="subscribeForm.email"
                        :rules="emailRules"
                        :counter="50"
                        :label="$t('emailAddress')"
                        required>
                      </v-text-field>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 py-0">
                      <v-btn
                        large
                        rounded
                        class="width-100"
                        @click="subscribe"
                        dark>
                        {{ $t('subscribe') }}
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center mt-5 login-register-modal_go-to-register">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.e repellat sequi sit voluptates!</span>
                  </div>
                </div>
              </v-form>
            </div>
          </div>
        </div>
        <div class="col-md-3 footer_section_menu">
          <div class="row">
            <div class="col-md-12 text-center">
                  <span class="footer_section_menu_header footer_section_header">
                    {{ $t('menu') }}
                  </span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <nav class="d-block">
                <ul class="list-style-none footer_section_nav_navigation_menu d-flex flex-column pl-0">
                  <li>
                    <NuxtLink class="footer_section_nav_navigation_menu_link" :to='localePath("/")'>
                      {{ $t('menuLinks.home') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="footer_section_nav_navigation_menu_link"
                              :to='localePath("/products/all-catalog/all-brands/page-1")'>{{
                        $t('menuLinks.products')
                      }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="footer_section_nav_navigation_menu_link" :to='localePath("/about_us")'>
                      {{ $t('menuLinks.about_us') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="footer_section_nav_navigation_menu_link" :to='localePath("/bonuses")'>
                      {{ $t('menuLinks.bonuses') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="footer_section_nav_navigation_menu_link" :to='localePath("/delivery")'>
                      {{ $t('menuLinks.delivery') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="footer_section_nav_navigation_menu_link" :to='localePath("/contact_us")'>
                      {{ $t('menuLinks.contact_us') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="footer_section_nav_navigation_menu_link" :to='localePath("/testimonials")'>
                      {{ $t('menuLinks.testimonials') }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-md-3 footer_section_gallery">
          <div class="row">
            <div class="col-md-12 text-center">
                  <span class="footer_section_header">
                      {{ $t('ourGallery') }}
                  </span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">

            </div>
          </div>
        </div>
        <div class="col-md-3 footer_section_map">
          <div class="row">
            <div class="col-md-12 text-center">
                  <span class="footer_section_header">
                  {{ $t('weOnMap') }}
                  </span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="map-section_map-content">
                <div class="mapouter">
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
          <div class="col-md-12 pt-5 mt-5">
            <div class="row footer_socialite justify-center">
              <v-hover
                v-slot="{ hover }">
                <v-btn
                  fab
                  small
                  dark
                  color="white">
                  <img :src="hover ? require('~/assets/fb-logo-red.png') : require('~/assets/fb-logo-dark.png')"
                       alt="Facebook"/>
                </v-btn>
              </v-hover>
              <v-hover
                v-slot="{ hover }">
                <v-btn
                  class="ml-3"
                  fab
                  small
                  dark
                  color="white">
                  <img
                    :src="hover ? require('~/assets/instaram-logo-red.png') : require('~/assets/instaram-logo-dark.png')"
                    alt="Instagram"/>
                </v-btn>
              </v-hover>
              <v-hover
                v-slot="{ hover }">
                <v-btn
                  fab
                  class="ml-3"
                  small
                  dark
                  color="white">
                  <img :src="hover ? require('~/assets/yt-logo-red.png') : require('~/assets/yt-logo-dark.png')"
                       alt="Youtube"/>
                </v-btn>
              </v-hover>
              <v-hover
                v-slot="{ hover }">
                <v-btn
                  class="ml-3"
                  fab
                  small
                  dark
                  color="white">
                  <img
                    :src="hover ? require('~/assets/whatsapp-logo-red.png') : require('~/assets/whatsapp-logo-dark.png')"
                    alt="WhatApp"/>
                </v-btn>
              </v-hover>
              <v-hover
                v-slot="{ hover }">
                <v-btn
                  fab
                  class="ml-3"
                  small
                  dark
                  color="white">
                  <img :src="hover ? require('~/assets/viber-logo-red.png') : require('~/assets/viber-logo-dark.png')"
                       alt="Viber"/>
                </v-btn>
              </v-hover>
              <v-hover
                v-slot="{ hover }">
                <v-btn
                  fab
                  class="ml-3"
                  small
                  dark
                  color="white">
                  <img
                    :src="hover ? require('~/assets/telegram-logo-red.png') : require('~/assets/telegram-logo-dark.png')"
                    alt="Telegram"/>
                </v-btn>
              </v-hover>
            </div>
            <div class="row footer_copyright text-center mt-5">
              <div class="col-md-12">
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
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(18, 18, 18, 0.53);
}

.footer_information_text a {
  color: rgba(205, 205, 205, 0.7) !important;
  text-decoration: none !important;
  font-size: 1vw;
  transition: .5s;
}

.footer_information_text a:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.footer_information img {
  width: 50px;
}

.footer_section_menu {
  border-left: 2px solid rgba(205, 205, 205, 0.7);
  border-right: 2px solid rgba(205, 205, 205, 0.7);
}

.footer_section_gallery {
  border-right: 2px solid rgba(205, 205, 205, 0.7);
}

.footer_first-line {
  margin-top: 1.5vw;
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
}

.footer_section {
  margin-top: 2vw;
  font-size: 1.6vw;
}

.footer_section_header {
  color: white;
  font-size: 1.6vw;
}

.footer_section_nav_navigation_menu_link {
  font-size: 1.1vw;
  color: rgba(255, 255, 255, 0.8);
  transition: .5s;
  text-decoration: none;
}

.footer_section_nav_navigation_menu_link:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.footer_copyright_and_socialite {
  margin-top: 3vw;
}

.footer_copyright_and_socialite {
  background-color: #1212126b;
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
</style>
