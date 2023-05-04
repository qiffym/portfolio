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
            <p className="text-md font-medium text-base-content md:text-lg">
              Beberapa project yang pernah saya buat yang dapat Anda lihat atau
              miliki dengan cara clone/download directory-nya pada GitHub saya
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
                <a
                  href="https://eling-smkn3malang.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-base-content link-hover link"
                >
                  E-Learning SMK Negeri 3 Malang
                </a>
                <div className="badge-warning badge">2022</div>
              </h2>
              <p className="text-base font-medium text-base-content">
                Merupakan projek dari tugas akhir/skripsi yang saya kerjakan.
                Dikembangakan menggunakan{' '}
                <b className="border-b border-error">Laravel 9</b> (back-end)
                dan <b className="border-b border-primary">ReactJS</b>{' '}
                (front-end) dalam direktori yang berbeda. Dalam pengerjaannya
                saya dibantu rekan saya untuk mengerjakan front-end.
              </p>
              <div className="card-actions w-full justify-end border-t border-secondary p-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link btn"
                >
                  See Directory
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
                <a
                  href="https://malang.kemenag.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-base-content link-hover link"
                >
                  Website KEMENAG Kabupaten Malang
                </a>
                <div className="badge-warning badge">2021</div>
              </h2>
              <p className="text-base font-medium text-base-content">
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
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link btn"
                >
                  See Directory
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
                <div className="badge-warning badge">2022</div>
              </h2>
              <p className="text-base font-medium text-base-content">
                Merupakan project internal ketika melaksanakan internship di FAB
                Indonesia. Pada pengembangan project ini saya berperan sebagai
                seorang BackEnd Programmer yang bertugas membuat dan menyediakan
                API berupa fitur-fitur dari aplikasi. Teknologi yang digunakan
                dalam pengembangan API-nya adalah framework{' '}
                <b className="border-b border-error">Laravel 8</b>.
              </p>
              <div className="card-actions w-full justify-end border-t border-secondary p-2">
                <a href="#!" rel="noopener noreferrer" className="btn-link btn">
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
