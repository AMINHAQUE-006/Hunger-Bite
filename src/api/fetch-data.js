const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const data = await response.json();

    res.status(200).json(data);
};