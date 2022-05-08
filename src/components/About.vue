<template>
    <div>
        <h1>About component</h1>
         <div>{{ counter }}</div>
    <div>
      <button @click.prevent="onIncriment(6)">Click</button>
    </div>
    </div>
</template>
<script>
import CounterMixin from '../mixins/CounterMixin';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"About",
    mixins:[CounterMixin]

}
</script>