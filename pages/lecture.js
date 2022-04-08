import { useRouter } from "next/router";
import lectureStyles from "../styles/Lecture.module.css";

export default function Lecture() {
  const route = useRouter()
  const { file, video_link } = route.query;

  return (
    <div className={lectureStyles.container}>
      <button onClick={() => route.push('/')} className="backButton">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <iframe width="350" height="315" src="https://www.youtube.com/embed/m4-HM_sCvtQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <object data={file} type="application/pdf" width="100%" height="600px">
        <h5>لا يحتوي متصفح الويب الخاص بك على قابلية فتح ملف بتنسيق بي دي اف بدلا من ذلك يمكنك <a href={file} donwload>النقر هنا لتحميل المحاضرة</a></h5>
      </object>
    </div>
  )
}