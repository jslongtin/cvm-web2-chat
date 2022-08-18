<template>
<div id="messages">
   <div v-bind:key="message" v-for="message in messages"> {{ message }}</div>
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
      messages: [],
    };
  },
  methods: {
    updateMembers(tab) {
      this.members = tab;
    },
    nouveauMessage : function (user, text){
        let texte = user + " : "+  text
        this.messages.push(texte);

    }
  },
}
</script>
<style scoped>
#messages{
  display: flex;
  flex-direction: column;
    position: relative;
   background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 70%;
    text-align: left;
    overflow-y:auto;
}
#members>div,#messages>div{
     background-color: rgba(0, 0, 0, 0.6);
}
 #members {
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    width: 30%;
 
    height: 100%;
    overflow-y:auto;
 }
</style>
