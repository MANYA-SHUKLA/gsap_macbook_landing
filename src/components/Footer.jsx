import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>Contact me for projects or collaborations: <a href="mailto:shuklamanya99@gmail.com">shuklamanya99@gmail.com</a> or WhatsApp <a href="https://wa.me/918005586588">+91 8005586588</a>.</p>
                <img src="/logo.svg" alt ="Apple logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
                <p className="made-with-love">Made with ❤️ by Manya Shukla 2026</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
