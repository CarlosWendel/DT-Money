import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchFrom } from "./components/SearchForm"
import { PrinceHighLight, TransactionContainer, TransactionsTable } from "./styles"

export function Transactions(){
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionContainer>
                <SearchFrom/>
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%"> Desenvolvimento de site</td>
                        <td>
                        <PrinceHighLight variant="income">
                            R$ 12.000,00
                        </PrinceHighLight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%"> Hamburguer</td>
                        <td >
                        <PrinceHighLight variant="outcome">
                            -R$ 59,00
                        </PrinceHighLight>
                        </td>
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                   
                </tbody>
            </TransactionsTable>
            </TransactionContainer>
        </div>
    )
}