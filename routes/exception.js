const express = require('express');
const router = express.Router();

router.get('/trigger', (req, res) => {
    try {
        const error = new Error('This is a custom exception triggered on the server!');
        error.status = 400;
        throw error;
    } catch (error) {
        res.status(error.status || 500).json({ 
            success: true, 
            error: error.message || 'Unknown error on server' 
        });
    }
});


module.exports = router;