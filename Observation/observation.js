
import {Observable} from "rxjs";

const obs =  new Observable(
    subscriber => {
        subscriber.next(5)
        subscriber.next(10)
        subscriber.next(90)
        setTimeout(()=>{
            subscriber.next(89)
            subscriber.complete()
        },2000)
    }
)
console.log('before')

obs.subscribe({
    next(i){console.log(i)},
    error(e){console.log(e)},
    complete(){console.log('Completed')}

})
console.log('after')
