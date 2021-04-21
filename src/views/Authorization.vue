<template>
  <div class="authorization">
    <div class="authorization-layout">

    </div>
    <div v-if="!user.isAuth" class="authorization-wrapper">
      <div class="authorization-title">Войти</div>
      <form class="authorization-form">
        <input type="text" placeholder="Введите логин" class="form-input" v-model="login">
        <input type="password" placeholder="Введите пароль" class="form-input" v-model="password">
        <button type="submit" class="form-btn" @click.prevent="logInto">Войти</button>
      </form>
      <i class="fas fa-times authorization-close-icon" @click="closeAuth"></i>
      <p class="authorization-error" v-if="isRight">Такого пользователя не существует</p>
      <Speedometer :count="count"></Speedometer>
    </div>
    <div v-else class="authorization-wrapper">
      <p class="user-exist">Вы уже авторизованны!</p>
      <i class="fas fa-times authorization-close-icon" @click="closeAuth"></i>
    </div>

  </div>
</template>

<script>
import Speedometer from "./Speedometer";
import {mapGetters} from 'vuex'
export default {
  name: "Authorization",
  components: {Speedometer},
  data(){
    return{
      login: '',
      password: '',
      isRight: false,
      count: 0,
    }
  },
  computed: mapGetters(['user']),
  methods: {
    logInto(){
      if(this.login === this.user.login && this.password === this.user.password){
        this.isRight = false
        this.user.isAuth = true

        this.$store.dispatch('updateStorage')

        this.$router.push({ path: '/profile' })
      } else {
        this.isRight = true
        this.login = ''
        this.password = ''
        if(this.count < 100) this.count ++
      }
    },
    closeAuth(){
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>

</style>