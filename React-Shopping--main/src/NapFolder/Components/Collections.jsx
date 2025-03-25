import React from 'react'

const Collections = (props) => {
  const {title, image1, price1, image2, price2, image3,price3, image4, price4, image5,price5, image6,price6, image7,price7, image8,price8, image9,price9, image10, price10} = props.gentsFashion
  return (
    <div className='collectionSection'>
     <h2>{title}</h2>
     <span id='lines'>.....................................</span>

     <div className="menimages">

      <div className='itemcontainer'><img src={image1} alt="hero" />
      <p className='Price'><s>1499</s>  {price1}</p>
      <p className='itemName'>SPYKAR Solid<br></br> Denim Slim Fit Shirt</p></div>

      <div className='itemcontainer'><img src={image2} alt="hero" />
      <p className='Price'><s>1999</s> {price2}</p>
      <p className='itemName'>U.S. POLO ASSN.<br></br> Men Slim Fit Casual Shirt</p></div>

      <div className='itemcontainer'><img src={image3} alt="hero" />
      <p className='Price'><s>1999</s> {price3}</p>
      <p className='itemName'>ALLEN SOLLY <br></br>Printed Sport Fit Shirt</p></div>

      <div className='itemcontainer'><img src={image4} alt="hero" />
      <p className='Price'><s>1799</s> {price4}</p>
      <p className='itemName'>PEPE JEANS<br></br> Checked Hooded Shirt</p></div>

      <div className='itemcontainer'><img src={image5} alt="hero" />
      <p className='Price'><s>1499</s> {price5}</p>
      <p className='itemName'>SPYKAR Solid<br></br> Denim Slim Fit Shirt</p>
      </div>

      <div className='itemcontainer'><img src={image6} alt="hero" />
      <p className='Price'><s>1899</s> {price6}</p>
      <p className='itemName'>SPYKAR Solid<br></br> Denim Slim Fit T-Shirt</p></div>

      <div className='itemcontainer'><img src={image7} alt="hero" />
      <p className='Price'><s>999</s> {price7}</p>
      <p className='itemName'>U.S POLO<br></br> Denim Slim Fit T-Shirt</p></div>

      <div className='itemcontainer'><img src={image8} alt="hero" />
      <p className='Price'><s>1599</s> {price8}</p>
      <p className='itemName'>REDTAPE<br></br> Denim Slim Fit T-Shirt</p></div>

      <div className='itemcontainer'><img src={image9} alt="hero" />
      <p className='Price'><s>1799</s> {price9}</p>
      <p className='itemName'>PETERLAND<br></br> Denim Slim Fit Shirt</p></div>

      <div className='itemcontainer'><img src={image10} alt="hero" />
      <p className='Price'><s>1299</s> {price10}</p>
      <p className='itemName'>SPYKAR Solid<br></br> Denim Slim Fit Shirt</p></div>

     </div>
    </div>
  )
}

export default Collections
