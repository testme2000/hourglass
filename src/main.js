import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.use(Vuex);

const GlassInformation = new Vuex.Store({
  state: {
      mainglasstop : [80, 20, 100, 10],
      mainglassbottom : [80,120,100,10],
      topbase : [[80,31], [180,31]],
      bottombase : [[80,119],[180,119]],
      topleft : [[81,32],[125,65]],
      topright : [[178,32],[135,65]],
      bottomleft: [[81,118],[125,75]],
      bottomright: [[178,118],[135,75]],
      leftcurve : [[125,65],[132,68,125,75]],
      rightcurve : [[135,65],[131,68,135,75]],
      linethinkness : 1,
      linecolor: "red",
      fillcolor: "red",
      clearcolor: "white",
      topsandarea: [[93,40],[129,67],[132,67],[166,40]]
  },
  getters: {
    glasshourtoparea: (state) => {
      return state.mainglasstop;
    },
    glasshourbottomarea: (state) => {
      return state.mainglassbottom;
    },
    topbase: (state) => {
      return state.topbase;
    },
    bottombase: (state) => {
      return state.bottombase;
    },
    topleftbar : (state) => {
      return state.topleft;
    },
    toprightbar : (state) => {
      return state.topright;
    },
    bottomleftbar : (state) => {
      return state.bottomleft;
    },
    bottomrightbar : (state) => {
      return state.bottomright;
    },
    leftcurveshape : (state) => {
      return state.leftcurve;
    },
    rightcurveshape : (state) => {
      return state.rightcurve;
    },
    glasslinethickness : (state) => {
      return state.linethinkness;
    },
    glasslinecolor : (state) => {
      return state.linecolor;
    },
    glassfillcolor : (state) => {
      return state.fillcolor;
    },
    glassclearcolor : (state) => {
      return state.clearcolor;
    },
    topsandarea : (state) => {
      return state.topsandarea;
    }
  }
})

Vue.config.productionTip = false


new Vue({
  store : GlassInformation,
  render: h => h(App),
}).$mount('#apphour')
