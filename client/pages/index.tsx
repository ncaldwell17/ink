'use strict';

// General
import React, { useState, useEffect }  from 'react';

// Ink

export const TestComponent: React.FC = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/example');
                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.status}`);
                }
                const data = await response.json();
                setData(data);  // Store the data in state
            } catch (error) {
                console.error('Error:', error);
            }
        }

        void fetchData();
    }, []); // the empty array makes sure the effect runs only once on component mount

    return (
        <h1>Hello {data ? <p>{data.name}</p> : 'Loading...'}!</h1>
    )
}

export async function getServerSideProps(context) {
    // Check if the user is authenticated
    const isAuthenticated = true; // replace this

    if (!isAuthenticated) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    // Pass the authentication status to the page component as a prop
    return { props: { isAuthenticated } };
}

const TestPage = () => {
    return (
        <div>
            <TestComponent />
        </div>
    )
}

export default TestPage;
