<template>
  <div
    class="fixed w-screen bottom-0 left-0 border-t z-10 bg-gray-50 h-[var(--footer-saib)]"
  >
    <div class="w-screen h-[var(--footer-height)]">
      <v-bottom-navigation color="teal" grow>
        <v-btn @click="$router.push({ name: 'Home' })">
          <span>Главная</span>

          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn @click="$router.push({ name: 'Shop' })">
          <span>Магазин</span>

          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
  mounted() {
    document.documentElement.style.setProperty(
      "--footer-height",
      "var(--basic-header-height)"
    );
  },
};
</script>
