<template>
  <div id="user-profile">
    <div class="container container-padding">
      <div class="user-profile_top_section d-flex justify-space-between align-center">
        <div class="user-profile_top_section_header d-flex align-center">
          <div>
            <hr class="user-profile_top_section_header_hr">
          </div>
          <div class="ml-4">
            <span>{{ $t('yourDetails') }}</span>
          </div>
        </div>
      </div>
      <div class="row user-profile_details_and_orders margin-top-from-header">
        <div class="col-md-8 col-12 user-profile_details">
          <div class="row pt-5">
            <div class="col-md-12">
              <v-alert
                v-if="updatingErrors.exists"
                color="red darken-4"
                dismissible
                type="error"
                border="left"
                elevation="2"
                light
                colored-border
                class="red--text text--darken-4"
                icon="mdi-alert-octagon-outline">
                <span v-for="error in updatingErrors.data">
                  - {{ error[0] }}
                </span>
              </v-alert>
            </div>
          </div>
          <div class="row p-5">
            <div class="col-md-12">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation>
                <div class="row">
                  <div class="col-md-4 col-12">
                    <v-text-field
                      counter="50"
                      color="red darken-4"
                      :rules="nameRules"
                      v-model="form.name"
                      label="Имя">
                    </v-text-field>
                  </div>
                  <div class="col-md-4 col-12">
                    <v-text-field
                      counter="50"
                      color="red darken-4"
                      :rules="emailRules"
                      v-model="form.email"
                      label="eMail"
                      :disabled="$store.getters['user/data'].service.name === 'google' || $store.getters['user/data'].service.name ===  'facebook'">
                    </v-text-field>
                  </div>
                  <div class="col-md-4 col-12">
                    <v-text-field
                      counter="100"
                      color="red darken-4"
                      v-model="form.profession"
                      label="Профессия">
                    </v-text-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-12">
                    <v-text-field
                      color="red darken-4"
                      :value="$store.getters['user/data'].role"
                      label="Роль"
                      disabled>
                    </v-text-field>
                  </div>
                  <div class="col-md-6 col-12">
                    <v-text-field
                      color="red darken-4"
                      v-mask="'(###) ### - ## - ##'"
                      v-model="form.phone"
                      label="Телефон">
                    </v-text-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <v-text-field
                      counter
                      color="red darken-4"
                      v-model="form.address"
                      label="Адрес">
                    </v-text-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 col-12">
                    <v-text-field
                      counter
                      color="red darken-4"
                      v-model="form.city"
                      label="Город">
                    </v-text-field>
                  </div>
                  <div class="col-md-4 col-12">
                    <v-text-field
                      counter
                      type="number"
                      color="red darken-4"
                      v-model="form.home"
                      label="Дом">
                    </v-text-field>
                  </div>
                  <div class="col-md-4 col-12">
                    <v-text-field
                      counter
                      color="red darken-4"
                      v-model="form.intercom"
                      label="Домофон">
                    </v-text-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <v-textarea
                      counter="500"
                      color="red darken-4"
                      name="input-7-4"
                      label="Обо мне"
                      v-model="form.description">
                    </v-textarea>
                  </div>
                </div>
                <div class="row float-right">
                  <div class="col-md-12">
                    <v-btn large
                           :disabled="!valid"
                           @click="edit">
                      Сохранить
                      <v-icon right>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-form>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12 user-profile_orders">
          <v-card
            dark
            class="rounded-lg user-profile_orders_card"
            elevation="6">
            <v-card-title>
              <div class="row">
                <div class="col-md-4 offset-md-4 offset-cart-40">
                  <v-avatar size="100%">
                    <v-img
                      v-if="$store.getters['user/data'].avatar"
                      :src="$store.getters['user/data'].avatar"
                      :lazy-src="$store.getters['user/data'].avatar">
                    </v-img>
                    <v-img
                      v-else
                      :src="require('~/assets/default_user_avatar.png')"
                      :lazy-src="require('~/assets/default_user_avatar.png')">
                    </v-img>
                  </v-avatar>
                </div>
                <div class="col-md-4">
                  <v-list-item dark>
                    <v-list-item-content class="text-right">
                      <v-list-item-title class="title">
                        <span>{{ $t('balance') }}</span>
                        <v-icon>
                          mdi-wallet
                        </v-icon>
                      </v-list-item-title>
                      <v-list-item-subtitle color="white">
                        {{ $store.getters['user/data'].balance }} ₴
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="row">
                <div class="col-md-12 text-center">
                  <h3>{{ $store.getters['user/data'].name }}</h3>
                </div>
              </div>
              <v-divider></v-divider>
              <v-row>
                <v-col md="12">
                  <v-expansion-panels class="rounded-0">
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        Заказы
                        <template v-slot:actions>
                          <v-icon color="grey darken-3">
                            $expand
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <div class="d-flex justify-content-between">
                          <div>
                            2021-04-06 15:46:32
                          </div>
                          <div>
                            33650 ₴
                          </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="d-flex justify-content-between">
                          <div>
                            Всего
                          </div>
                          <div>
                            112300 ₴
                          </div>
                        </div>
                        <v-divider></v-divider>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        Пополнение баланса
                        <template v-slot:actions>
                          <v-icon color="grey darken-3">
                            $expand
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <div class="d-flex justify-content-between">
                          <div>
                            2021-04-06 15:46:32
                          </div>
                          <div>
                            33650 ₴
                          </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="d-flex justify-content-between">
                          <div>
                            Всего
                          </div>
                          <div>
                            112300 ₴
                          </div>
                        </div>
                        <v-divider></v-divider>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['authenticated', 'checkUser'],
  async asyncData({store}) {
    await store.dispatch('user/getData');
    const form = {
      id: store.getters['user/data'].id,
      name: store.getters['user/data'].name,
      email: store.getters['user/data'].email,
      profession: store.getters['user/data'].profession,
      phone: store.getters['user/data'].phone,
      address: store.getters['user/data'].address,
      city: store.getters['user/data'].city,
      home: store.getters['user/data'].home,
      intercom: store.getters['user/data'].intercom,
      floor: store.getters['user/data'].floor,
      description: store.getters['user/data'].description,
    }
    return {form}
  },
  data() {
    return {
      valid: true,
      checkbox: false,
      updatingErrors: {
        exists: false,
        data: []
      },
      floorArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
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
      emailRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('emailAddress')}),
        v => /.+@.+/.test(v) || this.$t('validationText.mustBeValid', {fieldName: this.$t('emailAddress')}),
      ],
    }
  },
  methods: {
    async edit() {
      if (this.$refs.form.validate()) {
        await this.$store.dispatch('user/update', this.form).then(response => {
          this.$toast.success("Successfully updated", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false
          });
          this.updatingErrors = Object.assign({}, this.updatingErrors, {
            data: [],
            exists: false
          })
        }).catch((error) => {
          if (error.response.data.errorMessage) {
            this.$toast.error(error.response.data.errorMessage, {
              position: "top-right",
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: false,
              closeButton: "button",
              icon: true,
              rtl: false
            });
          }
          if (error.response.data.errors) {
            this.updatingErrors = Object.assign({}, this.updatingErrors, {
              data: error.response.data.errors,
              exists: true
            })
          }
        })
      }
    },
  }
}
</script>

<style scoped>
#user-profile {
  margin-top: 9vw;
}

.user-profile_top_section_header_hr {
  width: 8vw;
  border: 0.075vw solid #ffffff;
  background-color: #ffffff;
}

.user-profile_top_section_header {
  font-size: 3.5vw;
  width: 100%;
}

.user-profile_orders_card {
  background-color: #1212126b;
}
</style>
