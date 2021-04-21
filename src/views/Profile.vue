<template>
  <div class="user-profile">
    <div class="user-wrapper">
      <div class="user-photo-wrapper">
        <img src="../assets/img/user-photo.jpg" alt="" class="user-photo">
      </div>
      <div class="community">
        <div class="community-title">Сообщества</div>
        <div class="community-wrapper">
          <div class="community-item" v-for="(item, index) in user.community" :key="index">
            <img :src="require(`../assets/img/${item.img}`)" alt="" class="profile-community-img">
            <p class="community-item-title">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="user-info">
      <div class="user-name-wrapper">
        <div class="user-name">{{ user.name }} {{ user.lastname }}</div>
        <div class="user-status">{{ user.status }}</div>
      </div>
      <div class="user-menu">
        <span class="user-menu-item" :class="{active: activeTab === 'info'}" @click="changeTab('info')">Инфо</span>
        <span class="user-menu-item" :class="{active: activeTab !== 'info'}" @click="changeTab('wall')">Стена</span>
      </div>


      <div v-if="activeTab === 'info'" class="user-info-wrapper">
        <div class="user-info-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nam provident tenetur? Alias assumenda,
          corporis, debitis delectus dicta eum expedita facere fuga illum ipsam iste maiores officia pariatur quasi
          quibusdam, quo quod soluta tempora ut voluptates. Animi assumenda dicta, distinctio eum facilis ipsam quam!
          Alias modi molestiae nulla saepe sed.
        </div>
        <div class="user-info-params" v-for="(item, index) in user.info" :key="index">
          <div class="user-info-title">{{ item.title }}</div>
          <div class="user-info-row">
            <div class="user-info-item" v-for="(param, index) in item.params" :key="index">
              <div class="info-item-title">{{ param.title }}</div>
              <div class="info-item-value">{{ param.value }}</div>
            </div>
          </div>
        </div>
      </div>


      <div v-else class="user-wall-wrapper">
        <div v-if="user.repostNews.length === 0" class="emptyWall">
          <p>Здесь пока ничего нет</p>
          <p>Перейдите в <router-link to="/news" class="empty-link">новости</router-link> для просмотра записей</p>
        </div>
        <div class="wall-item" v-for="(item, index) in user.repostNews" :key="item.id">
          <div class="news-item-info">
            <img :src="require(`../assets/img/${item.community_img}`)" alt="" class="community-img">
            <div class="network-name">{{ item.community_title }}</div>
          </div>
          <div v-if="item.text" class="news-title">{{ item.text }}</div>
          <div class="news-content">
            <img :src="require(`../assets/img/${item.img}`)" alt="" class="community-content-img">
          </div>
          <i class="far fa-trash-alt delete-btn" @click="deleteNews(index)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Profile",
  data(){
    return{
      activeTab: 'info',
    }
  },
  computed: mapGetters(['user']),
  methods: {
    changeTab(type){
      this.activeTab = type
    },
    deleteNews(index){
      this.user.repostNews.splice(index, 1)
      this.$store.dispatch('updateStorage')
    }
  },
}
</script>

<style scoped>
</style>