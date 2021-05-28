import React from 'react';
import classes from './RecentActivities.module.scss';
import RecentActivity from './RecentActivity/RecentActivity';

const recentActivities = [
  {
    id: 'recent-0001-0002',
    activityHeading: 'Your Last Search',
    cardHeader: 'Infiniti',
    cardSubHeader: 'Nationwide',
    url: '/',
    image:
      'https://i.postimg.cc/hj763jrR/2010-infiniti-ex35-pic-3285049437255010275-1600x1200.jpg',
  },
  {
    id: 'recent-0002-0003',
    activityHeading: 'Saved & Recent Searches',
    cardHeader: 'New Buick Encore',
    cardSubHeader: 'Nationwide',
    url: '/',
    image:
      'https://i.postimg.cc/Fz58t4Wd/2019-buick-encore-pic-3281545535864408794-1600x1200.jpg',
  },
  {
    id: 'recent-0003-0004',
    activityHeading: 'Related Searches',
    cardHeader: 'INFINITI EX35',
    cardSubHeader: 'Nationwide',
    url: '/',
    image:
      'https://i.postimg.cc/hj763jrR/2010-infiniti-ex35-pic-3285049437255010275-1600x1200.jpg',
  },
  {
    id: 'recent-0004-0005',
    activityHeading: '',
    cardHeader: 'INFINITI FX35',
    cardSubHeader: 'Nationwide',
    url: '/',
    image:
      'https://i.postimg.cc/7LRjV7SN/2007-infiniti-fx35-awd-pic-47838-1600x1200.jpg',
  },
];

/**
 * <a href="https://postimages.org/" target="_blank"><img src="" alt="2007-infiniti-fx35-awd-pic-47838-1600x1200"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="" alt="2010-infiniti-ex35-pic-3285049437255010275-1600x1200"/></a><br/><br/>
<a href="https://postimg.cc/MM5dRh8q" target="_blank"><img src="" alt="2019-buick-encore-pic-3281545535864408794-1600x1200"/></a><br/><br/>

 * 
 */

const RecentActivities = () => {
  return (
    <div className={classes.RecentActivities}>
      <div className={classes.Activities}>
        {recentActivities.map((activity) => (
          <RecentActivity
            url={activity.url}
            cardHeader={activity.cardHeader}
            activityHeading={activity.activityHeading}
            image={activity.image}
            subHeader={activity.cardSubHeader}
            key={activity.id}
            id={activity.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
