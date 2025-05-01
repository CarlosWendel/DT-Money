import { createContext, ReactNode, useEffect, useState } from "react"; 
import { api } from "../lib/axios";


interface Transaction{
    id:number,
    description: string,
    type:'income'|'outcome',
    price:number,
    category:string,
    createdAt: string
}
interface CreateTransactionInput{
    description: string,
    price:number,
    category:string,
    type:'income'|'outcome' 
 }

interface TransactionContextType{
    transactions: Transaction[];
    fetchTransactions:(query?:string)=> Promise<void>
    createTransaction: (data:CreateTransactionInput)=>Promise<void>
}

interface TransactionProviderProps{
   children:ReactNode
}



// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({children}: TransactionProviderProps){
    const [transactions, setTransactons] = useState<Transaction[]>([])
    
        async function fetchTransactions(query ?: string){
           const response = await api.get('transaction',{
            params:{
                _sort:'createdAt',
                _order:'desc',
                q:query
            }
           })
            setTransactons(response.data)
        }
    
        async function createTransaction(data:CreateTransactionInput){
            const{ description, price, category, type}= data;

            const response = await api.post('transaction',{
                description,
                price,
                category,
                type,
                createdAt: new Date(),
            })

            setTransactons(state =>[response.data, ...state])

        }
      useEffect(()=>{
        
        fetchTransactions();
      },[])
      
    return(
        <TransactionContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction
            }}>
            {children}
        </TransactionContext.Provider>
    )
}