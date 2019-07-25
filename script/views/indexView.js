import View from './View'

const IndexView = Object.create(View);

/** Make `<a>` string with `icon_about.svg`. */
IndexView.buttonAbout = function(data) {
    return `<a id="button_about" href="#"><img src="${data}"></a>`
}

/** Make `<header>` element */
IndexView.header = function(data) {
    return View.renderDOM('header', this.buttonAbout(data));
}



/** Catchphrase */
IndexView.catchphrase = function(data) {
    return View.renderDOM('h1', data);
}

/** Greeting */
IndexView.greeting = function(data) {
    return View.renderDOM('h3', data);
}

/** Introduce */
IndexView.introduce = function(data) {
    return View.renderDOM('h2', data);
}

/** Make `<li>` string for `#contact_index` */
IndexView.contactListItem = function(data) {
    if( data.href )
        return `
            <li>
                <a href="${data.href}">
                    <img class="${data.class}" src="${data.icon}">
                </a>
            </li>`;
    else
        return `
            <li>
                <a href="#">
                    <img class="${data.class}" src="${data.icon}">
                </a>
            </li>`;
}

/** Make `<ul>` string for `#contact_index` */
IndexView.contactList = function(data) {
    let contactListInnerHTML = '';

    for(let dataItem in data) {
        if(data[dataItem].isShownInIndex === true) {
            contactListInnerHTML += this.contactListItem(data[dataItem]);
        }
    }

    return `<ul>${contactListInnerHTML}</ul>`;
}

/** Make `<nav>` element for `#contact_index` */
IndexView.contact = function(data) {
    const contact = document.createElement('nav');
    contact.id = 'contact_index';
    contact.innerHTML += this.contactList(data);

    return contact;
}

IndexView.article = function(indexModel, contactModel) {
    const article = document.createElement('article');

    article.appendChild(this.catchphrase(indexModel.catchphrase));
    article.appendChild(document.createElement('hr'))
    article.appendChild(this.greeting(indexModel.greeting))
    article.appendChild(this.introduce(indexModel.introduce));

    console.log(contactModel);
    article.appendChild(this.contact(contactModel));

    return article;
}



/** Make `<li>` string for `#works_menu` */
IndexView.worksMenuListItemString = function(data) {
    const worksMenuListItemInnerHTML = `
        <a href="${data.anchor}">
            <div>
                <h2>${data.title}</h2>
                <p>${data.caption}</p>
            </div>
        </a>
    `;

    return `<li style="background-image: url(${data.thumbnail});">${worksMenuListItemInnerHTML}</li>`;
}

/** Make `<ul>` string for `#works_menu` */
IndexView.worksMenuList = function(data) {
    let worksMenuListInnerHTML = '';
    data.forEach(element => {
        worksMenuListInnerHTML += this.worksMenuListItemString(element);
    });

    return `<ul>${worksMenuListInnerHTML}</ul>`;
}

/** Make `<nav>` element for `#works_menu` */
IndexView.worksMenu = function(data) {
    const worksMenu = document.createElement('nav');
    worksMenu.id = 'works_menu'
    worksMenu.innerHTML = this.worksMenuList(data);

    return worksMenu;
}

export default IndexView;