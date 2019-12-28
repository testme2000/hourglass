import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import app from '../src/App.vue'

describe('Hourglass App', () => {
    it('Vue instance verficiation', () => {
        let appWrapper = shallowMount(app);
        // 1. Vue instance
        expect(appWrapper.isVueInstance()).toBeTruthy();
        // 2. Div Tag - Visiblity, count, attribute
        expect(appWrapper.html().includes("div")).toBe(true);
        expect(appWrapper.attributes().id).toBe("app");
        expect(appWrapper.find("div").isVisible()).toBe(true);
        let divarray = appWrapper.findAll("div");
        expect(divarray.length).toBe(1);
        // 3. Main board layout
        expect(appWrapper.html().includes("mainboard-stub")).toBe(true);
        let mainboard = appWrapper.find("mainboard-stub"); 
        expect(mainboard.isVisible()).toBe(true);
        divarray = appWrapper.findAll("mainboard-stub");
        expect(divarray.length).toBe(1);
        expect(mainboard.attributes().errormessage).toBe("You need HTML5 to display HourGlass");
    })
})