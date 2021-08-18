import React ,{useState,useCallback, useEffect, useRef ,useCallback}from "react";
import {useGlobalContext} from"./DataContext"
import "./Calculadora.css"


export default function Calculadora() {

  let { currentVal, setCurrentVal, prevVal, setPrevVal, formula, setFormula,operation, setOperation, prevOperation, setPrevOperation, compute, setCompute, sign, setSign }=  useGlobalContext();


  useEffect(() => {
    clear();
   }, []);
 
  const clear=()=>{
    setCurrentVal('');
    setPrevVal('');
    setOperation('');
    setPrevOperation('');
    setCompute('');
    setFormula('0');
    setSign('pos');
    console.log('Formula Cleared');
   }



  const handleClick=(e)=>{
    switch(e.target.value){
      
        case('÷'):case('*'):case('+'):case('='):case('-'):
        
        operation=e.target.value; 
        setOperation(operation);
        
        chooseOperation(operation) ;
        break;

     
        case('0'):case('1'):case('2'):case('3'):case('4'):case('5'):case('6'):case('7'):case('8'):case('9'):case('.'):
          currentVal=e.target.value; 
          setCurrentVal(currentVal);
          console.log(currentVal,formula);
          appendNumber();
          break;

    default:break;
  }
   }

   const appendNumber =()=> {
     if(currentVal === '.' && formula.includes('.'))
     return;
     
     if(formula === '0'){
      formula= formula.replace(/\b0+/g, "");
      setFormula(formula);
      //console.log('55555555',formula)
     }
     if(sign === 'ng'){
      if(!formula.includes('-')){
        formula= '-' +formula.toString();
        //setFormula(formula);
       // setSign('pos');
        
      }
      else{
       //setFormula(formula);
       //setSign('pos');
      }
       //formula= '-' +formula.toString();
       setFormula(formula);
       setSign('pos');
       
     }
     
     formula = formula.toString() + currentVal.toString();
     setFormula(formula);
     //console.log(formula);
     return formula;
  }

  const chooseOperation=(operation)=> {
  
  
  if(formula === 0) { 
    prevVal='0'.toString()+ ' ' + operation.toString()
    setPrevVal(prevVal);
}
  else if (prevOperation !== ''){
    calculate();
  }
  else{

  }
   if(operation !== '=') {
    setPrevOperation(operation);
    prevVal=formula.toString()+ ' ' + operation.toString();
    setPrevVal(prevVal);
    setOperation('');
    setFormula('');
  
    }
    else{
      updateDisplay();
    }
  
  }

  const calculate=()=> {
    
    const prevV = parseFloat(prevVal);
    const currv =parseFloat(formula);
    if(isNaN(prevV) || isNaN(currv)) return
    
    switch(prevOperation){
      case('+'): compute = prevV + currv; break;
      case("-"): compute = prevV - currv; break;
      case('*'): compute = prevV * currv; break;
      case("÷"): compute = prevV / currv; break;
      //case("="): setCompute(compute);console.log('pppppp'); break;
      default:break;
    }
    if (operation === '='){
    console.log('l2aaaaaaaaaaa');
    updateDisplay();
    return
  }
    
    formula= compute.toString();
    setFormula(formula);
    setPrevOperation(operation);
    console.log(compute,'compute',operation,prevOperation);
  
  }

  /*const delet =()=>{
    if(formula === '0') return
    if(parseInt(formula, 10) <10){ 
      
      formula='0';
      setFormula(formula); console.log('77777777',formula);}
      formula = formula.toString().slice(0, -1);
      setFormula(formula);
      console.log('Formula last digit Cleared');
    }*/


  const signNumber =()=>{
   console.log('555');
   formula= formula.toString();
   setFormula(formula)
   setSign('ng');

  }

  const updateDisplay=()=> {
    setFormula(compute);
    setPrevVal('');
  }

   

   




  return (<>
    <div className="div-cont">
      <h1>JS Calculadora!</h1>
    </div>
    <div className="calculadora-grid">
      <div id="display" className="output">
        <div data-prev-operand className="previous-operand">{prevVal}</div>
        <div data-current-operand className="current-operand">{formula}</div>
        </div>
        <button className='span-dos ac' id="clear" value="AC"  onClick={clear}>AC</button>
        <button value="ng" onClick={signNumber} className='operand' >-/+</button>
        {/*<button value="DEL" onClick={delet} data-del>DEL</button>*/}
        <button className="operand" id="divide" value="÷" onClick={ handleClick} >÷</button>

        <button id="one" onClick={handleClick} value="1" data-num>1</button>
        <button id="two" onClick={handleClick} value="2" data-num>2</button>
        <button id="three" onClick={handleClick} value="3" data-num>3</button>
        <button id="multiply" className="operand" onClick={handleClick} value="*" data-operation>*</button>

        <button id="four" onClick={handleClick} value="4" data-num>4</button>
        <button id="five" onClick={handleClick} value="5" data-num>5</button>
        <button id="six"onClick={handleClick} value="6" data-num>6</button>
        <button className="operand" id="subtract" onClick={handleClick} value="-" data-operation>-</button>

        <button id="seven" onClick={handleClick} value="7" data-num>7</button>
        <button id="eight" onClick={handleClick} value="8" data-num>8</button>
        <button id="nine" onClick={handleClick} value="9" data-num>9</button>
        <button className="operand" id="add" onClick={handleClick} value="+" data-operation>+</button>

        <button id="decimal" onClick={handleClick} value="." data-num>.</button>
        <button id="zero" onClick={handleClick} value="0" data-num>0</button>
        <button className='span-dos eq' id="equals" onClick={handleClick} value="=" data-equal>=</button>
      </div>
  </>);
}
