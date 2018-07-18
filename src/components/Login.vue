<template>
	<div class="login">
		<h3>Sign In</h3>
		<input type="text" placeholder="Email">
		<input type="password" placeholder="Password">
		<button @click="login">Connection</button>
		<p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data: function() {
			return {}
		},
		methods: {
			login: function() {
				this.$router.replace('hello')
			}
		}
	}
</script>

<style scoped>
	.login {
		display: flex;
		flex-direction: column;
		margin: auto;
		max-width: 400px;
	}
	.login input {
		margin-bottom: 25px;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 1px solid grey;
		padding: 5px;
	}
</style>
