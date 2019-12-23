import 'jest-canvas-mock'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import app from '../src/App.vue'

describe('Hourglass App', () => {
    it('Vue instance verficiation', () => {
        //window.HTMLCanvasElement.prototype.getContext = () => {}
        let appwrapper = mount(app);
        expect(appwrapper.isVueInstance()).toBeTruthy();
        console.log(appwrapper);
    })
})