/*
* Applying contact data
*/

const contactList = Object.keys(contact);

for( let i = 0; i < contactList.length; i++ ) {
    let anchor = contact[contactList[i]].a;
    let value = contact[contactList[i]].value;
    let href = contact[contactList[i]].href;

    anchor[anchor.length - 1].innerHTML = value;

    if( href !== null ) {
        for( let j = 0; j < anchor.length; j++ ) {
            anchor[j].setAttribute('href', href);
        }
    } else {
        for( let j = 0; j < anchor.length; j++ ) {
            anchor[j].removeAttribute('href');
        }
    }
}



/*
* SPA
*/

let currentMenu = menu.main;
let previousMenu;
let previousWorksList;
let previousWorksListTarget;

let removeListenerList = [];

const workListRemoveEventListener = function() {
    removeListenerList.forEach(function(item) { item(); });
    this.removeEventListener('click', workListRemoveEventListener);
    removeListenerList = [];
}

const worksListContentsAdd = function(worksListTarget, contents) {
    const worksListItemEventListener = function(i) {
        return function() {
            menuChange(menu.worksView);
            contentsChange('worksView', contents[i]);
        }
    }

    for (let i = 0; i < contents.length; i++) {
        let worksListItem = document.createElement('a');
        let worksListItemThumbnail = document.createElement('img');
        
        worksListTarget.appendChild(worksListItem);
        worksListItem.appendChild(worksListItemThumbnail);
        
        worksListItem.setAttribute('class', contents[i].thumbnail.type);
        worksListItem.setAttribute('href', '#');
        worksListItemThumbnail.setAttribute('src', contents[i].thumbnail.image);
        
        let eventListener = worksListItemEventListener(i);
        worksListItem.addEventListener('click', eventListener);
        removeListenerList.push(function() { worksListItem.removeEventListener('click', eventListener); });
    }
}

const worksListWideContentsAdd = function(contents) {
    const worksListWideItemEventListener = function (i) {
        return function() {
            menuChange(menu.worksView);
            contentsChange('worksView', contents[i]);
        }
    }

    for (let i = 0; i < contents.length; i++) {
        let worksListWideItem = document.createElement('a');
        let worksListWideItemThumbnail = document.createElement('img');

        worksListWideTarget.appendChild(worksListWideItem);
        worksListWideItem.appendChild(worksListWideItemThumbnail);

        worksListWideItem.setAttribute('href', '#');
        worksListWideItemThumbnail.setAttribute('src', contents[i].thumbnail.image);

        let eventListener = worksListWideItemEventListener(i);
        worksListWideItem.addEventListener('click', eventListener);
        removeListenerList.push(function() { worksListWideItem.removeEventListener('click', eventListener); });
    }
}

const contentsChange = function(target, contents) {
	if (!target.match(/^works(?:List|ListWide|View|)$/))
		return console.error('Error! param of contentsChange: target \'' + target + '\' is not the right type.');
	
    if ( target === 'worksList' ) {
        worksListHeadline.innerHTML = contents.title;

        let worksListLeftOnly = contents.list.filter( function( item ) { return item.position === 'left'; } );
        let worksListRightOnly = contents.list.filter( function( item ) { return item.position === 'right'; } );

        worksListLeft.innerHTML = '';
        worksListRight.innerHTML = '';

        worksListContentsAdd(worksListLeft, worksListLeftOnly);
        worksListContentsAdd(worksListRight, worksListRightOnly);

        previousMenu = contents;
        previousWorksList = menu.worksList;
        previousWorksListTarget = target;
	}
	
	if ( target === 'worksListWide' ) {
        worksListWideHeadline.innerHTML = contents.title;

        worksListWideTarget.innerHTML = '';

        worksListWideContentsAdd(contents.list);

        previousMenu = contents;
        previousWorksList = menu.worksListWide;
        previousWorksListTarget = target;
	}
	
	if ( target === 'worksView' ) {
        worksViewTitle.innerHTML = contents.view.title;
        worksViewDate.innerHTML = contents.view.date;
        worksViewDescription.innerHTML = contents.view.description;

        worksViewImage.setAttribute('src', contents.view.image);
	}
}

const menuChange = function(target) {
    if (target === currentMenu) { return; }

    workListRemoveEventListener();

    currentMenu.section.classList.add('opacity0');
    setTimeout( function() {
        currentMenu.section.classList.add('displaynone');
        target.section.classList.remove('displaynone');
    }, 200);
    setTimeout( function() {
        target.section.classList.remove('opacity0');
    }, 300);

    document.body.classList.remove(currentMenu.bodyStatus);
    document.body.classList.add(target.bodyStatus);

    setTimeout( function() { currentMenu = target; }, 200);
}


menu.main.link.addEventListener('click', function() { menuChange(menu.main); });
menu.about.link.addEventListener('click', function() { menuChange(menu.about); });

worksListButtonBack.addEventListener('click', function() { menuChange(menu.main); });
worksListWideButtonBack.addEventListener('click', function() { menuChange(menu.main); });

worksViewButtonBack.addEventListener('click', function() {
    menuChange(previousWorksList);
    contentsChange(previousWorksListTarget, previousMenu);
});

menu.worksList.link.forEach(function(item, index) {
    item.addEventListener('click', function() {menuChange(menu.worksList);
        contentsChange('worksList', menu.worksList.contents[index]);
    });
});
menu.worksListWide.link.addEventListener('click', function() {
    menuChange(menu.worksListWide);
    contentsChange('worksListWide', menu.worksListWide.contents[0]
    );
});
