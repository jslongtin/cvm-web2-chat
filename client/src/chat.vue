<template>
<div id="messages">
    
    <div>{{message}}</div>
</div>
  <div id="members">
    <div v-bind:key="member" v-for="member in members"> {{ member }}</div>
  </div>

  
</template>

<script>
export default {
  name: "chat",
  data() {
    return {
      members: [],
      message : "",
    };
  },
  methods: {
    updateMembers(tab) {
      this.members = tab;
    },
    nouveauMessage : function (txt,d,f){
        this.message = txt + d + f;
    }
  },
}
</script>
<style scoped>
#messages{
    position: relative;
   background-color: rgba(0, 0, 0, 0.6);
    
    height: 100%;
    width: 70%;
}
#members>div,#messages>div{
     background-color: rgba(0, 0, 0, 0.6);
}
 #members {
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    width: 30%;
 
    height: 100%;
    
 }
</style>
