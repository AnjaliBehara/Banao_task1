import React from 'react';

const Groups = () => {
 const groupData = [
  { id: 1, title: "Group 1", desc: "This is a sample group description.", image: `${process.env.PUBLIC_URL}/g1.jpeg` },
  { id: 2, title: "Group 2", desc: "Another sample group description.", image: `${process.env.PUBLIC_URL}/g2.jpeg` },
  { id: 3, title: "Group 3", desc: "More content for another group.", image: `${process.env.PUBLIC_URL}/g3.jpeg` },
];


  return (
    <div className="groups">
      <h2 className="text-center mb-4">Groups</h2>
      <div className="row">
        {groupData.map(group => (
          <div key={group.id} className="col-md-4 col-sm-12 mb-4">
            <div className="card h-100">
              <img src={group.image} className="card-img-top" alt={group.title} />
              <div className="card-body">
                <h5 className="card-title">{group.title}</h5>
                <p className="card-text">{group.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
