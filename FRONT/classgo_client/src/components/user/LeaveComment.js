import React, { useState } from 'react';
import axios from 'axios';
import './user.css';

const LeaveComment = () => {
  const [content, setContent] = useState('');
  const [displayEmptyComment, setDisplayEmptyComment] = useState('none');
  const handleComment = (event) => {
    setContent(event.target.value);
  };
  const submiteComment = (event) => {
    event.preventDefault();
    const data = {
      content,
    };
    if (data.content !== '') {
      axios.post('http://localhost:5000/commentUser', data).then(() => {
        setContent('');
      }).catch((err) => {
        console.log(err);
      });
      document.location.reload();
    } else {
      setDisplayEmptyComment('block');
      setTimeout(() => {
        setDisplayEmptyComment('none');
      }, 5000);
    }
  };
  return (
    <form onSubmit={submiteComment} className="leaveComment">
      <label htmlFor="addComment" style={{ fontSize: 'x-large', marginTop: '10px' }}>Ajouter un commentaire :</label>
      <br />
      <textarea type="text" id="addComment" value={content} onChange={handleComment} placeholder="Laissez un commentaire" />
      <br />
      <p style={{
        display: `${displayEmptyComment}`, color: 'red', marginBottom: '20px', marginTop: '20px',
      }}
      >
        Veuillez écrire votre commentaire
      </p>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default LeaveComment;
