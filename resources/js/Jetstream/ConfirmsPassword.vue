<template>
	<span>
		<span @click="startConfirmingPassword">
			<slot />
		</span>

		<jet-dialog-modal :show="confirmingPassword" @close="closeModal">
			<template #title>
				{{ title }}
			</template>

			<template #content>
				{{ content }}
				<div class="mt-4">
					<base-input
						type="password"
						ref="password"
						placeholder="Contraseña"
						v-model="form.password"
						id="password"
						:error="form.error"
						autocomplete="current-password"
						:class="{ 'has-danger': form.error }"
						@keyup.enter="confirmPassword"
					/>
				</div>
			</template>

			<template #footer>
				<base-button type="secondary" class="btn-fill" @click="closeModal">
					CANCELAR
				</base-button>
				<base-button
					type="primary"
					class="btn-fill"
					@click="confirmPassword"
					:disabled="form.processing"
				>
					{{ button }}
				</base-button>
			</template>
		</jet-dialog-modal>
	</span>
</template>

<script>
	// import JetButton from './Button'
	import JetDialogModal from './DialogModal'
	// import JetInput from './Input'
	// import JetInputError from './InputError'
	// import JetSecondaryButton from './SecondaryButton'

	export default {
		emits: ['confirmed'],

		props: {
			title: {
				default: 'Confirmar contraseña'
			},
			content: {
				default: 'Por su seguridad, confirme su contraseña para continuar.'
			},
			button: {
				default: 'CONFIRMAR'
			}
		},

		components: {
			// JetButton,
			JetDialogModal
			// JetInput,
			// JetInputError
			// JetSecondaryButton
		},

		data() {
			return {
				confirmingPassword: false,
				form: {
					password: '',
					error: ''
				}
			}
		},

		methods: {
			startConfirmingPassword() {
				axios.get(route('password.confirmation')).then(response => {
					if (response.data.confirmed) {
						this.$emit('confirmed')
					} else {
						this.confirmingPassword = true

						setTimeout(() => this.$refs.password.focus(), 250)
					}
				})
			},

			confirmPassword() {
				this.form.processing = true

				axios
					.post(route('password.confirm'), {
						password: this.form.password
					})
					.then(() => {
						this.form.processing = false
						this.closeModal()
						this.$nextTick(() => this.$emit('confirmed'))
					})
					.catch(error => {
						this.form.processing = false
						this.form.error = error.response.data.errors.password[0]
						this.$refs.password.focus()
					})
			},

			closeModal() {
				this.confirmingPassword = false
				this.form.password = ''
				this.form.error = ''
			}
		}
	}
</script>
