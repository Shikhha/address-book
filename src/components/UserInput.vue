<template>
  <div>
    <div class="row-half" v-if="mode === 'texthalf'">
      <input
        type="text"
        class="InputBoxHalf"
        :placeholder="label"
        :value="value"
        @change="returnValue($event.target.value)"
      />
    </div>
    <div class="row-full" v-else-if="mode==='textarea'">
      <textarea
        type="text"
        class="InputBoxFull"
        :placeholder="label"
        :value="value"
        @change="returnValue($event.target.value)"
      ></textarea>
    </div>

    <div class="row-half" v-else-if="mode==='social'">
      <input
        type="text"
        class="InputBoxHalf"
        :value="value"
        @change="returnValue($event.target.value)"
      />
      <span class="icon linkedinico" v-if="platform==='link'"></span>
      <span class="icon twico" v-if="platform==='twi'"></span>
      <span class="icon fbico" v-if="platform==='fb'"></span>
      <span class="icon instaico" v-if="platform==='insta'"></span>
    </div>
    <div class="row-full" v-else>
      <input
        type="text"
        class="InputBoxFull"
        :placeholder="label"
        :value="value"
        @change="returnValue($event.target.value)"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "UserInput",
  props: ["value", "mode", "label", "platform"],

  methods: {
    returnValue(val) {
      this.$emit("input", val);
    }
  }
};
</script>