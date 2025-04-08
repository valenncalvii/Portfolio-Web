import "./App.css";
function App() {
  return (
    <main className="flex flex-col min-h-screen bg-primary">
      <header className="flex justify-evenly p-4 w-full">
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a
                href="/"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-row justify-center items-center h-screen">
        <div className="w-100 h-100">
          <img src="/franco-colapinto.jpg" alt="Foto de perfil" />
        </div>
        <div className="w-100 h-100 flex flex-col ml-5">
          <section>
            <h1 className="font-font-family text-4xl font-extrabold text-font-primary">
              Valentin Calvi Coronel
            </h1>
            <h2 className="font-font-family text-3xl font-extrabold my-4 text-font-special">
              Desarrollo Front end
            </h2>
          </section>
          <div className="w-[30%] border mb-0 text-font-special"></div>
          <section>
            <p className="font-font-family font-light text-xl my-4 text-font-primary">
              Soy un desarrollador web con experiencia en React y Tailwind CSS.
              Estoy finalizando mi tecnicatura en programación y aprendiendo
              cada día a ser un mejor desarrollador.
            </p>
          </section>
          <div className="flex justify-end">
            <div className="w-[30%] flex items-end justify-end border text-font-special"></div>
          </div>
          <section className="w-full h-full flex justify-evenly items-center mt-4">
            <button className="p-3 rounded-md cursor-pointer font-font-family text-font-primary bg-font-special hover:bg-font-special/75 transition-colors duration-300">
              Descargar cv
            </button>
            <a className="p-3 text-font-primary cursor-pointer">
              <svg
                className="w-12 h-12 rounded-full p-2 text-font-primary stroke-1 hover:text-font-special transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
            <a className="p-3 text-font-primary cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-12 h-12 p-2 text-font-primary stroke-1 hover:text-font-special transition-colors duration-300"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
          </section>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="font-font-family text-4xl font-extrabold text-font-primary mb-8">
          Proyectos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {[
            {
              src: "/simomsays.jpg",
              alt: "Simon Says",
              link: "https://simon-says-sigma.vercel.app/",
            },
            {
              src: "/zapas.jpg",
              alt: "Zapas Heaven",
              link: "https://zapas-heaven.netlify.app/",
            },
            {
              src: "/pricing.jpg",
              alt: "Pricing Page",
              link: "https://chipper-sprinkles-daa850.netlify.app/",
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-full aspect-square">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="font-font-family text-4xl font-extrabold text-font-primary mb-8">
          Habilidades
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {[
            { src: "/html.png", alt: "HTML" },
            { src: "/css.png", alt: "CSS" },
            { src: "/js.png", alt: "JavaScript" },
            { src: "/react.png", alt: "React" },
            { src: "/tailwind.png", alt: "Tailwind CSS" },
            { src: "/git.png", alt: "Git" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img src={skill.src} alt={skill.alt} className="w-16 h-16 mb-2" />
              <p className="text-lg font-font-family text-font-primary">
                {skill.alt}
              </p>
            </div>
          ))}
        </div>
      </section>
      <footer className="flex justify-center items-center p-4 text-font-primary">
        <p className="font-font-family text-lg">
          © 2023 Valentin Calvi Coronel. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}

export default App;
