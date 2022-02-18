import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import * as S from '../styles/home/styled';

export default function Home({ data }) {
  const BRAND = '브랜드';
  const productNameList = Object.keys(data);
  const brandNameList = Object.values(data);
  const [searchList, setSearchList] = useState([]);
  const [buttonList, setButtonList] = useState([]);

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

    setButtonList(uniqueBrands);
    setSearchList(filteredProducts);
  }

  return (
    <S.Wrapper>
      <S.SearchInput onChange={onChange} />
      <S.SearchResultListContainer>
        <S.SearchResultList>
          {searchList.map((searchResult, idx) => (
            <S.SearchResultItem key={idx}>{searchResult}</S.SearchResultItem>
          ))}
        </S.SearchResultList>

        <S.QuickButtonContainer>
          {buttonList.map(
            (searchResult, idx) =>
              searchResult && (
                <S.QuickButton key={idx}>{searchResult}</S.QuickButton>
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
