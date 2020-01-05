import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import MainBoard from '../src/components/MainBoard.vue'

describe('Mainboard View', () => {
    it('Mainboard Setup Verification', () => {
        let boardWrapper = shallowMount(MainBoard, {
            propsData: {
                errormessage: 'You need HTML5 to display HourGlass'
            }
        });
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
        // Button
        expect(boardWrapper.html().includes("button")).toBe(true);
        let button = boardWrapper.find("button"); 
        expect(button.isVisible()).toBe(true);
        divarray = button.findAll("button");
        expect(divarray.length).toBe(1);
        expect(button.text()).toBe("Start Hourglass");
        // Mainboard Internal state verification
        expect(boardWrapper.vm.eventstatus).toBe(false);
        expect(boardWrapper.vm.boardid).toBe('mainboard');
        expect(boardWrapper.props().errormessage).toBe('You need HTML5 to display HourGlass')
        expect(boardWrapper.props('errormessage')).toBe('You need HTML5 to display HourGlass')
    })

    it('Mainboard DOM Event Verification', () => {
        let boardWrapper = shallowMount(MainBoard);
        let button = boardWrapper.find("button");

        // 1. DOM event verification
        const StartHourGlass = jest.fn(); // mock function
        // updating method with mock function
        boardWrapper.setMethods({ StartHourGlass });
        //find the button and trigger click event
        button.trigger('click');
        expect(StartHourGlass).toBeCalled();
    })

    it('Mainboard Status update Verification', () => {
        let boardWrapper = shallowMount(MainBoard);
        let button = boardWrapper.find("button");

        //find the button and trigger click event
        button.trigger('click');
        expect(boardWrapper.vm.eventstatus).toBe(true);
    })
})