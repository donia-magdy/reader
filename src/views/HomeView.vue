<template>
  <div class="home">
    <div class="part1">
      <form class="search" v-if="!isWideScreen" role="search">
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
        <!-- <router-link to="/search" style="text-decoration: none;"><input
            class="form-control me-2"
            type="search"
            placeholder="بحث"
            aria-label="Search"
          /></router-link>  -->
      </form>

      <div class="container text-center">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="row">
              <div class="col-6 col-md-8 col-lg-12 side">
                <div class="box">
                  <img src="../assets/Rectangle3.png" alt="" />
                </div>
                <div class="descript">
                  <span v-if="isWideScreen">2 فبراير. 5 دقائق قراءة</span>
                  <span>كتب بواسطة : أحمد السيد</span>
                </div>
                <h2>تعزيز التفكير النقدي من خلال القراءة</h2>
              </div>
              <div class="col-6 col-md-8 col-lg-12 side">
                <div class="box">
                  <img src="../assets/Rectangle4.png" alt="" />
                </div>
                <div class="descript">
                  <span v-if="isWideScreen">2 فبراير. 5 دقائق قراءة</span>
                  <span>كتب بواسطة : أحمد السيد</span>
                </div>

                <h2>رحلة ممتعة لاكتشاف التراث</h2>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 border-end">
            <RouterLink to="/article"><div class="box"><img src="../assets/Rectangle2.png" alt="" /></div></RouterLink>
            <div class="descript">
              <span>2 فبراير. 5 دقائق قراءة</span>
              <span>كتب بواسطة : أحمد السيد</span>
            </div>
            <h2>فوائد القراءة اليومية</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="part2">
        <div class="paint">
          <h2 class="heading">الأقسام</h2>
          <img src="../assets/line.png" alt="" />
        </div>
        <Swiper header="swip1" />
      </div>

      <div class="part3">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h2 class="first">أحدث</h2>
            <div class="paint">
            <h2 class="heading">المقالات</h2>
            <img src="../assets/line.png" alt="" /></div>
          </div>
          <div style="color: rgba(81, 101, 253, 1)">عرض الجميع</div>
        </div>
        <div class="row align-items-center p-2" v-for="post in recentPosts">
          <div class="col-6">
            <img class="imgwid" :src="post.image" alt="" />
          </div>
          <div class="col-6 text-end">
            <div class="hor bf">{{ post.author }}</div>
            <h2>{{ post.title }}</h2>
            <div class="text" v-if="isWideScreen">{{ post.text }}</div>
            <div class="text" v-else>{{ post.smText }}</div>
            <div class="hor" style="color: rgba(81, 101, 253, 1)">
              أقرأ المزيد
            </div>
            <div class="time">{{ post.time }}</div>
          </div>
        </div>
      </div>
      <div class="part4">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h2 class="first">الأكثر</h2>
            <div class="paint">
            <h2 class="heading">قراءة</h2>
            <img src="../assets/line.png" alt="" /></div>
          </div>
          <div style="color: rgba(81, 101, 253, 1)">عرض الجميع</div>
        </div>
        <Swiper header="swip2" />
      </div>
      <div class="part5">
        <div class="box">
          <h2>اشترك ليصلك جميع المقالات</h2>
          <p>
            ابقي علي اطلاع مع مقالتنا فور نزولها مع خدمة الرسائل البريدية هذه
            الخدمة مجانية تماماً
          </p>
          <form action="" class="justify-content-center mt-5">
            <button type="submit">أشترك</button>
            <input type="email" placeholder="البريد الالكتروني" />
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "@/components/Swiper.vue";
import Footer from "@/components/Footer.vue";
import "swiper/swiper-bundle.css";
// import Swiper from "swiper";
export default {
  name: "HomeView",
  components: {
    Swiper,
    Footer,
  },
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "فوائد القراءة اليومية",
          time: "2 فبراير. 5 دقائق قراءة",
          author: "كتب بواسطة : أحمد السيد",
          image: "../assets/Rectangle2.png",
        },
        {
          id: 2,
          title: "تعزيز التفكير النقدي من خلال القراءة",
          time: "2 فبراير. 5 دقائق قراءة",
          author: "كتب بواسطة : أحمد السيد",
          image: "../assets/Rectangle3.png",
        },
        {
          id: 3,
          title: "رحلة ممتعة لاكتشاف التراث",
          time: "2 فبراير. 5 دقائق قراءة",
          author: "كتب بواسطة : أحمد السيد",
          image: "../assets/Rectangle4.png",
        },
      ],
      recentPosts: [
        {
          author: "كتب بواسطة : أحمد السيد",
          title: "فوائد القراءة اليومية",
          smText: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
          text: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
          image: require("../assets/Rectangle11.png"),
          time: "2 فبراير. 5 دقائق قراءة"
        },
        {
          author: "كتب بواسطة : أحمد السيد",
          title: "فوائد القراءة اليومية",
          smText: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
          text: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
          image: require("../assets/Rectangle12.png"),
          time: "2 فبراير. 5 دقائق قراءة"
        },
      ],
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    isWideScreen() {
      return this.screenWidth >= 768; 
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  },
  beforeUnmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
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
.home {
  padding-bottom: 40px;
  position: relative;
}
.home .search {
  display: block;
  margin: 20px;
}
.home .search input {
  display: initial;
}
.part1 {
  margin-top: 120px;
  margin-bottom: 120px;
}
.box img {
  width: 100%;
}
@media (max-width: 992px) {
  .part1 .container.text-center .row {
    flex-direction: column-reverse;
  }
  .part1 .container.text-center .row div .row {
    flex-direction: row;
  }
  .part1 .container.text-center .row div:last-child {
    border: none !important;
  }
}
.descript {
  display: flex;
  justify-content: space-between;
  color: #38383880;
  font-size: 14px;
  font-weight: 400;
  margin-top: 15px;
}
.side h2 {
  font-size: 16px;
}
.descript + h2 {
  text-align: right;
  margin-top: 10px;
}
.part2 {
  margin-bottom: 120px;
}
.paint {
  position: relative;
  display: inline-block;
}
.heading {
  /* الأقسام */
  display: inline-block;
  background: linear-gradient(to right, #5367ff 50%, #e553ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.heading + img {
  position: absolute;
  top: 50%;
  left: 27%;
  transform: translate(-50%);
  z-index: -1;
}
.first {
  display: inline;
}
.imgwid {
  width: 100%;
}
.text {
  font-size: 20px;
  color: rgba(56, 56, 56, 0.5);
}
.time {
  color: rgba(56, 56, 56, 0.5);
}
.hor {
  position: relative;
  font-size: 16px;
  padding: 20px;
  color: rgba(56, 56, 56, 0.5);
}
.hor.bf::before {
  content: "";
  width: 20px;
  height: 1px;
  position: absolute;
  top: 51%;
  right: -5px;
  background-color: rgba(209, 209, 209, 1);
}

.part3 {
  margin-bottom: 120px;
}
.part4 {
  margin-bottom: 120px;
}
.part5 .box {
  padding: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.part5 .box h2 {
  color: rgba(56, 56, 56, 1);
  margin-bottom: 30px;
}
.part5 .box p {
  max-width: 415px;
  margin: auto;
  color: rgba(56, 56, 56, 0.8);
}
.part5 input[type="email"] {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-right: none;
  background-color: white !important;
  width: 500px;
  height: 50px;
}
button[type="submit"] {
  border: none;
  background-color: #5165fd;
  color: white;
  width: 100px;
  border-radius: 2px;
}

@media (max-width: 992px) {
  .text {
    font-size: 10px;
  }
  .hor {
    font-size: 8px;
    padding: 0;
  }
  .hor + h2 {
    font-size: 14px;
  }
  .hor.bf::before {
    content: "";
    width: 8px;
    height: 1px;
    position: absolute;
    top: 51%;
    right: -11px;
    background-color: rgba(209, 209, 209, 1);
  }
  .heading + img {
    position: absolute;
    width: 30px;
    top: 50%;
    left: 40%;
    transform: translate(-50%);
    z-index: -1;
}
}
</style>
