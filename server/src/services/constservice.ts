import { Const, ConstModel } from "../models/constModels"

export const getConst = async () => {
    try {
        return await ConstModel.find({}).lean()
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const addDailyExpense = async (data: Const) => {
    try {
       const constExpense = new ConstModel(data)
       return await constExpense.save();
    } catch (err) {
        console.log(err)
        throw err
    }
}