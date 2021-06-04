import React from 'react';
import Modal from '../../Modal/Modal';
import UserReviewCard from '../../UserReview/UserReviewCard/UserReviewCard';
import ReactionsModalBar from '../ReactionsModalBar/ReactionsModalBar';
import classes from './ReactionsModal.module.scss';

const ReactionsModal = ({ reactions, review, onClick, show }) => {
  if (!reactions) {
    return null;
  }

  return (
    <Modal onClick={onClick} hide={!show}>
      <div className={classes.Bars}>
        <UserReviewCard review={review} />
        {reactions.map((reaction) => (
          <ReactionsModalBar key={reaction.id} reaction={reaction} />
        ))}
        <div className={classes.Totals}>
          <div className={classes.Group}>
            <span>Likes : </span>
            <span>
              {reactions.filter((react) => react.typeNo === 1).length}
            </span>
          </div>
          <div className={classes.Group}>
            <span>Dislikes : </span>
            <span>
              {reactions.filter((react) => react.typeNo === 0).length}
            </span>
          </div>
          <div
            className={classes.Group}
            style={{ borderTop: '1px solid #ccc', paddingTop: 3 }}
          >
            <span>Total : </span>
            <span>{reactions.length}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReactionsModal;
