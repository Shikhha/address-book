<template>
  <div>
    <div class="contact-list-item">
      <div class="contact-name-item">{{contact.name}}</div>
      <div class="contact-email-item">{{contact.email}}</div>
      <div class="contact-phone-item">{{contact.phone}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-list-item",
  props: ["contact"]
};
</script>
