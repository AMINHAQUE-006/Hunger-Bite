import fetch from 'node-fetch';

export default async (req, res) => {
    try {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.518006&lng=88.383206&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};