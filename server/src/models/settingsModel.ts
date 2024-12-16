import { Schema,model } from "mongoose";

const settingSchema =new Schema({
    total:{
        type: Number,
        default :0
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
export type Setting = ReturnType<()=> typeof settingSchema>

export const SettingsModel = model('Setting', settingSchema)