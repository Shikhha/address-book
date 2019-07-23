<template>
  <div>
    <div
      @click="$emit('getDetails')"
      class="contact-list-item row p-md-3 text-center text-md-justify"
    >
      <div class="contact-name-item col-12 col-md-4">{{contact.name}}</div>
      <div class="contact-email-item col-12 col-md-4">{{contact.email}}</div>
      <div class="contact-phone-item col-12 col-md-4">{{contact.phone}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-list-item",
  props: ["contact"]
};
</script>
