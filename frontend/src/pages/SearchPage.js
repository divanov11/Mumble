import React, { useState, useCallback } from 'react';

import '../styles/components/SearchPage.css';

import { articles, interests, skills } from '../data';
import {
  SearchByPanel,
  SearchBySkillsList,
  SearchByInterestsList,
  SearchByUsersList,
  SearchByArticlesList,
  SearchByPostsList,
  Page,
} from '../components';
import SearchFilters from '../components/SearchFilters';
import {
  CATEGORY_ARTICLES,
  CATEGORY_INTERESTS,
  CATEGORY_POSTS,
  CATEGORY_SKILLS,
  CATEGORY_USERS,
} from '../components/SearchByPanel';

const SearchPage = () => {
  // refactor this into redux
  let [category, setCategory] = useState(CATEGORY_USERS);
  const [searchFilters, setSearchFilters] = useState({});

  const handleFiltersChange = useCallback((newFilters) => {
    setSearchFilters(newFilters);
    // TODO: Apply filters to search results
    console.log('Filters applied:', newFilters);
  }, []);

  return (
    <Page>
      <section>
        {category === CATEGORY_USERS && <SearchByUsersList filters={searchFilters} />}
        {category === CATEGORY_POSTS && <SearchByPostsList filters={searchFilters} />}
        {category === CATEGORY_ARTICLES && <SearchByArticlesList articles={articles} filters={searchFilters} />}
        {category === CATEGORY_SKILLS && <SearchBySkillsList skills={skills} filters={searchFilters} />}
        {category === CATEGORY_INTERESTS && <SearchByInterestsList interests={interests} filters={searchFilters} />}
      </section>

      <section className="three-column-layout__right-column">
        <SearchFilters 
          category={category} 
          onFiltersChange={handleFiltersChange}
        />
        <SearchByPanel category={category} setCategory={setCategory} />
      </section>
    </Page>
  );
};

export default SearchPage;
