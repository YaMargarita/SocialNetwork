export default {
    state: {
        user: {}
    },
    mutations: {
        createUser(state, user){
            state.user = user
        },
    },
    actions: {
        getUser(ctx){
            let user = {}
            if (localStorage.getItem('user')) {
                try {
                    user = JSON.parse(localStorage.getItem('user'));
                } catch(e) {
                    localStorage.removeItem('user');
                }
            }
            ctx.commit('createUser', user)
        },
        updateStorage(ctx) {
            const parsed = JSON.stringify(ctx.state.user);
            localStorage.setItem('user', parsed);
        },
    },
    getters: {
        user(state){
            return state.user
        }
    }
}