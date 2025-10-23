import orderModel from "../models/orders.models.js";


export const orderController={
    create:async function(req,res,next){
        try{
            const order=await orderModel.create(req.body)
            if(order.length===0) return res.status(403).send({message:"order empty"})
            return res.status(201).send({
                message:"order created",
                data:order
            })
        }catch(err){
            return next(err)
        }
    },
    getAllOrders:async function(req,res,next){
        try{
            const orders=await orderModel.find()
            return res.status(200).send({
                message:"orders found",
                data:orders
            })
        }catch(err){
            return next(err)
        }
    },
    update:async function(req,res,next){
        try{
            const id=req.params.id
            const exists=await orderModel.findById({_id:id})
            if(exists.length===0) return res.status(404).send({message:`${id} order not found`})
            const updated_order=await orderModel.findByIdAndUpdate(id,req.body,{new:true})
            return res.status(200).send({
                message:`${id} successfully updated`,
                data:updated_order
            })
        }catch(err){
            return next(err)
        }
    },
    delete:async function(req,res,next){
        try{
            const id=req.params.id
            const exists=await orderModel.findById({_id:id})
            if(exists.length===0) return res.status(404).send({message:`${id} order not found`})
            const deleted_order=await orderModel.deleteOne({_id:id})
            return res.status(200).send({
                message:`${id} order successfully deleted`,
                data:deleted_order
            })
        }catch(err){
            return next(err)
        }
    }
}