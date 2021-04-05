<template>
	<card>
		<template #header>
			<h4 class="title">Autenticación de dos factores</h4>
			<p class="text-muted">
				Agregue seguridad adicional a su cuenta mediante la autenticación de dos factores.
			</p>
		</template>
		<h3 class="text-lg font-medium text-gray-900" v-if="twoFactorEnabled">
			Ha habilitado la autenticación de dos factores.
		</h3>

		<h3 class="text-lg font-medium text-gray-900" v-else>
			No ha habilitado la autenticación de dos factores.
		</h3>

		<div class="mt-3 max-w-xl text-sm text-gray-600">
			<p>
				Cuando la autenticación de dos factores está habilitada, se le solicitará un token
				aleatorio seguro durante la autenticación. Puede recuperar este token de la
				aplicación <strong class="text-nowrap">Google Authenticator</strong> de su teléfono.
			</p>
		</div>

		<div v-if="twoFactorEnabled">
			<div v-if="qrCode">
				<div class="mt-4 max-w-xl text-sm text-gray-600">
					<p class="font-semibold">
						La autenticación de dos factores ahora está habilitada. Escanee el siguiente
						código QR usando la aplicación de autenticación de su teléfono.
					</p>
				</div>

				<div class="mt-4 dark:p-4 dark:w-56 dark:bg-white" v-html="qrCode"> </div>
			</div>

			<div v-if="recoveryCodes.length > 0">
				<div class="mt-4 max-w-xl text-sm text-gray-600">
					<p class="font-semibold">
						Guarde estos códigos de recuperación en un administrador de contraseñas
						seguro. Pueden usarse para recuperar el acceso a su cuenta si su dispositivo
						de autenticación de dos factores está perdió.
					</p>
				</div>

				<div
					class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"
				>
					<div v-for="code in recoveryCodes" :key="code">
						{{ code }}
					</div>
				</div>
			</div>
		</div>

		<div slot="footer" class="d-flex justify-content-center justify-content-md-end">
			<div v-if="!twoFactorEnabled">
				<jet-confirms-password @confirmed="enableTwoFactorAuthentication">
					<base-button
						native-type="button"
						type="primary"
						class="btn-fill "
						:disabled="enabling"
					>
						HABILITAR
					</base-button>
				</jet-confirms-password>
			</div>

			<div v-else>
				<jet-confirms-password @confirmed="regenerateRecoveryCodes">
					<base-button
						native-type="button"
						type="secondary"
						class="btn-fill "
						v-if="recoveryCodes.length > 0"
					>
						REGENERAR CODIGOS
					</base-button>
				</jet-confirms-password>

				<jet-confirms-password @confirmed="showRecoveryCodes">
					<base-button
						native-type="button"
						type="secondary"
						class="btn-fill "
						v-if="recoveryCodes.length === 0"
					>
						MOSTRAR CODIGOS
					</base-button>
				</jet-confirms-password>

				<jet-confirms-password @confirmed="disableTwoFactorAuthentication">
					<base-button type="danger" class="btn-fill " :disabled="disabling">
						HABILITAR
					</base-button>
				</jet-confirms-password>
			</div>
		</div>
	</card>
</template>

<script>
	import JetConfirmsPassword from '@/Jetstream/ConfirmsPassword'

	export default {
		components: {
			JetConfirmsPassword
		},

		data() {
			return {
				enabling: false,
				disabling: false,

				qrCode: null,
				recoveryCodes: []
			}
		},

		methods: {
			enableTwoFactorAuthentication() {
				this.enabling = true

				this.$inertia.post(
					'/user/two-factor-authentication',
					{},
					{
						preserveScroll: true,
						onSuccess: () => Promise.all([this.showQrCode(), this.showRecoveryCodes()]),
						onFinish: () => (this.enabling = false)
					}
				)
			},

			showQrCode() {
				return axios.get('/user/two-factor-qr-code').then(response => {
					this.qrCode = response.data.svg
				})
			},

			showRecoveryCodes() {
				return axios.get('/user/two-factor-recovery-codes').then(response => {
					this.recoveryCodes = response.data
				})
			},

			regenerateRecoveryCodes() {
				axios.post('/user/two-factor-recovery-codes').then(response => {
					this.showRecoveryCodes()
				})
			},

			disableTwoFactorAuthentication() {
				this.disabling = true

				this.$inertia.delete('/user/two-factor-authentication', {
					preserveScroll: true,
					onSuccess: () => (this.disabling = false)
				})
			}
		},

		computed: {
			twoFactorEnabled() {
				return !this.enabling && this.$page.props.user.two_factor_enabled
			}
		}
	}
</script>
