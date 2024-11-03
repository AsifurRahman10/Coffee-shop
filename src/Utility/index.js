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



export { addFavorite, getAllFavorites }