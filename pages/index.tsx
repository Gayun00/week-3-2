import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import * as S from '../styles/home/styled';

export default function Home({ data }) {
  const BRAND = '브랜드';
  const productNameList = Object.keys(data);
  const brandNameList = Object.values(data);
  const [searchList, setSearchList] = useState({
    products: [],
    brands: [],
  });

  function onChange(e) {
    const inputVal = e.target.value;
    const regex = new RegExp(inputVal, 'gi');

    const filteredProducts = productNameList.filter((product) => {
      return regex.exec(product);
    });
    const filteredbrands = brandNameList.filter((product) => {
      return product[BRAND] && regex.exec(product[BRAND]);
    });

    const uniqueBrands = [];
    filteredbrands.forEach((brand) => {
      if (!uniqueBrands.includes(brand[BRAND])) {
        uniqueBrands.push(brand[BRAND]);
      }
    });

    setSearchList({
      ...searchList,
      products: [...filteredProducts],
      brands: [...uniqueBrands],
    });
  }

  return (
    <S.Wrapper>
      <S.SearchInput onChange={onChange} />
      <S.SearchResultListContainer>
        <S.QuickButtonWrapper>
          <S.QuickButtonContainer>
            {searchList.brands.map(
              (searchResult, idx) =>
                searchResult && (
                  <S.QuickButton key={idx}>{searchResult}</S.QuickButton>
                ),
            )}
          </S.QuickButtonContainer>
        </S.QuickButtonWrapper>
        <S.SearchResultList>
          {searchList.products.map((searchResult, idx) => (
            <S.SearchResultItem key={idx}>{searchResult}</S.SearchResultItem>
          ))}
        </S.SearchResultList>
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
