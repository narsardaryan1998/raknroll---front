<template>
  <footer class="mb-5">
    <div class="container-padding pt-5">
      <div class="row footer_section">
        <div class="col-lg-7 col-md-8">
          <div class="row">
            <div class="col-12 footer_section_information">
              <div class="row">
                <div class="col-md-12 d-flex justify-center">
                  <div class="text-center black-text-shadow black--text white-brush-background">
                    <p class="py-8 px-12 footer_section_information_header footer_section_header font-caveat">{{
                        $t('contactUs')
                      }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 footer_section_information_data d-flex justify-space-around justify-lg-start">
                  <div class="d-flex align-center flex-column flex-sm-row">
                    <div class="d-flex">
                      <img alt="Time" src="~/assets/icons/icons8-clock-64.png"/>
                    </div>
                    <div class="ml-3 contact-us_contacts_text d-flex flex-column">
                      <a href="javascript:void(0)">{{ $t('informationPart12.first') }} 10:00-22:00</a>
                      <a href="javascript:void(0)">{{ $t('informationPart12.second') }} 10:00-21:30</a>
                    </div>
                  </div>
                  <div class="d-flex ml-sm-3 align-center flex-column flex-sm-row">
                    <div class="d-flex">
                      <img alt="Phone" src="~/assets/icons/icons8-phone-64-red.png"/>
                    </div>
                    <div class="ml-3 contact-us_contacts_text transition-05 d-flex flex-column">
                      <a href="tel:+380965990909">+38 (096) 599 - 09 - 09</a>
                      <a href="tel:+380935990909">+38 (093) 599 - 09 - 09</a>
                    </div>
                  </div>
                  <div class="d-flex align-center ml-sm-3 flex-column flex-sm-row">
                    <div class="d-flex">
                      <img alt="Location" src="~/assets/icons/icons8-marker-641.png"/>
                    </div>
                    <div class="ml-3 contact-us_contacts_text d-flex flex-column">
                      <a href="javascript:void(0)">{{ $t('informationPart1.first') }}</a>
                      <a href="javascript:void(0)">{{ $t('informationPart1.second') }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-lg-11 footer_section_menu footer_section_menu_pages_section">
              <div class="row">
                <div class="col-md-12 text-center">
                  <nav class="d-block">
                    <ul
                      class="list-style-none footer_section_nav_navigation_menu pl-0 d-flex justify-space-around justify-sm-start">
                      <li>
                        <NuxtLink
                          :to='localePath("/")'
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between">
                          {{ $t('menuLinks.home') }}
                        </NuxtLink>
                      </li>
                      <li class="pl-5">
                        <NuxtLink
                          :to='localePath("/reviews")'
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between">
                          {{ $t('menuLinks.reviews') }}
                        </NuxtLink>
                      </li>
                      <li class="pl-5">
                        <NuxtLink
                          :to='localePath("/delivery-and-payment")'
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between">
                          {{ $t('menuLinks.delivery-and-payment') }}
                        </NuxtLink>
                      </li>
                      <li class="pl-5">
                        <NuxtLink
                          :to='localePath("/public-contract")'
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between">
                          {{ $t('menuLinks.publicContract') }}
                        </NuxtLink>
                      </li>
                      <li class="pl-5">
                        <NuxtLink
                          :to='localePath("/about-company")'
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between">
                          {{ $t('menuLinks.aboutCompany') }}
                        </NuxtLink>
                      </li>
                      <li class="pl-5">
                        <NuxtLink
                          :to='localePath("/contact-us")'
                          class="list-style-none footer_section_nav_navigation_menu_link pl-0 d-flex justify-space-between">
                          {{ $t('menuLinks.contact-us') }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="row footer_socialite mt-3 ml-0">
              <div class="col-12 d-flex justify-space-around justify-sm-start">
                <v-hover
                  v-slot="{ hover }">
                  <a href="https://www.facebook.com/RAKnROLL-100396829019534"
                     rel="nofollow"
                     target="_blank">
                    <v-img
                      :lazy-src="require('~/assets/images/fb-logo-red.png')"
                      :src="require('~/assets/images/fb-logo-red.png')"
                      contain
                      max-width="30">
                    </v-img>
                  </a>
                </v-hover>
                <v-hover
                  v-slot="{ hover }">
                  <a href="https://instagram.com/rak._n_.roll?r=nametag"
                     rel="nofollow"
                     target="_blank">
                    <v-img
                      :lazy-src="require('~/assets/images/instaram-logo-red.png')"
                      :src="require('~/assets/images/instaram-logo-red.png')"
                      class="ml-3"
                      contain
                      max-width="30">
                    </v-img>
                  </a>
                </v-hover>
                <v-hover
                  v-slot="{ hover }">
                  <a href="viber://chat?number=%2B380965990909" target="_blank"
                     rel="nofollow">
                    <v-img
                      :lazy-src="require('~/assets/images/viber-logo-red.png')"
                      :src="require('~/assets/images/viber-logo-red.png')"
                      class="ml-3"
                      contain
                      max-width="30">
                    </v-img>
                  </a>
                </v-hover>
                <v-hover
                  v-slot="{ hover }">
                  <a href="https://telegram.me/Raknroll2021" target="_blank"
                     rel="nofollow">
                    <v-img
                      :lazy-src="require('~/assets/images/telegram-logo-red.png')"
                      :src="require('~/assets/images/telegram-logo-red.png')"
                      class="ml-3"
                      contain
                      max-width="30">
                    </v-img>
                  </a>
                </v-hover>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-4 footer_section_map">
          <div class="row">
            <div class="col-md-12 d-flex justify-center">
              <div class="text-center black-text-shadow black--text white-brush-background">
                <p class="py-8 px-12 footer_section_header font-caveat">{{ $t('weOnMap') }}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="map-section_map-content">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe id="gmap_canvas" frameborder="0" height="250"
                            marginheight="0"
                            marginwidth="0" scrolling="no"
                            src="https://maps.google.com/maps?q=%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,%20%D0%9A%D0%B8%D1%97%D0%B2,%20%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B5%20%D1%88%D0%BE%D1%81%D0%B5%2017%20%D0%90&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"></iframe>
                    <a href="https://123movies-to.org"></a><br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row footer_copyright container-padding text-center mt-5">
      <div class="col-md-12 align-center d-flex justify-space-between flex-column flex-md-row">
        <div class="d-flex align-center">
          <div>
            {{ $t('weAcceptPayments') }}
          </div>
          <div>
            <v-img
              :lazy-src="require('~/assets/images/visa-mastercard.png')"
              :src="require('~/assets/images/visa-mastercard.png')"
              class="ml-5"
              contain
              max-width="55">
            </v-img>
          </div>
        </div>
        <div class="mt-4 mt-md-0">
          © Copyright 2021 | www.raknroll.com.ua | {{ $t('allRightsReserved') }}.
        </div>
        <div></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped>
footer{color:rgba(205,205,205,.7)!important}.footer_section_menu{line-height:normal}.footer_section{margin-top:4vh;font-size:31px}.footer_section_header{font-size:31px}.footer_section_nav_navigation_menu_link{font-size:19px;color:rgba(255,255,255,.8);transition:.5s}.footer_section_nav_navigation_menu_link:hover{color:#b71c1c!important;transition:.5s}.footer_copyright{margin-top:2vh}.footer_socialite img{width:1.3vw}.gmap_canvas{overflow:hidden;background:0 0!important;height:250px;width:100%}.mapouter{position:relative;text-align:right;height:250px;width:100%}.footer_section_information img{width:33px}.footer_section_information a{font-size:17px;color:rgba(205,205,205,.7)!important;transition:.5s}.footer_section_information a:hover{color:#b71c1c!important;transition:.5s}.contact-us_contacts_text{line-height:normal}
</style>
