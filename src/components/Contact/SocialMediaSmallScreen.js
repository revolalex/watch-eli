import { Component } from "react";
import './SocialMedia.css'

class SocialMediaSmallScreen extends Component {
    state = {}
    render() {
        return (
            <div className="mobile-social-media">
                <div className="social-media-div">
                    <ul className="social-media-ul">
                        <li className="social-media-li">
                            <a className="social-media-a instagram-a" href="https://www.instagram.com/">
                                <i className="fab fa-instagram">
                                </i>
                            </a>
                        </li>
                        <li className="social-media-li">
                            <a className="social-media-a twitter-a" href="https://twitter.com/">
                                <i className="fab fa-twitter">
                                </i>
                            </a>
                        </li>

                    </ul>

                </div>
                <div className="social-media-div">
                    <ul className="social-media-ul">
                        <li className="social-media-li">
                            <a className="social-media-a youtube-a" href="https://youtube.com/">
                                <i className="fab fa-youtube">
                                </i>
                            </a>
                        </li>
                        <li className="social-media-li">
                            <a className="social-media-a facebook-a" href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f">
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default SocialMediaSmallScreen;