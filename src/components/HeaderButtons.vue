<template>
  <v-row style="with" class="d-flex align-center justify-space-end p-1">
    <v-col>
      <div class="text-right">
        <v-btn @click="onClick" elevation="2" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import moby from "@mobyapps/moby.js";
export default {
  name: "HeaderButtons",
  methods: {
    onClick() {
      moby.miniapp.pop(true, "");
    },
  },
};
</script>
