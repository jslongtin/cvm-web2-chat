<template>
<div id="messages">
    <div>{{message}}</div>
</div>
  

</template>

<script>
export default {
  name: "chat2",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    nouveauMessage : function (a , bc){
        this.message = a + b + c;
    }
  },
}
</script>

