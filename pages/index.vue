<template>
  <div>
    <div style="height: 500px"></div>
    <kinesis-container
      event="scroll">
      <kinesis-element
        class="ggtt"
        tag="img"
        :src="'https://dmzn2b8hkpq8b.cloudfront.net/images/products/515x515/S284986.jpg'"
        :strength="100"
        type="translate"/>
    </kinesis-container>
    <div style="height: 500px"></div>

  </div>
</template>
<script>
  import {KinesisContainer, KinesisElement} from 'vue-kinesis'

  export default {
    components: {
      KinesisContainer,
      KinesisElement,
    },
  }
</script>

<style scoped>
  .ggtt {
    padding-left: 150px;
  }
</style>
