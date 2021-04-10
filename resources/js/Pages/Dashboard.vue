<template>
	<app-layout>
		<div class="container pt-2 pt-md-5">
			<div class="row">
				<div class="col-md-6">
					<card type="chart" class="mb-3">
						<template slot="header">
							<div class="row">
								<div class="col-sm-6">
									<h2 class="card-title">Performance</h2>
								</div>
							</div>
						</template>
						<div class="chart-area">
							<line-chart
								style="height: 100%"
								ref="bigChart"
								:chart-data="bigLineChart.chartData"
								:gradient-colors="bigLineChart.gradientColors"
								:gradient-stops="bigLineChart.gradientStops"
								:extra-options="bigLineChart.extraOptions"
							>
							</line-chart>
						</div>
					</card>
				</div>
				<div class="col-md-6">
					<Gcard class="w-100" />
				</div>
				<div class="col-12">
					<div class="btn-group w-100 mb-3">
						<inertia-link :href="route('deposit')" class=" btn btn-info">
							DEPOSITAR
						</inertia-link>
						<base-button type="primary">
							RETIRAR
						</base-button>
					</div>
				</div>
				<div class="col-12">
					<card class="card">
						<h2 slot="header" class="card-title">Depositos</h2>
						<div class="table-responsive">
							<base-table :data="tables.extractions" thead-classes="text-primary">
								<template slot="columns">
									<th>ID</th>
									<th class="text-center">AMOUNT</th>
									<th class="text-center">TIMESTAMP</th>
									<th>REF</th>
									<th>HASH</th>
								</template>
								<template slot-scope="{ row }">
									<td>{{ row.id }}</td>
									<td class="text-center">{{ row.amount }}BTC</td>
									<td class="text-center">
										{{ new Date(row.timestamp).toLocaleString() }}
									</td>
									<td>{{ row.ref }}</td>
									<td>
										<span
											class="d-inline-block text-truncate"
											style="max-width: 150px;"
										>
											{{ row.hash }}
										</span>
									</td>
								</template>
							</base-table>
						</div>
					</card>
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
	import AppLayout from '@/Layouts/AppLayout'
	import LineChart from '@/components/Charts/LineChart'
	import * as chartConfigs from '@/components/Charts/config'
	import config from '@/config'
	import Gcard from '@/components/Gcard'
	import { BaseTable } from '@/components'

	let bigChartData = {
		status: 'ok',
		name: 'Market Price (USD)',
		unit: 'USD',
		period: 'day',
		description: 'Average USD market price across major bitcoin exchanges.',
		values: [
			{ x: 1611964800, y: 34314.26 },
			{ x: 1612051200, y: 34318.1 },
			{ x: 1612137600, y: 33136.46 },
			{ x: 1612224000, y: 33522.9 },
			{ x: 1612310400, y: 35529.66 },
			{ x: 1612396800, y: 37676.25 },
			{ x: 1612483200, y: 37002.09 },
			{ x: 1612569600, y: 38278.61 },
			{ x: 1612656000, y: 39323.26 },
			{ x: 1612742400, y: 38928.1 },
			{ x: 1612828800, y: 46364.3 },
			{ x: 1612915200, y: 46589.58 },
			{ x: 1613001600, y: 44878.17 },
			{ x: 1613088000, y: 48013.38 },
			{ x: 1613174400, y: 47471.4 },
			{ x: 1613260800, y: 47185.19 },
			{ x: 1613347200, y: 48720.37 },
			{ x: 1613433600, y: 47951.85 },
			{ x: 1613520000, y: 49160.1 },
			{ x: 1613606400, y: 52118.23 },
			{ x: 1613692800, y: 51608.15 },
			{ x: 1613779200, y: 55916.5 },
			{ x: 1613865600, y: 56001.2 },
			{ x: 1613952000, y: 57487.86 },
			{ x: 1614038400, y: 54123.4 },
			{ x: 1614124800, y: 48880.43 },
			{ x: 1614211200, y: 50624.84 },
			{ x: 1614297600, y: 46800.42 },
			{ x: 1614384000, y: 46340.31 },
			{ x: 1614470400, y: 46155.87 },
			{ x: 1614556800, y: 45113.92 },
			{ x: 1614643200, y: 49618.43 },
			{ x: 1614729600, y: 48356.04 },
			{ x: 1614816000, y: 50477.7 },
			{ x: 1614902400, y: 48448.91 }
		]
	}

	export default {
		components: {
			AppLayout,
			LineChart,
			BaseTable,
			Gcard
		},
		data() {
			return {
				bigChartData,
				tables: {
					extractions: [
						{
							id: '22111753',
							user_id: '83629938',
							hash:
								'ad5c6b526e74f68d810f71112bbe36157d8cb502fbc971f3e1fbacc03d51aed0',
							amount: 0.873773,
							from:
								'1c76894768f5b5997d7fbafbb00860ee79b3f5e435a39adda716d0797da2bcfd',
							to: 'ba3bfc612fe5d8eeee3dfd24d2181bea89708af3ee6e6e7563fcef5c64b62438',
							ref: 'Eos officiis ipsam temporibus.',
							timestamp: '1978-03-29 02:54:33'
						},
						{
							id: '31437257',
							user_id: '80182375',
							hash:
								'36c41dbe23f175d26ba7b21c4a35f3da6f760148875d4b8f500493c44b72af05',
							amount: 0.919609,
							from:
								'559d6adbea37b0736a2b2173653a588a29dcd4b43acab693235bb98a5c5d687a',
							to: '5d957befd80eee07595b22af03f35b2b6af92ce8e5694a0c1494b539adcd3d41',
							ref: 'Amet quam dicta quis.',
							timestamp: '2005-04-16 08:08:05'
						},
						{
							id: '31587099',
							user_id: '70716023',
							hash:
								'fa9ae6773df2d8a96248484bca361c28491ef9c2626bc5dc7b65461794054eca',
							amount: 0.098801,
							from:
								'83a67ba51037ed9656be92e0d4cde3df86b227d207c61084c22d7b988e88ce20',
							to: '94a66c8626521a8e8522fbb51d7f22fc5e99f3eb8d4d2dfd5bb727d3512ba5d1',
							ref: 'Recusandae ullam quo.',
							timestamp: '2008-09-24 02:56:27'
						},
						{
							id: '41618080',
							user_id: '10837207',
							hash:
								'0bbbfb2ddfce475e1cd87f1e71b90b50e45264e1029fefe701bb6f3584f476c0',
							amount: 0.67796,
							from:
								'33ae1e589857c72c3762afdc047ff2cc6d2e0420d83189a86e09f815803ed0d5',
							to: '840305954a2aa4ff47554d9c42765f44f7a90b94a656f9aec224b90d7c6e2830',
							ref: 'Non quidem similique facere vel.',
							timestamp: '2009-07-26 17:06:19'
						},
						{
							id: '45176784',
							user_id: '81512973',
							hash:
								'2d2a223aaf27dde8cd905db7282f60dd38ad4ddea6c80373aaedf6ec4689b283',
							amount: 0.989993,
							from:
								'8092c830bf7a648c9b9e673e0b1305cdbb6c3357173a83c575d8bb98695aa3c8',
							to: 'df899ea9b85ae30975f3bf307f785238da597bd0aacdebed889190f7df3751fa',
							ref: 'Vel debitis officia.',
							timestamp: '2000-05-18 08:49:44'
						},
						{
							id: '45760945',
							user_id: '93590532',
							hash:
								'32bef84411752a5989eacde45bc8407d9467a9f70967cc52aba69dbdf5c5ffb6',
							amount: 0.841446,
							from:
								'ac93643122404f2fbae790f13c1b4b5e6d01d5fff06509f158bb5417f280c814',
							to: 'a57c14355b90182c85cb8946aca5553f7db425263cfc6f5b7ab9b7beb3b47eb9',
							ref: 'Qui laudantium est voluptatum.',
							timestamp: '2015-10-14 00:26:49'
						},
						{
							id: '56198898',
							user_id: '44326999',
							hash:
								'5c742ad110e08b2bbd3d3cdf3070ed05748bb97e9195f3baaf3e360c47500778',
							amount: 0.088659,
							from:
								'022e39bac03b0d1b3170bede461b69fcbce417cf89689c9e4503d864e7024143',
							to: '2b835ab4adc933f1d09e1fefe27ae538eeca65a787199d580351aefb6bc2014f',
							ref: 'Ad veniam dolorum.',
							timestamp: '1986-10-25 23:19:39'
						},
						{
							id: '56359800',
							user_id: '80432692',
							hash:
								'2a1b3fbbb75272aab4b8449022449b8616430fce1181451551eb28147e2071f4',
							amount: 0.009512,
							from:
								'c6c5afdbf3d4a1fb7852e71b423d57e4c0dc0b31c727993ee77c743641742ddf',
							to: 'f2a2d1c0981ee06b431daad6321fca0ba85f1f7f1e69397d8d2cd60004530d44',
							ref: 'Et vel aliquid quia.',
							timestamp: '1997-08-23 02:30:52'
						},
						{
							id: '67705849',
							user_id: '69016875',
							hash:
								'fb7789801dc69b2e62f6ea52abd9fe471860c6b5688bbc6235d8883859b05d06',
							amount: 0.093119,
							from:
								'cba1828e5c6cba7171826a324e285ef65a9b8229c69a275a9752118e430530f7',
							to: '313c58a4ee4f93e11f6a900db95807388a741d3caeb8d8a4a2024d5098a192bb',
							ref: 'Alias consectetur magnam facere commodi.',
							timestamp: '1994-11-17 22:37:30'
						},
						{
							id: '76483684',
							user_id: '86927222',
							hash:
								'01c9fa13cbd3f7cff632199c50e7a22ce9a37d8bf81a8d2b70a2500ea5ba4b83',
							amount: 0.03572,
							from:
								'76befa889b1f63574bbf694ee34fe87a02670cbf559ad022de8a13aad9ce72b2',
							to: '26cdab60022dbc6d6f8161f4a4b12c04323431e4c126cc14d77ab60abc808f8a',
							ref: 'Autem dolorem.',
							timestamp: '2006-05-05 08:42:14'
						},
						{
							id: '77253538',
							user_id: '26901046',
							hash:
								'd2fa081741f6b9a047ab1f58d217474941a376375e25ae3dc03cda24ff738c53',
							amount: 0.980117,
							from:
								'3c8276b4bedb531f56ec63b2b3efb969b2793da4036e6295712f9b1a2dfc113d',
							to: 'aab07a244844050ad444e84a1566e400a90a161d4680f5c5e367a32ebdee24a9',
							ref: 'A quidem atque.',
							timestamp: '2002-04-19 02:12:16'
						},
						{
							id: '77376213',
							user_id: '38578137',
							hash:
								'cd9ea1de51a311e9103c15d4151b114b7907dc2e3b011c48a5c9e0aac850c305',
							amount: 0.964283,
							from:
								'bbb5a8661eb816289c2c0d74d1aaba1443e8f1f91f531f33c318288428bbbfab',
							to: 'fa004906579d7bd9f157bf3aa5803cafe811f2de04ad78fa7c63532cd9626acf',
							ref: 'Ex explicabo iure.',
							timestamp: '1993-03-11 13:28:45'
						},
						{
							id: '80339731',
							user_id: '46995780',
							hash:
								'cdce0155c47dec6bfaaeb0a223c52e51ff92d4dfdab0a76cfa27704966fee983',
							amount: 0.801213,
							from:
								'd46e01936c716cee76c75a6cc7a9739c66f8868394be18f3a234129b181f14dd',
							to: 'ab16c4c5ad229c827a80d9a5d4c18b2e2b75622b61df5887b74be43309c4753a',
							ref: 'Quisquam iure consequatur.',
							timestamp: '2007-08-02 20:01:32'
						},
						{
							id: '81057559',
							user_id: '03907412',
							hash:
								'9d5509858d13f613435a77aac44ce5bd221674d72377618f290e2e68ca010862',
							amount: 0.478644,
							from:
								'b2279119fa61310b659dd53de9a52468a28d6fe9b82a7dd895253406f7bf492e',
							to: 'a41ec0838f2d36517cef3e6fe85714490893dd4f47563c2328182475648429e6',
							ref: 'Aliquid nulla modi voluptatum.',
							timestamp: '2015-03-27 07:34:57'
						},
						{
							id: '84040015',
							user_id: '48309622',
							hash:
								'b15cfdf7b2dbd195b28f267818713b2c3525b61a4943eaac6cab3880e7fdd1d0',
							amount: 0.129092,
							from:
								'a80036d48af0363454401a35096373de80556286c4b1ebbf0a3abef09fe40acc',
							to: '316f84f3a5fbc1278b0251033bb3590d342d9b003cc46f7a4bf84efeaaf4de74',
							ref: 'Debitis nulla.',
							timestamp: '2007-03-11 11:53:46'
						}
					]
				},
				bigLineChart: {
					activeIndex: 0,
					chartData: {
						datasets: [
							{
								label: 'Market Price (USD)',
								fill: true,
								borderColor: config.colors.primary,
								borderWidth: 1,
								borderDash: [],
								borderDashOffset: 0.0,
								pointBackgroundColor: config.colors.primary,
								pointBorderColor: 'rgba(255,255,255,0)',
								pointHoverBackgroundColor: config.colors.primary,
								pointBorderWidth: 5,
								pointHoverRadius: 4,
								pointHoverBorderWidth: 5,
								pointRadius: 2,
								data: bigChartData.values.map(({ y }) => y)
							}
						],
						labels: bigChartData.values.map(({ x }) =>
							new Date(x * 1000).toLocaleDateString()
						)
					},
					extraOptions: chartConfigs.purpleChartOptions,
					gradientColors: config.colors.primaryGradient,
					gradientStops: [1, 0.4, 0],
					categories: []
				}
			}
		}
	}
</script>
