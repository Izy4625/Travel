import { SettingsModel } from "../models/settingsModel"
import { Setting } from "../models/settingsModel"
export const getSettings = async()=>{
    try{
     return await SettingsModel.findOne({}).lean()
    }catch(err){
        console.log(err)
        throw err
    }
}
export const patchSettings = async(newSettings: Setting)=>{
    try{
  const updateData =   await SettingsModel.findOneAndUpdate({},{$set: newSettings})
    }catch(err){
        console.log(err)
        throw err
    }
}

export const createSeed = async()=>{
    try{
        const firstDoc = new SettingsModel({});
        await firstDoc.save()
    }catch(err){
        console.log(err)
        throw err
    }
}