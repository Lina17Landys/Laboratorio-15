$(() => {
    $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert", (data) => {
      const items = data.meals;
  
      items.forEach((item) => {
        const idReceta = item.idMeal;
        const nombre = item.strMeal;
        const imagen = item.strMealThumb;
  
        const elementoHTML = `<div class="card">
          <h2>${nombre}</h2>
          <img src="${imagen}" alt="${nombre}" data-id="${idReceta}" />
        </div>`;
  
        $("#contenedor").append(elementoHTML);
      });
  
      $(".card img").click((event) => {
        const idReceta = $(event.target).data("id");
  
        window.location.href = `recetas.html?id=${idReceta}`;
      });
    });
  });
  
  $(document).ready(() => {
    $.get("https://www.themealdb.com/api/json/v1/1/categories.php", (data) => {
      const categorias = data.categories;
  
      categorias.forEach((categoria) => {
        const nombre = categoria.strCategory;
        const idCategoria = categoria.idCategory;
  
        const elementoHTML = `<div data-id="${idCategoria}">${nombre}</div>`;
  
        $("#contenedorCategorias").append(elementoHTML);
      });
  
      $("#contenedorCategorias div").click((event) => {
        const category = $(event.target).data("id");
  
        $.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`,
          (data) => {
            if (data && data.meals) {
              const recetas = data.meals;
  
              $("#contenedorRecetas").empty();
  
              recetas.forEach((receta) => {
                const nombreReceta = receta.strMeal;
                const imagenReceta = receta.strMealThumb;
  
                const elementoRecetaHTML = `<div class="card">
                  <h2>${nombreReceta}</h2>
                  <img src="${imagenReceta}" alt="${nombreReceta}" />
                </div>`;
  
                $("#contenedorRecetas").append(elementoRecetaHTML);
              });
            }
          }
        );
      });
    });
  });
  