<template>
  <header id="header" class="d-flex"
          data-aos="fade-down"
          data-aos-duration="1000">
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
          </div>
          <div class="header_nav_links d-flex align-center justify-space-between pt-4">
            <div class="header_nav_navigation">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/")'>{{ $t('menuLinks.home') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link"
                              :to='localePath("/products/all-catalog/all-brands/page-1")'>{{ $t('menuLinks.products') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/about_us")'>
                      {{ $t('menuLinks.about_us') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/bonuses")'>
                      {{ $t('menuLinks.bonuses') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/delivery")'>
                      {{ $t('menuLinks.delivery') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/contact_us")'>
                      {{ $t('menuLinks.contact_us') }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header_nav_user_section">
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
                <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/cart")'>
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
                </NuxtLink>
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
      let routePath = $nuxt.$route.path;
      let pushTo = '';
      if (routePath.includes("ru/")) {
        pushTo = routePath.replace("ru/", this.$i18n.locale === "uk" ? "" : this.$i18n.locale + "/")
      } else if (routePath.includes("en/")) {
        pushTo = routePath.replace("en/", this.$i18n.locale === "uk" ? "" : this.$i18n.locale + "/")
      } else {
        pushTo = this.$i18n.locale !== "uk" ? "/" + this.$i18n.locale + routePath : routePath;
      }
      this.$router.push({path: pushTo});
    }
  }
}
</script>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  z-index: 999999999999;
  transition: 1s !important;
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
  transition: .5s;
  text-decoration: none;
}

.header_nav_navigation_menu_link:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.header_nav_user_part_button {
  border: none;
  width: 1.950vw;
  height: 1.950vw;
}

.nuxt-link-exact-active {
  color: #B71C1C !important;
}
</style>
