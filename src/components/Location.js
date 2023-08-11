const fetchCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
    })
}
