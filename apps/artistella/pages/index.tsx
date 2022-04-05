import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import cn from "classnames";

const Home: NextPage = () => {
  const a = cn("header", "header_white", "header_fixed");
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta
          content='Arquito - 3D Architecture & Interior HTML Template'
          name='description'
        />
        <meta content='Paul, Logan Cee, Mikhail Ojereliev' name='author' />
        <title>Arquito - 3D Architecture &amp; Interior HTML Template</title>

        {/*Favicons*/}
        <link
          href='favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link href='favicons/site.webmanifest' rel='manifest' />
        <link
          color='#5bbad5'
          href='favicons/safari-pinned-tab.svg'
          rel='mask-icon'
        />
        <link href='favicons/favicon.ico' rel='shortcut icon' />
        <meta content='#da532c' name='msapplication-TileColor' />
        <meta
          content='favicons/browserconfig.xml'
          name='msapplication-config'
        />
        <meta content='#ffffff' name='theme-color' />
      </Head>
      <div style={{ display: "none" }}>
        {/* svg sprite*/}
        <svg
          style={{ width: 0, height: 0, visibility: "hidden" }}
          xmlns='http://www.w3.org/2000/svg'
        >
          <symbol id='icon_ion-icon-apps' viewBox='0 0 512 512'>
            <path d='M96 176h80V96H96v80zm120 240h80v-80h-80v80zm-120 0h80v-80H96v80zm0-120h80v-80H96v80zm120 0h80v-80h-80v80zM336 96v80h80V96h-80zm-120 80h80V96h-80v80zm120 120h80v-80h-80v80zm0 120h80v-80h-80v80z' />
          </symbol>
        </svg>
      </div>

      <div className='page__inner animsition'>
        <header className={a}>
          <div className='header__container'>
            <div className='header__wrapper container-fluid'>
              <div className='header__inner'>
                <a className='logo header__logo' href='/'>
                  Arquito
                </a>
                <button className='header__menu-button' type='button'>
                  <span className='header__menu-button-inner' />
                </button>
              </div>
            </div>
            <div className='header-fixed'>
              <div className='header-fixed__bottom container'>
                <ul className='top-menu header-fixed__menu'>
                  <li className='top-menu__menu-item'>
                    <div className='dropdown'>
                      <a
                        className='dropdown__trigger top-menu__menu-link'
                        href='/'
                      >
                        Home
                      </a>
                      <div className='dropdown__menu'>
                        <div className='dropdown__column'>
                          <div className='dropdown__title'>Light</div>
                          <div className='dropdown__item'>
                            <a className='dropdown__link' href='index.html'>
                              Default
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-parallax-piling.html'
                            >
                              Parallax Piling
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-zoom-parallax.html'
                            >
                              Zoom Parallax
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-3d-panorama.html'
                            >
                              3D Panorama
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link dropdown__link dropdown__link_active'
                              href='home-studio.html'
                            >
                              Studio
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-minimal.html'
                            >
                              Minimal
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-grid-background.html'
                            >
                              Grid Background
                            </a>
                          </div>
                        </div>
                        <div className='dropdown__column'>
                          <div className='dropdown__title'>Dark</div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-default-dark.html'
                            >
                              Default Dark
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-zoom-parallax-dark.html'
                            >
                              Zoom Parallax Dark
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-3d-panorama-dark.html'
                            >
                              3D Panorama Dark
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-studio-dark.html'
                            >
                              Studio Dark
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='home-minimal-dark.html'
                            >
                              Minimal Dark
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='top-menu__menu-item'>
                    <div className='dropdown'>
                      <a
                        className='dropdown__trigger top-menu__menu-link'
                        href='#'
                      >
                        Work
                      </a>
                      <div className='dropdown__menu'>
                        <div className='dropdown__column'>
                          <div className='dropdown__item'>
                            <a className='dropdown__link' href='work-grid.html'>
                              Grid
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='work-carousel.html'
                            >
                              Carousel
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='work-listing.html'
                            >
                              Listing
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='project-detail-image.html'
                            >
                              Project Detail Image
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='project-detail-slider.html'
                            >
                              Project Detail Slider
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='project-detail-panorama.html'
                            >
                              Project Detail Panorama
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='top-menu__menu-item'>
                    <div className='dropdown'>
                      <a
                        className='dropdown__trigger top-menu__menu-link'
                        href='#'
                      >
                        News
                      </a>
                      <div className='dropdown__menu'>
                        <div className='dropdown__column'>
                          <div className='dropdown__item'>
                            <a className='dropdown__link' href='news-grid.html'>
                              Grid
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='news-listing.html'
                            >
                              Listing
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='news-masonry.html'
                            >
                              Masonry
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='news-single-post.html'
                            >
                              Single Post
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='top-menu__menu-item'>
                    <div className='dropdown'>
                      <a
                        className='dropdown__trigger top-menu__menu-link'
                        href='#'
                      >
                        Page
                      </a>
                      <div className='dropdown__menu'>
                        <div className='dropdown__column'>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='page-about.html'
                            >
                              About
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='page-services.html'
                            >
                              Services
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='page-services-detail.html'
                            >
                              Services Detail
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a
                              className='dropdown__link'
                              href='page-contact.html'
                            >
                              Contact
                            </a>
                          </div>
                          <div className='dropdown__item'>
                            <a className='dropdown__link' href='page-404.html'>
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
          <div className='header__overlay' />
          <div className='menu-panel header__menu'>
            <div className='menu-panel__inner'>
              <button
                className='header__menu-button header__menu-button_fixed'
                type='button'
              >
                <span className='header__menu-button-inner' />
              </button>
              <div className='menu-panel__locales'>
                <div className='menu-panel__locale link link link_active'>
                  En
                </div>
                <div className='menu-panel__locale link'>Fr</div>
                <div className='menu-panel__locale link'>De</div>
              </div>
              <div className='menu-panel__menu'>
                <div className='menu-panel__menu-item'>
                  <a
                    className='menu-panel__menu-link menu-panel__menu-link menu-panel__menu-link_active'
                    data-toggle='collapse'
                    href='#submenu1'
                  >
                    Home
                  </a>
                  <div className='menu-panel__menu-list collapse' id='submenu1'>
                    <div className='menu-panel__bottom-submenu'>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='index.html'
                        >
                          Default
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-parallax-piling.html'
                        >
                          Parallax Piling
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-zoom-parallax.html'
                        >
                          Zoom Parallax
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-3d-panorama.html'
                        >
                          3D Panorama
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link menu-panel__submenu-link menu-panel__submenu-link_active'
                          href='home-studio.html'
                        >
                          Studio
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-minimal.html'
                        >
                          Minimal
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-grid-background.html'
                        >
                          Grid Background
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-default-dark.html'
                        >
                          Default Dark
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-zoom-parallax-dark.html'
                        >
                          Zoom Parallax Dark
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-3d-panorama-dark.html'
                        >
                          3D Panorama Dark
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-studio-dark.html'
                        >
                          Studio Dark
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='home-minimal-dark.html'
                        >
                          Minimal Dark
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='menu-panel__menu-item'>
                  <a
                    className='menu-panel__menu-link collapsed'
                    data-toggle='collapse'
                    href='#submenu2'
                  >
                    Work
                  </a>
                  <div className='menu-panel__menu-list collapse' id='submenu2'>
                    <div className='menu-panel__bottom-submenu'>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='work-grid.html'
                        >
                          Grid
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='work-carousel.html'
                        >
                          Carousel
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='work-listing.html'
                        >
                          Listing
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='project-detail-image.html'
                        >
                          Project Detail Image
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='project-detail-slider.html'
                        >
                          Project Detail Slider
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='project-detail-panorama.html'
                        >
                          Project Detail Panorama
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='menu-panel__menu-item'>
                  <a
                    className='menu-panel__menu-link collapsed collapsed'
                    data-toggle='collapse'
                    href='#submenu3'
                  >
                    News
                  </a>
                  <div className='menu-panel__menu-list collapse' id='submenu3'>
                    <div className='menu-panel__bottom-submenu'>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='news-grid.html'
                        >
                          Grid
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='news-listing.html'
                        >
                          Listing
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='news-masonry.html'
                        >
                          Masonry
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='news-single-post.html'
                        >
                          Single Post
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='menu-panel__menu-item'>
                  <a
                    className='menu-panel__menu-link collapsed collapsed'
                    data-toggle='collapse'
                    href='#submenu4'
                  >
                    Page
                  </a>
                  <div className='menu-panel__menu-list collapse' id='submenu4'>
                    <div className='menu-panel__bottom-submenu'>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='page-about.html'
                        >
                          About
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='page-services.html'
                        >
                          Services
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='page-services-detail.html'
                        >
                          Services Detail
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='page-contact.html'
                        >
                          Contact
                        </a>
                      </div>
                      <div className='menu-panel__submenu-item'>
                        <a
                          className='menu-panel__submenu-link'
                          href='page-404.html'
                        >
                          404
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='menu-panel__footer'>
                <div className='socials menu-panel__socials'>
                  <a className='socials__social icofont-twitter' href='#'>
                    <div className='visually-hidden'>twitter</div>
                  </a>
                  <a className='socials__social icofont-facebook' href='#'>
                    <div className='visually-hidden'>facebook</div>
                  </a>
                  <a className='socials__social icofont-google-plus' href='#'>
                    <div className='visually-hidden'>google plus</div>
                  </a>
                </div>
                <div className='menu-panel__bottom'>
                  <div className='menu-panel__copyright'>
                    © 2019
                    <strong>ARQUITO.</strong>
                    All Rights Reserved.
                  </div>
                  <div className='menu-panel__author'>
                    Design by
                    <a href='#'>Logan Cee</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div
            className='studio-intro-slide'
            style={{ backgroundImage: "url(assets/img/distortion.jpg)" }}
          >
            <div className='Background'>
              <canvas className='Background-canvas' />
            </div>
            <div className='faded-block studio-intro-slide__container container'>
              <div className='studio-intro-slide__inner'>
                <div className='studio-intro-slide__subtitle'>Architecture</div>
                <div className='studio-intro-slide__title-wrapper'>
                  <div className='studio-intro-slide__title'>
                    Capri Ocean
                    <br />
                    Museum
                  </div>
                </div>
                <div className='studio-intro-slide__text'>
                  This project designed &amp; building for purpose protect the
                  ocean and exhibition. With inspired from sail, sponge and
                  wind. Capri Ocean Musem was born
                </div>
                <a
                  className='studio-intro-slide__link studio-intro-slide__link_inverted'
                  href='#'
                >
                  See project
                </a>
              </div>
            </div>
          </div>
          <div className='clients-wrapper'>
            <div className='container'>
              <div className='clients'>
                <div className='clients__list'>
                  <div className='clients__item'>
                    <div className='clients__item-inner'>
                      <img alt='' src='img/client-1-dark.png' />
                    </div>
                  </div>
                  <div className='clients__item'>
                    <div className='clients__item-inner'>
                      <img alt='' src='img/client-2-dark.png' />
                    </div>
                  </div>
                  <div className='clients__item'>
                    <div className='clients__item-inner'>
                      <img alt='' src='img/client-3-dark.png' />
                    </div>
                  </div>
                  <div className='clients__item'>
                    <div className='clients__item-inner'>
                      <img alt='' src='img/client-4-dark.png' />
                    </div>
                  </div>
                  <div className='clients__item'>
                    <div className='clients__item-inner'>
                      <img alt='' src='img/client-5-dark.png' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cards-block'>
            <div className='cards-block__head'>
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-lg-6 col-xl-5'>
                    <div className='cards-block__title'>
                      We provide best solutions for your dream
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 offset-xl-1'>
                    <div className='cards-block__text'>
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries. When an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='cards'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='cards__item col-12 col-md-6 col-xl-3'>
                    <a
                      className='cards__item-inner'
                      href='#'
                      style={{ backgroundImage: 'url("img/card-image-1.jpg")' }}
                    >
                      <span className='cards__item-content'>
                        <span className='cards__item-index'>01</span>
                        <span className='cards__item-title'>Architecture</span>
                        <span className='cards__item-text'>
                          As architects, we know that each day is new and must
                          be explored. People’s dreams about how they want to
                          live their lives, how they pursue inspiration and
                          education.
                        </span>
                        <span className='cards__arrow icon-chevron-right' />
                      </span>
                    </a>
                  </div>
                  <div className='cards__item col-12 col-md-6 col-xl-3'>
                    <a
                      className='cards__item-inner'
                      href='#'
                      style={{ backgroundImage: 'url("img/card-image-2.jpg")' }}
                    >
                      <span className='cards__item-content'>
                        <span className='cards__item-index'>02</span>
                        <span className='cards__item-title'>
                          Interior Design
                        </span>
                        <span className='cards__item-text'>
                          These buildings give architecture, art, culture,
                          history, and nature the opportunity to meet. We see
                          this as an invitation to let the architecture vibrate
                          with artistic audacity, life, and joy.
                        </span>
                        <span className='cards__arrow icon-chevron-right' />
                      </span>
                    </a>
                  </div>
                  <div className='cards__item col-12 col-md-6 col-xl-3'>
                    <a
                      className='cards__item-inner'
                      href='#'
                      style={{ backgroundImage: 'url("img/card-image-3.jpg")' }}
                    >
                      <span className='cards__item-content'>
                        <span className='cards__item-index'>03</span>
                        <span className='cards__item-title'>Landscape</span>
                        <span className='cards__item-text'>
                          We design master plans and urban spaces full of life,
                          always resting on the shoulders of the local culture
                          and its social rituals.
                        </span>
                        <span className='cards__arrow icon-chevron-right' />
                      </span>
                    </a>
                  </div>
                  <div className='cards__item col-12 col-md-6 col-xl-3'>
                    <a
                      className='cards__item-inner'
                      href='#'
                      style={{ backgroundImage: 'url("img/card-image-4.jpg")' }}
                    >
                      <span className='cards__item-content'>
                        <span className='cards__item-index'>04</span>
                        <span className='cards__item-title'>Consulting</span>
                        <span className='cards__item-text'>
                          The planning and transformation of large urban areas
                          has a decisive impact on the entire cycle of how we
                          live, work &amp; interact with each other
                        </span>
                        <span className='cards__arrow icon-chevron-right' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='features-block'>
            <div className='container'>
              <div className='features-block__subtitle'>Why Choose Us</div>
              <div className='features-block__title'>Why we are different?</div>
              <div className='features-block__text'>
                Was likeness brought divided given fruit in wherein lights green
                hath third bring let creeping. Third them firmament give green
                Creature night first creature.
              </div>
              <div className='row'>
                <div className='col-12 col-md-6 col-lg-3'>
                  <div className='features-block__item'>
                    <div className='features-block__feature-icon icon-users2' />
                    <div className='features-block__feature-title'>
                      Dedicated Team
                    </div>
                    <div className='features-block__feature-text'>
                      Was likeness brought divided given fruit inwherein lights
                      green hath third bring let creeping.
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                  <div className='features-block__item'>
                    <div className='features-block__feature-icon icon-clock' />
                    <div className='features-block__feature-title'>
                      Dedicated Team
                    </div>
                    <div className='features-block__feature-text'>
                      Was likeness brought divided given fruit inwherein lights
                      green hath third bring let creeping.
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                  <div className='features-block__item'>
                    <div className='features-block__feature-icon icon-cash-dollar' />
                    <div className='features-block__feature-title'>
                      Dedicated Team
                    </div>
                    <div className='features-block__feature-text'>
                      Was likeness brought divided given fruit inwherein lights
                      green hath third bring let creeping.
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                  <div className='features-block__item'>
                    <div className='features-block__feature-icon icon-bubbles' />
                    <div className='features-block__feature-title'>
                      Dedicated Team
                    </div>
                    <div className='features-block__feature-text'>
                      Was likeness brought divided given fruit inwherein lights
                      green hath third bring let creeping.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='studio-filter'>
            <div className='container'>
              <div className='studio-filter__inner'>
                <div className='studio-filter__title'>Latest Projects</div>
                <div className='studio-filter__filter'>
                  <a
                    className='studio-filter__filter-link studio-filter__filter-link_active'
                    href='#'
                  >
                    All
                  </a>
                  <a className='studio-filter__filter-link' href='#'>
                    Architecture
                  </a>
                  <a className='studio-filter__filter-link' href='#'>
                    Interior Design
                  </a>
                  <a className='studio-filter__filter-link' href='#'>
                    Landscape
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='studio-main-slider'>
            <div className='revolution-slider'>
              <div
                className='revolution-slider__slider rev rev_slider fullwidthabanner revolution-slider__slider revolution-slider__slider_autoheight'
                data-version='5.4.6'
                style={{ display: "none" }}
              >
                <ul>
                  <li
                    data-easein='default'
                    data-easeout='default'
                    data-hideafterloop={0}
                    data-hideslideonmobile='off'
                    data-masterspeed={600}
                    data-rotate={0}
                    data-saveperformance='off'
                    data-slicey_shadow='0px 0px 0px 0px transparent'
                    data-slotamount='default'
                    data-transition='fade'
                  >
                    <img
                      alt=''
                      className='rev-slidebg'
                      data-bgposition='center center'
                      data-blurend={0}
                      data-blurstart={20}
                      data-duration={5000}
                      data-ease='Power2.easeInOut'
                      data-kenburns='on'
                      data-no-retina='data-no-retina'
                      data-offsetend='0 0'
                      data-offsetstart='0 0'
                      data-rotateend={0}
                      data-rotatestart={0}
                      data-scaleend={120}
                      data-scalestart={100}
                      src='img/home-slide-2.jpg'
                    />
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":300,"speed":1000,"frame":"0","from":"rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3700","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['150','150','100','100']"
                      data-hoffset="['-112','-43','-81','44']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-219','-184','-185','182']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 5 }}
                    />
                    {/* LAYER NR. 2*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":350,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3650","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','150','150','150']"
                      data-hoffset="['151','228','224','117']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-212','-159','71','-222']"
                      data-whitespace='nowrap'
                      data-width="['150','150','100','100']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 6 }}
                    />
                    {/*LAYER NR. 3*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":400,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3600","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['150','150','100','100']"
                      data-hoffset="['339','-442','104','-159']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['2','165','-172','219']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 7 }}
                    />
                    {/* LAYER NR. 4*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":450,"speed":1000,"frame":"0","from":"opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3550","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height={150}
                      data-hoffset="['162','216','-239','193']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['195','245','6','146']"
                      data-whitespace='nowrap'
                      data-width="['250','250','100','100']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 8 }}
                    />
                    {/* LAYER NR. 5*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3500","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','200','150','150']"
                      data-hoffset="['-186','-119','273','-223']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['269','217','-121','69']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 9 }}
                    />
                    {/* LAYER NR. 6*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":550,"speed":1000,"frame":"0","from":"opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3450","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','150','50','50']"
                      data-hoffset="['-325','292','162','-34']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['3','55','-275','-174']"
                      data-whitespace='nowrap'
                      data-width={150}
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 10 }}
                    />
                    {/* LAYER NR. 7*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":320,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3680","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['300','300','150','150']"
                      data-hoffset="['-429','523','-190','-306']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-327','173','181','480']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 11 }}
                    />
                    {/* LAYER NR. 8*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":360,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3640","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','100','100']"
                      data-hoffset="['422','-409','208','225']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-245','-72','294','-14']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 12 }}
                    />
                    {/* LAYER NR. 9*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":400,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3600","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','150','50']"
                      data-hoffset="['549','-445','28','58']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['236','400','316','287']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','200']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 13 }}
                    />
                    {/* LAYER NR. 10*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":440,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3560","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','100','100']"
                      data-hoffset="['-522','492','-151','262']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['339','-180','330','-141']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 14 }}
                    />
                    {/* LAYER NR. 11*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":480,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3520","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','200','150','150']"
                      data-hoffset="['-588','-375','-253','-207']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['72','-328','-172','-111']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 15 }}
                    />
                    {/* LAYER NR. 12*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":310,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3690","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['100','100','50','50']"
                      data-hoffset="['-37','73','-76','-100']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-401','-340','-293','-246']"
                      data-whitespace='nowrap'
                      data-width="['450','400','250','250']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 16 }}
                    />
                    {/* LAYER NR. 13*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":340,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3660","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['100','100','50','50']"
                      data-hoffset="['186','38','116','17']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['363','402','190','395']"
                      data-whitespace='nowrap'
                      data-width="['350','400','250','250']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 17 }}
                    />
                    {/* LAYER NR. 14*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper'
                      data-basealign='slide'
                      data-frames='[{"delay":10,"speed":500,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power4.easeOut"}]'
                      data-height='full'
                      data-hoffset="['0','0','0','0']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive='off'
                      data-responsive_offset='off'
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['0','0','0','0']"
                      data-whitespace='nowrap'
                      data-width='full'
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 18 }}
                    />
                    <div
                      className='studio-main-slide tp-caption tp-resizeme'
                      data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"}]'
                      data-height='none'
                      data-responsive_offset='on'
                      data-textalign="['center','center','center','center']"
                      data-type='text'
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                    >
                      <div className='container'>
                        <div className='studio-main-slide__inner'>
                          <div className='studio-main-slide__subtitle'>
                            Architecture
                          </div>
                          <div className='studio-main-slide__title-wrapper'>
                            <div className='studio-main-slide__title'>
                              Art Museum
                              <br />
                              Poland
                            </div>
                          </div>
                          <div className='studio-main-slide__text'>
                            This project designed &amp; building for purpose
                            protect the ocean and exhibition. With inspired from
                            sail, sponge and wind. Capri Ocean Musem was born
                          </div>
                          <a
                            className='studio-main-slide__link studio-main-slide__link_inverted'
                            href='#'
                          >
                            See project
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    data-easein='default'
                    data-easeout='default'
                    data-hideafterloop={0}
                    data-hideslideonmobile='off'
                    data-masterspeed={600}
                    data-rotate={0}
                    data-saveperformance='off'
                    data-slicey_shadow='0px 0px 0px 0px transparent'
                    data-slotamount='default'
                    data-transition='fade'
                  >
                    <img
                      alt=''
                      className='rev-slidebg'
                      data-bgposition='center center'
                      data-blurend={0}
                      data-blurstart={20}
                      data-duration={5000}
                      data-ease='Power2.easeInOut'
                      data-kenburns='on'
                      data-no-retina='data-no-retina'
                      data-offsetend='0 0'
                      data-offsetstart='0 0'
                      data-rotateend={0}
                      data-rotatestart={0}
                      data-scaleend={120}
                      data-scalestart={100}
                      src='img/home-slide-8.jpg'
                    />
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":300,"speed":1000,"frame":"0","from":"rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3700","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['150','150','100','100']"
                      data-hoffset="['-112','-43','-81','44']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-219','-184','-185','182']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 5 }}
                    />
                    {/* LAYER NR. 2*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":350,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3650","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','150','150','150']"
                      data-hoffset="['151','228','224','117']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-212','-159','71','-222']"
                      data-whitespace='nowrap'
                      data-width="['150','150','100','100']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 6 }}
                    />
                    {/*LAYER NR. 3*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":400,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3600","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['150','150','100','100']"
                      data-hoffset="['339','-442','104','-159']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['2','165','-172','219']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 7 }}
                    />
                    {/* LAYER NR. 4*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":450,"speed":1000,"frame":"0","from":"opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3550","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height={150}
                      data-hoffset="['162','216','-239','193']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['195','245','6','146']"
                      data-whitespace='nowrap'
                      data-width="['250','250','100','100']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 8 }}
                    />
                    {/* LAYER NR. 5*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3500","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','200','150','150']"
                      data-hoffset="['-186','-119','273','-223']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['269','217','-121','69']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 9 }}
                    />
                    {/* LAYER NR. 6*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":550,"speed":1000,"frame":"0","from":"opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3450","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','150','50','50']"
                      data-hoffset="['-325','292','162','-34']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['3','55','-275','-174']"
                      data-whitespace='nowrap'
                      data-width={150}
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 10 }}
                    />
                    {/* LAYER NR. 7*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":320,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3680","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['300','300','150','150']"
                      data-hoffset="['-429','523','-190','-306']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-327','173','181','480']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 11 }}
                    />
                    {/* LAYER NR. 8*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":360,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3640","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','100','100']"
                      data-hoffset="['422','-409','208','225']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-245','-72','294','-14']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 12 }}
                    />
                    {/* LAYER NR. 9*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":400,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3600","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','150','50']"
                      data-hoffset="['549','-445','28','58']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['236','400','316','287']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','200']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 13 }}
                    />
                    {/* LAYER NR. 10*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":440,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3560","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','100','100']"
                      data-hoffset="['-522','492','-151','262']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['339','-180','330','-141']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 14 }}
                    />
                    {/* LAYER NR. 11*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":480,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3520","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','200','150','150']"
                      data-hoffset="['-588','-375','-253','-207']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['72','-328','-172','-111']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 15 }}
                    />
                    {/* LAYER NR. 12*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":310,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3690","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['100','100','50','50']"
                      data-hoffset="['-37','73','-76','-100']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-401','-340','-293','-246']"
                      data-whitespace='nowrap'
                      data-width="['450','400','250','250']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 16 }}
                    />
                    {/* LAYER NR. 13*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":340,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3660","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['100','100','50','50']"
                      data-hoffset="['186','38','116','17']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['363','402','190','395']"
                      data-whitespace='nowrap'
                      data-width="['350','400','250','250']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 17 }}
                    />
                    {/* LAYER NR. 14*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper'
                      data-basealign='slide'
                      data-frames='[{"delay":10,"speed":500,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power4.easeOut"}]'
                      data-height='full'
                      data-hoffset="['0','0','0','0']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive='off'
                      data-responsive_offset='off'
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['0','0','0','0']"
                      data-whitespace='nowrap'
                      data-width='full'
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 18 }}
                    />
                    <div
                      className='studio-main-slide tp-caption tp-resizeme'
                      data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"}]'
                      data-height='none'
                      data-responsive_offset='on'
                      data-textalign="['center','center','center','center']"
                      data-type='text'
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                    >
                      <div className='container'>
                        <div className='studio-main-slide__inner'>
                          <div className='studio-main-slide__subtitle'>
                            Architecture
                          </div>
                          <div className='studio-main-slide__title-wrapper'>
                            <div className='studio-main-slide__title'>
                              Local Financial Office,
                              <br />
                              Iasi, Romania
                            </div>
                          </div>
                          <div className='studio-main-slide__text'>
                            This project designed &amp; building for purpose
                            protect the ocean and exhibition. With inspired from
                            sail, sponge and wind. Capri Ocean Musem was born
                          </div>
                          <a
                            className='studio-main-slide__link studio-main-slide__link_inverted'
                            href='#'
                          >
                            See project
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    data-easein='default'
                    data-easeout='default'
                    data-hideafterloop={0}
                    data-hideslideonmobile='off'
                    data-masterspeed={600}
                    data-rotate={0}
                    data-saveperformance='off'
                    data-slicey_shadow='0px 0px 0px 0px transparent'
                    data-slotamount='default'
                    data-transition='fade'
                  >
                    <img
                      alt=''
                      className='rev-slidebg'
                      data-bgposition='center center'
                      data-blurend={0}
                      data-blurstart={20}
                      data-duration={5000}
                      data-ease='Power2.easeInOut'
                      data-kenburns='on'
                      data-no-retina='data-no-retina'
                      data-offsetend='0 0'
                      data-offsetstart='0 0'
                      data-rotateend={0}
                      data-rotatestart={0}
                      data-scaleend={120}
                      data-scalestart={100}
                      src='img/home-slide-9.jpg'
                    />
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":300,"speed":1000,"frame":"0","from":"rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3700","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['150','150','100','100']"
                      data-hoffset="['-112','-43','-81','44']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-219','-184','-185','182']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 5 }}
                    />
                    {/* LAYER NR. 2*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":350,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3650","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','150','150','150']"
                      data-hoffset="['151','228','224','117']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-212','-159','71','-222']"
                      data-whitespace='nowrap'
                      data-width="['150','150','100','100']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 6 }}
                    />
                    {/*LAYER NR. 3*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":400,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3600","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['150','150','100','100']"
                      data-hoffset="['339','-442','104','-159']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['2','165','-172','219']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 7 }}
                    />
                    {/* LAYER NR. 4*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":450,"speed":1000,"frame":"0","from":"opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3550","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height={150}
                      data-hoffset="['162','216','-239','193']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['195','245','6','146']"
                      data-whitespace='nowrap'
                      data-width="['250','250','100','100']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 8 }}
                    />
                    {/* LAYER NR. 5*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3500","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','200','150','150']"
                      data-hoffset="['-186','-119','273','-223']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['269','217','-121','69']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 9 }}
                    />
                    {/* LAYER NR. 6*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":550,"speed":1000,"frame":"0","from":"opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3450","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','150','50','50']"
                      data-hoffset="['-325','292','162','-34']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['3','55','-275','-174']"
                      data-whitespace='nowrap'
                      data-width={150}
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 10 }}
                    />
                    {/* LAYER NR. 7*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":320,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3680","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['300','300','150','150']"
                      data-hoffset="['-429','523','-190','-306']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-327','173','181','480']"
                      data-whitespace='nowrap'
                      data-width="['250','250','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 11 }}
                    />
                    {/* LAYER NR. 8*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":360,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3640","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','100','100']"
                      data-hoffset="['422','-409','208','225']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-245','-72','294','-14']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 12 }}
                    />
                    {/* LAYER NR. 9*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":400,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3600","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','150','50']"
                      data-hoffset="['549','-445','28','58']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['236','400','316','287']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','200']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 13 }}
                    />
                    {/* LAYER NR. 10*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":440,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3560","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['250','250','100','100']"
                      data-hoffset="['-522','492','-151','262']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['339','-180','330','-141']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 14 }}
                    />
                    {/* LAYER NR. 11*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":480,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3520","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['200','200','150','150']"
                      data-hoffset="['-588','-375','-253','-207']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={300}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['72','-328','-172','-111']"
                      data-whitespace='nowrap'
                      data-width="['300','300','150','150']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 15 }}
                    />
                    {/* LAYER NR. 12*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":310,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3690","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['100','100','50','50']"
                      data-hoffset="['-37','73','-76','-100']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['-401','-340','-293','-246']"
                      data-whitespace='nowrap'
                      data-width="['450','400','250','250']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 16 }}
                    />
                    {/* LAYER NR. 13*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper tp-slicey tp-resizeme'
                      data-frames='[{"delay":340,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3660","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                      data-height="['100','100','50','50']"
                      data-hoffset="['186','38','116','17']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive_offset='on'
                      data-slicey_blurend={20}
                      data-slicey_blurstart={0}
                      data-slicey_offset={250}
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['363','402','190','395']"
                      data-whitespace='nowrap'
                      data-width="['350','400','250','250']"
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 17 }}
                    />
                    {/* LAYER NR. 14*/}
                    <div
                      className='tp-caption tp-shape tp-shapewrapper'
                      data-basealign='slide'
                      data-frames='[{"delay":10,"speed":500,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power4.easeOut"}]'
                      data-height='full'
                      data-hoffset="['0','0','0','0']"
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingtop='[0,0,0,0]'
                      data-responsive='off'
                      data-responsive_offset='off'
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-type='shape'
                      data-voffset="['0','0','0','0']"
                      data-whitespace='nowrap'
                      data-width='full'
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                      style={{ zIndex: 18 }}
                    />
                    <div
                      className='studio-main-slide tp-caption tp-resizeme'
                      data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"}]'
                      data-height='none'
                      data-responsive_offset='on'
                      data-textalign="['center','center','center','center']"
                      data-type='text'
                      data-x="['center','center','center','center']"
                      data-y="['middle','middle','middle','middle']"
                    >
                      <div className='container'>
                        <div className='studio-main-slide__inner'>
                          <div className='studio-main-slide__subtitle'>
                            Architecture
                          </div>
                          <div className='studio-main-slide__title-wrapper'>
                            <div className='studio-main-slide__title'>
                              Justin Burney Villa,
                              <br />
                              NY
                            </div>
                          </div>
                          <div className='studio-main-slide__text'>
                            This project designed &amp; building for purpose
                            protect the ocean and exhibition. With inspired from
                            sail, sponge and wind. Capri Ocean Musem was born
                          </div>
                          <a
                            className='studio-main-slide__link studio-main-slide__link_inverted'
                            href='#'
                          >
                            See project
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='collapse-block'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-lg-5'>
                  <div className='heading-group'>
                    <div className='heading-group__title'>
                      Easy &amp; Fast with our
                      <br />
                      progress
                    </div>
                    <div className='heading-group__text'>
                      Shall seas yielding a he, moveth said gathering under all
                      cattle were years fruit whose isn’t.
                    </div>
                  </div>
                  <div className='collapse-list'>
                    <div className='collapse-list__collapse'>
                      <a
                        className='collapse-list__collapse-head collapsed'
                        data-toggle='collapse'
                        href='#collapse1'
                      >
                        1. Concept
                        <span className='collapse-list__collapse-head-icon icon-chevron-up' />
                      </a>
                      <div
                        className='collapse-list__collapse-text collapse'
                        id='collapse1'
                      >
                        <div className='collapse-list__collapse-text-inner'>
                          Light. God in she’d thing Night itself. There signs
                          him divided tree heaven over also that open seasons
                          doesn’tliving isn’t god. Abundantly together life
                          heaven.
                        </div>
                      </div>
                    </div>
                    <div className='collapse-list__collapse'>
                      <a
                        className='collapse-list__collapse-head collapsed'
                        data-toggle='collapse'
                        href='#collapse2'
                      >
                        2. design &amp; development
                        <span className='collapse-list__collapse-head-icon icon-chevron-up' />
                      </a>
                      <div
                        className='collapse-list__collapse-text collapse'
                        id='collapse2'
                      >
                        <div className='collapse-list__collapse-text-inner'>
                          Light. God in she’d thing Night itself. There signs
                          him divided tree heaven over also that open seasons
                          doesn’tliving isn’t god. Abundantly together life
                          heaven.
                        </div>
                      </div>
                    </div>
                    <div className='collapse-list__collapse'>
                      <a
                        className='collapse-list__collapse-head collapsed'
                        data-toggle='collapse'
                        href='#collapse3'
                      >
                        3. Execution
                        <span className='collapse-list__collapse-head-icon icon-chevron-up' />
                      </a>
                      <div
                        className='collapse-list__collapse-text collapse'
                        id='collapse3'
                      >
                        <div className='collapse-list__collapse-text-inner'>
                          Light. God in she’d thing Night itself. There signs
                          him divided tree heaven over also that open seasons
                          doesn’tliving isn’t god. Abundantly together life
                          heaven.
                        </div>
                      </div>
                    </div>
                    <div className='collapse-list__collapse'>
                      <a
                        className='collapse-list__collapse-head collapsed'
                        data-toggle='collapse'
                        href='#collapse4'
                      >
                        4. handover
                        <span className='collapse-list__collapse-head-icon icon-chevron-up' />
                      </a>
                      <div
                        className='collapse-list__collapse-text collapse'
                        id='collapse4'
                      >
                        <div className='collapse-list__collapse-text-inner'>
                          Light. God in she’d thing Night itself. There signs
                          him divided tree heaven over also that open seasons
                          doesn’tliving isn’t god. Abundantly together life
                          heaven.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-6 offset-lg-1'>
                  <a
                    className='video-block popup-video'
                    href='https://vimeo.com/34741214'
                    target='_blank'
                  >
                    <img alt='' src='img/home-studio-video-image.jpg' />
                    <span className='video-block__play' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='studio-reviews'>
            <div className='container'>
              <div className='studio-reviews__head'>
                <div className='studio-reviews__title'>
                  5,000 Happy clients love Arquito
                </div>
                <a className='studio-reviews__more-link' href='#'>
                  More Review
                </a>
              </div>
              <div className='studio-reviews__slider swiper-container'>
                <div className='swiper-wrapper'>
                  <div className='studio-reviews__review swiper-slide'>
                    <div className='studio-reviews__review-status'>
                      Execellent -
                      <div className='studio-reviews__review-stars'>
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star studio-reviews__review-star_empty icofont-star' />
                      </div>
                    </div>
                    <div className='studio-reviews__review-text'>
                      "We've been very pleased with our experience working with
                      Arquito. Their team was incredibly helpful in helping us
                      find theperfect developer for our project. The work was
                      stellar, the communication was excellent and we couldn't
                      have been happier with the overall experience. We're
                      excited to work with Arquito for more projects in the
                      future!"
                    </div>
                  </div>
                  <div className='studio-reviews__review swiper-slide'>
                    <div className='studio-reviews__review-status'>
                      Execellent -
                      <div className='studio-reviews__review-stars'>
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star studio-reviews__review-star_empty icofont-star' />
                      </div>
                    </div>
                    <div className='studio-reviews__review-text'>
                      "We've been very pleased with our experience working with
                      Arquito. Their team was incredibly helpful in helping us
                      find theperfect developer for our project. The work was
                      stellar, the communication was excellent and we couldn't
                      have been happier with the overall experience. We're
                      excited to work with Arquito for more projects in the
                      future!"
                    </div>
                  </div>
                  <div className='studio-reviews__review swiper-slide'>
                    <div className='studio-reviews__review-status'>
                      Execellent -
                      <div className='studio-reviews__review-stars'>
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star icofont-star' />
                        <div className='studio-reviews__review-star studio-reviews__review-star_empty icofont-star' />
                      </div>
                    </div>
                    <div className='studio-reviews__review-text'>
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
              <div className='studio-reviews__buttons swiper-container'>
                <div className='swiper-wrapper'>
                  <div className='studio-reviews__person studio-reviews__person_active swiper-slide'>
                    <div className='studio-reviews__person-image'>
                      <img alt='' src='img/studio-review-person-1.jpg' />
                    </div>
                    <div className='studio-reviews__person-name'>
                      Robert Downer
                    </div>
                    <div className='studio-reviews__person-role'>
                      Creative Director at
                      <a href='#'>Envato LLC</a>
                    </div>
                  </div>
                  <div className='studio-reviews__person swiper-slide'>
                    <div className='studio-reviews__person-image'>
                      <img alt='' src='img/studio-review-person-2.jpg' />
                    </div>
                    <div className='studio-reviews__person-name'>
                      natalie noyes
                    </div>
                    <div className='studio-reviews__person-role'>
                      Managerment Product at
                      <a href='#'>Spotify</a>
                    </div>
                  </div>
                  <div className='studio-reviews__person swiper-slide'>
                    <div className='studio-reviews__person-image'>
                      <img alt='' src='img/studio-review-person-3.jpg' />
                    </div>
                    <div className='studio-reviews__person-name'>
                      Christ Evan
                    </div>
                    <div className='studio-reviews__person-role'>
                      Senior Visual Product Designer at
                      <a href='#'>FocusLabs</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='team-block'>
            <div className='container'>
              <div className='team-block__body team-block__body team-block__body_bordered'>
                <div className='heading-group heading-group heading-group_centered'>
                  <div className='heading-group__subtitle'>Meet Our team</div>
                  <div className='heading-group__title'>
                    Professional &amp; Friendly
                  </div>
                  <div className='heading-group__text'>
                    He moving, shall heaven Had won’t above. Shall seas yielding
                    a he, moveth said gathering under all cattle were years
                    fruit whose isn’t. Meat seed you’re. Seed so days creature
                    seed, i whales creature make.
                  </div>
                </div>
                <div className='team-block__slider-wrapper'>
                  <button
                    className='team-block__control team-block__control_prev icon-chevron-left'
                    type='button'
                  >
                    <span className='visually-hidden'>prev</span>
                  </button>
                  <button
                    className='team-block__control team-block__control_next icon-chevron-right'
                    type='button'
                  >
                    <span className='visually-hidden'>next</span>
                  </button>
                  <div className='team-block__slider swiper-container'>
                    <div className='swiper-wrapper'>
                      <div className='team-block__slide swiper-slide'>
                        <div className='team-block__image-wrapper'>
                          <img alt='' src='img/team-1.jpg' />
                          <div className='team-block__hover'>
                            <div className='socials'>
                              <a
                                className='socials__social icofont-twitter'
                                href='#'
                              >
                                <div className='visually-hidden'>twitter</div>
                              </a>
                              <a
                                className='socials__social icofont-facebook'
                                href='#'
                              >
                                <div className='visually-hidden'>facebook</div>
                              </a>
                              <a
                                className='socials__social icofont-google-plus'
                                href='#'
                              >
                                <div className='visually-hidden'>
                                  google plus
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='team-block__person-name'>
                          Alex Fergurson
                        </div>
                        <div className='team-block__person-role'>
                          CEO Founder
                        </div>
                      </div>
                      <div className='team-block__slide swiper-slide'>
                        <div className='team-block__image-wrapper'>
                          <img alt='' src='img/team-2.jpg' />
                          <div className='team-block__hover'>
                            <div className='socials'>
                              <a
                                className='socials__social icofont-twitter'
                                href='#'
                              >
                                <div className='visually-hidden'>twitter</div>
                              </a>
                              <a
                                className='socials__social icofont-facebook'
                                href='#'
                              >
                                <div className='visually-hidden'>facebook</div>
                              </a>
                              <a
                                className='socials__social icofont-google-plus'
                                href='#'
                              >
                                <div className='visually-hidden'>
                                  google plus
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='team-block__person-name'>
                          Laura Jefferson
                        </div>
                        <div className='team-block__person-role'>
                          CO Founder
                        </div>
                      </div>
                      <div className='team-block__slide swiper-slide'>
                        <div className='team-block__image-wrapper'>
                          <img alt='' src='img/team-3.jpg' />
                          <div className='team-block__hover'>
                            <div className='socials'>
                              <a
                                className='socials__social icofont-twitter'
                                href='#'
                              >
                                <div className='visually-hidden'>twitter</div>
                              </a>
                              <a
                                className='socials__social icofont-facebook'
                                href='#'
                              >
                                <div className='visually-hidden'>facebook</div>
                              </a>
                              <a
                                className='socials__social icofont-google-plus'
                                href='#'
                              >
                                <div className='visually-hidden'>
                                  google plus
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='team-block__person-name'>
                          Kylian Mbappe
                        </div>
                        <div className='team-block__person-role'>
                          Project Management
                        </div>
                      </div>
                      <div className='team-block__slide swiper-slide'>
                        <div className='team-block__image-wrapper'>
                          <img alt='' src='img/team-4.jpg' />
                          <div className='team-block__hover'>
                            <div className='socials'>
                              <a
                                className='socials__social icofont-twitter'
                                href='#'
                              >
                                <div className='visually-hidden'>twitter</div>
                              </a>
                              <a
                                className='socials__social icofont-facebook'
                                href='#'
                              >
                                <div className='visually-hidden'>facebook</div>
                              </a>
                              <a
                                className='socials__social icofont-google-plus'
                                href='#'
                              >
                                <div className='visually-hidden'>
                                  google plus
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='team-block__person-name'>
                          Jenifer Johanson
                        </div>
                        <div className='team-block__person-role'>
                          3D Visualization
                        </div>
                      </div>
                      <div className='team-block__slide swiper-slide'>
                        <div className='team-block__image-wrapper'>
                          <img alt='' src='img/team-2.jpg' />
                          <div className='team-block__hover'>
                            <div className='socials'>
                              <a
                                className='socials__social icofont-twitter'
                                href='#'
                              >
                                <div className='visually-hidden'>twitter</div>
                              </a>
                              <a
                                className='socials__social icofont-facebook'
                                href='#'
                              >
                                <div className='visually-hidden'>facebook</div>
                              </a>
                              <a
                                className='socials__social icofont-google-plus'
                                href='#'
                              >
                                <div className='visually-hidden'>
                                  google plus
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='team-block__person-name'>
                          Laura Jefferson
                        </div>
                        <div className='team-block__person-role'>
                          CO Founder
                        </div>
                      </div>
                      <div className='team-block__slide swiper-slide'>
                        <div className='team-block__image-wrapper'>
                          <img alt='' src='img/team-3.jpg' />
                          <div className='team-block__hover'>
                            <div className='socials'>
                              <a
                                className='socials__social icofont-twitter'
                                href='#'
                              >
                                <div className='visually-hidden'>twitter</div>
                              </a>
                              <a
                                className='socials__social icofont-facebook'
                                href='#'
                              >
                                <div className='visually-hidden'>facebook</div>
                              </a>
                              <a
                                className='socials__social icofont-google-plus'
                                href='#'
                              >
                                <div className='visually-hidden'>
                                  google plus
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='team-block__person-name'>
                          Kylian Mbappe
                        </div>
                        <div className='team-block__person-role'>
                          Project Management
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='awards-block'>
            <div className='container'>
              <div className='heading-group heading-group heading-group_centered'>
                <div className='heading-group__subtitle'>our winning</div>
                <div className='heading-group__title'>
                  Achievements &amp; Prizes
                </div>
              </div>
              <div className='awards-block__body'>
                <div className='awards-block__item'>
                  <div className='awards-block__year'>2019</div>
                  <div className='awards-block__list'>
                    <div className='awards-block__text'>
                      OAS Development Awards Shortlisted - Best West End
                      New-Build
                      <div className='awards-block__text-footer'>
                        Central Bank, Scotland
                      </div>
                    </div>
                    <div className='awards-block__text'>
                      OAS Development Awards Shortlisted - Best City Development
                      <div className='awards-block__text-footer'>
                        Capri Ocean Museum
                      </div>
                    </div>
                    <div className='awards-block__text'>
                      Building Awards 2019 Shortlisted - Small Project of the
                      Year
                      <div className='awards-block__text-footer'>
                        Dustin Villa, Spain
                      </div>
                    </div>
                    <div className='awards-block__text'>
                      OAS Development Awards Shortlisted - Best City Development
                      <div className='awards-block__text-footer'>
                        Kristina House, Germny
                      </div>
                    </div>
                  </div>
                </div>
                <div className='awards-block__item'>
                  <div className='awards-block__year'>2017</div>
                  <div className='awards-block__list'>
                    <div className='awards-block__text'>
                      London Planning Awards Shortlisted - Best Place to Work
                      <div className='awards-block__text-footer'>
                        Local Financial Office, Iasi, Romania
                      </div>
                    </div>
                    <div className='awards-block__text'>
                      Blueprint Awards Winner – Best Interior Project (Leisure)
                      <div className='awards-block__text-footer'>
                        Justin burney Villa, NY
                      </div>
                    </div>
                  </div>
                </div>
                <div className='awards-block__item'>
                  <div className='awards-block__year'>2016</div>
                  <div className='awards-block__list'>
                    <div className='awards-block__text'>
                      Structural Steel Design Awards Winner
                      <div className='awards-block__text-footer'>
                        Art Museum, Poland
                      </div>
                    </div>
                    <div className='awards-block__text'>
                      FX Interior Design Awards Shortlisted – Best Leisure
                      <div className='awards-block__text-footer'>
                        David Villa, Denmark
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='studio-posts'>
            <div className='heading-group heading-group heading-group_centered'>
              <div className='heading-group__subtitle'>Our Blog</div>
              <div className='heading-group__title'>
                Latest posts from our press
              </div>
            </div>
            <div className='posts'>
              <div className='container'>
                <div className='row'>
                  <div className='posts__item col-12 col-lg-4'>
                    <a className='posts__item-inner' href='#'>
                      <img
                        alt=''
                        className='posts__image'
                        src='img/studio-post-image-1.jpg'
                      />
                      <span className='posts__item-content'>
                        <span className='posts__item-footer'>
                          <span className='posts__category'>Inspiration</span>
                          <span className='posts__date'>Oct 20, 2019</span>
                        </span>
                        <span className='posts__item-title'>
                          Top 20 AIA Architecture Winners: Tropical Villa
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className='posts__item col-12 col-lg-4'>
                    <a className='posts__item-inner' href='#'>
                      <img
                        alt=''
                        className='posts__image'
                        src='img/studio-post-image-2.jpg'
                      />
                      <span className='posts__item-content'>
                        <span className='posts__item-footer'>
                          <span className='posts__category'>News</span>
                          <span className='posts__date'>Oct 20, 2019</span>
                        </span>
                        <span className='posts__item-title'>
                          Minimalist Trending in Modern Architecture 2019
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className='posts__item col-12 col-lg-4'>
                    <a className='posts__item-inner' href='#'>
                      <img
                        alt=''
                        className='posts__image'
                        src='img/studio-post-image-3.jpg'
                      />
                      <span className='posts__item-content'>
                        <span className='posts__item-footer'>
                          <span className='posts__category'>Inspiration</span>
                          <span className='posts__date'>Oct 15, 2019</span>
                        </span>
                        <span className='posts__item-title'>
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
        <footer className='footer-studio footer'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='footer-studio__column col-6 col-xl-3'>
                <div className='footer-studio__group-title'>Company</div>
                <ul className='footer-studio__list'>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      About
                    </a>
                  </li>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      Contact
                    </a>
                  </li>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      Career
                    </a>
                  </li>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer-studio__column col-6 col-xl-3'>
                <div className='footer-studio__group-title'>Help Center</div>
                <ul className='footer-studio__list'>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      FAQs
                    </a>
                  </li>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      Term &amp; Conditions
                    </a>
                  </li>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      Privacy
                    </a>
                  </li>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      How It Works
                    </a>
                  </li>
                  <li className='footer-studio__list-item'>
                    <a className='footer-studio__list-link' href='#'>
                      Return
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer-studio__column col-12 col-sm-6 col-xl-3'>
                <div className='footer-studio__group-title'>Get In Touch</div>
                <p>
                  17 Princess Road, London, Greater London,
                  <br />
                  NW18JR, United Kingdom
                </p>
                <p>
                  <a href='mailto:hello@arquito.uk'>hello@arquito.uk</a>
                </p>
                <p>(+0084) 912-3548-073</p>
              </div>
              <div className='footer-studio__column col-12 col-sm-6 col-xl-3'>
                <div className='footer-studio__group-title'>Newsletter</div>
                <p>Subscribe and get 10% off from our furniture store</p>
                <form action='#' className='footer-studio__form'>
                  <input
                    className='footer-studio__input'
                    placeholder='Enter your email...'
                    type='text'
                  />
                  <button className='footer-studio__submit'>
                    Subscribe
                    <span className='footer-studio__submit-icon icon-chevron-right' />
                  </button>
                </form>
              </div>
            </div>
            <div className='footer-studio__bottom'>
              <div className='row'>
                <div className='footer-studio__column col-12 col-sm-6'>
                  <div className='footer-studio__copyright'>
                    © 2019
                    <strong>ARQUITO.</strong>
                    All Rights Reserved. Design by
                    <a href='#'>Logan Cee</a>
                  </div>
                </div>
                <div className='footer-studio__column col-12 col-sm-6 col-lg-3 offset-lg-3'>
                  <div className='footer-studio__socials'>
                    <a
                      className='footer-studio__social icofont-twitter'
                      href='#'
                    >
                      <div className='visually-hidden'>twitter</div>
                    </a>
                    <a
                      className='footer-studio__social icofont-facebook'
                      href='#'
                    >
                      <div className='visually-hidden'>facebook</div>
                    </a>
                    <a
                      className='footer-studio__social icofont-behance'
                      href='#'
                    >
                      <div className='visually-hidden'>behance</div>
                    </a>
                    <a
                      className='footer-studio__social icofont-google-plus'
                      href='#'
                    >
                      <div className='visually-hidden'>google plus</div>
                    </a>
                    <a
                      className='footer-studio__social icofont-linkedin'
                      href='#'
                    >
                      <div className='visually-hidden'>linkedin</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/*JS*/}
      {/*Revolution JS*/}
      {/*Revolution Panorama Add-On JS*/}
      {/* Revolution Slicey Add-On JS*/}
      {/* Revolution Panorama extensions JS (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading)*/}
      {/*Theme JS*/}
    </div>
  );
};

export default Home;
