import ExploreBtn from '@/components/EploreBtn';

const Page = () => {
  return (
    <section>
      <h1 className='text-center'>
        The Hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className='mt-5 text-center'>
        Hackatohons, Meetups, and Conferences, All in One Place
      </p>

      <ExploreBtn />

      <div className='space-y-7 mt-20'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {[1, 2, 3, 4, 5].map((event) => (
            <li key={event}>Event {event}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
