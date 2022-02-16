export const actions = {
  getData({commit}, params) {
    return this.$axios.get('https://api.raknroll.com.ua/api/home', {params}).then(response => {
      commit('updateData', response.data);
    })
  }
};

export const mutations = {
  updateData(state, data) {
    state.data = data;
  },
};

export const state = () => ({
  data: [],
});

export const getters = {
  data: state => state.data,
};
