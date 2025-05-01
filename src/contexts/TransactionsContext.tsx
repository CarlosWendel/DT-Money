import { createContext, ReactNode, useEffect, useState } from "react"; 


interface Transaction{
    id:number,
    description: string,
    type:'income'|'outcome',
    price:number,
    category:string,
    createdAt: string
}

interface TransactionContextType{
    transactions: Transaction[];
}

interface TransactionProviderProps{
   children:ReactNode
}


export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({children}: TransactionProviderProps){
    const [transactions, setTransactons] = useState<Transaction[]>([])
    
        async function loadTransaction(){
            const response = await fetch("http://localhost:3333/transaction")
            const data= await response.json()
    
            setTransactons(data)
        }
      useEffect(()=>{
        
       loadTransaction();
      },[])
      
    return(
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}