<template>
    <div>
        <svg></svg>
        <Glass errormessage="Test"></Glass>
    </div>
</template>

<script>
    import Glass from "./Glass.vue"

    export default {
        name : 'MainBoard',
        props : {
            errormessage : String
        },
        components : {
            Glass
        }
    }
</script>
<style>
    svg {
        padding: 0;
        margin: auto;
        display: block;
        width: 800px;
        height: 600px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border : 5px solid #000000;
    }
</style>