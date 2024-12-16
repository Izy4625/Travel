import { NextFunction,Request,Response } from "express";

export const updateSettings = async(req: Request,res: Response, next : NextFunction)=>{
    try{

    }catch(err){
        console.log('cant update settings', err)
        next(err)
    }
}

export const getSettings = async(req: Request,res: Response, next : NextFunction)=>
    {
        try{

        }catch(err){
            console.log('cant get settings', err)
            next(err)
        }
        
    }