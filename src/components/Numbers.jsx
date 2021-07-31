import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = (onClickNumber) => {
  return numbers.map(number => (
    <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
  ));
}


const Numbers = ({ handlerButton }) => (
  <section className="numbers">
    {
      renderButtons(handlerButton)
    }
  </section>
)

Numbers.propTypes = {
  handlerButton: PropTypes.func.isRequired,
}

export default Numbers;
