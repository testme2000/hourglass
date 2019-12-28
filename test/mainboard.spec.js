import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import MainBoard from '../src/components/MainBoard.vue'

describe('Mainboard View', () => {
    it('Mainboard Setup Verification', () => {
        let boardWrapper = shallowMount(MainBoard);
        // 1. Vue instance
        expect(boardWrapper.isVueInstance()).toBeTruthy();
        // 2. Div Tag - Visiblity, count
        expect(boardWrapper.html().includes("div")).toBe(true);
        expect(boardWrapper.find("div").isVisible()).toBe(true);
        let divarray = boardWrapper.findAll("div");
        expect(divarray.length).toBe(1);
        // 3. Content of Div tag
        // Canvas
        expect(boardWrapper.html().includes("canvas")).toBe(true);
        let mainboard = boardWrapper.find("canvas"); 
        expect(mainboard.isVisible()).toBe(true);
        divarray = mainboard.findAll("canvas");
        expect(divarray.length).toBe(1);
        expect(mainboard.attributes().id).toBe("mainboard");
        // Glass Stub
        expect(boardWrapper.html().includes("glass-stub")).toBe(true);
        let glass = boardWrapper.find("glass-stub"); 
        expect(glass.isVisible()).toBe(true);
        divarray = glass.findAll("glass-stub");
        expect(divarray.length).toBe(1);
        expect(glass.attributes().canvasid).toBe("mainboard");
        console.log(boardWrapper.html());
        // Button
        expect(boardWrapper.html().includes("button")).toBe(true);
        let button = boardWrapper.find("button"); 
        expect(button.isVisible()).toBe(true);
        divarray = button.findAll("button");
        expect(divarray.length).toBe(1);
        expect(button.text()).toBe("Start Hourglass");
        console.log(boardWrapper.html());
    })
})