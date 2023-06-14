const express = require("express");
const router = express.Router();
const Schemas = require('../models/schemas.js');

router.get("/benefits", async (req, res) => {
    try {
        const benefitsList = await Schemas.Benefits.find().exec();
        res.json(benefitsList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }
    
    /* const benefitsList = Schemas.Benefits.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData){
            res.end(JSON.stringify(orderData));
        } else{
            res.end();
        }
    }); */
});

router.get("/botFunctionalities", async (req, res) => {
    try {
        const botFunctionalitiesList = await Schemas.BotFunctionalities.find().exec();
        res.json(botFunctionalitiesList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }

    /* const botFunctionalitiesList = Schemas.BotFunctionalities.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/characters", async (req, res) => {
    try {
        const charactersList = await Schemas.Characters.find().exec();
        res.json(charactersList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }

    /* const charactersList = Schemas.Characters.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/characters/:processArea", async (req, res) => {
    try {
        const { processArea } = req.params;
        
        const charsByProcessArea = await Schemas.Characters.find({ processArea: processArea }, 'characterID character imageSrc botImageSrc processArea').exec();
        res.json(charsByProcessArea);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }
    
    /* const charactersList = Schemas.Characters.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/cpgUnits", async (req, res) => {
    try {
        const cpgUnitsList = await Schemas.CpgUnits.find().exec();
        res.json(cpgUnitsList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }

    /* const cpgUnitsList = Schemas.CpgUnits.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/customers", async (req, res) => {
    try {
        const customersList = await Schemas.Customers.find().exec();
        res.json(customersList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }

    /* const customersList = Schemas.Customers.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/functionalities", async (req, res) => {
    try {
        const functionalitiesList = await Schemas.Functionalities.find().exec();
        res.json(functionalitiesList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }
    
    /* const functionalitiesList = Schemas.Functionalities.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/masterData", async (req, res) => {
    try {
        const masterDataList = await Schemas.MasterData.find().exec();
        res.json(masterDataList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }

    /* const masterDataList = Schemas.MasterData.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/processAreas", async (req, res) => {
    
    try {
        //console.log("==INSIDE PROCESSAREA==");
        const processAreasList = await Schemas.ProcessAreas.find().exec();
        //console.log("==CREATED PROCESSAREALIST==");
        res.json(processAreasList);
        //console.log("==SET THE PROCESSAREALIST TO RESPONSE==");
    } catch (error) { 
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }
        /* Schemas.ProcessAreas.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/rpaTools", async (req, res) => {
    try {
        const rpaToolsList = await Schemas.RPATools.find().exec();
        res.json(rpaToolsList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }

    /* const rpaToolsList = Schemas.RPATools.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/useCases", async (req, res) => {
    try {
        const useCasesList = await Schemas.UseCases.find().exec();
        res.json(useCasesList);
    } catch (error) {
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }

    /* const useCasesList = Schemas.UseCases.find({}, (err, orderData) => {
        if (err) throw err;
        if (orderData) {
            res.end(JSON.stringify(orderData));
        } else {
            res.end();
        }
    }); */
});

router.get("/useCases/:character", async (req, res) => {
    
    try {
        const { character } = req.params;
    
        const useCaseByCharacter = await Schemas.UseCases.find({ character: character }, 'name processScenario summaryAsIsProcess automationScope functionality processArea character imageSrc botImageSrc benefits botFunctionality rpaToolUsed processFlow processMap').exec();
        res.json(useCaseByCharacter);
    } catch (error) { 
        console.error('Error retrieving data : ', error);
        res.status(500).json({ error: 'Internal Server error' });
    }
});

module.exports = router;