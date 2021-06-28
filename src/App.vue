<template>
    <el-container>
        <Menu :showMenu="showMenu" :toggleShowMenu="toggleShowMenu" />
        <el-container class="is-vertical">
            <Header :toggleShowMenu="toggleShowMenu" />
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import Menu from './components/Menu/index.vue';
import Header from './components/Header';

export default {
    name: 'App',
    components: {
        Header,
        Menu,
    },
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleShowMenu() {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>
