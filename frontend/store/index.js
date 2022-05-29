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
    }
})

export const mutations = {

}

export const actions = {}

export const getters = {
    $state: (state) => {
        return state;
    }
}