import AppLayout from '@/components/layouts/appLayout'
import BirthdayMateAccord from '@/components/molecules/BirthdayMateAccord'
import BirthdayEventChip from '@/components/organisms/BirthdayEventChip'
import TimeComp from '@/components/organisms/TimeComp'
import { fetchBirthdays } from '@/services/authService'
import React, { useEffect, useState } from 'react'

function BirthdayEvent() {

  const [list, setList] = useState([])
  const [eventData, setEventData] = useState({})

  const fetchBirthdayList = async () => {
    const { data, status } = await fetchBirthdays()
    const newArr = status && Object.entries(data?.data?.birthdays)
    setEventData(data?.data)
    setList(newArr)
  }

  useEffect(() => {
    fetchBirthdayList()
  }, [])


  return (
    <AppLayout active="birthday_event" title="All User Birthday Event">
      <div className="p-3">
        <TimeComp title="Let’s celebrate the moments that matter most." />
      </div>
      <div className="p-3 space-y-4">
        {
          eventData?.events > 0 && (<div className="p-3 border space-y-5 bg-gray-50/40 border-gray-50 rounded-xl">
            <div className="font-bold text-sm">Birthday Events</div>

            <div className="grid  sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {
                data?.data?.events?.map((e, i) => <BirthdayEventChip key={i} />)
              }
            </div>

          </div>
          )
        }
        {
          list.map((e) => <BirthdayMateAccord sideText={<div className='font-bold'>Birthdays</div>} data={e} key={e} />)
        }
      </div>
    </AppLayout>
  )
}

export default BirthdayEvent
