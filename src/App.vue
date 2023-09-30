<template>
  <div>
    <div v-if="loading">
      <div class="spinner-border text-primary spin" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <NavBar />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      loading: true, 
    };
  },

  created() {
    setTimeout(() => {
      this.loading = false; // Set loading to false after 2 seconds
    }, 1500);
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap");
* {
  direction: rtl;
  font-family: "Cairo", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.spin {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
