import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';

const StaticPage = ({ className, children, title, ...props }) => {
  useEffect(() => {
    document.body.classList.add('is-static-page');
    return () => {
      document.body.classList.remove('is-static-page');
    };
  }, []);
  return (
    <div className={'page-content page-static' + (className ? ` ${className}` : '')} {...props}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="wrap">{children}</div>
      <Footer />
    </div>
  );
};

StaticPage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default StaticPage;
