<script>
import { getTrimString } from "@/common/helpers/utils";
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List.vue";

export default {
  name: "HomePage",
  components: {
    Form,
    List,
  },

  mounted() {
    this.getNotes();
  },

  data() {
    return {
      notes: [],
      tags: [],
    };
  },

  computed: {
    activeTagFilter() {
      return this.tags.filter((item) => item.isActive).map((item) => item.name);
    },
  },

  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },

    formHandler(value, tags) {
      this.tags = tags;
      console.log(this.activeTagFilter);
      this.notes.unshift({
        name: getTrimString(value),
        tags: this.activeTagFilter,
      });
    },

    noteRemove(todo) {
      this.notes = this.notes.filter((item) => item !== todo);
    },

    editNote(note, newNote) {
      this.notes.map((item) => {
        if (item === note) {
          item.name = newNote;
        }
      });
      // this.notes[index].name = newNote;
    },
  },

  watch: {
    notes: {
      handler(val) {
        localStorage.setItem("notes", JSON.stringify(val));
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="mb-body">
    <Form @on-submit="formHandler" />
    <List @remove="noteRemove" @edit="editNote" :notes="notes" />
  </div>
</template>

<style scoped></style>
