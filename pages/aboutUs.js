import aboutUsStyles from "../styles/AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {

  return (
    <>
        <div className={aboutUsStyles.container}>
            <Image src="/personaImg.png" width="400" height="400" alt="personal Img"/>
            <div className={aboutUsStyles.content}>
              <h1>شرح عن الموقع</h1>
              <p>
                  ساتحدث في مشروعي عن ما هو مرض فايروس كورونا وما هي الاعراض التي ستضهر على
                  المصاب والعلاج وطريقة الوقاية . والجزء الاهم هو ما هي انواع اللقاحات المستخدمه والمتاحه
                  في كل محافظات العراق ومنها بغداد مع اظهار نسبة المصابين وحالات الشفاء والوفيات
                  وطريقة الحجز لتلقي اللقاح.
              </p>
              <div className="contact">
                  <a href="https://www.facebook.com/beshooo99" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://instagram.com/1bcv_" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://t.me/Br_99" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
              </div>
            </div>
        </div>
        <footer></footer>
    </>
  )
}