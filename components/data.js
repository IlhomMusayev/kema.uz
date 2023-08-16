import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.svg";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Sifat biz uchun muhum",
  desc: "Farzandlaringizni bizning o'quv markazimizga bemalol ishonib topshirishingiz mumkin! ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Eng yaxshi o'qituvchilar",
      desc: "Bizning o'qituvchilarimiz o'z sohasida mutaxassislar.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Haftalik test sinovlari",
      desc: "Farzandlaringiz haftalik test sinovlaridan o'tadi.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Qo'shimcha ko'rsatmalar",
      desc: "Dizning farzandlaringizga qo'shimcha ko'rsatmalar beriladi",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
