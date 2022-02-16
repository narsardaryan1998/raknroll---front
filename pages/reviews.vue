<template>
<!--  <div id="reviews">-->
<!--    <div-->
<!--      class="reviews_top_section d-flex justify-space-between align-center container-padding container component_and_page_header_section">-->
<!--      <div>-->
<!--        <client-only>-->
<!--          <div class="component-top-header"-->
<!--               data-aos="fade-right"-->
<!--               data-aos-duration="1000">-->
<!--            <div class="ml-4 black-text-shadow black&#45;&#45;text white-brush-background font-caveat">-->
<!--              <p class="py-8 px-16"-->
<!--                 data-aos="fade-right"-->
<!--                 data-aos-delay="300"-->
<!--                 data-aos-duration="1000">{{ $t('menuLinks.reviews') }}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </client-only>-->
<!--      </div>-->
<!--      <div class="margin-left-10vw page_description"-->
<!--           data-aos="fade-right"-->
<!--           data-aos-delay="800"-->
<!--           data-aos-duration="1000">{{ $t('reviewsPageDescription') }}-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="reviews_write_review margin-top-6vh">-->
<!--      <div class="row container-padding red-pattern-background inset-shadow-10">-->
<!--        <div class="col-12 pt-5 px-0">-->
<!--          <v-form-->
<!--            ref="reviewForm"-->
<!--            v-model="valid"-->
<!--            lazy-validation>-->
<!--            <div class="row">-->
<!--              <div class="col-md-12 reviews_write_review_section text-center">-->
<!--                <div-->
<!--                  class="d-inline-flex black-brush-background"-->
<!--                  data-aos="fade-right"-->
<!--                  data-aos-delay="1100"-->
<!--                  data-aos-duration="1000">-->
<!--                  <p class="reviews_write_review_section_text white&#45;&#45;text white-text-shadow font-caveat py-8 px-16"-->
<!--                     data-aos="fade-right"-->
<!--                     data-aos-delay="500"-->
<!--                     data-aos-duration="1000">{{ $t('writeYourReview') }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-md-12 px-0"-->
<!--                   data-aos="fade-right"-->
<!--                   data-aos-duration="1000">-->
<!--                <Rating @passRate="reviewForm.rate = $event"></Rating>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-md-4 col-12 offset-md-2"-->
<!--                   data-aos="fade-right"-->
<!--                   data-aos-duration="1000">-->
<!--                <v-text-field-->
<!--                  v-model="reviewForm.name"-->
<!--                  :label="$t('name')"-->
<!--                  :rules="nameRules"-->
<!--                  color="white"-->
<!--                  counter="50"-->
<!--                  dark-->
<!--                  filled-->
<!--                  name="name"-->
<!--                  required>-->
<!--                </v-text-field>-->
<!--              </div>-->
<!--              <div class="col-md-4 col-12"-->
<!--                   data-aos="fade-right"-->
<!--                   data-aos-delay="500"-->
<!--                   data-aos-duration="1000">-->
<!--                <v-text-field-->
<!--                  v-model="reviewForm.email"-->
<!--                  :label="$t('emailAddress')"-->
<!--                  :rules="emailRules"-->
<!--                  color="white"-->
<!--                  counter="50"-->
<!--                  dark-->
<!--                  filled-->
<!--                  name="email"-->
<!--                  required>-->
<!--                </v-text-field>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-md-8 offset-md-2"-->
<!--                   data-aos="fade-right"-->
<!--                   data-aos-duration="1000">-->
<!--                <v-textarea-->
<!--                  v-model="reviewForm.text"-->
<!--                  :counter="1000"-->
<!--                  :label="$t('yourOpinion')"-->
<!--                  :rules="textRules"-->
<!--                  color="white"-->
<!--                  dark-->
<!--                  filled-->
<!--                  name="text"-->
<!--                  required>-->
<!--                </v-textarea>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row mb-4">-->
<!--              <div class="col-md-12 px-0 text-center"-->
<!--                   data-aos="fade-right"-->
<!--                   data-aos-duration="1000">-->
<!--                <v-btn-->
<!--                  class="font-weight-bold"-->
<!--                  large-->
<!--                  light-->
<!--                  rounded-->
<!--                  @click="sendReview">-->
<!--                  {{ $t('sendReview') }}-->
<!--                </v-btn>-->
<!--              </div>-->
<!--            </div>-->
<!--          </v-form>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="reviews_all_testimonials margin-top-6vh container-padding">-->
<!--        <div class="row">-->
<!--          <div v-infinite-scroll="loadMore" class="width-100" infinite-scroll-disabled="busy"-->
<!--               infinite-scroll-distance="5">-->
<!--            <div v-for="(review, index) in $store.getters['reviews/data'].reviews"-->
<!--                 :key="index" class="col-md-8 col-sm-10 offset-sm-1 col-lg-7 col-12 offset-md-2 offset-lg-2 mb-5"-->
<!--                 data-aos="fade-right"-->
<!--                 data-aos-duration="1000">-->
<!--              <v-card-->
<!--                class="white-pattern-background"-->
<!--                elevation="12"-->
<!--                light>-->
<!--                <div class="row">-->
<!--                  <div class="col-md-2 col-3 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">-->
<!--                    <v-avatar height="auto" width="70%">-->
<!--                      <v-img-->
<!--                        :lazy-src="require('~/assets/icons/user.png')"-->
<!--                        :src="require('~/assets/icons/user.png')">-->
<!--                      </v-img>-->
<!--                    </v-avatar>-->
<!--                  </div>-->
<!--                  <div class="col-9 reviews_all_testimonials_card_customer-text">-->
<!--                    <div class="row">-->
<!--                      <div class="col-md-12 reviews_all_testimonials_card_customer-name">-->
<!--                        <span>{{ review.name }}</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="row">-->
<!--                      <div class="col-md-12 reviews_all_testimonials_card_review pt-0">-->
<!--                        <span>{{ review.text }}</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="row justify-space-around">-->
<!--                  <div class="col ml-5">-->
<!--                    <StaticRating :rateValue="review.rate"></StaticRating>-->
<!--                  </div>-->
<!--                  <div class="col text-right mr-5">-->
<!--                    {{ review.created_at }}-->
<!--                  </div>-->
<!--                </div>-->
<!--              </v-card>-->
<!--            </div>-->
<!--            <div class="text-center">-->
<!--              <pulse-loader :loading="busy" color="#202020" size="20px"></pulse-loader>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div></div>
</template>

<script>
import Rating from '~/components/Rating'
import StaticRating from '~/components/StaticRating'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Swal from "sweetalert2";

export default {
  name: "reviews",
  components: {
    Rating,
    StaticRating,
    PulseLoader,
  },
  // async asyncData({store}) {
  //   const cursor = 1;
  //   await store.dispatch('reviews/getData', {
  //     cursor
  //   });
  //
  //   return {cursor}
  // },
  data() {
    return {
      valid: false,
      busy: false,
      baseUrl: process.env.BASE_URL,
      reviewForm: {
        name: '',
        email: '',
        text: '',
        rate: 5,
      },
      nameRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('name')}),
        v => (v && v.length > 3) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('name'),
          moreOrLess: this.$t('more'),
          qty: '4',
        }),
        v => (v && v.length <= 50) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('name'),
          moreOrLess: this.$t('less'),
          qty: '50',
        }),
      ],
      textRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('message')}),
        v => (v && v.length > 3) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('message'),
          moreOrLess: this.$t('more'),
          qty: '4',
        }),
        v => (v && v.length <= 1000) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('message'),
          moreOrLess: this.$t('less'),
          qty: '1000',
        }),
      ],
      emailRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('emailAddress')}),
        v => /.+@.+/.test(v) || this.$t('validationText.mustBeValid', {fieldName: this.$t('emailAddress')}),
      ],
    }
  },
  // head() {
  //   return {
  //     title: this.$t('seo.title.reviews'),
  //     link: [
  //       {
  //         rel: 'canonical',
  //         href: this.baseUrl.slice(0, -1) + this.$nuxt.$route.path
  //       }
  //     ]
  //   }
  // },
  methods: {
  //   async sendReview() {
  //     if (this.$refs.reviewForm.validate()) {
  //       await this.$store.dispatch('reviews/store', this.reviewForm).then(response => {
  //         this.$refs.reviewForm.reset();
  //         Swal.fire({
  //           position: 'center',
  //           icon: 'success',
  //           title: this.$t('reviewSuccess'),
  //           confirmButtonText: this.$t('ok'),
  //           confirmButtonColor: '#060606',
  //           showConfirmButton: true
  //         });
  //       });
  //     }
  //   },
  //   loadMore() {
  //     if (this.$store.getters['reviews/data'].reviews.length < this.$store.getters['reviews/data'].allCount) {
  //       this.cursor++;
  //       this.busy = true;
  //       setTimeout(() => {
  //         this.$store.dispatch('reviews/getData', {
  //           cursor: this.cursor
  //         })
  //         this.busy = false;
  //       }, 1000);
  //     }
  //   }
  }
}
</script>

<style scoped>
#reviews{margin-top:18vh}.reviews_write_review_section_text{font-size:51px}.reviews_all_testimonials_card_customer-name{font-size:40px}.reviews_all_testimonials_card_review{font-size:16px}.reviews_write_review{padding-bottom:6vh}
</style>
