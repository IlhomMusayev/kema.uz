import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.svg";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-[#4A94FE] lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              Prezident va Al-Xorazmiy maktablari uchun tayyorlov kurslari!
            </h1>
            <p className="py-5 text-md leading-normal text-gray-900 lg:text-xl xl:text-xl dark:text-gray-300">
              Farzandlaringiz Prezident va Al-Xorazmiy maktablariga kirish uchun
              tayyorlanishlari uchun biz bilan bog'laning!
            </p>

            <div className="lg:w-fit w-full flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#application"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#4A94FE] rounded-md "
              >
                Ariza qoldirish
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
