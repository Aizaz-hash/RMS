import React from 'react'
import Card from './Card';

import classes from './PageFooter.module.css'

function PageFooter() {
  return (
    <Card className={classes.footer} ><h3>Developed by Aizaz Zaheen</h3></Card>
  )
}

export default PageFooter;