<template>
	<div class="wrapper wrapper-full-page">
		<div class="d-flex flex-column full-page justify-content-center login-page">
			<div class="container">
				<div v-if="status" class="mb-4 font-medium text-sm text-green-600">
					{{ status }}
				</div>
				<div class="col-lg-4 col-md-6 ml-auto mr-auto">
					<ValidationObserver v-slot="{ handleSubmit }">
						<form @submit.prevent="handleSubmit(submit)">
							<card class="card-login card-white">
								<template slot="header">
									<img src="img/card-primary.png" alt="" />
									<h1 class="card-title p-3">Log in</h1>
								</template>
								<div>
									<ValidationProvider
										name="email"
										rules="required|email"
										v-slot="{ passed, failed, errors }"
									>
										<base-input
											required
											v-model="form.email"
											type="email"
											placeholder="Email"
											addon-left-icon="tim-icons icon-email-85"
											:error="errors[0]"
											:class="{ 'has-success': passed, 'has-danger': failed }"
										>
										</base-input>
									</ValidationProvider>
									<ValidationProvider
										name="password"
										rules="required|min:5"
										v-slot="{ passed, failed, errors }"
									>
										<base-input
											required
											v-model="form.password"
											placeholder="Password"
											addon-left-icon="tim-icons icon-lock-circle"
											type="password"
											:error="errors[0]"
											autocomplete="current-password"
											:class="{ 'has-success': passed, 'has-danger': failed }"
										>
										</base-input>
									</ValidationProvider>
								</div>
								<div slot="footer">
									<base-button
										native-type="submit"
										type="primary"
										class="mb-1"
										:class="{ 'opacity-25': form.processing }"
										:disabled="form.processing"
										size="lg"
										block
									>
										ENTRAR
									</base-button>
									<div class="text-center">
										<inertia-link
											:href="route('register')"
											class="link footer-link"
										>
											CREAR CUENTA
										</inertia-link>
									</div>
								</div>
							</card>
						</form>
					</ValidationObserver>
				</div>
			</div>
		</div>
		<notifications />
	</div>
</template>

<script>
	import { BaseButton } from '@/components'
	import { extend } from 'vee-validate'
	import { required, email, min } from 'vee-validate/dist/rules'

	extend('email', email)
	extend('min', min)
	extend('required', required)

	export default {
		components: {
			BaseButton
		},

		props: {
			status: String
		},

		data() {
			return {
				form: this.$inertia.form({
					email: '',
					password: '',
					remember: false
				})
			}
		},

		watch: {
			$page: {
				deep: true,
				handler({ props }) {
					this.$notify({
						message: Object.values(props.errors)
							.map(err => `<p>${err}</p>`)
							.join('<br>'),
						timeout: 30000,
						icon: 'tim-icons icon-bell-55',
						horizontalAlign: 'center',
						verticalAlign: 'bottom',
						type: 'danger'
					})
				}
			}
		},

		methods: {
			submit() {
				this.form
					.transform(data => ({
						...data,
						remember: this.form.remember ? 'on' : ''
					}))
					.post(this.route('login'), {
						onFinish: () => this.form.reset('password')
					})
			}
		}
	}
</script>
