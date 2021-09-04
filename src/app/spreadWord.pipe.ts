import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'spreadWord'
})

export class SpreadWordPipe implements PipeTransform{
    argument:any;
 
    transform(value?:any,...arg:any){
        // const spiltWord = value?.toLowerCase().split(' ')
        const word = value?.split(' ')
       
        this.argument = [...arg]
    //     if(spiltWord !== ""){
    //         const word = spiltWord.map((item:string)=>{
    //             if(item !== arg[0]&& item !== arg[1]){
    //                 return item.charAt(0).toUpperCase()+item.substr(1)
    //             }else {
    //                 return item
    //             }
    //          })
    //          value = word.join(' ')
    //     }
   
    //  return value
    //Better Way
        // for(let i =0;i< spiltWord.length;i++){
        //     if(i>0 && arg.includes(spiltWord[i])){
        //         spiltWord[i] = spiltWord[i].toLowerCase()
        //     }else{
        //         spiltWord[i] = spiltWord[i].substr(0,1).toUpperCase() + spiltWord[i].substr(1).toLowerCase()
        //     }
        // }

        // return spiltWord.join(' ')

        //refactor Better Way
        
   
        for(let i = 0;i < word?.length ; i++){
            if(i>0&&this.checkArg(word[i].toLowerCase())){
                word[i] = word[i].toLowerCase()
            }else{
                word[i] = this.toTitleCase(word[i])
            }
        }

        return word.join(' ')
       
   
    }


   private checkArg(word:string):boolean{     
       console.log(word)
      return this.argument.includes(word)
    }

   private toTitleCase(word:string):string{
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
    }



}