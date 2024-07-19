// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const RutwikTest = require('../models/rutwiktestSchema');

// CRUD operations for RutwikTest
// Create Controller 
const createRutwikTest = async (req, res) => { 
    const { Field1, field2nest } = req.body;
    try {
        const rutwiktest = await RutwikTest.create({ Field1, field2nest }) 
        await rutwiktest.save();
        res.status(201).json(rutwiktest);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateRutwikTest = async (req, res) => { 
    const _id=req.params.id;
    const { Field1, field2nest } = req.body;
    try {
        const rutwiktest = await RutwikTest.findByIdAndUpdate( _id, { Field1, field2nest },{new:true}) 
        if (!rutwiktest) {
            return res.status(404).send('rutwiktest not found');
        }
        await rutwiktest.save();
        res.status(201).json(rutwiktest);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteRutwikTest = async (req, res) => { 
    const _id=req.params.id;
    try {
        const rutwiktest = await RutwikTest.findById(_id)
        if (!rutwiktest) {
            return res.status(404).send('rutwiktest not found');
        }
        await RutwikTest.deleteOne({_id: _id})
        await rutwiktest.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getRutwikTest = async (req, res) => { 
    const _id=req.params.id;
    try {
        const rutwiktest = await RutwikTest.findById(_id)
        if (!rutwiktest) {
            return res.status(404).send('rutwiktest not found');
        }
        res.status(201).json(rutwiktest);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllRutwikTest = async (req, res) => { 
    try {
        const rutwiktest = await RutwikTest.find({})
        if (!rutwiktest) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(rutwiktest);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createRutwikTest,
    updateRutwikTest,
    deleteRutwikTest,
    getRutwikTest,
    getAllRutwikTest
}