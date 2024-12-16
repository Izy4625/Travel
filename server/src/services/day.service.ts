import { Day, DayModel } from "../models/dayModels"

export const getDay = async () => {
    try {
        return await DayModel.find({}).lean()
    } catch (err) {
        console.log(err)
        throw err
    }
}
export const addDailyExpense = async (data: Day) => {
    try {
        let day = await DayModel.findOne({
            $gte: new Date(new Date().setHours(0, 0, 0)),
            $lt: new Date(new Date().setHours(23, 59, 59))
        })

        if (!day) {
            day = new DayModel({})

        }
        day = { ...day, ...data as any };

        day?.save();
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const patchDailyExpense = async (id: string, data: Day) => {
    try {
        return await DayModel.findOneAndUpdate({ id },
            { $set: data }
        )
    } catch (err) {
        console.log(err)
        throw err
    }
}






export const createSeed = async () => {
    try {
        const firstDoc = new DayModel({});
        await firstDoc.save()
    } catch (err) {
        console.log(err)
        throw err
    }
}