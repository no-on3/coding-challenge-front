<!-- Please remove this file from your project -->
<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
    <img class="w-full object-cover" src="https://source.unsplash.com/600x300/?random" :alt="name">
    <div class="px-6 py-4 pb-2">
      <div class="uppercase font-bold text-xl mb-2">{{ name }}</div>
      <p class="text-gray-700 text-sm">{{ description }}</p>
    </div>
    <div class="px-6 py-4">
      <span class="badge mr-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"> #{{ categoryName }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import CategoryDTO from '../models/Category'

@Component
export default class Product extends Vue {
  @Prop({ required: true })
  readonly description!: string

  @Prop({ required: true, default: '', type: String })
  readonly name!: string

  @Prop({ required: true, default: {}, type: Object })
  category!: CategoryDTO

  get categoryName(): string {
    return this.category.name
  }

}
</script>
