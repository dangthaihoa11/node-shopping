const express = require('express')
const router = express.Router();

// Gọi đến các Routes
router.use('/admin/dashboards',require('../routes/R_Dashboards'));
router.use('/admin/categories',require('../routes/R_Categories'));
router.use('/admin/products',require('../routes/R_Products'));
router.use('/admin/users',require('../routes/R_Users'));

module.exports = router;
