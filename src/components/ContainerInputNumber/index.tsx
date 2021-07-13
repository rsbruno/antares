import React from "react"
import { InputNumber } from "../InputNumber"

import {ContentInput, Name, WrapperInput} from "./styles"

type Props = {
  title:string;
  separator:string;
  ml?:number;
  mr?:number;
}

export function ContainerInputNumber({title, separator, ml, mr}:Props){
    return(
        <ContentInput>
          <Name>{title}</Name>
          <WrapperInput>
            <InputNumber />
            <Name ml={ml||6} mr={mr||6}>{separator}</Name>
            <InputNumber />
          </WrapperInput>
        </ContentInput>
    )
}