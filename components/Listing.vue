<!-- Please remove this file from your project -->
<template>
  <div></div>
</template>

<script>
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'listing',
  stateFactory: true,
  namespaced: true,
})
export default class Listing extends VuexModule {
  products = []

  @Mutation
  products(products: Array<object>) {
    this.products = products
  }

  @Action({ commit: 'products' })
  fetchProducts() {
    return []
  }

}
</script>
