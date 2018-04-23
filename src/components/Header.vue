<template>
	<div>
		<ul>
			<router-link to='/'>	
				<li>
					首页
				</li>
			</router-link>
			<router-link to='/News'>	
				<li>
					新闻公告
				</li>
			</router-link>

		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>