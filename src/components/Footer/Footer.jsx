import './Footer.css'
import twitterPath from '../../assets/Twitter-Icon.svg'
import facebookPath from '../../assets/Facebook-Icon.svg'
import instagramPath from '../../assets/Instagram-Icon.svg'
import githubPath from '../../assets/GitHub-Icon.svg'
export default function Footer(){
    return (
        <>
            <div className="links">
                <a href=""><img src= {twitterPath} alt="" /></a>
                <a href=""><img src={facebookPath} alt="" /></a>
                <a href=""><img src= {instagramPath}alt="" /></a>
                <a href=""><img src= {githubPath} alt="" /></a>
            </div>
        </>
    )
}