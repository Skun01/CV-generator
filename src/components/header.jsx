import resumeIcon from '../assets/resume.png';
import githubIcon from '../assets/github.svg';
export default function Header(){
  return(
    <div className="header">
      <div>
        <img src={resumeIcon} alt="resume" />
        <p className="header-title">CV BUILDER</p>
      </div>
      <div>
        <p className="developer-name">made by <a href="" className="bigger">truong</a></p>
        <a href="https://github.com/Skun01" target="_blank"><img src={githubIcon} alt="github" className="bigger"/></a>
      </div>
    </div>
  )
}