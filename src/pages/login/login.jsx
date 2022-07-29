import * as style from './style';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import loginAPI from 'lib/api/loginAPI';
import userAPI from 'lib/api/userAPI';
import axios from 'axios';
import { UserContext } from 'lib/UserContext';

export default function Login() {
  const { setUserObj } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const from = location.state.from;

  //로그인 성공했을 떄 처리 함수
  const successGoogle = async (res) => {
    await loginAPI
      .postLogin({
        code: res.code,
        redirectUri: window.location.origin,
      })
      .then((res) => {
        localStorage.setItem('refreshToken', res.data.authToken.refreshToken);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${res.data.authToken.accessToken}`;
        // TODO 서지수 api 수정되면 회원가입 페이지로 넘어가는 코드 수정
        if (res.data.isRegistered) {
          if (from === 'button') {
            history.goBack();
          } else {
            history.push(`${from.pathname}`);
          }
          // 로그인 시 사용자 상태값 수정
          userAPI
            .getMe()
            .then(({ data }) => {
              setUserObj({
                email: data.email,
                favoriteCategory: data.favoriteCategory,
                hasReview: data.hasReview,
                imageUrl: data.imageUrl,
                nickname: data.nickname,
              });
            })
            .catch((err) => {
              console.error(err);
              // TODO 서지수 리프레시토큰 만료 시 토큰 재요청 코드 추가
            });
        } else {
          history.push({
            pathname: '/signup',
            state: { from: from },
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //로그인 실패했을 때 처리 함수
  const failGoogle = (res) => {
    // TODO 서지수 로그인 실패 시 코드 추가
    // alert('구글 로그인에 실패하였습니다');
  };

  return (
    <style.LoginContainer>
      <style.LoginBox>
        <style.Title>
          유튜버를 추천받고
          <br /> 유튜버 리뷰를 남겨보세요!
        </style.Title>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <style.LoginBtn
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <style.LoginLetter>
                <style.GoogleLogo />
                구글로 로그인
              </style.LoginLetter>
            </style.LoginBtn>
          )}
          onSuccess={successGoogle}
          onFailure={failGoogle}
          cookiePolicy={'single_host_origin'}
          responseType="code"
        />
      </style.LoginBox>
    </style.LoginContainer>
  );
}
