/* eslint-disable import/named */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import ProductDTO from '~/models/Product'

export const state = () => ({
  productsList: [] as ProductDTO[],
  searchQuery : '' as string
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    productsList: state => state.productsList,
    searchQuery : state => state.searchQuery,
}
export const mutations: MutationTree<RootState> = {
    FETCH_PRODUCTS: (state, products : ProductDTO[]) => (state.productsList = products),
  }
export const actions: ActionTree<RootState, RootState> = {

    search ({commit,rootState},payload) {

        console.log({payload})
        console.log({rootState})


    },

   fetchProducts({ commit }) {
    const products = [{
      "id": 1,
      "name": "commodi",
      "price": 35.73,
      "description": "Consequatur non asperiores quisquam atque ipsam accusantium. Est repellendus eius voluptates sapiente in. Cum quam voluptatum recusandae ullam. Et provident dolorum delectus commodi.",
      "available": 1,
      "category": {
          "id": 1,
          "name": "Home",
          "created_at_formatted": "1 month ago",
          "created_at": "2021-07-29T20:55:43.000000Z",
          "updated_at_formatted": "1 month ago",
          "updated_at": "2021-07-29T20:55:43.000000Z"
      },
      "created_at_formatted": "5 years ago",
      "created_at": "2015-10-15T19:28:33.000000Z",
      "updated_at_formatted": "18 years ago",
      "updated_at": "2015-10-15T19:28:33.000000Z"
  },
  {
      "id": 2,
      "name": "dolores",
      "price": 91.31,
      "description": "Dolorem eveniet labore aliquam distinctio. Ea esse voluptas quas. Aut soluta autem unde hic nam. Deserunt eveniet sed autem voluptas amet asperiores vero. Sunt suscipit eaque quidem.",
      "available": 1,
      "category": {
          "id": 2,
          "name": "Pet supplies",
          "created_at_formatted": "1 month ago",
          "created_at": "2021-07-29T20:57:50.000000Z",
          "updated_at_formatted": "1 month ago",
          "updated_at": "2021-07-29T20:57:50.000000Z"
      },
      "created_at_formatted": "15 years ago",
      "created_at": "2006-07-01T03:59:39.000000Z",
      "updated_at_formatted": "44 years ago",
      "updated_at": "2006-07-01T03:59:39.000000Z"
  },
  {
      "id": 3,
      "name": "accusantium",
      "price": 58.37,
      "description": "Impedit a est sint enim atque saepe quos. Omnis et possimus itaque quasi libero voluptas sequi. Iusto similique porro non quo temporibus molestias dolores sed. Et rerum aperiam similique esse impedit dolorem eum.",
      "available": 0,
      "category": {
          "id": 3,
          "name": "Sports",
          "created_at_formatted": "1 month ago",
          "created_at": "2021-07-29T20:58:16.000000Z",
          "updated_at_formatted": "1 month ago",
          "updated_at": "2021-07-29T20:58:16.000000Z"
      },
      "created_at_formatted": "31 years ago",
      "created_at": "1990-04-29T05:19:43.000000Z",
      "updated_at_formatted": "13 years ago",
      "updated_at": "1990-04-29T05:19:43.000000Z"
  },{
      "id": 1,
      "name": "commodi",
      "price": 35.73,
      "description": "Consequatur non asperiores quisquam atque ipsam accusantium. Est repellendus eius voluptates sapiente in. Cum quam voluptatum recusandae ullam. Et provident dolorum delectus commodi.",
      "available": 1,
      "category": {
          "id": 1,
          "name": "Home",
          "created_at_formatted": "1 month ago",
          "created_at": "2021-07-29T20:55:43.000000Z",
          "updated_at_formatted": "1 month ago",
          "updated_at": "2021-07-29T20:55:43.000000Z"
      },
      "created_at_formatted": "5 years ago",
      "created_at": "2015-10-15T19:28:33.000000Z",
      "updated_at_formatted": "18 years ago",
      "updated_at": "2015-10-15T19:28:33.000000Z"
  },
  {
      "id": 2,
      "name": "dolores",
      "price": 91.31,
      "description": "Dolorem eveniet labore aliquam distinctio. Ea esse voluptas quas. Aut soluta autem unde hic nam. Deserunt eveniet sed autem voluptas amet asperiores vero. Sunt suscipit eaque quidem.",
      "available": 1,
      "category": {
          "id": 2,
          "name": "Pet supplies",
          "created_at_formatted": "1 month ago",
          "created_at": "2021-07-29T20:57:50.000000Z",
          "updated_at_formatted": "1 month ago",
          "updated_at": "2021-07-29T20:57:50.000000Z"
      },
      "created_at_formatted": "15 years ago",
      "created_at": "2006-07-01T03:59:39.000000Z",
      "updated_at_formatted": "44 years ago",
      "updated_at": "2006-07-01T03:59:39.000000Z"
  },
  {
      "id": 3,
      "name": "accusantium",
      "price": 58.37,
      "description": "Impedit a est sint enim atque saepe quos. Omnis et possimus itaque quasi libero voluptas sequi. Iusto similique porro non quo temporibus molestias dolores sed. Et rerum aperiam similique esse impedit dolorem eum.",
      "available": 0,
      "category": {
          "id": 3,
          "name": "Sports",
          "created_at_formatted": "1 month ago",
          "created_at": "2021-07-29T20:58:16.000000Z",
          "updated_at_formatted": "1 month ago",
          "updated_at": "2021-07-29T20:58:16.000000Z"
      },
      "created_at_formatted": "31 years ago",
      "created_at": "1990-04-29T05:19:43.000000Z",
      "updated_at_formatted": "13 years ago",
      "updated_at": "1990-04-29T05:19:43.000000Z"
  }]
    console.log(products)
    commit('FETCH_PRODUCTS', products)
  },
}