import s from './IntroSection.module.scss';
import {
  FaLinkedinIn,
  FaGithub,
  FaMedium,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I fell in love with programming and I have at least
              learnt something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}>
                  {' '}
                  Web Technologies and Products
                </b>
              </i>
            </p>

            <p>
              A passionate Full Stack Software Developer 🚀 <br />I
              have an experience of building{' '}
              <i>
                <b className={s.purple}>Web and Mobile</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript, Reactjs, Nodejs, React Native
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src="https://i.imgur.com/M9exxLz.png" width="400px" height="400px"/>
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/matthew-mrakovcic/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://github.com/MattMrak"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://matthewmrakovcic.medium.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaMedium />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
