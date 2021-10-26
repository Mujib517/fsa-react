import moment from 'moment';

const getRelativeTime = (dt) => {
    return moment(dt).fromNow();
}

const dateUtils = {
    getRelativeTime
}

export default dateUtils;
