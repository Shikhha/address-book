<template>
  <form class="mt-2">
    <div class="row-half form-group" v-if="mode === 'texthalf'">
      <input
        type="text"
        class="InputBoxHalf form-control-lg form-control border-right-0 border-left-0 border-top-0"
        :placeholder="label"
        :value="value"
        @change="returnValue($event.target.value)"
      />
    </div>
    <div class="row-full form-group" v-else-if="mode==='textarea'">
      <textarea
        type="text"
        class="InputBoxFull form-control-lg form-control border-right-0 border-left-0 border-top-0"
        :placeholder="label"
        :value="value"
        @change="returnValue($event.target.value)"
      ></textarea>
    </div>

    <div class="row-half input-group" v-else-if="mode==='social'">
      <span class="icon linkedinico input-group=prepend" v-if="platform==='link'"></span>
      <br />
      <span class="icon twico" v-if="platform==='twi'"></span>
      <span class="icon fbico" v-if="platform==='fb'"></span>
      <span class="icon instaico" v-if="platform==='insta'"></span>
      <input
        type="text"
        class="InputBoxHalf form-control"
        :value="value"
        @change="returnValue($event.target.value)"
      />
    </div>
    <div class="row-full form-group" v-else>
      <input
        type="text"
        class="InputBoxFull form-control-lg form-control border-right-0 border-left-0 border-top-0"
        :placeholder="label"
        :value="value"
        @change="returnValue($event.target.value)"
      />
    </div>
  </form>
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