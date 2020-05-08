<template>
    <div class="app-dialog">
        <div class="blur"></div>
        <slot name="dialog-id">
            <slot name="dialog-container">
                <slot name="header-bar"></slot>
                <slot name="header"></slot>
                <slot name="content"></slot>
            </slot>
        </slot>
    </div>
</template>

<style>
    @import url('./_app-dialog.scss');
</style>

<script src="./app-dialog.js"></script> 