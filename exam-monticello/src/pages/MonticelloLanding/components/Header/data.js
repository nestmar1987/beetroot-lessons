import instagramIcon from '../../../../assets/icons/insta-icon.svg';
import facebookIcon from '../../../../assets/icons/facebook-icon.svg';
import twitterIcon from '../../../../assets/icons/twitter-icon.svg';

export const navigationLinks = [
  {
    label: 'About Us',
    to: 'hero',
  },
  {
    label: 'Projects',
    to: 'about',
  },
  {
    label: 'News',
    to: 'news',
  },
  {
    label: 'Gallery',
    to: 'gallery',
  },
  {
    label: 'Contacts',
    to: 'contacts',
  },

];

export const socialLinks = [
  {
    link: 'https://www.facebook.com/',
    icon: facebookIcon,
    name: "facebook",
  },
  {
    link: 'https://www.twitter.com/',
    icon: twitterIcon,
    name: "twitter",
  },
  {
    link: 'https://www.instagram.com/',
    icon: instagramIcon,
    name: "instagram",
  },
];
