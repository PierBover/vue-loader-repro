<template>
	<div id="App">
		<h1>App</h1>
		<test/>
	</div>
</template>

<script>
import Test from '../../shared-lib/Test.vue';

export default {
	components : {
		'test': Test
	}
};
</script>
