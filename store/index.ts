/* eslint-disable import/named */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import CategoryDTO from '~/models/Category'

import ProductDTO from '~/models/Product'
import axiosInstance from '~/plugins/axios'
interface PriceFilter {
  min: number
  max: number
}
interface SearchFilters {
  price: PriceFilter
  searchQuery: string
  category: string
}

export const state = () => ({
  productsList: [] as ProductDTO[],
  categoriesList: [] as CategoryDTO[],
  searchQuery: '' as string,
  filters: { price: { min: 0, max: 100 } } as SearchFilters
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  productsList: (state) => state.productsList,
  searchQuery: (state) => state.searchQuery,
  filters: (state) => state.filters
}
export const mutations: MutationTree<RootState> = {
  FETCH_PRODUCTS: (state, products: ProductDTO[]) =>
    (state.productsList = products),
  FETCH_CATEGORIES: (state, categories: CategoryDTO[]) =>
    (state.categoriesList = categories),
  SET_FILTERS: (state, searchFilters: SearchFilters) => {
    return (state.filters = searchFilters)
  }
}
export const actions: ActionTree<RootState, RootState> = {
  search({ commit, rootState }, payload) {
    console.log({ payload })
    console.log({ rootState })
  },

  async fetchProducts({ commit }) {
    const productsRequest = await this.$axios.$get('/api/products')
    const { products } = productsRequest

    commit('FETCH_PRODUCTS', products)
  },

  async fetchCategories({ commit }) {
    const categoriesRequest = await this.$axios.$get('/api/categories')
    const { categories } = categoriesRequest

    commit('FETCH_CATEGORIES', categories)
  },

  setFilter({ commit }, payload) {
    const filters = { ...payload }
    commit('SET_FILTERS', filters)
  },
  submitSearch({ commit }) {}
}
