<template>
	<div class="wrapper wrapper-full-page">
		<div class="d-flex flex-column full-page login-page">
			<div class="container pt-5">
				<div class="row mt-5">
					<div class="col-lg-5 col-md-6 mr-lg-auto">
						<Brand lg />
						<div class="info-area info-horizontal mt-5">
							<div class="description">
								<h3 class="info-title">Crar nueva cuenta</h3>
								<p class="description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
									obcaecati fugit corporis esse facilis temporibus sint magni, ab
									quas necessitatibus vitae, possimus optio, quidem veniam rem
									ipsum deserunt. Tempore, quos.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 mt-5 mt-md-0">
						<ValidationObserver v-slot="{ handleSubmit }">
							<form @submit.prevent="handleSubmit(submit)">
								<card class="card-register card-white">
									<ValidationProvider
										name="fullname"
										rules="required"
										v-slot="{ passed, failed, errors }"
									>
										<base-input
											required
											v-model="form.name"
											placeholder="Nombre"
											addon-left-icon="tim-icons icon-single-02"
											type="text"
											:error="errors[0]"
											:class="{ 'has-success': passed, 'has-danger': failed }"
										>
										</base-input>
									</ValidationProvider>
									<ValidationProvider
										name="email"
										rules="required|email"
										v-slot="{ passed, failed, errors }"
									>
										<base-input
											required
											v-model="form.email"
											placeholder="Email"
											addon-left-icon="tim-icons icon-email-85"
											type="email"
											:error="errors[0]"
											:class="{ 'has-success': passed, 'has-danger': failed }"
										>
										</base-input>
									</ValidationProvider>
									<ValidationProvider
										name="password"
										rules="required"
										vid="password"
										v-slot="{ passed, failed, errors }"
									>
										<base-input
											required
											v-model="form.password"
											placeholder="Contraseña"
											addon-left-icon="tim-icons icon-lock-circle"
											type="password"
											:error="errors[0]"
											:class="{ 'has-success': passed, 'has-danger': failed }"
										>
										</base-input>
									</ValidationProvider>
									<ValidationProvider
										name="password_confirmation"
										rules="confirmed:password"
										v-slot="{ passed, failed, errors }"
									>
										<base-input
											required
											v-model="form.password_confirmation"
											placeholder="Confirmar contraseña"
											addon-left-icon="tim-icons icon-lock-circle"
											type="password"
											:error="errors[0]"
											:class="{ 'has-success': passed, 'has-danger': failed }"
										>
										</base-input>
									</ValidationProvider>
									<base-checkbox class="text-left" v-model="form.terms">
										Estoy de acuerdo con los
										<a href="#something">Terminos Y condiciones </a>.
									</base-checkbox>
									<base-button
										native-type="submit"
										slot="footer"
										type="primary"
										round
										block
										size="lg"
									>
										CREAR CUENTA
									</base-button>
								</card>
							</form>
						</ValidationObserver>
					</div>
				</div>

				<!-- <form @submit.prevent="submit">
					<div>
						<jet-label for="name" value="Name" />
						<jet-input
							id="name"
							type="text"
							class="mt-1 block w-full"
							v-model="form.name"
							required
							autofocus
							autocomplete="name"
						/>
					</div>

					<div class="mt-4">
						<jet-label for="email" value="Email" />
						<jet-input
							id="email"
							type="email"
							class="mt-1 block w-full"
							v-model="form.email"
							required
						/>
					</div>

					<div class="mt-4">
						<jet-label for="password" value="Password" />
						<jet-input
							id="password"
							type="password"
							class="mt-1 block w-full"
							v-model="form.password"
							required
							autocomplete="new-password"
						/>
					</div>

					<div class="mt-4">
						<jet-label for="password_confirmation" value="Confirm Password" />
						<jet-input
							id="password_confirmation"
							type="password"
							class="mt-1 block w-full"
							v-model="form.password_confirmation"
							required
							autocomplete="new-password"
						/>
					</div>

					<div class="mt-4" v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature">
						<jet-label for="terms">
							<div class="flex items-center">
								<jet-checkbox
									name="terms"
									id="terms"
									v-model:checked="form.terms"
								/>

								<div class="ml-2">
									I agree to the
									<a
										target="_blank"
										:href="route('terms.show')"
										class="underline text-sm text-gray-600 hover:text-gray-900"
										>Terms of Service</a
									>
									and
									<a
										target="_blank"
										:href="route('policy.show')"
										class="underline text-sm text-gray-600 hover:text-gray-900"
										>Privacy Policy</a
									>
								</div>
							</div>
						</jet-label>
					</div>

					<div class="flex items-center justify-end mt-4">
						<inertia-link
							:href="route('login')"
							class="underline text-sm text-gray-600 hover:text-gray-900"
						>
							Already registered?
						</inertia-link>

						<jet-button
							class="ml-4"
							:class="{ 'opacity-25': form.processing }"
							:disabled="form.processing"
						>
							Register
						</jet-button>
					</div>
				</form> -->
			</div>
		</div>
		<notifications />
	</div>
</template>

<script>
	import Brand from '@/components/Brand.vue'
	import { extend } from 'vee-validate'
	import { required, email, confirmed } from 'vee-validate/dist/rules'

	extend('email', email)
	extend('required', required)
	extend('confirmed', confirmed)

	export default {
		components: { Brand },

		data() {
			return {
				form: this.$inertia.form({
					name: '',
					email: '',
					password: '',
					password_confirmation: '',
					terms: false
				})
			}
		},

		methods: {
			submit() {
				this.form.post(this.route('register'), {
					onFinish: () => this.form.reset('password', 'password_confirmation')
				})
			}
		}
	}
</script>
