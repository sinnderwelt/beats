let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.748740, 37.620452],
        zoom: 15,
        controls:[]
    });

    const coords = [
        [55.744586, 37.627311],
        [55.742593, 37.609273],
        [55.751182, 37.606828],
        [55.755730, 37.630452]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./assets/images/marker.svg",
        iconImageSize: [58, 73],
        iconImageOffset: [-35, -59]
    })

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);