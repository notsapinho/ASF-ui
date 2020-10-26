<template>
  <div class="form-item">
    <InputLabel :label="label" :has-description="hasDescription" />

    <div class="form-item__value">
      <div class="form-item__buttons">
        <button class="button" :class="{ 'button--active': value }" @click.prevent="value = true">
          ✔
        </button>
        <button class="button" :class="{ 'button--active': !value }" @click.prevent="value = false">
          ✖
        </button>
      </div>
    </div>

    <InputDescription v-if="hasDescription" v-show="showDescription" :description="description" />
  </div>
</template>

<script>
  import Input from './Input.vue';

  export default {
    name: 'InputBoolean',
    mixins: [Input],
  };
</script>
