import {  Heading, TypeWritterContainer } from "./TypeWritter.styles";
import ConstValues from "../ConstantValue/ConstValues";


export const TypeWritter=()=>{

    const {
        ima
    }=ConstValues
    return(<>

<TypeWritterContainer>
<Heading>{ima}</Heading>

</TypeWritterContainer>

    </>)
}