import React from 'react';

const ProductDescription = ({ description }) => {
  const paragraphs = description.split('\n');
  const descriptionHTML = paragraphs.map((paragraph, index) => (
    <React.Fragment key={index}>
      <p>{paragraph}</p>
      {index < paragraphs.length - 1 && <br />}
    </React.Fragment>
  ));
  return <div>{descriptionHTML}</div>;
}

export default ProductDescription;