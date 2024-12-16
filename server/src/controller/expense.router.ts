import { NextFunction, Request,Response } from "express"


export const getExpenseData = async(req: Request,res: Response, next : NextFunction)=>{
    try{

    }catch(err){
        console.log('cant get expense data', err)
        next(err)
    }
}
export const getAggregatedDashboard = async(req: Request,res: Response, next : NextFunction)=>{
    try{

    }catch(err){
        console.log('cant get aggregated dashboard data', err)
        next(err)
    }
}
export const addNewExpense = async(req: Request,res: Response, next : NextFunction)=>{
    try{

    }catch(err){
        console.log('cant get aggregated dashboard data', err)
        next(err)
    }
}
export const updateExistingExpense = async(req: Request,res: Response, next : NextFunction)=>{
    try{

    }catch(err){
        console.log('cant update existing expense', err)
        next(err)
    }
}
