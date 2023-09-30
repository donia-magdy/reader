<template>
  <div class="contact">
    <div class="container">
      <div class="contpart row">
        <div class="rightSide col-12 col-md-6">
          <div class="overlay"></div>
          <h2>تواصل معنا</h2>
          <p>
            نحن نتطلع لسماع أخباركم والاستماع إلى ما لديكم لتقولوه. لا تترددوا
            في التواصل معنا
          </p>
          <img width="410" src="../assets/footerlogo.png" alt="" />
        </div>
        <div class="leftSide col-12 col-md-6">
          <form action="" method="GET">
            <div>
              <label>الأسم</label>
              <br />
              <div>
                <input type="text" required name="user" />
              </div>
            </div>
            <br />
            <div>
              <label>البريد الألكتروني</label>
              <br />
              <div>
                <input type="email" required name="mail" />
              </div>
            </div>
            <br />
            <div>
              <label>عنوان الرسالة</label>
              <br />
              <div>
                <input type="text" required name="msgtitle" />
              </div>
            </div>
            <br />
            <label>الرسالة</label>
            <br />
            <div>
              <textarea name="subject" rows="5"></textarea>
            </div>
            <br />
            <input type="submit" value="إرسل" />
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "ContactView",
  components: {
    Footer,
  },
  mounted(){
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
  }
};
</script>
<style>
.contact {
  padding-bottom: 40px;
}
.contpart {
  padding-top: 120px;
}
.rightSide {
  position: relative;
}
.rightSide .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    238.57deg,
    rgb(254 206 47 / 12%) 28.75%,
    rgba(254, 206, 47, 0) 76.96%
  );
  filter: blur(17.5px);
  z-index: -1;
}
.rightSide h2 {
  font-weight: 400;
  font-size: 64px;
  padding-top: 25px;
}
.rightSide p {
  font-size: 24px;
  max-width: 500px;
  color: rgba(56, 56, 56, 0.74);
}
.leftSide form {
  display: block;
  text-align: right;
}
.leftSide form div {
  max-width: 552px;
}
.leftSide form input:not([type="submit"]) {
  width: 100%;
  display: block;
  height: 52px;
  background-color: rgba(246, 246, 246, 1) !important;
  border: none;
}
.leftSide form label {
  padding-bottom: 10px;
}
.leftSide form textarea {
  background-color: rgba(246, 246, 246, 1);
  border: none;
  resize: none;
  width: 100%;
}
.leftSide form input[type="submit"] {
  border: none;
  color: white;
  background-color: rgba(81, 101, 253, 1) !important;
  padding: 10px 70px !important;
  border-radius: 2px;
  margin-top: 20px;
}
@media (max-width: 992px) {
  .rightSide img {
    width: 118px;
  }
  .overlay {
    display: none;
  }
  .rightSide h2 {
    font-size: 32px;
  }
  .rightSide p {
    font-size: 14px;
  }
}
</style>
