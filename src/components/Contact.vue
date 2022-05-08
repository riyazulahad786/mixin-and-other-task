<template>
  <div>
    <h1>Contact component</h1>
    <div>{{ counter }}</div>
    <div>
      <button @click.prevent="onIncriment(10)">Click</button>
    </div>
  </div>
</template>
<script>
import CounterMixin from '../mixins/CounterMixin';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Contact",
    mixins:[CounterMixin],
 
};
</script>