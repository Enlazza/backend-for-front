let a: string = '2021-02-26-17-54-10'
let aa: Array<string> = a.split('-')
const aaa: Date = new Date(aa[0] + '-' + aa[1] + '-' + aa[2] + ' ' + aa[3] + ':' + aa[4] + ':' + aa[5]);

console.log(aaa)