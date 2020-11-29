import React, { FC } from 'react';
import styled from '../../utils/styled';

const Input = styled.input`
  width: 100%;
  display: block;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.GREY_50};
  height: 30px;
  font-family: Arial, FontAwesome;
  text-align: left;
  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
  &:placeholder-shown {
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.GREY_100};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

interface IProps extends React.HTMLAttributes<HTMLInputElement> {

}


const SearchBar: FC<IProps> = (props) => {
  return (
    <InputWrapper {...props}>
      <Input {...props} />
    </InputWrapper>
  )
}

export default SearchBar;
