import { Link } from "react-router-dom"

function NotFound() {
    return (
    <div className="row d-flex mt-5 vh-100">
      <div className="w-auto g-5">
        <h2><span>Oops...</span> that page doesn't exist !</h2>
        <p className='h5 my-5'>Sorry, the page you were looking for could not be found.</p>
        <p>You can return to <Link to={'/home'}>Home</Link></p>
      </div>
    </div>
    )
}
    
export default NotFound
