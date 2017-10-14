var funcs = {

    calc: function(a, b, c){
        var result;
        if(typeof b !== 'string' && typeof c !== 'string'){
            switch(a){
                case '+':
                    result = b + c;
                break;
                case '/':
                    result = b / c;
                break;
                case '^':
                    result = Math.pow(b, c);
                break;
            }
        }
        return result;
    }
}




module.exports = {'funcs': funcs};