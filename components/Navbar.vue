<!-- Please remove this file from your project -->
<template>
  <b-navbar toggleable="lg" type="light" variant="app">
    <div class="container">
      <b-navbar-brand to="/">
        <img
          src="/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top mr-1"
          alt="Logo"
        />
        Coding Challenge
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
   
    <price-range-slider 
    :track-height="0.2"
    />
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
    </div>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PriceRangeSlider from './PriceRangeSlider.vue'

@Component({
  components: {
    PriceRangeSlider
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
