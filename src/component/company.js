import styled from "styled-components";

function company() {
  return (
    <section className="container px-8 mx-auto mt-28">
      <p class="mb-2 text-3xl text-center" style={{ color: "#1a1f71" }}>
        انضم إلى صفوف النخبة لأكثر الشركات إثارة للإعجاب التي تثق بنا
      </p>
      <div className="flex flex-wrap justify-between">
        <div className="w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/6 h-32 relative">
          <Img
            src={`${process.env.PUBLIC_URL}/image/company/AlibabCloud.webp`}
          />
        </div>
        <div className="w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/6 h-32 relative">
          <Img src={`${process.env.PUBLIC_URL}/image/company/StcGroup.webp`} />
        </div>
        <div className="w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/6 h-32 relative">
          <Img src={`${process.env.PUBLIC_URL}/image/company/JockClub.webp`} />
        </div>
        <div className="w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/6 h-32 relative">
          <Img src={`${process.env.PUBLIC_URL}/image/company/Knowliom.webp`} />
        </div>
        <div className="w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/6 h-32 relative">
          <Img src={`${process.env.PUBLIC_URL}/image/company/NEOM.webp`} />
        </div>
        <div className="w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/6 h-32 relative">
          <Img src={`${process.env.PUBLIC_URL}/image/company/OM.webp`} />
        </div>
      </div>
    </section>
  );
}

export default company;

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
