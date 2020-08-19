import React from 'react';

function PersonList(props) {
    const listPeople = Array.from(props.peopleList).map(person => (
        <li key={person.id.value}>
            <span>
                {person.name.first} {person.name.last}
            </span>
        </li>
    ));
    return (
        <div>
            <h1>List of people</h1>
            <ul>{listPeople}</ul>
        </div>
    );
}
export default PersonList