import React, { useState } from 'react';
import * as S from '../styles/home/styled';

export default function Home() {
  return (
    <S.Wrapper>
      {/* <S.SearchInput>searchInput</S.SearchInput> */}
      <S.SearchResultListContainer>
        <S.SearchResultList>
          <S.SearchResultItem>item</S.SearchResultItem>
          <S.QuickButton>button</S.QuickButton>
        </S.SearchResultList>
      </S.SearchResultListContainer>
    </S.Wrapper>
  );
}
