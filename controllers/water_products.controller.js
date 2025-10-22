import water_productsModel from "../models/water_products.models.js";


export const water_productsController={
    create:async function(req,res,next){
        try{
            const products=await water_productsModel.create(req.body)
            return res.status(201).send({
                message:"Successfully created",
                data:products
            })
        }catch(err){
            return next(err)
        }
    },
    getAllProducts:async function(req,res,next){
        try{
            const products=await water_productsModel.find()
            return res.status(200).send({
                message:"data found",
                data:products
            })
        }catch(err){
            return next(err)
        }
    },
    update:async function(req,res,next){
        try{
            const id=req.params.id
            const founded_product=await water_productsModel.findById({_id:id})
            if(founded_product.length===0) return res.status(404).send({message:`${id} water product not found`})
            const updated_product=await water_productsModel.findByIdAndUpdate(id.req.body,{new:true})
            return res.status(200).send({
                message:`${id} updated successfully`,
                data:updated_product
            })
        }catch(err){
            return next(err)
        }
    },
    delete:async function(req,res,next){
        try{
            const id=req.params.id
            const founded_product=await water_productsModel.findById({_id:id})
            if(founded_product.length===0) return res.status(404).send({message:`${id} product not found`})
            const updated_product=await water_productsModel.findByIdAndUpdate(id,req.body,{new:true})
            return req.status(200).send({
                message:`${id} product updated successfully`,
                data:updated_product
            })
        }catch(err){
            return next(err)
        }
    }
}