<template>
	<card>
		<template #header>
			<h4 class="title">Borrar cuenta</h4>
			<p class="text-muted">
				Elimina permanentemente tu cuenta.
			</p>
		</template>

		<div class="max-w-xl text-sm text-gray-600">
			Una vez que se elimine su cuenta, todos sus recursos y datos serán permanentemente
			eliminado. Antes de eliminar su cuenta, descargue cualquier dato o información que desea
			retener.
		</div>

		<div slot="footer" class="d-flex justify-content-center justify-content-md-end">
			<base-button type="danger" class="btn-fill" @click="confirmUserDeletion">
				BORRAR CUENTA
			</base-button>
		</div>

		<!-- Delete Account Confirmation Modal -->
		<jet-dialog-modal :show="confirmingUserDeletion" @close="closeModal">
			<template #title>
				Borrar cuenta
			</template>

			<template #content>
				¿Estás seguro de que deseas eliminar tu cuenta? Una vez eliminada su cuenta, todos
				de sus recursos y datos se eliminarán de forma permanente. Por favor introduzca su
				contraseña para confirmar que desea eliminar permanentemente su cuenta.

				<div class="mt-4">
					<base-input
						ref="password"
						placeholder="Contraseña"
						v-model="form.password"
						id="password"
						:error="form.errors.password"
						autocomplete="current-password"
						:class="{ 'has-danger': form.errors.password }"
						@keyup.enter="deleteUser"
					/>
				</div>
			</template>

			<template #footer>
				<base-button type="secondary" class="btn-fill" @click.native="closeModal">
					CANCELAR
				</base-button>
				<base-button
					type="danger"
					class="btn-fill"
					:disabled="form.processing"
					@click.native="deleteUser"
				>
					BORRAR CUENTA
				</base-button>
			</template>
		</jet-dialog-modal>
	</card>
</template>

<script>
	// import JetActionSection from '@/Jetstream/ActionSection'
	import JetDialogModal from '@/Jetstream/DialogModal'
	// import JetDangerButton from '@/Jetstream/DangerButton'
	// import JetInput from '@/Jetstream/Input'
	// import JetInputError from '@/Jetstream/InputError'
	// import JetSecondaryButton from '@/Jetstream/SecondaryButton'

	export default {
		components: {
			// JetActionSection,
			// JetDangerButton,
			JetDialogModal
			// JetInput,
			// JetInputError,
			// JetSecondaryButton
		},

		data() {
			return {
				confirmingUserDeletion: false,

				form: this.$inertia.form({
					password: ''
				})
			}
		},

		methods: {
			confirmUserDeletion() {
				console.log(this)
				this.confirmingUserDeletion = true

				setTimeout(() => this.$refs.password.focus(), 250)
			},

			deleteUser() {
				this.form.delete(route('current-user.destroy'), {
					preserveScroll: true,
					onSuccess: () => this.closeModal(),
					onError: () => this.$refs.password.focus(),
					onFinish: () => this.form.reset()
				})
			},

			closeModal() {
				this.confirmingUserDeletion = false

				this.form.reset()
			}
		}
	}
</script>
