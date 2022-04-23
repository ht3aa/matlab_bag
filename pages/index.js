import homeStyles from '../styles/Home.module.css'
import Image from "next/image";
import { db }  from "../data/db";
import Link from 'next/link';

export default function Home() {
  const parts = Object.keys(db);

  return (
    <>
      <header className={homeStyles.hero}>
        <div className={homeStyles.overlayer}>
          <div className={homeStyles.matlabLogo}>
            <Image src="/matlab_logo.png" width={450} height={310} alt="matlab logo"/>
          </div>
          <div className={homeStyles.mainContent}>
            <h1>
              ستجد هنا جميع دروس 
              الماتلاب مصورة و مكتوبة لتتعلم خطوة بخطوة
            </h1>
            <h4>
              تم الأعداد من قبل الطالب:<br />علي فالح خليفة<br />بأشراف:<br />أ. م. د. مؤيد حنون سلمان
            </h4>
            <a href="#files"><button><h5>أبدأ الأن</h5></button></a>
          </div>
        </div>
        <i className="fa-solid fa-arrow-down"></i>
      </header>
      <main id="files" className={homeStyles.mainContainer}>
        {parts.map((part, index) => {
          return (
            <div key={index}>
              <div className={homeStyles.title}><h3>{ part }</h3></div>
              <div className={homeStyles.cardContainer}>
                {db[part].map(card => {
                  return (
                    <div key={card.id} className={homeStyles.card}>
                      <div className={homeStyles.cardImg}>
                        <div className={homeStyles.cardOverlay}><h5>{ card.lesson_number }</h5></div>
                      </div>
                      <div className={homeStyles.cardContent}>
                        <h4>{ card.lesson_name }</h4>
                        <p>{ card.description }</p>
                        <Link href={`/lecture?file=/files/${card.file_path}.pdf&video_link=${card.video_link}`} passHref ><button>أبدأ الدرس</button></Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </main>
      <footer></footer>
    </>
  )
}
