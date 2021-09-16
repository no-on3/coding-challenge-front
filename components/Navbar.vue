<!-- Please remove this file from your project -->
<template>
  <b-navbar toggleable="lg" type="light" variant="app">
    <b-container fluid>
 
          <price-range-slider :track-height="0.2" />
       
      <b-row>
        <b-col lg="4">
          <div>
            <b-dropdown id="category" text="Category" class="">
              <b-dropdown-item>First Action</b-dropdown-item>

            </b-dropdown>
          </div>
        </b-col>
        <b-col lg="4">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <form class="searchForm" @submit.prevent="submitSearch">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Type here"
                  @keyup="submitSearch"
                />
                <span
                  v-show="searchQuery"
                  class="removeInput"
                  @click="removeSearchQuery"
                  >+</span
                >
              </form>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PriceRangeSlider from './PriceRangeSlider.vue'

@Component({
  components: {
    PriceRangeSlider,
  },
})
export default class Navbar extends Vue {
  searchQuery: string = ''
  min = 0
  max = 250
  enableCross = false
  value = ''
  removeSearchQuery() {
    this.searchQuery = ''
  }

  submitSearch() {
    this.$store.dispatch('search', this.searchQuery)
  }

  mounted() {}
}
</script>
