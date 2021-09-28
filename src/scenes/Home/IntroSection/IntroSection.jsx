import s from './IntroSection.module.scss';
import {
  FaLinkedinIn,
  FaGithub,
  FaMedium,
} from 'react-icons/fa';

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
              A passionate Full Stack Software Developer with backgrounds in accounting and operations management.
              Experienced with JavaScript, React, Redux, SQL, Ruby, Rails, etc.
              Possess strong skills in organization and problem-solving that help finance-driven companies more efficiently complete tasks.
            </p>
          </div>
        </div>
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
