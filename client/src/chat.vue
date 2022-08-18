<template>
    <div id="members">{{members}} allo</div>
   
  <div id="messages"></div>
</template>

<script>
import memberListUpdate from './page-chat'
export default {
    name:"chat",
  data() {
    return {
      members: "ddas"
    };
  },
  methods: {
    updateMembers: function (tab) {
      this.members.push(tab);
    },
  },
};
</script>
