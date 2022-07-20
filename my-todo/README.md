해야 할 것들을 입력해서 완료한 것들과 그렇지 못한 것들을 나눈다
todolist를 작성해서 체크박스를 통해 완료한 것들을 지운다.

1. 해야 할 일을 등록한다.
2. 목록에서 항목을 체크하면 완료/미완료로 변경한다.
3. 완료된 것은 목록에서 지우는 기능
4. 재실행 시 데이터를 유지한다.

구성
- 목록
- 입력창
- 체크박스 변경
- clear button
- todo가 남아 있는 개수

추가기능 검토
- 페이징
- 검색창
- 완료 일정
- 로그인
- db저장

페이지 구성 
1. layout 
- todoLayout
- signInLayout

2. page
- todoList 
- todo 
- signIn/signOut

서비스 구상-메뉴 (개인용/기업용?)
보이는 이름, 경로
- 블로그, blog
- 포트폴리오, portfolio
- todo, todo
- 다이어리, diary
- 홈페이지, homepage



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
