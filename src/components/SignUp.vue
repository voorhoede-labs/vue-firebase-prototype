<template>
	<div class="sign-up">
		<h3>Let's create a new account</h3>
		<input v-model="email" type="text" placeholder="Email">
		<input v-model="password" type="password" placeholder="Password">
		<button>Sign Up</button>
		<span>or go back to <router-link to="/login">login</router-link></span>
	</div>
</template>

<script>
	export default {
		name: 'signUp',
		data: function() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signUp: function() {

			}
		}
	}
</script>

<style scoped>
	.sign-up {
		display: flex;
		flex-direction: column;
		margin: auto;
		max-width: 400px;
	}
	.sign-up input {
		margin-bottom: 25px;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 1px solid grey;
		padding: 5px;
	}
</style>
