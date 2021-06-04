import React, { useState, useMemo } from 'react';
import Card from '../Card/Card';
import classes from './UserReview.module.scss';
import LikeReaction from '../LikeReaction/LikeReaction';
import UserReviewCard from './UserReviewCard/UserReviewCard';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { Fragment } from 'react';

/**
 * 
 * @TODO :
  1- Like, Dislike kısmına toplam sayılar eklenecek ve bu sebeple, ayrı bir component içine alalım
  kullanıcı, bir yazıyı beğenmiş ise, aynı yazıyı sadece like'tan dislike'a çevirebilmeli veya like'ı kaldırabilmeli
  kullanıcı, bir yazıyı beğenmiş ise, kullanıcı, o yoruma geldiğinde, like yaptığı belli olmalı, mesela like ise like rengi, 
  dislike ise dislike rengi farklı olmalı (Like ise site mavisi, dislike ise site danger kırmızısı.)

  2- Kullanıcının resmini gösteren profile componenti oluşturulsun, bu component farklı yerlerde, farklı büyüklüklerde
  kullanılacağından, büyülük ayarı, props aracılığı ile yapılabilmeli, buna ek olarak bazı yerlerde daire içinde resim
  bazı yerlerde, kare resim olacağından, bu ayar da props aracılığı ile yapılabilmeli. Kullanıcının profil resimin olmadığı
  durumlar için default resim gösterebilmeli.

  3- Read ... Reviews'e tıklandığında reviewler açılmalı, default durumda kapalı olacak.

  4- ReviewsList için ayrı component oluşturulsun ve bu component içinde, reviewlerin filtelenmesi sağlanmalı
  
  5- Add your review buttonuna tıklandığında, önce yorum yapmak ile alakalı uyarı yazısının yazdığı
  modal çıkmalı, kullanıcının şartları kabul etmesi durumunda, aynı modal'da yeni pencere açılmalı ve bu
  pencere, yorum formunu içermelidir. Yorumu yapan kullanıcının bu yorumu silmesi veya edit etmesi için 
  2 ek icon daha bu bölüme yerleştirilecek.
 */
const UserReview = ({ review, onDelete }) => {
  const [edit, setEdit] = useState(false);

  const userReview = useMemo(
    () => review,

    //This is not solution, we need to destruct review and add stars, text, likes & dislikes as dependency
    //eslint-disable-next-line
    []
  );

  if (!review) {
    return null;
  }

  const handleEdit = () => {
    setEdit(true);
  };

  const handleTextSubmit = () => {
    setEdit(false);
  };

  return (
    <Card>
      <UserReviewCard
        review={userReview}
        isEditing={edit}
        textSubmitted={handleTextSubmit}
      />
      <div className={classes.ReviewActions}>
        <LikeReaction review={userReview} />
        <div className={classes.ReviewUD}>
          {!edit && (
            <Fragment>
              <MdEdit size={18} color='#0277bd' onClick={handleEdit} />
              <MdDeleteForever
                size={18}
                color='rgb(248, 19, 19)'
                onClick={onDelete}
              />
            </Fragment>
          )}
        </div>
      </div>
    </Card>
  );
};

export default UserReview;
