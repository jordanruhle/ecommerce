import React from 'react'
import PropTypes from 'prop-types'

const RedButton = props => {
    const buttonText = props.buttonText

  return (
    <button className='bg-red-600 hover:bg-slate-500 text-white uppercase text-lg font-semibold py-2 px-4 my-4 border w-full'>{buttonText}</button>
  )
}

RedButton.propTypes = {}

export default RedButton