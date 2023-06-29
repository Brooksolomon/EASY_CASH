 
// import User from "../models/user_model";
import User from "../models/user_model";
 

class UserController { 
 

 async findAll() { 
     const tasks = await User.findAll();
     return tasks;
    }

    async findById(taskId: number) {
        const task = await User.findByPk(taskId);
        return task;
    } 

    async create(data: any) { 
      const task =  await User.create(data);
      return task;
    }
    
  
  
    async update(data: any,id:any) { 
      const task = await User.update(data, {
        where: {
          "username": id
        }
      });
      return task;
    }
  
}


export default UserController;