import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Pagination } from 'semantic-ui-react';

export const reviewListContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #dedede;
  }
`;

export const ReviewTitle = styled.div`
  text-align: left;
  font-family: 'SHSN-M';
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0px;
  color: #000000;
  padding: 30px 40px 20px 40px;
  border-bottom: 1px solid #dedede;
  position: relative;
  @media ${(props) => props.theme.tablet} {
    font-size: 22px;
    line-height: 27px;
    padding: 20px 0 15px 0;
    margin: 0 24px;
    border-bottom: 1px solid rgb(222, 222, 222, 0.49);
  }
`;

export const ProfileSub = styled.div`
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #94969b;
  margin-top: 5px;
  @media ${(props) => props.theme.tablet} {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const ReviewDropdown = styled.div`
  padding: 30px 40px 0 40px;
  @media ${(props) => props.theme.tablet} {
    padding: 15px 24px 10px 24px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  @media ${(props) => props.theme.tablet} {
    height: 51px;
  }
`;

export const PaginationItem = styled(Pagination)`
  &.ui.secondary.pointing.menu {
    border-bottom: 0;
  }
  &.ui.secondary.pointing.menu .item {
    border-bottom-style: none;
  }
`;

export const MoreBtn = styled(Link)`
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  &:hover {
    color: #000000;
  }
`;

export const MoreBtnSpan = styled.span`
  font-family: ${({ font }) => font || 'SHSN-R'};
`;