import { Schema,model } from "mongoose";

const constSchema =new Schema({
     description: String,
     amount: Number,

},{timestamps: true})

export type Const = ReturnType<()=> typeof constSchema>
export const ConstModel = model('Const', constSchema)