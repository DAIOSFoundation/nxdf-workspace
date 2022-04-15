import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import cn from 'classnames';
import Script from 'next/script';

import Link from 'next/link';
import { BsDiscord, BsTwitter, BsInstagram } from 'react-icons/bs';
import styled from 'styled-components';
import media from '../styles/media';
import { SideSheet, Paragraph, Button } from 'evergreen-ui';
import { useCallback, useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';

import { GrClose } from 'react-icons/gr';
import { getScrollTop } from '../lib/getScroll';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Collapse } from 'react-collapse';
import Header from '../components/Header';

import ReactPlayer from 'react-player';
import { copyFileSync } from 'fs';
import { CSSTransition } from 'react-transition-group';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className="swiper-button-prev"
      onClick={onClick}
      style={{ ...style, top: '35%' }}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className="swiper-button-next"
      onClick={onClick}
      style={{ ...style, top: '35%' }}
    />
  );
}

function FirstSamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return <div className="swiper-button-prev" onClick={onClick} />;
}

function FirstSampleNextArrow(props) {
  const { className, style, onClick } = props;

  return <div className="swiper-button-next" onClick={onClick} />;
}

const Home: NextPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isSelect, setSelect] = useState(false);

  const [getEN, setEN] = useState([
    {
      id: 1,
      title: 'HOME',
      isClick: true,
      link: '/',
    },
    {
      id: 2,
      title: 'NFT',
      isClick: false,
      link: '/',
    },
    {
      id: 3,
      title: 'ROADMAP',
      isClick: false,
      link: '/',
    },
    {
      id: 4,
      title: 'TEAM',
      isClick: false,
      link: '/',
    },
    {
      id: 5,
      title: 'DOCS',
      isClick: false,
      link: '/',
    },
  ]);

  const [getKR, setKR] = useState([
    {
      id: 1,
      title: '홈',
      isClick: true,
      link: '/',
    },
    {
      id: 2,
      title: '엔에프티',
      isClick: false,
      link: '/',
    },
    {
      id: 3,
      title: '로드맵',
      isClick: false,
      link: '/',
    },
    {
      id: 4,
      title: '팀',
      isClick: false,
      link: '/',
    },
    {
      id: 5,
      title: '문서',
      isClick: false,
      link: '/',
    },
  ]);

  const [visible, setVisible] = useState(false);

  const blockRef = useRef<HTMLDivElement>(null);
  const [getHeight, setHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    if (!blockRef.current) return;
    setHeight(blockRef.current.clientHeight);
    setMarginTop(-1 * blockRef.current.clientHeight);
  }, []);

  const prevScrollTop = useRef(0);
  const direction = useRef<'UP' | 'DOWN'>('DOWN');
  const transitionPoint = useRef(0);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (scrollTop > 64) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const height = 10;

  const accessibilityIds = {
    checkbox: 'accessible-marker-example1',
    button: 'accessible-marker-example2',
  };

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const [isCheckboxCollapseOpen, setIsCheckboxCollapseOpen] = useState(false);
  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);
  const [isButtonCollapseOpen2, setIsButtonCollapseOpen2] = useState(false);
  const [isButtonCollapseOpen3, setIsButtonCollapseOpen3] = useState(false);
  const [isButtonCollapseOpen4, setIsButtonCollapseOpen4] = useState(false);

  const onChange = useCallback(
    ({ target: { checked } }) => setIsCheckboxCollapseOpen(checked),
    [setIsCheckboxCollapseOpen]
  );

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  );
  const onClick2 = useCallback(
    () => setIsButtonCollapseOpen2(!isButtonCollapseOpen2),
    [isButtonCollapseOpen2]
  );
  const onClick3 = useCallback(
    () => setIsButtonCollapseOpen3(!isButtonCollapseOpen3),
    [isButtonCollapseOpen3]
  );
  const onClick4 = useCallback(
    () => setIsButtonCollapseOpen4(!isButtonCollapseOpen4),
    [isButtonCollapseOpen4]
  );

  const WhichLang = isSelect ? getKR : getEN;

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const multipleSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<typeof Slider | null>(null);

  return (
    <div>
      <div className="page__inner animsition">
        <header className="header header_white header_fixed">
          <Block visible={visible}>
            <div className="header__container">
              <div className="header__wrapper container-fluid">
                <div className="header__inner">
                  <Link href="/">
                    <a className="logo header__logo">
                      <LogoImg alt="" src="assets/img/blackLogo.png" />
                    </a>
                  </Link>
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
                            <div
                              onClick={() => setSelect(false)}
                              style={{
                                marginRight: '1.4rem',
                                color: isSelect ? '' : '#f24a00',
                              }}
                            >
                              EN
                            </div>
                            <div
                              onClick={() => setSelect(true)}
                              style={{
                                color: isSelect ? '#f24a00' : '',
                              }}
                            >
                              KR
                            </div>
                            <Paragraph style={{ marginLeft: 'auto' }}>
                              <GrClose onClick={() => setIsShown(false)} />
                            </Paragraph>
                          </SideSheetHeader>
                          <div
                            style={{
                              marginTop: '3rem',
                            }}
                          >
                            {WhichLang.map((el) => (
                              <>
                                <Paragraph
                                  style={{
                                    fontSize: '1.875rem',
                                    fontWeight: 500,
                                    marginBottom: '1rem',
                                    lineHeight: 1.1,
                                    color: el.isClick ? 'black' : '#999',
                                  }}
                                >
                                  {el.title}
                                </Paragraph>
                              </>
                            ))}
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
                </div>
              </div>
              <div className="header-fixed">
                <div className="header-fixed__bottom container">
                  <ul className="top-menu header-fixed__menu">
                    <li className="top-menu__menu-item">
                      <div className="dropdown">
                        <Link href="/">
                          <TextBlack
                            className="dropdown__trigger top-menu__menu-link"
                            style={{ color: 'black' }}
                          >
                            HOME
                          </TextBlack>
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
                              <a
                                className="dropdown__link"
                                href="home-minimal.html"
                              >
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
                        <a
                          className="dropdown__trigger top-menu__menu-link"
                          href="#"
                          style={{ color: 'black' }}
                        >
                          NFT
                        </a>
                        <div className="dropdown__menu">
                          <div className="dropdown__column">
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="work-grid.html"
                              >
                                Grid
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="work-carousel.html"
                              >
                                Carousel
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="work-listing.html"
                              >
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
                        <a
                          className="dropdown__trigger top-menu__menu-link"
                          href="#"
                          style={{ color: 'black' }}
                        >
                          ROADMAP
                        </a>
                        <div className="dropdown__menu">
                          <div className="dropdown__column">
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="news-grid.html"
                              >
                                Grid
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="news-listing.html"
                              >
                                Listing
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="news-masonry.html"
                              >
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
                        <a
                          className="dropdown__trigger top-menu__menu-link"
                          href="#"
                          style={{ color: 'black' }}
                        >
                          TEAM
                        </a>
                        <div className="dropdown__menu">
                          <div className="dropdown__column">
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-about.html"
                              >
                                About
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-services.html"
                              >
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
                              <a
                                className="dropdown__link"
                                href="page-contact.html"
                              >
                                Contact
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-404.html"
                              >
                                404
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="top-menu__menu-item">
                      <div className="dropdown">
                        <a
                          className="dropdown__trigger top-menu__menu-link"
                          href="#"
                          style={{ color: 'black' }}
                        >
                          DOCS
                        </a>
                        <div className="dropdown__menu">
                          <div className="dropdown__column">
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-about.html"
                              >
                                About
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-services.html"
                              >
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
                              <a
                                className="dropdown__link"
                                href="page-contact.html"
                              >
                                Contact
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-404.html"
                              >
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
                  <div className="menu-panel__locale link link link_active">
                    En
                  </div>
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
                    <div
                      className="menu-panel__menu-list collapse"
                      id="submenu1"
                    >
                      <div className="menu-panel__bottom-submenu">
                        <div className="menu-panel__submenu-item">
                          <a
                            className="menu-panel__submenu-link"
                            href="index.html"
                          >
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
                    <div
                      className="menu-panel__menu-list collapse"
                      id="submenu2"
                    >
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
                    <div
                      className="menu-panel__menu-list collapse"
                      id="submenu3"
                    >
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
                    <div
                      className="menu-panel__menu-list collapse"
                      id="submenu4"
                    >
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
          </Block>

          <>
            <div className="header__container">
              <div className="header__wrapper container-fluid">
                <div className="header__inner">
                  <Link href="/">
                    <a className="logo header__logo">
                      <LogoImg alt="" src="assets/img/logo.png" />
                    </a>
                  </Link>
                  {isShown ? (
                    <button
                      style={{ marginRight: '2rem' }}
                      className="header__menu-button"
                      type="button"
                    >
                      <MediumWidth>
                        <IconWrapper style={{ marginLeft: '2rem' }}>
                          <BsDiscord size="24" />
                        </IconWrapper>
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
                              <div
                                onClick={() => setSelect(false)}
                                style={{
                                  marginRight: '1.4rem',
                                  color: isSelect ? '' : '#f24a00',
                                }}
                              >
                                EN
                              </div>
                              <div
                                onClick={() => setSelect(true)}
                                style={{
                                  color: isSelect ? '#f24a00' : '',
                                }}
                              >
                                KR
                              </div>
                              <Paragraph style={{ marginLeft: 'auto' }}>
                                <GrClose onClick={() => setIsShown(false)} />
                              </Paragraph>
                            </SideSheetHeader>
                            <div
                              style={{
                                marginTop: '3rem',
                              }}
                            >
                              {WhichLang.map((el) => (
                                <>
                                  <Paragraph
                                    style={{
                                      fontSize: '1.875rem',
                                      fontWeight: 500,
                                      marginBottom: '1rem',
                                      lineHeight: 1.1,
                                      color: el.isClick ? 'black' : '#999',
                                    }}
                                  >
                                    {el.title}
                                  </Paragraph>
                                </>
                              ))}
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
                            style={{ color: '#fff' }}
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
                        <IconWrapper style={{ marginLeft: '2rem' }}>
                          <BsDiscord size="24" />
                        </IconWrapper>
                        <IconWrapper style={{ marginLeft: '2rem' }}>
                          <BsTwitter size="24" />
                        </IconWrapper>
                        <IconWrapper>
                          <BsInstagram
                            size="24"
                            style={{ marginLeft: '2rem' }}
                          />
                        </IconWrapper>
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
                          <div
                            className="header__menu-button-inner"
                            style={{ color: '#fff' }}
                          />
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
                              <a
                                className="dropdown__link"
                                href="home-minimal.html"
                              >
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
                        <a
                          className="dropdown__trigger top-menu__menu-link"
                          href="#"
                        >
                          <div> NFT </div>
                        </a>
                        <div className="dropdown__menu">
                          <div className="dropdown__column">
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="work-grid.html"
                              >
                                Grid
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="work-carousel.html"
                              >
                                Carousel
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="work-listing.html"
                              >
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
                        <a
                          className="dropdown__trigger top-menu__menu-link"
                          href="#"
                        >
                          <div> ROADMAP</div>
                        </a>
                        <div className="dropdown__menu">
                          <div className="dropdown__column">
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="news-grid.html"
                              >
                                Grid
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="news-listing.html"
                              >
                                Listing
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="news-masonry.html"
                              >
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
                        <a
                          className="dropdown__trigger top-menu__menu-link"
                          href="#"
                        >
                          TEAM
                        </a>
                        <div className="dropdown__menu">
                          <div className="dropdown__column">
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-about.html"
                              >
                                About
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-services.html"
                              >
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
                              <a
                                className="dropdown__link"
                                href="page-contact.html"
                              >
                                Contact
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-404.html"
                              >
                                404
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="top-menu__menu-item">
                      <div className="dropdown">
                        <a
                          className="dropdown__trigger top-menu__menu-link"
                          href="#"
                        >
                          DOCS
                        </a>
                        <div className="dropdown__menu">
                          <div className="dropdown__column">
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-about.html"
                              >
                                About
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-services.html"
                              >
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
                              <a
                                className="dropdown__link"
                                href="page-contact.html"
                              >
                                Contact
                              </a>
                            </div>
                            <div className="dropdown__item">
                              <a
                                className="dropdown__link"
                                href="page-404.html"
                              >
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
                  <div className="menu-panel__locale link link link_active">
                    En
                  </div>
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
                    <div
                      className="menu-panel__menu-list collapse"
                      id="submenu1"
                    >
                      <div className="menu-panel__bottom-submenu">
                        <div className="menu-panel__submenu-item">
                          <a
                            className="menu-panel__submenu-link"
                            href="index.html"
                          >
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
                    <div
                      className="menu-panel__menu-list collapse"
                      id="submenu2"
                    >
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
                    <div
                      className="menu-panel__menu-list collapse"
                      id="submenu3"
                    >
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
                    <div
                      className="menu-panel__menu-list collapse"
                      id="submenu4"
                    >
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
        </header>

        <main>
          <div
            className="studio-intro-slide"
            style={{ backgroundImage: 'url(assets/img/distortion.jpeg)' }}
          >
            <div className="Background">
              <canvas className="Background-canvas" />
            </div>
            <div className="faded-block studio-intro-slide__container container">
              <div className="studio-intro-slide__inner">
                <div className="studio-intro-slide__subtitle">METAVERSE</div>
                <div className="studio-intro-slide__title-wrapper">
                  <div className="studio-intro-slide__title">
                    ARTISTELLA
                    <br />
                  </div>
                </div>
                <div className="studio-intro-slide__text">
                  This project designed &amp; building for purpose protect the
                  ocean and exhibition. With inspired from sail, sponge and
                  wind. Capri Ocean Musem was born
                </div>
                <a
                  className="studio-intro-slide__link studio-intro-slide__link_inverted"
                  href="#"
                >
                  See project
                </a>
              </div>
            </div>
          </div>
          <div className="clients-wrapper">
            <div className="container">
              <div className="clients">
                <div className="clients__list">
                  <div className="clients__item">
                    <div className="clients__item-inner">
                      <img alt="" src="img/client-1-dark.png" />
                    </div>
                  </div>
                  <div className="clients__item">
                    <div className="clients__item-inner">
                      <img alt="" src="img/client-2-dark.png" />
                    </div>
                  </div>
                  <div className="clients__item">
                    <div className="clients__item-inner">
                      <img alt="" src="img/client-3-dark.png" />
                    </div>
                  </div>
                  <div className="clients__item">
                    <div className="clients__item-inner">
                      <img alt="" src="img/client-4-dark.png" />
                    </div>
                  </div>
                  <div className="clients__item">
                    <div className="clients__item-inner">
                      <img alt="" src="img/client-5-dark.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Player>
            <iframe
              src="https://www.youtube.com/embed/6RdXQYqXdvo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Player>
          <div className="cards-block">
            <div className="cards-block__head">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 col-xl-5">
                    <div
                      className="cards-block__title"
                      style={{ fontWeight: 600 }}
                    >
                      METAVERSE CONTENT
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 offset-xl-1">
                    <div className="cards-block__text">
                      아티스텔라는 크게 네가지의 키워드를 가지고 있다 각
                      키워드에 따라 사람들의 방문도가 결정되고 누군가에게는
                      힐링의 공간, 또 다른 누군가에게는 게임의공간, 사람들 간의
                      소통공간, 예술의 공간으로 나뉘어진다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="container-fluid">
                <div className="row">
                  <div className="cards__item col-12 col-md-6 col-xl-3">
                    <a
                      className="cards__item-inner"
                      href="#"
                      style={{ backgroundImage: 'url("img/1.png")' }}
                    >
                      <span className="cards__item-content">
                        <span className="cards__item-index">01</span>
                        <span className="cards__item-title">Architecture</span>
                        <span className="cards__item-text">
                          As architects, we know that each day is new and must
                          be explored. People’s dreams about how they want to
                          live their lives, how they pursue inspiration and
                          education.
                        </span>
                        <span className="cards__arrow icon-chevron-right" />
                      </span>
                    </a>
                  </div>
                  <div className="cards__item col-12 col-md-6 col-xl-3">
                    <a
                      className="cards__item-inner"
                      href="#"
                      style={{ backgroundImage: 'url("img/2.png")' }}
                    >
                      <span className="cards__item-content">
                        <span className="cards__item-index">02</span>
                        <span className="cards__item-title">
                          Interior Design
                        </span>
                        <span className="cards__item-text">
                          These buildings give architecture, art, culture,
                          history, and nature the opportunity to meet. We see
                          this as an invitation to let the architecture vibrate
                          with artistic audacity, life, and joy.
                        </span>
                        <span className="cards__arrow icon-chevron-right" />
                      </span>
                    </a>
                  </div>
                  <div className="cards__item col-12 col-md-6 col-xl-3">
                    <a
                      className="cards__item-inner"
                      href="#"
                      style={{ backgroundImage: 'url("img/3.png")' }}
                    >
                      <span className="cards__item-content">
                        <span className="cards__item-index">03</span>
                        <span className="cards__item-title">Landscape</span>
                        <span className="cards__item-text">
                          We design master plans and urban spaces full of life,
                          always resting on the shoulders of the local culture
                          and its social rituals.
                        </span>
                        <span className="cards__arrow icon-chevron-right" />
                      </span>
                    </a>
                  </div>
                  <div className="cards__item col-12 col-md-6 col-xl-3">
                    <a
                      className="cards__item-inner"
                      href="#"
                      style={{ backgroundImage: 'url("img/4.png")' }}
                    >
                      <span className="cards__item-content">
                        <span className="cards__item-index">04</span>
                        <span className="cards__item-title">Consulting</span>
                        <span className="cards__item-text">
                          The planning and transformation of large urban areas
                          has a decisive impact on the entire cycle of how we
                          live, work &amp; interact with each other
                        </span>
                        <span className="cards__arrow icon-chevron-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="features-block">
            <div className="container">
              <div className="features-block__subtitle">Why Choose Us</div>
              <div className="features-block__title">Why we are different?</div>
              <div className="features-block__text">
                Was likeness brought divided given fruit in wherein lights green
                hath third bring let creeping. Third them firmament give green
                Creature night first creature.
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="features-block__item">
                    <div className="features-block__feature-icon icon-users2" />
                    <div className="features-block__feature-title">
                      Dedicated Team
                    </div>
                    <div className="features-block__feature-text">
                      Was likeness brought divided given fruit inwherein lights
                      green hath third bring let creeping.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="features-block__item">
                    <div className="features-block__feature-icon icon-clock" />
                    <div className="features-block__feature-title">
                      Dedicated Team
                    </div>
                    <div className="features-block__feature-text">
                      Was likeness brought divided given fruit inwherein lights
                      green hath third bring let creeping.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="features-block__item">
                    <div className="features-block__feature-icon icon-cash-dollar" />
                    <div className="features-block__feature-title">
                      Dedicated Team
                    </div>
                    <div className="features-block__feature-text">
                      Was likeness brought divided given fruit inwherein lights
                      green hath third bring let creeping.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="features-block__item">
                    <div className="features-block__feature-icon icon-bubbles" />
                    <div className="features-block__feature-title">
                      Dedicated Team
                    </div>
                    <div className="features-block__feature-text">
                      Was likeness brought divided given fruit inwherein lights
                      green hath third bring let creeping.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="studio-filter">
            <div className="container">
              <div className="studio-filter__inner">
                <div className="studio-filter__title">Latest Projects</div>
                <div className="studio-filter__filter">
                  <div
                    className="studio-filter__filter-link"
                    style={{ color: slideIndex == 0 ? '#f14201' : '' }}
                    onClick={() => sliderRef.current.slickGoTo(0)}
                  >
                    Land
                  </div>
                  <div
                    className="studio-filter__filter-link"
                    style={{ color: slideIndex == 1 ? '#f14201' : '' }}
                    onClick={() => sliderRef.current.slickGoTo(1)}
                  >
                    Building
                  </div>
                  <div
                    style={{ color: slideIndex == 2 ? '#f14201' : '' }}
                    className="studio-filter__filter-link"
                    onClick={() => sliderRef.current.slickGoTo(2)}
                  >
                    Interior
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="studio-main-slider">
            <div className="revolution-slider">
              <div
                className="revolution-slider__slider rev rev_slider fullwidthabanner  revolution-slider__slider revolution-slider__slider_autoheight"
                data-version="5.4.6"
              >
                <div>
                  <div>
                    <Slider ref={sliderRef} {...settings}>
                      <div className="slide2">
                        <ForImg />

                        <CenterImg className="container">
                          <div className="studio-main-slide__inner">
                            <div
                              className="studio-main-slide__subtitle"
                              style={{ fontSize: '1.2vw' }}
                            >
                              Architecture
                            </div>
                            <div className="studio-main-slide__title-wrapper">
                              <SliderCenterText
                                className="studio-main-slide__title"
                                style={{ fontSize: '6vw' }}
                              >
                                Justin Burney Villa,
                                <br />
                                NY
                              </SliderCenterText>
                            </div>
                            <SliderCenterText
                              className="studio-main-slide__text"
                              style={{ fontSize: '1.4vw' }}
                            >
                              This project designed &amp; building for purpose
                              protect the ocean and exhibition. With inspired
                              from sail, sponge and wind. Capri Ocean Musem was
                              born
                            </SliderCenterText>
                            <a
                              className="studio-main-slide__link studio-main-slide__link_inverted"
                              href="#"
                              style={{ fontSize: '1.4vw' }}
                            >
                              See project
                            </a>
                          </div>
                        </CenterImg>
                      </div>
                      <div className="slide2">
                        <ForImg2 />

                        <CenterImg className="container">
                          <div className="studio-main-slide__inner">
                            <div
                              className="studio-main-slide__subtitle"
                              style={{ fontSize: '1.2vw' }}
                            >
                              Architecture
                            </div>
                            <div className="studio-main-slide__title-wrapper">
                              <div
                                className="studio-main-slide__title"
                                style={{ fontSize: '6vw', fontWeight: 600 }}
                              >
                                Justin Burney Villa,
                                <br />
                                NY
                              </div>
                            </div>
                            <div
                              className="studio-main-slide__text"
                              style={{ fontSize: '1.4vw' }}
                            >
                              This project designed &amp; building for purpose
                              protect the ocean and exhibition. With inspired
                              from sail, sponge and wind. Capri Ocean Musem was
                              born
                            </div>
                            <a
                              className="studio-main-slide__link studio-main-slide__link_inverted"
                              href="#"
                              style={{ fontSize: '1.4vw' }}
                            >
                              See project
                            </a>
                          </div>
                        </CenterImg>
                      </div>
                      <div className="slide2">
                        <ForImg3 />

                        <CenterImg className="container">
                          <div className="studio-main-slide__inner">
                            <div
                              className="studio-main-slide__subtitle"
                              style={{ fontSize: '1.2vw' }}
                            >
                              Architecture
                            </div>
                            <div className="studio-main-slide__title-wrapper">
                              <div
                                className="studio-main-slide__title"
                                style={{ fontSize: '6vw' }}
                              >
                                Justin Burney Villa,
                                <br />
                                NY
                              </div>
                            </div>
                            <div
                              className="studio-main-slide__text"
                              style={{ fontSize: '1.4vw' }}
                            >
                              This project designed &amp; building for purpose
                              protect the ocean and exhibition. With inspired
                              from sail, sponge and wind. Capri Ocean Musem was
                              born
                            </div>
                            <a
                              className="studio-main-slide__link studio-main-slide__link_inverted"
                              href="#"
                              style={{ fontSize: '1.4vw' }}
                            >
                              See project
                            </a>
                          </div>
                        </CenterImg>
                      </div>
                    </Slider>
                  </div>
                </div>

                {/* <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  effect={'fade'}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation, EffectFade]}
                  className="mySwiper"
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                >
                  <SwiperSlide>
                    <img
                      alt=""
                      className="rev-slidebg"
                      data-bgposition="center center"
                      data-blurend={0}
                      data-blurstart={20}
                      data-duration={5000}
                      data-ease="Power2.easeInOut"
                      data-kenburns="on"
                      data-no-retina="data-no-retina"
                      data-offsetend="0 0"
                      data-offsetstart="0 0"
                      data-rotateend={0}
                      data-rotatestart={0}
                      data-scaleend={120}
                      data-scalestart={100}
                      src="assets/img/slider1.jpeg"
                    />
                    <SliderCenterText>
                      <div style={{ fontSize: '6vw' }}>ARTISLAND</div>
                      <div>
                        {`"아티스랜드는 인간 커뮤니티의 기본 단위인 '마을' 로의 회기를 첫 번째 목표로 합니다."`}
                      </div>
                      <div style={{}}>View Project</div>
                    </SliderCenterText>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <img
                      alt=""
                      className="rev-slidebg"
                      data-bgposition="center center"
                      data-blurend={0}
                      data-blurstart={20}
                      data-duration={5000}
                      data-ease="Power2.easeInOut"
                      data-kenburns="on"
                      data-no-retina="data-no-retina"
                      data-offsetend="0 0"
                      data-offsetstart="0 0"
                      data-rotateend={0}
                      data-rotatestart={0}
                      data-scaleend={120}
                      data-scalestart={100}
                      src="assets/img/slider2.jpeg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt=""
                      className="rev-slidebg"
                      data-bgposition="center center"
                      data-blurend={0}
                      data-blurstart={20}
                      data-duration={5000}
                      data-ease="Power2.easeInOut"
                      data-kenburns="on"
                      data-no-retina="data-no-retina"
                      data-offsetend="0 0"
                      data-offsetstart="0 0"
                      data-rotateend={0}
                      data-rotatestart={0}
                      data-scaleend={120}
                      data-scalestart={100}
                      src="assets/img/slider3.jpeg"
                    />
                  </SwiperSlide>
                </Swiper> */}
              </div>
            </div>
          </div>
          <div className="collapse-block">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="heading-group">
                    <div className="heading-group__title">
                      Easy &amp; Fast with our
                      <br />
                      progress
                    </div>
                    <div className="heading-group__text">
                      Shall seas yielding a he, moveth said gathering under all
                      cattle were years fruit whose isn’t.
                    </div>
                  </div>
                  <div className="collapse-list">
                    <div className="collapse-list__collapse">
                      <a
                        className="collapse-list__collapse-head collapsed"
                        data-toggle="collapse"
                        href="#collapse1"
                      >
                        1. Concept
                        <span className="collapse-list__collapse-head-icon icon-chevron-up" />
                      </a>
                      <div
                        className="collapse-list__collapse-text collapse"
                        id="collapse1"
                      >
                        <div className="collapse-list__collapse-text-inner">
                          Light. God in she’d thing Night itself. There signs
                          him divided tree heaven over also that open seasons
                          doesn’tliving isn’t god. Abundantly together life
                          heaven.
                        </div>
                      </div>
                    </div>
                    <div className="collapse-list__collapse">
                      <a
                        className="collapse-list__collapse-head collapsed"
                        data-toggle="collapse"
                        href="#collapse2"
                      >
                        2. design &amp; development
                        <span className="collapse-list__collapse-head-icon icon-chevron-up" />
                      </a>
                      <div
                        className="collapse-list__collapse-text collapse"
                        id="collapse2"
                      >
                        <div className="collapse-list__collapse-text-inner">
                          Light. God in she’d thing Night itself. There signs
                          him divided tree heaven over also that open seasons
                          doesn’tliving isn’t god. Abundantly together life
                          heaven.
                        </div>
                      </div>
                    </div>
                    <div className="collapse-list__collapse">
                      <a
                        className="collapse-list__collapse-head collapsed"
                        data-toggle="collapse"
                        href="#collapse3"
                      >
                        3. Execution
                        <span className="collapse-list__collapse-head-icon icon-chevron-up" />
                      </a>
                      <div
                        className="collapse-list__collapse-text collapse"
                        id="collapse3"
                      >
                        <div className="collapse-list__collapse-text-inner">
                          Light. God in she’d thing Night itself. There signs
                          him divided tree heaven over also that open seasons
                          doesn’tliving isn’t god. Abundantly together life
                          heaven.
                        </div>
                      </div>
                    </div>
                    <div className="collapse-list__collapse">
                      <a
                        className="collapse-list__collapse-head collapsed"
                        data-toggle="collapse"
                        href="#collapse4"
                      >
                        4. handover
                        <span className="collapse-list__collapse-head-icon icon-chevron-up" />
                      </a>
                      <div
                        className="collapse-list__collapse-text collapse"
                        id="collapse4"
                      >
                        <div className="collapse-list__collapse-text-inner">
                          Light. God in she’d thing Night itself. There signs
                          him divided tree heaven over also that open seasons
                          doesn’tliving isn’t god. Abundantly together life
                          heaven.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-1">
                  <a
                    className="video-block popup-video"
                    href="https://vimeo.com/34741214"
                    target="_blank"
                  >
                    <img alt="" src="img/home-studio-video-image.jpg" />
                    <span className="video-block__play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="studio-reviews">
            <div className="container">
              <div className="studio-reviews__head">
                <div className="studio-reviews__title">
                  5,000 Happy clients love Arquito
                </div>
                <a className="studio-reviews__more-link" href="#">
                  More Review
                </a>
              </div>
              <div className="studio-reviews__slider swiper-container">
                <div className="swiper-wrapper">
                  <div className="studio-reviews__review swiper-slide">
                    <div className="studio-reviews__review-status">
                      Execellent -
                      <div className="studio-reviews__review-stars">
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star studio-reviews__review-star_empty icofont-star" />
                      </div>
                    </div>
                    <div className="studio-reviews__review-text">
                      "We've been very pleased with our experience working with
                      Arquito. Their team was incredibly helpful in helping us
                      find theperfect developer for our project. The work was
                      stellar, the communication was excellent and we couldn't
                      have been happier with the overall experience. We're
                      excited to work with Arquito for more projects in the
                      future!"
                    </div>
                  </div>
                  <div className="studio-reviews__review swiper-slide">
                    <div className="studio-reviews__review-status">
                      Execellent -
                      <div className="studio-reviews__review-stars">
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star studio-reviews__review-star_empty icofont-star" />
                      </div>
                    </div>
                    <div className="studio-reviews__review-text">
                      "We've been very pleased with our experience working with
                      Arquito. Their team was incredibly helpful in helping us
                      find theperfect developer for our project. The work was
                      stellar, the communication was excellent and we couldn't
                      have been happier with the overall experience. We're
                      excited to work with Arquito for more projects in the
                      future!"
                    </div>
                  </div>
                  <div className="studio-reviews__review swiper-slide">
                    <div className="studio-reviews__review-status">
                      Execellent -
                      <div className="studio-reviews__review-stars">
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star icofont-star" />
                        <div className="studio-reviews__review-star studio-reviews__review-star_empty icofont-star" />
                      </div>
                    </div>
                    <div className="studio-reviews__review-text">
                      "We've been very pleased with our experience working with
                      Arquito. Their team was incredibly helpful in helping us
                      find theperfect developer for our project. The work was
                      stellar, the communication was excellent and we couldn't
                      have been happier with the overall experience. We're
                      excited to work with Arquito for more projects in the
                      future!"
                    </div>
                  </div>
                </div>
              </div>
              <div className="studio-reviews__buttons swiper-container">
                <div className="swiper-wrapper">
                  <div className="studio-reviews__person studio-reviews__person_active swiper-slide">
                    <div className="studio-reviews__person-image">
                      <img alt="" src="img/studio-review-person-1.jpg" />
                    </div>
                    <div className="studio-reviews__person-name">
                      Robert Downer
                    </div>
                    <div className="studio-reviews__person-role">
                      Creative Director at
                      <a href="#">Envato LLC</a>
                    </div>
                  </div>
                  <div className="studio-reviews__person swiper-slide">
                    <div className="studio-reviews__person-image">
                      <img alt="" src="img/studio-review-person-2.jpg" />
                    </div>
                    <div className="studio-reviews__person-name">
                      natalie noyes
                    </div>
                    <div className="studio-reviews__person-role">
                      Managerment Product at
                      <a href="#">Spotify</a>
                    </div>
                  </div>
                  <div className="studio-reviews__person swiper-slide">
                    <div className="studio-reviews__person-image">
                      <img alt="" src="img/studio-review-person-3.jpg" />
                    </div>
                    <div className="studio-reviews__person-name">
                      Christ Evan
                    </div>
                    <div className="studio-reviews__person-role">
                      Senior Visual Product Designer at
                      <a href="#">FocusLabs</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="team-block">
            <div className="container">
              <div className="team-block__body team-block__body team-block__body_bordered">
                <div className="heading-group heading-group heading-group_centered">
                  <div className="heading-group__subtitle">Meet Our team</div>
                  <div className="heading-group__title">
                    Professional &amp; Friendly
                  </div>
                  <div className="heading-group__text">
                    He moving, shall heaven Had won’t above. Shall seas yielding
                    a he, moveth said gathering under all cattle were years
                    fruit whose isn’t. Meat seed you’re. Seed so days creature
                    seed, i whales creature make.
                  </div>
                  <div>
                    <Slider {...multipleSettings}>
                      <div className="slide">
                        <MutipleSiderImg alt="" src="img/team-1.jpg" />
                        <div
                          style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            marginTop: '1rem',
                          }}
                        >
                          Alex Fergurson
                        </div>
                        <div
                          style={{
                            color: '#999',
                          }}
                        >
                          CEO Founder
                        </div>
                      </div>

                      <div className="slide">
                        <MutipleSiderImg
                          alt=""
                          src="img/team-1.jpg"
                          className="rev-slidebg"
                        />
                        <div
                          style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            marginTop: '1rem',
                          }}
                        >
                          Alex Fergurson
                        </div>
                        <div
                          style={{
                            color: '#999',
                          }}
                        >
                          CEO Founder
                        </div>
                      </div>
                      <div>
                        <MutipleSiderImg
                          alt=""
                          src="img/team-1.jpg"
                          className="rev-slidebg"
                        />
                      </div>
                      <div>
                        <MutipleSiderImg
                          alt=""
                          src="img/team-1.jpg"
                          className="rev-slidebg"
                        />
                      </div>
                      <div>
                        <img
                          alt=""
                          className="rev-slidebg"
                          src="img/team-1.jpg"
                          width={232}
                          height={232}
                        />
                      </div>
                      <div>
                        <img
                          alt=""
                          className="rev-slidebg"
                          src="img/team-1.jpg"
                          width={232}
                          height={232}
                        />
                      </div>
                      <div>
                        <img
                          alt=""
                          className="rev-slidebg"
                          src="img/team-1.jpg"
                          width={232}
                          height={232}
                        />
                      </div>
                      <div>
                        <img
                          alt=""
                          className="rev-slidebg"
                          src="img/team-1.jpg"
                          width={232}
                          height={232}
                        />
                      </div>
                      <div>
                        <img
                          alt=""
                          className="rev-slidebg"
                          src="img/team-1.jpg"
                          width={232}
                          height={232}
                        />
                      </div>
                    </Slider>
                  </div>

                  {/* <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt=""
                        className="rev-slidebg"
                        src="img/team-1.jpg"
                      />
                    </SwiperSlide>
                  </Swiper> */}
                </div>
              </div>
            </div>
          </div>

          <div className="awards-block">
            <div className="container">
              <div className="heading-group heading-group heading-group_centered">
                <div className="heading-group__subtitle">our winning</div>
                <div className="heading-group__title">
                  Achievements &amp; Prizes
                </div>
              </div>
              <div className="awards-block__body">
                <div className="awards-block__item">
                  <div className="awards-block__year">2019</div>
                  <div className="awards-block__list">
                    <div className="awards-block__text">
                      OAS Development Awards Shortlisted - Best West End
                      New-Build
                      <div className="awards-block__text-footer">
                        Central Bank, Scotland
                      </div>
                    </div>
                    <div className="awards-block__text">
                      OAS Development Awards Shortlisted - Best City Development
                      <div className="awards-block__text-footer">
                        Capri Ocean Museum
                      </div>
                    </div>
                    <div className="awards-block__text">
                      Building Awards 2019 Shortlisted - Small Project of the
                      Year
                      <div className="awards-block__text-footer">
                        Dustin Villa, Spain
                      </div>
                    </div>
                    <div className="awards-block__text">
                      OAS Development Awards Shortlisted - Best City Development
                      <div className="awards-block__text-footer">
                        Kristina House, Germny
                      </div>
                    </div>
                  </div>
                </div>
                <div className="awards-block__item">
                  <div className="awards-block__year">2017</div>
                  <div className="awards-block__list">
                    <div className="awards-block__text">
                      London Planning Awards Shortlisted - Best Place to Work
                      <div className="awards-block__text-footer">
                        Local Financial Office, Iasi, Romania
                      </div>
                    </div>
                    <div className="awards-block__text">
                      Blueprint Awards Winner – Best Interior Project (Leisure)
                      <div className="awards-block__text-footer">
                        Justin burney Villa, NY
                      </div>
                    </div>
                  </div>
                </div>
                <div className="awards-block__item">
                  <div className="awards-block__year">2016</div>
                  <div className="awards-block__list">
                    <div className="awards-block__text">
                      Structural Steel Design Awards Winner
                      <div className="awards-block__text-footer">
                        Art Museum, Poland
                      </div>
                    </div>
                    <div className="awards-block__text">
                      FX Interior Design Awards Shortlisted – Best Leisure
                      <div className="awards-block__text-footer">
                        David Villa, Denmark
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="studio-posts">
            <div className="heading-group heading-group heading-group_centered">
              <div className="heading-group__subtitle">Our Blog</div>
              <div className="heading-group__title">
                Latest posts from our press
              </div>
            </div>
            <div className="posts">
              <div className="container">
                <div className="row">
                  <div className="posts__item col-12 col-lg-4">
                    <a className="posts__item-inner" href="#">
                      <img
                        alt=""
                        className="posts__image"
                        src="img/studio-post-image-2.jpg"
                      />
                      <span className="posts__item-content">
                        <span className="posts__item-footer">
                          <span className="posts__category">Inspiration</span>
                          <span className="posts__date">Oct 20, 2019</span>
                        </span>
                        <span className="posts__item-title">
                          Top 20 AIA Architecture Winners: Tropical Villa
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="posts__item col-12 col-lg-4">
                    <a className="posts__item-inner" href="#">
                      <img
                        alt=""
                        className="posts__image"
                        src="img/studio-post-image-2.jpg"
                      />
                      <span className="posts__item-content">
                        <span className="posts__item-footer">
                          <span className="posts__category">News</span>
                          <span className="posts__date">Oct 20, 2019</span>
                        </span>
                        <span className="posts__item-title">
                          Minimalist Trending in Modern Architecture 2019
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="posts__item col-12 col-lg-4">
                    <a className="posts__item-inner" href="#">
                      <img
                        alt=""
                        className="posts__image"
                        src="img/studio-post-image-3.jpg"
                      />
                      <span className="posts__item-content">
                        <span className="posts__item-footer">
                          <span className="posts__category">Inspiration</span>
                          <span className="posts__date">Oct 15, 2019</span>
                        </span>
                        <span className="posts__item-title">
                          Leather Furnitures, Modern Interior Design 2019
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer-studio footer">
          <div className="container-fluid">
            <div className="row">
              <div className="footer-studio__column col-6 col-xl-3">
                <div className="footer-studio__group-title">Company</div>
                <ul className="footer-studio__list">
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      Career
                    </a>
                  </li>
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-studio__column col-6 col-xl-3">
                <div className="footer-studio__group-title">Help Center</div>
                <ul className="footer-studio__list">
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      FAQs
                    </a>
                  </li>
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      Term &amp; Conditions
                    </a>
                  </li>
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      How It Works
                    </a>
                  </li>
                  <li className="footer-studio__list-item">
                    <a className="footer-studio__list-link" href="#">
                      Return
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-studio__column col-12 col-sm-6 col-xl-3">
                <div className="footer-studio__group-title">Get In Touch</div>
                <p>
                  17 Princess Road, London, Greater London,
                  <br />
                  NW18JR, United Kingdom
                </p>
                <p>
                  <a href="mailto:hello@arquito.uk">hello@arquito.uk</a>
                </p>
                <p>(+0084) 912-3548-073</p>
              </div>
              <div className="footer-studio__column col-12 col-sm-6 col-xl-3">
                <div className="footer-studio__group-title">Newsletter</div>
                <p>Subscribe and get 10% off from our furniture store</p>
                <form action="#" className="footer-studio__form">
                  <input
                    className="footer-studio__input"
                    placeholder="Enter your email..."
                    type="text"
                  />
                  <button className="footer-studio__submit">
                    Subscribe
                    <span className="footer-studio__submit-icon icon-chevron-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="footer-studio__bottom">
              <div className="row">
                <div className="footer-studio__column col-12 col-sm-6">
                  <div className="footer-studio__copyright">
                    © 2019
                    <strong>ARQUITO.</strong>
                    All Rights Reserved. Design by
                    <a href="#">Logan Cee</a>
                  </div>
                </div>
                <div className="footer-studio__column col-12 col-sm-6 col-lg-3 offset-lg-3">
                  <div className="footer-studio__socials">
                    <a
                      className="footer-studio__social icofont-twitter"
                      href="#"
                    >
                      <div className="visually-hidden">twitter</div>
                    </a>
                    <a
                      className="footer-studio__social icofont-facebook"
                      href="#"
                    >
                      <div className="visually-hidden">facebook</div>
                    </a>
                    <a
                      className="footer-studio__social icofont-behance"
                      href="#"
                    >
                      <div className="visually-hidden">behance</div>
                    </a>
                    <a
                      className="footer-studio__social icofont-google-plus"
                      href="#"
                    >
                      <div className="visually-hidden">google plus</div>
                    </a>
                    <a
                      className="footer-studio__social icofont-linkedin"
                      href="#"
                    >
                      <div className="visually-hidden">linkedin</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;

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

