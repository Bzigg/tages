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
    likedIds: []
})

export const mutations = {
    addMaterial (state, material) {
        state.material = material
    }
}

export const actions = {
}

export const getters = {
}