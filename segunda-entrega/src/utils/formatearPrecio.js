export const formatearPrecio = (precio) =>
    new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "USD",
    }).format(precio);