<template>
	<div>
		<div>
			<Header></Header>
		</div>
		<div>我是home</div>
		<p>{{a}}</p>
		<div>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
	import '../style/index.css';
	import Header from '@/components/Header.vue'
	import Footer from '../components/Footer.vue'
	export default {
		name: 'home'
		, components: {
			Header,
			Footer
		}
		, data () {
			return {
				a: 'ddd'
			}
		}
		, methods: {
			callback: function () {
				console.log(2222)
			}
			, callback2: function () {
				console.log(444444)
			}
		}
		, mouted () {
			console.log(33333333333);
			this.callback();
			this.callback2();
			console.log(this.a);
		}
	}	
</script>