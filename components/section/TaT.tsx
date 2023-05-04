import React from 'react';
import ReactLogo from '../svg/react.svg';
import Postman from '../svg/postman-icon.svg';
import NodeJSLogo from '../svg/nodejs-icon.svg';
import ExpressJS from '../svg/express.svg';
import Laravel from '../svg/laravel.svg';
import NextLogo from '../svg/next.svg';
import TSLogo from '../svg/typescript-icon.svg';
import MySQL from '../svg/mysql.svg';
import Tailwindcss from '../svg/tailwindcss-icon.svg';

const TaT = () => {
  return (
    <section id="TaTs" className="bg-base-200 pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              Technology and Tools
            </h4>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Primary Tools
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="Laravel"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <Laravel className="w-[70px] lg:w-[100px]" />
                </div>
              </div>
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="TailwindCSS"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <Tailwindcss className="w-[70px] lg:w-[100px]" />
                </div>
              </div>
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="MySQL Database"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <MySQL className="w-[70px] lg:w-[100px]" />
                </div>
              </div>
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="Postman"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <Postman className="w-[70px] lg:w-[100px]" />
                </div>
              </div>
            </div>

            <hr className="my-4 border-slate-600" />

            <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
              Recently learned
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="NodeJS"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <NodeJSLogo className="w-[70px] lg:w-[100px]" />
                </div>
              </div>
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="ExpressJS"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <ExpressJS className="w-[70px] fill-primary  lg:w-[100px]" />
                </div>
              </div>
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="ReactJS"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <ReactLogo className="w-[70px] lg:w-[100px]" />
                </div>
              </div>
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="Typescript"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <TSLogo className="w-[70px] lg:w-[100px]" />
                </div>
              </div>
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="NextJS"
              >
                <div className="mask mask-squircle flex h-28 w-28 items-center justify-center  bg-base-100 p-5 transition-transform hover:scale-110 lg:h-32 lg:w-32">
                  <NextLogo className="w-[70px] fill-primary lg:w-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaT;
