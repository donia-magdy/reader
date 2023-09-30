<template>
  <nav class="navbar fixed-top navbar-expand-lg" style="background-color: #fff">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="logo" height="60" />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <button class="btn" style="background-color: #5165fd; color: white">
          تطوع معنا
        </button>
        <form role="search">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3Z"
                stroke="#383838"
                stroke-miterlimit="10"
              />
              <path
                d="M15.8574 15.8574L21 21.0001"
                stroke="#383838"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </g>
          </svg>
          <input
            class="form-control me-2"
            type="search"
            name="search"
            placeholder="بحث"
            aria-label="Search"
            v-model="searchQuery" 
            @keypress.stop.prevent="navigateToSearch" 
            
          />
          <!-- <router-link to="/search" class="nav-link" href="#"><input
            class="form-control me-2"
            type="search"
            name="search"
            placeholder="بحث"
            aria-label="Search"
            
          /></router-link>  -->
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin: auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >الرئيسية</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#"
              >من نحن</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" href="#"
              >راسلنا</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    navigateToSearch() {
      if (this.searchQuery=="قراءة") {
        this.$router.push({ path: "/search", query: { q: this.searchQuery } });

      }
      this.searchQuery = "";
    },
  },
};
</script>
<style>
ul li {
  padding-right: 40px;
  font-size: 20px;
}
form {
  position: relative;
  display: flex;
}
svg {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
form input {
  padding-right: 35px !important;
  background-color: #eee !important;
}
nav {
  box-shadow: 0 2px 7px #eee;
}
nav a.router-link-exact-active {
  color: rgba(81, 101, 253, 1) !important;
  cursor: default;
}
@media (max-width: 992px) {
  .container-fluid {
    flex-direction: row;
  }
  form {
    display: none;
  }
  ul li {
    padding: 0 0 0 40px;
  }
  .container-fluid .navbar-collapse {
    display: flex;
    flex-direction: column-reverse;
  }
}
@media (min-width: 993px) {
  .container-fluid {
    flex-direction: row-reverse;
  }
}
</style>
