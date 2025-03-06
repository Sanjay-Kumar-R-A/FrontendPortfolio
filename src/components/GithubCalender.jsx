import React from 'react'
import GitHubCalendar from 'react-github-calendar';

export default function GithubCalender() {
    return (
        <div>
            <GitHubCalendar
                username="grubersjoe"
                blockSize={15}
                blockMargin={2}
                color="#7030a0"
                fontSize={16} />
        </div>
    )
}



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const GithubCalender = () => {
//     const [contributions, setContributions] = useState(null);

//     useEffect(() => {
//         const fetchContributions = async () => {
//             try {
//                 const response = await axios.get('https://api.github.com/users/mohan7401647399/events');
//                 setContributions(response.data);
//             } catch (error) {
//                 console.error('Error fetching GitHub data', error);
//             }
//         };

//         fetchContributions();
//     }, []);

//     return (
//         <div>
//             {contributions ? (
//                 <pre>{JSON.stringify(contributions, null, 2)}</pre>
//             ) : (
//                 <p>Loading contributions...</p>
//             )}
//         </div>
//     );
// };

// export default GithubCalender;



// import React, { useEffect, useRef } from 'react';
// import GitHubCalendar from 'github-calendar';

// const GithubCalender = () => {
//     const calendarRef = useRef(null);

//     useEffect(() => {
//         if (calendarRef.current) {
//             GitHubCalendar(calendarRef.current, 'mohan7401647399', {
//                 responsive: true,
//             });
//         }
//     }, []);

//     return <div ref={calendarRef}></div>;
// };

// export default GithubCalender;
