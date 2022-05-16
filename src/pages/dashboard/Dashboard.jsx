import React from 'react'
import Header from '../../components/header/Header'
import './dashboard.css'
import { ReactComponent as CheckBox } from '../../assets/svg/checkbox.svg'
import { ReactComponent as Left } from '../../assets/svg/left.svg'
import { ReactComponent as Right } from '../../assets/svg/right.svg'

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
                        <h3>Go to School</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur nisi numquam ad iure voluptas voluptate facilis aspernatur quo cupiditate, in reprehenderit alias ducimus odit magni? Ipsa quam rerum sint!</p>
                    </span>
                </li>
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
                        <h3>Go to School</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur nisi numquam ad iure voluptas voluptate facilis aspernatur quo cupiditate, in reprehenderit alias ducimus odit magni? Ipsa quam rerum sint!</p>
                    </span>
                </li>
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
                        <h3>Go to School</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur nisi numquam ad iure voluptas voluptate facilis aspernatur quo cupiditate, in reprehenderit alias ducimus odit magni? Ipsa quam rerum sint!</p>
                    </span>
                </li>
                <li className='task__item'>
                    <span>
                        <CheckBox />
                    </span>
                    <span>
                        <h3>Go to Church</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur nisi numquam ad iure voluptas voluptate facilis aspernatur quo cupiditate, in reprehenderit alias ducimus odit magni? Ipsa quam rerum sint!</p>
                    </span>
                </li>
            </ul>
            <ul className='dashboard__three'>
                <div className='choose__month'>
                    <span>
                        <Left />
                    </span>
                    <span>
                        <h3>September</h3>
                    </span>
                    <span>
                        <Right />
                    </span>
                </div>
                <ul className='choose__date'>
                    <li className='date__item'>
                        <span>
                            <h1>31</h1>
                        </span>
                        <span>
                            <p>Monday</p>
                        </span>
                    </li>
                    <li className='date__item'>
                        <span>
                            <h1>31</h1>
                        </span>
                        <span>
                            <p>Monday</p>
                        </span>
                    </li>
                    <li className='date__item'>
                        <span>
                            <h1>31</h1>
                        </span>
                        <span>
                            <p>Monday</p>
                        </span>
                    </li>
                    <li className='date__item'>
                        <span>
                            <h1>31</h1>
                        </span>
                        <span>
                            <p>Monday</p>
                        </span>
                    </li>
                    <li className='date__item'>
                        <span>
                            <h1>31</h1>
                        </span>
                        <span>
                            <p>Monday</p>
                        </span>
                    </li>
                </ul>
            </ul>
        </div>
    </>
  )
}

export default Dashboard