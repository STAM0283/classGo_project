import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeaveComment from './LeaveComment';
import './user.css';

const Comments = () => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:5000/commentUser').then((response) => {
      setComments(response.data);
    });
  }, []);

  return comments !== null ? (
    <div className="comments">
      <LeaveComment />
      <hr />
      <div className="content">
        {
        comments.map((item) => (
          <div className="commentUser">
            <p className="createdAt">
              Ajouté le :
              {item.createdAt.substr(0, 19)}
            </p>
            <p key={item.comment_id}>{item.content}</p>
          </div>
        ))
      }
      </div>
    </div>
  ) : (
    <p>LOADING</p>
  );
};

export default Comments;
