import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: aliceblue;
`;

export const SearchInput = styled.input`
  outline: gray;
  border: 1px solid gray;
`;

export const SearchResultListContainer = styled.div`
  /* border: 1px solid gray; */
`;

export const QuickButtonWrapper = styled.div`
  width: 800px;
  overflow-x: scroll;
`;

export const QuickButtonContainer = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: low;
`;

export const QuickButton = styled.button`
  background-color: ${({ theme }) => theme.color.backgroundGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid gray;
  font-size: ${({ theme }) => theme.font.sizeS};
`;

export const SearchResultList = styled.ul`
  /* display: flex; */
  flex-direction: column;
  align-items: flex-start;
  height: 400px;
  border: 1px solid gray;
  overflow-y: scroll;
`;

export const SearchResultItem = styled.li`
  /* border: 1px solid gray; */
  padding: 10px;
`;
