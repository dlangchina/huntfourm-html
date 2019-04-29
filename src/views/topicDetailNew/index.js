import '../../assets/Common';
import './index.scss';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

$(function () {
    // let data = '';
    ClassicEditor.create(document.querySelector('#editor'), {
        toolbar: ['bold', 'italic', 'bulletedList', 'numberedList']
    }, {
        language: 'zh-CN'
    }, {
        ckfinder: {
            uploadUrl: '/'
        }
    }).then(editor => {
        window.editor = editor;
        // data = editor.getData();
        // console.log(data);
    }).catch(err => {
        console.error(err.stack);
    });

    $('#reply-button').click(function () {
        let result = window.editor.getData();
        console.log(result);
        alert(result);
    });
});
$(document).delegate('.btn-move-page', 'click', function () {
    let type = $(this).attr('data-type');
    if (type === 'top') {
        window.scrollTop(0, 1000);
    } else if (type === 'bottom') {
        let scrollDom = $('.media-body');
        scrollDom.scrollTop = scrollDom.scrollHeight;
    }
});
