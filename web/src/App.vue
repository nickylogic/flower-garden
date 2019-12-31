<template>
	<div id="app">
		<h1>Flower Garden</h1>
		<FlowerGarden/>
	</div>
</template>

<script>
import FlowerGarden from 'FlowerGarden.vue'

export default {
	components: {
		FlowerGarden
	}
}
</script>

<style lang="css">
@import '../assets/app.css';
</style>