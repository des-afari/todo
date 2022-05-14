import React from 'react'
import Header from '../../components/header/Header'
import './dashboard.css'
import { ReactComponent as CheckBox } from '../../assets/svg/checkbox.svg'

const Dashboard = () => {
  return (
    <>
        <Header />
        <div className='dashboard'>
            <div className='dashboard__one'>
                <form className='dashboard__one__top'>
                    <div>
                        <small>ADD A TASK</small>
                        <input type='text' />
                        <button>
                            <small>SUBMIT</small>
                        </button>
                    </div>
                </form>
                <div className='dashboard__one__bottom'></div>
            </div>
            <ul className='dashboard__two'>
                <li className='task__item'>
                    <span>
                        <CheckBox />
                    </span>
                    <span>
                        <h3>Go to School</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur nisi numquam ad iure voluptas voluptate facilis aspernatur quo cupiditate, in reprehenderit alias ducimus odit magni? Ipsa quam rerum sint!</p>
                    </span>
                </li>
                <li className='task__item'>
                    <span>
                        <CheckBox />
                    </span>
                    <span>
                        <h3>Go to school</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur nisi numquam ad iure voluptas voluptate facilis aspernatur quo cupiditate, in reprehenderit alias ducimus odit magni? Ipsa quam rerum sint!</p>
                    </span>
                </li>
            </ul>
            <div className='dashboard__three'></div>
        </div>
    </>
  )
}

export default Dashboard