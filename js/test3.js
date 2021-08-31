function asyncPlus(x, y, cb){
  setTimeout(() => cb(x + y), 3000)
}

const toPromise = (ascFunc,args) => new Promise((resolve)=>ascFunc(...args,resolve));

toPromise(asyncPlus, [50,22]).then(ascFunc => console.log(ascFunc));