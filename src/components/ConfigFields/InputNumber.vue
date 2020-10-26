<template>
  <div class="form-item">
    <InputLabel :label="label" :has-description="hasDescription" />

    <div class="form-item__value">
      <input :id="field" v-model.number="value" class="form-item__input" type="number" :name="field" :placeholder="placeholder" @blur="onBlur">
      <span v-if="hasErrors" class="form-item__error">{{ errorText }}</span>
    </div>

    <InputDescription v-if="hasDescription" v-show="showDescription" :description="description" />
  </div>
</template>

<script>
  import Input from './Input.vue';

  export default {
    name: 'InputNumber',
    mixins: [Input],
    methods: {
      onBlur() {
        if (this.value === '') this.value = this.defaultValue;
      },
    },
  };
</script>
