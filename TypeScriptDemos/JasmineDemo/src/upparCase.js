let upparCase = function (){
    let str = 'ayush'
    let a = str.toUpperCase()
    return a
}
const alternateCap = function (str){
    return str.replace(/\w(.|$)/g, s =>  s[0].toLowerCase()+ (s[1] ? s[1].toUpperCase() : ''));

}
 module.exports = alternateCap
