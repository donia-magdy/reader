<template>
  <div class="about">
    <div class="container">
      <div class="aboutPart1">
        <div class="p1box row">
          <div class="head col-12 col-md-6">
            <h2 class="first">لمحة عن</h2>
            <div class="paint">
            <h2 class="heading special">قُرَّاءْ</h2>
            <img src="../assets/line.png" alt=""/></div>
          </div>
          <div class="col-12 col-md-6">
            <img
              width="140"
              src="../assets/footerlogo.png"
              alt=""
              style="margin: 20px"
            />
            <div class="context">
              تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة
              بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم حديثاً للجنة
              تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: - التصميم
              - التسويق - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه
              يأخذ تدريبات أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام
              الخاصة بهذا القسم، وهكذا في باقي اللجان.
            </div>
          </div>
        </div>
        <img src="../assets/Rectangle647.png" alt="" />
        <div class="p2box row">
          <div class="col-12 col-md-6">
            <h4>اهدافنا</h4>
            <ul>
              <li>
                تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.
              </li>
              <li>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</li>
              <li>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع.</li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <h4>رؤيتنا</h4>
            <p>
              نطمح إلى تشجيع ثقافة القراءة وإثراء المعرفة في المجتمع العربي.
              نسعى لأن نصبح المصدر الرئيسي والموجه لكل محبي القراءة في العالم
              العربي، ونسهم في بناء جيل قارئ مثقف ومبدع.
            </p>
          </div>
        </div>
      </div>
      <div class="aboutPart2">
        <div>
            <h2 class="first">شركاء</h2>
            <div class="paint">
            <h2 class="heading">النجاح</h2>
            <img src="../assets/line.png" alt="" /></div>
          </div>
          <div class="success d-flex justify-content-between p-4">
            <img v-for="image in images" :src="image.state" @mouseover="changeImage(image)" @mouseleave="resetImage(image)" alt="" >
            
          </div>
      </div>
      <div class="aboutPart3">
        <div>
            <h2 class="first">فريق</h2>
            <div class="paint">
            <h2 class="heading">العمل</h2>
            <img src="../assets/line.png" alt="" /></div>
          </div>
          <Swiper header="swip3" />

      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue"
import Swiper from "@/components/Swiper.vue";
import "swiper/swiper-bundle.css";
export default {
  name: "AboutView",
  components: {
    Swiper,
    Footer,
  },
  data(){
    return{
      images:[{
          src1:require("../assets/alexuni1.png"),
          src2:require("../assets/alexuni2.png"),
          state:require("../assets/alexuni1.png")
        },
        
        {
          src1:require("../assets/madarg1.png"),
          src2:require("../assets/madarg2.png"),
          state:require("../assets/madarg1.png")
        },
        {
          src1:require("../assets/meza1.png"),
          src2:require("../assets/meza2.png"),
          state:require("../assets/meza1.png")
        },
       
         {
          src1:require("../assets/arabesk1.png"),
          src2:require("../assets/arabesk2.png"),
          state:require("../assets/arabesk1.png")
        },
       
      ]
    }
  },
  methods: {
    resetImage(event) {
      event.state=event.src1
    },
    changeImage(event){
      event.state=event.src2
    }
  },
  mounted(){
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
  }
};
</script>
<style>
.about {
  padding-bottom: 40px;
}
.aboutPart1 {
  margin-top: 100px;
  margin-bottom: 100px;
}
.p1box {
  margin-top: 50px;
}
.head {
  text-align: end;
  line-height: 15;
}
.head h2 {
  font-size: 128px;
  font-weight: 400;
}
.context {
  font-size: 20px;
  color: rgba(56, 56, 56, 0.7);
  text-align: right;
}
@media (max-width: 992px) {
  .head {
    text-align: center;
    line-height: normal;
  }
  .head h2 {
    font-size: 60px;
  }
  .context {
    font-size: 14px;
  }
  .success img{
    height: 38px;
  }
}
.aboutPart1 > img {
  border-radius: 5px;
  width: 100%;
  padding-top: 20px;
}
.aboutPart2 {
  padding-bottom: 40px;
}
.p2box {
  text-align: right;
  margin-top: 40px;
  margin-bottom: 40px;
  line-height: 1.6;
}
.p2box h4{
  margin-bottom: 20px;
  position: relative;
}
.p2box h4::before{
  content: "";
  position: absolute;
  width: 50px;
  height: 1px;
  background-color: rgba(254, 206, 47, 1);
  bottom: 0;
  bottom: -7px;
}
.p2box p{
  color: rgba(56, 56, 56, 0.7);
}
.p2box ul {
  list-style: none;
  padding: 0;
}
.p2box ul li {
  padding: 0;
  color: rgba(56, 56, 56, 0.7);
  font-size: unset;
}
.success{
  background-color: rgba(217, 217, 217, 0.12);
  margin-top: 40px;
}
@media (max-width: 992px) {
  .p2box ul li {
  font-size: 14px;
}
.special+img{
  top: 60%;
}
}

</style>
