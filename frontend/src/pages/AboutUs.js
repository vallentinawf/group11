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
            Remo is a bike-renting service made for your travelling needs!
            No need to be confused over what to travel with, just find a bike of your choice with a reasonable price, and enjoy the rest.
          </p>
        </div>
        <div className="">
          <h2 className="font-bold text-orange text-[27px] md:text-[35px] xl:text-[45px]">
            Tentang Kami
          </h2>
          <p className="text-justify font-medium text-[14px] md:text-[15px] xl:text-[16px]">
            Remo adalah layanan peminjaman motor buat kamu yang bingung mencari kendaraan untuk berkeliling kota! Cari motor pilihan kamu dengan Harga yang ramah di kantong.
          </p>
        </div>
      </div>
    </div>
  );
}
