<template>
  <div id="contact-us">
    <div class="container container-padding">
      <div class="contact-us_top_section d-flex justify-space-between align-center">
        <div class="component-top-header d-flex align-center">
          <div>
            <hr class="component-top-header-hr">
          </div>
          <div class="ml-4 white-text-shadow">
            <span>{{ $t('contactUs') }}</span>
          </div>
        </div>
      </div>
      <div class="row margin-top-6vh">
        <div class="col-12 col-md-8 col-lg-7 offset-md-1 col-xl-6 contact-us_description text-center">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus ea facilis fugiat labore laudantium, natus nisi quam quas, quisquam reprehenderit saepe vel voluptate. Delectus enim nemo pariatur quibusdam quisquam.</span>
        </div>
      </div>
      <div class="contact-us_contacts row margin-top-6vh">
        <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3 col-12 contact-us_contacts_data">
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
              <div class="d-flex mt-5 align-center">
                <div>
                  <img src="~/assets/icons/icons8-phone-64-red.png" alt="Phone"/>
                </div>
                <div class="ml-3 contact-us_contacts_text transition-05">
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
              <div class="d-flex mt-5 align-center">
                <div>
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
                <div>
                  <img src="~/assets/icons/icons8-viber-64-red.png" alt="Viber"/>
                </div>
                <div class="ml-3 contact-us_contacts_text">
                  <a href="viber://chat?number=%2B380965990909">Viber</a>
                </div>
              </div>
              <div class="d-flex mt-1">
                <div>
                  <img src="~/assets/icons/icons8-whatsapp-64.png" alt="WhatsApp"/>
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
                <div>
                  <img src="~/assets/icons/icons8-mail-64-red.png" alt="eMail"/>
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
              <div class="d-flex align-center mt-5">
                <div>
                  <img src="~/assets/icons/icons8-marker-641.png" alt="Location"/>
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
    </div>
    <div class="map-section margin-top-6vh">
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
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="100%" height="479" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2017%20%D0%90,%20%D0%9A%D0%B8%D0%B5%D0%B2&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
}
</script>

<style scoped>
#contact-us {
  margin-top: 18vh;
}

.contact-us_description {
  font-size: 21px;
}

.contact-us_contacts_data_subheader hr {
  width: 80px;
  border: 0.04vw solid rgba(205, 205, 205, 0.7);
  background-color: rgba(205, 205, 205, 0.7);
}

.contact-us_contacts_data img {
  width: 30px;
}

.contact-us_contacts_data_subheader {
  font-size: 33px;
}

.contact-us_contacts_text a {
  color: rgba(205, 205, 205, 0.7) !important;
  font-size: 18px;
}

.contact-us_contacts_text a:hover {
  color: #B71C1C !important;
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
