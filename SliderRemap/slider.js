function Slider() {

    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;
    this.start = function (elId) {
        var that = this;
        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn'),
            this.showNextBtn = el.querySelector('.show-next-btn'),
            this.slideImage = el.querySelector('.slide-img'),


            //subscribe to events
            this.showPrevBtn.addEventListener('click', function (e) {
                that.onShowPrevBtnClick(e);
            }),
            this.showNextBtn.addEventListener('click', function (e) {
                that.onShowNextBtnClick(e);
            }),

            //craete images array

            this.imagesUrls.push('https://www.major-auto.ru/images/models/ford/transit/14567/14567_medium.jpg');
        this.imagesUrls.push('https://almisoft.ru/images/sid208/sid208_03.png')
        this.imagesUrls.push('https://almisoft.ru/images/sid208/sid208_17.png')
        this.imagesUrls.push('https://vodi.su/wp-content/uploads/2018/01/Sazhevyii---filtr-na-dizele1.gif')



        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;

    };

    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        //disable button if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };
    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        //disable button if need
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }

    };

};