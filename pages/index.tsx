import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import * as S from '../styles/home/styled';

export default function Home({ data }) {
  const [searchResults, setSearchResults] = useState(data);
  console.log(Object.entries(searchResults));
  return (
    <S.Wrapper>
      <S.SearchInput />
      <S.SearchResultListContainer>
        <S.SearchResultList>
          {Object.keys(searchResults).map((searchResult, idx) => (
            <S.SearchResultItem key={idx}>{searchResult}</S.SearchResultItem>
          ))}
        </S.SearchResultList>

        <S.QuickButtonContainer>
          {Object.values(searchResults).map(
            (searchResult, idx) =>
              searchResult['브랜드'] && (
                <S.QuickButton key={idx}>
                  {searchResult['브랜드']}
                </S.QuickButton>
              ),
          )}
        </S.QuickButtonContainer>
      </S.SearchResultListContainer>
    </S.Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/hello');
  return {
    props: {
      data: res.data.data,
    },
  };
};
