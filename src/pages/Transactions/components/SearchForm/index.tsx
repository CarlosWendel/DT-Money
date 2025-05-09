import { MagnifyingGlass } from "phosphor-react";
import { SearchFormConatiner } from "../styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionsContext";

 
const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;
export function SearchFrom(){
    const {fetchTransactions} = useContext(TransactionContext)
    const {register,
         handleSubmit,
         formState:{isSubmitting}
        }= useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

   async  function handleSearchTransactions(data: SearchFormInputs){
       await fetchTransactions(data.query)
    }
    return(
        <SearchFormConatiner onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Busque por transações"{...register('query')}/>

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormConatiner>
    )
}