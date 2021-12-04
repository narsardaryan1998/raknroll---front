<template>
  <section id="ourAdvantages" class="margin-top-6vh width-100">
    <div class="container container-padding">
      <div class="ourAdvantages_top_section d-flex justify-space-between align-center">
        <div class="component-top-header font-caveat d-flex align-center"
             data-aos="fade-up"
             data-aos-duration="1000">
          <div class="ml-4 black-text-shadow black--text white-brush-background">
            <p class="py-8 px-12"
               data-aos="fade-up"
               data-aos-duration="1000">{{ $t('ourAdvantages') }}</p>
          </div>
        </div>
      </div>
      <div class="ourAdvantages-section margin-top-6vh"
           ref="mainAboutUsSection"
           data-aos="fade-up"
           data-aos-duration="1000">
        <div class="col-md-10 col-lg-8 col-12">
          <div class="row">
            <div class="col-sm-6 col-12 our-advantages-single"
                 v-for="advantage in ourAdvantages"
                 :key="advantage.name"
                 data-aos="fade-up"
                 data-aos-duration="1000">
              <div class="row">
                <div class="col-2 our-advantages-single_icon">
                  <v-img class="our-advantages-single_image transition-05 cursor-pointer"
                         position="right"
                         :src="advantage.image"
                         :lazy-src="advantage.image">
                  </v-img>
                </div>
                <div class="col-10">
                  <span class="our-advantages-single_text_header transition-05 font-caveat">{{
                      advantage.header
                    }}</span>
                </div>
              </div>
              <div class="row mt-0">
                <div class="col-10 offset-2 pt-0">
                  <span class="our-advantages-single_text_description font-caveat">{{ advantage.description }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurAdvantages",
  data() {
    return {
      ourAdvantages: [
        {
          image: require('~/assets/icons/icons8-good-quality-64.png'),
          header: 'Гарантия качества',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse ex expedita facere fugiinima natus non perferendis sint temporibus totam! Consequuntur quos suscipit voluptatibus!',
        },
        {
          image: require('~/assets/icons/icons8-e-commerce-64.png'),
          header: 'Профессиональный сайт',
          delay: 500,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse ',
        },
        {
          image: require('~/assets/icons/icons8-deliver-food-64.png'),
          header: 'Быстрая доставка',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsmet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-sushi-64.png'),
          header: 'Незабываемый вкус',
          delay: 500,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-discount-64.png'),
          header: 'Бонусна програма',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esseLorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esseLorem ipsum dolor sit amet, consectolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-restaurant-menu-64.png'),
          header: 'Обновленный ассортимент',
          delay: 500,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
      ]
    }
  }
}
</script>

<style scoped>
.ourAdvantages-section {
  height: 850px;
  background-image: url("~/assets/images/intro2_background1.png");
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
}

.our-advantages-single_text_header {
  font-size: 39px;
  line-height: normal;
}

.our-advantages-single_text_header:hover {
  color: #B71C1C;
  transition: .5s;
}

.our-advantages-single_text_description {
  font-size: 19px;
}

.our-advantages-single_image {
  width: 85%;
}

.our-advantages-single_image:hover {
  width: 85%;
  transform: rotate(-20deg);
  transition: .5s;
}
</style>
