import { Link } from 'react-router-dom';

function Footer() {
  const footerSections = [
    {
      title: 'Our Programs',
      links: [
        { name: 'Economic Empowerment', path: '/programs/economic' },
        { name: 'Agricultural Development', path: '/programs/agriculture' },
        { name: 'Skills Training', path: '/programs/education' },
        { name: 'Emergency Support', path: '/emergency-support' }
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Support Our Work', path: '/donate' },
        { name: 'Partner With Us', path: '/partner' },
        { name: 'Join Training', path: '/training' },
        { name: 'Volunteer', path: '/volunteer' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Impact Reports', path: '/impact/reports' },
        { name: 'Research', path: '/impact/research' },
        { name: 'Success Stories', path: '/impact/stories' },
        { name: 'Learning Center', path: '/resources/learning' }
      ]
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'Kampala Office: +256 800 100 200', path: 'tel:+256800100200' },
        { name: 'Email: support@upei.org', path: 'mailto:support@upei.org' },
        { name: 'Regional Centers', path: '/contact/locations' },
        { name: 'Report Issues', path: '/contact/report' }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} RISEPOINT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 