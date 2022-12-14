import NewMeetupForm from "../componants/meetups/NewMeetupForm";

function NewMeetupsPage(){
    function addMeetupHandler(meetupData){
        fetch("https://react-course-c2f1e-default-rtdb.firebaseio.com/meetups.json",
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }
        );
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
}

export default NewMeetupsPage;