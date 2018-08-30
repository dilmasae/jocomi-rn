export default {

    searchByName: (DATA = [], q = '') => {
        return DATA.filter(item => {
            const TITLE = item.title ? item.title.rendered : '';
            return TITLE.toLowerCase().search(q.toLowerCase()) !== -1;
        })
    }

}