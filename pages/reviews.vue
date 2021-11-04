<template>
  <div id="reviews" class="container container-padding mb-5">
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
          perferendis repellat voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi eum ex
          mollitia placeat porro, quaerat! Ad, commodi dolore fugit, minima nemo nisi nostrum quam quod sit veniam vitae
          voluptatum.
        </div>
        <div class="col-md-6 col-12 pt-0">
          <v-form
            ref="reviewForm"
            v-model="valid"
            lazy-validation>
            <div class="row">
              <div class="col-md-12 reviews_write_review_section text-center">
                <span class="reviews_write_review_section_text">{{ $t('writeYourReview') }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 pt-0">
                <Rating></Rating>
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
              <div class="col-md-8 offset-2 pt-0">
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
              <div class="col-md-8 offset-2 pt-0">
                <v-textarea
                  filled
                  :rules="messageRules"
                  counter="1000"
                  name="message"
                  v-model="reviewForm.message"
                  :label="$t('yourOpinion')"
                  color="white"
                  required>
                </v-textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 pt-0 text-center">
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
    </div>
    <div class="reviews_all_testimonials">
      <div class="row">
        <div class="col-12 col-md-6">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6 offset-md-6 offset-cart-2">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6 offset-md-6 offset-cart-2">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6 offset-md-6 offset-cart-2">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6 offset-md-6 offset-cart-2">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6 offset-md-6 offset-cart-2">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6 offset-md-6 offset-cart-2">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6 offset-md-6 offset-cart-2">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="col-12 col-md-6 offset-md-6 offset-cart-2">
          <v-card
            light
            class="rounded-lg reviews_all_testimonials_card"
            elevation="6">
            <div class="row">
              <div class="col-md-2 reviews_all_testimonials_card_customer-avatar offset-cart-left-2">
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
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_customer-name">
                    <span>Вячеслав</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 reviews_all_testimonials_card_review pt-0">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur corporis deleniti dicta dolor ducimus fugiat fugit harum illum incidunt iste iure iusto non optio perspiciatis, quibusdam quo reiciendis voluptate!</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
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
  },
  methods: {
    sendReview() {
      if (this.$refs.reviewForm.validate() && !this.$auth.loggedIn) {

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
  font-size: 2.6vw;
}

.reviews_all_testimonials_card {
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/concrete-texture.png");
  background-repeat: repeat;
}

.reviews_all_testimonials_card_customer-name {
  font-size: 2.1vw;
}

.reviews_all_testimonials_card_review {
  font-size: 0.85vw;
}
</style>
