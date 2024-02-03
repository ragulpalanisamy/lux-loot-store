import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';

interface SocialLink {
  id: number;
  href: string;
  Icon: React.ElementType;
}

export const SocialLinks: SocialLink[] = [
  {
    id: 1,
    href: 'https://twitter.com',
    Icon: BsTwitter,
  },
  {
    id: 2,
    href: 'https://facebook.com',
    Icon: FaFacebookF,
  },
  {
    id: 3,
    href: 'https://instagram.com',
    Icon: FaInstagram,
  },
  {
    id: 4,
    href: 'https://linkedin.com',
    Icon: FaLinkedin,
  },
];
