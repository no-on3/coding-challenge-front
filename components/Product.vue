<!-- Please remove this file from your project -->
<template>
  <b-card :footer="`${categoryName}`" >
    <b-card-text>
      {{ description }}
    </b-card-text>
 
  </b-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import CategoryDTO from '../models/Category'

@Component
export default class Product extends Vue {
  @Prop({ required: true })
  readonly description!: string

  @Prop({ required: true, default: {}, type: Object })
  category!: CategoryDTO

  get categoryName(): string {
    return this.category.name
  }

  mounted() {
  }
}
</script>
