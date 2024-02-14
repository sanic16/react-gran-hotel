import classes from './CommonHeader.module.css'


const CommonHeader = (
    {
        heading
    }:{
        heading: string
    }
) => {
  return (
    <div className={classes['common-header']}>
            <h1 className={classes['common-heading']}>
                { heading }
            </h1>
            <div className={classes.underline}>
                <div className={classes['small-underline']}></div>
                <div className={classes['big-underline']}></div>
            </div>
    </div>
  )
}

export default CommonHeader