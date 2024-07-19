const mongoose = require('mongoose');

const RutwikTestSchema = new mongoose.Schema(
{
    Field1: { 
        type: Number,
        required: true,
        unique: false
    },
field2nest : [
{ 
 Field3 : [
{ 
  
   field4: { 
        type: Number,
        required: false,
        unique: false
    
},
}
]
,
}
],
});

module.exports = mongoose.model('RutwikTest', RutwikTestSchema);
