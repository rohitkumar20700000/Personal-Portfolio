import React from 'react';
import Styles from './Achievement.module.css';
import codeathon from '../../assets/codeathon.jpg';
import leetcode2024 from '../../assets/leetcode2024.png';
import leetcode2025 from '../../assets/leetcode2025.png';
import video from '../../assets/bg2.mp4';

const achieve = [
  {
    id: 1,
    card:'./codeathon-certificate.pdf',
    image: codeathon,
    title: '3rd Prize - Codeathon Event At SLA',
    description: 'Achieved 3rd prize in Codeathon event held at SLA Institute for our innovative project "Style Match" .',
  },
  {
    id: 2,
    card:'./leetcode2024-badge.png',
    image: leetcode2024,
    title: '50-Day LeetCode consistency badge (2024)',
    description: 'Solved 150+ problems using Python on LeetCode in 2024.',
  },
  {
    id: 3,
    card:'./leetcode2025-badge.png',
    image: leetcode2025,
    title: '50-Day LeetCode consistency badge (2025)',
    description: 'Solved 50+ problems using Java on LeetCode in 2025.',
  },
];

const Achievement = () => {
  return (
    <div id='achievement' className={Styles.Achievement}>
      <video autoPlay loop muted className={Styles.bgVideo}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Achievements</h1>
      <div className={Styles.AchievementComponent}>
        {achieve.map((item) => (
          <div key={item.id} onClick={() => window.location.href = item.card} className={Styles.AchievementCard}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
