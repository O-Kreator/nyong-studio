import View from './View.js'


function itemThumbnailRender(data) {
    let thumbnail = document.createElement('img');
    thumbnail.setAttribute('src', data.thumbnail.image);
    
    return thumbnail;
}

function itemAnchorRender(data) {
    let eventListener = View.show(data)

    let anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    
    if( data.hasOwnProperty('position') ) {
        anchor.setAttribute('class', data.)
    }

    anchor.addEventListener('click', eventListener);
    removeListenerList.push(() => {
        anchor.removeEventListener('click', eventListener);
    });

    return anchor;
}

function domRender(data) {
    let domThumbnail = itemThumbnailRender(data);
    let domAnchor = itemAnchorRender(data);


}