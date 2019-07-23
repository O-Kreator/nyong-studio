const View = {};

/** DOM list */
View.DOM = {};
/** DOM: body > section */
View.DOM.templateContents = document.querySelector('body > section');


/** Fade out `target` DOM for 0.2s */
View.fadeOut = function(target = this.DOM.templateContents) {
    target.classList.add('opacity0');
    setTimeout( () => { target.classList.add('displaynone'); }, 200 );
}

/** Fade in `target` DOM for 0.2s */
View.fadeIn = function(target = this.DOM.templateContents) {
    target.classList.remove('displaynone');
    setTimeout( () => { target.classList.remove('opacity0'); }, 200 );
}

/** Make a DOM: `<tag>data</tag>` */
View.renderDOM = function(tag, data) {
    const tagDOM = document.createElement(tag);
    tagDOM.innerHTML = data;

    return tagDOM;
}

export default View;