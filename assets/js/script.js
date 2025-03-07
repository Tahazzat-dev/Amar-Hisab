$(document).ready(function () {
  // Function to switch languages

  class LanguageSwitcher {
    constructor() {
      this.init();
    }

    // initialize
    init() {
      this.bindEvents();
    }

    // events
    bindEvents() {
      $("#language-selector").on("change", this.changeLanguage.bind(this));
    }

    // methods
    changeLanguage(e) {
      const language = e?.target?.value;
      language && $("html").attr("lang", language);
      if (language) {
        this.changeElementsTextLan(language);
        this.changeInputPlaceholderLan(language);
      }
    }

    changeElementsTextLan(language) {
      // business logic here.
    }

    changeInputPlaceholderLan(language) {
      $(".multi-lan").each(function (_i, input) {
        let text;
        if (language == "bn") {
          text = $(input).data("bn");
        } else {
          text = $(input).data("en");
        }

        $(input).attr("placeholder", text);
      });
    }
  }

  const languageSwitcher = new LanguageSwitcher();

  class ThemeSwitcher {
    constructor() {
      this.init();
    }

    // initialize
    init() {
      this.bindEvents();
    }

    // events
    bindEvents() {
      $(".theme-toggler").on("click", this.toggleTheme.bind(this));
    }

    // methods
    toggleTheme(event) {
      const btn = $(event?.currentTarget);
      const currentVal = btn.data("val");
      let newVal = currentVal === "dark" ? "light" : "dark";
      btn.data("val", newVal);

      // Apply the new theme

      if (newVal === "dark") {
        $('body').addClass("dark").removeClass("light");
      } else {
        $('body').addClass("light").removeClass("dark");
      }
    }
  }
  const themeSwitcher = new ThemeSwitcher();

  // registration process
  class Registration{
    constructor() {
      this.init();
    }

    // initialize
    init(){
      this.bindEvents();
    }

    // events
    bindEvents(){
      if(window.innerWidth < 768){
        $('.registration-input').on('focus', this.toggleIntroSlider) 
        $('.registration-input').on('blur', this.toggleIntroSlider) 
      }
    }

    // methods
    toggleIntroSlider(e){
        $('.TN_into-slider-wrap').slideToggle();
    }
  }
  const registration = new Registration();

  class ResizeEvents {
    constructor() {
    }

    init(){
    }

    // events
    bindEvents(){
      
    }

    // methods
    toggle
  }

  const resizeEvents = new ResizeEvents();

  // slick slider
  $(".TN_intro-slider").slick({
    // Basic Settings
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,

    // Responsive Settings
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
    ],
    fade: true,
    // Advanced Options
    lazyLoad: "ondemand",
  });
});
