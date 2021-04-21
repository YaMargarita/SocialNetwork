<template>
  <div class="layout">
    <div class="sidebar">
      <ul class="sidebar-list">
        <router-link v-for="(item, index) in sidebar"
                     :key="index"
                     :to="item.to" tag="li"
                     class="sidebar-item"
                     active-class="active">
          <i :class="item.icon"></i> {{ item.title }}
        </router-link>
      </ul>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data(){
    return{
      sidebar: [
        {
          title: 'Новости',
          to: '/news',
          icon: 'far fa-newspaper sidebar-icon'
        },
        {
          title: 'Профиль',
          to: '/profile',
          icon: 'far fa-user sidebar-icon'
        },
        {
          title: 'Авторизация',
          to: '/authorization',
          icon: 'fas fa-sign-in-alt sidebar-icon'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>