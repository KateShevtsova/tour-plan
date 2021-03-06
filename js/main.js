$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    effect: "coverflow",
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    $("body").toggleClass("modal-open");
    if ($(".navbar-bottom").hasClass("navbar-bottom--visible")) {
      hotelSlider.navigation.destroy(), reviewsSlider.navigation.destroy();
    } else {
      hotelSlider.navigation.init(), reviewsSlider.navigation.init();
    }
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    document.querySelector("body").classList.add("hidden");
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body");
    modalOverlay.addClass("modal__overlay--active");
    modalDialog.addClass("modal__dialog--active");
    modalBody.addClass("modal-open");
  }

  function closeModal(event) {
    document.querySelector("body").classList.remove("hidden");
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body");
    modalOverlay.removeClass("modal__overlay--active");
    modalDialog.removeClass("modal__dialog--active");

    modalBody.removeClass("modal-open");
  }

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Your full name",
          minlength: "Name not shorter than 2 letters",
        },
        phone: {
          required: "Enter your phone number",
          minlength: "Phone number type: +7 (999) 999-99-99",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Format of email should be name@domain.com",
        },
      },
    });
  });
  $(document).ready(function () {
    $(".phone").mask("+7(000) 000-00-00");
  });

  AOS.init();
});
