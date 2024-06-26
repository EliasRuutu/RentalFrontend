import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./../assets/css/booking/bootstrap.min.css";
import "./../assets/css/booking/mdb.min.css";
import "./../assets/css/booking/plugins.css";
import "./../assets/css/booking/style.css";
import "./../assets/css/booking/coloring.css";
import "./../assets/css/booking/colors/scheme-01.css";
import { getAccomodations, getDescriptions } from "apis/apis";

function Booking() {
  const navigate = useNavigate();
  const [accommodations, setAccommodations] = useState(null);
  const [filteredIndex, setFilteredIndex] = useState([]);
  const [descriptions, setDescriptions] = useState(null);
  const [criteria, setCriteria] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
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

  const fetch = async () => {
    const [accom, desc] = await Promise.all([
      getAccomodations(),
      getDescriptions(),
    ]);
    setAccommodations(accom["data"]);
    setDescriptions(desc["data"]);
  };

  useEffect(() => {
    if (accommodations && descriptions) {
      const c = [];
      accommodations.forEach((item) => {
        if (!c.find((v) => v == item["Company"])) {
          c.push(item["Company"]);
        }
      });
      setCriteria({
        company: {
          list: c,
          checked: [],
        },
      });
      localStorage.setItem("accom", JSON.stringify(accommodations));
      localStorage.setItem("desc", JSON.stringify(descriptions));
    }
  }, [accommodations, descriptions]);

  useEffect(() => {
    if (accommodations) {
      const filter = [];
      accommodations.forEach((item, index) => {
        if (
          criteria.company.checked.length == 0 ||
          criteria.company.checked.find((c) => c == item["Company"])
        )
          filter.push(index);
      });
      setFilteredIndex(filter);
    }
  }, [criteria]);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div id="wrapper">
      {/* page preloader begin */}
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
      {/* header close */}
      {/* content begin */}
      <div className="no-bottom no-top zebra" id="content">
        <div id="top" />
        {/* section begin */}
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
        {/* section close */}
        <section id="section-cars">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                  className="item_filter_group"
                  style={{ backgroundColor: "#156B7A", padding: "15px" }}
                >
                  {/* <div className="de-box mb25"> */}
                  <form name="contactForm" id="contact_form" method="post">
                    {/* <h4>Desde $265</h4>
                      <div className="spacer-20" /> */}
                    <div className="row">
                      {/* <div className="col-lg-12 mb20">
                          <h5>Adults</h5>
                          <input
                            type="text"
                            name="PickupLocation"
                            // onFocus="geolocate()"
                            placeholder="Enter your pickup location"
                            id="autocomplete"
                            autoComplete="off"
                            className="form-control"
                          />
                          <div className="jls-address-preview jls-address-preview--hidden">
                            <div className="jls-address-preview__header"></div>
                          </div>
                        </div> */}
                      <div className="col-lg-12 mb20">
                        <h5 style={{ color: "white" }}>Localización</h5>
                        <input
                          type="text"
                          name="DropoffLocation"
                          // onFocus="geolocate()"
                          placeholder="Enter your dropoff location"
                          id="autocomplete2"
                          autoComplete="off"
                          className="form-control"
                          style={{ width: "100%", borderRadius: "5px" }}
                        />
                        <div className="jls-address-preview jls-address-preview--hidden">
                          <div className="jls-address-preview__header"></div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 mb20"
                        style={{ paddingRight: "0px" }}
                      >
                        <h5 style={{ color: "white" }}>Fecha de entrada</h5>
                        <div className="date-time-field">
                          <input
                            type="text"
                            id="date-picker"
                            name="Pick Up Date"
                            defaultValue=""
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                          {/* <select name="Pick Up Time" id="pickup-time">
                              <option disabled="" value="Select time">
                                Time
                              </option>
                              <option value="00:00">00:00</option>
                              <option value="00:30">00:30</option>
                              <option value="01:00">01:00</option>
                              <option value="01:30">01:30</option>
                              <option value="02:00">02:00</option>
                              <option value="02:30">02:30</option>
                              <option value="03:00">03:00</option>
                              <option value="03:30">03:30</option>
                              <option value="04:00">04:00</option>
                              <option value="04:30">04:30</option>
                              <option value="05:00">05:00</option>
                              <option value="05:30">05:30</option>
                              <option value="06:00">06:00</option>
                              <option value="06:30">06:30</option>
                              <option value="07:00">07:00</option>
                              <option value="07:30">07:30</option>
                              <option value="08:00">08:00</option>
                              <option value="08:30">08:30</option>
                              <option value="09:00">09:00</option>
                              <option value="09:30">09:30</option>
                              <option value="10:00">10:00</option>
                              <option value="10:30">10:30</option>
                              <option value="11:00">11:00</option>
                              <option value="11:30">11:30</option>
                              <option value="12:00">12:00</option>
                              <option value="12:30">12:30</option>
                              <option value="13:00">13:00</option>
                              <option value="13:30">13:30</option>
                              <option value="14:00">14:00</option>
                              <option value="14:30">14:30</option>
                              <option value="15:00">15:00</option>
                              <option value="15:30">15:30</option>
                              <option value="16:00">16:00</option>
                              <option value="16:30">16:30</option>
                              <option value="17:00">17:00</option>
                              <option value="17:30">17:30</option>
                              <option value="18:00">18:00</option>
                              <option value="18:30">18:30</option>
                              <option value="19:00">19:00</option>
                              <option value="19:30">19:30</option>
                              <option value="20:00">20:00</option>
                              <option value="20:30">20:30</option>
                              <option value="21:00">21:00</option>
                              <option value="21:30">21:30</option>
                              <option value="22:00">22:00</option>
                              <option value="22:30">22:30</option>
                              <option value="23:00">23:00</option>
                              <option value="23:30">23:30</option>
                            </select> */}
                        </div>
                      </div>
                      <div
                        className="col-lg-6 mb20"
                        tyle={{ paddingLeft: "0px" }}
                      >
                        <h5 style={{ color: "white" }}>Fecha de salida</h5>
                        <div className="date-time-field">
                          <input
                            type="text"
                            id="date-picker-2"
                            name="Collection Date"
                            defaultValue=""
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                          {/* <select name="Collection Time" id="collection-time">
                              <option disabled="" value="Select time">
                                Time
                              </option>
                              <option value="00:00">00:00</option>
                              <option value="00:30">00:30</option>
                              <option value="01:00">01:00</option>
                              <option value="01:30">01:30</option>
                              <option value="02:00">02:00</option>
                              <option value="02:30">02:30</option>
                              <option value="03:00">03:00</option>
                              <option value="03:30">03:30</option>
                              <option value="04:00">04:00</option>
                              <option value="04:30">04:30</option>
                              <option value="05:00">05:00</option>
                              <option value="05:30">05:30</option>
                              <option value="06:00">06:00</option>
                              <option value="06:30">06:30</option>
                              <option value="07:00">07:00</option>
                              <option value="07:30">07:30</option>
                              <option value="08:00">08:00</option>
                              <option value="08:30">08:30</option>
                              <option value="09:00">09:00</option>
                              <option value="09:30">09:30</option>
                              <option value="10:00">10:00</option>
                              <option value="10:30">10:30</option>
                              <option value="11:00">11:00</option>
                              <option value="11:30">11:30</option>
                              <option value="12:00">12:00</option>
                              <option value="12:30">12:30</option>
                              <option value="13:00">13:00</option>
                              <option value="13:30">13:30</option>
                              <option value="14:00">14:00</option>
                              <option value="14:30">14:30</option>
                              <option value="15:00">15:00</option>
                              <option value="15:30">15:30</option>
                              <option value="16:00">16:00</option>
                              <option value="16:30">16:30</option>
                              <option value="17:00">17:00</option>
                              <option value="17:30">17:30</option>
                              <option value="18:00">18:00</option>
                              <option value="18:30">18:30</option>
                              <option value="19:00">19:00</option>
                              <option value="19:30">19:30</option>
                              <option value="20:00">20:00</option>
                              <option value="20:30">20:30</option>
                              <option value="21:00">21:00</option>
                              <option value="21:30">21:30</option>
                              <option value="22:00">22:00</option>
                              <option value="22:30">22:30</option>
                              <option value="23:00">23:00</option>
                              <option value="23:30">23:30</option>
                            </select> */}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingBottom: "20px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h5 style={{ color: "white", paddingBottom: "0px" }}>
                            Rooms
                          </h5>
                          <select
                            name="Pick Up Time"
                            id="pickup-time"
                            style={{
                              padding: "1px",
                              borderRadius: "5px",
                              height: "30px",
                            }}
                          >
                            <option disabled="" value="Select time">
                              Rooms
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                        <div>
                          <h5 style={{ color: "white", paddingBottom: "0px" }}>
                            Adults
                          </h5>
                          <select
                            name="Pick Up Time"
                            id="pickup-time"
                            style={{
                              padding: "1px",
                              borderRadius: "5px",
                              height: "30px",
                            }}
                          >
                            <option disabled="" value="Select time">
                              Adults
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                        <div>
                          <h5 style={{ color: "white", paddingBottom: "0px" }}>
                            Children
                          </h5>
                          <select
                            name="Pick Up Time"
                            id="pickup-time"
                            style={{
                              padding: "1px",
                              borderRadius: "5px",
                              height: "30px",
                            }}
                          >
                            <option disabled="" value="Select time">
                              Children
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <h4 style={{ color: "white" }}>Companies</h4>
                    <div className="de_form">
                      {criteria &&
                        criteria.company.list.map((item, index) => {
                          return (
                            <div className="de_checkbox">
                              <input
                                id={"company_type_" + index}
                                name={"company_type_" + index}
                                type="checkbox"
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setCriteria({
                                      company: {
                                        ...criteria.company,
                                        checked: [
                                          ...criteria.company.checked,
                                          item,
                                        ],
                                      },
                                    });
                                  } else {
                                    const list = criteria.company.checked;
                                    const index = list.indexOf(item);
                                    if (index > -1) {
                                      list.splice(index, 1);
                                      setCriteria({
                                        company: {
                                          ...criteria.company,
                                          checked: list,
                                        },
                                      });
                                    }
                                  }
                                }}
                              />
                              <label
                                htmlFor={"company_type_" + index}
                                style={{ color: "white" }}
                              >
                                {item}
                              </label>
                            </div>
                          );
                        })}
                    </div>
                    <a
                      // type="Booking Now"
                      id="send_message"
                      // defaultValue="Book Now"
                      style={{
                        color: "white",
                        backgroundColor: "#EE3388",
                        cursor: "pointer",
                      }}
                      className="btn-main btn-fullwidth"
                    >
                      Book Now
                    </a>
                    <div className="clearfix" />
                  </form>
                  {/* </div> */}
                </div>
                {/* <div className="item_filter_group">
                  <h4>Car Body Type</h4>
                  <div className="de_form">
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_1"
                        name="car_body_type_1"
                        type="checkbox"
                        defaultValue="car_body_type_1"
                      />
                      <label htmlFor="car_body_type_1">Convertible</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_2"
                        name="car_body_type_2"
                        type="checkbox"
                        defaultValue="car_body_type_2"
                      />
                      <label htmlFor="car_body_type_2">Coupe</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_3"
                        name="car_body_type_3"
                        type="checkbox"
                        defaultValue="car_body_type_3"
                      />
                      <label htmlFor="car_body_type_3">Exotic Cars</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_4"
                        name="car_body_type_4"
                        type="checkbox"
                        defaultValue="car_body_type_4"
                      />
                      <label htmlFor="car_body_type_4">Hatchback</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_5"
                        name="car_body_type_5"
                        type="checkbox"
                        defaultValue="car_body_type_5"
                      />
                      <label htmlFor="car_body_type_5">Minivan</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_6"
                        name="car_body_type_6"
                        type="checkbox"
                        defaultValue="car_body_type_6"
                      />
                      <label htmlFor="car_body_type_6">Pickup Truck</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_7"
                        name="car_body_type_7"
                        type="checkbox"
                        defaultValue="car_body_type_7"
                      />
                      <label htmlFor="car_body_type_7">Sedan</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_8"
                        name="car_body_type_8"
                        type="checkbox"
                        defaultValue="car_body_type_8"
                      />
                      <label htmlFor="car_body_type_8">Sports Car</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_9"
                        name="car_body_type_9"
                        type="checkbox"
                        defaultValue="car_body_type_9"
                      />
                      <label htmlFor="car_body_type_9">Station Wagon</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_body_type_10"
                        name="car_body_type_10"
                        type="checkbox"
                        defaultValue="car_body_type_10"
                      />
                      <label htmlFor="car_body_type_10">SUV</label>
                    </div>
                  </div>
                </div>
                <div className="item_filter_group">
                  <h4>Car Seats</h4>
                  <div className="de_form">
                    <div className="de_checkbox">
                      <input
                        id="car_seat_1"
                        name="car_seat_1"
                        type="checkbox"
                        defaultValue="car_seat_1"
                      />
                      <label htmlFor="car_seat_1">2 seats</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_seat_2"
                        name="car_seat_2"
                        type="checkbox"
                        defaultValue="car_seat_2"
                      />
                      <label htmlFor="car_seat_2">4 seats</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_seat_3"
                        name="car_seat_3"
                        type="checkbox"
                        defaultValue="car_seat_3"
                      />
                      <label htmlFor="car_seat_3">6 seats</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_seat_4"
                        name="car_seat_4"
                        type="checkbox"
                        defaultValue="car_seat_4"
                      />
                      <label htmlFor="car_seat_4">6+ seats</label>
                    </div>
                  </div>
                </div>
                <div className="item_filter_group">
                  <h4>Car Engine Capacity (cc)</h4>
                  <div className="de_form">
                    <div className="de_checkbox">
                      <input
                        id="car_engine_1"
                        name="car_engine_1"
                        type="checkbox"
                        defaultValue="car_engine_1"
                      />
                      <label htmlFor="car_engine_1">1000 - 2000</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_engine_2"
                        name="car_engine_2"
                        type="checkbox"
                        defaultValue="car_engine_2"
                      />
                      <label htmlFor="car_engine_2">2000 - 4000</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_engine_3"
                        name="car_engine_3"
                        type="checkbox"
                        defaultValue="car_engine_3"
                      />
                      <label htmlFor="car_engine_3">4000 - 6000</label>
                    </div>
                    <div className="de_checkbox">
                      <input
                        id="car_engine_4"
                        name="car_engine_4"
                        type="checkbox"
                        defaultValue="car_engine_4"
                      />
                      <label htmlFor="car_engine_4">6000+</label>
                    </div>
                  </div>
                </div>
                <div className="item_filter_group">
                  <h4>Price ($)</h4>
                  <div className="price-input">
                    <div className="field">
                      <span>Min</span>
                      <input
                        type="number"
                        className="input-min"
                        defaultValue={0}
                      />
                    </div>
                    <div className="field">
                      <span>Max</span>
                      <input
                        type="number"
                        className="input-max"
                        defaultValue={2000}
                      />
                    </div>
                  </div>
                  <div className="slider">
                    <div className="progress" />
                  </div>
                  <div className="range-input">
                    <input
                      type="range"
                      className="range-min"
                      min={0}
                      max={2000}
                      defaultValue={0}
                      step={1}
                    />
                    <input
                      type="range"
                      className="range-max"
                      min={0}
                      max={2000}
                      defaultValue={2000}
                      step={1}
                    />
                  </div>
                </div> */}
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {accommodations &&
                    descriptions &&
                    filteredIndex.map((index) => {
                      const accom = accommodations[index];
                      const desc = descriptions[index];
                      return (
                        <div className="col-xl-4 col-lg-6">
                          <div className="de-item mb30">
                            <div className="d-img">
                              <img
                                src={
                                  desc &&
                                  desc["Pictures"] &&
                                  desc["Pictures"]["Picture"]
                                    ? desc["Pictures"]["Picture"][0][
                                        "AdaptedURI"
                                      ]
                                    : ""
                                }
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="d-info">
                              <div className="d-text">
                                <h4>{accom["AccommodationName"]}</h4>
                                <div className="d-item_like">
                                  <i className="fa fa-heart" />
                                  <span>25</span>
                                </div>
                                <div className="d-atr-group">
                                  <span className="d-atr">
                                    <img src="images/icons/1.svg" alt="" />5
                                  </span>
                                  <span className="d-atr">
                                    <img src="images/icons/2.svg" alt="" />
                                    {accom["Company"]}
                                  </span>
                                </div>
                                <div className="d-price">
                                  Daily rate from <span>$265</span>
                                  <div
                                    className="btn-main"
                                    onClick={() => {
                                      window.location.href =
                                        "/car-single?index=" + index;
                                    }}
                                    style={{
                                      cursor: "pointer",
                                      backgroundColor: "#156B7A",
                                    }}
                                  >
                                    Reservar
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* content close */}
      <a href="#" id="back-to-top" />
      {/* footer begin */}
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
                    GESTIONAMOS TUS VIVIENDAS TURÍSTICAS CON EL MEJOR SERVICIO Y
                    TECNOLOGÍA DEL MERCADO
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

      {/* footer close */}
    </div>
  );
}

export default Booking;
