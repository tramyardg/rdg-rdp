const candidates = ['Michael', 'Kevin', 'Albert', 'Connor', 'Harry'];

const totalVotes = votes => {
    return votes.reduce((acc, name) => ({
        ...acc,
        [name]: acc[name] ? acc[name] + 1 : 1
    }), {});
}