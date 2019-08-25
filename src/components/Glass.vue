<script>
    export default {
        name : 'Glass',
        props : {
            canvasid : String
        },
        data() {
            return {
                canvasContext : null,
                outerBoundry : [
                   // Top Base
                   [208,94],[418,94],
                   // Bottom Base
                   [208,495],[417,495]
                ],

                innerHolder : [
                    // Top/Left
                    [208,100],[301,275],
                    // Top/Right
                    [418,100],[321,280]
                ]

            }
        },
        render() {
            return null;
        },
        mounted() {
            var canvas = document.getElementById(this.canvasid);
            if (canvas.getContext('2d')) {
                // Draw top/bottom hourglass base
                this.canvasContext = canvas.getContext('2d');
                this.canvasContext.fillRect(80, 20, 100, 10);
                this.canvasContext.fillRect(80,120,100,10);
                // Draw core of hourglass
                this.preparePath();
            }
        },
        methods: {
            preparePath() 
            {
                var iCounter = 0, current = null;

                this.canvasContext.beginPath();
                this.canvasContext.lineWidth = 1;
                this.canvasContext.strokeStyle = "red";

                // Draw Top Base
                let point = this.outerBoundry[0];
                this.canvasContext.moveTo(208,94);
                this.canvasContext.lineTo(418,94);
                this.canvasContext.stroke();
            }
        }

    }
</script>

<style>
    canvas {
        padding: 0;
        margin: auto;
        display: block;
        width: 200px;
        height: 200px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border : 5px solid #000000;
    }
</style>