import React from 'react'
import "../expenditureInfo/expenditure.css"
import { Avatar } from '@mui/material'

export default function ExpenditureInfo({individualRecord}) {
  return (
    <div className="expenseGroupExpenditureSummaryUser">
        <div className="expenseGroupExpenditureSummaryUserDetails">
            {individualRecord?.profilePicture ? <img className='expenseGroupExpenditureSummaryUserDetailsLogo' src={individualRecord.profilePicture} alt="" /> :<Avatar/>}
            {individualRecord?.username}
        </div>
        <div className="expenseGroupExpenditureSummaryUserExpense">
            {individualRecord?.spent} rs
        </div>
    </div>
  )
}
