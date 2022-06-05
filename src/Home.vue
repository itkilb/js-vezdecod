<template>
  <div>
    <Header>
      <HeaderButtons />
    </Header>
    <Content :header="true" :footer="false" :scroll="true" :scrollbar="true">
      <v-card class="m-4" elevation="2" outlined shaped>
        <div class="p-5">
          <span>Ваш Баланс:</span>
          <p>1423</p>
        </div>
      </v-card>
    </Content>
    <Footer style="bottom: 13px"> </Footer>
  </div>
</template>

<script lang="ts">
import Header from "./components/Header";
import HeaderButtons from "./components/HeaderButtons";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
    Content,
    Header,
    HeaderButtons,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
