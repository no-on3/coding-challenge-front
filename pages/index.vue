<template>
  <div>
    <header>
      <nav class="bg-blue-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0">
              <a
                href="/"
                class="uppercase font-bold text-white tracking-widest text-lg"
                >Coding Challenge Store</a
              >
            </div>
            <div class="md:block">
              <div class="ml-10 flex items-baseline">
                <div class="inline-block relative w-64">
                  <select
                    v-model="category"
                    class="
                      bg-yellow-400
                      block
                      appearance-none
                      text-gray-800
                      w-full
                      border border-yellow-400
                      hover:border-yellow-300
                      px-4
                      py-2
                      pr-8
                      rounded
                      shadow
                      leading-tight
                      focus:outline-none focus:shadow-outline
                      text-sm
                    "
                    @change="submitSearch({ category: $event.target.value })"
                  >
                    <option
                      v-for="category in categoryList"
                      :key="category"
                      selected
                    >
                      {{ category }}
                    </option>
                  </select>
                  <div
                    class="
                      pointer-events-none
                      absolute
                      inset-y-0
                      right-0
                      flex
                      items-center
                      px-2
                      text-gray-700
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section class="py-10">
        <header>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5w-full">
            <nav
              aria-label="product-filter"
              class="border-b-2 border-indigo-100"
            >
              <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                  <price-range
                    :default-min="0"
                    :default-max="1000"
                    @set-filter="submitSearch({ price: $event })"
                  />
                </div>
                <div>
                  <form class="w-full max-w-sm">
                    <!-- <div class="flex items-center">
                      <input 
              v-model="searchQuery"
              type="text"
              placeholder="Type here"
              class="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                       aria-label="Full name" >
                    </div> -->

                    <div class="flex items-center justify-center w-full">
                      <label
                        for="availability"
                        class="flex items-center cursor-pointer"
                      >
                        <!-- toggle -->
                        <div class="relative">
                          <!-- input -->
                          <input
                            id="availability"
                            v-model="isAvailable"
                            type="checkbox"
                            class="sr-only"
                            @keyup="submitSearch({isAvailable : $event.target.value})"
                          />
                          <!-- line -->
                          <div
                            class="block bg-gray-400 w-14 h-8 rounded-full"
                          ></div>
                          <!-- dot -->
                          <div
                            class="
                              dot
                              absolute
                              left-1
                              top-1
                              bg-white
                              w-6
                              h-6
                              rounded-full
                              transition
                              border-blue-600
                            "
                          ></div>
                        </div>
                        <!-- label -->
                        <div class="ml-3 text-gray-700 font-medium">
                          Available ?
                        </div>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <all-product-list></all-product-list>
        </div>
        <footer></footer>
      </section>
    </main>
    <footer class="pb-10">
      <p class="text-center text-gray-400">Codign Challenge Store @ 2021</p>
    </footer>
  </div>
</template>
<script>
import Listing from '@/components/Listing.vue'
import PriceRangeSlider from '@/components/PriceRangeSlider.vue'

export default {
  components: {
    'all-product-list': Listing,
    'price-range': PriceRangeSlider,
  },

  data() {
    return {
      filters: {},
      isAvailable: true,
      categoryList: ['test', 'ttt', 'rami'],
      category: '',
    }
  },

  mounted() {
    this.$store.dispatch('fetchCategories')
  },

  methods: {
    submitSearch(filters) {
      this.filters = { ...this.filters, ...filters }
      this.$store.dispatch('setFilter', this.filters)
      this.$store.dispatch('submitSearch')
    },
  },
}
</script>

<style>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #2563eb;
}
</style>
