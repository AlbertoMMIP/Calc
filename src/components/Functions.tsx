import React, { FC } from 'react'
import Button, { ButtonClickHandler } from './Button'

type Props = {
  onClickClear: ButtonClickHandler,
  onClickDelete: ButtonClickHandler
}

const Functions: FC<Props> = ({ onClickClear, onClickDelete }) => (
  <section className="functions">
    <Button type={"button-long-text"} text="clear" clickHandler={onClickClear} />
    <Button text="<=" clickHandler={onClickDelete}/>
  </section>
)

export default Functions;
