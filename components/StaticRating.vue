<template>
  <div id="staticRaiting">
    <div class="feedback">
      <div class="rating">
        <label v-for="n in rateValue"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticRating",
  props: ['rateValue']
}
</script>

<style scoped>
.rating{display:flex;width:100%;justify-content:flex-end;overflow:hidden;flex-direction:row-reverse;position:relative}.rating>label{cursor:pointer;width:25px;height:25px;margin-top:auto;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23B71C1C' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:center;background-size:76%;transition:.3s}.feedback{width:100%;display:flex;flex-direction:column;flex-wrap:wrap;align-items:center}
</style>
