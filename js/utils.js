function switchEjercicio(ejercicioSeleccionado) {
    switch(ejercicioSeleccionado) {
        case '1':
            calcularEdad(document.getElementById('fechaEdad').value, document.getElementById('nombreEdad').value);
            break;

        case '2':
            tirarFruta(document.getElementById('fruta').value);
            break;

        case '3':
            compararDatos();
            break;

        case '4':
            yoObjeto();
            break;

        case '5':
            doblarArray(document.getElementById('arrayNumeros').value);
            break;

        case '6':
            dibujarTriangulos();
            break;

        case '7':
            filtrarNombres(document.getElementById('nombresInput').value);
            break;

        case '8':
            reemplazarPalabra(
                document.getElementById('textoOriginal').value,
                document.getElementById('palabraBuscar').value,
                document.getElementById('palabraReemplazo').value
            );
            break;

        case '9':
            cortarTexto(
                document.getElementById('textoCortar').value,
                document.getElementById('numCaracteres').value
            );
            break;

        case '10':
            separarLista(document.getElementById('listaSeparador').value);
            break;

        case '11':
            calcularRecaudacion(document.getElementById('pedidosInput').value);
            break;

        default:
            alert("Ejercicio no válido");
    }
}
