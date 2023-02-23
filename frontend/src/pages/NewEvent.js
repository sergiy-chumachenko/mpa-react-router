import {json, redirect} from 'react-router-dom'

import EventForm from "../components/EventForm";

const NewEvent = () => {
    return (
        <EventForm/>
    );
}

export default NewEvent;

export async function action({request}) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        date: data.get('date'),
        description: data.get('description'),
        image: data.get('image'),
    }

    const response  = await fetch('http://localhost:8080/events', {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok){
        throw json({message: 'Could not save event'}, {status: 500})
    }
    return redirect('/events');
}