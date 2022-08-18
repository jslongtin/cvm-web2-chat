<template>
  <div id="members">
    <div v-bind:key="member" v-for="member in members">- {{ member }}</div>
  </div>

  <div id="messages"></div>
</template>

<script>
export default {
  name: "chat",
  data() {
    return {
      members: [],
    };
  },
  methods: {
    updateMembers(tab) {
      this.members.push(tab);
    },
  },
}
</script>
