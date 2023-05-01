import Image from 'next/image';
import Link from 'next/link';
import me from '@/public/me.png';

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="flex flex-wrap lg:flex-row-reverse">
          {/* Kiri */}
          <div className="w-full self-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text px-4 lg:w-[60%]">
            <h1 className="text-base font-semibold md:text-xl 2xl:text-2xl">
              Halo Semua👋🏼, saya
              <span className="block text-4xl font-bold text-transparent lg:text-5xl 2xl:text-6xl">
                Qiff Ya Muhammad
              </span>
            </h1>
            <h2 className="mb-5 font-medium text-secondary lg:text-xl xl:text-2xl">
              Web Developer
              <span className="ml-2 border-l border-secondary pl-2">
                Typist Master
              </span>
              <span className="ml-2 border-l border-secondary pl-2 font-bold text-transparent">
                BackEnd Engineer
              </span>
            </h2>
            <figure className="font-serif font-medium italic">
              <q className="lg:text-lg">
                Sebaik-baik manusia adalah yang paling bermanfaat bagi sesamanya
              </q>
              <figcaption className="text-secondary">- H.R. Ahmad</figcaption>
            </figure>
            <br />
            <Link href={'#'}>
              <button className="btn-primary rounded-box btn mt-10 gap-2">
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
                  height={443}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[375px] fill-primary lg:w-[500px]"
                >
                  <path
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
