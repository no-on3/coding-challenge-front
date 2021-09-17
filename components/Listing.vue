<!-- Please remove this file from your project -->
<template>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div class="w-full h-full" v-for="(product, index) in productsList" :key="index">
      <product-card :name="product.name"
        :description="product.description"
        :category="product.category">
      </product-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductDTO from 'models/Product'
import Product from './Product.vue'
import { getters } from '~/store'

@Component({
  components: {
    'product-card' : Product,
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
