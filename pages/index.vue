<template>
  <div>
    <Intro></Intro>
    <Recommended></Recommended>
    <CounterSection></CounterSection>
    <div style="height: 1500px;" class="vzgooo">
      {{ this.homeData }} 99999
    </div>
  </div>
</template>
<script>

  import Intro from '~/components/Intro'
  import Recommended from '~/components/Recommended'
  import CounterSection from '~/components/CounterSection'
  import {mapGetters} from "vuex";

  export default {
    async fetch({store}) {
      await store.dispatch('home/getHomePageData');
    },
    // mounted() {
    //   this.getHomePageData();
    // },
    components: {
      Intro,
      Recommended,
      CounterSection,
    },

    computed: {
      ...mapGetters({
        homeData: "home/homeData"
      })
    },

    // methods: {
    //   ...mapActions({
    //     getHomePageData: 'getHomePageData',
    //   }),
    // },

    watch: {
      $route(toR) {
        console.log(toR);
      },
      homeData(val) {
        console.log(val);
      }
    }
  }
</script>
<style scoped>

</style>
