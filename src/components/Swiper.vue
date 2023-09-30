<template>
  <swiper
    :slidesPerView="1"
    :centeredSlides="false"
    :slidesPerGroupSkip="1"
    :grabCursor="true"
    :keyboard="{
      enabled: true,
    }"
    :breakpoints="{
      '769': {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }"
    :scrollbar="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-if="header == 'swip1'" v-for="section in sections">
      <div class="contain">
        <div class="overlay"></div>
        <img :src="section.image" />
        <div class="title">{{ section.title }}</div>
      </div>
    </swiper-slide>

    <swiper-slide v-if="header == 'swip2'" v-for="section in MostRead"
      ><div class="card">
        <img :src="section.image" />
        <div class="d-flex justify-content-between cap">
          <div>{{ section.time }}</div>
          <div>{{ section.author }}</div>
        </div>
        <h6>{{ section.title }}</h6>
      </div>
    </swiper-slide>
  </swiper>
  <swiper
    :slidesPerView="1"
    :centeredSlides="false"
    :slidesPerGroupSkip="1"
    :grabCursor="true"
    :keyboard="{
      enabled: true,
    }"
    :breakpoints="{
      '769': {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    }"
    :scrollbar="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper c"
    ><swiper-slide v-if="header == 'swip3'" v-for="employee in Employees"
      ><div class="card employ">
        <img :src="employee.image" />
        <h4>{{ employee.name }}</h4>
        <p>{{ employee.position }}</p>
      </div>
    </swiper-slide>
  </swiper>
  <swiper
    :slidesPerView="3"
    :centeredSlides="false"
    :slidesPerGroupSkip="1"
    :grabCursor="true"
    :keyboard="{
      enabled: true,
    }"
    :scrollbar="false"
    :navigation="true"
    :modules="modules"
    class="mySwiper s"
    ><swiper-slide v-if="header == 'swip4'" v-for="(type, index) in types" :key="index"
      ><div @click="active(index)" class="card" ref="xxx">
        <h4 class="mt-2">{{ type.name }}</h4>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/style.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default {
  props: ["header"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Scrollbar, Navigation, Pagination],
    };
  },
  data() {
    return {
      sections: [
        {
          image: require("../assets/Rectangle10.png"),
          title: "تاريخ",
        },
        {
          image: require("../assets/Rectangle9.png"),
          title: "أدب",
        },
        {
          image: require("../assets/Rectangle8.png"),
          title: "شعر",
        },
        {
          image: require("../assets/Rectangle7.png"),
          title: "فنون",
        },
        {
          image: require("../assets/Rectangle6.png"),
          title: "فلسفة",
        },
      ],
      MostRead: [
        {
          title: "اليوم العالمي للغة العربية",
          time: "2 فبراير. 5 دقائق قراءة",
          author: "كتب بواسطة : أحمد السيد",
          image: require("../assets/Rectangle13.png"),
        },
        {
          title: "كتب تعريفك بتراث وتقاليد الشعوب",
          time: "2 فبراير. 5 دقائق قراءة",
          author: "كتب بواسطة : أحمد السيد",
          image: require("../assets/Rectangle14.png"),
        },
        {
          title: "جولة في عالم الأدب العربي",
          time: "2 فبراير. 5 دقائق قراءة",
          author: "كتب بواسطة : أحمد السيد",
          image: require("../assets/Rectangle15.png"),
        },
        {
          title: "اليوم العالمي للغة العربية",
          time: "2 فبراير. 5 دقائق قراءة",
          author: "كتب بواسطة : أحمد السيد",
          image: require("../assets/Rectangle13.png"),
        },
        {
          title: "كتب تعريفك بتراث وتقاليد الشعوب",
          time: "2 فبراير. 5 دقائق قراءة",
          author: "كتب بواسطة : أحمد السيد",
          image: require("../assets/Rectangle14.png"),
        },
      ],
      Employees: [
        {
          name: "م. محمد علاء",
          image: require("../assets/employee1.png"),
          position: "رئيس المبادرة لسنة 2023",
        },
        {
          name: "م. خالد حسن",
          image: require("../assets/employee2.png"),
          position: "منسق بلجنة الإعلام لسنة 2023",
        },
        {
          name: "أ. سيف الدين سامر",
          image: require("../assets/employee3.png"),
          position: "مستشار لجنة الإعلام لسنة 2023",
        },
        {
          name: "م. يوسف التركي",
          image: require("../assets/employee4.png"),
          position: "رئيس التقييم بلجنة التقييم والتطوير لسنة 2023",
        },
        {
          name: "م. محمد علاء",
          image: require("../assets/employee1.png"),
          position: "رئيس المبادرة لسنة 2023",
        },
      ],
      types: [
        {
          name: "الكل",
        },
        {
          name: "أدب",
        },
        {
          name: "فلسفة",
        },
        {
          name: "لغة",
        },
        {
          name: "موسيقي",
        },
        {
          name: "فن",
        },
      ],
      activeIndex: null
    };
  },
  methods: {
     active(index) {
      if (this.activeIndex !== null) {
        this.$refs.xxx[this.activeIndex].classList.remove("active");
      }
      this.$refs.xxx[index].classList.add("active");
      this.activeIndex = index;
    },
    },

};
</script>
<style>
.contain {
  position: relative;
  margin: 10px;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 5px;
}
.contain img {
  border-radius: 5px;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 20px;
}
.employ {
  border: none !important;
  text-align: right;
  padding-top: 10px;
}
.employ h4 {
  padding-top: 10px;
}
.employ p {
  color: rgba(56, 56, 56, 0.7);
}
.swiper-button-prev,
.swiper-button-next {
  color: white !important;
}
.s .swiper-button-prev,
.s .swiper-button-next {
  display: none;
}
.s .card {
  border: none;
  background-color: rgba(238, 238, 238, 1);
}
.card.active {
  background-color: white;
  color: rgba(254, 206, 47, 1);
  border: 1px solid rgba(254, 206, 47, 1);
}
</style>
