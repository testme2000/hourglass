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
                   [80,30],[180,30],
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
                this.canvasContext.moveTo(80,31);
                this.canvasContext.lineTo(180,31);
                this.canvasContext.stroke();
                // Draw Bottom Base
                point = this.outerBoundry[1];
                this.canvasContext.moveTo(80,119);
                this.canvasContext.lineTo(180,119);
                this.canvasContext.stroke();
                // Draw Top/Left Arm
                point = this.outerBoundry[2];
                this.canvasContext.moveTo(81,32);
                this.canvasContext.lineTo(125,65);
                this.canvasContext.stroke();
                // Draw Top/Right Arm
                point = this.outerBoundry[4];
                this.canvasContext.moveTo(178,32);
                this.canvasContext.lineTo(135,65);
                this.canvasContext.stroke();
                // Draw Bottom/Left Arm
                point = this.outerBoundry[5];
                this.canvasContext.moveTo(81,118);
                this.canvasContext.lineTo(125,75);
                this.canvasContext.stroke();
                // Draw Bottom/Right Arm
                point = this.outerBoundry[6];
                this.canvasContext.moveTo(178,118);
                this.canvasContext.lineTo(135,75);
                this.canvasContext.stroke();
                // Draw Left curve shape
                this.canvasContext.moveTo(125,65);
                //this.canvasContext.lineTo(126,75);
                this.canvasContext.quadraticCurveTo(132,68,125,75);
                this.canvasContext.stroke();
                // Draw Right curve shape
                this.canvasContext.moveTo(135,65);
                //this.canvasContext.lineTo(135,75);
                this.canvasContext.quadraticCurveTo(131,68,135,75);
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