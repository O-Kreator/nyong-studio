export default {

    init(element) {
        if (!element) throw element;
        this.element = element;
        return this;
    },

    on(event, handler) {
        this.element.addEventListener(event, handler);
        return this;
    },

    makeElement(tag, data) {
        let element = document.createElement(tag)
        element.innerHTML = data;
        return element;
    },

    fadeOut() {
        this.element.classList.add('opacity0');
        setTimeout( () => {
            this.element.classList.add('displaynone');
        }, 200);
        return this;
    },

    fadeIn() {
        this.element.classList.remove('displaynone');
        setTimeout( () => {
            this.element.classList.remove('opacity0');
        }, 200);
        return this;
    }

}