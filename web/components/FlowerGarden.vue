<template>
  <svg v-bind:height="height" v-bind:width="width">
    <polygon v-bind:points="polyPoints"/>
  </svg>
</template>

<script>
let points = [
  [200,10],
  [250,190],
  [160,180]
];
let xsort = points.map((p)=>p[0]).sort();
let ysort = points.map((p)=>p[1]).sort();
let n = points.length;
let xmax = xsort[n-1];
let ymax = ysort[n-1];

module.exports = {
  mounted () {
    console.log('xmax = '+xmax);
    console.log('ymax = '+ymax);
  },
  data: () => ({
    width: xmax,
    height: ymax,
    polyPoints: points.map((p)=>p[0]+','+p[1]).join(' '),
  })
}
</script>

<style scoped>
  span {
    background-color: lightgray;
  }
  polygon {
    fill:lime;stroke:purple;stroke-width:1
  }
</style>