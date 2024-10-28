document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('eventModal');
    const eventContainers = document.querySelectorAll('.imgEventos');
    
    // Datos de los paquetes para cada tipo de evento
    const eventPackages = {
        xv: {
            images: ['/imagenes/xv-basico.jpg', '/imagenes/xv-estandar.jpg', '/imagenes/xv-premium.jpg'],
            titles: ['Paquete XV Básico', 'Paquete XV Estándar', 'Paquete XV Premium']
        },
        bautizo: {
            images: ['/imagenes/bautizo-basico.jpg', '/imagenes/bautizo-estandar.jpg', '/imagenes/bautizo-premium.jpg'],
            titles: ['Paquete Bautizo Básico', 'Paquete Bautizo Estándar', 'Paquete Bautizo Premium']
        },
        boda: {
            images: ['/imagenes/boda-basico.jpg', '/imagenes/boda-estandar.jpg', '/imagenes/boda-premium.jpg'],
            titles: ['Paquete Boda Básico', 'Paquete Boda Estándar', 'Paquete Boda Premium']
        },
        cumpleanos: {
            images: ['/imagenes/cumpleanos-basico.jpg', '/imagenes/cumpleanos-estandar.jpg', '/imagenes/cumpleanos-premium.jpg'],
            titles: ['Paquete Cumpleaños Básico', 'Paquete Cumpleaños Estándar', 'Paquete Cumpleaños Premium']
        },
        despedida: {
            images: ['/imagenes/despedida-basico.jpg', '/imagenes/despedida-estandar.jpg', '/imagenes/despedida-premium.jpg'],
            titles: ['Paquete Despedida Básico', 'Paquete Despedida Estándar', 'Paquete Despedida Premium']
        },
        graduacion: {
            images: ['/imagenes/graduacion-basico.jpg', '/imagenes/graduacion-estandar.jpg', '/imagenes/graduacion-premium.jpg'],
            titles: ['Paquete Graduación Básico', 'Paquete Graduación Estándar', 'Paquete Graduación Premium']
        }
    };

    // Abrir modal al hacer clic en un evento
    eventContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            const eventType = this.dataset.event;
            const packages = eventPackages[eventType];
            
            if (packages) {
                // Actualizar imágenes y títulos según el evento
                const modalOptions = modal.querySelectorAll('.modal-option');
                modalOptions.forEach((option, index) => {
                    option.querySelector('img').src = packages.images[index];
                    option.querySelector('h3').textContent = packages.titles[index];
                });
            }
            modal.style.display = 'block';
        });
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});