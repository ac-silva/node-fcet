var funcs = {

    calc: function(a, b, c){
        if(typeof b === 'string' || typeof c === 'string'){
            return undefined;
        }
        if(a === '+'){
            return b + c;
        }
        if(a === '/'){
            return b / c;
        }
        if(a === '^') {
            return Math.pow(b, c);
        }
    }
}




module.exports = {'funcs': funcs};