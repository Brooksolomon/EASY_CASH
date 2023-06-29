import { Router } from "express";
 
 import UserController from "../../db/controllers/user_controller";
 import generate_payment_url from "../helpers/santim";

const UserRouter = Router();
const userController = new UserController();
 
 

UserRouter.get('/',async (req,res) => { 
    const result = await userController.findAll()
    res.send(result);
});

UserRouter.get('/:id',async (req,res) => { 
    const taskId = Number(req.params.id)
    const result = await userController.findById(taskId)
    res.send(result);
});

UserRouter.post('/',async (req, res)=>{ 
    const result =  await userController.create(req.body);
    res.send(result);
   });


UserRouter.put('/:id', async (req, res) => {
   
    const result = await userController.update(req.body, req.params["id"]);
    res.send(result);
    console.log(result)
   });


    
   UserRouter.post('/send',async (req,res) => {   
    var SANTIMPAY_GATEWAY_TOKEN = "'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IisyNTE5MTAxMDEwMTAiLCJ3YWxsZXRJZCI6IjJkY2I0MzE0LTg0MTAtNDQ1YS05YjVlLTczNWE5YjE0OTZkZCIsInVzZXJJZCI6IjZkMjhhZmFiLTkzOWUtNGZjMC04Mzg1LTA4M2I2Zjc1ZTQwYSIsImRldmljZUlkIjoic2FtcG1tazIiLCJleHAiOjE2ODUwNzg2Mjd9.tJkcBi5FiSv9HDS1QLj0SsRxvvVbRFDaYHiVyx6no7w'"

    var PRIVATE_KEY_IN_PEM='-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEII0qPPByHBzW3znAladzC0uQDi6vhgctF/r6NYlN4ftmoAoGCCqGSM49\nAwEHoUQDQgAE4zghgXLQRJWd56Fe282IVNChD+oa8cNdSAZ6DaELdExs2lKmjXeS\nxU/A8YCNg1GqgfrrLcx3eHnI+Qm6+ppgng==\n-----END EC PRIVATE KEY-----\n'
           
     var mer_id = "9e2dab64-e2bb-4837-9b85-d855dd878d2b";
       
       var reason = req.params["reason"];
           
       var amount = req.params["amount"];
   await  generate_payment_url(mer_id, reason,amount, PRIVATE_KEY_IN_PEM,SANTIMPAY_GATEWAY_TOKEN);
       
       
       res.send();
});

 

 


export default UserRouter;