import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://sourmagazine.cl/wp-content/uploads/2019/05/pasted-image-0-1.png"
            alt="Contacto"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Estamos aquí para ayudarte. Si tienes alguna consulta, inquietud o simplemente
            deseas conocernos mejor, no dudes en ponerte en contacto con nosotros.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nuestro equipo está disponible de lunes a viernes de 9:00 AM a 6:00 PM para
            responder cualquier pregunta que tengas.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-4">Formulario de Contacto</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Email:</strong> servicioalcliente@moredrops.cl
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Teléfono:</strong> +56 9 1234 5678
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Dirección:</strong> Ahumada 347, Santiago, Chile
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
