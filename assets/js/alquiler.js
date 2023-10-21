// Arreglo de propiedades para alquiler
const propiedades_alquiler = [
  {
    nombre: 'Departamento en Santiago centro',
    src: 'https://santolaya.cl/images/galeria/CT_studio.jpg',
    descripcion: 'Cercano al metro Santa Isabel, y de Barrio Italia y con vista al parque',
    ubicacion: 'Santa Victoria 390, 1580',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: true,
    pets: true,
  },
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
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '123 Main Street, Anytown, CA 91234, Seaside Town, CA 56789',
      habitaciones: 2,
      banos: 2,
      costo: 2200,
      smoke: false,
      pets: false,
    },

  ];
  
  // Función para renderizar propiedades de alquiler
  function renderPropertiesAlquiler(properties, elementId) {
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
  
  // Llamada a la función para renderizar propiedades de alquiler
  document.addEventListener('DOMContentLoaded', function () {
    renderPropertiesAlquiler(propiedades_alquiler.slice(0, 4), 'propiedades_alquiler');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const verTodasEnAlquiler = document.getElementById('verTodasEnAlquiler');
    verTodasEnAlquiler.addEventListener('click', function() {
      window.location.href = 'propiedades_alquiler.html'; 
    });
  });
  