import { FaUserCheck } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoNotifications } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Menüpont 1", href: "/" },
  { name: "Menüpont 2", href: "/" },
];

const features = [
  {
    name: "Felhasználó barát",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FaUserCheck,
  },
  {
    name: "Gyors",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: BsLightningChargeFill,
  },
  {
    name: "Megbízható",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: VscWorkspaceTrusted,
  },
  {
    name: "Mobil Értésítések",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: IoNotifications,
  },
];

export default function Home() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-10 xl:pb-15">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-center w-full md:w-auto">
                    <a href="#" className="leading-none h-[39px]">
                      <span className="sr-only">Workflow</span>
                      <Image
                        width={200}
                        height={40}
                        className="h-8 w-auto sm:h-10"
                        src="/img/icons/logo.svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item, i) => (
                    <Link key={i} href={item.href}>
                      <a
                        key={item.name}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="block xl:inline">
                    Ídőpont foglaló alkalmazás
                  </span>{" "}
                  <span className="block text-blue xl:inline">
                    Vállalkozások Számára
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Alkalmazás Letöltése
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Regisztráció
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 h-72 md:h-[500px] lg:h-[520px] lg:right-0 lg:w-1/2">
          <Image
            layout="fill"
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/img/hero.avif"
            alt="Hero"
            quality={100}
            priority={true}
          />
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue font-semibold tracking-wide uppercase">
              Ídőpont Foglaló
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Gyorsan és egyszerűen
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Készen állsz?</span>
            <span className="block text-blue">Vágj bele még ma!</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-y-[10px] justify-center lg:mt-0 lg:flex-shrink-0">
            <div className="flex rounded-md">
              <a
                href="#"
                className="flex items-center w-[150px] h-[50px] bg-no-repeat bg-cover bg-center justify-center bg-googleDowloadIcon border border-transparent text-base font-medium rounded-md text-white"
              ></a>
            </div>
            <div className="flex rounded-md">
              <a
                href="#"
                className="flex items-center w-[150px] h-[50px] bg-no-repeat bg-cover bg-center justify-center bg-apppleDownloadIcon border border-transparent text-base font-medium rounded-md text-white"
              ></a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue bg-white hover:bg-blue-50"
              >
                További információk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
