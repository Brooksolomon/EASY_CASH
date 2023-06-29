
import axios from 'axios';
import { response } from 'express';
import jwt from 'jsonwebtoken';

var generate_payment_url = async(merchant_id, reason, amount, private_key,token): Promise<any> =>{ 
    var success_redirect_url = 'https://santimpay.com';
    var failure_redirect_url = 'https://santimpay.com';
    var notify_url = 'https://santimpay.com';
    var current_time = (new Date()).getTime().toString;

  var data = {
        "amount": amount,
        "paymentReason": reason,
        "merchantId": merchant_id,
        "generated": current_time
    }

   var URL = "https://services.santimpay.com/api/v1/gateway/initiate-payment"

    var signed_token = jwt.sign({ data: data, }, private_key, { algorithm: 'ES256' });

    

    var req_data = {
        "id": "1r4ftfrftgvtg",
        "amount": amount,
        "reason": reason,
        "merchantId": merchant_id,
        "signedToken": signed_token,
        "successRedirectUrl": success_redirect_url,
        "failureRedirectUrl": failure_redirect_url,
        "notifyUrl": notify_url
    }

   var headers = {
    "Authorization":`Bearer ${token}`   ,
    "Content-Type": "application/json"
}
var response =  await  axios({
    method: 'post',
    url:URL,
    headers: headers,
    data:  req_data 
  });
    
   return response
}


export default generate_payment_url;



 

 

