import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./../assets/vendors/bootstrap/css/bootstrap.min.css";
import "./../assets/vendors/fontawesome/css/all.min.css";
import "./../assets/vendors/jquery-ui/jquery-ui.min.css";
import "./../assets/vendors/modal-video/modal-video.min.css";
import "./../assets/vendors/lightbox/dist/css/lightbox.min.css";
import "./../assets/vendors/slick/slick.css";
import "./../assets/vendors/slick/slick-theme.css";
import "./../style.css";

function Landing() {
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const handleBookNowClick = () => {
    // navigate("/booking");
    window.location.href = "/booking";
  };
  const handleLogoClick = () => {
    window.location.href = "/landing";
  };

  return (
    <div className="home">
      {/* <div id="siteLoader" className="site-loader">
         <div className="preloader-content">
            <img src="./images/loader1.gif" alt="" />
         </div>
      </div> */}
      <div id="page" className="full-page">
        <header
          id="masthead"
          className="site-header header-primary"
          // style={{ visibility: "hidden" }}
          style={{ display: "none" }}
        >
          {/* <!-- header html start --> */}
          <div className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 d-none d-lg-block">
                  <div className="header-contact-info">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-phone-alt"></i> +01 (977) 2599 12
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@Travel.com">
                          <i className="fas fa-envelope"></i> company@domain.com
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i> 3146 Koontz
                        Lane, California
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                  <div className="header-social social-links">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fab fa-facebook-f"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fab fa-instagram"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-search-icon">
                    <button className="search-icon">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-header">
            <div className="container d-flex justify-content-between align-items-center">
              <div className="site-identity">
                <h1 className="site-title">
                  <a href="index.html">
                    <img
                      className="white-logo"
                      src="./images/logo (2).png"
                      alt="logo"
                    />
                    <img
                      className="black-logo"
                      src="./images/GLOOVE_marca_negro.png"
                      alt="logo"
                    />
                  </a>
                </h1>
              </div>
              <div className="main-navigation d-none d-lg-block">
                <nav id="navigation" className="navigation">
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="index.html">Inicio</a>
                      <ul>
                        <li>
                          <a href="index-v2.html">Home 2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Tour</a>
                      <ul>
                        <li>
                          <a href="destination.html">Destination</a>
                        </li>
                        <li>
                          <a href="tour-packages.html">Tour Packages</a>
                        </li>
                        <li>
                          <a href="package-offer.html">Package Offer</a>
                        </li>
                        <li>
                          <a href="package-detail.html">Package Detail</a>
                        </li>
                        <li>
                          <a href="tour-cart.html">Tour Cart</a>
                        </li>
                        <li>
                          <a href="booking.html">Package Booking</a>
                        </li>
                        <li>
                          <a href="confirmation.html">Confirmation</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="service.html">Service</a>
                        </li>
                        <li>
                          <a href="career.html">Career</a>
                        </li>
                        <li>
                          <a href="career-detail.html">Career Detail</a>
                        </li>
                        <li>
                          <a href="tour-guide.html">Tour Guide</a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="single-page.html">Single Page</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ Page</a>
                        </li>
                        <li>
                          <a href="testimonial-page.html">Testimonial Page</a>
                        </li>
                        <li>
                          <a href="popup.html">Popup</a>
                        </li>
                        <li>
                          <a href="search-page.html">Search Page</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                        <li>
                          <a href="comming-soon.html">Comming Soon</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="wishlist-page.html">Wishlist</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="single-page.html">Shop</a>
                      <ul>
                        <li>
                          <a href="product-right.html">Shop Archive</a>
                        </li>
                        <li>
                          <a href="product-detail.html">Shop Single</a>
                        </li>
                        <li>
                          <a href="product-cart.html">Shop Cart</a>
                        </li>
                        <li>
                          <a href="product-checkout.html">Shop Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul>
                        <li>
                          <a href="blog-archive.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-archive-left.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-archive-both.html">Blog Both Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Dashboard</a>
                      <ul>
                        <li>
                          <a href="admin/dashboard.html">Dashboard</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">User</a>
                          <ul>
                            <li>
                              <a href="admin/user.html">User List</a>
                            </li>
                            <li>
                              <a href="admin/user-edit.html">User Edit</a>
                            </li>
                            <li>
                              <a href="admin/new-user.html">New User</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="admin/db-booking.html">Booking</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="admin/db-package.html">Package</a>
                          <ul>
                            <li>
                              <a href="admin/db-package-active.html">
                                Package Active
                              </a>
                            </li>
                            <li>
                              <a href="admin/db-package-pending.html">
                                Package Pending
                              </a>
                            </li>
                            <li>
                              <a href="admin/db-package-expired.html">
                                Package Expired
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="admin/db-comment.html">Comments</a>
                        </li>
                        <li>
                          <a href="admin/db-wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="admin/login.html">Login</a>
                        </li>
                        <li>
                          <a href="admin/forgot.html">Forget Password</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-btn">
                <button className="button-primary">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="mobile-menu-container"></div>
        </header>
        {/* <div id="de-preloader" /> */}
        {/* page preloader close */}
        {/* header begin */}
        <header
          className="transparent scroll-light has-topbar"
          style={{ backgroundColor: "#156B7A" }}
        >
          {/* <div id="topbar" className="topbar-dark text-light">
            <div className="container">
              <div className="topbar-left xs-hide">
                <div className="topbar-widget">
                  <div className="topbar-widget">
                    <a href="#">
                      <i className="fa fa-phone" />
                      +208 333 9296
                    </a>
                  </div>
                  <div className="topbar-widget">
                    <a href="#">
                      <i className="fa fa-envelope" />
                      contact@rentaly.com
                    </a>
                  </div>
                  <div className="topbar-widget">
                    <a href="#">
                      <i className="fa fa-clock-o" />
                      Mon - Fri 08.00 - 18.00
                    </a>
                  </div>
                </div>
              </div>
              <div className="topbar-right">
                <div className="social-icons">
                  <a href="#">
                    <i className="fa fa-facebook fa-lg" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter fa-lg" />
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube fa-lg" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest fa-lg" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram fa-lg" />
                  </a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div> */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex sm-pt10">
                  <div className="de-flex-col">
                    <div className="de-flex-col">
                      {/* logo begin */}
                      <div id="logo" style={{ cursor: "pointer" }}>
                        {/* <a href="index.html"> */}
                        <img
                          className="logo-1"
                          src="images/GLOOVE_marca_tagline_blanco.png"
                          alt=""
                          onClick={handleLogoClick}
                          style={{ width: "150px", height: "60px" }}
                        />
                        <img
                          className="logo-2"
                          src="images/GLOOVE_marca_tagline_blanco.png"
                          alt=""
                          onClick={handleLogoClick}
                          style={{ width: "150px", height: "60px" }}
                        />
                        {/* </a> */}
                      </div>
                      {/* logo close */}
                    </div>
                  </div>
                  <div className="de-flex-col header-col-mid">
                    <ul id="mainmenu" style={{ height: "auto" }}>
                      <li>
                        <a
                          className="menu-item"
                          href="index.html"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          Inicio
                        </a>
                        <ul>
                          <li>
                            <a
                              className="menu-item"
                              href="02_dark-index-1.html"
                            >
                              New: Homepage 1 Dark
                            </a>
                          </li>
                          <li>
                            <a
                              className="menu-item"
                              href="02_dark-index-2.html"
                            >
                              New: Homepage 2 Dark
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="index.html">
                              Homepage Main
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="index-2.html">
                              Homepage 2
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="index-3.html">
                              Homepage 3
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="index-4.html">
                              Homepage 4
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="index-5.html">
                              Homepage 5
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="index-6.html">
                              Homepage 6
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="menu-item"
                          href="cars.html"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          Reservas
                        </a>
                        <ul>
                          <li>
                            <a className="menu-item" href="cars.html">
                              Cars List 1
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="02_dark-cars.html">
                              Cars List 1 Dark
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="cars-list.html">
                              Cars List 2
                            </a>
                          </li>
                          <li>
                            <a
                              className="menu-item"
                              href="02_dark-cars-list.html"
                            >
                              Cars List 2 Dark
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="car-single.html">
                              Cars Single
                            </a>
                          </li>
                          <li>
                            <a
                              className="menu-item"
                              href="02_dark-car-single.html"
                            >
                              Cars Single Dark
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="menu-item"
                          href="booking.html"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          Experiencias
                        </a>
                      </li>
                      <li>
                        <a
                          className="menu-item"
                          href="account-dashboard.html"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          Sobre nosotros
                        </a>
                        <ul>
                          <li>
                            <a
                              className="menu-item"
                              href="account-dashboard.html"
                            >
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a
                              className="menu-item"
                              href="account-profile.html"
                            >
                              My Profile
                            </a>
                          </li>
                          <li>
                            <a
                              className="menu-item"
                              href="account-booking.html"
                            >
                              My Orders
                            </a>
                          </li>
                          <li>
                            <a
                              className="menu-item"
                              href="account-favorite.html"
                            >
                              My Favorite Cars
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="menu-item"
                          href="#"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          Blog
                        </a>
                        <ul>
                          <li>
                            <a className="menu-item" href="about.html">
                              About Us
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="contact.html">
                              Contact
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="login.html">
                              Login
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="register.html">
                              Register
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="404.html">
                              Page 404
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="menu-item"
                          href="#"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          Contacto
                        </a>
                        <ul>
                          <li>
                            <a
                              className="menu-item"
                              href="news-standart-right-sidebar.html"
                            >
                              News Standard
                            </a>
                            <ul>
                              <li>
                                <a
                                  className="menu-item"
                                  href="news-standart-right-sidebar.html"
                                >
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a
                                  className="menu-item"
                                  href="news-standart-left-sidebar.html"
                                >
                                  Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a
                                  className="menu-item"
                                  href="news-standart-no-sidebar.html"
                                >
                                  No Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              className="menu-item"
                              href="news-grid-right-sidebar.html"
                            >
                              News Grid
                            </a>
                            <ul>
                              <li>
                                <a
                                  className="menu-item"
                                  href="news-grid-right-sidebar.html"
                                >
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a
                                  className="menu-item"
                                  href="news-grid-left-sidebar.html"
                                >
                                  Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a
                                  className="menu-item"
                                  href="news-grid-no-sidebar.html"
                                >
                                  No Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <a className="menu-item" href="#">
                          Elements
                        </a>
                        <ul>
                          <li>
                            <a className="menu-item" href="preloader.html">
                              Preloader
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="icon-boxes.html">
                              Icon Boxes
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="badge.html">
                              Badge
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="counters.html">
                              Counters
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="gallery-popup.html">
                              Gallery Popup
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="icons-elegant.html">
                              Icons Elegant
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="icons-etline.html">
                              Icons Etline
                            </a>
                          </li>
                          <li>
                            <a
                              className="menu-item"
                              href="icons-font-awesome.html"
                            >
                              Icons Font Awesome
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="map.html">
                              Map
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="modal.html">
                              Modal
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="popover.html">
                              Popover
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="tabs.html">
                              Tabs
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="tooltips.html">
                              Tooltips
                            </a>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </div>
                  <div className="de-flex-col">
                    <div className="menu_side_area">
                      <button
                        className="btn-main"
                        onClick={handleBookNowClick}
                        style={{
                          backgroundColor: "white",
                          color: "#156B7A",
                          fontSize: "20px",
                          padding: "10px 30px",
                          borderRadius: "25px",
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        {/* <img
                          src="./images/user-img.png"
                          style={{ width: "20px", height: "20px" }}
                        ></img> */}
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{
                            width: "20px",
                            height: "20px",
                            marginTop: "4px",
                          }}
                        />
                        Login
                      </button>
                      <span id="menu-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main id="content" className="site-main" style={{ padding: "0px" }}>
          {/* <!-- Home slider html start brightstar --> */}
          <section
            className="home-slider-section"
            style={{ padding: "0px", position: "relative" }}
          >
            <div className="home-slider">
              <Carousel
                className="home-slider"
                responsive={responsive}
                showDots={true}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3500}
                dotListClass="custom-dot-list-style"
                slidesToSlide={1}
              >
                <div className="home-banner-items">
                  <div
                    className="banner-inner-wrap"
                    style={{
                      backgroundImage: "url(./images/slider-1.png)",
                      backgroundSize: "cover !important",
                    }}
                  ></div>
                  <div className="banner-content-wrap">
                    <div className="container">
                      <div className="banner-content text-center">
                        <h2
                          className="banner-title"
                          style={{ fontSize: "70px" }}
                        >
                          Maximiza el potencial de tu propiedad con Gloove
                        </h2>
                        <p>
                          Gestión experta, ingresos optimizados y tranquilidad
                          total
                        </p>
                        {/* <a href="#" className="button-primary">
                          CONTINUE READING
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="home-banner-items">
                  <div
                    className="banner-inner-wrap"
                    style={{
                      backgroundImage: "url(./images/slider-2.png)",
                      backgroundSize: "cover !important",
                    }}
                  ></div>
                  <div className="banner-content-wrap">
                    <div className="container">
                      <div className="banner-content text-center">
                        <h2
                          className="banner-title"
                          style={{ fontSize: "70px" }}
                        >
                          Maximiza el potencial de tu propiedad con Gloove
                        </h2>
                        <p>
                          Gestión experta, ingresos optimizados y tranquilidad
                          total
                        </p>
                        {/* <a href="#" className="button-primary">
                          CONTINUE READING
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
              </Carousel>
              {/* <img src="./images/happy (9).png" alt="" style={{width: "50px", height: "50px", backgroundColor: "rgb(21, 107, 122)"}}></img> */}
              <div
                className=""
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  right: "0%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a href="#">
                  <img
                    src="./images/happy (9).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="./images/happy (6).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="./images/happy (7).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="./images/happy (8).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
              </div>
            </div>
          </section>
          {/* <!-- slider html start --> */}
          {/* <!-- Home search field html start --> */}
          <div
            className="trip-search-section shape-search-section"
            style={{ padding: "0px" }}
          >
            <div className="slider-shape"></div>
            <div className="container">
              <div className="trip-search-inner white-bg d-flex">
                <div className="input-group">
                  <label> Search Destination* </label>
                  <input type="text" name="s" placeholder="Enter Destination" />
                </div>
                <div className="input-group">
                  <label> Pax Number* </label>
                  <input type="text" name="s" placeholder="No.of People" />
                </div>
                <div className="input-group width-col-3">
                  <label> Checkin Date* </label>
                  <i className="far fa-calendar"></i>
                  <input
                    className="input-date-picker"
                    type="text"
                    name="s"
                    placeholder="MM / DD / YY"
                    autoComplete="off"
                    readOnly="readonly"
                  />
                </div>
                <div className="input-group width-col-3">
                  <label> Checkout Date* </label>
                  <i className="far fa-calendar"></i>
                  <input
                    className="input-date-picker"
                    type="text"
                    name="s"
                    placeholder="MM / DD / YY"
                    autoComplete="off"
                    readOnly="readonly"
                  />
                </div>
                <div className="input-group width-col-3">
                  <label className="screen-reader-text"> Search </label>
                  <input
                    type="submit"
                    name="travel-search"
                    value="INQUIRE NOW"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- search search field html end --> */}
          <section className="destination-section">
            <div className="container">
              <div className="section-heading">
                <div className="row align-items-end">
                  <h3
                    className="dash-style"
                    style={{ fontSize: "28px", color: "#156B7A" }}
                  >
                    Explora nuestras viviendas: Espacios únicos donde cada casa
                    cuenta una historia
                  </h3>
                  <div className="col-lg-7">
                    <h2>Nuestras mejores viviendas</h2>
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="section-disc"
                      style={{ textAlign: "center", color: "black" }}
                    >
                      Convierte tu propiedad en una experiencia inolvidable para
                      cada huésped
                    </div>
                  </div>
                </div>
              </div>
              <div className="destination-inner destination-three-column">
                <div className="row">
                  <div className="col-lg-7" style={{ paddingTop: "10px" }}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="desti-item overlay-desti-item">
                          <figure className="desti-image">
                            <img src="./images/man-1.png" alt="" />
                          </figure>
                          <div className="meta-cat bg-meta-cat">
                            <a href="#">THAILAND</a>
                          </div>
                          <div className="desti-content">
                            <h3>
                              <a href="#">Disney Land</a>
                            </h3>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 4"
                            >
                              <span style={{ width: "53%" }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="desti-item overlay-desti-item">
                          <figure className="desti-image">
                            <img src="./images/man-2.png" alt="" />
                          </figure>
                          <div className="meta-cat bg-meta-cat">
                            <a href="#">NORWAY</a>
                          </div>
                          <div className="desti-content">
                            <h3>
                              <a href="#">Besseggen Ridge</a>
                            </h3>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "100%" }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5" style={{ scale: "0.97" }}>
                    <div className="row">
                      <div className="col-md-6 col-xl-12">
                        <div className="desti-item overlay-desti-item">
                          <figure className="desti-image">
                            <img src="./images/man-3.png" alt="" />
                          </figure>
                          <div className="meta-cat bg-meta-cat">
                            <a href="#">NEW ZEALAND</a>
                          </div>
                          <div className="desti-content">
                            <h3>
                              <a href="#">Oxolotan City</a>
                            </h3>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "100%" }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-12">
                        <div className="desti-item overlay-desti-item">
                          <figure className="desti-image">
                            <img src="./images/man-4.png" alt="" />
                          </figure>
                          <div className="meta-cat bg-meta-cat">
                            <a href="#">SINGAPORE</a>
                          </div>
                          <div className="desti-content">
                            <h3>
                              <a href="#">Marina Bay Sand City</a>
                            </h3>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 4"
                            >
                              <span style={{ width: "60%" }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="btn-wrap text-center">
                  <a href="#" className="button-primary">
                    MORE DESTINATION
                  </a>
                </div> */}
              </div>
            </div>
          </section>
          {/* <!-- Home packages section html start --> */}
          {/* <section className="package-section">
            <div className="container">
              <div className="section-heading text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h5 className="dash-style">EXPLORE GREAT PLACES</h5>
                    <h2>POPULAR PACKAGES</h2>
                    <p>
                      Mollit voluptatem perspiciatis convallis elementum
                      corporis quo veritatis aliquid blandit, blandit torquent,
                      odit placeat. Adipiscing repudiandae eius cursus? Nostrum
                      magnis maxime curae placeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="package-inner">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="./images/2.png" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$1,900 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock"></i>
                              7D/6N
                            </li>
                            <li>
                              <i className="fas fa-user-friends"></i>
                              People: 5
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              Malaysia
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Sunset view of beautiful lakeside resident
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(25 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "60%" }}></span>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now<i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List<i className="far fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="./images/15.png" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$1,230 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock"></i>
                              5D/4N
                            </li>
                            <li>
                              <i className="fas fa-user-friends"></i>
                              People: 8
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              Canada
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Experience the natural beauty of island
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(17 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "100%" }}></span>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now<i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List<i className="far fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="./images/16.png" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$2,000 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock"></i>
                              6D/5N
                            </li>
                            <li>
                              <i className="fas fa-user-friends"></i>
                              People: 6
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              Portugal
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Vacation to the water city of Portugal
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(22 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "80%" }}></span>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now<i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List<i className="far fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap text-center">
                  <a href="#" className="button-primary">
                    VIEW ALL PACKAGES
                  </a>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- packages html end --> */}
          {/* <!-- Home callback section html start --> */}
          <section className="callback-section" style={{ padding: "0px" }}>
            <div className="container">
              <div className="row no-gutters align-items-center">
                <div className="col-lg-5">
                  <div
                    className="callback-img"
                    style={{ backgroundImage: "url(./images/fly_12.jpg)" }}
                  >
                    <div className="video-button">
                      <a id="video-container" data-video-id="IUN664s7N-c">
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="callback-inner">
                    <div className="section-heading section-heading-white">
                      <h3 className="dash-style">
                        Maximizamos tu éxito y satisfacción
                      </h3>
                      <h2
                        style={{
                          textAlign: "right",
                          paddingRight: "10%",
                          fontSize: "60px",
                          letterSpacing: "2px",
                          wordSpacing: "5px",
                        }}
                      >
                        BE HAPPY <br />
                        BE{" "}
                        <span
                          style={{
                            textShadow: "0 0px 20px rgba(255,255,255,1)",
                          }}
                        >
                          GLOOVE
                        </span>
                      </h2>
                      <p style={{ fontSize: "20px" }}>
                        Nuestros Servicios Estrella
                      </p>
                    </div>
                    <div className="callback-counter-wrap">
                      <div className="counter-item">
                        <div className="counter-icon">
                          <img
                            src="./images/happy (2).png"
                            alt=""
                            style={{ scale: "1.3" }}
                          />
                        </div>
                        <div className="counter-content">
                          {/* <span className="counter-no">
                            <span className="counter">500</span>K+
                          </span> */}
                          <span
                            className="counter-text"
                            style={{ fontSize: "20px" }}
                          >
                            Aperturas <br />
                            inteligentes
                          </span>
                        </div>
                      </div>
                      <div className="counter-item">
                        <div className="counter-icon">
                          <img
                            src="./images/happy (3).png"
                            alt=""
                            style={{ scale: "1.3" }}
                          />
                        </div>
                        <div className="counter-content">
                          {/* <span className="counter-no">
                            <span className="counter">250</span>K+
                          </span> */}
                          <span
                            className="counter-text"
                            style={{ fontSize: "20px" }}
                          >
                            Soporte Integral
                            <br /> 24/7
                          </span>
                        </div>
                      </div>
                      <div className="counter-item">
                        <div className="counter-icon">
                          <img
                            src="./images/happy (4).png"
                            alt=""
                            style={{ scale: "1.3" }}
                          />
                        </div>
                        <div className="counter-content">
                          {/* <span className="counter-no">
                            <span className="counter">15</span>K+
                          </span> */}
                          <span
                            className="counter-text"
                            style={{ fontSize: "20px" }}
                          >
                            Autogestión
                          </span>
                        </div>
                      </div>
                      <div className="counter-item">
                        <div className="counter-icon">
                          <img
                            src="./images/happy (5).png"
                            alt=""
                            style={{ scale: "1.3" }}
                          />
                        </div>
                        <div className="counter-content">
                          {/* <span className="counter-no">
                            <span className="counter">10</span>K+
                          </span> */}
                          <span
                            className="counter-text"
                            style={{ fontSize: "20px" }}
                          >
                            Optimización del
                            <br /> precio
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="support-area"
                      style={{
                        borderRadius: "80px",
                        backgroundColor: "#22AA22",
                        padding: "10px 50px",
                      }}
                    >
                      <div className="support-icon">
                        {/* <img
                          src="./images/icon5.png"
                          alt=""
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50px",
                            padding: "5px",
                          }}
                        /> */}
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{
                            width: "20px",
                            height: "20px",
                            color:"white",
                            border: "2px solid white",
                            borderRadius: "50px",
                            padding: "10px",
                          }}
                        />
                      </div>
                      <div className="support-content">
                        {/* <h4>Our 24/7 Emergency Phone Services</h4> */}
                        <h3>
                          <a
                            href="#"
                            style={{
                              color: "white",
                              width: "fit-content",
                              fontWeight: "200",
                            }}
                          >
                            ¡Hablemos!
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- callback html end --> */}
          {/* <!-- Home activity section html start --> */}
          <section className="activity-section" style={{ padding: "0px" }}>
            <div className="container">
              <div
                className="section-heading text-center"
                style={{ marginBottom: "0px" }}
              >
                <div className="row">
                  <h3
                    className="dash-style"
                    style={{
                      color: "#156B7A",
                      textAlign: "center",
                      width: "fit-content",
                      margin: "auto",
                      marginBottom: "40px",
                    }}
                  >
                    Nuestro Éxito en el Alojamiento Turístico
                  </h3>
                  <div className="col-lg-8 offset-lg-2">
                    <h3>¿CÓMO FUNCIONAMOS?</h3>
                    {/* <p>
                      Mollit voluptatem perspiciatis convallis elementum
                      corporis quo veritatis aliquid blandit, blandit torquent,
                      odit placeat. Adipiscing repudiandae eius cursus? Nostrum
                      magnis maxime curae placeat.
                    </p> */}
                  </div>
                </div>
              </div>
              <div
                className="activity-inner row"
                style={{ display: "flex", marginLeft: "8%", marginTop: "20px" }}
              >
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                      <a href="#">
                        <img
                          src="./images/bot-10.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Una vez se firma el contrato, <br />
                        procedemos a la realizaciön <br />
                        de las fotos y el pedido de la <br />
                        domötica
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                      <a href="#">
                        <img
                          src="./images/bot-20.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Pasados unos dias, <br />
                        instalamos la domética en la <br />
                        propiedad y ultimamos todo <br />
                        tipo de detalles
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                      <a href="#">
                        <img
                          src="./images/bot-30.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Elaboramos y posteriormente <br />
                        publicamos los anuncios en <br />
                        todas las plataformas con las <br />
                        que trabajamos
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                      <a href="#">
                        <img
                          src="./images/bot-40.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Comenzamos con el proceso <br />
                        comercial con todos los <br />
                        clientes interesados en la <br />
                        vivienda
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                      <a href="#">
                        <img
                          src="./images/bot-50.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Pasados unos dia la vivienda <br />
                        comienza a generar sus <br />
                        primeros ingresos
                      </h5>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-2 col-md-4 col-sm-5">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <a href="#">
                        <img
                          src="./images/icon11.png"
                          alt=""
                          style={{ width: "auto" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h4>
                        <a href="#">Exploring</a>
                      </h4>
                      <p>25 Destination</p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <button
                  style={{
                    width: "fit-content",
                    margin: "auto",
                    padding: "30px 40px",
                    border: "0px",
                    borderRadius: "100px",
                    color: "white",
                    fontSize: "26px",
                    backgroundColor: "#156B7A",
                  }}
                >
                  ¡Quiero saber más!
                </button>
              </div>
            </div>
          </section>
          {/* <!-- activity html end --> */}
          {/* <!-- Home special section html start --> */}

          <section
            className="subscribe-section"
            style={{
              backgroundImage: "url(./images/19.png)",
              marginTop: "100px",
              padding: "75px",
            }}
          >
            <div className="container">
              <div className="client-section">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Nuestros aliados estratégicos
                </h3>
                <div className="container">
                  <div
                    className="client-wrap client-slider secondary-bg"
                    style={{ backgroundColor: "initial" }}
                  >
                    <Carousel
                      className="home-slider"
                      responsive={responsive2}
                      showDots={false}
                      infinite={true}
                      autoPlay={true}
                      keyBoardControl={false}
                      arrows={false}
                      autoPlaySpeed={3500}
                      dotListClass="custom-dot-list-style"
                      slidesToSlide={1}
                    >
                      <div className="client-item">
                        <figure>
                          <img
                            src="./images/logo1.png"
                            alt=""
                            draggable={false}
                          />
                        </figure>
                      </div>
                      <div className="client-item">
                        <figure>
                          <img
                            src="./images/logo2.png"
                            alt=""
                            draggable={false}
                          />
                        </figure>
                      </div>
                      <div className="client-item">
                        <figure>
                          <img
                            src="./images/logo3.png"
                            alt=""
                            draggable={false}
                          />
                        </figure>
                      </div>
                      <div className="client-item">
                        <figure>
                          <img
                            src="./images/logo4.png"
                            alt=""
                            draggable={false}
                          />
                        </figure>
                      </div>
                      <div className="client-item">
                        <figure>
                          <img
                            src="./images/logo5.png"
                            alt=""
                            draggable={false}
                          />
                        </figure>
                      </div>
                      <div className="client-item">
                        <figure>
                          <img
                            src="./images/logo2.png"
                            alt=""
                            draggable={false}
                          />
                        </figure>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="special-section">
            <div className="container">
              <div className="section-heading text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h3
                      className="dash-style"
                      style={{
                        color: "#156B7A",
                        width: "fit-content",
                        margin: "20px auto",
                      }}
                    >
                      Tecnología más avanzada
                    </h3>
                    <h3 style={{ color: "black", wordSpacing: "5px" }}>
                      EL MEJOR PRECIO DEL MERCADO
                    </h3>
                    {/* <p>
                      Mollit voluptatem perspiciatis convallis elementum
                      corporis quo veritatis aliquid blandit, blandit torquent,
                      odit placeat. Adipiscing repudiandae eius cursus? Nostrum
                      magnis maxime curae placeat.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="special-inner" style={{ marginTop: "50px" }}>
                <div className="row" style={{ height: "fit-content" }}>
                  <div className="col-md-6 col-lg-6">
                    <div
                      className="special-item"
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        height: "100%",
                      }}
                    >
                      <div
                        className="special-content"
                        style={{
                          backgroundColor: "#156B7A",
                          marginTop: "0px",
                          width: "fit-content",
                          position: "relative",
                          padding: "60px 40px",
                        }}
                      >
                        <div className="meta-cat">
                          {/* <a href="#">CANADA</a> */}
                        </div>
                        <h3>
                          <a href="#" style={{ color: "white" }}>
                            Gest ión Integral
                          </a>
                        </h3>
                        <div className="package-price">
                          <h3 style={{ color: "white", fontWeight: "200" }}>
                            • Sesión fotográfica <br />
                            • Domotización de la Vivienda <br />
                            • Creación de anuncio <br />
                            • Publicación en diferentes plataformas <br />
                            • Gestión de reservas <br />
                            • Atención al huésped <br />
                            • Check-in/check-out <br />
                            • Call center 24H <br />• Gestión diaria de precios
                            <br />
                            <span
                              style={{
                                textShadow: "0 0px 10px rgba(255,255,255,1)",
                              }}
                            >
                              • Gestidn de limpieza, lavanderia y mantenimiento.{" "}
                              <br />
                              • Amenities y Kits de Bienvenida
                              <br />
                            </span>
                          </h3>
                          {/* Price:
                          <del>$1500</del>
                          <ins>$1200</ins> */}
                        </div>
                        <div
                          className="badge-dis"
                          style={{
                            backgroundColor: "white",
                            border: "1px dashed #156B7A",
                            top: "-40px",
                            right: "-40px",
                          }}
                        >
                          <span>
                            <strong style={{ color: "#156B7A" }}>20%</strong>
                            {/* off */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div
                      className="special-item"
                      style={{
                        display: "flex",
                        justifyContent: "left",
                        height: "100%",
                      }}
                    >
                      <div
                        className="special-content"
                        style={{
                          backgroundColor: "#156B7A",
                          marginTop: "0px",
                          width: "fit-content",
                          position: "relative",
                          padding: "60px 40px",
                        }}
                      >
                        <div className="meta-cat">
                          {/* <a href="#">CANADA</a> */}
                        </div>
                        <h3>
                          <a href="#" style={{ color: "white" }}>
                            Gest ión Básica
                          </a>
                        </h3>
                        <div className="package-price">
                          <h3 style={{ color: "white", fontWeight: "200" }}>
                            • Sesión fotográfica <br />
                            • Domotización de la Vivienda <br />
                            • Creación de anuncio <br />
                            • Publicación en diferentes plataformas <br />
                            • Gestión de reservas <br />
                            • Atención al huésped <br />
                            • Check-in/check-out <br />
                            • Call center 24H <br />• Gestión diaria de precios
                          </h3>
                          {/* Price:
                          <del>$1500</del>
                          <ins>$1200</ins> */}
                        </div>
                        <div
                          className="badge-dis"
                          style={{
                            backgroundColor: "white",
                            border: "1px dashed #156B7A",
                            top: "-40px",
                            right: "-40px",
                          }}
                        >
                          <span>
                            <strong style={{ color: "#156B7A" }}>15%</strong>
                            {/* off */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6 col-lg-4">
                    <div className="special-item">
                      <figure className="special-img">
                        <img src="./images/10.png" alt="" />
                      </figure>
                      <div className="badge-dis">
                        <span>
                          <strong>15%</strong>
                          off
                        </span>
                      </div>
                      <div className="special-content">
                        <div className="meta-cat">
                          <a href="#">MALAYSIA</a>
                        </div>
                        <h3>
                          <a href="#">Sunset view of beautiful lakeside city</a>
                        </h3>
                        <div className="package-price">
                          Price:
                          <del>$1800</del>
                          <ins>$1476</ins>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!-- special html end --> */}
          {/* <!-- Home special section html start --> */}
          {/* <section className="best-section">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="section-heading">
                    <h5
                      className="dash-style"
                      style={{ fontSize: "28px", color: "#156B7A" }}
                    >
                      OUR TOUR GALLERY
                    </h5>
                    <h2 style={{ fontSize: "44px" }}>
                      BEST TRAVELER'S
                      <br /> SHARED PHOTOS
                    </h2>
                    <p style={{ fontSize: "16px" }}>
                      Aperiam sociosqu urna praesent, tristique, corrupti
                      condimentum asperiores platea ipsum ad arcu. Nostrud.
                      Esse? Aut nostrum, ornare quas provident laoreet nesciunt
                      odio voluptates etiam, omnis.
                    </p>
                  </div>
                  <figure className="gallery-img" style={{ marginTop: "50px" }}>
                    <img src="./images/2.png" alt="" />
                  </figure>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-sm-6">
                      <figure className="gallery-img">
                        <img src="./images/16.png" alt="" />
                      </figure>
                    </div>
                    <div className="col-sm-6">
                      <figure className="gallery-img">
                        <img src="./images/18.png" alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <figure className="gallery-img">
                        <img src="./images/19.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- best html end --> */}
          {/* <!-- Home client section html start brightstar --> */}
          {/* <!-- subscribe html end --> */}
          {/* <!-- Home blog section html start --> */}
          {/* <section className="blog-section">
            <div className="container">
              <div className="section-heading text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h5 className="dash-style">FROM OUR BLOG</h5>
                    <h2>OUR RECENT POSTS</h2>
                    <p>
                      Mollit voluptatem perspiciatis convallis elementum
                      corporis quo veritatis aliquid blandit, blandit torquent,
                      odit placeat. Adipiscing repudiandae eius cursus? Nostrum
                      magnis maxime curae placeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <figure className="feature-image">
                      <a href="#">
                        <img src="./images/12.png" alt="" />
                      </a>
                    </figure>
                    <div className="entry-content">
                      <h3>
                        <a href="#">
                          Life is a beautiful journey not a destination
                        </a>
                      </h3>
                      <div className="entry-meta">
                        <span className="byline">
                          <a href="#">Demoteam</a>
                        </span>
                        <span className="posted-on">
                          <a href="#">August 17, 2021</a>
                        </span>
                        <span className="comments-link">
                          <a href="#">No Comments</a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <figure className="feature-image">
                      <a href="#">
                        <img src="./images/15.png" alt="" />
                      </a>
                    </figure>
                    <div className="entry-content">
                      <h3>
                        <a href="#">
                          Take only memories, leave only footprints
                        </a>
                      </h3>
                      <div className="entry-meta">
                        <span className="byline">
                          <a href="#">Demoteam</a>
                        </span>
                        <span className="posted-on">
                          <a href="#">August 17, 2021</a>
                        </span>
                        <span className="comments-link">
                          <a href="#">No Comments</a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <figure className="feature-image">
                      <a href="#">
                        <img src="./images/16.png" alt="" />
                      </a>
                    </figure>
                    <div className="entry-content">
                      <h3>
                        <a href="#">
                          Journeys are best measured in new friends
                        </a>
                      </h3>
                      <div className="entry-meta">
                        <span className="byline">
                          <a href="#">Demoteam</a>
                        </span>
                        <span className="posted-on">
                          <a href="#">August 17, 2021</a>
                        </span>
                        <span className="comments-link">
                          <a href="#">No Comments</a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- blog html end --> */}
          {/* <!-- Home testimonial section html start brightstar --> */}
          <div
            className="testimonial-section"
            style={{
              // backgroundImage: "url(./images/img23.jpg)",
              paddingTop: "50px",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="testimonial-inner testimonial-slider">
                    <Carousel
                      className="home-slider"
                      responsive={responsive}
                      showDots={true}
                      infinite={true}
                      autoPlay={false}
                      arrows={false}
                      autoPlaySpeed={3500}
                      dotListClass="custom-dot-list-style"
                      slidesToSlide={1}
                    >
                      <div className="testimonial-item text-center">
                        <figure className="testimonial-img">
                          <img src="./images/1.jpg" alt="" />
                        </figure>
                        <div className="testimonial-content">
                          <p>
                            " Dolorum aenean dolorem minima! Voluptatum?
                            Corporis condimentum ac primis fusce, atque!
                            Vivamus. Non cupiditate natus excepturi, quod quo,
                            aute facere? Deserunt aliquip, egestas ipsum,
                            eu.Dolorum aenean dolorem minima!? Corporis condi
                            mentum acpri! "
                          </p>
                          <cite style={{ fontStyle: "normal" }}>
                            Johny English
                            <span
                              className="company"
                              style={{ color: "black", fontStyle: "normal" }}
                            >
                              Travel Agent
                            </span>
                          </cite>
                        </div>
                      </div>
                      <div className="testimonial-item text-center">
                        <figure className="testimonial-img">
                          <img src="./images/2.jpg" alt="" />
                        </figure>
                        <div className="testimonial-content">
                          <p>
                            " Dolorum aenean dolorem minima! Voluptatum?
                            Corporis condimentum ac primis fusce, atque!
                            Vivamus. Non cupiditate natus excepturi, quod quo,
                            aute facere? Deserunt aliquip, egestas ipsum,
                            eu.Dolorum aenean dolorem minima!? Corporis condi
                            mentum acpri! "
                          </p>
                          <cite style={{ fontStyle: "normal" }}>
                            William Housten
                            <span
                              className="company"
                              style={{ color: "black", fontStyle: "normal" }}
                            >
                              Travel Agent
                            </span>
                          </cite>
                        </div>
                      </div>
                      <div className="testimonial-item text-center">
                        <figure className="testimonial-img">
                          <img src="./images/3.jpg" alt="" />
                        </figure>
                        <div className="testimonial-content">
                          <p>
                            " Dolorum aenean dolorem minima! Voluptatum?
                            Corporis condimentum ac primis fusce, atque!
                            Vivamus. Non cupiditate natus excepturi, quod quo,
                            aute facere? Deserunt aliquip, egestas ipsum,
                            eu.Dolorum aenean dolorem minima!? Corporis condi
                            mentum acpri! "
                          </p>
                          <cite>
                            Alison Wright
                            <span className="company">Travel Guide</span>
                          </cite>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- testimonial html end --> */}
          {/* <!-- Home contact details section html start --> */}
          {/* <section className="contact-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="contact-img"
                    style={{
                      backgroundImage: "url(./images/logogloove.png)",
                    }}
                  ></div>
                </div>
                <div className="col-lg-8">
                  <div className="contact-details-wrap">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="contact-details">
                          <div className="contact-icon">
                            <img src="./images/icon12.png" alt="" />
                          </div>
                          <ul>
                            <li>
                              <a href="#">support@gmail.com</a>
                            </li>
                            <li>
                              <a href="#">info@domain.com</a>
                            </li>
                            <li>
                              <a href="#">name@company.com</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="contact-details">
                          <div className="contact-icon">
                            <img src="./images/icon13.png" alt="" />
                          </div>
                          <ul>
                            <li>
                              <a href="#">+132 (599) 254 669</a>
                            </li>
                            <li>
                              <a href="#">+123 (669) 255 587</a>
                            </li>
                            <li>
                              <a href="#">+01 (977) 2599 12</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="contact-details">
                          <div className="contact-icon">
                            <img src="./images/icon14.png" alt="" />
                          </div>
                          <ul>
                            <li>3146 Koontz, California</li>
                            <li>Quze.24 Second floor</li>
                            <li>36 Street, Melbourne</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-btn-wrap">
                    <h3>LET'S JOIN US FOR MORE UPDATE !!</h3>
                    <a href="#" className="button-primary">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!--  contact details html end --> */}
        </main>
        <footer
          id="colophon"
          className="site-footer footer-primary"
          style={{ backgroundColor: "white" }}
        >
          {/* <div className="top-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget_text">
                    <h3 className="widget-title">About Travel</h3>
                    <div className="textwidget widget-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </div>
                    <div className="award-img">
                      <a href="#">
                        <img src="./images/logo6.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="./images/logo2.png" alt="" />
                      </a>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget_text">
                    <h3 className="widget-title">CONTACT INFORMATION</h3>
                    <div className="textwidget widget-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-phone-alt"></i>
                            +01 (977) 2599 12
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-envelope"></i>
                            company@domain.com
                          </a>
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>
                          3146 Koontz, California
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget_recent_post">
                    <h3 className="widget-title">Latest Post</h3>
                    <ul>
                      <li>
                        <h5>
                          <a href="#">
                            Life is a beautiful journey not a destination
                          </a>
                        </h5>
                        <div className="entry-meta">
                          <span className="post-on">
                            <a href="#">August 17, 2021</a>
                          </span>
                          <span className="comments-link">
                            <a href="#">No Comments</a>
                          </span>
                        </div>
                      </li>
                      <li>
                        <h5>
                          <a href="#">
                            Take only memories, leave only footprints
                          </a>
                        </h5>
                        <div className="entry-meta">
                          <span className="post-on">
                            <a href="#">August 17, 2021</a>
                          </span>
                          <span className="comments-link">
                            <a href="#">No Comments</a>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </aside>
                </div>
                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget_newslatter">
                    <h3 className="widget-title">SUBSCRIBE US</h3>
                    <div className="widget-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <form className="newslatter-form">
                      <input type="email" name="s" placeholder="Your Email.." />
                      <input type="submit" name="s" value="SUBSCRIBE NOW" />
                    </form>
                  </aside>
                </div>
              </div>
            </div>
          </div> */}
          <div className="top-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <aside
                    className="widget widget_text"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      padding: "0px",
                      height: "100%",
                    }}
                  >
                    {/* <h3 className="widget-title">About Travel</h3> */}
                    <div className="">
                      <a href="#">
                        <img
                          src="./images/GLOOVE_marca_tagline_COL.png"
                          alt=""
                          style={{ width: "100%", height: "auto" }}
                        />
                      </a>
                    </div>
                    <div
                      className="textwidget widget-text"
                      style={{
                        marginTop: "20px",
                        fontSize: "20px",
                        textAlign: "center",
                        padding: "0px",
                        color: "#156B7A",
                      }}
                    >
                      GESTIONAMOS TUS VIVIENDAS TURÍSTICAS CON EL MEJOR SERVICIO
                      Y TECNOLOGÍA DEL MERCADO
                    </div>
                  </aside>
                </div>
                <div className="col-lg-4 col-md-6">
                  <aside className="widget widget_text">
                    {/* <h3 className="widget-title">CONTACT INFORMATION</h3> */}
                    <div className="textwidget widget-text">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                      <ul>
                        <li
                          style={{
                            textAlign: "center",
                            fontSize: "16px",
                            lineHeight: "30px",
                          }}
                        >
                          <a href="#" style={{ color: "#156B7A" }}>
                            Centro de ayuda
                          </a>
                        </li>
                        <li
                          style={{
                            textAlign: "center",
                            fontSize: "16px",
                            lineHeight: "30px",
                          }}
                        >
                          <a href="#" style={{ color: "#156B7A" }}>
                            Quienes somos
                          </a>
                        </li>
                        <li
                          style={{
                            textAlign: "center",
                            fontSize: "16px",
                            lineHeight: "30px",
                          }}
                        >
                          <a href="#" style={{ color: "#156B7A" }}>
                            Preguntas frecuentes
                          </a>
                        </li>
                        <li
                          style={{
                            textAlign: "center",
                            fontSize: "16px",
                            lineHeight: "30px",
                          }}
                        >
                          <a href="#" style={{ color: "#156B7A" }}>
                            Trabaja con nosotros
                          </a>
                        </li>
                        <li
                          style={{
                            textAlign: "center",
                            fontSize: "16px",
                            lineHeight: "30px",
                          }}
                        >
                          <a href="#" style={{ color: "#156B7A" }}>
                            Nuestro Blog
                          </a>
                        </li>
                        <li
                          style={{
                            textAlign: "center",
                            fontSize: "16px",
                            lineHeight: "30px",
                          }}
                        >
                          <a href="#" style={{ color: "#156B7A" }}>
                            Noticias
                          </a>
                        </li>
                        <li
                          style={{
                            textAlign: "center",
                            fontSize: "16px",
                            lineHeight: "30px",
                          }}
                        >
                          <a href="#" style={{ color: "#156B7A" }}>
                            CONTACTANOS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-4 col-md-6">
                  <aside className="widget widget_recent_post">
                    <h3
                      className=""
                      style={{ textAlign: "center", color: "#156B7A" }}
                    >
                      SIGUENOS EN:
                    </h3>
                    <ul>
                      <li
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          border: "0px",
                          padding: "0px",
                        }}
                      >
                        {/* <h5>
                          <a href="#">
                            Life is a beautiful journey not a destination
                          </a>
                        </h5>
                        <div className="entry-meta">
                          <span className="post-on">
                            <a href="#">August 17, 2021</a>
                          </span>
                          <span className="comments-link">
                            <a href="#">No Comments</a>
                          </span>
                        </div> */}
                        <img
                          src="./images/happy (9).png"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#156B7A",
                          }}
                        />
                      </li>
                      <li
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          border: "0px",
                          padding: "0px",
                        }}
                      >
                        <img
                          src="./images/happy (6).png"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#156B7A",
                          }}
                        />
                      </li>
                      <li
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          border: "0px",
                          padding: "0px",
                        }}
                      >
                        <img
                          src="./images/happy (7).png"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#156B7A",
                          }}
                        />
                      </li>
                      <li
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          border: "0px",
                          padding: "0px",
                        }}
                      >
                        <img
                          src="./images/happy (8).png"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#156B7A",
                          }}
                        />
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="buttom-footer">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#">Política de Privacidad</a>
                      </li>
                      <li>
                        <a href="#">Términos y condiciones</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <div className="footer-logo">
                    <a href="#">
                      <img
                        src="./images/GLOOVE_marca_tagline_blanco.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="copy-right text-right">
                    Copyright © 2024 Gloove. Todos los derechos reservados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a id="backTotop" href="#" className="to-top-icon">
          <i className="fas fa-chevron-up"></i>
        </a>
        {/* <!-- custom search field html --> */}
        <div className="header-search-form">
          <div className="container">
            <div className="header-search-container">
              <form className="search-form" role="search" method="get">
                <input type="text" name="s" placeholder="Enter your text..." />
              </form>
              <a href="#" className="search-close">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- header html end --> */}
      </div>

      {/* <!-- JavaScript -->
      <script src="assets/js/jquery.js"></script>
      <script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
      <script src="assets/vendors/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/vendors/jquery-ui/jquery-ui.min.js"></script>
      <script src="assets/vendors/countdown-date-loop-counter/loopcounter.js"></script>
      <script src="assets/js/jquery.counterup.js"></script>
      <script src="assets/vendors/modal-video/jquery-modal-video.min.js"></script>
      <script src="assets/vendors/masonry/masonry.pkgd.min.js"></script>
      <script src="assets/vendors/lightbox/dist/js/lightbox.min.js"></script>
      <script src="assets/vendors/slick/slick.min.js"></script>
      <script src="assets/js/jquery.slicknav.js"></script>
  <script src="assets/js/custom.min.js"></script> */}
    </div>
  );
}

export default Landing;
