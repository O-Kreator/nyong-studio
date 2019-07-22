import View from './View'

const IndexView = Object.create(View);

IndexView.setup = function(section, data) {
    section.innerHTML = '';
    section.appendChild(IndexView.header());
}

IndexView.header = function() {
    return this.makeElement('header',
        `<a id="button_about" href="#"><img src="./img/icon_about.svg"></a>`
    );
}

IndexView.article = function(data) {
    return this.makeElement('article',
        this.catchphrase(data) +
        '<hr>' +
        this.greeting(data) + this.introduce(data) +
        this.contact(data)
    );
}

IndexView.catchphrase = function(data) {
    return this.makeElement('h1', data);
}

IndexView.greeting = function(data) {
    return this.makeElement('h3', data);
}

IndexView.introduce = function(data) {
    return this.makeElement('h2', data);
}

IndexView.contact = function(data) {
    let contactIndex = document.createElement('nav');
    contactIndex.id = 'contact_index';

    let contactList = document.createElement('ul');
    contactIndex.appendChild(contactList);

    for(contactInfo of data) {
        if(contactInfo.isShownInIndex === true) {
            let contactIcon = document.createElement('img');

            contactIcon.classList.add(contactInfo.a);
            contactIcon.setAttribute('src', `./img/icon_${contactInfo.a}.svg`);

            let contactAnchor = document.createElement('a');
            contactAnchor.appendChild(contactIcon);

            contactAnchor.setAttribute('href', contactInfo.href);

            let contactListItem = document.createElement('li');
            contactListItem.appendChild(contactAnchor);

            contactList.appendChild(contactListItem);
        }
    }

    return contactIndex;
}

export default IndexView;