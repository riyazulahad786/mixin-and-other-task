export default {
    
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      onIncriment(count) {
        this.counter += count;
      },
    },
  };