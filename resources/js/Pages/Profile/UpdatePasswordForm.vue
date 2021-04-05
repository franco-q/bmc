<template>
	<form @submit.prevent="updatePassword">
		<card>
			<template #header>
				<h4 class="title">Actualizar contraseña</h4>
				<p class="text-muted">
					Asegúrese de que su cuenta esté usando una contraseña larga y aleatoria para
					mantenerse seguro.
				</p>
			</template>

			<base-input
				type="password"
				label="Contraseña actual"
				v-model="form.current_password"
				id="current_password"
				:error="form.errors.current_password"
				autocomplete="current-password"
				:class="{ 'has-danger': form.errors.current_password }"
			/>
			<base-input
				type="password"
				label="Nueva contraseña"
				v-model="form.password"
				:error="form.errors.password"
				id="password"
				autocomplete="new-password"
				:class="{ 'has-danger': form.errors.password }"
			/>
			<base-input
				type="password"
				label="Confirmar contraseña"
				v-model="form.password_confirmation"
				:error="form.errors.password_confirmation"
				id="password_confirmation"
				:class="{ 'has-danger': form.errors.password_confirmation }"
				autocomplete="new-password"
			/>

			<div slot="footer" class="d-flex justify-content-center justify-content-md-end">
				<base-button
					native-type="submit"
					type="primary"
					class="btn-fill "
					:disabled="form.processing"
				>
					GUARDAR
				</base-button>
			</div>
		</card>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				form: this.$inertia.form({
					current_password: '',
					password: '',
					password_confirmation: ''
				})
			}
		},

		methods: {
			updatePassword() {
				this.form.put(route('user-password.update'), {
					errorBag: 'updatePassword',
					preserveScroll: true,
					onSuccess: () => this.form.reset(),
					onError: () => {
						if (this.form.errors.password) {
							this.form.reset('password', 'password_confirmation')
							this.$refs.password.focus()
						}

						if (this.form.errors.current_password) {
							this.form.reset('current_password')
							this.$refs.current_password.focus()
						}
					}
				})
			}
		}
	}
</script>
