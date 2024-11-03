import toast from "react-hot-toast";

// get
const getAllFavorites = () => {
    const getData = localStorage.getItem('my-favorite');
    if (getData) {
        const getDataN = JSON.parse(getData);
        return getDataN;
    }
    else {
        return [];
    }
}


// add
const addFavorite = (coffee) => {
    console.log(coffee);
    const getData = getAllFavorites();
    const checkDuplicate = getData.find(data => data.id === coffee.id);
    if (checkDuplicate) {
        return toast('already added');
    }
    getData.push(coffee);

    localStorage.setItem('my-favorite', JSON.stringify(getData));
}


// remove
const removeFavorite = id => {
    const dataS = getAllFavorites();
    // console.log(data, id);
    const checkDuplicate = dataS.filter(data => data.id !== id);
    localStorage.setItem('my-favorite', JSON.stringify(checkDuplicate));
    toast.success('deleted')
}


export { addFavorite, getAllFavorites, removeFavorite }