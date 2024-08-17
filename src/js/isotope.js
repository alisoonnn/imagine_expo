$( document ).ready(function() {

$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.grid-item', // Optionnel : spécifiez la largeur de la colonne
      gutter: 20 // Optionnel : spécifiez l'espace entre les éléments
    }
  });

  // console.log('Isotope initialized');
  // console.log('Isotope initialized:', $grid.data('isotope'));

  // $('.custom-select').on('change', function() {
  //   var filterValue = $(this).find('option:selected').attr('data-filter');
  //   console.log('Selected filter value:', filterValue);

  //   // Vérifiez si l'élément Isotope est bien initialisé
  //   if ($grid.data('isotope')) {
  //     console.log('Isotope instance found');
  //     console.log('Applying filter:', filterValue);
      
  //     // Appliquer le filtre
  //     $grid.isotope({ filter: filterValue });
  //   } else {
  //     console.error('Isotope instance not found');
  //   }
  // });
 });//ready