import aboutUsStyles from "../styles/AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {

  return (
    <>
        <div className={aboutUsStyles.container}>
            <Image src="/personaImg.png" width="400" height="400" alt="personal Img"/>
            <div className={aboutUsStyles.content}>
              <h1>من نحن</h1>
              <p>أنا الطالب علي فالح خليفة أدرس في جامعة الأمام الكاظم (عليه السلام) قسم هندسة تقنيات الحاسوب. هذا الموقع يهدف الى توفير البيئة التعليمية لبرنامج الماتلاب لتجعلك قادر على فهم و تعلم الماتلاب بسهولة و بسرعة عن طريق توفير ملفات و فيديوات يتم فيها شرح اساسيات و مبادئ تعلم برنامج الماتلاب. تم الأشراف من قبل أ.م.د مؤيد حنون سلمان</p>
              <div>
                  <a href="https://instagram.com/ali30_f" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://t.me/alif1987" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
              </div>
            </div>
        </div>
        <footer></footer>
    </>
  )
}