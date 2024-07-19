const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// RutwikTest routes
const { createRutwikTest, updateRutwikTest, deleteRutwikTest, getRutwikTest, getAllRutwikTest } = require('../controllers/rutwiktest');
// 
router.post("/rutwiktest/create", checkAuthorizationHeaders,authorizeUser("createRutwikTest") ,createRutwikTest);
router.put("/rutwiktest/update/:id", checkAuthorizationHeaders,authorizeUser("updateRutwikTest"), updateRutwikTest);
router.delete("/rutwiktest/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteRutwikTest"), deleteRutwikTest);
router.get("/rutwiktest/get/:id", checkAuthorizationHeaders, authorizeUser("readRutwikTest"), getRutwikTest);
router.get("/rutwiktest/getAll", checkAuthorizationHeaders, authorizeUser("readRutwikTest"), getAllRutwikTest);

    
// RutwikTest routes
const { createRutwikTest, updateRutwikTest, deleteRutwikTest, getRutwikTest, getAllRutwikTest } = require('../controllers/rutwiktest');
// 
router.post("/rutwiktest/create", checkAuthorizationHeaders,authorizeUser("createRutwikTest") ,createRutwikTest);
router.put("/rutwiktest/update/:id", checkAuthorizationHeaders,authorizeUser("updateRutwikTest"), updateRutwikTest);
router.delete("/rutwiktest/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteRutwikTest"), deleteRutwikTest);
router.get("/rutwiktest/get/:id", checkAuthorizationHeaders, authorizeUser("readRutwikTest"), getRutwikTest);
router.get("/rutwiktest/getAll", checkAuthorizationHeaders, authorizeUser("readRutwikTest"), getAllRutwikTest);

  
module.exports = router;
