import { useState, useEffect } from 'react';
import Link from '../../utils/ActiveLink';
import Logo from './Logo';

export const navItems = [
  {
    link: 'Home',
    href: '/',
  },
  {
    link: 'About Us',
    href: '/about-us',
  },
  {
    link: 'Services',
    href: '/services',
    subLinks: [
      { link: 'SEO', href: 'services/seo' },
      { link: 'Google Ads', href: 'services/google-ads' },
      { link: 'Content Writing', href: 'services/content-writing' },
      {
        link: 'Social Media Marketing',
        href: 'services/social-media-marketing',
      },
      {
        link: 'E-Commerce Account Management',
        href: 'services/e-commerce-account-management',
      },
      { link: 'Email Marketing', href: 'services/email-marketing' },
      { link: 'Website Development', href: 'services/website-development' },
    ],
  },
  {
    link: 'Blog',
    href: '/blog',
  },
  {
    link: 'Client Result',
    href: '/client-result',
  },
  {
    link: 'Contact Us',
    href: '/contact-us',
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <div id="navbar" className="navbar-area navbar-color-white">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <Logo />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {navItems.map(({ link, href, subLinks }) => (
                    <li key={link} className="nav-item">
                      <Link href={`${href}`} activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          {link}{' '}
                          {subLinks && <i className="bx bx-chevron-down"></i>}
                        </a>
                      </Link>

                      {subLinks && (
                        <ul className="dropdown-menu">
                          {subLinks.map(({ link, href }) => (
                            <li key={link} className="nav-item">
                              <Link href={`/${href}`} activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  {link}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
