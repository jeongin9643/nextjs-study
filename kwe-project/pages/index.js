import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <>
      <div>
        index.js
        {/* 

        <App>
          <MainLayout>
            <Home>
              // Content
            </Home>
          </MainLayout>
        </App>

        <App>
          <MainLayout>
            <About>
              // Content
            </About>
          </MainLayout>
        </App>

        <App>
          <LoginLayout>
            <Login>
              // Content
            </Login>
          </LoginLayout>
        </App>

        */}
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
