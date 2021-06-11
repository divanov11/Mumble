import React, { useState } from 'react';

import '../styles/components/SearchPage.css';

import { Page, SkillList } from '../components';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { UsersService } from '../services';
import { AuthorBox, Button } from '../common';
import FollowButton from '../components/FollowButton';
import { getImageUrl } from '../utilities/getImageUrl';

const TagsPage = () => {
  const { search } = useLocation();
  const [skill, setSkill] = useState();
  const [results, setResults] = useState({
    results: [],
  });
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(search);
    setSkill(params.get('skill'));
    setResults({
      results: [],
    });
  }, [search]);

  useEffect(() => {
    if (!skill) return;
    setLoading(true);
    UsersService.getUsersBySkill(skill, page).then((res) => {
      setResults((r) => ({
        ...r,
        results: [...r.results, ...res.results],
      }));
      setHasMore(!!res.next);
      setLoading(false);
    });
  }, [skill, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Page>
      <section>
        <h1>
          Users who know <b>{skill}</b>
        </h1>
        {results.results.map((user) => (
          <div key={user.id} className="card">
            <div className="card__body">
              <div className="searchItem">
                <div className="searchItem__top">
                  <AuthorBox
                    avatarSrc={getImageUrl(user.profile.profile_pic)}
                    url={`/profile/${user.username}`}
                    name={user.profile.name}
                    handle={user.username}
                    size="md"
                  />
                  <FollowButton userProfile={user.profile} />
                </div>
                <p className="searchItem__bottom">{user.profile.bio}</p>
                <SkillList tags={user.profile.skills} />
              </div>
            </div>
          </div>
        ))}

        {hasMore && (
          <Button
            size="lg"
            disabled={loading}
            onClick={handleLoadMore}
            text={!loading ? 'Load More' : 'Loading...'}
            iconName={loading && 'spinner fa-spin'}
          />
        )}
      </section>
      <section></section>
    </Page>
  );
};

export default TagsPage;
