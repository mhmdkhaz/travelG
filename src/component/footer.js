import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <footer style={{ color: "#1a1f71", direction: "rtl" }}>
      <div className="container px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center gap-10 py-16 ">
          {/* 1 */}
          <div className="flex flex-row lg:flex-col items-center justify-center gap-4">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/image/footer/logo.png`}
                className="relative w-auto h-10"
              />
            </div>
            <div className="mt-0 lg:mt-8">
              <img
                src={`${process.env.PUBLIC_URL}/image/footer/paymentMethods.png`}
                className="relative w-full h-auto"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="flex justify-center">
            <div class="">
              <p class="text-2xl">فلاي أكيد</p>
              <p class="my-2 text-lg cursor-pointer hover:opacity-70">من نحن</p>
              <p class="my-2 text-lg cursor-pointer hover:opacity-70">
                فلاي أكيد أعمال
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex justify-center">
            <div class="">
              <p class="text-2xl">الدعم</p>
              <p class="my-2 text-lg cursor-pointer hover:opacity-70">
                تواصل معنا
              </p>
              <p class="my-2 text-lg cursor-pointer hover:opacity-70">
                الأسئلة الشائعة
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="flex justify-center">
            <div class="">
              <p class="text-2xl">الأمور القانونية</p>
              <p class="my-2 text-lg cursor-pointer hover:opacity-70">
                الشروط والأحكام
              </p>
              <p class="my-2 text-lg cursor-pointer hover:opacity-70">
                شروط الخصوصية
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="flex justify-center">
            <div class="">
              <p class="text-2xl">روابط التحميل</p>
              <img
                src={`${process.env.PUBLIC_URL}/image/reservation/google_play.webp`}
                className="w-full mt-2 h-16"
              />
              <img
                src={`${process.env.PUBLIC_URL}/image/reservation/apple_store.webp`}
                className="w-full my-1 h-16"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div class="flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-0  items-center ">
          <p class="flex gap-2">
            <span>اتصل بنا</span> <span>920000091</span>
          </p>
          <p>جميع الحقوق محفوظة لموقع وتطبيق فلاي أكيد © 2023.</p>
          <div
            className="icon flex gap-12 "
            style={{ color: "#1a1f71", opacity: 0.4 }}
          >
            <span className="text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="text-2xl">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="text-2xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
