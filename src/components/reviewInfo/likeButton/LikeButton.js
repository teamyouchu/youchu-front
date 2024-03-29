import * as style from './LikeButtonStyle';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import reviewAPI from 'api/reviewAPI';
import likedHeart from 'assets/images/likedHeart.svg';
import heart from 'assets/images/heart.svg';

export default function LikeButton({ reviewId, userObj, liked, likes }) {
  const history = useHistory();
  const [isliked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);
  const onLikeClick = () => {
    if (userObj.isLogin) {
      reviewAPI
        .postReviewLike(reviewId)
        .then(() => {
          if (isliked) {
            setIsLiked(false);
            setLikeCount(likeCount - 1);
          } else {
            setIsLiked(true);
            setLikeCount(likeCount + 1);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert('리뷰에 공감하려면 로그인이 필요해요!');
      history.push({
        pathname: '/login',
        state: {
          from: 'button',
          msg1: '로그인이 필요한 서비스입니다.',
          msg2: '로그인 후 이용해주세요!',
        },
      });
    }
  };
  return (
    <style.LikeButton onClick={onLikeClick}>
      <style.LikeImg alt="좋아요" src={isliked ? likedHeart : heart} />
      <style.likeCount>{likeCount}</style.likeCount>
    </style.LikeButton>
  );
}
