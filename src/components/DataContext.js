import React, {createContext, useContext ,useState } from 'react';
export const DataContext = createContext();

export default function DataContextProvider({children}) {
  let [currentVal, setCurrentVal]= useState('');
  let [prevVal, setPrevVal]= useState('');
  let [operation, setOperation]= useState('');
  let [prevOperation, setPrevOperation]= useState('');
  let [compute, setCompute]=useState('');
  let [formula, setFormula]=useState('0'); 
  const [sign, setSign] = useState('pos');
 

    return (
        <DataContext.Provider value={{ currentVal, setCurrentVal, prevVal, setPrevVal,operation, setOperation, formula, setFormula,prevOperation, setPrevOperation, compute, setCompute, sign, setSign}}>
            {children}
        </DataContext.Provider>
    )
}
export const useGlobalContext = () => {
  return useContext(DataContext);
}
