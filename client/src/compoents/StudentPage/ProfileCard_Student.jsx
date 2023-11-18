import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Link from 'antd/es/typography/Link'
import Male from '../../assets/profile/man.png'
import Female from '../../assets/profile/woman.png'


export default function ProfileCard_Student() {
    const [data,setdata] = useState([])
    const {id} = useParams()

    useEffect(() => {
    fetchapi(id)
  }, [])

    const fetchapi = async (id) => {
        await fetch(`http://localhost:4000/get/data/${id}`)
        .then(a => a.json())
        .then(data=>
            setdata(data))
      }
    

  return (
    <div className="p-16">
        <Link to='/showdata/students'>
        Back
        </Link>
                <div className="p-8 bg-white shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                        <p className={`${data.arrear == 'All Clear' ?
                             'bg-green-100 rounded-sm inline-block px-2 py-1 border-green-300  text-green-800'
                             :'bg-red-100 rounded-sm inline-block px-2 py-1 border-red-300  text-red-800'}
                             font-bold text-gray-700 text-xl`}>{data.arrear}</p>
                            <p className="text-gray-400">Arrear</p>
                        </div>
                        <div>
                            <p className={`font-bold text-gray-700 text-xl ${data.tutionfees == 'paid'
                             ? 'bg-green-100 rounded-sm inline-block px-2 py-1 border-green-300  text-green-800 ' : '' 
                             || data.tutionfees == 'unpaid'
                             ? 'bg-red-100 rounded-sm inline-block px-2 py-1 border-red-300  text-red-800 ' : '' 
                             || data.tutionfees == 'pending'
                             ? 'bg-yellow-100 rounded-sm inline-block px-2 py-1 border-yellow-300  text-yellow-800 ' : ''
                            } 
                             `}>
                                
                                {data.tutionfees}</p>
                            <p className="text-gray-400">Tuition Fees</p>
                        </div>
                        <div>
                            <p className={`font-bold text-gray-700 text-xl ${data.examfees == 'paid'
                             ? 'bg-green-100 rounded-sm inline-block px-2 py-1 border-green-300  text-green-800 ' : '' 
                             || data.examfees == 'unpaid'
                             ? 'bg-red-100 rounded-sm inline-block px-2 py-1 border-red-300  text-red-800 ' : '' 
                             || data.examfees == 'pending'
                             ? 'bg-yellow-100 rounded-sm inline-block px-2 py-1 border-yellow-300  text-yellow-800 ' : ''
                            } 
                             
                             `}>{data.examfees}<span></span></p>
                            <p className="text-gray-400">Exam Fee</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            {data.gender == 'Male' ? 
                            <img src={Male} viewBox="0 0 20 20" fill="currentColor"/> :
                            <img src={Female} viewBox="0 0 20 20" fill="currentColor"/> 
                            }
                        </div>

                    </div>
                    <div className="space-x-8 flex justify-between items-center mt-32 md:mt-0 md:justify-center">
                        <div>
                            <p className="font-bold text-gray-700 text-xl">{data.regno}</p>
                            <p className="text-gray-400">Reg.No</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">{data.gender}</p>
                            <p className="text-gray-400">Gender</p>
                        </div>
                    </div>
                </div>
                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">{data.name},
                        <span className="font-light text-gray-500">{data.department}</span>
                        <span className='text-xs font-thin'>,{data.batch}</span>
                    </h1>
                    <p className="font-light text-gray-600 mt-3">{data.location}</p>
                    <p className="mt-8 text-gray-500">D.O.B: {data.dob}</p>
                    <p className="mt-8 text-gray-500">Email: {data.email}</p>
                    <p className="mt-2 text-gray-500">University of Computer Science</p>
                </div>
                <div className="mt-12 flex flex-col justify-center">
                    This Profile Created: {data.createdAt} <br/>
                        Updated: {data.updatedAt == '' ? "There is wasn't updated" : data.updatedAt}
                    <button className="text-indigo-500 py-2 px-4  font-medium mt-4">  Show more</button>
                </div>
            </div>
        
        </div>
  )
}
