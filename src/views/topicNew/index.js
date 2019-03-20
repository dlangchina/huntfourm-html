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

const vditor = new Vditor('editor', {
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

window.vditorTest = new Vditor('vditorTest', {
    cache: true,
    height: 200,
    width: 500,
    counter: 100,
    resize: {
        enable: true,
        position: 'top',
        after: height => {
            console.log(`after resize, height change: ${height}`)
        },
    },
    placeholder: 'say sth...',
    lang: 'en_US',
    preview: {
        url: '/api/markdown',
        parse: (element) => {
            console.log(element)
            LazyLoadImage()
        },
    },
    hint: {
        emojiPath: 'https://static.hacpai.com/emoji/graphics',
        emojiTail: '<a href="https://hacpai.com/settings/function" target="_blank">设置常用表情</a>',
        emoji: {
            '+1': '👍',
            '-1': '👎',
            'trollface': '/src/assets/emoji/trollface.png',
            'huaji': '/src/assets/emoji/huaji.gif',
        },
        at: (key) => {
            console.log(`atUser: ${key}`)
            return [
                {
                    value: '@88250',
                    html: '<img src="https://img.hacpai.com/avatar/1353745196354_1535379434567.png?imageView2/1/w/52/h/52/interlace/0/q"> 88250',
                },
                {
                    value: '@Vanessa',
                    html: '<img src="https://img.hacpai.com/avatar/1353745196354_1535379434567.png?imageView2/1/w/52/h/52/interlace/0/q"> Vanessa',
                }]
        },
    },
    classes: {
        preview: 'content-reset',
    },
    focus: (val) => {
        console.log(`focus value: ${val}`)
        console.log(
            `focus cursor position:${JSON.stringify(vditor.getCursorPosition())}`)
    },
    blur: (val) => {
        console.log(`blur: ${val}`)
    },
    input: (val, mdElement) => {
        console.log('change:' + val, mdElement)
    },
    esc: (val) => {
        console.log(`esc: ${val}`)
    },
    ctrlEnter: (val) => {
        console.log(`ctrlEnter: ${val}`)
    },
    select: (val) => {
        console.log(`select: ${val}`)
    },
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
    toolbar: [
        {
            name: 'preview',
            tipPosition: 'ne',
        },
        'br',
        {
            name: 'emoji',
        },
        'strike',
    ],
})


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
