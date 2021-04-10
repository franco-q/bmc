<template>
	<app-layout>
		<div class="container pt-2 pt-md-5">
			<div class="row">
				<div class="col-lg-8 mx-auto">
					<card class="card-stats" :show-footer-line="true">
						<div class="row" slot="header">
							<div class="col-12 col-sm-6 d-flex align-items-center">
								<div class="info-icon text-center mr-2" :class="`icon-${card.type}`">
									<i class="tim-icons icon-wallet-43"></i>
								</div>
								<h4 class="card-title m-0">
									Wallet para depositar
								</h4>
							</div>
							<div class="col-12 col-sm-6">
								<div class="numbers">
									<p class="card-category">Fondos actuales</p>
									<h4 class="card-title">0,002054708 BTC</h4>
								</div>
							</div>
						</div>
						<div class="d-flex align-items-center flex-column">
							<qr-code :text="address" color="#FFF" bg-color="#27293d" />
							<h4 class="mt-2 mb-0 d-flex align-items-center">
								<span class="px-1">{{ address }}</span>
							</h4>
							<base-button type="warning" size="sm" round>
								<i class="tim-icons icon-single-copy-04 mr-1"></i> copiar
							</base-button>
						</div>
						<div class="stats" slot="footer">
							<div class="text-center">
								El deposito se vera reflejado una vez confirmado. <br />
								<strong>Solo aceptamos BTC.</strong> No hay monto minimo para
								depositar.
							</div>
						</div>
					</card>
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
	import AppLayout from '@/Layouts/AppLayout'
	import qrCode from 'vue-qr-generator'

	export default {
		components: {
			AppLayout,
			qrCode
		},
		data() {
			return {
				address: '12AaMuRnzw6vW6s2KPRAGeX53meTf8JbZS',
				card: {
					title: '150,000',
					subTitle: 'Users',
					type: 'info',
					icon: ''
				}
			}
		}
	}
</script>
