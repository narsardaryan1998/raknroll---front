<template>
  <div id="user-profile">
    <div class="container container-padding">
      <div class="user-profile_top_section d-flex justify-space-between align-center">
        <div class="user-profile_top_section_header d-flex align-center">
          <div>
            <hr class="user-profile_top_section_header_hr">
          </div>
          <div class="ml-4">
            <span>Your details</span>
          </div>
        </div>
      </div>
      <div class="row user-profile_details_and_orders margin-top-from-header">
        <div class="col-md-8 col-12 user-profile_details">
          <div class="row p-5">
            <div class="col-md-12">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation>
                <div class="row">
                  <div class="col-md-4 col-12">
                    <v-text-field
                      color="red darken-4"
                      v-model="form.name"
                      label="Имя">
                    </v-text-field>
                  </div>
                  <div class="col-md-4 col-12">
                    <v-text-field
                      color="red darken-4"
                      v-model="form.email"
                      label="eMail"
                      disabled>
                    </v-text-field>
                  </div>
                  <div class="col-md-4 col-12">
                    <v-text-field
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
                      v-model="form.role"
                      label="Роль"
                      disabled>
                    </v-text-field>
                  </div>
                  <div class="col-md-6 col-12">
                    <v-text-field
                      color="red darken-4"
                      v-model="form.phone"
                      label="Телефон"
                      disabled>
                    </v-text-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <v-text-field
                      color="red darken-4"
                      v-model="form.address"
                      label="Адрес">
                    </v-text-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 col-12">
                    <v-text-field
                      color="red darken-4"
                      v-model="form.city"
                      label="Город">
                    </v-text-field>
                  </div>
                  <div class="col-md-4 col-12">
                    <v-text-field
                      type="number"
                      color="red darken-4"
                      v-model="form.home"
                      label="Дом">
                    </v-text-field>
                  </div>
                  <div class="col-md-4 col-12">
                    <v-text-field
                      color="red darken-4"
                      v-model="form.intercom"
                      label="Домофон">
                    </v-text-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <v-textarea
                      color="red darken-4"
                      name="input-7-4"
                      label="Обо мне"
                      v-model="form.description">
                    </v-textarea>
                  </div>
                </div>
                <div class="row float-right">
                  <div class="col-md-12">
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="$refs.form.validate() ? dialog = true : dialog = false">
                      Сохранить
                      <v-icon
                        dark
                        right>
                        mdi-checkbox-marked-circle
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
                    <img :src="this.$store.getters['user/data'].user.avatar"
                         alt="John">
                  </v-avatar>
                </div>
                <div class="col-md-4">
                  <v-list-item dark>
                    <v-list-item-content class="text-right">
                      <v-list-item-title class="title">
                        <span>Баланс</span>
                        <v-icon>
                          mdi-wallet
                        </v-icon>
                      </v-list-item-title>
                      <v-list-item-subtitle color="white">
                        {{ this.$store.getters['user/data'].user.balance }} ₴
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="row">
                <div class="col-md-12 text-center">
                  <h3>{{ this.$store.getters['user/data'].user.name }}</h3>
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
      <v-dialog
        v-model="dialog"
        max-width="290">
        <v-card>
          <v-card-title class="headline">Вы уверены?</v-card-title>
          <v-card-text>Вы хотите сохранить изменения?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue"
              text
              @click="edit(false)">
              Отменить
            </v-btn>
            <v-btn
              color="red"
              text
              @click="edit(true)">
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  async fetch() {
    await this.$store.dispatch('user/getData', {slug: this.$route.params.slug});
    this.form = Object.assign({}, this.form, {
      id: this.$store.getters['user/data'].user.id,
      name: this.$store.getters['user/data'].user.name,
      email: this.$store.getters['user/data'].user.email,
      profession: this.$store.getters['user/data'].user.profession,
      role: this.$store.getters['user/data'].user.role,
      phone: this.$store.getters['user/data'].user.phone,
      address: this.$store.getters['user/data'].user.address,
      city: this.$store.getters['user/data'].user.city,
      home: this.$store.getters['user/data'].user.home,
      intercom: this.$store.getters['user/data'].user.intercom,
      floor: this.$store.getters['user/data'].user.floor,
      description: this.$store.getters['user/data'].user.description,
    })
  },
  data() {
    return {
      valid: true,
      checkbox: false,
      dialog: false,
      floorArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      form: {
        slug: this.$route.params.slug,
        id: '',
        name: '',
        email: '',
        profession: '',
        role: '',
        phone: '',
        address: '',
        city: '',
        home: '',
        intercom: '',
        floor: '',
        description: '',
        blocked: '',
        best_customer: '',
      },
    }
  },
  mounted() {
    // console.log(this.$auth.user);
  },
  methods: {
    edit(editing) {
      if (editing) {

      } else {
        // Swal.fire({
        //   position: 'top-end',
        //   icon: 'info',
        //   title: 'Изменения не сохраняются',
        //   showConfirmButton: false,
        //   timer: 1500
        // });
        // this.dialog = false;
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
