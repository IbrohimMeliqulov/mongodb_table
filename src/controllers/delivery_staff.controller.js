import delivery_staff_Model from "../models/delivery_staff.models.js";



export const deliver_staffController={
    create:async function(req,res,next){
        try{
            const delivery_staff=await delivery_staff_Model.create(req.body)
            return res.status(201).send({
                message:"Successfully created",
                data:delivery_staff
            })
        }catch(err){
            return next(err)
        }
    },
    getAllStaff:async function(req,res,next){
        try{
            const delivery_staffs=await delivery_staff_Model.find()
            return res.status(200).send({
                message:true,
                data:delivery_staffs
            })
        }catch(err){
            return next(err)
        }
    },
    update:async function(req,res,next){
        try{
            const id=req.params.id
            const exists=await delivery_staff_Model.findById({_id:id})
            if(exists.length===0) return res.status(404).send({message:`${id} staff not found`})
            const updated_staff=await delivery_staff_Model.findByIdAndUpdate(id,req.body,{new:true})
            return res.status(200).send({
                message:`${id} updated successfully`,
                data:updated_staff
            })
        }catch(err){
            return next(err)
        }
    },
    delete:async function(req,res,next){
        try{
            const id=req.params.id
            const exists=await delivery_staff_Model.findById({_id:id})
            if(exists.length===0) return res.status(404).send({message:`${id} not found`})
            const deleted_staff=await delivery_staff_Model.deleteOne({_id:id})
            return res.status(200).send({message:`${id} deleted from table`,data:deleted_staff})
        }catch(err){
            return next(err)
        }
    }
}