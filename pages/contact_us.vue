<template>
  <div id="contact-us">
    <div class="container container-padding">
      <div class="contact-us_top_section d-flex justify-space-between align-center">
        <div class="contact-us_top_section_header d-flex align-center">
          <div>
            <hr class="contact-us_top_section_header_hr">
          </div>
          <div class="ml-4">
            <span>{{ $t('contactUs') }}</span>
          </div>
        </div>
      </div>
      <div class="contact-us_contacts row margin-top-from-header">
        <div class="col-md-6 col-sm-12 contact-us_contacts_data">
          <div class="row">
            <div class="col-6">
              <div class="contact-us_contacts_data_subheader d-flex align-center">
                <div>
                  <hr>
                </div>
                <div class="ml-3">
                  <span>{{ $t('telephones') }}</span>
                </div>
              </div>
              <div class="d-flex mt-5">
                <div class="pt-2">
                  <img src="~/assets/icons/icons8-phone-64-red.png" alt="Time"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="tel:380965990909">+38 (096) 599 - 09 - 09</a>
                  <br>
                  <a href="tel:380935990909">+38 (093) 599 - 09 - 09</a>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="contact-us_contacts_data_subheader d-flex align-center">
                <div>
                  <span>{{ $t('workingHours') }}</span>
                </div>
                <div class="ml-3">
                  <hr>
                </div>
              </div>
              <div class="d-flex mt-5">
                <div class="pt-1">
                  <img src="~/assets/icons/icons8-clock-64.png" alt="Time"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="javascript:void(0)">{{ $t('informationPart12.first') }} 10:00-22:00</a>
                  <br>
                  <a href="javascript:void(0)">{{ $t('informationPart12.second') }} 10:00-21:30</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-6">
              <div class="contact-us_contacts_data_subheader d-flex align-center">
                <div>
                  <hr>
                </div>
                <div class="ml-3">
                  <span>{{ $t('messengers') }}</span>
                </div>
              </div>
              <div class="d-flex mt-5">
                <div class="pt-1">
                  <img src="~/assets/icons/icons8-viber-64-red.png" alt="Time"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="viber://chat?number=%2B380965990909">Viber</a>
                </div>
              </div>
              <div class="d-flex mt-1">
                <div class="pt-1">
                  <img src="~/assets/icons/icons8-whatsapp-64.png" alt="Time"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="https://api.whatsapp.com/send?phone=380965990909">WhatsApp</a>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="contact-us_contacts_data_subheader d-flex align-center">
                <div>
                  <span>{{ $t('emailAddress') }}</span>
                </div>
                <div class="ml-3">
                  <hr>
                </div>
              </div>
              <div class="d-flex mt-5">
                <div class="pt-1">
                  <img src="~/assets/icons/icons8-mail-64-red.png" alt="Time"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="javascript:void(0)">support@raknroll.com.ua</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-6">
              <div class="contact-us_contacts_data_subheader d-flex align-center">
                <div>
                  <hr>
                </div>
                <div class="ml-3">
                  <span>{{ $t('ourAddress') }}</span>
                </div>
              </div>
              <div class="d-flex mt-5">
                <div class="pt-1">
                  <img src="~/assets/icons/icons8-marker-641.png" alt="Time"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="javascript:void(0)">{{ $t('informationPart1.first') }}</a>
                  <br>
                  <a href="javascript:void(0)">{{ $t('informationPart1.second') }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 contact-us_contacts_send-message">
          <div class="contact-us_contacts_data_subheader d-flex align-center justify-center">
            <div class="mr-3">
              <hr>
            </div>
            <div>
              <span>{{ $t('sendMessage') }}</span>
            </div>
            <div class="ml-3">
              <hr>
            </div>
          </div>
          <v-form
            class="mt-5"
            ref="form"
            v-model="valid"
            lazy-validation>
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <v-text-field
                  color="red darken-4"
                  v-model="form.name"
                  :counter="50"
                  :label="$t('name')"
                  hide-details
                  required>
                </v-text-field>
              </div>
              <div class="col-sm-12 col-md-6">
                <v-text-field
                  :rules="emailRules"
                  color="red darken-4"
                  v-model="form.email"
                  :counter="50"
                  label="eMail"
                  hide-details
                  required>
                </v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <v-text-field
                  color="red darken-4"
                  v-model="form.subject"
                  :counter="50"
                  :label="$t('subject')"
                  hide-details
                  required>
                </v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <v-textarea
                  color="red darken-4"
                  :label="$t('message')"
                  hide-details
                  v-model="form.message"
                ></v-textarea>
              </div>
            </div>
            <div class="row float-right">
              <div class="col"
                   :class="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'col-sm-12' : ''">
                <v-btn
                  :disabled="!valid"
                  color="red darken-4"
                  :class="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'w-100' : ''"
                  class="mr-4"
                  @click="sendMessage">
                  Добавить
                  <v-icon
                    dark
                    right>
                    mdi-send
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
    <div class="map-section margin-top-from-header">
      <div class="contact-us_contacts_data_subheader d-flex align-center justify-center">
        <div class="mr-3">
          <hr>
        </div>
        <div>
          <span>{{ $t('weOnMap') }}</span>
        </div>
        <div class="ml-3">
          <hr>
        </div>
      </div>
      <div class="map-section_map-content mt-5">
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="479" id="gmap_canvas" src="https://maps.google.com/maps?q=%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2017%20%D0%90,%20%D0%9A%D0%B8%D0%B5%D0%B2&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:479px;width:100%;}</style><a href="https://www.embedgooglemap.net">google maps embed responsive</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:479px;width: 100%;}</style></div></div>    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      valid: true,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    sendMessage() {
      if (this.$refs.form.validate()) {
        console.log('gg');
      }
    }
  }
}
</script>

<style scoped>
#contact-us {
  font-family: 'Caveat', cursive !important;
  margin-top: 9vw;
}

.contact-us_top_section_header_hr {
  width: 8vw;
  border: 0.075vw solid #ffffff;
  background-color: #ffffff;
}

.contact-us_contacts_data_subheader hr {
  width: 4vw;
  border: 0.04vw solid rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.7);
}

.contact-us_top_section_header {
  font-size: 3.5vw;
  width: 40%;
}

.contact-us_contacts_data img {
  width: 1.5vw;
}

.contact-us_contacts_data_subheader {
  font-size: 2.1vw;
}

.contact-us_contacts_text a {
  color: rgba(255, 255, 255, 0.7) !important;
  text-decoration: none !important;
  font-size: 1vw;
  transition: .5s;
}

.contact-us_contacts_text a:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.map-section_map-content{
  opacity: 0.8;
}
</style>
