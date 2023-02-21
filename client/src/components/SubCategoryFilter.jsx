import React from 'react'

const SubCategoryFilter = ({formChangeHandler, productInfo}) => {
      if (productInfo.mainCategory === "bikes") {
          return (
              <select onChange={ formChangeHandler } name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                  <option value="trail">Trail</option>
                  <option value="allmountain">All Mountain</option>
                  <option value="enduro">Enduro</option>
                  <option value="downhill">Downhill</option>
              </select>
          )
      }
      if (productInfo.mainCategory === "components") {
          return (
              <select onChange={ formChangeHandler } name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                  <option value="drivetrain">Drivetrain</option>
                  <option value="suspension">Suspension</option>
                  <option value="brakes">Brakes</option>
                  <option value="tires">Tires</option>
                  <option value="wheels">Wheels</option>
              </select>
          )
      }
      if (productInfo.mainCategory === "accessories") {
          return (
              <select onChange={ formChangeHandler } name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                  <option value="bags">Bags</option>
                  <option value="tools">Tools</option>
                  <option value="hydration">Hydration</option>
              </select>
          )
      }
  }

export default SubCategoryFilter
