import React, { useState } from 'react'
import '../expenseCard/expenseCard.css'
import { Avatar } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'

export default function ExpenseCard({user,handleSelectedUser}) {
    const [hovered,setHovered] = useState(false)


    const selectedUser = () => {
        handleSelectedUser(user)
    }

    return (
    <div className='expenseCardContainer' onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onClick={selectedUser}>
        <div className="expenseCardUserInfo">
            {user?.uploadImage ? <img src={user.uploadImage} className='expenseCardUserLogo' alt="" />:<Avatar className="expenseCardUserLogo"/>}
            <div className="expenseCardUserDetails">
                {user?.groupName}
                <div className="expenseCardExpenditure">
                <span className='expenseCardExpenditurespent'> paid by : {user?.owner}</span>
                    <span className='expenseCardExpenditurespent red'> spent : {user?.paid} rs</span>
                    <span className='expenseCardExpenditurereceived green'>received : {user?.ownerReceived} rs</span>
                </div>
            </div>
        </div>
        {hovered && <div className="expenseCardButtons">
            <button className="expenseCardButton"><Edit/></button>
            <button className="expenseCardButton"><Delete/></button>
        </div>}
    </div>
  )
}
