<template>
  <div id="reviews" class="container container-padding">
    <div class="reviews_top_section d-flex justify-space-between align-center">
      <div class="reviews_top_section_header d-flex align-center">
        <div>
          <hr class="reviews_top_section_header_hr">
        </div>
        <div class="ml-4">
          <span>{{ $t('menuLinks.reviews') }} (В процессе)</span>
        </div>
      </div>
    </div>
    <div class="reviews_write_review margin-top-from-header">
      <div class="row">
        <div class="col-md-6 col-12 reviews_write_review_description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis praesentium quibusdam tempore! Atque eum
          explicabo, fuga magni totam unde vero! A blanditiis consequuntur cumque cupiditate doloremque fugit
          perferendis repellat voluptates!
        </div>
        <div class="col-md-6 col-12">
          <v-form
            ref="reviewForm"
            v-model="valid"
            lazy-validation>
            <div class="row">
              <div class="col-md-12 reviews_write_review_section text-center">
                <span class="reviews_write_review_section_text">Оставьте свой отзыв</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 offset-2">
                <v-text-field
                  filled
                  :rules="nameRules"
                  counter="50"
                  v-model="reviewForm.name"
                  :label="$t('name')"
                  color="white"
                  required>
                </v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 offset-2">
                <v-text-field
                  filled
                  :rules="emailRules"
                  counter="50"
                  v-model="reviewForm.email"
                  :label="$t('emailAddress')"
                  color="white"
                  required>
                </v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 offset-2">
                <v-text-field
                  filled
                  :rules="messageRules"
                  counter="1000"
                  v-model="reviewForm.message"
                  :label="$t('message')"
                  color="white"
                  required>
                </v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <Rating></Rating>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <v-btn
                  large
                  rounded
                  dark>
                  Send
                </v-btn>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '~/components/Rating'

export default {
  name: "reviews",
  components: {
    Rating
  },
  data() {
    return {
      valid: false,
      reviewForm: {
        name: '',
        email: '',
        message: '',
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
      messageRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('message')}),
        v => (v && v.length > 3) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('message'),
          moreOrLess: this.$t('more'),
          qty: '4',
        }),
        v => (v && v.length <= 50) || this.$t('validationText.moreOrLessThenCharacters', {
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
  font-size: 2.6vw;
}
</style>
