import '../../assets/Common';
import './index.scss';

$(document).delegate('.nav-item', 'click', function () {
    let itemId = $(this).attr('itemid');
    $('.nav-item').find('a').removeClass('active');
    $(this).find('a').addClass('active');
    console.log(itemId);
    $('.card-right').css('display', 'none');
    $('#' + itemId).css('display', 'block');
});
