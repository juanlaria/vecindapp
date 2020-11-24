import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button, Container, Fab } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Link from './Link';

const TopicWrapper = styled.article`
  padding: 0.8rem 0 0.4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  .inner {
    display: flex;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 1.4rem;
  }

  h2 {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .description {
    font-size: 0.7rem;
    color: var(--color-black);
    opacity: 0.7;
    margin-bottom: 1rem;
  }

  .author {
    font-size: 0.7rem;
    color: var(--color-black);
    margin-bottom: 0.8rem;
  }

  .button-wrapper {
    margin-top: 0.4rem;
  }

  .fab-section {
    flex: 0;
    position: relative;
  }

  .fab-wrapper {
    position: sticky;
    top: 0.6rem;
    
    p {
      font-size: 0.7rem;
      text-align: center;
      margin-top: 0.8rem;
    }
  }
`;

const Topic = ({ title, description, author, votes }) => {
  const [isVoted, setIsVoted] = useState(false);

  return (
    <TopicWrapper>
      <Container>
        <div className="inner">
          <section className="content">
            {title && <h2>{title}</h2>}
            {description && <p className="description">{description}</p>}
            {author && <p className="author">Vecino: {author}</p>}
            <div className="button-wrapper">
              <Button
                edge="start"
                size="small"
                color="primary"
                onClick={() => alert('Botón deshabilitado')}
              >
                Ver archivos adjuntos
              </Button>
            </div>
            <div className="button-wrapper">
              <Button
                edge="start"
                size="small"
                color="primary"
                component={Link}
                href="/presupuestos"
              >
                Ver presupuestos
              </Button>
            </div>
          </section>
          <section className="fab-section">
            <div className="fab-wrapper">
              <Fab
                color={isVoted ? 'primary' : 'initial'}
                aria-label="Votar tema"
                onClick={() => setIsVoted(!isVoted)}
              >
                <FavoriteIcon />
              </Fab>
              <p>{isVoted ? votes + 1 : votes}</p>
            </div>
          </section>
        </div>
      </Container>
    </TopicWrapper>
  );
};

Topic.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string,
  votes: PropTypes.number,
};

Topic.defaultProps = {
  author: null,
  votes: 0,
};

export default Topic;
