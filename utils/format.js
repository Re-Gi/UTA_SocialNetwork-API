const dayjs = require('dayjs')

function formatDate(date) {
    let date = dayjs(date).format('MMM DD, YYYY');
    let time = dayjs(date).format('hh:mm a');
  
    return `${date} at ${time}`
};

module.exports = { formatDate };