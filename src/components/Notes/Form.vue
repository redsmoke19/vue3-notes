<script>
import TagsList from "@/components/Tags/TagsList.vue";

export default {
  name: "NotesForm",
  components: {
    TagsList,
  },
  emits: ["onSubmit"],
  data() {
    return {
      value: "",
      tags: [
        {
          name: "Home",
          isActive: false,
        },
        {
          name: "Travel",
          isActive: false,
        },
        {
          name: "Works",
          isActive: false,
        },
      ],
    };
  },

  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.value, this.tags);
      this.value = "";
      this.tags.forEach((item) => (item.isActive = false));
    },

    onFilterTag(tag) {
      this.tags.find((item) => {
        if (item === tag) {
          item.isActive = !item.isActive;
        }
      });

      // console.log(this.tags.find((item) => item === tag).isActive);
    },
  },
};
</script>

<template>
  <form class="notes-form" @submit.prevent="onSubmit">
    <textarea v-model="value" placeholder="Type ur text" required />
    <tags-list :items="tags" @on-tag-click="onFilterTag" />
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
