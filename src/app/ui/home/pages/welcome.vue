<template lang="pug">
	div.welcome
		h2 Welcome to SVG Editor
		div.info
			router-link(to="/projects") List of the Projects
</template>

<script>
	export default {
		name: "welcome"
	}
</script>

<style lang="scss">
	.welcome {
		text-align: center;
		margin-top: 50px;

		h2 {
			color: green;
		}

		.info {
			margin: 200px;
		}
	}
</style>