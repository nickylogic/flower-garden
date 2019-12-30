<template>
	<div id="app">
		<h1>Flower Garden</h1>
		<FlowerGarden/>
	</div>
</template>

<script>
import FlowerGarden from './vue/FlowerGarden.vue'

export default {
	components: {
		FlowerGarden
	}
}
</script>

<style lang="scss">
@import './variables.scss';

*, *::before, *::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $vue-blue;
}

h1 {
	text-align: center;
}
</style>