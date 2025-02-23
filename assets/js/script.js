$(document).ready(function() {
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
            $('#language-selector').on('change',this.changeLanguage.bind(this));
        }

        // methods
        changeLanguage(e) {
            const language = e?.target?.value
            language && $('html').attr('lang', language);
            if(language){
                this.changeElementsTextLan(language);
                this.changeInputPlaceholderLan(language);
            }
        }

        changeElementsTextLan(language){
            // business logic here.
        }

        changeInputPlaceholderLan(language){
            $('.multi-lan').each(function(_i, input){
                let text;
                if(language=='bn'){
                    text = $(input).data('bn');
                }else{
                    text = $(input).data('en');
                }

                $(input).attr('placeholder', text);                
            })
        }

    }

    class themeSwitcher {
        constructor() {
          this.init();
        }

        // initialize
        init() {
            this.bindEvents();
        }

        // events
        bindEvents() {
            $('.theme-toggler').on('click',this.toggleTheme.bind(this));
        }

        // methods
       toggleTheme(event){
        const button = event?.currentTarget;
        $('.theme-toggler').click(function() {
            let currentVal = $(this).data('val');
            let newVal = currentVal === 'dark' ? 'light' : 'dark';
        
            $(this).data('val', newVal);
        
            // Optionally, you can also update the class for visual changes
            if (newVal === 'dark') {
              $(this).addClass('dark').removeClass('light');
            } else {
              $(this).addClass('light').removeClass('dark');
            }
       }

    }


    const languageSwitcher = new LanguageSwitcher();



    // slick slider
    $('.AH_intro-slider').slick({
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
            settings: {
            }
          }
        ],
        fade: true,      
        // Advanced Options
        lazyLoad: 'ondemand',
      });
  });
  