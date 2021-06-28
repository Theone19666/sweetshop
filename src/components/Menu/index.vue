<template>
    <transition name="fade">
        <el-aside width="400px" class="menu" v-show="showMenu">
            <el-button
                icon="el-icon-close"
                class="menu-button"
                @click="toggleShowMenu"
            ></el-button>
            <el-menu background-color="transparent">
                <el-submenu
                    v-for="(category, categoryIndex) in categories"
                    :key="category.id"
                >
                    <template #title>{{ category.name }}</template>
                    <el-menu-item-group v-if="category.subcategories">
                        <el-menu-item
                            v-for="(
                                subCategory, subCategoryIndex
                            ) in category.subcategories"
                            :key="subCategory.id"
                            :index="`${categoryIndex + 1}-${
                                subCategoryIndex + 1
                            }`"
                            >{{ subCategory.name }}</el-menu-item
                        >
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
    </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import categories from './categories.json';

export default defineComponent({
    name: 'Menu',
    props: {
        showMenu: Boolean,
        toggleShowMenu: {
            // type: Function as PropType<() => void>,
            type: Function,
        },
    },
    data() {
        return {
            categories,
        };
    },
});
</script>

<style lang="scss" scoped>
.menu {
    position: fixed;
    background-color: #fff;
    height: 100%;
}
.menu-button {
    margin: 0 0 0 auto;
    display: flex;
    background-color: transparent;
    border: transparent;
}
.fade-enter-active,
.fade-leave-active {
    width: 100%;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    width: 0px;
}
</style>
