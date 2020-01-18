import vuex from "vuex"
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import app from '../src/App.vue'

describe('Hourglass Store Check', () => {
    it('Store General verification', () => {
     
          
        let appWrapper = shallowMount(app, {
            mocks: {
              $store: {
                state: 
                {  
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
                    glasshourtoparea: (state) => state.mainglasstop,
                    glasshourbottomarea: (state) => state.mainglassbottom,
                    topbase: (state) => state.topbase,
                    bottombase: (state) => state.bottombase,
                    topleftbar : (state) => state.topleft,
                    toprightbar : (state) => state.topright,
                    bottomleftbar : (state) => state.bottomleft,
                    bottomrightbar : (state) => state.bottomright,
                    leftcurveshape : (state) => state.leftcurve,
                    rightcurveshape : (state) => state.rightcurve,
                    glasslinethickness : (state) => state.linethinkness,
                    glasslinecolor : (state) => state.linecolor,
                    glassfillcolor : (state) => state.fillcolor,
                    glassclearcolor : (state) => state.clearcolor,
                    topsandarea : (state) => state.topsandarea
                }
              }
            }
          });

        // 1. Vue instance
        expect(appWrapper.isVueInstance()).toBeTruthy();
        // 2. Validate State
        expect(appWrapper.vm.$store.state.mainglasstop).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.mainglasstop).toEqual([80, 20, 100, 10]);
        expect(appWrapper.vm.$store.state.mainglassbottom).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.mainglassbottom).toEqual([80,120,100,10]);
        expect(appWrapper.vm.$store.state.topbase).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.topbase).toEqual([[80,31], [180,31]]);
        expect(appWrapper.vm.$store.state.bottombase).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.bottombase).toEqual([[80,119],[180,119]]);
        expect(appWrapper.vm.$store.state.topleft).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.topleft).toEqual([[81,32],[125,65]]);
        expect(appWrapper.vm.$store.state.topright).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.topright).toEqual([[178,32],[135,65]]);
        expect(appWrapper.vm.$store.state.bottomleft).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.bottomleft).toEqual([[81,118],[125,75]]);
        expect(appWrapper.vm.$store.state.bottomright).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.bottomright).toEqual([[178,118],[135,75]]);
        expect(appWrapper.vm.$store.state.leftcurve).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.leftcurve).toEqual([[125,65],[132,68,125,75]]);
        expect(appWrapper.vm.$store.state.rightcurve).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.rightcurve).toEqual([[135,65],[131,68,135,75]]);
        expect(appWrapper.vm.$store.state.linethinkness).toEqual(1);
        expect(appWrapper.vm.$store.state.linecolor).toBe("red");
        expect(appWrapper.vm.$store.state.fillcolor).toBe("red");
        expect(appWrapper.vm.$store.state.clearcolor).toBe("white");
        expect(appWrapper.vm.$store.state.topsandarea).toBeInstanceOf(Array);
        expect(appWrapper.vm.$store.state.topsandarea).toEqual([[93,40],[129,67],[132,67],[166,40]]);
        // 3. Validate getters
        let getobj = appWrapper.vm.$store.getters.glasshourtoparea(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([80, 20, 100, 10]);   
        getobj = appWrapper.vm.$store.getters.glasshourbottomarea(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([80,120,100,10]);   
        getobj = appWrapper.vm.$store.getters.topbase(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[80,31], [180,31]]);   
        getobj = appWrapper.vm.$store.getters.bottombase(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[80,119],[180,119]]);   
        getobj = appWrapper.vm.$store.getters.topleftbar(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[81,32],[125,65]]);
        getobj = appWrapper.vm.$store.getters.toprightbar(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[178,32],[135,65]]);
        getobj = appWrapper.vm.$store.getters.bottomleftbar(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[81,118],[125,75]]);   
        getobj = appWrapper.vm.$store.getters.bottomrightbar(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[178,118],[135,75]]);   
        getobj = appWrapper.vm.$store.getters.leftcurveshape(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[125,65],[132,68,125,75]]);   
        getobj = appWrapper.vm.$store.getters.rightcurveshape(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[135,65],[131,68,135,75]]);
        getobj = appWrapper.vm.$store.getters.glasslinethickness(appWrapper.vm.$store.state);
        expect(getobj).toEqual(1);   
        getobj = appWrapper.vm.$store.getters.glasslinecolor(appWrapper.vm.$store.state);
        expect(getobj).toBe("red");
        getobj = appWrapper.vm.$store.getters.glassfillcolor(appWrapper.vm.$store.state);
        expect(getobj).toBe("red");
        getobj = appWrapper.vm.$store.getters.glassclearcolor(appWrapper.vm.$store.state);
        expect(getobj).toBe("white");
        getobj = appWrapper.vm.$store.getters.topsandarea(appWrapper.vm.$store.state);
        expect(getobj).toBeInstanceOf(Array);
        expect(getobj).toEqual([[93,40],[129,67],[132,67],[166,40]]);
    });
});
