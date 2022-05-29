<template>
  <main class="main">
    <div class="wrapper">
      <div class="container">
        <Breadcrumbs />
        <section class="marketPage">
          <h1 class="marketPage__title title">Комплекты стеллажных систем</h1>
          <div class="marketPage__filters">
            <DropdownFilterVue
              :name="'Сортировать по:'"
              :defaultText="'Цена'"
              :filterData="$store.state.dict.price"
            />
            <DropdownFilterVue
              :name="'Материал'"
              :defaultText="'Выберите материал'"
              :filterData="$store.state.dict.materials"
            />
          </div>
          <div class="marketPage__products">
            <ProductItem
                v-for="(productItem, key) in products"
                :key="key"
                :productItem="productItem"
            />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import DropdownFilterVue from "../components/DropdownFilter.vue";
import ProductItem from "../components/ProductItem.vue";

export default {
  components: { Breadcrumbs, DropdownFilterVue, ProductItem },
  name: "IndexPage",
  data() {
    return {
      products: [
        {
          id: "1",
          name: "Ручка дверная",
          code: "L422WH",
          price: {
            old_price: 400,
            current_price: 355,
          },
          image: {
            url: "/pic/pic1.png",
          },
          material: 1,
        },
        {
          id: "2",
          name: "Ручка, нержавеющ сталь",
          code: "L423WH",
          price: {
            old_price: 400.9,
            current_price: 355.555,
          },
          image: {
            url: "/pic/pic2.png",
          },
          material: 2,
        },
        {
          id: "3",
          name: "Стандартные петли",
          code: "P424WN",
          price: {
            old_price: null,
            current_price: 75,
          },
          image: {
            url: "/pic/pic3.png",
          },
          material: 2,
        },
        {
          id: "4",
          name: "Петля со стопором",
          code: "PW5AC",
          price: {
            old_price: 270,
            current_price: 200,
          },
          image: {
            url: "/pic/pic4.png",
          },
          material: 2,
        },
        {
          id: "5",
          name: "Ручка дверная",
          code: "LM352",
          price: {
            old_price: null,
            current_price: 720,
          },
          image: {
            url: "/pic/pic1.png",
          },
          material: 1,
        },
        {
          id: "6",
          name: "Ручка, нержавеющ сталь",
          code: null,
          price: {
            old_price: null,
            current_price: 355.555,
          },
          image: {
            url: "/pic/pic2.png",
          },
          material: 2,
        },
        {
          id: "7",
          name: "Стандартные петли",
          code: "WD14LK",
          price: {
            old_price: null,
            current_price: 75,
          },
          image: {
            url: "/pic/pic3.png",
          },
          material: 2,
        },
        {
          id: "8",
          name: "Петля со стопором",
          code: null,
          price: {
            old_price: 1200,
            current_price: 900,
          },
          image: {
            url: "/pic/pic4.png",
          },
          material: 2,
        },
      ],
    };
  },
};
</script>
