import s from './Footer.module.scss';
import {
  FaLinkedinIn,
  FaGithub,
  FaMedium,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Matthew Mrakovcic</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} M.M.</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://www.linkedin.com/in/matthew-mrakovcic/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MattMrak"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://matthewmrakovcic.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaMedium />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
