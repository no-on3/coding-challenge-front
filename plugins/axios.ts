import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ $axios }, inject) => {
  const axiosInstance = $axios.create()
  axiosInstance.setBaseURL('http://localhost:8000')

  axiosInstance.onResponse((response) => {
    if (response.status === 404) {
      console.log('Oh no it returned a 404')
    }
  })

  inject('axios', axiosInstance)
}

export default axiosPlugin
