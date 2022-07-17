import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <>
      <div>About</div>
    </>
  );
}
About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
