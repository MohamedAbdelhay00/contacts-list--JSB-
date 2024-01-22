import './User.css'
import Img from '../Ellipse 1.png'

const User = (props) => {

    let userImg;

    let userNo = '01010101010';

    if(props.picture === ''){
        userImg = Img
    } else {
        userImg = props.picture
    }

    return(
        <div>
            <div className="row g-1 user d-flex flex- justify-content-center align-items-center">
                <div className="col-md-2 col-sm-12 userImg d-flex justify-content-center px-3">
                    <img className=' border-0 ' src={userImg} alt='userImg'/>
                </div>
                <div className='col-md-7 col-sm-12 userInfo d-flex flex-column p-4 text-light'>
                    <h6 className=''>{props.firstName + " " + props.lastName}</h6>
                    <p className=''>{userNo}</p>
                </div>
                <div className='col-md-3 col-sm-12 opIocons d-flex justify-content-end'>
                    <button className='btn-1 border-0 mx-4 py-2 px-3 rounded'><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn-2 border-0 mx-4 py-2 px-3 rounded'><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            {/* <div className="d-flex justify-content-center">
                <hr class="hr-line border border-light border-2 opacity-75 " />
              </div> */}
        </div>
    )
}

export default User;