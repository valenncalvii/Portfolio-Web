import { useState } from "react";
import "./App.css";
function App() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <main className="flex flex-col min-h-screen bg-primary">
      <header className="flex justify-evenly p-4 w-full">
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a
                href="#"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#proyects"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#about me"
                className="font-font-family text-font-primary hover:text-font-special transition-colors duration-300"
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href="#contact"
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
          <img src="/FotoPersonal2.jpeg" alt="Foto de perfil" />
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
          <section className="w-full h-full flex justify-start items-center mt-4">
            <a
              href="/Valentin Calvi Coronel_ES_CV.pdf"
              download="Valentin Calvi Coronel_ES_CV.pdf"
              className="p-3 rounded-md cursor-pointer font-font-family text-font-primary bg-font-special hover:bg-font-special/75 transition-colors duration-300"
            >
              Descargar cv
            </a>
            <a
              className="p-3 text-font-primary cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/valenncalvii"
            >
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
            <a
              className="p-3 text-font-primary cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/valentin-calvi-coronel-66a413246/"
            >
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
      <section
        id="proyects"
        className="flex flex-col items-center justify-center px-4 py-12"
      >
        <h1 className="font-font-family text-4xl font-extrabold text-font-primary mb-8">
          Proyectos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {[
            {
              name: "Cinepolis",
              src: "/cinepolis.PNG",
              alt: "Cinepolis",
              link: "https://glittering-macaron-f75907.netlify.app/",
              desc: "Pagina web sobre peliculas, donde puedes ver detalles de cada una. Este fue un proyecto grupal usando HTML, CSS y Javascript. Se utilizo la API de TMDB para obtener los datos de las peliculas.",
            },
            {
              name: "Simon Says",
              src: "/simomsays.jpg",
              alt: "Simon Says",
              link: "https://simon-says-sigma.vercel.app/",
              desc: "Un juego de memoria donde debes repetir la secuencia de colores. Este proyecto fue un trabajo de mi facultad, fue realizado con React.",
            },
            {
              name: "Zapas Heaven",
              src: "/zapas.jpg",
              alt: "Zapas Heaven",
              link: "https://zapas-heaven.netlify.app/",
              desc: "Una tienda de zapatillas hecha con html, css y javascript. Este proyecto fue un trabajo para mi facultad. ",
            },
            {
              name: "Pricing Page",
              src: "/pricing.jpg",
              alt: "Pricing Page",
              link: "https://chipper-sprinkles-daa850.netlify.app/",
              desc: "Una pagina de precios hecha con html, css y javascript. Este proyecto fue un trabajo para mi facultad.",
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              onMouseOver={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="relative w-full aspect-square">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {hoverIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center hover:bg-black opacity-85 transition-colors duration-300 ease-in-out">
                    <div className="flex flex-col items-center justify-center text-center p-4 text-font-primary font-font-family">
                      <h1 className="text-2xl font-extrabold">
                        {project.name}
                      </h1>
                      <p>{project.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>
      <section
        id="skills"
        className="flex flex-col items-center justify-center px-4 py-12"
      >
        <h1 className="font-font-family text-4xl font-extrabold text-font-primary mb-8">
          Habilidades
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
              alt: "HTML",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
              alt: "CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
              alt: "JavaScript",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              alt: "React",
            },
            {
              src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg ",
              alt: "Tailwind CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
              alt: "Git",
            },
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
      <section
        id="about me"
        className="flex flex-col items-center justify-center px-4 py-12"
      >
        <h1 className="font-font-family text-4xl font-extrabold text-font-primary mb-8">
          Un poco mas sobre mi
        </h1>
        <article className="max-w-2xl w-full text-center">
          <div className="w-[30%] m-auto border mb-0 text-font-special"></div>
          <p className="font-font-family font-light text-xl my-4 text-font-primary">
            Soy un apasionado por la tecnología y el desarrollo web. Me encanta
            aprender cosas nuevas y enfrentarme a nuevos desafíos. Siempre estoy
            buscando mejorar mis habilidades y aprender nuevas tecnologías.
          </p>
          <div className="w-[30%] m-auto border mb-0 text-font-special"></div>
        </article>
      </section>
      <section
        id="contact"
        className="flex flex-col items-center justify-center px-4 py-12"
      >
        <article className="max-w-2xl w-full text-center">
          <h1 className="font-font-family text-4xl font-extrabold text-font-primary mb-8">
            Trabajemos juntos!!
          </h1>
          <p className="font-font-family font-light text-xl my-4 text-font-primary">
            Si quieres saber más sobre mí, no dudes en contactarme. Estoy
            disponible para trabajar en proyectos interesantes y desafiantes.
          </p>
          <div className="flex flex-row justify-center items-center mt-4">
            <a
              href="https://www.instagram.com/valenncalvii.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-font-primary cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-12 h-12 rounded-full p-2 text-font-primary stroke-1 hover:text-font-special transition-colors duration-300"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a
              className="p-3 text-font-primary cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/valentin-calvi-coronel-66a413246/"
            >
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
          </div>
        </article>
      </section>
      <footer className="flex justify-center items-center p-4 text-font-primary">
        <h2 className="font-font-family text-lg">
          Developed by
          <strong className="text-font-special"> valenncalvii</strong>
        </h2>
      </footer>
    </main>
  );
}

export default App;
