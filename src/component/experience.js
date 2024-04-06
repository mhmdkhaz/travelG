import styled from "styled-components";

function experince() {
  return (
    <section className="container px-8 mx-auto mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <Figure className="relative">
          <Img
            src={`${process.env.PUBLIC_URL}/image/phone.webp`}
            className="w-full h-full"
          />
        </Figure>

        <div className="w-md-100 color-primary-dark">
          <H2 className="mb-4 text-3xl text-right font-bold">
            التجربة السلسة لسفر الشركات
          </H2>
          <P className="text-right">
            فلاي أكيد هو حل سفر متكامل للشركات يقدم منتجات سفر للشركات وموظفيها
            ليجمع ما بين أفضل تجارب الحجوزات للموظفين وأفضل تجربة لإدارة حلول
            السفر بالكامل.
          </P>
        </div>
      </div>
    </section>
  );
}

export default experince;

const Figure = styled.figure`
  height: calc(100vh - 90px - 4em);
`;

const H2 = styled.h2`
  color: #1a1f71;
`;

const P = styled.p`
  color: #1a1f71;
`;

const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: contain;
  color: transparent;
`;
