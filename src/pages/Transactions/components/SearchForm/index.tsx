import { MagnifyingGlass } from "phosphor-react";
import { SearchFormConatiner } from "../styles";

export function SearchFrom(){
    return(
        <SearchFormConatiner>
            <input type="text" placeholder="Busque por transações"/>

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormConatiner>
    )
}