/* eslint-disable */
import '../../assets/Common';
import './index.scss';

const LazyLoadImage = () => {
    const loadImg = (it) => {
        const testImage = document.createElement('img')
        testImage.src = it.getAttribute('data-src')
        testImage.addEventListener('load', () => {
            it.src = testImage.src
            it.style.backgroundImage = 'none'
            it.style.backgroundColor = 'transparent'
        })
        it.removeAttribute('data-src')
    }

    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('img').forEach((data) => {
            if (data.getAttribute('data-src')) {
                loadImg(data)
            }
        })
        return false
    }

    if (window.imageIntersectionObserver) {
        window.imageIntersectionObserver.disconnect()
        document.querySelectorAll('img').forEach(function (data) {
            window.imageIntersectionObserver.observe(data)
        })
    } else {
        window.imageIntersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entrie) => {
                if ((typeof entrie.isIntersecting === 'undefined'
                    ? entrie.intersectionRatio !== 0
                    : entrie.isIntersecting) && entrie.target.getAttribute('data-src')) {
                    loadImg(entrie.target)
                }
            })
        })
        document.querySelectorAll('img').forEach(function (data) {
            window.imageIntersectionObserver.observe(data)
        })
    }
}

const vditor = new Vditor('vditor', {
    counter: 1000,
    height: 300,
    editorName: 'vditor',
    tab: '  ',
    upload: {
        accept: 'image/*,.pdf',
        token: 'test',
        url: '/api/upload/editor',
        linkToImgUrl: '/api/upload/fetch',
        filename: name => {
            // ? \ / : | < > * [ ] white to -
            return name.replace(/\?|\\|\/|:|\||<|>|\*|\[|\]|\s+/g, '-')
        },
    },
    preview: {
        show: true,
        parse: () => {
            LazyLoadImage()
        },
    },
})
vditor.focus(ews=>{
    console.log(ews)
    console.log('asdsad')
})
// $('#reply-button').click(function () {
//     let result = vditor.focus();
//
//     console.log(result);
//     alert(result);
// });


// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//
// $(function () {
//     // let data = '';
//     ClassicEditor.create(document.querySelector('#editor'), {
//         toolbar: ['bold', 'italic', 'bulletedList', 'numberedList']
//     }, {
//         language: 'zh-CN'
//     }, {
//         ckfinder: {
//             uploadUrl: '/'
//         }
//     }).then(editor => {
//         window.editor = editor;
//         // data = editor.getData();
//         // console.log(data);
//     }).catch(err => {
//         console.error(err.stack);
//     });
//
//     $('#reply-button').click(function () {
//         let result = window.editor.getData();
//         console.log(result);
//         alert(result);
//     });
// });
// $(document).delegate('.btn-move-page', 'click', function () {
//     let type = $(this).attr('data-type');
//     if (type === 'top') {
//         window.scrollTop(0, 1000);
//     } else if (type === 'bottom') {
//         let scrollDom = $('.media-body');
//         scrollDom.scrollTop = scrollDom.scrollHeight;
//     }
// });
