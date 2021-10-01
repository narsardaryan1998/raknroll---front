<template>
  <header id="header" class="d-flex"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
          data-aos-once="true">
    <div class="container pl-0 mx-0 pr-5">
      <div class="header_row">
        <div class="header_logo">
          <NuxtLink :to='localePath("/")' class="header_logo_link">
            <v-hover v-slot="{ hover }">
              <v-img
                position="left"
                src="https://raknroll.com.ua/index.php?option=com_gridbox&task=gridbox.compressImagelaptop&image=%2Fimages%2Fheaders%2Fimg_7802.png"
                lazy-src="https://raknroll.com.ua/index.php?option=com_gridbox&task=gridbox.compressImagelaptop&image=%2Fimages%2Fheaders%2Fimg_7802.png"
                alt="RAK'N'ROLL logo"
                contain>
              </v-img>
            </v-hover>
          </NuxtLink>
        </div>
        <div class="header_nav">
          <div class="header_nav_delivery_and_user_part d-flex align-center">
            <div class="header_nav_delivery_part d-flex align-center justify-space-between">
              <div class="header_nav_delivery_part_language">
                <v-select
                  @change="changeLanguage"
                  :items="$i18n.locales"
                  item-value="code"
                  item-text="name"
                  menu-props="auto"
                  v-model="$i18n.locale"
                  color="red darken-4"
                  class="pt-0 mt-0 without-border-select"
                  hide-details
                  item-color="red darken-4"
                  prepend-icon="mdi-flag"
                  single-line>
                </v-select>
              </div>
              <div class="header_nav_delivery_part_call">
                <v-select
                  :items="['099969998', '093091885', '041030006']"
                  menu-props="auto"
                  color="red darken-4"
                  value="099969998"
                  item-color="red darken-4"
                  class="pt-0 mt-0 without-border-select"
                  hide-details
                  prepend-icon="mdi-phone"
                  single-line>
                </v-select>
              </div>
            </div>
            <div class="header_nav_user_part d-flex justify-end">
              <v-btn
                class="ma-2 header_nav_user_part_button"
                outlined
                small
                fab
                color="white">
                <v-badge
                  bordered
                  color="red darken-4"
                  content="3"
                  overlap>
                  <img src="~/assets/icons/icons8-heart-health-64.png" :alt="$t('userButtons.favorites')"/>
                </v-badge>
              </v-btn>
              <v-btn
                class="ma-2 header_nav_user_part_button"
                outlined
                small
                fab
                color="white">
                <v-badge
                  bordered
                  color="red darken-4"
                  content="5"
                  overlap>
                  <img src="~/assets/icons/icons8-paid-64.png" :alt="$t('userButtons.cart')"/>
                </v-badge>
              </v-btn>
              <v-btn
                class="ma-2 header_nav_user_part_button"
                outlined
                small
                fab
                color="white">
                <img src="~/assets/icons/icons8-account-64.png" :alt="$t('userButtons.account')"/>
              </v-btn>
            </div>
          </div>
          <div class="header_nav_links d-flex align-center justify-space-between pt-4">
            <div class="header_nav_navigation">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li class="current">
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/")'
                              :data-hover="$t('menuLinks.home')">{{ $t('menuLinks.home') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/products")'
                              :data-hover="$t('menuLinks.products')">{{ $t('menuLinks.products') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/about_us")'
                              :data-hover="$t('menuLinks.about_us')">{{ $t('menuLinks.about_us') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/bonuses")'
                              :data-hover="$t('menuLinks.bonuses')">{{ $t('menuLinks.bonuses') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/delivery")'
                              :data-hover="$t('menuLinks.delivery')">{{ $t('menuLinks.delivery') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/contact_us")'
                              :data-hover="$t('menuLinks.contact_us')">{{ $t('menuLinks.contact_us') }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header_nav_user_section">

            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AOS from 'aos'

export default {
  name: "Header",
  mounted() {
    AOS.init({})
  },
  methods: {
    changeLanguage() {
      let routeName = $nuxt.$route.name;
      let pushTo = routeName.slice(0, -2) + this.$i18n.locale;
      this.$router.push({name: pushTo});
    }
  }
}
</script>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  z-index: 999999999999;
}

.header_row {
  display: flex;
}

.header_logo {
  min-width: 15%;
}

.header_logo_link {
  width: 65%;
  position: relative;
  display: block;
  align-self: flex-end;
  height: auto;
}

.header_nav {
  min-width: 85%;
}

.header_nav_delivery_part {
  width: 25%;
}

.header_nav_navigation {
  min-width: 70%;
}

.header_nav_user_part {
  min-width: 45%;
}

.header_nav_user_part img {
  width: 1.3vw;
}

.header_nav_navigation_menu_link {
  font-family: 'Caveat', cursive;
  font-size: 1.055vw;
  line-height: 1;
  color: #feffff;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(.6, 0, .41, 1);
  transition-duration: .3s;
  text-decoration: none;
}

/*Menu link hover effects*/
.snip1143 {
  font-family: 'Raleway', Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}

.snip1143 * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.snip1143 li {
  display: inline-block;
  list-style: outside none none;
  overflow: hidden;
}

.snip1143 a {
  padding: 0.3em 0;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.snip1143 a:before,
.snip1143 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.snip1143 a:before {
  top: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  background-color: #B71C1C;
}

.snip1143 a:after {
  padding: 0.3em 0;
  position: absolute;
  top: 100%;
  left: 0;
  content: attr(data-hover);
  color: white;
  white-space: nowrap;
}

.snip1143 li:hover a,
.snip1143 .current a {
  transform: translateY(-100%);
}

.snip1143 a:after {
  color: #B71C1C !important;
}

.without-border-select >>> .v-input__slot::before {
  border-style: none !important;
}

.header_nav_user_part_button {
  border: none;
  width: 1.950vw;
  height: 1.950vw;
}
</style>
