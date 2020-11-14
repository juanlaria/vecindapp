import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Link from './Link';

const Topic = ({title, description, author, votes}) => {

  return (
    <article>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {author && <small>Vecino: {author}</small>}
      <Button variant="contained" color="primary" component={Link} href="/presupuestos">Lista de presupuestos</Button>
    </article>
  )
}

Topic.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string,
  votes: PropTypes.number,
};

Topic.defaultProps = {
  author: null,
  votes: 0,
}

export default Topic;