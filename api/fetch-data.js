import fetch from 'node-fetch';


export default async (req, res) => {
    try {
        const response = await fetch('/api/fetch-api');
        
        if (!response.ok) {
            // Log the error response status and text for debugging
            const errorText = await response.text();
            console.error(`Error fetching data: ${response.status} - ${errorText}`);
            throw new Error(`Failed to fetch data: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        // Log the error message for debugging
        console.error('Error in fetch-data.js:', error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};