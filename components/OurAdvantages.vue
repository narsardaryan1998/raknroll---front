<template>
  <section id="ourAdvantages">
    <div class="container container-padding">
      <div class="ourAdvantages_top_section d-flex justify-space-between align-center">
        <div class="component-top-header d-flex align-center"
             data-aos="fade-right"
             data-aos-duration="1500">
          <div>
            <hr class="component-top-header-hr">
          </div>
          <div class="ml-4">
            <span>{{ $t('ourAdvantages') }}</span>
          </div>
        </div>
      </div>
      <div class="ourAdvantages-section"
           ref="mainAboutUsSection"
           data-aos="fade-right"
           data-aos-delay="1000"
           data-aos-duration="1500">
        <div class="col-md-8 col-12">
          <div class="row">
            <div class="col-6 our-advantages-single"
                 v-for="advantage in ourAdvantages"
                 :key="advantage.name"
                 data-aos="fade-right"
                 :data-aos-delay="advantage.delay"
                 data-aos-duration="1500">
              <div class="row">
                <div class="col-2">
                  <v-img class="our-advantages-single_image"
                         position="right"
                         :src="advantage.image"
                         :lazy-src="advantage.image">
                  </v-img>
                </div>
                <div class="col-10">
                  <span class="our-advantages-single_text_header">{{ advantage.header }}</span>
                </div>
              </div>
              <div class="row mt-0">
                <div class="col-10 offset-2 pt-0">
                  <span class="our-advantages-single_text_description">{{ advantage.description }} </span>
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
          delay: '300',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse ex expedita facere fugiinima natus non perferendis sint temporibus totam! Consequuntur quos suscipit voluptatibus!',
        },
        {
          image: require('~/assets/icons/icons8-e-commerce-64.png'),
          header: 'Профессиональный сайт',
          delay: '550',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse ',
        },
        {
          image: require('~/assets/icons/icons8-deliver-food-64.png'),
          header: 'Быстрая доставка',
          delay: '800',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsmet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-sushi-64.png'),
          header: 'Незабываемый вкус',
          delay: '1050',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-discount-64.png'),
          header: 'Бонусна програма',
          delay: '1300',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esseLorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esseLorem ipsum dolor sit amet, consectolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-restaurant-menu-64.png'),
          header: 'Обновленный ассортимент',
          delay: '1550',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
      ]
    }
  }
}
</script>

<style scoped>
#ourAdvantages {
  margin-top: 4vw;
  width: 100%;
}

.ourAdvantages-section {
  margin-top: 3vw;
  height: 850px;
  background-image: url("~/assets/intro2_background.png");
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
}

.our-advantages-single_text_header {
  font-size: 39px;
  line-height: normal;
  transition: .5s;
}

.our-advantages-single_text_header:hover {
  color: #B71C1C;
  transition: .5s;
}

.our-advantages-single_text_description {
  font-size: 17px;
}

.our-advantages-single_image {
  width: 85%;
}
</style>
