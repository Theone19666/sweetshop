<template>
    <el-header class="header" height="auto">
        <el-button icon="el-icon-more" @click="toggleShowMenu"></el-button>
        <img src="./icon.jpeg" />
        <div></div>
    </el-header>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'Header',
    props: {
        toggleShowMenu: {
            // type: Function as PropType<() => void>,
            type: Function,
        },
    },
});
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #44b5ed;
}
.header-button {
    background-color: transparent;
    border: none;
}
.title {
    font-size: 20px;
    font-weight: bold;
}
.add-post-button {
    margin-right: 5px;
}
</style>
