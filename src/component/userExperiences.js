import styled from "styled-components";

function userExperiences() {
  return (
    <section className="container px-8 mx-auto mt-28">
      <h2 class="text-4xl my-4 pb-2 text-center" style={{ color: "#1a1f71" }}>
        تجارب المستخدمين
      </h2>
      <div className="flex md:flex-row flex-col flex-wrap gap-5">
        <div className="flex-1">
          <Div className="relative flex gap-5 px-4 py-12 min-h-72">
            <Arrow className="pageArrow"></Arrow>
            <span className="flex-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="color-gray opacity-40 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </span>
            <P className="flex-5 text color-primary-dark">
              كشركة من أهم المزايا الموجودة هي التتبع المباشر التي تساعدنا في
              معرفة الرحلات المستخدمة ومواعيدها وتكلفتها. -أحمد كونش، عنصر مشع
            </P>
          </Div>
          <span className="mt-8 mx-4 flex">
            <div className="relative p-4 w-16 h-10">
              <Img src={`${process.env.PUBLIC_URL}/image/experince/OME.webp`} />
            </div>
          </span>
        </div>

        {/* 2 */}
        <div className="flex-1">
          <Div className="relative flex gap-5 px-4 py-12 min-h-72">
            <Arrow className="pageArrow"></Arrow>
            <span className="flex-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="color-gray opacity-40 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </span>
            <P className="flex-5 text color-primary-dark">
              كشركة من أهم المزايا الموجودة هي التتبع المباشر التي تساعدنا في
              معرفة الرحلات المستخدمة ومواعيدها وتكلفتها. -أحمد كونش، عنصر مشع
            </P>
          </Div>
          <span className="mt-8 mx-4 flex">
            <div className="relative p-4 w-16 h-10">
              <Img
                src={`${process.env.PUBLIC_URL}/image/experince/VirginMobile.webp`}
              />
            </div>
          </span>
        </div>

        {/* 3 */}
        <div className="flex-1">
          <Div className="relative flex gap-5 px-4 py-12 min-h-72">
            <Arrow className="pageArrow"></Arrow>
            <span className="flex-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="color-gray opacity-40 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </span>
            <P className="flex-5 text color-primary-dark">
              كشركة من أهم المزايا الموجودة هي التتبع المباشر التي تساعدنا في
              معرفة الرحلات المستخدمة ومواعيدها وتكلفتها. -أحمد كونش، عنصر مشع
            </P>
          </Div>
          <span className="mt-8 mx-4 flex">
            <div className="relative p-4 w-16 h-10">
              <Img
                src={`${process.env.PUBLIC_URL}/image/experince/Foodics.webp`}
              />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default userExperiences;

const Div = styled.div`
  background-color: #f1f1f1;
  border: 1px solid #ddd;
`;

const P = styled.p`
  color: #1a1f71;
`;

const Arrow = styled.span`
  position: absolute;
  transform: translateY(100%);
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-top: 25px solid #f1f1f1;
  border-right: 25px solid transparent;
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
  transform: translateX(-20%);
`;
