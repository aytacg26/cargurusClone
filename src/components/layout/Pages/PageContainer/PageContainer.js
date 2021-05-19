import React from 'react';
import MainImageLoader from '../../MainImageLoader/MainImageLoader';
import SearchWindow from '../../SearchWindow/SearchWindow';

const PageContainer = ({
  children,
  searchHeader,
  hasSearchWindow,
  upSection,
}) => {
  const header = searchHeader || 'Know more, shop wisely';

  return (
    <div className='PageContainer'>
      {upSection && <MainImageLoader />}
      {hasSearchWindow && <SearchWindow header={header} />}
      <div className='PageBottomContainer'>{children}</div>
    </div>
  );
};

export default PageContainer;
