<template>
    <div class="dropdownFilter">
        <div class="dropdownFilter__name">{{ name }}</div>
        <Select
            :defaultText="defaultText"
            :selectData="filterData"
            @selectedItem="selectedItem"
        />
    </div>
</template>

<script>
import Select from './helpers/Select.vue'

export default {
    components: { Select },
    name: "DropdownFilter",
    methods: {
        selectedItem(item) {
            this.$store.commit(this.mutationName, item.id);
            this.$emit('update');
        }
    },
    props: {
        name: {
            type: String,
            default: ''
        },
        defaultText: {
            type: String,
            default: null
        },
        mutationName: {
            type: String,
            require: true,
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