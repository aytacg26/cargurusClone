import React, { useState } from 'react';
import { Fragment } from 'react';
import { formatDate } from '../../../../utils/utilsFuncs';
import Button from '../../Button/Button';
import Profile from '../../Profile/Profile';
import ReviewStars from '../../RatingStars/ReviewStars/ReviewStars';
import TextArea from '../../TextArea/TextArea';
import classes from './UserReviewCard.module.scss';

const UserReviewCard = ({ review, isEditing, textSubmitted }) => {
  const initText = review.text;
  const [text, setText] = useState(initText);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setError(true);
    } else {
      setError(false);
      textSubmitted && textSubmitted();
      //Submit text to database...
      console.log(text);
    }
  };

  return (
    <Fragment>
      <div className={classes.ReviewData}>
        <div className={classes.UserData}>
          <Profile
            size={50}
            circle
            image={review.user.profileImage}
            username={review.user.fullName}
            gender={review.user.gender}
          />
          <div className={classes.NameArea}>
            <span className={classes.UserName}>{review.user.fullName}</span>
            <ReviewStars starNumber={review.stars} />
          </div>
        </div>
        <span className={classes.Date}>{formatDate(review.date)}</span>
      </div>
      {!isEditing && <div className={classes.ReviewText}>{text}</div>}
      {isEditing && (
        <form className={classes.EditSection} onSubmit={handleSubmit}>
          <TextArea
            value={text}
            onChange={handleChange}
            warningMessage={
              !text &&
              `You may edit the review but if you would like to remove it, please click delete button`
            }
            notValid={error}
            useTextError
            showCounter
            maxLength={400 - text.length}
          />
          <Button
            btnType='success'
            style={{ maxWidth: 65, maxHeight: 35, marginTop: -10 }}
          >
            Save
          </Button>
        </form>
      )}
    </Fragment>
  );
};

export default React.memo(UserReviewCard);
