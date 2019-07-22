import IndexView from '../views/indexView'

import indexModel from '../models/indexModel'

export default {
    init() {
        IndexView.setup(document.querySelector('body > section'), indexModel.list());
    }
}