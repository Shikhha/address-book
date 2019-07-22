<template>
  <div>
    <a href="#" id="saveBtn" v-on:click="save" />
  </div>
</template>

<script>
export default {
  methods: {
    save(e) {
      e.preventDefault();
      alert("saved");
    }
  }
};
</script>