import jsdom from 'jsdom';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Glass from '../src/components/Glass.vue'
import 'jest-canvas-mock';

describe('Glass View', () => {
    it('Glass Setup Verification', () => {
        const mountGlass = jest.fn();
        let glassWrapper = mount(Glass, {
            propsData: {
                canvasid: 'mainboard',
                starthour : true
            },
            methods : { mountGlass }
        });
        // 1. Vue instance
        expect(glassWrapper.isVueInstance()).toBeTruthy();
        // 2. Div Tag - Visiblity, count
        expect(glassWrapper.html().includes("div")).toBe(false);
        let divarray = glassWrapper.findAll("div");
        expect(divarray.length).toBe(0);
        // 3. Internal state - Props, data
        expect(glassWrapper.props().canvasid).toBe('mainboard');
        expect(glassWrapper.props('canvasid')).toBe('mainboard');
        expect(glassWrapper.props().starthour).toBe(true);
        expect(glassWrapper.props('starthour')).toBe(true);
        expect(glassWrapper.vm.canvasContext).toBe(null);

        expect(glassWrapper.vm.outerBoundry).toBeInstanceOf(Array);
        expect(glassWrapper.vm.outerBoundry).toEqual([[80,30],[180,30],[208,495],[417,495]]);

        expect(glassWrapper.vm.innerHolder).toBeInstanceOf(Array);
        expect(glassWrapper.vm.innerHolder).toEqual([[208,100],[301,275],[418,100],[321,280]]);

        expect(glassWrapper.vm.topSand).toBeInstanceOf(Array);
        expect(glassWrapper.vm.topSand).toEqual([[90,34],[100,30]]);

        expect(glassWrapper.vm.topClearArea.drawinterval).toBe(-1);
        expect(glassWrapper.vm.topClearArea.currentIndex).toBe(-1);
        expect(glassWrapper.vm.topClearArea.startrow).toBe(0);
        expect(glassWrapper.vm.topClearArea.endrow).toBe(0);
        expect(glassWrapper.vm.topClearArea.column).toBe(0);
        expect(glassWrapper.vm.topClearArea.rowbegin).toBe(93);
        expect(glassWrapper.vm.topClearArea.rowend).toBe(166);
        expect(glassWrapper.vm.topClearArea.finalrow).toBe(132);
        expect(glassWrapper.vm.topClearArea.rowupdate).toBe(2);
        expect(glassWrapper.vm.topClearArea.cleargrid).toBeInstanceOf(Array);
        expect(glassWrapper.vm.topClearArea.cleargrid).toEqual([[93,40][166,40]]);
        
        expect(glassWrapper.vm.middleFlowArea.drawinterval).toBe(-1);
        expect(glassWrapper.vm.middleFlowArea.currentIndex).toBe(-1);
        expect(glassWrapper.vm.middleFlowArea.column).toBe(66);
        expect(glassWrapper.vm.middleFlowArea.rowbegin).toBe(130);
        expect(glassWrapper.vm.middleFlowArea.finalrow).toBe(132);
        expect(glassWrapper.vm.middleFlowArea.rowupdate).toBe(2);
        expect(glassWrapper.vm.middleFlowArea.columnend).toBe(116);

        expect(glassWrapper.vm.bottomFillArea.drawInterval).toBe(-1);
        expect(glassWrapper.vm.bottomFillArea.leftrowBegin).toBe(0);
        expect(glassWrapper.vm.bottomFillArea.rightrowBegin).toBe(0);
        expect(glassWrapper.vm.bottomFillArea.leftrowEnd).toBe(0);
        expect(glassWrapper.vm.bottomFillArea.rightrowEnd).toBe(178);
        expect(glassWrapper.vm.bottomFillArea.initRow).toBe(84);
        expect(glassWrapper.vm.bottomFillArea.finalrow).toBe(0);
        expect(glassWrapper.vm.bottomFillArea.isTopAreaClear).toBe(false);
        expect(glassWrapper.vm.bottomFillArea.isMiddleAreaClear).toBe(false);
        expect(glassWrapper.vm.bottomFillArea.isFinalAnimationPhase).toBe(false);
    })
});


describe('Glass View Watcher ', () => {
    let topAreaSpy,middleAreaSpy,clearIntervalSpy;
    const mountGlass = jest.fn();
    let glassWrapper = mount(Glass, {
        propsData: {
            canvasid: 'mainboard',
            starthour : true
        },
        methods : { mountGlass }
    });

    
    beforeAll(() => {
        topAreaSpy = jest.spyOn(glassWrapper.vm, 'performWorkOnTopArea');
        middleAreaSpy = jest.spyOn(glassWrapper.vm, 'performWorkOnMiddleArea');
        clearIntervalSpy = jest.spyOn(window, 'clearInterval');
    })
    afterEach(() => {
        topAreaSpy.mockClear();
        middleAreaSpy.mockClear();
        clearIntervalSpy.mockClear();
    })

    it('Glass Mount Verification',  () => {
        glassWrapper.vm.$options.watch.starthour.call(glassWrapper.vm, true);
        expect(mountGlass).toHaveBeenCalled();
        expect(topAreaSpy).toBeCalled();
        expect(glassWrapper.vm.topClearArea.startrow).toBeGreaterThanOrEqual(glassWrapper.vm.topClearArea.rowbegin - 1);
        expect(glassWrapper.vm.topClearArea.endrow).toEqual(166-93);
        expect(glassWrapper.vm.topClearArea.column).toEqual(40);
        expect(glassWrapper.vm.topClearArea.drawinterval).not.toEqual(-1);
        expect(middleAreaSpy).toBeCalled();
        expect(glassWrapper.vm.middleFlowArea.startrow).toEqual(glassWrapper.vm.middleFlowArea.rowbegin);
        expect(glassWrapper.vm.middleFlowArea.drawinterval).not.toEqual(-1);
        expect(clearIntervalSpy).not.toBeCalled();
    })
    it('Glass Mount Clear Interval Verification',  () => {
        glassWrapper.vm.$options.watch.starthour.call(glassWrapper.vm, false);
        expect(topAreaSpy).not.toBeCalled();
        expect(middleAreaSpy).not.toBeCalled();
        expect(clearIntervalSpy).toBeCalled();
    })
});
