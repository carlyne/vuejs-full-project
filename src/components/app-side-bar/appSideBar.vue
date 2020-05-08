<template>
    <div class="app-side-bar left">
        <slot name="sidebar">
            <slot name="commands"></slot>
        </slot>
    </div>
</template>

<style>
    @import url('./_app-side-bar.scss');
</style>

<script src="./app-side-bar.js"></script>