import { useContext } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchFrom } from "./components/SearchForm"
import { PrinceHighLight, TransactionContainer, TransactionsTable } from "./styles"
import { TransactionContext } from "../../contexts/TransactionsContext"
import { dateFormatter, priceFormatter } from "../../utils/formatter"

export function Transactions(){
    const {transactions} = useContext(TransactionContext)
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionContainer>
                <SearchFrom/>
            <TransactionsTable>
                <tbody>
                    {transactions.map(transactions=>{
                        return(
                            <tr key={transactions.id}>
                        <td width="50%">{transactions.description}</td>
                        <td>
                        <PrinceHighLight variant={transactions.type}>
                            {transactions.type == 'outcome' && '- '}
                            {priceFormatter.format(transactions.price)}
                        </PrinceHighLight>
                        </td>
                        <td>{transactions.category}</td>
                        <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
                    </tr>

                        )
                    })}
                </tbody>
            </TransactionsTable>
            </TransactionContainer>
        </div>
    )
}