// Arreglos de propiedades para venta y alquiler
const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      banos: 4,
      costo: 5000,
      smoke: false,
      pets: false,
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      banos: 2,
      costo: 1200,
      smoke: true,
      pets: true,
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      banos: 3,
      costo: 4500,
      smoke: false,
      pets: true,
    },
  ];
  
  const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      costo: 2000,
      smoke: false,
      pets: true,
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      banos: 3,
      costo: 2500,
      smoke: true,
      pets: true,
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1599233258959-7c6db5f0ab3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '123 Main Street, Anytown, CA 91234, Seaside Town, CA 56789',
      habitaciones: 2,
      banos: 2,
      costo: 2200,
      smoke: false,
      pets: false,
    },
  ];
  
  // Función para renderizar propiedades
  function renderProperties(properties, elementId) {
    const element = document.getElementById(elementId);
    let html = '';
    for (let property of properties) {
      html += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${property.src}" class="card-img-top" alt="Imagen del departamento"/>
          <div class="card-body">
            <h5 class="card-title">${property.nombre}</h5>
            <p class="card-text">${property.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${property.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${property.habitaciones} Habitaciones</p>
            <p><i class="fas fa-bath"></i> ${property.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${property.costo}</p>
            <p class="${property.smoke ? 'text-success' : 'text-danger'}">
              <i class="fas ${property.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
              ${property.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${property.pets ? 'text-success' : 'text-danger'}">
              <i class="fas ${property.pets ? 'fa-paw' : 'fa-ban'}"></i>
              ${property.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>`;
    }
    element.innerHTML = html;
  }
  
 // Función para renderizar propiedades
function renderProperties(properties, elementId) {
    const element = document.getElementById(elementId);
    let html = '';
    for (let property of properties) {
        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${property.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">${property.nombre}</h5>
                        <p class="card-text">${property.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${property.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${property.habitaciones} Habitaciones</p>
                        <p><i class="fas fa-bath"></i> ${property.banos} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${property.costo}</p>
                        <p class="${property.smoke ? 'text-success' : 'text-danger'}">
                            <i class="fas ${property.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                            ${property.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${property.pets ? 'text-success' : 'text-danger'}">
                            <i class="fas ${property.pets ? 'fa-paw' : 'fa-ban'}"></i>
                            ${property.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>`;
    }
    element.innerHTML = html;
}

// Llamadas a las funciones para renderizar propiedades
document.addEventListener('DOMContentLoaded', function () {
    renderProperties(propiedades_venta.slice(0, 3), 'propiedades_venta');
    renderProperties(propiedades_alquiler.slice(0, 3), 'propiedades_alquiler');
});

// Enlaces de navegación
document.addEventListener('DOMContentLoaded', function () {
    const verTodasEnVenta = document.getElementById('verTodasEnVenta');
    verTodasEnVenta.addEventListener('click', function () {
        window.location.href = 'propiedades_venta.html'; // Cambia 'propiedades_venta.html' con la URL correcta de tu página de propiedades en venta
    });

    const verTodasEnAlquiler = document.getElementById('verTodasEnAlquiler');
    verTodasEnAlquiler.addEventListener('click', function () {
        window.location.href = 'propiedades_alquiler.html'; // Cambia 'propiedades_alquiler.html' con la URL correcta de tu página de propiedades en alquiler
    });
});

  
  