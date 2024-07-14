
const express=require('express');
const router=express.Router();
const Toggle=require('../modules/toggle');


router.post('/toggle', async (req, res) => {
    try {
        const dish = {
           
            ispublished: req.body.ispublished,
            dishId:req.body.dishId
            
        };

        const toggle = await Toggle.create(dish);
        res.status(201).json(toggle); // Respond with the created dish object
    } catch (error) {
        console.error('Error saving dish:', error);
        res.status(500).json({ error: error });
    }
});



router.get('/ispublished', async (req, res) => {
    try {
      
        const toggle = await Toggle.find();
        res.status(201).json(toggle); // Respond with the created dish object
    } catch (error) {
        console.error('Error reciving  dish:', error);
        res.status(500).json({ error: error });
    }
});
module.exports=router;