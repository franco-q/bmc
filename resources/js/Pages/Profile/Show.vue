<template>
	<app-layout>
		<div class="container pt-4">
			<div class="row">
				<div class="col-md-6" v-if="$page.props.jetstream.canUpdateProfileInformation">
					<update-profile-information-form :user="$page.props.user" />
				</div>
				<div class="col-md-6" v-if="$page.props.jetstream.canUpdatePassword">
					<update-password-form />
				</div>
				<div class="col-md-6" v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
					<two-factor-authentication-form />
				</div>
				<div class="col-md-6">
					<logout-other-browser-sessions-form :sessions="sessions" />
				</div>
				<div class="col-12" v-if="$page.props.jetstream.hasAccountDeletionFeatures">
					<delete-user-form />
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
	import AppLayout from '@/Layouts/AppLayout'
	import DeleteUserForm from './DeleteUserForm'
	import LogoutOtherBrowserSessionsForm from './LogoutOtherBrowserSessionsForm'
	import TwoFactorAuthenticationForm from './TwoFactorAuthenticationForm'
	import UpdatePasswordForm from './UpdatePasswordForm'
	import UpdateProfileInformationForm from './UpdateProfileInformationForm'

	export default {
		props: ['sessions'],

		components: {
			AppLayout,
			DeleteUserForm,
			LogoutOtherBrowserSessionsForm,
			TwoFactorAuthenticationForm,
			UpdatePasswordForm,
			UpdateProfileInformationForm
		}
	}
</script>
