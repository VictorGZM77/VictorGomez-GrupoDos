import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://moredrops.cl/medias/header-logo.svg?context=bWFzdGVyfGltYWdlc3wzNTA5fGltYWdlL3N2Zyt4bWx8YUdFeEwyaGtOaTg0T0RNeU16TTBOakkyT0RRMkwyaGxZV1JsY2kxc2IyZHZMbk4yWnd8ZTkxZTY3YmMyY2Q3OTljZDE5MjQ1Y2RkNmQ1NzEzY2VhODUyOGQzOTczMzEzMjBiNjlhNGEyMTgxYWM4YmEyNQ"
            alt="Nuestra historia"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En <strong>DROPS</strong>, creemos en la importancia de la moda y el estilo como una
            forma de expresión personal. Desde nuestros humildes comienzos, nos hemos
            comprometido a ofrecer productos de calidad excepcional que reflejen las
            últimas tendencias del mercado.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nuestro equipo trabaja día y noche para brindarte una experiencia de compra
            inigualable, desde la selección de productos hasta la entrega en tu hogar.
            Creemos en la innovación, la excelencia y en superar siempre las expectativas
            de nuestros clientes.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-4">Nuestra Misión y Visión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Nuestra Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Proporcionar productos de alta calidad que permitan a las personas expresarse
              a través de la moda, manteniendo siempre el enfoque en la satisfacción del cliente
              y la sostenibilidad.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Nuestra Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser líderes en el mercado de moda y calzado, marcando tendencia con un enfoque
              innovador, inclusivo y sostenible que inspire a las generaciones futuras.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Compromiso con la calidad</li>
          <li>Innovación constante</li>
          <li>Atención centrada en el cliente</li>
          <li>Sostenibilidad y responsabilidad social</li>
          <li>Trabajo en equipo y diversidad</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;