import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Matthew Mrakovcic </span>
        from <span className={s.purple}> Long Island, NY.</span>
        <br />
        Skilled Full Stack Software Developer.
        <br /> Completed Flatiron School's Software Engineering Bootcamp
        <br />
        in August 2021.
        <br />
        <br />
        Apart from coding, here are some other activities that I love!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Traveling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Hiking
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Sports
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "The significant problems we face cannot be solved by the same level of thinking that created them."{' '} - Albert Einstein
      </p>
    </div>
  );
};

export default AboutTextCard;
