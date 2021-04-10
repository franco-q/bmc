<template>
	<div>
		<div class="embed-responsive embed-responsive-16by9">
			<div class="position-absolute w-100 top-0 z-10 h-100 d-flex align-items-center">
				<div class="container">
					<h1 class="display-2 font-italic font-serif text-white">
						Invertí en tu futuro financiero.
					</h1>
					<p style="width:500px" class="my-3">
						Nos dedicamos exclusivamente al
						<b>management de inversiones en activos digitales</b>, nos enfocamos en la
						eficiencia aportando valor al cliente, con una gestión de riesgo adecuada.
						Nuestro objetivo primordial es descubrir nuevas oportunidades de generación
						de ingresos aprovechando tecnologia de vanguardia.
					</p>
					<p><a class="btn btn-primary" href="#" role="button">Saber más »</a></p>
				</div>
			</div>
			<img class="embed-responsive-item" src="/img/bigbits-bg.jpg" />
		</div>

		<div class="container mt-n3 mb-4">
			<!-- <div class="row">
				<div class="col-md-6 mx-auto text-center mb-3">
					<div class="d-flex justify-content-center mb-3">
						<Brand class="w-20" />
					</div>
					<h1>Elija el mejor plan para usted</h1>
				</div>
			</div> -->
			<div class="row">
				<div class="col-md-4 col-11 mx-auto">
					<card
						type="pricing"
						class="card-success card-white"
						footer-classes="text-center mb-3 mt-3"
					>
						<h1 class="card-title px-2">basic</h1>
						<img class="card-img" src="img/card-success.png" alt="Image" />
						<ul class="list-group">
							<li class="list-group-item">50 messages</li>
							<li class="list-group-item">100 emails</li>
							<li class="list-group-item">24/7 Support</li>
						</ul>
						<div class="card-prices">
							<h3 class="text-on-front"><span>$</span>57</h3>
							<h5 class="text-on-back">57</h5>
							<p class="plan">Basic plan</p>
						</div>
						<base-button slot="footer" round type="success" class="btn-just-icon">
							Comenzar
						</base-button>
					</card>
				</div>
				<div class="col-md-4 col-11 mx-auto">
					<card
						type="pricing"
						class="card-warning card-raised card-white"
						footer-classes="text-center mb-3 mt-3"
					>
						<h1 class="card-title px-2">mid</h1>
						<img class="card-img" src="img/card-warning.png" alt="Image" />
						<ul class="list-group">
							<li class="list-group-item">200 messages</li>
							<li class="list-group-item">130 emails</li>
							<li class="list-group-item">24/7 Support</li>
						</ul>
						<div class="card-prices">
							<h3 class="text-on-front"><span>$</span>72</h3>
							<h5 class="text-on-back">72</h5>
							<p class="plan">Medium plan</p>
						</div>

						<base-button slot="footer" round type="warning" class="btn-just-icon">
							Comenzar
						</base-button>
					</card>
				</div>
				<div class="col-md-4 col-11 mx-auto">
					<card
						type="pricing"
						class="card-danger card-white"
						footer-classes="text-center mb-3 mt-3"
					>
						<h1 class="card-title px-2">trial</h1>
						<img class="card-img" src="img/card-danger.png" alt="Image" />
						<ul class="list-group">
							<li class="list-group-item">50 messages</li>
							<li class="list-group-item">50 emails</li>
							<li class="list-group-item">No Support</li>
						</ul>
						<div class="card-prices">
							<h3 class="text-on-front"><span>$</span>9</h3>
							<h5 class="text-on-back">9</h5>
							<p class="plan">Trial plan</p>
						</div>

						<base-button slot="footer" round type="danger" class="btn-just-icon">
							Comenzar
						</base-button>
					</card>
				</div>
			</div>
			<div class="row">
				<div class="col-12 mt-5">
					<h3 class="title">¿Como trabajamos?</h3>
				</div>
				<div class="col-md-5">
					<p>
						Nuestro equipo de traders junto a programadores especializados, han
						desarrollado algoritmos con inteligencia artificial que operan de manera
						semi-automática en diferentes exchanges del mundo generando rendimientos
						óptimos bajo una estricta gestión de riesgo o risk-reward-ratio.
					</p>
				</div>
				<div class="col-md-5 ml-auto mt-md-3">
					<base-progress type="warning" :show-value="false" badge="500GB" :value="75" />
					<base-progress type="primary" :show-value="false" badge="4 years" :value="50" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { BaseProgress } from '@/components'
	export default {
		name: 'pricing-page',
		components: {
			BaseProgress
		}
	}
</script>
<style></style>
