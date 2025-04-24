import { HeaderContainer, HeaderContent, NewTransactionButton, Titulo } from "./styles";
import logoImg from'../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionMoadal } from "../NewTransactionModal";

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>

                <img src={logoImg} alt="" />
               <Titulo> DT Money</Titulo>
              <Dialog.Root>
                <Dialog.Trigger  asChild>
                    <NewTransactionButton>Nova Transação</NewTransactionButton>
                </Dialog.Trigger> 
                    <NewTransactionMoadal/>
              </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}