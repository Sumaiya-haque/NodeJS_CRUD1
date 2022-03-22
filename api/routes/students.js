const express = require('express'); //improted express package
const router = express.Router();         //using built-in-function Router in express package
const mongoose = require('mongoose');  // importing mongoose

const Student = require('../models/student');

router.get('/', (req, res, next) => {
    res.status(200).json({
        mesage: "Get Request"
    })
})

router.post('/',( req, res, next)=> {
  
    const information ={                              
      
          _id : mongoose.Types.ObjectId(),                       
          Name : req.body.Name,                                
          Batch : req.body.Batch,                                
                                         
        }
        const student = new Student(information);            //created an object to pass information
        student.save()                                         //after passing we need to save it
        .then(result => res.status(200).json(result))             //if it goes well then we need to return a promise (.then())in json format message
        .catch(err => res.status(500).json(err))                 // catch will take the errors like try-catch
   
   
    })
        
        module.exports = router;
