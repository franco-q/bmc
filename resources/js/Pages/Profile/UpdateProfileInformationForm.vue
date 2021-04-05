<template>
	<form @submit.prevent="updateProfileInformation">
		<card>
			<template #header>
				<h4 class="title">Editar Datos</h4>
				<p class="text-muted">
					Actualice la información de perfil y la dirección de correo electrónico de su
					cuenta.
				</p>
			</template>

			<template>
				<!-- Profile Photo -->
				<div
					class="col-span-6 sm:col-span-4"
					v-if="$page.props.jetstream.managesProfilePhotos"
				>
					<!-- Profile Photo File Input -->
					<input type="file" class="hidden" ref="photo" @change="updatePhotoPreview" />

					<jet-label for="photo" value="Photo" />

					<!-- Current Profile Photo -->
					<div class="mt-2" v-show="!photoPreview">
						<img
							:src="user.profile_photo_url"
							:alt="user.name"
							class="rounded-full h-20 w-20 object-cover"
						/>
					</div>

					<!-- New Profile Photo Preview -->
					<div class="mt-2" v-show="photoPreview">
						<span
							class="block rounded-full w-20 h-20"
							:style="
								'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' +
									photoPreview +
									'\');'
							"
						>
						</span>
					</div>

					<jet-secondary-button
						class="mt-2 mr-2"
						type="button"
						@click.prevent="selectNewPhoto"
					>
						Select A New Photo
					</jet-secondary-button>

					<jet-secondary-button
						type="button"
						class="mt-2"
						@click.prevent="deletePhoto"
						v-if="user.profile_photo_path"
					>
						Remove Photo
					</jet-secondary-button>

					<jet-input-error :message="form.errors.photo" class="mt-2" />
				</div>

				<!-- Name -->
				<div class="">
					<base-input
						type="text"
						label="Nombre"
						placeholder="Nombre"
						v-model="form.name"
						id="name"
						autocomplete="name"
					/>
					<jet-input-error :message="form.errors.name" class="mt-2" />
				</div>

				<!-- Email -->
				<div class="">
					<base-input
						type="text"
						label="Email"
						placeholder="Email"
						v-model="form.email"
						id="email"
					/>
					<jet-input-error :message="form.errors.email" class="mt-2" />
				</div>
			</template>

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
		<notifications />
	</form>
</template>

<script>
	import JetInputError from '@/Jetstream/InputError'
	import JetLabel from '@/Jetstream/Label'
	import JetSecondaryButton from '@/Jetstream/SecondaryButton'

	export default {
		components: {
			JetInputError,
			JetLabel,
			JetSecondaryButton
		},

		props: ['user'],

		data() {
			return {
				form: this.$inertia.form({
					_method: 'PUT',
					name: this.user.name,
					email: this.user.email,
					photo: null
				}),

				photoPreview: null
			}
		},

		methods: {
			updateProfileInformation() {
				if (this.$refs.photo) {
					this.form.photo = this.$refs.photo.files[0]
				}

				this.form.post(route('user-profile-information.update'), {
					errorBag: 'updateProfileInformation',
					preserveScroll: true,
					onSuccess: () => {
						this.$notify({
							message: 'Guardado',
							timeout: 30000,
							icon: 'tim-icons icon-check-2',
							type: 'success'
						})
					}
				})
			},

			selectNewPhoto() {
				this.$refs.photo.click()
			},

			updatePhotoPreview() {
				const reader = new FileReader()

				reader.onload = e => {
					this.photoPreview = e.target.result
				}

				reader.readAsDataURL(this.$refs.photo.files[0])
			},

			deletePhoto() {
				this.$inertia.delete(route('current-user-photo.destroy'), {
					preserveScroll: true,
					onSuccess: () => (this.photoPreview = null)
				})
			}
		}
	}
</script>
