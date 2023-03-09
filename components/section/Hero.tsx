import Image from "next/image";
import Link from "next/link";
import me from "@/public/me2.png";
import contactDetails from "@/components/svg/contact-details.svg";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="flex flex-wrap lg:flex-row-reverse">
          {/* Kiri */}
          <div className="w-full self-center px-4 lg:w-[60%]">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Halo Semua👋🏼, saya{" "}
              <span className="block text-4xl font-bold text-neutral lg:text-5xl ">
                Qiff Ya Muhammad
              </span>
            </h1>
            <h2 className="mb-5 font-medium text-secondary-focus lg:text-xl xl:text-2xl">
              Fresh Graduate
              <span className="ml-2 border-l border-neutral pl-2 text-neutral">
                Web Developer
              </span>
            </h2>
            <q className="font-serif font-medium italic text-secondary-focus">
              Sebaik-baik manusia adalah yang paling bermanfaat bagi sesamanya
            </q>
            <br />
            <Link href={"#"}>
              <button className="btn-primary rounded-box btn mt-10 gap-2">
                <Image src={contactDetails} alt="contact.svg" width={30} />
                Hubungi Saya
              </button>
            </Link>
          </div>

          {/* Kanan */}
          <div className="w-full self-start px-4 lg:w-[40%]">
            <div className="relative mt-4 lg:left-0 lg:mt-0">
              <Image
                src={me}
                alt="me.png"
                width={350}
                className="mx-auto max-w-full"
              />
              <span className="absolute -bottom-0 left-1/2 top-5 -z-10 -translate-x-1/2 ">
                <svg
                  width={500}
                  height={443}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4b6bfb"
                    d="M35.7,-63.1C46.7,-55.4,56.3,-46.7,66.2,-36C76.1,-25.4,86.4,-12.7,84.5,-1.1C82.5,10.5,68.5,20.9,60.3,34.7C52.2,48.5,50,65.6,40.9,72C31.9,78.3,15.9,73.9,0.3,73.3C-15.3,72.7,-30.5,76,-41.9,71C-53.2,66,-60.5,52.6,-65.8,39.4C-71.1,26.1,-74.3,13.1,-77,-1.6C-79.7,-16.2,-82,-32.4,-74.8,-42.3C-67.6,-52.1,-50.8,-55.6,-36.8,-61.5C-22.7,-67.4,-11.4,-75.7,0.5,-76.5C12.3,-77.4,24.7,-70.8,35.7,-63.1Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
