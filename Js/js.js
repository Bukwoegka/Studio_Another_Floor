$('index.html').ready(function(){
	$("#main_button").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 2000);
	});
});

$('index.html').ready(function(){
	$('.owl-carousel').owlCarousel({
	    dots:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:2,
            nav:true,
            loop:true
        },
        1120:{
            items:3,
            nav:true,
            loop:true
        }
    }
	});
});
