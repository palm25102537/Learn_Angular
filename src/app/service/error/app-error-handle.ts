import { ErrorHandler } from "@angular/core"

export class AppErrorHandle implements ErrorHandler{
    handleError(error:any){
        alert('An unexpected error occurred')
        console.log(error);
    }
}