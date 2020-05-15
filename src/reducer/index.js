const reducer = (people, action) => {
    if (action.type == 'chomp') {
        return people.map(person => {
            if (person.name == action.payload) {
                person.alive = false;
            }
            return person;
        })
    }
    if (action.type == 'revive') {
        return people.map(person => {
            if (person.name == action.payload) {
                person.alive = true;
            }
            return person;
        })
    }
}