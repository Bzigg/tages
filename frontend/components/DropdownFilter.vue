<template>
    <div class="dropdownFilter">
        <div class="dropdownFilter__name">{{ name }}</div>
            <!-- v-for="(filter, key) in $store.state.dict.materials"
            :key="key" -->
        <Select
            :defaultText="defaultText"
            :selectData="filterData"
        />
    </div>
</template>

<script>
import Select from './helpers/Select.vue'

export default {
    components: { Select },
    name: "DropdownFilter",
    props: {
        name: {
            type: String,
            default: ''
        },
        defaultText: {
            type: String,
            default: null
        },
        filterData: {
            type: Array,
            require: true,
            default: null
        }
    }
}
</script>

<style>

</style>