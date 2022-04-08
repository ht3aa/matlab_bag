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
      <iframe src="http://www.youtube.com/embed/W7qWa52k-nE"
      width="350" height="315" frameBorder="0" allowFullScreen></iframe>
      <embed src={file} min-width="350" height="600"/>
    </div>
  )
}