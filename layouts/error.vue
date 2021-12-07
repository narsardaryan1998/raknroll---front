<template>
  <v-app dark>
    <div id="errorPage">
      <h1>
        {{ pageNotFound }}
      </h1>
      <span class="error-message">{{ $t('pageNotFound') }}.
        <NuxtLink
          :to='localePath(`/products/all-catalog/all-brands/%7B"display_quantity":8,"discounted":true%7D/page-1`)'>
        {{ $t('ourCatalog') }}
      </NuxtLink></span>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 70px;
}

#errorPage {
  margin-top: 20vh;
  text-align: center;
}

.error-message {
  font-size: 35px;
}
</style>
