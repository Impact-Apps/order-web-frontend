import View from '@/pages/View'
import Footer from '@/components/navigation/Footer'
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({ mode: 'history' })

describe('View Page', () => {
    let wrapper, vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
        wrapper = mount(View, {
            vuetify,
            router,
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('should render Footer', () => {
        expect(wrapper.contains(Footer)).toBeTruthy()
    })

})
