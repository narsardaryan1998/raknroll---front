<template>
  <div id="contact-us">
    <div
      class="contact-us_top_section d-flex justify-space-between align-center container-padding component_and_page_header_section">
      <div>
        <client-only>
          <div class="component-top-header"
               data-aos="fade-right"
               data-aos-duration="1000">
            <div class="ml-4 black-text-shadow black--text white-brush-background font-caveat">
              <p class="py-8 px-16"
                 data-aos="fade-right"
                 data-aos-delay="300"
                 data-aos-duration="1000"
                 style="line-height: normal">{{ $t('contactUs') }}</p>
            </div>
          </div>
        </client-only>
      </div>
      <div class="page_description margin-left-10vw"
           data-aos="fade-right"
           data-aos-delay="800"
           data-aos-duration="1000">{{ $t('contactsPageDescription') }}
      </div>
    </div>
    <div class="contact-us_contacts red-pattern-background row margin-top-6vh inset-shadow-10 py-10">
      <div class="col-md-8 col-lg-6 col-sm-10 offset-sm-1 offset-md-2 offset-lg-3 col-12 contact-us_contacts_data">
        <div class="row">
          <div class="col-6">
            <div class="contact-us_contacts_data_subheader d-flex align-center"
                 data-aos="fade-up"
                 data-aos-duration="1000">
              <div>
                <hr>
              </div>
              <div class="ml-3">
                <span>{{ $t('telephones') }}</span>
              </div>
            </div>
            <div class="d-flex mt-5 align-center"
                 data-aos="fade-up"
                 data-aos-delay="300"
                 data-aos-duration="1000">
              <div>
                <img alt="Phone" src="~/assets/icons/icons8-phone-64 (1).png"/>
              </div>
              <div class="ml-3 contact-us_contacts_text transition-05">
                <a href="tel:380965990909">+38 (096) 599 - 09 - 09</a>
                <br>
                <a href="tel:380935990909">+38 (093) 599 - 09 - 09</a>
              </div>
            </div>
          </div>
          <div class="col-6 d-flex justify-end">
            <div>
              <div class="contact-us_contacts_data_subheader d-flex align-center"
                   data-aos="fade-up"
                   data-aos-delay="500"
                   data-aos-duration="1000">
                <div>
                  <span>{{ $t('workingHours') }}</span>
                </div>
                <div class="ml-3">
                  <hr>
                </div>
              </div>
              <div class="d-flex mt-5 align-center"
                   data-aos="fade-up"
                   data-aos-delay="800"
                   data-aos-duration="1000">
                <div>
                  <img alt="Time" src="~/assets/icons/icons8-clock-64 (1).png"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="javascript:void(0)">{{ $t('informationPart12.first') }} 10:00-22:00</a>
                  <br>
                  <a href="javascript:void(0)">{{ $t('informationPart12.second') }} 10:00-21:30</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-6">
            <div class="contact-us_contacts_data_subheader d-flex align-center"
                 data-aos="fade-up"
                 data-aos-delay="300"
                 data-aos-duration="1000">
              <div>
                <hr>
              </div>
              <div class="ml-3">
                <span>{{ $t('messengers') }}</span>
              </div>
            </div>
            <div class="d-flex mt-5"
                 data-aos="fade-up"
                 data-aos-delay="500"
                 data-aos-duration="1000">
              <div>
                <img alt="Viber" src="~/assets/icons/icons8-viber-64 (1).png"/>
              </div>
              <div class="ml-3 contact-us_contacts_text">
                <a href="viber://chat?number=%2B380965990909">Viber</a>
              </div>
            </div>
            <div class="d-flex mt-1"
                 data-aos="fade-up"
                 data-aos-delay="500"
                 data-aos-duration="1000">
              <div>
                <img alt="WhatsApp" src="~/assets/icons/icons8-whatsapp-64 (1).png"/>
              </div>
              <div class="ml-3 contact-us_contacts_text">
                <a href="https://api.whatsapp.com/send?phone=380965990909">WhatsApp</a>
              </div>
            </div>
          </div>
          <div class="col-6 d-flex justify-end">
            <div>
              <div class="contact-us_contacts_data_subheader d-flex align-center"
                   data-aos="fade-up"
                   data-aos-delay="500"
                   data-aos-duration="1000">
                <div>
                  <span>{{ $t('emailAddress') }}</span>
                </div>
                <div class="ml-3">
                  <hr>
                </div>
              </div>
              <div class="d-flex mt-5"
                   data-aos="fade-up"
                   data-aos-delay="500"
                   data-aos-duration="1000">
                <div>
                  <img alt="eMail" src="~/assets/icons/icons8-mail-64 (1).png"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="javascript:void(0)">raknroll0909@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-6">
            <div class="contact-us_contacts_data_subheader d-flex align-center"
                 data-aos="fade-up"
                 data-aos-delay="500"
                 data-aos-duration="1000">
              <div>
                <hr>
              </div>
              <div class="ml-3">
                <span>{{ $t('ourAddress') }}</span>
              </div>
            </div>
            <div class="d-flex align-center mt-5"
                 data-aos="fade-up"
                 data-aos-delay="500"
                 data-aos-duration="1000">
              <div>
                <img alt="Location" src="~/assets/icons/icons8-user-location-64 (1).png"/>
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
    </div>
    <div class="map-section margin-top-6vh">
      <div class="contact-us_contacts_data_subheader d-flex align-center justify-center py-10">
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
                 data-aos-delay="300"
                 data-aos-duration="1000">{{ $t('weOnMap') }}</p>
            </div>
          </div>
        </div>
        <div class="ml-3"
             data-aos="fade-left"
             data-aos-duration="1000">
          <hr>
        </div>
      </div>
      <div class="map-section_map-content mt-5">
        <div class="mapouter"
             data-aos="fade-up"
             data-aos-duration="1000">
          <div class="gmap_canvas">
            <iframe id="gmap_canvas" frameborder="0" height="479"
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
</template>

<script>
export default {
  name: "ContactUs",
  head() {
    return {
      title: this.$t('seo.title.contactUs')
    }
  },
}
</script>

<style scoped>
#contact-us {
  margin-top: 18vh;
}

.contact-us_contacts_data_subheader hr {
  width: 80px;
  border: 0.04vw solid rgba(205, 205, 205, 0.7);
  background-color: rgba(205, 205, 205, 0.7);
}

.contact-us_contacts_data img {
  width: 40px;
}

.contact-us_contacts_data_subheader {
  font-size: 37px;
}

.contact-us_contacts_text a {
  color: #FAFAFA !important;
  font-size: 18px;
  transition: .5s;
}

.contact-us_contacts_text a:hover {
  padding-left: 5px;
  transition: .5s;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 479px;
  width: 100%;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 479px;
  width: 100%;
}
</style>
