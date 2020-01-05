<template>
    <div>
        <canvas :id="boardid"></canvas>
        <Glass :canvasid="boardid" :starthour="eventstatus"></Glass>
        <button @click="StartHourGlass">Start Hourglass</button>
    </div>
</template>

<script>
    import Glass from './Glass.vue'

    export default {
        name : 'MainBoard',
        props : {
            errormessage : String
        },
        data() {
            return {
                boardid : 'mainboard',
                eventstatus : false
            }
        },
        components : {
            Glass
        },
        methods: {
            StartHourGlass() {
               this.eventstatus = !this.eventstatus;
            }
        }
    }
</script>
<style>
    canvas {
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