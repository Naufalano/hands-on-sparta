import Image from "next/image";

const Home = () => {
  return (
    <main className="bg-cyan-950">
      <div className="bg-sky-300 items-center flex flex-col border-b-8 border-slate-950 border-double">
        <h1 className="text-4xl font-serif p-5 bg-slate-300 text-black border-x-8 border-slate-950">PORTOFOLIO DIRI</h1>
      </div>
      <div className="flex flex-col items-center pt-10">
        <Image
        src={"/Picture 002.png"}
        alt="Foto Diri"
        title="Naufal/Ano"
        width={200}
        height={300}
        />
        <div className="flex flex-col justify-items-center text-justify gap-2 p-5 max-w-2xl">
          <h1 className="mainHeader ">Nama</h1>
          <p className="text-center text-2xl ">Muhammad Naufal  Fathan</p>
          <br></br>
          <h1 className="mainHeader ">About Me</h1>
          <p className="indent-8 ">
            Biasa dipanggil Naufal atau Ano. Berasal dari Tangerang Selatan dan tinggal di Cisitu Indah V selama berkuliah 
            di ITB Kampus Ganesha. Sekarang adalah seorang mahasiswa di jurusan Sistem dan Teknologi Informasi. Lahir 2 Maret 
            2004 dan merupakan anak pertama dari 3 bersaudara. 
          </p>
          <br></br>
          <h1 className="mainHeader ">Minat & Bakat</h1>
          <p className="indent-8 ">
            Saat ini saya berminat untuk menekuni bidang data dan <i>cyber-security</i>. Namun, bakat yang relevan untuk 
            bidang informatika belum terlihat. Bakat yang dirasa dimiliki bukanlah hal yang luar biasa, saya rasa hal ini 
            cukup lumrah dan wajar, seperti cepat menghafal dan cepat paham. Meski merasa memiliki bakat demikian, saya 
            juga memiliki kekurangan yang sangat berkebalikan, yaitu cepat lupa.
          </p>
          <br></br>
          <h1 className="mainHeader ">Proyek & Pengalaman</h1>
          <p className="indent-8 ">
            Saya belum pernah terlibat atau mengerjakan proyek apapun. Namun, apabila dapat disebutkan, saya ikut membuat 
            proyek game <i>Pokemon-like</i> sebagai tugas besar dasar pemrograman di TPB. Untuk pengalaman kepanitiaan, saya 
            pernah menjadi ketua divisi Qur'an dalam kepanitiaan Ramadhan 1445H. Sewaktu MA, saya menjadi bagian dari OSIS 
            Seksi Bahasa sebagai staf. Saya juga pernah menjadi panitia perlombaan pidato bahasa Inggris di MA. 
          </p>
          <br></br>
          <h1 className="mainHeader ">Pencapaian</h1>
          <p className="">
            - Menuntaskan setoran hafalan Qur'an 30 juz dan lulus ujian 20 juz.
          </p>
          <br />
          <h1 className="mainHeader ">Kontak Diri</h1>
          <p className="">
            Silakan hubungi saya di : <br />
            - Email : <a href="mailto:fathan.naufal.m@gmail.com"  target="_blank" className="text-blue-300 hover:text-blue-500 hover:underline active:text-violet-300">fathan.naufal.m@gmail.com</a> <br />
            - LinkedIn : <a href="https://www.linkedin.com/in/naufal-fathan-85b450289" target="_blank" className="text-blue-300 hover:text-blue-500 hover:underline active:text-violet-300 visited:text-violet-400">linkedin.com/in/naufal-fathan-85b450289</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
