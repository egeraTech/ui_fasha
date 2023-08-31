
import { createStore } from 'vuex'
import axios from 'axios';


const store = createStore({
    state: {
        user: '',
        errorMessage: '',
        users: [], /// ALL
        fundraiser: [],
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        login(state, user) {
            state.user = user;
            localStorage.setItem('user', state.user);
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem('user');
            // alert('Logged out')
        },
        initializeStore(state) {
            if (localStorage.getItem('user')) {
                state.user = JSON.parse(localStorage.getItem('user'));
            } else {
                this.commit("logout");
            }
        }
    },
    actions: {
        signup({ commit, dispatch }, user) {
            console.log('signup action called with user:', user);
            return new Promise((resolve, reject) => {
                // commit('auth_request');
                axios({
                url: 'signup/',
                data: user,
                method: 'POST',
                })
                .then(response => {
                    const access = response.data.access;
                    const refresh = response.data.refresh;
                    commit('auth_success', { access, refresh });
                    dispatch('login');
                    resolve(response);
                })
                .catch(error => {
                    commit('auth_error');
                    reject(error);
                });
            });
        },
    },
    modules: {
    },
    getters: {
        user: state => {
            if (state.user === null) {
                return JSON.parse(localStorage.getItem('user'))
            }
            return state.user
        },
        access: (state, getters) => getters?.user?.access

    },
    computed: {
    },
    // mounted() {
    // },
})

export default store
