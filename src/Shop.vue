<template>
  <div>
    <Header>
      <HeaderButtons />
    </Header>
    <Content :header="true" :footer="false" :scroll="true" :scrollbar="true">
      <v-row style="max-width: 100%; margin-bottom: 50px">
        <v-col v-for="product in products" :key="product.id" class="m-3">
          <v-card>
            <v-img contain :src="product.img"></v-img>
            <v-card-title> {{ product.title }} </v-card-title
            ><v-card-subtitle> {{ product.title }} </v-card-subtitle>
            <v-card-actions class="flex">
              <v-btn @click="buyItem(product.id)" color="orange lighten-2" text>
                Купить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <Modal @onClose="dialog = false" :isVisible="dialog">
        <qrcode-vue :value="qrCodeContent"></qrcode-vue>
      </Modal>
    </Content>
    <Footer style="bottom: 13px"> </Footer>
  </div>
</template>

<script lang="ts">
import Header from "./components/Header";
import HeaderButtons from "./components/HeaderButtons";
import Content from "./components/Content";
import Footer from "./components/Footer";
import productsJson from "./products.json";
import QrcodeVue from "qrcode.vue";
import Modal from "./components/Modal";
export default {
  name: "App",
  components: {
    Modal,
    QrcodeVue,
    Footer,
    Content,
    Header,
    HeaderButtons,
  },
  data() {
    return {
      dialog: false,
      products: productsJson,
      notItemId: 0,
      userId: 0,
    };
  },
  methods: {
    buyItem(id) {
      this.notItemId = id;
      this.dialog = true;
    },
  },
  computed: {
    qrCodeContent: function () {
      return this.userId + "/" + this.notItemId;
    },
  },
};
</script>
