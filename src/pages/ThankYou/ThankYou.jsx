import { Link } from "react-router-dom"

const ThankYou = () => {
  return (
    <div className='thankyou__wrapp text-center py-4'>
      <h1 className='level-2 text-primary'>Thank You</h1>
      <p className="para">Your Purchase was successful!</p>
      <Link className='primary-btn mt-3' to="/" style={{display : 'inline-block'}}>Back to Home</Link>
    </div>
  )
}

export default ThankYou