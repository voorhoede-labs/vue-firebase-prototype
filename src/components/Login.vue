<template>
	<div class="login">
		<h3>Sign In</h3>
		<input v-model="email" type="text" placeholder="Email">
		<input v-model="password" type="password" placeholder="Password">
		<button @click="signIn">Connection</button>
		<p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		name: 'login',
		data: function() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signIn: function() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						this.$router.replace('hello')
					},
					(err) => {
						alert('oops. ' + err.message)
					}
				)

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
