<template>
  <div class="form-item">
    <InputLabel :label="label" :has-description="hasDescription" />

    <div class="form-item__value">
      <span class="input-unknown">{{ $t('input-unknown-type') }}</span>
    </div>

    <InputDescription v-if="hasDescription" v-show="showDescription" :description="description" />
  </div>
</template>

<script>
  import Input from './Input.vue';

  export default {
    name: 'InputUnknown',
    mixins: [Input],
  };
</script>

<style lang="scss">
	.input-unknown {
		color: var(--color-theme);
		font-weight: 600;
	}
</style>
