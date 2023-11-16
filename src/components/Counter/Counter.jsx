import SingleCounter from "./SingleCounter";

const Counter = () => {

    const counters = [
        {
            count: 120,
            desc: 'Total Destination'
        },
        {
            count: 500,
            desc: 'Travel Packages'
        },
        {
            count: '125k',
            desc: 'Total Travelers'
        },
        {
            count: '7k',
            desc: 'Positive Reviews'
        },
    ]

    return (
        <div className="container mx-auto">
            <hr />

            <div className="grid grid-cols-4 gap-11 py-20">
                {
                    counters.map(counter => <SingleCounter key={counter.count} counter={counter} />)
                }
            </div>
        </div>
    );
};

export default Counter;