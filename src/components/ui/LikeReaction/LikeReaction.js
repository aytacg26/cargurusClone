import React, { useState } from 'react';
import classes from './LikeReaction.module.scss';
import { BiLike, BiDislike } from 'react-icons/bi';
import { Fragment } from 'react';
import ReactionsModal from './ReactionsModal/ReactionsModal';
import ReactionsList from './ReactionsList/ReactionsList';

//Like, Dislike will be active with the help of backend
/*Possible Actions :
    1- If user liked the review before, when s/he clicks like again, remove him/her from likes list
    2- If user liked the review before, when s/he clicks dislike, remove him/her from likes list and add him/her to dislikes list
    3- If user likes the review, if it is a new like, add user to the like list
    4- If user dislike the review, if it is a new dislike, that is, user is not in any list, add user to dislike list 
*/

const LikeReaction = ({ review }) => {
  const { reactions } = review;
  const [showAllReacts, setShowAllReacts] = useState(false);
  const allReactions = [...reactions.likes, ...reactions.dislikes].sort(
    (a, b) => {
      return b.date - a.date;
    }
  );

  const showAllReactions = () => {
    setShowAllReacts((prevState) => !prevState);
  };

  return (
    <Fragment>
      <form className={classes.LikeDislike}>
        <div className={classes.Likes}>
          <BiLike
            color='grey'
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              console.log('User Liked the review');
            }}
          />
          <span>{reactions.likes.length}</span>
        </div>

        <div className={classes.Likes}>
          <BiDislike
            color='grey'
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={() => console.log('User Dislike the review...')}
          />
          <span>{reactions.dislikes.length}</span>
        </div>

        <ReactionsList reactions={allReactions} onClick={showAllReactions} />
      </form>
      <ReactionsModal
        onClick={showAllReactions}
        show={showAllReacts}
        reactions={allReactions}
        review={review}
      />
    </Fragment>
  );
};

export default React.memo(LikeReaction);
