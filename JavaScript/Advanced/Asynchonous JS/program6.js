const hasMeeting = false;

const meeting = new Promise((resolve, reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        };
        resolve(meetingDetails);
    } else{
        reject(new Error('Meeting already scheduled!'));
    }
});

// const addToCalender = (meetingDetails) =>{
//     return new Promise((resolve, reject) =>{
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calendar);
//     })
// };

// Same as previous addToCalender variable
const addToCalender = (meetingDetails) =>{
    const calendar = `{meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
}
meeting.then(addToCalender)
    .then((res)=>{
        console.log(JSON.stringify(res));
    }).catch((err)=>{
        console.log(err.message);
    });

console.log('Hello');
