<template>
    <div :class="['select', {'active': isOpen}]">
        <div
            class="select__value"
            @click="valueClick()"
        >
            {{ selectValue ? selectValue.name : defaultText }}
        </div>
        <ul
            class="select__items"
        >
            <li
                class="select__item"
                v-for="(selectItem, key) in selectData"
                :key="key"
                @click="selectClick(key)"
            >
                {{ selectItem.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: false,
            selectValue: null
        }
    },
    methods: {
        valueClick () {
            this.isOpen = !this.isOpen;
        },
        selectClick (key) {
            this.isOpen = false;
            this.selectValue = this.selectData[key];
            this.$emit('selectedItem', this.selectValue)
        }
    },
    props: {
        selectData: {
            type: Array,
            require: true,
            default: null
        },
        defaultText: {
            type: String,
        }
    }
}
</script>

<style>

</style>