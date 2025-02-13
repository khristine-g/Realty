import React from 'react';
import '../News.css';
// import news1 from '../images/news1.jpg';
// import news2 from '../images/news2.jpg';
// import news3 from '../images/news3.jpg';

const News = () => {
  const articles = [
    {
      id: 1,
      title: 'Retail banks wake up to digital lending this year',
      date: '14 May',
      description: 'Retail banks are rapidly transforming their lending strategies in response to the digital revolution, leveraging AI and automation for better customer experience.',
      image: "https://www.solomonsfurnituresuperstore.co.uk/wp-content/uploads/2022/01/Alstons-Savannah-room-set-image-2000x1000.jpg",
    },
    {
      id: 2,
      title: 'Strategic and commercial approach with issues',
      date: '21 Apr',
      description: 'Businesses are shifting their focus toward a more strategic approach, balancing innovation with risk management for sustainable growth.',
      image: "https://www.solomonsfurnituresuperstore.co.uk/wp-content/uploads/2022/01/Alstons-Savannah-room-set-image-2000x1000.jpg",
    },
    {
      id: 3,
      title: 'Within the construction industry as their overdraft',
      date: '1 Feb',
      description: 'The construction industry is redefining its financial approach, adopting new technologies and financial structures to optimize project funding.',
      image: "https://www.solomonsfurnituresuperstore.co.uk/wp-content/uploads/2022/01/Alstons-Savannah-room-set-image-2000x1000.jpg",
    },
  ];

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="news-title">Latest News</h2>
        <p className="news-subtitle">Stay Updated with Industry Trends</p>
        <div className="news-grid">
          {articles.map((article) => (
            <div key={article.id} className="news-card">
              <div
                className="news-image"
                style={{ backgroundImage: `url(${article.image})` }}
              ></div>
              <div className="news-content">
                <p className="news-date">{article.date}</p>
                <h3 className="news-headline">{article.title}</h3>
                <p className="news-description">{article.description}</p>
                <a href="https://www.businessdailyafrica.com/bd/markets/real-estate" className="read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
