import * as style from './style';
import { useContext, useState } from 'react';
import FirstEvalYoutuber from 'components/firstEvalYoutuber/FirstEvalYoutuber';
import FirstButton from 'components/firstButton/FirstButton';
import { categoryOptions } from 'lib/modules';
import ClearableDropdown from 'components/clearableDropdown/ClearableDropdown';
import { UserContext } from 'lib/UserContext';

export default function FirstMain() {
  const { userObj } = useContext(UserContext);

  const [evalYoutubers, setEvalYoutubers] = useState({ count: 0, list: [] });
  const [category, setCategory] = useState(0);

  return (
    <style.FirstMainContainer>
      <style.EvalCountBox>
        <style.EvalCount>{evalYoutubers.count}</style.EvalCount>
        <style.EvalCountText>
          유튜버 5명에게 평점 남기기 도전!!
        </style.EvalCountText>
      </style.EvalCountBox>

      {userObj.isLogin && (
        <style.EvalCategory>
          <ClearableDropdown options={categoryOptions} setSort={setCategory} />
        </style.EvalCategory>
      )}

      <style.EvalList>
        {youtuberList.map((data) => (
          <FirstEvalYoutuber
            key={data.id}
            data={data}
            evalYoutubers={evalYoutubers}
            setEvalYoutubers={setEvalYoutubers}
          />
        ))}
        {userObj.isLogin ? (
          <style.LoginLink to={'recommendation'}>
            <FirstButton text={'추천 받으러 가기'} />
          </style.LoginLink>
        ) : (
          <style.LoginLink
            to={{
              pathname: '/login',
              state: {
                from: 'button',
              },
            }}
          >
            <FirstButton text={'5초만에 가입하고 계속하기'} />
          </style.LoginLink>
        )}
      </style.EvalList>
    </style.FirstMainContainer>
  );
}

const youtuberList = [
  {
    id: 0,
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: 1,
    thumbnail:
      'https://yt3.ggpht.com/Fef_8oLf6u9pS1TEX6a4e12sTRr-IP-XQo26eg63vZizMItQiGrDZgcTJxugtE08216IZn2zNA=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '딩고 뮤직 / dingo music',
    rating: 4.5,
    reviews: 1000,
    category: 10,
  },
  {
    id: 2,
    thumbnail:
      'https://yt3.ggpht.com/ytc/AMLnZu8Ia8DsIhh46F6WWu1xhktgEfbSZgSo8y-02K9dmQ=s176-c-k-c0x00ffffff-no-rj',
    title: '빠더너스',
    rating: 3,
    reviews: 200,
    category: 23,
  },
  {
    id: 3,
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: 4,
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: 5,
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: 6,
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: 7,
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: 8,
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: 9,
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
];
