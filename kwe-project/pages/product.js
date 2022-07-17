import MainLayout from "../layouts/MainLayout";

export default function Product() {
  return (
    <>
      <div>Product입니다.</div>
    </>
  );
}
Product.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
