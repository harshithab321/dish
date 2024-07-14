const express=require('express');
const router=express.Router();
const Dish=require('../modules/dishesmodel');

router.post('/store', async (req, res) => {
    try {
        const dish = {
            dishId: req.body.dishId,
            dishname: req.body.dishname,
          
            imageUrl: req.body.imageUrl
        };

        const newDish = await Dish.create(dish);
        res.status(201).json(newDish); // Respond with the created dish object
    } catch (error) {
        console.error('Error saving dish:', error);
        res.status(500).json({ error: error });
    }
});


router.get('/getdish', async (req, res) => {
    try {
   
        const newDish = await Dish.find();
        res.status(201).json(newDish); // Respond with the created dish object
    } catch (error) {
        console.error('Error saving dish:', error);
        res.status(500).json({ error: error });
    }
});


module.exports=router;