
// Configuración de ScrollReveal
ScrollReveal().reveal('.headline', {
    duration: 800,       // Duración de la animación
    distance: '20px',    // Distancia desde donde aparecerán los iconos
    easing: 'ease-out',   // Función de tiempo para la animación (puedes probar otras como 'ease-out', 'ease-in-out', 'cubic-bezier(...)', etc.)
    origin: 'bottom',    // Desde qué dirección aparecerán los iconos ('bottom', 'top', 'left', 'right')
    reset: true,         // Establecer en 'true' para que los iconos se revelen cada vez que se haga scroll
    interval: 150,       // Intervalo de tiempo entre la revelación de cada icono (en milisegundos)
    scale: 1,
  });
  
  // Desactivar la animación en el primer icono, para que aparezca al cargar la página sin animación
  ScrollReveal().reveal('.headline:first-child', {
    duration: 0,
    reset: true,
  });