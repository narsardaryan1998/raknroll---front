<template>
  <div id="reviews">
    <div class="reviews_top_section d-flex justify-space-between align-center container-padding container">
      <div class="reviews_top_section_header d-flex align-center">
        <div>
          <hr class="reviews_top_section_header_hr">
        </div>
        <div class="ml-4">
          <span>{{ $t('menuLinks.reviews') }} (В процессе)</span>
        </div>
      </div>
    </div>
    <div class="row margin-top-from-header container-padding container">
      <div class="col-md-6 offset-md-3 text-center col-12 reviews_write_review_description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis praesentium quibusdam tempore! Atque eum
        explicabo, fuga magni totam unde vero! A blanditiis consequuntur cumque cupiditate doloremque fugit
        perferendis repellat voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi eum ex
        mollitia placeat porro, quaerat! Ad, commodi dolore fugit, minima nemo nisi nostrum quam quod sit veniam vitae
        voluptatum.
      </div>
    </div>
    <div class="reviews_write_review margin-top-from-header">
      <div class="answer-modal modal">
        <vue-modaltor :close-scroll="false" :visible="openReviewAnswerModal" @hide="closeAnswerModal">
          <template #header>
            <div class="d-flex justify-end">
              <v-btn
                @click="closeAnswerModal"
                class="float-right"
                icon
                color="white">
                <v-icon
                  color="black">mdi-close
                </v-icon>
              </v-btn>
            </div>
          </template>
          <template #body>
            <div class="row">
              <div class="col-md-4 offset-4 pt-0">
                <v-img
                  :src="require('~/assets/2930365.png')"
                  :lazy-src="require('~/assets/2930365.png')">
                </v-img>
              </div>
            </div>
            <div class="row">
              <p class="answer-modal-text text-center">{{ $t('reviewSuccess') }}</p>
            </div>
            <div class="row">
              <div class="col-md-12 px-0 text-center">
                <v-btn
                  class="width-50"
                  large
                  rounded
                  @click="closeAnswerModal"
                  dark>
                  {{ $t('ok') }}
                </v-btn>
              </div>
            </div>
          </template>
        </vue-modaltor>
      </div>
      <div class="row container-padding">
        <div class="col-12 pt-5 px-0">
          <v-form
            ref="reviewForm"
            v-model="valid"
            lazy-validation>
            <div class="row">
              <div class="col-md-12 reviews_write_review_section text-center px-0">
                <span class="reviews_write_review_section_text">{{ $t('writeYourReview') }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 px-0">
                <Rating @passRate="reviewForm.rate = $event"></Rating>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-12 offset-md-2">
                <v-text-field
                  filled
                  :rules="nameRules"
                  counter="50"
                  name="name"
                  light
                  color="black"
                  v-model="reviewForm.name"
                  :label="$t('name')"
                  required>
                </v-text-field>
              </div>
              <div class="col-md-4 col-12">
                <v-text-field
                  filled
                  :rules="emailRules"
                  counter="50"
                  name="email"
                  v-model="reviewForm.email"
                  :label="$t('emailAddress')"
                  light
                  color="black"
                  required>
                </v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 offset-md-2">
                <v-textarea
                  filled
                  :rules="textRules"
                  :counter="1000"
                  name="text"
                  v-model="reviewForm.text"
                  :label="$t('yourOpinion')"
                  light
                  color="black"
                  required>
                </v-textarea>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-12 px-0 text-center">
                <v-btn
                  @click="sendReview"
                  large
                  rounded
                  dark>
                  {{ $t('sendReview') }}
                </v-btn>
              </div>
            </div>
          </v-form>
        </div>
      </div>
      <div class="reviews_all_testimonials margin-top-from-header container-padding">
        <div class="row">
          <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
            <div class="col-md-6 col-12 offset-md-3 mb-5"
                 v-for="(review, index) in $store.getters['reviews/data'].reviews" :key="index">
              <v-card
                light
                class="reviews_all_testimonials_card rounded-0"
                elevation="12">
                <div class="row">
                  <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
                    <v-avatar width="100%" height="auto">
                      <v-img
                        :src="require('~/assets/default_user_avatar.png')"
                        :lazy-src="require('~/assets/default_user_avatar.png')">
                      </v-img>
                    </v-avatar>
                  </div>
                  <div class="col-md-9">
                    <div class="row">
                      <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                        <span class="white--text">{{ review.name }}</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                        <span class="white--text">{{ review.text }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-space-around">
                  <div class="col ml-5">
                    <StaticRating :rateValue="review.rate"></StaticRating>
                  </div>
                  <div class="col white--text text-right mr-5">
                    {{ review.created_at }}
                  </div>
                </div>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '~/components/Rating'
import StaticRating from '~/components/StaticRating'

export default {
  name: "reviews",
  components: {
    Rating,
    StaticRating,
  },
  async asyncData({store}) {
    const cursor = 1;
    await store.dispatch('reviews/getData', {
      cursor
    });

    return {cursor}
  },
  data() {
    return {
      valid: false,
      busy: false,
      openReviewAnswerModal: false,
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
  methods: {
    async sendReview() {
      if (this.$refs.reviewForm.validate()) {
        await this.$store.dispatch('reviews/store', this.reviewForm).then(response => {
          this.openReviewAnswerModal = true;
        });
      }
    },
    closeAnswerModal() {
      this.openReviewAnswerModal = false;
      this.$refs.reviewForm.reset();
    },
    loadMore() {
      if (this.$store.getters['reviews/data'].reviews.length < this.$store.getters['reviews/data'].allCount) {
        this.cursor++;
        this.busy = true;
        setTimeout(() => {
          this.$store.dispatch('reviews/getData', {
            cursor: this.cursor
          })
          this.busy = false;
        }, 1000);
      }
    }
  }
}
</script>

<style scoped>
#reviews {
  margin-top: 9vw;
}

.reviews_top_section_header_hr {
  width: 8vw;
  border: 0.075vw solid #ffffff;
  background-color: #ffffff;
}

.reviews_top_section_header {
  font-size: 3.5vw;
  width: 100%;
}

.reviews_write_review_description {
  font-size: 1.1vw;
}

.reviews_write_review_section_text {
  color: black;
  font-size: 2.6vw;
}

.reviews_all_testimonials_card {
  background-image: url("https://poetsforamerica.com/wp-content/uploads/2016/07/black-pattern-background-tumblr-dark-backgrounds-3357.jpg");
  background-repeat: repeat;
}

.reviews_all_testimonials_card_customer-name {
  font-size: 2.1vw;
}

.reviews_all_testimonials_card_review {
  font-size: 0.85vw;
}

.reviews_write_review {
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/concrete-texture.png") !important;
  background-repeat: repeat;
  padding-bottom: 3vw;
}
</style>
