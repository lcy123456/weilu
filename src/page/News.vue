<template>
	<div>
		<Header></Header>
		<div>我是news</div>
		<p>{{ a }}</p>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '../components/Header'
import Footer from '@/components/Footer'
	export default {
		name: 'News'
		,components: {
			Header,
			Footer
		}
		, data () {
			return {
				a: 'ddd'
			}
		}
	}	
</script>