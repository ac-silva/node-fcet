var assert = require('chai').assert;
var funcs  = require('../index_tdd').funcs;


describe('soma', function(){
    it('deve somar 2 com 5', function(){
        assert.equal(funcs.calc('+', 2, 5) , 7, 'a soma deve dar 7');
    });
    it('deve somar dois char', function(){
        assert.equal(funcs.calc('+', 'b', 'k') , undefined, 'a soma deve dar erro');
    });
});


describe('dividir', function(){
    it('deve dividir 5 por 2', function(){
        assert.equal(funcs.calc('/', 5, 2) , 2.5, 'a divisao deve dar 2,5');
    });
    it('deve dividir 5 por 0', function(){
        assert.equal(funcs.calc('/', 5, 0) , Infinity, 'a divisao deve dar infinity');
    });
});


describe('potencia', function(){
    it('deve elevar 5 por 2', function(){
        assert.equal(funcs.calc('^', 5, 2) , 25, 'a potencia deve resultar em 25');
    });

    it('deve elevar 2 por 5', function(){
        assert.equal(funcs.calc('^', 2, 5) , 32, 'a potencia deve resultar em 32');
    });

    it('deve elevar 5 por -1', function(){
        assert.equal(funcs.calc('^', 5, -1) , 0.2, 'a potencia deve resultar em 0.2');
    });
    
});
