export const state = () => ({
    dict: {
        materials: [
            {
              "id": "1",
              "name": "Дерево"
            },
            {
              "id": "2",
              "name": "Металл"
            }
        ],
        price: [
            {
              "id": "1",
              "name": "Цена по возрастанию"
            },
            {
              "id": "2",
              "name": "Цена по убыванию"
            }
        ]
    },
    material: null,
    price: null,
    likedIds: new Set(),
    basket: new Set()
})

export const mutations = {
    addMaterial (state, material) {
        state.material = material;
    },
    sortPrice (state, price) {
        state.price = price;
    },
    liked (state, itemId) {
        state.likedIds.has(itemId) ? state.likedIds.delete(itemId) : state.likedIds.add(itemId);
        let arr = [];
        state.likedIds.forEach((value) => {
            arr.push(value);
        });
        localStorage.setItem('likes', JSON.stringify(arr));
    },
    toggleBasket (state, itemId) {
        state.basket.has(itemId) ? state.basket.delete(itemId) : state.basket.add(itemId);
        let arr = [];
        state.basket.forEach((value) => {
            arr.push(value);
        });
        localStorage.setItem('basket', JSON.stringify(arr));
    }
}

export const actions = {
}

export const getters = {
}