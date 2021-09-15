<!-- Please remove this file from your project -->
<template>
  <b-container fluid>
    <b-row>
      <b-col v-for="(product, index) in productsList" :key="index" col lg="4">
        <div class="w-100 p-1">
          <Product
            :description="`${product.description}`"
            :category="product.category"
            class="w-full h-full"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductDTO from 'models/Product'
import Product from './Product.vue'
import { getters } from '~/store'

@Component({
  components: {
    Product,
  },
})
export default class Listing extends Vue {
  get productsList(): ProductDTO[] {
    return this.$store.getters.productsList  as ReturnType<typeof getters.productsList>
  }

  mounted() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
