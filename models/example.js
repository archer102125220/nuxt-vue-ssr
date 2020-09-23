export default {
    state: () => ({}),
    mutations: {},
    actions: {
      // https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action
      async nuxtServerInit({ dispatch }, { req }) {
        await dispatch('app/libraries')
        await dispatch('app/hotsearches')
      },
    },
  }
  