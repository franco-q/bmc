<template>
	<div>
		<base-nav
			v-model="showMenu"
			type="white"
			:transparent="true"
			menu-classes="justify-content-end"
			class="auth-navbar"
		>
			<div slot="brand" class="navbar-wrapper" v-if="title">
				<a class="navbar-brand" href="#" v-if="title">{{ title }}</a>
			</div>

			<ul class="navbar-nav">
				<li class="nav-item">
					<inertia-link :href="route('register')" class="nav-link">
						<i class="tim-icons icon-laptop"></i> Registro
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('login')" class="nav-link">
						<i class="tim-icons icon-single-02"></i> Ingresar
					</inertia-link>
				</li>
			</ul>
		</base-nav>

		<div class="wrapper wrapper-full-page">
			<div class="full-page">
				<div class="pt-md-5">
					<zoom-center-transition :duration="pageTransitionDuration" mode="out-in">
						<slot></slot>
					</zoom-center-transition>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { BaseNav } from '@/components'
	import { ZoomCenterTransition } from 'vue2-transitions'

	export default {
		components: {
			BaseNav,
			ZoomCenterTransition
		},
		props: {
			backgroundColor: {
				type: String,
				default: 'black'
			},
			title: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				showMenu: false,
				menuTransitionDuration: 250,
				pageTransitionDuration: 200,
				year: new Date().getFullYear(),
				pageClass: 'login-page'
			}
		},
		computed: {},
		methods: {
			toggleNavbar() {
				document.body.classList.toggle('nav-open')
				this.showMenu = !this.showMenu
			},
			closeMenu() {
				document.body.classList.remove('nav-open')
				this.showMenu = false
			},
			setPageClass() {}
		},
		beforeDestroy() {
			this.closeMenu()
		},
		beforeRouteUpdate(to, from, next) {
			// Close the mobile menu first then transition to next page
			if (this.showMenu) {
				this.closeMenu()
				setTimeout(() => {
					next()
				}, this.menuTransitionDuration)
			} else {
				next()
			}
		}
	}
</script>
<style lang="scss">
	.navbar.auth-navbar {
		top: 0;
	}

	$scaleSize: 0.8;
	@keyframes zoomIn8 {
		from {
			opacity: 0;
			transform: scale3d($scaleSize, $scaleSize, $scaleSize);
		}
		100% {
			opacity: 1;
		}
	}

	.wrapper-full-page .zoomIn {
		animation-name: zoomIn8;
	}

	@keyframes zoomOut8 {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
			transform: scale3d($scaleSize, $scaleSize, $scaleSize);
		}
	}

	.wrapper-full-page .zoomOut {
		animation-name: zoomOut8;
	}
</style>
