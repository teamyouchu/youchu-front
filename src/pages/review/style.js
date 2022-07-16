import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const YoutuberBackImg = styled.div`
  height: auto;
  margin-top: 80px;
  img {
    width: 100%;
    height: auto;
    @media ${(props) => props.theme.tablet} {
      margin-top: 30px;
    }

    @media ${(props) => props.theme.mobile} {
      width: auto;
      height: 120px;
    }
  }
`;

export const GrayBar = styled.div`
  height: 120px;
  background-color: #75787a;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.justify};
`;

export const YoutuberFlex = styled(FlexContainer)`
  width: 100vw;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
`;

export const FlexContainerColumn = styled(FlexContainer)`
  flex-direction: column;
`;

export const YoutudberInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
  @media ${(props) => props.theme.tablet} {
    margin: -10px 0px 0px -10px;
  }
  font-family: 'SHSN-B';
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const YoutuberHeaderTitle = styled.span`
  font-size: 28px;
`;

export const DivColumn = styled.div`
  width: 50%;
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  position: relative;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    bottom: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReviewButton = styled.div`
  width: 240px;
  height: 38px;
  border-radius: 5px;
  background-color: #5c7fdf;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.tablet} {
    width: 92%;
    margin-top: 20px;
  }
`;

export const YoutuberSummaryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`;

export const YoutuberSummaryRank = styled.span`
  color: #f8d26a;
`;

export const Score = styled.span`
  font-size: 14px;
  font-family: 'SHSN-M';
`;

export const Contatiner = styled.div`
  display: flex;
  width: 1120px;
  flex-direction: column;
  margin: 0 auto;
`;

export const YoutuberHeaderContainer = styled.div`
  display: flex;
`;

export const YoutuberDetailContainer = styled.div`
  width: 800px;
  height: auto;
  min-height: 530px;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;

  @media ${(props) => props.theme.tablet} {
    width: 100vw;
  }
`;

export const YoutuberDetailTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 26px;
  margin-bottom: 10px;
`;

export const YoutuberDetailContent = styled.div`
  margin-top: 20px;
  font-family: 'SHSN-R';
  font-size: 16px;
  line-height: 23px;
  display: flex;
`;

export const YoutuberDetailGray = styled(YoutuberDetailContent)`
  margin: 0px 30px 0px 0px;
  color: #94969b;
  min-width: 60px;
`;

export const YoutuberDetailSubcribe = styled.span`
  font-family: 'SHSN-M';
  font-size: 16px;
`;

export const YoutuberCardContainer = styled(YoutuberDetailContainer)`
  width: 298px;
  height: 485px;
  min-height: 485px;
  margin-left: 20px;
  padding: 0px;
  border-bottom: none;
`;

export const CategoryTitle = styled.span`
  padding: 16px 18px;
  font-family: 'SHSN-B';
  font-size: 16px;
`;

export const CategoryCardContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dedede;
  margin-top: 15px;
`;

export const CategoryCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CategoryCardDetailTitle = styled.span`
  font-size: 16px;
  font-family: 'SHSN-M';
  margin-bottom: 5px;
`;

export const CategoryTag = styled.div`
  font-family: 'SHSN-M';
  font-size: 11px;
  color: #808084;
  display: inline;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 6px 8px;
`;

export const CategoryTagContainer = styled.div`
  margin-top: 5px;
`;

export const Ratings = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  padding: 0px 5px 15px 0;
`;

export const ReviewContainer = styled.div`
  width: 800px;
  height: auto;
  border: 1px solid #dedede;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const ReviewContainerFooter = styled.div`
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllDetailButton = styled.div`
  cursor: pointer;
`;

export const RightButton = styled(FontAwesomeIcon)`
  margin-left: 7px;
  font-family: 'SHSN-R';
`;

export const BestReviewContainer = styled(FlexContainer)`
  height: 300px;
  width: 100%;
  padding: 20px 0px 20px 40px;
`;

export const MainReviewContainer = styled(FlexContainer)`
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
`;

export const VideoContainer = styled.div`
  width: 800px;
  height: auto;
  min-height: 382px;
  border: 1px solid #dedede;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const VideoContentContainer = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
  border-bottom: 1px solid #dedede;
`;

export const FiliterButton = styled(Span)`
  font-family: 'SHSN-M';
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  title: props.title,
}))`
  border: 1px solid #dedede;
  border-radius: 50%;
  position: relative;
  bottom: 25px;
`;

export const RcImg = styled(Img)`
  display: block;
  width: 130px;
  height: 130px;

  margin-bottom: 10px;
`;

export const CategoryImg = styled(RcImg)`
  display: block;
  width: 72px;
  height: 72px;
  position: static;
  margin: 0px 15px 20px 18px;
`;
