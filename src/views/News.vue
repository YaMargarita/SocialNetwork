<template>
  <div class="news">
    <div class="news-wrapper">
      <div class="news-item"
           v-for="news in allNews"
           :key="news.id">
        <div class="news-item-info">
          <img :src="require(`../assets/img/${news.community_img}`)" alt="" class="community-img">
          <div class="network-name">{{ news.community_title }}</div>
        </div>
        <div v-if="news.text" class="news-title" v-html="news.text">{{ news.text }}</div>
        <div class="news-content">
          <img :src="require(`../assets/img/${news.img}`)" alt="" class="community-content-img">
        </div>
          <i class="fas fa-share repost-icon" :class="{active: user.repostNews.findIndex(el => el.id === news.id) >= 0}"
             @click="repostNews(news)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "News",
  computed: mapGetters(["allNews", "user"]),
  methods: {
    repostNews(news){
      if(this.user.isAuth){
        let index = this.user.repostNews.findIndex(el => el.id === news.id)
        if(index >= 0){
          this.user.repostNews.splice(index, 1)
        } else this.user.repostNews.unshift(news)
        this.$store.dispatch('updateStorage')
      } else {
        this.$router.push({path: '/authorization'})
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('getNews')
  }
}
</script>

<style scoped>

</style>