$(() => {
    // Obtener el ID de la receta de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const idReceta = urlParams.get('id');

    // Hacer la solicitud GET a la API para obtener los detalles de la receta
    $.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceta}`, (data) => {
        // Obtener los detalles de la receta
        const receta = data.meals[0];
        const nombre = receta.strMeal;
        const categoria = receta.strCategory;
        const area = receta.strArea;
        const instrucciones = receta.strInstructions;
        const imagen = receta.strMealThumb;

        // Mostrar los detalles de la receta en HTML
        $("#nombreReceta").text(nombre);
        $("#categoriaReceta").text(categoria);
        $("#areaReceta").text(area);
        $("#instruccionesReceta").text(instrucciones);
        $("#imagenReceta").attr("src", imagen);
    });
});
