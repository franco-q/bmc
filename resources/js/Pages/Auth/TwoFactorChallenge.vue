<template>
	<div class="wrapper wrapper-full-page">
		<div class="d-flex flex-column full-page justify-content-center login-page">
			<div class="container">
				<div class="col-lg-4 col-md-6 ml-auto mr-auto">
					<form @submit.prevent="submit">
						<card class="card-lock card-white text-center">
							<template slot="header">
								<div class="d-flex justify-content-center">
									<Brand class="h-14" slot="header" />
								</div>
							</template>
							<h4 class="card-title">Autenticación de doble Factor</h4>
							<h5 class="text-muted">
								<template v-if="!recovery">
									Confirme el acceso a su cuenta ingresando el código de
									autenticación proporcionado por su aplicación de autenticación.
								</template>
								<template v-else>
									Confirme el acceso a su cuenta ingresando uno de sus códigos de
									recuperación de emergencia.
								</template>
							</h5>

							<jet-validation-errors class="mb-4" />

							<div v-if="!recovery">
								<base-input
									ref="code"
									id="code"
									type="text"
									inputmode="numeric"
									placeholder="Código de autenticación"
									addon-left-icon="tim-icons icon-key-25"
									v-model="form.code"
									autofocus
									autocomplete="one-time-code"
								/>
							</div>
							<div v-else>
								<base-input
									ref="recovery_code"
									id="recovery_code"
									type="text"
									placeholder="Código de recuperación"
									addon-left-icon="tim-icons icon-key-25"
									v-model="form.recovery_code"
									autocomplete="one-time-code"
								/>
							</div>

							<template slot="footer">
								<base-button
									slot="footer"
									native-type="submit"
									type="primary"
									size="lg"
									round
									:disabled="form.processing"
								>
									CONFIRMAR
								</base-button>
								<div class="text-center mt-1">
									<button
										type="button"
										class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"
										@click.prevent="toggleRecovery"
									>
										<small v-if="!recovery">
											Usar un código de recuperación
										</small>
										<small v-else>
											Usar un código de autenticación
										</small>
									</button>
								</div>
							</template>
						</card>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Brand from '@/components/Brand'
	import JetValidationErrors from '@/Jetstream/ValidationErrors'

	export default {
		components: {
			Brand,
			JetValidationErrors
		},

		data() {
			return {
				recovery: false,
				form: this.$inertia.form({
					code: '',
					recovery_code: ''
				})
			}
		},

		methods: {
			toggleRecovery() {
				this.recovery ^= true

				this.$nextTick(() => {
					if (this.recovery) {
						this.$refs.recovery_code.focus()
						this.form.code = ''
					} else {
						this.$refs.code.focus()
						this.form.recovery_code = ''
					}
				})
			},

			submit() {
				this.form.post(this.route('two-factor.login'))
			}
		}
	}
</script>
