import React from 'react';
import classNames from 'classnames';
import { useState } from 'react';

import '../styles/components/Tabs.css';

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].title);

  return (
    <div className="tabs">
      <div className="tabs__titles">
        {tabs.map((tab) => (
          <div
            onClick={() => setSelectedTab(tab.title)}
            className={classNames('tabs__title', {
              'tabs__title--selected': selectedTab === tab.title,
            })}
            key={tab.title}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {tabs.map((tab) => (
        <div key={tab.title} className="tabs__content">
          {selectedTab === tab.title && <div>{tab.component}</div>}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
