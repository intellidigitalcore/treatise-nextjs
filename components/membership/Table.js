import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Table() {
    const [memberTableData, setMemberTableData] = useState([]);

    useEffect(()=>{
        axios.get('../data/membership/memberShipTable.json').then((response) =>{
            setMemberTableData(response.data)
        })
    },[])
  return (
    <div>
        <table className="table-auto w-full">
            <thead>
            <tr>

                <th className=""></th>

                <th className="text-left p-6">
                    <h4 className="text-text text-base sm:text-xl leading-[150%]">Free</h4>
                    <p className="text-text-60 text-sm sm:text-base leading-[24px] mt-1 whitespace-nowrap">free forver</p>
                
                    <p className="text-[48px] text-bold text-text mt-2 sm:mt-5 md:mt-12">$0</p>
                    <div className="flex justify-center mt-1">
                        <Link href='/subscribemember'><button className="text-sm text-primary px-10 py-2 border border-primary rounded-[10px] whitespace-nowrap">Start Now</button></Link>
                    </div>
                </th>

                <th className="text-left p-6">
                    <h4 className="text-text text-base sm:text-xl leading-[150%]">Basic</h4>
                    <p className="text-text-60 text-base leading-[24px] mt-1 whitespace-nowrap">Student’s Favoutite</p>
                
                    <p className="text-[48px] text-bold text-text mt-2 m:mt-5 md:mt-12">$49</p>
                    <div className="flex justify-center mt-1">
                        <Link href='/subscribemember'><button className="text-sm text-primary px-10 py-2 border border-primary rounded-[10px] whitespace-nowrap">Start Now</button></Link>
                    </div>
                </th>

                <th className="text-left p-6">
                    <h4 className="text-text text-base sm:text-xl leading-[150%]">Starter</h4>
                    <p className="text-text-60 text-base leading-[24px] mt-1 whitespace-nowrap">User Friendly</p>
                
                    <p className="text-[48px] text-bold text-text mt-2 m:mt-5 md:mt-12">$99</p>
                    <div className="flex justify-center mt-1">
                        <Link href='/subscribemember'><button className="text-sm text-primary px-10 py-2 border border-primary rounded-[10px] whitespace-nowrap">Start Now</button></Link>
                    </div>
                </th>

                <th className="text-left p-6 bg-[#283683]/10 rounded-t-[10px]">
                    <h4 className="text-text text-base sm:text-xl leading-[150%]">Professional</h4>
                    <p className="text-text-60 text-base leading-[24px] mt-1 whitespace-nowrap">Most Favourite</p>
                
                    <p className="text-[48px] text-bold text-text mt-2 m:mt-5 md:mt-12">$499</p>
                    <div className="flex justify-center mt-1">
                       <Link href='/subscribemember'> <button className="text-sm text-white bg-blue-900 px-10 py-2 border rounded-[10px] whitespace-nowrap">Start Now</button></Link>
                    </div>
                </th>
                
                <th className="text-left p-6">
                    <h4 className="text-text text-base sm:text-xl leading-[150%]">Advance</h4>
                    <p className="text-text-60 text-base leading-[24px] mt-1 whitespace-nowrap">For all rounder</p>
                
                    <p className="text-[48px] text-bold text-text mt-2 m:mt-5 md:mt-12">$999</p>
                    <div className="flex justify-center mt-1">
                    <Link href='/subscribemember'><button className="text-sm text-primary px-10 py-2 border border-primary rounded-[10px] whitespace-nowrap">Start Now</button></Link>
                    </div>
                </th>
            </tr>
            </thead>

            <tbody>
            {
            memberTableData.map((data,i) => 
                <tr key={i} className="border-t border-text-10">
                <td className="td-sytle">{data.name}</td>
                <td>
                    <div className="flex justify-center">
                    {
                        data.free === 'no' ? 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.22951 4.89707C2.92341 5.20205 2.92341 5.70214 3.22951 6.00712L12.4609 15.2407C13.1788 15.9789 12.4609 15.2407 12.9999 15.7999L14.665 17.4661C14.9689 17.771 15.469 17.771 15.7751 17.4661L17.4651 15.8002C17.769 15.4953 17.769 14.9985 17.4651 14.6902L6.00576 3.23199C5.69966 2.92252 5.19845 2.92252 4.89123 3.23199L3.22951 4.89707Z" fill="#B40000"/>
                            <path d="M5.16806 17.4988C5.47305 17.8049 5.97314 17.8049 6.27812 17.4988L15.5117 8.26739C16.2499 7.54944 15.5117 8.26739 16.0709 7.72834L17.7371 6.06326C18.042 5.7594 18.042 5.25932 17.7371 4.95321L16.0712 3.26318C15.7663 2.95932 15.2695 2.95932 14.9612 3.26318L3.50298 14.7225C3.19351 15.0286 3.19351 15.5298 3.50298 15.837L5.16806 17.4988Z" fill="#B40000"/>
                        </svg>   
                        :
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1028 0.882655C17.7978 0.57655 17.2978 0.57655 16.9928 0.882655L7.75915 10.114L3.00387 5.32623C2.69888 5.019 2.20216 5.019 1.89494 5.32623L0.228738 6.99131C-0.076246 7.29517 -0.076246 7.79525 0.228738 8.10136L7.19964 15.1182C7.50463 15.4221 8.00135 15.4221 8.30969 15.1182L19.7679 3.65891C20.0774 3.3528 20.0774 2.8516 19.7679 2.54437L18.1028 0.882655Z" fill="#066C54"/>
                        </svg>      
                    }    
                    </div>
                </td>
                <td>
                    <div className="flex justify-center">
                    {
                        data.basic === 'no' ? 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.22951 4.89707C2.92341 5.20205 2.92341 5.70214 3.22951 6.00712L12.4609 15.2407C13.1788 15.9789 12.4609 15.2407 12.9999 15.7999L14.665 17.4661C14.9689 17.771 15.469 17.771 15.7751 17.4661L17.4651 15.8002C17.769 15.4953 17.769 14.9985 17.4651 14.6902L6.00576 3.23199C5.69966 2.92252 5.19845 2.92252 4.89123 3.23199L3.22951 4.89707Z" fill="#B40000"/>
                            <path d="M5.16806 17.4988C5.47305 17.8049 5.97314 17.8049 6.27812 17.4988L15.5117 8.26739C16.2499 7.54944 15.5117 8.26739 16.0709 7.72834L17.7371 6.06326C18.042 5.7594 18.042 5.25932 17.7371 4.95321L16.0712 3.26318C15.7663 2.95932 15.2695 2.95932 14.9612 3.26318L3.50298 14.7225C3.19351 15.0286 3.19351 15.5298 3.50298 15.837L5.16806 17.4988Z" fill="#B40000"/>
                        </svg>   
                        :
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1028 0.882655C17.7978 0.57655 17.2978 0.57655 16.9928 0.882655L7.75915 10.114L3.00387 5.32623C2.69888 5.019 2.20216 5.019 1.89494 5.32623L0.228738 6.99131C-0.076246 7.29517 -0.076246 7.79525 0.228738 8.10136L7.19964 15.1182C7.50463 15.4221 8.00135 15.4221 8.30969 15.1182L19.7679 3.65891C20.0774 3.3528 20.0774 2.8516 19.7679 2.54437L18.1028 0.882655Z" fill="#066C54"/>
                    </svg>     
                    }     
                    </div>
                </td>
                <td className=''>
                    <div className="flex justify-center">
                    { 
                        data.starter === 'no' ? 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.22951 4.89707C2.92341 5.20205 2.92341 5.70214 3.22951 6.00712L12.4609 15.2407C13.1788 15.9789 12.4609 15.2407 12.9999 15.7999L14.665 17.4661C14.9689 17.771 15.469 17.771 15.7751 17.4661L17.4651 15.8002C17.769 15.4953 17.769 14.9985 17.4651 14.6902L6.00576 3.23199C5.69966 2.92252 5.19845 2.92252 4.89123 3.23199L3.22951 4.89707Z" fill="#B40000"/>
                            <path d="M5.16806 17.4988C5.47305 17.8049 5.97314 17.8049 6.27812 17.4988L15.5117 8.26739C16.2499 7.54944 15.5117 8.26739 16.0709 7.72834L17.7371 6.06326C18.042 5.7594 18.042 5.25932 17.7371 4.95321L16.0712 3.26318C15.7663 2.95932 15.2695 2.95932 14.9612 3.26318L3.50298 14.7225C3.19351 15.0286 3.19351 15.5298 3.50298 15.837L5.16806 17.4988Z" fill="#B40000"/>
                        </svg>   
                        :
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1028 0.882655C17.7978 0.57655 17.2978 0.57655 16.9928 0.882655L7.75915 10.114L3.00387 5.32623C2.69888 5.019 2.20216 5.019 1.89494 5.32623L0.228738 6.99131C-0.076246 7.29517 -0.076246 7.79525 0.228738 8.10136L7.19964 15.1182C7.50463 15.4221 8.00135 15.4221 8.30969 15.1182L19.7679 3.65891C20.0774 3.3528 20.0774 2.8516 19.7679 2.54437L18.1028 0.882655Z" fill="#066C54"/>
                        </svg>    
                    }     
                    </div>
                </td>
                <td className='bg-[#283683]/10'>
                    <div className="flex justify-center">
                    {
                        data.professional === 'no' ? 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.22951 4.89707C2.92341 5.20205 2.92341 5.70214 3.22951 6.00712L12.4609 15.2407C13.1788 15.9789 12.4609 15.2407 12.9999 15.7999L14.665 17.4661C14.9689 17.771 15.469 17.771 15.7751 17.4661L17.4651 15.8002C17.769 15.4953 17.769 14.9985 17.4651 14.6902L6.00576 3.23199C5.69966 2.92252 5.19845 2.92252 4.89123 3.23199L3.22951 4.89707Z" fill="#B40000"/>
                            <path d="M5.16806 17.4988C5.47305 17.8049 5.97314 17.8049 6.27812 17.4988L15.5117 8.26739C16.2499 7.54944 15.5117 8.26739 16.0709 7.72834L17.7371 6.06326C18.042 5.7594 18.042 5.25932 17.7371 4.95321L16.0712 3.26318C15.7663 2.95932 15.2695 2.95932 14.9612 3.26318L3.50298 14.7225C3.19351 15.0286 3.19351 15.5298 3.50298 15.837L5.16806 17.4988Z" fill="#B40000"/>
                        </svg>   
                        :
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1028 0.882655C17.7978 0.57655 17.2978 0.57655 16.9928 0.882655L7.75915 10.114L3.00387 5.32623C2.69888 5.019 2.20216 5.019 1.89494 5.32623L0.228738 6.99131C-0.076246 7.29517 -0.076246 7.79525 0.228738 8.10136L7.19964 15.1182C7.50463 15.4221 8.00135 15.4221 8.30969 15.1182L19.7679 3.65891C20.0774 3.3528 20.0774 2.8516 19.7679 2.54437L18.1028 0.882655Z" fill="#066C54"/>
                        </svg>     
                    }     
                    </div>
                </td>
                <td>
                <div className="flex justify-center">
                    {
                        data.advance === 'no' ? 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.22951 4.89707C2.92341 5.20205 2.92341 5.70214 3.22951 6.00712L12.4609 15.2407C13.1788 15.9789 12.4609 15.2407 12.9999 15.7999L14.665 17.4661C14.9689 17.771 15.469 17.771 15.7751 17.4661L17.4651 15.8002C17.769 15.4953 17.769 14.9985 17.4651 14.6902L6.00576 3.23199C5.69966 2.92252 5.19845 2.92252 4.89123 3.23199L3.22951 4.89707Z" fill="#B40000"/>
                            <path d="M5.16806 17.4988C5.47305 17.8049 5.97314 17.8049 6.27812 17.4988L15.5117 8.26739C16.2499 7.54944 15.5117 8.26739 16.0709 7.72834L17.7371 6.06326C18.042 5.7594 18.042 5.25932 17.7371 4.95321L16.0712 3.26318C15.7663 2.95932 15.2695 2.95932 14.9612 3.26318L3.50298 14.7225C3.19351 15.0286 3.19351 15.5298 3.50298 15.837L5.16806 17.4988Z" fill="#B40000"/>
                        </svg>   
                        :
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1028 0.882655C17.7978 0.57655 17.2978 0.57655 16.9928 0.882655L7.75915 10.114L3.00387 5.32623C2.69888 5.019 2.20216 5.019 1.89494 5.32623L0.228738 6.99131C-0.076246 7.29517 -0.076246 7.79525 0.228738 8.10136L7.19964 15.1182C7.50463 15.4221 8.00135 15.4221 8.30969 15.1182L19.7679 3.65891C20.0774 3.3528 20.0774 2.8516 19.7679 2.54437L18.1028 0.882655Z" fill="#066C54"/>
                        </svg>     
                    }     
                    </div>
                </td>
                </tr>  
            )
            }
            </tbody>
        </table>
    </div>
  )
}

export default Table