import { FormControl } from '@angular/forms';

//! custom validators // A function that returns a function
export const restrictedWords = (wordsArr) => 
         (control: FormControl): {[key:string]:any} => {
           if(!wordsArr) return null;
           let invalidWords = 
           wordsArr.map(w => control.value.includes(w) ? w : null)
           .filter(w => w != null)
           return invalidWords.length > 0 ? 
           {'restrictedWords': invalidWords.join(', ')} : null
         }