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
                ],

                topSand : [
                    [90,34],[100,30]
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
                let glasspoint = this.$store.getters.glasshourtoparea;
                this.canvasContext.fillRect(glasspoint[0], glasspoint[1], glasspoint[2], glasspoint[3]);
                glasspoint = this.$store.getters.glasshourbottomarea;
                this.canvasContext.fillRect(glasspoint[0], glasspoint[1], glasspoint[2], glasspoint[3]);
                // Draw core of hourglass
                this.preparePath();
            }
        },
        methods: {
            preparePath() 
            {
                this.canvasContext.beginPath();
                this.canvasContext.lineWidth = this.$store.getters.glasslinethinkness;
                this.canvasContext.strokeStyle = this.$store.getters.glasslinecolor;

                // Draw Top Base
                let glasspoint = this.$store.getters.topbase;
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.lineTo(glasspoint[1][0],glasspoint[1][1]);
                this.canvasContext.stroke();
                // Draw Bottom Base
                glasspoint = this.$store.getters.bottombase;
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.lineTo(glasspoint[1][0],glasspoint[1][1]);
                this.canvasContext.stroke();
                // Draw Top/Left Arm
                glasspoint = this.$store.getters.topleftbar;
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.lineTo(glasspoint[1][0],glasspoint[1][1]);
                this.canvasContext.stroke();
                // Draw Top/Right Arm
                glasspoint = this.$store.getters.toprightbar;
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.lineTo(glasspoint[1][0],glasspoint[1][1]);
                this.canvasContext.stroke();
                // Draw Bottom/Left Arm
                glasspoint = this.$store.getters.bottomleftbar;
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.lineTo(glasspoint[1][0],glasspoint[1][1]);
                this.canvasContext.stroke();
                // Draw Bottom/Right Arm
                glasspoint = this.$store.getters.bottomrightbar;
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.lineTo(glasspoint[1][0],glasspoint[1][1]);
                this.canvasContext.stroke();
                // Draw Left curve shape
                glasspoint = this.$store.getters.leftcurveshape;
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.quadraticCurveTo(glasspoint[1][0],glasspoint[1][1],glasspoint[1][2],glasspoint[1][3]);
                this.canvasContext.stroke();
                // Draw Right curve shape
                glasspoint = this.$store.getters.rightcurveshape;
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.quadraticCurveTo(glasspoint[1][0],glasspoint[1][1],glasspoint[1][2],glasspoint[1][3]);
                this.canvasContext.stroke();
                // Draw initial top Sand
                this.canvasContext.beginPath();
                this.canvasContext.moveTo(93,40);
                this.canvasContext.lineTo(129,67);
                this.canvasContext.lineTo(132,67);
                this.canvasContext.lineTo(166,40);
                this.canvasContext.closePath();
                // the fill color
                this.canvasContext.fillStyle = "red";
                this.canvasContext.fill();
                // Draw final bottom sand
                this.canvasContext.beginPath();
                this.canvasContext.moveTo(81,118);
                this.canvasContext.lineTo(105,95);
                this.canvasContext.lineTo(155,95);
                this.canvasContext.lineTo(178,118);
                this.canvasContext.closePath();
                // the fill color
                this.canvasContext.fillStyle = "red";
                this.canvasContext.fill();
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