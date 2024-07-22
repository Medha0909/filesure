import React from 'react'
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";


function Faq() {
  return (
    <div className='f1'>
    <div className='f2'>
      <span className='s1'>FAQ</span>
      </div>  
      <div className="f3">
      <div className="f4">
      <div className="f5">
      <span className='t1'>What is the cost of a mobile application?</span>
      <button className='f6 text-myColors'>
      <GoPlus className="pq" size={34}/>
              </button>
      </div>
      <div className="f5a">
      <span className='t1'>Do you provide a guarantee for the mobile application?</span>
      <button className='f6 text-myColors'>
      <GoPlus className="pq" size={34}/>
              </button>
      </div>
</div>
      
<div className="f4a">
      <div className="f5a1">
      <span className='t1'>How long will development take?</span>
      <div className="t2a">
      <div className='t2'>Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.</div>
      <div className='t2'>
Average development time from start to finished application:
Medium projects up to 3 months.
Large projects about 4-6 months.
To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.</div>
</div>
<button className='f6 text-myColorssss'>
      <RxCross2 className="pq" size={30}/>
              </button>
      </div>
      <div className="f5aaa">
      <span className='t1'>I will not tell my idea, do you guarantee confidentiality?</span>
      <button className='f6 text-myColors'>
      <GoPlus className="pq" size={34}/>
              </button>
      </div>


      
      </div>



      </div>
    </div>
  )
}

export default Faq;
