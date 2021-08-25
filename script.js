/** FUNCOES */
   
    
    /** ARRAY */
   

    /**FOREACH */
    let myArr = ['maça', 'uva', 'pera'];
    function myCallback1(currentValue,index,array) {
        return `${currentValue} é muito bom!`;
    }
    function newForEach(array,callback) {
        let currentValue = 0;
        let index = 0;
        let result = '';
        for(let i=0;i<array.length;i++){
            currentValue = array[i];
            index = i;
            result = callback(currentValue,index,array);
            
        }
        
    }
    newForEach(myArr,myCallback1);
    /** FOREACH */
    /** FILL */

    myArr = [0,1,2,3,4,5]
    function newFill(array,value,inicio,fim){
        let comeco = 0;
        let final = array.length;
        if(inicio){
            comeco = inicio;
        }
        if(fim){
            final = fim;
        }
        for(let i=comeco;i<final;i++){
            array[i] = value;
        }
        return array;
    }
    let retornoFill = newFill(myArr,4,1,3); 
    
    /** FILL */
    /** MAP */
     myArr = [0,0,0,0]
     function myCallback2(valorAtual,index,array){
        return valorAtual++
    }
    function newMap(array, callback) {
        let newArr = [];
        let valorAtual = 0;
        let indice = 0;
        for(let i=0;i<array.length;i++){
            valorAtual = array[i];
            indice = i;
            newArr.push(callback(valorAtual,indice,array));
        }
        return newArr;
    }
    let retornoMap = newMap(myArr,myCallback2);
    

    /** MAP */
    /** SOME */

    function myCallback3(currentValue,index,array){
        return currentValue > 3 ? true : false;
    }
     myArr = [0,1,2,2,1,3,4]
    function newSome(array, callback) {
        let currentValue = 0;
        let index = 0;
        let result = false;
        for(let i=0;i<array.length;i++){
            currentValue = array[i]
            index = i;
            result = callback(currentValue,index,array);
            if(result){
                i=array.length;
            }
        }
        return result;
    }
    let retornoSome = newSome(myArr,myCallback3)
  
    /** SOME */
    /** FIND */
     myArr = [0,1,2,2,1,3,4,12]
    function myCallback4 (element,index,array){
        if(element > 10){
            return element
        }  
    }
     function newFind(array, callback) {
        let element = 0;
        let index = 0;
        let valueResult = null;
            for(let i=0;i<array.length;i++){
                element = array[i];
                index = i;
                valueResult = callback(element,index,array);
                if(valueResult){
                    i=array.length;
                }
            }
            return valueResult;
        }
    let retornoFind = newFind(myArr,myCallback4);
    /** FIND */
    /**FIND INDEX */
     myArr = [0,1,2,2,1,3,4,12]
    function myCallback5 (element,index,array){
        if(element > 10){
            return index;
        }
            return -1;
    }
     function newFindIndex(array, callback) {
        let element = 0;
        let index = 0;
        let valueResult = null;
            for(let i=0;i<array.length;i++){
                element = array[i];
                index = i;
                valueResult = callback(element,index,array);
                if(valueResult>-1){
                    i=array.length;
                }
            }
            return valueResult;
        }
    let retornoFindIndex = newFindIndex(myArr,myCallback5);
    /**FIND INDEX */
    
    /** EVERY */
     myArr = [0,1,2,2,1,3,4,12];
    function myCallback6 (currentValue,index,array){
       return currentValue>-1;
    }
    function newEvery(array, callback) {
        let currentValue = 0;
        let index = 0;
        let valueResult = false;
            for(let i=0;i<array.length;i++){
                currentValue = array[i];
                index = i;
                valueResult = callback(currentValue,index,array);
                if(!valueResult){
                    i=array.length;
                }
            }
            return valueResult;
        }
    let retornoEvery = newEvery(myArr,myCallback6);
    /** EVERY */
    /** FILTER */
    
     myArr = [0,1,2,2,1,3,4,12];
    function myCallback7 (element,index,array){
       if(element>1){
            return element
       }
    }
    function newFilter(array, callback) {
        let newArr = [];
        let elementResult = 0;
        let element = 0;
        let index = 0;
        for(let i=0;i<array.length;i++){
            element = array[i];
            index = i;
            elementResult = callback( element,index,array );
            if(elementResult){
                newArr.push(elementResult);
            }
        }
        return newArr;
    }
    let retornoFilter = newFilter(myArr,myCallback7);
    /** FILTER */
    /**CONCAT */
    
     myArr = [0,1,2,3,4,12];
    function newConcat(array, valorN) {
        let newArr = [...array];
        newArr.push(...valorN)
        return newArr;
    }
    let retornoConcat = newConcat(myArr, [1,2,3]);
    /**CONCAT */
    /** INCLUDES */
     myArr = [0,1,2,3,4,12];
    function newIncludes(array, searchElement,fromIndex) {
        let inicial = 0;
        if(fromIndex){
            inicial = fromIndex;
        }
        let result = false;
        for(let i=inicial;i<array.length;i++){
            if(searchElement == array[i]){
                i=array.length;;
                result = true;
            }
        }
        return result;
    }
    let retornoIncludes = newIncludes(myArr,2);
    /** INCLUDES */

    /** INDEXOF */
     myArr = [1,3,2,3,4,12];
    function newIndexOf(array,elementoDePesquisa) {
        let valueResult = -1;
            for(let i=0;i<array.length;i++){
                if(elementoDePesquisa == array[i]){
                    valueResult = i;
                    i=array.length;
                }
            }
            return valueResult;
        }
    let retornoIndexOf = newIndexOf(myArr,3);
    /** INDEXOF */

    
    /** JOIN */
     myArr = ['k','e','n','z','i','e'];
    function newJoin(array,separador) {
        if(!separador){
            separador ='';
        }
        let valueResult = '';
            for(let i=0;i<array.length;i++){
               valueResult+= array[i]+separador;
            }
            return valueResult;
        }
    let retornoJoin = newJoin(myArr,'');
    /** JOIN */

    /** REDUCE */
     myArr = [1,1,2,2,1,3,4]; //0-14 1-13
    function myCallback8 (element,acumulador){
       return acumulador+element;
    }
    function newReduce (array,callback,valorInicial) {
        let inicial = 1;
        if(valorInicial >= 0){
            inicial = valorInicial;
        }
        let acumulador = 0;
        for(let i=inicial;i<array.length;i++){
            acumulador = callback(array[i],acumulador,valorInicial)
        }
        return acumulador;
    }
    let retornoReduce = newReduce(myArr,myCallback8,0);
    console.log(retornoReduce)
    /** REDUCE */

/** FUNCOES */