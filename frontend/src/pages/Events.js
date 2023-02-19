import EventsList from "../components/EventsList";


const DUMMY_EVENTS = [
    {
        id: '1',
        title: 'Fire Sky Event',
        image: 'https://wallpapercave.com/wp/wp2349395.jpg',
        date: '2023-01-14'
    },
    {
        id: '2',
        title: 'Japan Event',
        image: 'https://wallpaperaccess.com/full/258404.jpg',
        date: '2023-01-10'
    },
    {
        id: '3',
        title: 'Electro Music Event',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
        date: '2023-01-01'
    },
    {
        id: '4',
        title: 'Rich Boys Event',
        image: 'https://legendaryinc.com/wp-content/uploads/2021/08/special-events-regatta-bay-legendary-private-dining-083121-min.jpg',
        date: '2023-01-01'
    },
    {
        id: '5',
        title: 'Ride in the Mountains Event',
        image: 'https://cdn.wallpapersafari.com/98/40/85sqbo.jpg',
        date: '2022-12-23'
    },
]

const Events = () => {
    return <EventsList events={DUMMY_EVENTS}/>;
}

export default Events;