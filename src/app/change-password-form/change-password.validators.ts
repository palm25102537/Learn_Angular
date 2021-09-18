import { AbstractControl, ValidationErrors } from "@angular/forms";


export class ChangePasswordValidator{
    static checkOldPassword(control:AbstractControl):Promise<ValidationErrors | null>{
        const user = [
            {id:"1",password:"1234",username:"mosh"}
        ]

        return new Promise((res,rej)=>{
            setTimeout(()=>{
                for(let i = 0;i < user.length;i++){
                    if(control.value !== user[i].password){
                        res({checkOldPassword:true})
                    }else{
                        res(null)
                    }
                }
            },2000)
        })
    }
    
}