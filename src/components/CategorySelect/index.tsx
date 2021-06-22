import React from "react";

import { Scroll } from "./styles";

import { Categories } from "../../utils/Categories";

import { Category } from "../Category";

export function CategorySelect() {
  return (
    <Scroll
      horizontal
      contentContainerStyle={{  
        justifyContent: 'center',
        alignItems: 'center',paddingRight: 20}}
      showsHorizontalScrollIndicator={false}
    >
      {Categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </Scroll>
  );
}
