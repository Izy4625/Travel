import { Schema,model } from "mongoose";

const daySchema =new Schema({
    date:{
        type:Date,
        default: Date.now,
        unique: true
    },
    
    food:{
        type: Number,
        default :0
     },
     
     shopping:{
        type: Number,
        default :0
     },
     activities:{
        type: Number,
        default :0
     },
     accomidation:{
        type: Number,
        default :0
     },
     other:{
        type: Number,
        default :0
     },
})
export type Day = ReturnType<()=> typeof daySchema>

export const DayModel = model('Day', daySchema)