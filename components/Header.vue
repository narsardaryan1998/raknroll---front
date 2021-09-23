<template>
  <div>
    <header id="header" class="d-flex">
      <div class="container pl-0">
        <div class="header_row">
          <div class="header_logo">
            <NuxtLink to="/" class="header_logo_link">
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
            <div  class="header_nav_delivery_part row">
              <div class="col-md-4">
                <v-select
                  :items="['UK', 'RU', 'EN']"
                  menu-props="auto"
                  color="red"
                  value="UK"
                  label="UK"
                  class="all_selects"
                  hide-details
                  prepend-icon="mdi-flag"
                  item-color="red"
                  single-line>
                </v-select>
              </div>
              <div class="col-md-7 offset-1">
                <v-select
                  :items="['099969998', '093091885', '041030006']"
                  menu-props="auto"
                  color="red"
                  item-color="red"
                  label="099969998"
                  class="w-50"
                  hide-details
                  prepend-icon="mdi-phone"
                  single-line>
                </v-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Header"
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
    width: 100%;
    position: relative;
    display: block;
    align-self: flex-end;
    height: auto;
  }

  .header_nav {
    min-width: 85%;
  }

  .header_nav_delivery_part {
    width: 30%;
  }
</style>
