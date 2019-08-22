const storeDataLocal = async (userfaces) => {

   await localStorage.setItem("userFacesData", JSON.stringify(userfaces));
   await localStorage.setItem("userDataStored", "1");

};


export default storeDataLocal;