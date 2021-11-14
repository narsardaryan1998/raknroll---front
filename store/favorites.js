export const mutations = {
  values(state) {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites && favorites.length) {
      state.storageData = favorites;
      state.count = favorites.length;
    }
  },
  add(state, product) {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      let qty = product.min_quantity ? product.min_quantity : 1
      favorites.push({
        id: product.id,
        name: product.name,
        final_price: product.final_price * qty,
        short_description: product.short_description,
        description: product.description,
        image: product.image,
        qty,
      })
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      let qty = product.min_quantity ? product.min_quantity : 1
      favorites = [
        {
          id: product.id,
          name: product.name,
          final_price: product.final_price * qty,
          short_description: product.short_description,
          description: product.description,
          image: product.image,
          qty,
        }
      ];
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    state.count++;
    state.storageData = favorites;
  },
  delete(state, productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      favorites = favorites.filter(function (obj) {
        return productId !== obj.id;
      });
      if (favorites.length) {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      } else {
        localStorage.removeItem('favorites');
      }
      state.count--;
      state.storageData = favorites;
    }
  },
};

export const state = () => ({
  storageData: [],
  count: 0,
});

export const getters = {
  count: state => state.count,
  storageData: state => state.storageData,
};