const Block = styled.div<{ visible: any }>`
  position: fixed;
  top: 0;
  background-color: ${(props) => (props.visible ? '#fff' : '')};
  width: 100%;
  z-index: 10;
  box-shadow: 0px 0 8px rgba(0, 0, 0, 0.08);

  transition-property: background-color, color;
  transform: ${(props) => (props.visible ? '0px' : 'translateY(-110px)')};
  transition: all 0.5s ease-out;
`;

const Player = styled.div`
  width: 100%;
  padding-top: 56.25%;
  height: 0px;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const LogoImg = styled.img`
  width: 286px;
  height: 24px;
  ${media.custom(768)} {
    width: 144px;
    height: 24px;
  }
`;

const MutipleSiderImg = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 14.5rem;
  height: 14.5rem;
  ${media.custom(991)} {
    width: 20.625rem;
    height: 20.625rem;
  }

  ${media.custom(768)} {
    object-fit: cover;
    width: 100%;
    height: 250px;
  }
`;

const SingleSiderImg = styled.img`
  width: 100%;
  aspect-ratio: auto 1 / 1;
`;

const ForImg = styled.div`
  background-image: url('/assets/img/slider1.jpeg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;

  padding-top: 66.64%;

  z-index: 18;
  visibility: inherit;
  transition: none 0s ease 0s;
  text-align: inherit;
  line-height: 24px;

  letter-spacing: 0px;
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
  min-height: 636px;
  min-width: 821px;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transform-origin: 50% 50% 0px;
`;

const ForImg2 = styled.div`
  background-image: url('/assets/img/slider2.jpeg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 66.64%;
`;

const ForImg3 = styled.div`
  background-image: url('/assets/img/slider3.jpeg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 66.64%;
`;

const CenterImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const IconWrapper = styled.div`
  color: #fff;
  transition: color 0.5s;

  &:hover {
    color: #f24a00;
  }
`;

const SliderCenterText = styled.div`
  font-family: 'Gowun Dodum', sans-serif;
`;

const TextBlack = styled.div`
  color: black;
  &:hover {
    color: #f24a00;
  }
`;
