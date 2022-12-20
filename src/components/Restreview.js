import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Restreview({reviews}) {
    console.log(reviews);
    const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn btn-light btn-sm btn-outline-warning"
      >
        Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            reviews.map((item,index)=>(
              <>
                <h6>{item.name} <span>{item.date}</span></h6>
                <p>{item.rating}</p>
                <p>{item.comments}</p>
              </>
            ))
          }
        </div>
      </Collapse>
    </>
  )
}

export default Restreview