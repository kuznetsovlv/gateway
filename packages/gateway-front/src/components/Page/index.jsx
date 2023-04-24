import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Icon from 'icon';
import { ROOT_ROUTE } from 'routes';
import Button from '../Button';
import Loader from '../Loader';
import styles from './Page.module.scss';

const Page = memo(({ title, children, loading }) => (
  <div className={styles.root}>
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <Button type="ghost" circled link={ROOT_ROUTE} title="Home">
        <Icon name="home" type="ghost" />
      </Button>
    </header>
    <main className={clsx(styles.main, { [styles.loading]: loading })}>
      {loading ? <Loader /> : children}
    </main>
  </div>
));

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool
};

Page.defaultProps = { title: null, loading: false };

export default Page;
