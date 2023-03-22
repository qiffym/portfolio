import Image from 'next/image';
import React from 'react';
import eling_project from '@/public/img/eling.jpg';
import kemenag_project from '@/public/img/kemenagkabmalang.jpg';
import itsfine_project from '@/public/img/its_fine.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-base-300 pt-32 pb-28">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-bold text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold lg:text-5xl">
              Project Terbaru
            </h2>
            <p className="text-md font-medium text-slate-500 md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              vero tenetur voluptatum ipsam cum. Optio eveniet beatae eos porro.
              Quam eligendi ut cumque delectus natus laborum! Ut architecto
              voluptate sed.
            </p>
          </div>
        </div>

        {/* Project */}
        <div className="flex w-full flex-wrap justify-center gap-5 px-4 xl:mx-auto xl:w-11/12">
          {/* Card Project 1 */}
          <div className="card-compact card bg-base-100 shadow-xl lg:w-[48%]">
            <figure className="overflow-hidden shadow-md">
              <Image src={eling_project} alt={'project1'} className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                E-Learning SMK Negeri 3 Malang
                <div className="badge badge-warning">2022</div>
              </h2>
              <p className="text-base font-medium text-slate-500">
                Merupakan projek dari tugas akhir/skripsi yang saya kerjakan.
                Dikembangakan menggunakan{' '}
                <b className="border-b border-error">Laravel 9</b> (back-end)
                dan <b className="border-b border-primary">ReactJS</b>{' '}
                (front-end) dalam direktori yang berbeda. Dalam pengerjaannya
                saya dibantu rekan saya untuk mengerjakan front-end.
              </p>
              <div className="card-actions w-full justify-end border-t border-secondary p-2">
                <a
                  href="https://eling-smkn3malang.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover link-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>
          {/* Card Project 2 */}
          <div className="card-compact card bg-base-100 shadow-xl lg:w-[48%]">
            <figure className="overflow-hidden shadow-md">
              <Image
                src={kemenag_project}
                alt={'project1'}
                className="w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Website Sistem Informasi Kantor Kementerian Agama Kabupaten
                Malang
                <div className="badge badge-warning">2021</div>
              </h2>
              <p className="text-base font-medium text-slate-500">
                Merupakan suatu project sistem informasi berbasis website yang
                dikerjakan selama melakukan magang sebagai staff it/web
                developer selamat 3 (tiga) bulan di Kantor Kementerian Agama
                Kabupaten Malang. Web sistem informasi ini dikembangakan
                menggunakan framework{' '}
                <b className="border-b border-error">Laravel 8</b> dan database{' '}
                <b className="border-b border-orange-500">MySQL</b> serta tools
                pendukung lainnya seperti Bootstrap, FontAwesome, dan jQuery.
              </p>
              <div className="card-actions w-full justify-end border-t border-secondary p-2">
                <a
                  href="https://malang.kemenag.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover link-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>
          {/* Card Project 3 */}
          <div className="card-compact card bg-base-100 shadow-xl lg:w-[48%]">
            <figure className="overflow-hidden shadow-md">
              <Image
                src={itsfine_project}
                alt={'project1'}
                className="w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {"It's Fine App (Social Media)"}
                <div className="badge badge-warning">2022</div>
              </h2>
              <p className="text-base font-medium text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione cum libero consequatur harum alias id blanditiis ea
                accusamus hic? Excepturi provident temporibus ipsum vero
                consectetur, doloribus quidem delectus qui itaque sint autem
                impedit odio exercitationem esse consequuntur alias accusantium
                eligendi? Cupiditate quia non ducimus velit tempora, facere
                assumenda eligendi eaque?
              </p>
              <div className="card-actions w-full justify-end border-t border-secondary p-2">
                <a
                  href="#!"
                  rel="noopener noreferrer"
                  className="link-hover link-primary"
                >
                  Private Directory
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
