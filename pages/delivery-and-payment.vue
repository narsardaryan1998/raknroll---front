<template>
  <div id="deliveryAndPayment" class="text-center">
    <client-only>
      <div class="pages_top_with_animation d-flex align-center justify-center pt-10">
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
                 data-aos-delay="300" data-aos-duration="1000"> {{ $t('menuLinks.delivery-and-payment') }}</p>
            </div>
          </div>
        </div>
        <div class="ml-3"
             data-aos="fade-left"
             data-aos-duration="1000">
          <hr>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "delivery-and-payment"
}
</script>

<style scoped>
#deliveryAndPayment {
  margin-top: 18vh;
}
</style>
