<script>
    export default {
        name : 'Glass',
        props : {
            canvasid : String,
            starthour : Boolean
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
                ],
                topClearArea : {
                    drawinterval : -1,
                    cleargrid : [[93,40][166,40]],
                    currentIndex : -1,
                    startrow : 0,
                    endrow : 0,
                    column : 0,
                    rowbegin : 93,
                    rowend : 166,
                    finalrow : 132,
                    rowupdate : 2
                },
                middleFlowArea : {
                    drawinterval : -1,
                    rowbegin : 130,
                    columnend : 116,
                    currentIndex : -1,
                    column : 66,
                    finalrow : 132,
                    rowupdate : 2
                },
                bottomFillArea : {
                    drawInterval : -1,
                    leftrowBegin : 0,
                    rightrowBegin : 0,
                    leftrowEnd : 0,
                    rightrowEnd : 178,
                    initRow : 84,
                    finalrow : 0,
                    isTopAreaClear: false,
                    isMiddleAreaClear : false,
                    isFinalAnimationPhase : false
                }
            }
        },
        watch: {
            starthour(value,previousvalue) {
                if(value) {
                    this.performWorkOnTopArea();
                    this.performWorkOnMiddleArea();
                }
                else 
                {
                    clearInterval(this.drawinterval);
                }
            }
        },
        render() {
            return null;
        },
        mounted() {
           this.mountGlass();
        },
        methods: {
            mountGlass() 
            {
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
                glasspoint = this.$store.getters.topsandarea;
                this.canvasContext.beginPath();
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.lineTo(glasspoint[1][0],glasspoint[1][1]);
                this.canvasContext.lineTo(glasspoint[2][0],glasspoint[2][1]);
                this.canvasContext.lineTo(glasspoint[3][0],glasspoint[3][1]);
                this.canvasContext.closePath();
                // the fill color
                this.canvasContext.fillStyle = this.$store.getters.glassfillcolor;
                this.canvasContext.fill();
            },
            animatetoparea() 
            {
                this.canvasContext.fillStyle = this.$store.getters.glassclearcolor;
                this.canvasContext.fillRect(this.topClearArea.startrow,this.topClearArea.column,1,1);
                this.topClearArea.startrow++;
            },
            cleartoparea()
            {
                // Draw initial top Sand
                glasspoint = this.$store.getters.topsandarea;
                this.canvasContext.beginPath();
                this.canvasContext.moveTo(glasspoint[0][0],glasspoint[0][1]);
                this.canvasContext.lineTo(glasspoint[1][0],glasspoint[1][1]);
                this.canvasContext.lineTo(glasspoint[2][0],glasspoint[2][1]);
                this.canvasContext.lineTo(glasspoint[3][0],glasspoint[3][1]);
                this.canvasContext.closePath();
                // the fill color
                this.canvasContext.fillStyle = this.$store.getters.glassclearcolor;
                this.canvasContext.fill();
                // Indicate bottom area that we are cleared from top side
                this.bottomFillArea.isTopAreaClear = true;
            },
            animateMiddlearea()
            {
                this.canvasContext.fillStyle = this.$store.getters.glassfillcolor;
                this.canvasContext.fillRect(this.middleFlowArea.startrow,this.middleFlowArea.column,2,2);
                this.middleFlowArea.column++;
            },
            reinitmiddleFlowArea() {
                this.middleFlowArea.drawinterval = -1;
                this.middleFlowArea.rowbegin = 130;
                this.middleFlowArea.columnend = 116;
                this.middleFlowArea.currentIndex = -1;
                this.middleFlowArea.column = 66;
                this.middleFlowArea.finalrow = 132;
                this.middleFlowArea.rowupdate = 2;
            },
            clearMiddlearea()
            {
                this.canvasContext.fillStyle = this.$store.getters.glassclearcolor;
                this.canvasContext.fillRect(this.middleFlowArea.startrow,this.middleFlowArea.column,2,2);
                this.middleFlowArea.column++;
            },
            animateBottomArea()
            {
                this.canvasContext.beginPath();
                this.canvasContext.moveTo(this.bottomFillArea.startrow,this.bottomFillArea.column);
                this.canvasContext.lineTo(this.bottomFillArea.startrow,this.bottomFillArea.column + 1);
                this.canvasContext.strokeStyle = this.$store.getters.glassfillcolor;
                this.canvasContext.stroke();
                this.canvasContext.closePath();
                this.bottomFillArea.startrow++;
            },
            performWorkOnTopArea()
            {
                    this.topClearArea.startrow = this.topClearArea.rowbegin;
                    this.topClearArea.endrow = 166 - 93;
                    this.topClearArea.column = 40;
                    // Prepare for next row
                    this.topClearArea.rowbegin += 1;
                    var self = this;
                    this.topClearArea.drawinterval = setInterval(() => {
                        if(self.topClearArea.startrow < self.topClearArea.rowend) {
                            // Clear the row
                            this.animatetoparea();
                        }
                        else if(self.topClearArea.startrow >= self.topClearArea.rowend) {
                            // Check whether we reach at the end
                            if(self.topClearArea.rowbegin >= self.topClearArea.finalrow) {
                                // top are sand is empty
                                clearInterval(self.topClearArea.drawinterval);
                                // Mark the area as clear
                                this.cleartoparea();
                                // Start middle area cleanup
                                this.reinitmiddleFlowArea();
                                this.performCleanupWorkOnMiddleArea();
                            }
                            else 
                            {
                                // Reset column 
                                self.topClearArea.column++;
                                self.topClearArea.rowbegin += self.topClearArea.rowupdate;
                                self.topClearArea.rowend -= self.topClearArea.rowupdate;
                                self.topClearArea.rowupdate = (self.topClearArea.rowupdate == 3 ? 0 : 3); 
                                self.topClearArea.startrow = self.topClearArea.rowbegin;
                                this.animatetoparea();
                            }
                        }
                    },500);
            },
            performWorkOnMiddleArea()
            {
                    this.middleFlowArea.startrow = this.middleFlowArea.rowbegin;
                    var self = this;
                    this.middleFlowArea.drawinterval = setInterval(() => {
                        if(self.middleFlowArea.column < self.middleFlowArea.rowend) {
                            // Clear the row
                            this.animateMiddlearea();
                        }
                        else if(self.middleFlowArea.column <= self.middleFlowArea.columnend) {
                            // Check whether we reach at the end
                            // Reset column 
                            self.middleFlowArea.rowbegin += self.middleFlowArea.rowupdate;
                            this.animateMiddlearea();
                        }
                        else if(self.middleFlowArea.column > self.middleFlowArea.columnend) {
                                // top are sand is empty
                                clearInterval(self.middleFlowArea.drawinterval);
                                // Mark the area as clear
                                this.performBottomArea();
                        }
                    },500);
            },
            performCleanupWorkOnMiddleArea()
            {
                    this.middleFlowArea.startrow = this.middleFlowArea.rowbegin;
                    // Reset columnend to current column of bottom area fillup region, we 
                    // don't need to go all the way down
                    this.middleFlowArea.columnend = this.bottomFillArea.column - 2;
                    var self = this;
                    this.middleFlowArea.drawinterval = setInterval(() => {
                        if(self.middleFlowArea.column < self.middleFlowArea.rowend) {
                            // Clear the row
                            this.clearMiddlearea();
                        }
                        else if(self.middleFlowArea.column <= self.middleFlowArea.columnend) {
                            // Check whether we reach at the end
                            // Reset column 
                            self.middleFlowArea.rowbegin += self.middleFlowArea.rowupdate;
                            this.clearMiddlearea();
                        }
                        else if(self.middleFlowArea.column > self.middleFlowArea.columnend) {
                            // top are sand is empty
                            clearInterval(self.middleFlowArea.drawinterval);
                            // Mark that middle area is clear and we are in final phase
                            self.bottomFillArea.isMiddleAreaClear = true;
                            self.bottomFillArea.isFinalAnimationPhase = true;
                        }
                    },500);
            },
            performBottomArea() 
            {
                this.bottomFillArea.startrow = this.bottomFillArea.initRow;
                this.bottomFillArea.column = 117;
                var self = this;
                this.bottomFillArea.drawinterval = setInterval(() => {
                    if(self.bottomFillArea.startrow < self.bottomFillArea.rightrowEnd) {
                        // Clear the row
                        this.animateBottomArea();
                    }
                    else {
                        if(self.bottomFillArea.isTopAreaClear && !self.bottomFillArea.isFinalAnimationPhase) {
                            self.bottomFillArea.isFinalAnimationPhase = true;
                            //self.performCleanupWorkOnMiddleArea();
                        }
                        else if(self.bottomFillArea.isTopAreaClear && self.bottomFillArea.isFinalAnimationPhase && self.bottomFillArea.isMiddleAreaClear)
                        {
                            // we completed animation
                            clearInterval(self.bottomFillArea.drawinterval);
                        }
                        // Adjust both row and column
                        this.bottomFillArea.initRow += 1;
                        self.bottomFillArea.startrow = this.bottomFillArea.initRow;
                        self.bottomFillArea.column -= 1;
                        self.bottomFillArea.rightrowEnd -= 1;
                    }
                },500);
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