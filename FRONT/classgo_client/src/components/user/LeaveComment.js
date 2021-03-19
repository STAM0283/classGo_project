import React, { useState } from 'react';
import axios from 'axios';
import './user.css';

const LeaveComment = () => {
  const [content, setContent] = useState('');
  const handleComment = (event) => {
    setContent(event.target.value);
  };
  const submiteComment = (event) => {
    event.preventDefault();
    const data = {
      content,
    };
    axios.post('http://localhost:5000/commentUser', data).then((response) => {
      console.log('@@@@@@@@', response);
      setContent('');
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <form onSubmit={submiteComment}>
      <label htmlFor="addComment">Ajouter un commentaire :</label>
      <br />
      <textarea type="text" id="addComment" value={content} onChange={handleComment} placeholder="Laissez un commentaire" />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default LeaveComment;
