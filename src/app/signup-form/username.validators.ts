import { AbstractControl, ValidationErrors } from "@angular/forms";



export class UsernameValidators{
   static cannotContainSpace(control:AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ') >=0){
            return {cannotContainSpace: true}
        }
        return null
    }
    static shouldBeUnique(control:AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((res,rej)=>{
            const list = [
                "wasin",
                "mosh",
                "bank"
            ]
    
            setTimeout(()=>{
                for(let i = 0;i < list.length; i++){
                    if(control.value === list[i]){
                        res({shouldBeUnique:true})
                    }else{
                        res(null)
                    }
                    
                }
                
            },2000)
        })
     
   
        
    }
}