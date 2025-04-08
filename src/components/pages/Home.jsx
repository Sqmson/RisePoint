import { Link } from 'react-router-dom';

function Home() {
  const impactStats = [
    { label: 'Communities Served', value: '50+' },
    { label: 'Active Volunteers', value: '1,200' },
    { label: 'Programs Running', value: '25' },
    { label: 'Lives Impacted', value: '10,000+' }
  ];

  const featuredPrograms = [
    {
      id: 1,
      title: 'Youth Empowerment',
      description: 'Empowering young people with skills and opportunities',
      image: '/assets/images/programs/youth.jpg',
      link: '/programs/youth'
    },
    {
      id: 2,
      title: 'Elder Care Support',
      description: 'Providing care and companionship to elderly community members',
      image: '/assets/images/programs/elderly.jpg',
      link: '/programs/elderly'
    },
    {
      id: 3,
      title: 'Community Health',
      description: 'Promoting health and wellness in local communities',
      image: '/assets/images/programs/health.jpg',
      link: '/programs/health'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Health Fair',
      date: '2024-03-15',
      location: 'Kampala Community Center',
      image: '/assets/images/events/health-fair.jpg'
    },
    {
      id: 2,
      title: 'Youth Leadership Workshop',
      date: '2024-03-20',
      location: 'Youth Center, Entebbe',
      image: '/assets/images/events/workshop.jpg'
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "Sarah's Journey",
      quote: "The youth program gave me the skills and confidence to start my own business.",
      image: '/assets/images/stories/sarah.jpg',
      category: 'Youth Success'
    },
    {
      id: 2,
      title: "Community Health Impact",
      quote: "The health outreach program has transformed healthcare access in our village.",
      image: '/assets/images/stories/health.jpg',
      category: 'Community Impact'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to RISEPOINT</h1>
        <p>Empowering Communities Through Sustainable Development</p>
      </section>
    </div>
  );
}

export default Home; 