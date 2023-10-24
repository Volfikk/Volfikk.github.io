import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.instagram.com/tomaas.volf/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/tom%C3%A1%C5%A1-volf/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/TomaasVolf',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://medium.com/@tomas_volf',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'mailto:tomas_volf@icloud.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
