import logo from '../assets/logo.svg';

export default function AboutUs(props) {
  return (
    <div className="h-[100vh] flex flex-col w-full px-[5%] py-[2%] items-center md:flex-row md:flex-row-reverse md:justify-between md:gap-4 ">
      <div className="flex mb-[50px] mt-8">
        <img
          src={logo}
          alt="Logo ReMo"
          className="w-[250px] md:min-w-[320px] md:w-[600px] xl:w-[700px]"
        />
      </div>
      <div className="flex gap-[30px] flex-col pr-[50px] max-w-[700px]  ">
        <div className="">
          <h2 className=" font-bold text-orange text-[27px] md:text-[35px] xl:text-[45px]">
            About Us
          </h2>
          <p className="text-justify font-medium text-[14px] md:text-[15px] xl:text-[16px]">
            Remo adalah blablabl ablablaaaa sasdadwas sccfegn ireign iernginr
            gerng enignw ioemomos wigneinw ienginwig (bahasa inggris)
          </p>
        </div>
        <div className="">
          <h2 className="font-bold text-orange text-[27px] md:text-[35px] xl:text-[45px]">
            Tentang Kami
          </h2>
          <p className="text-justify font-medium text-[14px] md:text-[15px] xl:text-[16px]">
            Remo adalah blablabl ablablaaaa sasdadwas sccfegn ireign iernginr
            gerng enignw ioemomos wigneinw ienginwig (bahasa indonesia)
          </p>
        </div>
      </div>
    </div>
  );
}
