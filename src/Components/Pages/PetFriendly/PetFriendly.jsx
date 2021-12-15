import styled from "styled-components"
import {ScrollNavbar} from '../../Header/ScrollNavbar'
import { Filters } from "./Filters";
const Style = styled.div`

`;

export const PetFriendly = ()=>{
    return <>
<ScrollNavbar/>
<Filters/>
    </> 
}