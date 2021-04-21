import axios from "axios";

export default {
    state: {
        news: []
    },
    mutations: {
        updateNews(state, news){
            state.news = news
        }
    },
    actions: {
        async getNews(ctx){
            let news = []
            await axios.get(' http://localhost:3000/news')
                .then(response => (news = response.data));
            ctx.commit('updateNews', news)
        }
    },
    getters: {
        allNews(state){
            return state.news
        }
    }
}