function getProducts() {
    const collectionRef = collection(db, "NOMBRE_DE_LA_COLECCION");
    const { docs } = await getDocs(collectionRef);
}