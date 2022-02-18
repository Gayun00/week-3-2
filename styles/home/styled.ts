import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: aliceblue; */
`;

export const SearchInput = styled.input`
  margin-top: 30px;
  width: 350px;
  height: 30px;
  outline: gray;
  border: 1px solid gray;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.white};
`;

export const SearchResultListContainer = styled.div`
  padding: 10px;
  /* border: 1px solid gray; */
`;

export const QuickButtonWrapper = styled.div`
  margin-top: 10px;
  padding: 0 5px 0 5px;
  width: 350px;
  height: 30px;
  overflow-x: scroll;
`;

export const QuickButtonContainer = styled.ul`
  width: 1000px;
  display: flex;
  flex-direction: low;
`;

export const QuickButton = styled.button`
  margin-right: 10px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid gray;
  font-size: 12px;
  color: gray;
`;

export const SearchResultList = styled.ul`
  /* display: flex; */
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  height: 400px;
  /* border: 1px solid gray; */
  overflow-y: scroll;
`;

export const SearchResultItem = styled.li`
  /* border: 1px solid gray; */
  height: 40px;
  margin-bottom: 10px;
  /* background-color: yellow; */
  border-bottom: 1px solid #cccccc;

  /* border-bottom: 1px solid ${({ theme }) => theme.color.borderGray}; */
`;
