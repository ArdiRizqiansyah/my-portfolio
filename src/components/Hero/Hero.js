function hero(){
  // buat function untuk menghitung lama pengalaman kerja yaitu tahun sekarang dikurang 2021
  const experience_year = new Date().getFullYear() - 2021;

    return (
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          <img
            src="/my_photo.png"
            alt="ardi rizqiansyah"
            className="w-60 md:max-w-sm rounded-full"
          />
          <div>
            <p className="mb-4 lg:mb-0 text-lg">Hi 👋, saya</p>
            <h1 className="text-4xl md:text-6xl font-bold heading">
              Ardi Rizqiansyah
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium">
              Fullstack Web Developer
            </h3>
            {/* <p className="text-xl py-6">
              Saya seorang Full Stack Web Developer yang berfokus pada
              pengembangan aplikasi berbasis web dengan pengalaman {experience_year} tahun. 
              Sebagian besar aplikasi yang saya bangun menggunakan framework Laravel, Reactjs, Bootstrap dan MySQL. saya telah menyelesaikan beberapa proyek dan
              saya ingin terus belajar dan mengembangkan keterampilan saya.
            </p> */}
            <p className="text-xl py-6">
              Saya seorang Fullstack Web Developer dengan pengalaman kurang
              lebih {experience_year} tahun dalam pengembangan website. Passion
              saya adalah membangun solusi inovatif dan menarik yang memberikan
              dampak positif bagi pengguna. Saya senang menggali teknologi
              terbaru dan terus belajar untuk meningkatkan keahlian di bidang
              yang saya tekuni. Dengan dedikasi dan semangat, saya berkomitmen
              untuk memberikan kualitas terbaik dalam setiap proyek yang saya
              tangani. Saya tertarik untuk berkolaborasi dan menghadapi
              tantangan baru.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-info"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    );
}

export default hero;