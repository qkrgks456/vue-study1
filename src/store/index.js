import {createStore} from "vuex";
import {fetchAsk, fetchItem, fetchJobs, fetchNews, fetchUser} from "@/api";


export default createStore({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {}
    },
    getters: {
        fetchedItem(state) {
            return state.item;
        },
        fetchedUser(state) {
            return state.user;
        }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_ITEM(state, item) {
            state.item = item;
        },
    },
    actions: {
        FETCH_NEWS({commit}) {
            return fetchNews()
                .then(response => commit('SET_NEWS', response.data));
        },
        FETCH_ASK({commit}) {
            return fetchAsk()
                .then(response => commit('SET_ASKS', response.data));
        },
        FETCH_JOBS({commit}) {
            return fetchJobs()
                .then(response => commit('SET_JOBS', response.data));
        },
        FETCH_USER({commit}, userId) {
            return fetchUser(userId)
                .then(res => commit('SET_USER', res.data));
        },
        FETCH_ITEM({commit}, itemId) {
            return fetchItem(itemId)
                .then(res => commit('SET_ITEM', res.data));
        }
    }
})
