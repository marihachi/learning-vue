<template>
	<div>
		<h1>random number</h1>
		<p>{{number}}</p>
		<button @click="change">Change</button>
	</div>
</template>

<script>
	function random () {
		return Math.round(Math.random() * 100);
	}

	export default {
		data() {
			return {
				number: random()
			};
		},
		methods: {
			change() {
				this.number = random();
			}
		}
	};
</script>

<style lang="scss" scoped>

</style>
