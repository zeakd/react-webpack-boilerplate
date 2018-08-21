import React from 'react'
import css from './Hello.css'
import icon from './icon.png'

export default function Hello () {
  return (
    <h1 className={css.tomato}>
      Hello!!
      <img src={icon} />
    </h1>
  );
}