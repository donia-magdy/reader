<template>
  <div class="searchvw">
    <Swiper v-if="!isWideScreen" header="swip4" />
    <div class="container row">
      <h2 class="pb-4">نتائج البحث عن : قرائة</h2>
      <div v-if="isWideScreen" class="sideBar col-md-3">
        <h2 class="sections">الأقسام</h2>
        <ul>
          <li><div>أدب</div></li>
          <li><div>فلسفة</div></li>
          <li><div>لغة</div></li>
          <li><div>موسيقي</div></li>
          <li><div>فن</div></li>
        </ul>
      </div>
      <div class="main col-12 col-md-9">
        <div class="row align-items-start pb-5" v-for="result in searchResults">
          <div class="col-6">
            <img class="imgwid" :src="result.image" alt="" />
          </div>
          <div class="content col-6 text-end">
            <div class="hor bf">{{ result.author }}</div>
            <h2>{{ result.title }}</h2>
            <div class="text" v-if="isWideScreen">{{ result.text }}</div>
            <div class="text" v-else>{{ result.smText }}</div>
            <div class="d-flex justify-content-between foot">
              <div class="time">{{ result.time }}</div>
              <div :style="{ color: result.color }">{{ result.type }}</div>
            </div>
          </div>
        </div>
        <div>
    <nav class="navigate" aria-label="Page navigation example" style="box-shadow: none;">
      <ul class="pagination direction pr">
        <li class="page-item">
          <a class="page-link" href="#" @click="previousPage">السابق</a>
        </li>
        <li v-for="page in displayedPages" :key="page" class="page-item">
          <a v-if="page === currentPage" class="page-link active" href="#">{{ page }}</a>
          <a v-else-if="page === '...'" class="page-link" href="#">{{ page }}</a>
          <a v-else class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click="nextPage">التالى</a>
        </li>
      </ul>
    </nav>
  </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Swiper from "@/components/Swiper.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "SearchView",
  components: {
    Footer,Swiper
  },
  data() {
    return {
      searchResults: [
        {
          author: "كتب بواسطة : أحمد السيد",
          title: "فوائد القراءة اليومية",
          smText: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
          text: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
          image: require("../assets/search1.png"),
          time: "2 فبراير. 5 دقائق قراءة",
          type: "أدب",
          color: "rgba(81, 101, 253, 1)",
        },
        {
          author: "كتب بواسطة : أحمد السيد",
          title: "فوائد القراءة اليومية",
          smText: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
          text: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
          image: require("../assets/search2.png"),
          time: "2 فبراير. 5 دقائق قراءة",
          type: "فن",
          color: "rgba(238, 214, 0, 1)",
        },
        {
          author: "كتب بواسطة : أحمد السيد",
          title: "فوائد القراءة اليومية",
          smText: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
          text: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
          image: require("../assets/search3.png"),
          time: "2 فبراير. 5 دقائق قراءة",
          type: "فلسفة",
          color: "rgba(237, 2, 135, 1)",
        },
        {
          author: "كتب بواسطة : أحمد السيد",
          title: "فوائد القراءة اليومية",
          smText: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
          text: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
          image: require("../assets/search4.png"),
          time: "2 فبراير. 5 دقائق قراءة",
          type: "أدب",
          color: "rgba(81, 101, 253, 1)",
        },
      ],
      screenWidth: window.innerWidth,
      currentPage: 1,
      totalPages:10,
    };
  },
  computed: {
    isWideScreen() {
      return this.screenWidth >= 768; 
    },
    displayedPages() {
      const range = 1; // Number of pages to show before and after the current page
      const pages = [];

      if (this.totalPages <= range * 2 + 1) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else if (this.currentPage <= range + 1) {
        for (let i = 1; i <= range * 2 + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - range) {
        pages.push(1);
        pages.push('...');
        for (let i = this.totalPages - range * 2; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (
          let i = this.currentPage - range;
          i <= this.currentPage + range;
          i++
        ) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages);
      }

      return pages;
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
    changePage(page) {
      if (page === '...') return;
      this.currentPage = page;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>
<style>
.searchvw {
  padding-top: 120px;
  padding-bottom: 40px;
}
.sideBar {
  position: relative;
}
.sideBar ul {
  padding-top: 20px;
  list-style: none;
  text-align: right;
}
.sideBar ul li {
  padding-bottom: 10px;
}
.sideBar ul li div {
  display: inline-block;
  cursor: default;
  transition: 0.3s;
}
.sideBar ul li div:hover {
  color: rgba(254, 206, 47, 1);
}
.sideBar::after {
  content: "";
  position: absolute;
  height: 365px;
  width: 1px;
  top: 0;
  left: 15%;
  background-color: rgba(0, 0, 0, 0.15);
}
.sections {
  position: relative;
}
.sections::before {
  content: "";
  position: absolute;
  bottom: 0;
  background-color: rgba(254, 206, 47, 1);
  width: 61px;
  height: 1px;
  right: 22%;
}
.main .text {
  font-size: 16px;
}
.search .hor {
  padding: 0;
  padding-bottom: 13px;
}
.search .hor.bf::before {
  width: 15px;
  top: 35%;
  right: -18px;
}
.foot {
  padding-top: 1.5rem;
}
.direction {
  flex-direction: row-reverse;
}
.pr li {
  padding-right: 15px;
}
@media (max-width: 992px) {
  .main .text {
    font-size: 10px;
  }
  .main h2 {
    font-size: 14px;
  }
  .main .hor,
  .main .time {
    font-size: 8px;
  }
  .main .time + div {
    font-size: 8px;
  }
  .main .imgwid {
    height: 105px;
  }
  .foot {
    padding: 0;
  }
  .pr li {
    padding: 0;
  }
  .navigate{
    padding: 0;
  }
  .page-item a{
    padding: 8px;
  }
}

</style>
