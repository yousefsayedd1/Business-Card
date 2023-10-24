import  personalImage  from '../../assets/personal-image.png'
import './Header.css';
export default function App(){
  return (
    <>
      <div className="personal-image">
        <img src={personalImage} alt="yousef image" />
      </div>
      <div className="personal-info">
        <h1>Brian K. Booth</h1>
        <p>Frontend Developer</p>
        <small>Cairo, Egypt</small>
      </div>
      <div className="contact-btns">
        <a className="email"  href="mailto:yousefsayedd1@gmail.com" ><i className="fa-solid fa-envelope"></i>Email</a>
        <a  href='https://www.linkedin.com/in/yousefsayedd1/' className="linkedin" rel='noreferrer' target='_blank' ><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
      </div>

    </>
  );
}

