<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from "./views/Main";
export default {
  components: {Main},
  mounted() {
    let user = {
      isAuth: false,
      login: 'Yan',
      password: '12345',
      name: 'Ян',
      lastname: 'Невзоров',
      status: 'Ваше время ограничено, не тратьте его, живя чужой жизнью',
      info: [
        {
          title: 'Общая информация',
          params: [
            {
              title: 'Родной город',
              value: 'Москва'
            },
            {
              title: 'День рождения',
              value: '27 апреля'
            },
            {
              title: 'Языки',
              value: 'Русский, английский'
            },
          ]
        },
        {
          title: 'Хобби',
          params: [
            {
              title: 'Любимый фильм',
              value: 'Бойцовский клуб'
            },
            {
              title: 'Любимая еда',
              value: 'Пицца'
            },
            {
              title: 'Любимый писатель',
              value: 'Ф. М. Достоевский'
            },
          ]
        },
        {
          title: 'Контактная информация',
          params: [
            {
              title: 'Телефон',
              value: '8 (977) - 843 - 90 - 70'
            },
            {
              title: 'Email',
              value: 'nevzor.yan@gmail.com'
            },
          ]
        }
      ],
      community: [
        {
          title: '/dev/null',
          img: 'network-img.jpg'
        },
        {
          title: 'КудаGo',
          img: 'network-img.jpg'
        },
        {
          title: 'Афиша',
          img: 'network-img.jpg'
        },
        {
          title: 'OZON',
          img: 'network-img.jpg'
        }
      ],
      repostNews: []
    }

    if (!localStorage.getItem('user')) {
      const parsed = JSON.stringify(user);
      localStorage.setItem('user', parsed);
    }

    this.$store.dispatch('getUser')
  }
}
</script>
<style lang="scss">
@import "assets/style.css";
</style>
