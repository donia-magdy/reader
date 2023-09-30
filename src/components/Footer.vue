<template>
<div class="footer d-flex justify-content-between">
      <div class="sec">
        <img src="../assets/footerlogo.png" alt="" />
        <div class="social">
          <fa :icon="['fab', 'youtube']" />
          <fa :icon="['fab', 'linkedin-in']" />
          <fa :icon="['fab', 'instagram']" />
          <fa :icon="['fab', 'twitter']" />
          <fa :icon="['fab', 'facebook-f']" />
        </div>
      </div>
      <div class="sec">
        <h2>من نحن</h2>
        <ul>
          <li>الرؤية والرسالة والأهداف</li>
          <li>أعضاء الإدارة التنفيذية</li>
          <li>شكل المبادرة وما تقدمه للمجتمع</li>
        </ul>
      </div>
      <div class="sec">
        <h2>الوائح والسياسات</h2>
        <ul>
          <li>اللائحة الأساسية</li>
          <li>اللائحة التنظيمية</li>
          <li>سياسة خصوصية البيانات</li>
        </ul>
      </div>
      <div class="sec">
        <h2>المركز الإعلامي</h2>
        <ul>
          <li>اللقاءات التليفزيونية</li>
          <li>الصور</li>
          <li>الأخبار</li>
        </ul>
      </div>
      <div class="copyRight">قُرَّاءْ&copy; جميع الحقوق محفوظة</div>
    </div>
</template>
<script></script>
<style>
.social svg {
  position: relative;
}
.social {
  display: flex;
  justify-content: space-evenly;
  color: rgba(74, 58, 255, 1);
  margin-top: 20px;
}
.sec h2 {
  font-weight: 700;
  font-size: 20px;
  width: fit-content;
  padding-right: 80px;
  padding-bottom: 20px;
}
.sec ul {
  list-style: none;
}
.sec ul li {
  color: rgba(111, 108, 144, 1);
  font-size: 18px;
  text-align: right;
}
.footer {
  padding: 100px;
  margin-top: 120px;
  border-top: 1px solid rgba(239, 240, 246, 1);
  border-bottom: 1px solid rgba(239, 240, 246, 1);
  position: relative;
}
.copyRight {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 100px;
  padding-right: 100px;
  color: rgba(111, 108, 144, 1);
}


@media (max-width: 1200px ){
  .sec ul li {
  font-size: 14px;
}

@media (max-width: 992px) {
  .footer {
    flex-direction: column;
    padding: 20px;
  }
  .sec {
    text-align: center;
  }
  .sec h2 {
    padding-right: 40px;
}
.sec ul li {
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    padding: 20px;
  }
  .copyRight {
    display: none;
  }
  .sec h2 {
    font-size: 14px;
    padding-right: 40px;
    padding-bottom: 5px;
  }
  .sec ul li {
    font-size: 10px;
  }
}
}

</style>