$m = $('#menu');
$p = $('.panel');
	function abreV(){
		$($p).stop().animate({ 
				left: '-284px'
				}, 200, function(){
					$($m).animate({
						right: '0px'
						}, 200);
							});
	};
	function cierraV(){
		$($m).stop().animate({ 
				right: '-284px'
				}, 200, function(){
					$($p).animate({
						left: '0'
						}, 200);
							});
	};
	function check_email(val){
    if(!val.match(/\S+@\S+\.\S+/)){ 
        return false;
    }
    if( val.indexOf(' ')!=-1 || val.indexOf('..')!=-1){
        return false;
    }
    return true;
}
$(document).ready(function(){
    var options = {
        autoPlay: false,
		//autoPlayDelay: 6000,
        nextButton: true,
        prevButton: true,
		keyEvents: false,
		numericKeysGoToFrames: false,
        preloader: true,
        navigationSkip: false
    };
    var sequence = $("#sequence").sequence(options).data("sequence");
    sequence.afterLoaded = function(){
        $(".sequence-prev, .sequence-next").fadeIn(150);
    }
	
	$('#casos .wrapper ul').bxSlider({
  		  slideWidth: 300,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 3,
    slideMargin: 0
	});
	$an = Math.floor($('.sequence-canvas li').width()/3);
	$('#casos ul li').width($an)
	$('.modal .body ul li').on({
		click: function(){
			$v = $('#spent').val()
			$i = $v*0.4*0.8;
			$f = $v*0.4*0.5;
			$n = $v*0.55*0.5;
			$lp = $v*0.55*0.75;
			$('.show').hide();
			$('.show', this).show(50, function(){
				if( $('input', this).hasClass('incandescent') ){
					$('input', this).val($i);
					}
				else if( $('input', this).hasClass('fluorescent') ){
					$('input', this).val($f);
					}
				else if( $('input', this).hasClass('natural') ){
					$('input', this).val($n);
					}
				else if( $('input', this).hasClass('gaslp') ){
					$('input', this).val($lp);
					}
				});
			
			},
		})
	$('.btn_modal').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'padding' 		:  0,
		'margin'       :  5,
		'width'			: 476,
		'overlayShow'	:	true,
		'overlayOpacity' : '0.5'
	});
	$('.casos_box').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'padding' 		:  0,
		'margin'       :  5,
		'opacity'		: .9,
		'width'			: 476,
		'overlayShow'	:	true,
		'overlayOpacity' : '0.5'
	});
	$('.goto').on({
		click: function(){
			$s = $(this).attr('data-slide');
			sequence.goTo($s, 1);
			cierraV();
			return false;
			}
		});
	$('.nav_btn').on({
		click:function(){
			if( $m.css('right') == '-284px' ){
					abreV();
					return false;
				} else {
					cierraV();
					return false;
					}
				},
			});
	$('.send').on({
		click: function(){
			$in = $('input#name');
			$im = $('input#mail');
			$me = $('textarea#comments');
			var mail = check_email($im.val());
			if( $in.val() == '' || $in.val() == null){
				$('small.name').show();
				}
			else if(mail == false){
        		$('small.email').show();
   			 }
			 else if( $me.val() == '' || $me.val() == null ){
        		$('small.comments').show();
   			 }
			else{
				$('small').hide();
				return true
				}
			},
		})
});
$(window).resize(function(e) {
	//$an = Math.floor($('.sequence-canvas li').width()/3);
   // $('#casos ul li').width($an)
});