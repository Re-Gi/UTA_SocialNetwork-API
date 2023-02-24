const dayjs = require('dayjs')

function formatDate(date) {
    let day = dayjs(date).format('MMM DD, YYYY');
    let time = dayjs(date).format('hh:mm a');
  
    return `${day} at ${time}`
};

module.exports = { formatDate };