import Link from 'next/link';
import styled from 'styled-components';
import { SideSheet, Paragraph, Button } from 'evergreen-ui';
import { BsDiscord, BsTwitter, BsInstagram } from 'react-icons/bs';
import media from '../styles/media';
import { useCallback, useState, useRef, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';

const MediumWidth = styled.div`
  display: flex;

  ${media.custom(1200)} {
    display: none;
  }
`;

const MInMediumWidth = styled.div`
  display: flex;
  ${media.minCustom(1201)} {
    display: none;
  }
`;

const SideSheetHeader = styled.div`
  display: flex;
  width: 100%;
  ${media.custom(576)} {
    width: 50%;
  }
  font-size: 1rem;

  text-transform: uppercase;
`;

const Block = styled.div`
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 0 8px rgba(0, 0, 0, 0.08);
  .tab-wrapper {
    margin-top: -2rem;
  }
`;

const EN = ['HOME', 'NFT', 'ROADMAP', 'TEAM ', 'DOCS'];
const KR = ['홈', '옌에프티', '로드맵', '팀', '문서'];

function Header() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="header__container">
        <div className="header__wrapper container-fluid">
          <div className="header__inner">
            <Link href="/">
              <a className="logo header__logo">
                <img alt="" src="assets/img/logo.png" />
              </a>
            </Link>
            {isShown ? (
              <button
                style={{ marginRight: '2rem', color: '#fff' }}
                className="header__menu-button"
                type="button"
              >
                <MediumWidth>
                  <div style={{ marginLeft: '2rem' }}>
                    <BsDiscord size="24" style={{ color: 'black' }} />
                  </div>
                  <div style={{ marginLeft: '2rem', color: 'black' }}>
                    <BsTwitter size="24" />
                  </div>
                  <div>
                    <BsInstagram
                      size="24"
                      style={{ marginLeft: '2rem', color: 'black' }}
                    />
                  </div>
                </MediumWidth>

                <>
                  <SideSheet
                    isShown={isShown}
                    onCloseComplete={() => setIsShown(false)}
                    preventBodyScrolling={true}
                  >
                    <div
                      style={{
                        display: 'flex',
                        padding: '4rem',
                        flexDirection: 'column',
                        height: '80%',
                      }}
                    >
                      <SideSheetHeader>
                        <Paragraph style={{ marginRight: '1.4rem' }}>
                          EN
                        </Paragraph>
                        <Paragraph>KR</Paragraph>
                        <Paragraph style={{ marginLeft: 'auto' }}>
                          <GrClose onClick={() => setIsShown(false)} />
                        </Paragraph>
                      </SideSheetHeader>
                      <div
                        style={{
                          marginTop: '3rem',
                        }}
                      >
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                            color: 'black',
                          }}
                        >
                          HOME
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                            color: '#999',
                          }}
                        >
                          NFT
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                          }}
                        >
                          ROADMAP
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                          }}
                        >
                          TEAM
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1ren',
                            lineHeight: 1.1,
                          }}
                        >
                          DOCS
                        </Paragraph>
                      </div>
                      <div style={{ display: 'flex', marginTop: 'auto' }}>
                        <BsTwitter
                          size="24"
                          style={{
                            marginRight: '1rem',
                          }}
                        />
                        <BsDiscord
                          size="24"
                          style={{
                            marginRight: '1rem',
                          }}
                        />
                        <BsInstagram
                          size="24"
                          style={{
                            marginRight: '1rem',
                          }}
                        />
                      </div>
                    </div>
                  </SideSheet>

                  <MInMediumWidth>
                    <div
                      className="header__menu-button-inner"
                      style={{ color: 'black' }}
                    />
                  </MInMediumWidth>
                </>
              </button>
            ) : (
              <button
                style={{ marginRight: '2rem' }}
                className="header__menu-button"
                type="button"
                onClick={() => {
                  setIsShown(true);
                }}
              >
                <MediumWidth>
                  <div style={{ marginLeft: '2rem' }}>
                    <BsDiscord size="24" style={{ color: '#fff' }} />
                  </div>
                  <div style={{ marginLeft: '2rem', color: '#fff' }}>
                    <BsTwitter size="24" />
                  </div>
                  <div>
                    <BsInstagram
                      size="24"
                      style={{ marginLeft: '2rem', color: '#fff' }}
                    />
                  </div>
                </MediumWidth>

                <>
                  <SideSheet
                    isShown={isShown}
                    onCloseComplete={() => setIsShown(false)}
                    preventBodyScrolling={true}
                  >
                    <div
                      style={{
                        display: 'flex',
                        padding: '4rem',
                        flexDirection: 'column',
                        height: '80%',
                      }}
                    >
                      <SideSheetHeader>
                        <Paragraph style={{ marginRight: '1.4rem' }}>
                          KR
                        </Paragraph>
                        <Paragraph>EN</Paragraph>
                        <Paragraph style={{ marginLeft: 'auto' }}>
                          <GrClose onClick={() => setIsShown(false)} />
                        </Paragraph>
                      </SideSheetHeader>
                      <div
                        style={{
                          marginTop: '3rem',
                        }}
                      >
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                            color: 'black',
                          }}
                        >
                          HOME
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                            color: '#999',
                          }}
                        >
                          NFT
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                          }}
                        >
                          ROADMAP
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                          }}
                        >
                          TEAM
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: '1.875rem',
                            fontWeight: 500,
                            marginBottom: '1ren',
                            lineHeight: 1.1,
                          }}
                        >
                          DOCS
                        </Paragraph>
                      </div>
                      <div style={{ display: 'flex', marginTop: 'auto' }}>
                        <BsTwitter
                          size="24"
                          style={{
                            marginRight: '1rem',
                          }}
                        />
                        <BsDiscord
                          size="24"
                          style={{
                            marginRight: '1rem',
                          }}
                        />
                        <BsInstagram
                          size="24"
                          style={{
                            marginRight: '1rem',
                          }}
                        />
                      </div>
                    </div>
                  </SideSheet>

                  <MInMediumWidth>
                    <div className="header__menu-button-inner" style={{}} />
                  </MInMediumWidth>
                </>
              </button>
            )}
          </div>
        </div>
        <div className="header-fixed">
          <div className="header-fixed__bottom container">
            <ul className="top-menu header-fixed__menu">
              <li className="top-menu__menu-item">
                <div className="dropdown">
                  <Link href="/">
                    <a className="dropdown__trigger top-menu__menu-link">
                      Home
                    </a>
                  </Link>
                  <div className="dropdown__menu">
                    <div className="dropdown__column">
                      <div className="dropdown__title">Light</div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="index.html">
                          Default
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-parallax-piling.html"
                        >
                          Parallax Piling
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-zoom-parallax.html"
                        >
                          Zoom Parallax
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-3d-panorama.html"
                        >
                          3D Panorama
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link dropdown__link dropdown__link_active"
                          href="home-studio.html"
                        >
                          Studio
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="home-minimal.html">
                          Minimal
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-grid-background.html"
                        >
                          Grid Background
                        </a>
                      </div>
                    </div>
                    <div className="dropdown__column">
                      <div className="dropdown__title">Dark</div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-default-dark.html"
                        >
                          Default Dark
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-zoom-parallax-dark.html"
                        >
                          Zoom Parallax Dark
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-3d-panorama-dark.html"
                        >
                          3D Panorama Dark
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-studio-dark.html"
                        >
                          Studio Dark
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="home-minimal-dark.html"
                        >
                          Minimal Dark
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="top-menu__menu-item">
                <div className="dropdown">
                  <a className="dropdown__trigger top-menu__menu-link" href="#">
                    NFT
                  </a>
                  <div className="dropdown__menu">
                    <div className="dropdown__column">
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="work-grid.html">
                          Grid
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="work-carousel.html">
                          Carousel
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="work-listing.html">
                          Listing
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="project-detail-image.html"
                        >
                          Project Detail Image
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="project-detail-slider.html"
                        >
                          Project Detail Slider
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="project-detail-panorama.html"
                        >
                          Project Detail Panorama
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="top-menu__menu-item">
                <div className="dropdown">
                  <a className="dropdown__trigger top-menu__menu-link" href="#">
                    ROADMAP
                  </a>
                  <div className="dropdown__menu">
                    <div className="dropdown__column">
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="news-grid.html">
                          Grid
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="news-listing.html">
                          Listing
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="news-masonry.html">
                          Masonry
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="news-single-post.html"
                        >
                          Single Post
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="top-menu__menu-item">
                <div className="dropdown">
                  <a className="dropdown__trigger top-menu__menu-link" href="#">
                    TEAM
                  </a>
                  <div className="dropdown__menu">
                    <div className="dropdown__column">
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="page-about.html">
                          About
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="page-services.html">
                          Services
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="page-services-detail.html"
                        >
                          Services Detail
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="page-contact.html">
                          Contact
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="page-404.html">
                          404
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="top-menu__menu-item">
                <div className="dropdown">
                  <a className="dropdown__trigger top-menu__menu-link" href="#">
                    DOCS
                  </a>
                  <div className="dropdown__menu">
                    <div className="dropdown__column">
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="page-about.html">
                          About
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="page-services.html">
                          Services
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a
                          className="dropdown__link"
                          href="page-services-detail.html"
                        >
                          Services Detail
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="page-contact.html">
                          Contact
                        </a>
                      </div>
                      <div className="dropdown__item">
                        <a className="dropdown__link" href="page-404.html">
                          404
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header__overlay" />
      <div className="menu-panel header__menu">
        <div className="menu-panel__inner">
          <button
            className="header__menu-button header__menu-button_fixed"
            type="button"
          >
            <span className="header__menu-button-inner" />
          </button>
          <div className="menu-panel__locales">
            <div className="menu-panel__locale link link link_active">En</div>
            <div className="menu-panel__locale link">Fr</div>
            <div className="menu-panel__locale link">De</div>
          </div>
          <div className="menu-panel__menu">
            <div className="menu-panel__menu-item">
              <a
                className="menu-panel__menu-link menu-panel__menu-link menu-panel__menu-link_active"
                data-toggle="collapse"
                href="#submenu1"
              >
                Home
              </a>
              <div className="menu-panel__menu-list collapse" id="submenu1">
                <div className="menu-panel__bottom-submenu">
                  <div className="menu-panel__submenu-item">
                    <a className="menu-panel__submenu-link" href="index.html">
                      Default
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-parallax-piling.html"
                    >
                      Parallax Piling
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-zoom-parallax.html"
                    >
                      Zoom Parallax
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-3d-panorama.html"
                    >
                      3D Panorama
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link menu-panel__submenu-link menu-panel__submenu-link_active"
                      href="home-studio.html"
                    >
                      Studio
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-minimal.html"
                    >
                      Minimal
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-grid-background.html"
                    >
                      Grid Background
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-default-dark.html"
                    >
                      Default Dark
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-zoom-parallax-dark.html"
                    >
                      Zoom Parallax Dark
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-3d-panorama-dark.html"
                    >
                      3D Panorama Dark
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-studio-dark.html"
                    >
                      Studio Dark
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="home-minimal-dark.html"
                    >
                      Minimal Dark
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-panel__menu-item">
              <a
                className="menu-panel__menu-link collapsed"
                data-toggle="collapse"
                href="#submenu2"
              >
                Work
              </a>
              <div className="menu-panel__menu-list collapse" id="submenu2">
                <div className="menu-panel__bottom-submenu">
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="work-grid.html"
                    >
                      Grid
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="work-carousel.html"
                    >
                      Carousel
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="work-listing.html"
                    >
                      Listing
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="project-detail-image.html"
                    >
                      Project Detail Image
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="project-detail-slider.html"
                    >
                      Project Detail Slider
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="project-detail-panorama.html"
                    >
                      Project Detail Panorama
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-panel__menu-item">
              <a
                className="menu-panel__menu-link collapsed collapsed"
                data-toggle="collapse"
                href="#submenu3"
              >
                News
              </a>
              <div className="menu-panel__menu-list collapse" id="submenu3">
                <div className="menu-panel__bottom-submenu">
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="news-grid.html"
                    >
                      Grid
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="news-listing.html"
                    >
                      Listing
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="news-masonry.html"
                    >
                      Masonry
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="news-single-post.html"
                    >
                      Single Post
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-panel__menu-item">
              <a
                className="menu-panel__menu-link collapsed collapsed"
                data-toggle="collapse"
                href="#submenu4"
              >
                Page
              </a>
              <div className="menu-panel__menu-list collapse" id="submenu4">
                <div className="menu-panel__bottom-submenu">
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="page-about.html"
                    >
                      About
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="page-services.html"
                    >
                      Services
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="page-services-detail.html"
                    >
                      Services Detail
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="page-contact.html"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="menu-panel__submenu-item">
                    <a
                      className="menu-panel__submenu-link"
                      href="page-404.html"
                    >
                      404
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-panel__footer">
            <div className="socials menu-panel__socials">
              <a className="socials__social icofont-facebook" href="#">
                <div className="visually-hidden">facebook</div>
              </a>
              <a className="socials__social icofont-google-plus" href="#">
                <div className="visually-hidden">google plus</div>
              </a>
            </div>
            <div className="menu-panel__bottom">
              <div className="menu-panel__copyright">
                © 2019
                <strong>ARQUITO.</strong>
                All Rights Reserved.
              </div>
              <div className="menu-panel__author">
                Design by
                <a href="#">Logan Cee</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
