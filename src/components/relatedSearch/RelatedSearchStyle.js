import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchDropdownContainer = styled.div`
  position: absolute;
  top: 69px;
  width: 350px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 15px #00000029;
  opacity: 1;
  padding: 5px 0;
`;

export const RelatedSearch = styled.div`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  padding: 5px 20px;
  color: #eb3323;
`;

export const SearchResultBox = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  &:hover {
    background-color: #f9fafc;
    cursor: pointer;
    color: #000000;
  }
`;

export const SearchResultImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const SearchResultName = styled.div`
  font-family: 'SHSN-R';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  margin-right: 5px;

  max-width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SearchResultSubscribers = styled.div`
  font-family: 'SHSN-R';
  text-align: left;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0px;
  color: #94969b;
`;