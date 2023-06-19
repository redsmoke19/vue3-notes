<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotesForm",
  emits: ["onSubmit"],
  data() {
    return {
      value: "",
    };
  },

  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.value);
      this.value = "";
    },
  },
});
</script>

<template>
  <form class="notes-form" @submit.prevent="onSubmit">
    <textarea v-model="value" placeholder="Type ur text" required />
    <button class="btn btnPrimary" type="submit">Add you note</button>
  </form>
</template>

<style scoped lang="scss">
.notes-form {
  display: flex;
  max-width: 600px;
  flex-direction: column;
  margin: 0 auto;
}
</style>
