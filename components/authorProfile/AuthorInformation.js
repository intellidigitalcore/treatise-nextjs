import React, { useEffect } from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import { TagsInput } from "react-tag-input-component";

function AuthorInformation() {
    const [displayInfo, SetDisplayInfo] = useState('info');
    const [isDisabled, setIsDisabled] = useState(false)
    const [selected, setSelected] = useState(["career"]);

    const [inputList, setInputList] = useState([
        {
          input: "",
          input_rank: null
        }
    ])

    useEffect(() => {
      if (inputList.length > 0) {
        inputList[inputList.length - 1].input === ""
          ? setIsDisabled(true)
          : setIsDisabled(false)
      }
    },[inputList])

    const handleListAdd = (event) => {
        event.preventDefault(); 
        setInputList([
          ...inputList,
          {
            input: "",
            input_rank: null
          }
        ])
    }

    const handleRemoveItem = (index) => {
        const newList = [...inputList]
        newList.splice(index, 1)
        setInputList(newList)
    }

    const handleInputChange = (event, index) => {
    const { value } = event.target
    const newInputList = [...inputList]
    newInputList[index].input = value
    newInputList[index].input_rank = index + 1
    setInputList(newInputList)
    }

    const handleEdit = (e) =>{
        SetDisplayInfo(e)
    }
  return (
    <div id="profile" className="mx-4 md:mx-[15%]">

        <div className="px-2 sm:px-4 py-4 person-details rounded-[6px] w-full relative">

            {/* <!-- profile info showing  --> */}
            {
                (displayInfo === "info") &&
                <motion.div id="profile-info"
                initial = {{opacity: 0, translateX: 0, translateY: -50}}
                animate = {{opacity: 1, translateX: 0, translateY:0}}
                transition = {{duration: 0.4, delay : 0.2}}
                >
                    <div className="">
                        <div className="flex flex-col sm:flex-row justify-between py-2">
                            <h2 className="text-sm sm:text-lg font-normal text-primary text-center sm:text-lfet">All personal information</h2>
                            <button onClick={()=>handleEdit("editInfo")} id="edit-profile-btn" className="flex items-center gap-x-[10px] px-6 justify-center sm:justify-end py-[6px] mt-2 sm:mt-0">
                                <span>
                                    <svg className="w-4 sm:w-6 h-4 sm:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.00001 20.2499H4.5C4.30109 20.2499 4.11033 20.1709 3.96967 20.0302C3.82902 19.8896 3.75 19.6988 3.75 19.4999V15.3093C3.74966 15.2119 3.76853 15.1154 3.80553 15.0253C3.84253 14.9352 3.89694 14.8533 3.96563 14.7843L15.2156 3.53429C15.2854 3.46343 15.3686 3.40715 15.4603 3.36874C15.5521 3.33033 15.6505 3.31055 15.75 3.31055C15.8495 3.31055 15.9479 3.33033 16.0397 3.36874C16.1314 3.40715 16.2146 3.46343 16.2844 3.53429L20.4656 7.71554C20.5365 7.78533 20.5928 7.86851 20.6312 7.96025C20.6696 8.052 20.6894 8.15046 20.6894 8.24992C20.6894 8.34938 20.6696 8.44784 20.6312 8.53958C20.5928 8.63132 20.5365 8.71451 20.4656 8.78429L9.00001 20.2499Z" stroke="#283683" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20.25 20.25H9" stroke="#283683" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12.75 6L18 11.25" stroke="#283683" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                <span className="text-primary font-bold text-sm">Edit</span>
                            </button>
                        </div>

                        <p className="text-xs font-normal text-text/40 mt-10">About me</p>

                        <p className="py-6 text-xs sm:text-sm text-text border-b border-text/5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        {/* <!-- person info  --> */}
                        <div className="py-6 flex flex-col gap-y-0 sm:gap-y-4 border-b border-text/5">
                            <div className="pt-2 sm:pt-4 pb-2 sm:pb-4 flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#060B25" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="#060B25" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="text-sm text-text">5539 W State St, Milwaukee, West Virginia</p>
                                        <p className="text-xs text-text/40">Location</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                            <path d="M9.50391 11.9068C10.2757 13.5006 11.5644 14.786 13.1602 15.5537C13.2779 15.6094 13.4081 15.6336 13.5379 15.6237C13.6678 15.6138 13.7928 15.5703 13.9008 15.4974L16.2445 13.9318C16.3481 13.8616 16.4677 13.8187 16.5923 13.8073C16.7169 13.7958 16.8424 13.8161 16.957 13.8662L21.3445 15.7506C21.4945 15.813 21.6198 15.923 21.7011 16.0636C21.7824 16.2042 21.8152 16.3676 21.7945 16.5287C21.6555 17.6141 21.1257 18.6116 20.3043 19.3346C19.483 20.0576 18.4263 20.4566 17.332 20.4568C13.9505 20.4568 10.7075 19.1135 8.31642 16.7224C5.92533 14.3313 4.58203 11.0883 4.58203 7.70682C4.58228 6.61257 4.98123 5.55589 5.70424 4.73453C6.42725 3.91316 7.42478 3.38338 8.51016 3.24432C8.67125 3.22362 8.83469 3.25646 8.97529 3.33777C9.11589 3.41909 9.22587 3.54437 9.28828 3.69432L11.1727 8.09119C11.2217 8.20402 11.2422 8.32717 11.2323 8.44978C11.2225 8.5724 11.1827 8.69072 11.1164 8.79432L9.55078 11.1756C9.48108 11.2833 9.44017 11.4071 9.43196 11.5351C9.42376 11.6631 9.44853 11.7911 9.50391 11.9068V11.9068Z" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            </svg>
                                            
                                    </div>
                                    <div className="">
                                        <p className="text-sm text-text">+911-0966-58389</p>
                                        <p className="text-xs text-text/40">Phone Number</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2 sm:pt-4 pb-2 sm:pb-4 flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#060B25" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="#060B25" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="text-sm text-text">chrisH@gmail.com</p>
                                        <p className="text-xs text-text/40">Email Address</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                            <path d="M12.6797 8.64453V6.39453" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12.6797 6.39453C17.0109 4.89453 12.6797 1.14453 12.6797 1.14453C12.6797 1.14453 8.17969 4.89453 12.6797 6.39453Z" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15.8672 12.207C15.8672 13.0524 15.5314 13.8632 14.9336 14.4609C14.3358 15.0587 13.5251 15.3945 12.6797 15.3945C11.8343 15.3945 11.0236 15.0587 10.4258 14.4609C9.82801 13.8632 9.49219 13.0524 9.49219 12.207" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.49221 12.2071C9.49238 13.0412 9.16558 13.8421 8.58193 14.4381C7.99828 15.034 7.20428 15.3774 6.37033 15.3946C4.57971 15.4321 3.11721 13.9321 3.11721 12.1414V10.8946C3.11597 10.5987 3.17332 10.3056 3.28595 10.032C3.39859 9.75851 3.56427 9.50997 3.77345 9.3008C3.98263 9.09162 4.23116 8.92593 4.5047 8.8133C4.77825 8.70066 5.07139 8.64331 5.36721 8.64455H19.9922C20.288 8.64331 20.5812 8.70066 20.8547 8.8133C21.1283 8.92593 21.3768 9.09162 21.586 9.3008C21.7951 9.50997 21.9608 9.75851 22.0735 10.032C22.1861 10.3056 22.2434 10.5987 22.2422 10.8946V12.1414C22.2422 13.9321 20.7797 15.4321 18.9891 15.3946C18.1551 15.3774 17.3611 15.034 16.7775 14.4381C16.1938 13.8421 15.867 13.0412 15.8672 12.2071" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.9297 14.7656V19.8937C20.9297 20.0927 20.8507 20.2834 20.71 20.4241C20.5694 20.5647 20.3786 20.6437 20.1797 20.6437H5.17969C4.98078 20.6437 4.79001 20.5647 4.64936 20.4241C4.50871 20.2834 4.42969 20.0927 4.42969 19.8937V14.7656" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                        </svg>  
                                    </div>
                                    <div className="">
                                        <p className="text-sm text-text">12 july , 1978</p>
                                        <p className="text-xs text-text/40">Date of birth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* <!-- person social media  --> */}
                        <div className="py-6 flex flex-col gap-y-0 sm:gap-y-4 border-b border-text/5">
                            <div className="pt-2 sm:pt-4 pb-2 sm:pb-4 flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M15.8154 4H13.1571C11.5796 4 9.82498 4.66348 9.82498 6.95017C9.83268 7.74693 9.82498 8.51 9.82498 9.36879H8V12.2729H9.88145V20.6332H13.3387V12.2177H15.6206L15.8271 9.36064H13.2791C13.2791 9.36064 13.2848 8.0897 13.2791 7.72061C13.2791 6.81696 14.2194 6.86871 14.276 6.86871C14.7234 6.86871 15.5934 6.87002 15.8167 6.86871V4H15.8154Z" fill="#060B25"/>
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="text-xs sm:text-sm text-text">www.facebook.com/ChrisH/</p>
                                        <p className="text-[10px] sm:text-xs text-text/40">Facebook</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                            <path d="M7.26441 20.0529V9.29124H3.6874V20.0529H7.26479H7.26441ZM5.47666 7.82217C6.72377 7.82217 7.50018 6.99581 7.50018 5.96308C7.47684 4.90682 6.72377 4.10352 5.50037 4.10352C4.27613 4.10352 3.47656 4.90682 3.47656 5.96299C3.47656 6.99571 4.2527 7.82208 5.45322 7.82208H5.47637L5.47666 7.82217ZM9.24434 20.0529H12.8211V14.0438C12.8211 13.7225 12.8444 13.4005 12.9389 13.1711C13.1974 12.5282 13.7859 11.8627 14.7743 11.8627C16.0683 11.8627 16.5862 12.8495 16.5862 14.2963V20.0529H20.1629V13.8825C20.1629 10.5771 18.3984 9.03894 16.0451 9.03894C14.1157 9.03894 13.2683 10.1173 12.7975 10.8518H12.8213V9.29162H9.24452C9.29121 10.3012 9.24424 20.0533 9.24424 20.0533L9.24434 20.0529Z" fill="#060B25"/>
                                            </g>
                                        </svg>
                                            
                                    </div>
                                    <div className="">
                                        <p className="text-xs sm:text-sm text-text">www.linkedin.com/Chris H</p>
                                        <p className="text-[10px] sm:text-xs text-text/40">Linkedin</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2 sm:pt-4 pb-2 sm:pb-4 flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                            <path d="M8.59745 19.4703C15.3142 19.4703 18.9873 13.9037 18.9873 9.07658C18.9873 8.91849 18.9841 8.76113 18.977 8.60441C19.6917 8.08707 20.3085 7.44651 20.7985 6.71278C20.1442 7.00378 19.4401 7.19963 18.7015 7.28794C19.4554 6.83571 20.0342 6.12026 20.3073 5.26745C19.5904 5.69284 18.8062 5.99271 17.9885 6.15415C17.3221 5.44409 16.3734 5 15.323 5C13.3064 5 11.6711 6.63594 11.6711 8.65249C11.6711 8.93919 11.7032 9.21796 11.7658 9.48544C8.73087 9.33267 6.03967 7.87905 4.23859 5.66875C3.9142 6.22623 3.74357 6.85982 3.74414 7.50481C3.74414 8.7722 4.38879 9.89101 5.36915 10.5456C4.78926 10.5279 4.22209 10.3712 3.71534 10.0887C3.7148 10.104 3.7148 10.119 3.7148 10.1353C3.7148 11.9044 4.9735 13.3815 6.64439 13.7162C6.33057 13.8017 6.00675 13.845 5.6815 13.8448C5.44661 13.8448 5.21769 13.8217 4.99521 13.7789C5.4601 15.2304 6.80816 16.2866 8.40644 16.3161C7.1566 17.2961 5.58219 17.8798 3.87104 17.8798C3.57995 17.88 3.2891 17.8631 3 17.8292C4.61612 18.8654 6.5351 19.4701 8.59763 19.4701" fill="#060B25"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="text-xs sm:text-sm text-text">www.twitter.com/ChrisH</p>
                                        <p className="text-[10px] sm:text-xs text-text/40">Twitter</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                            <path d="M6.76875 5C10.5072 5 13.5375 8.05147 13.5375 11.8152C13.5375 15.5791 10.5069 18.6303 6.76875 18.6303C3.03075 18.6303 0 15.5791 0 11.8152C0 8.05156 3.03047 5 6.76875 5ZM17.5781 5.39919C19.4473 5.39919 20.9626 8.2715 20.9626 11.8152C20.9626 15.3582 19.4476 18.2313 17.5785 18.2313C15.7094 18.2313 14.194 15.3582 14.194 11.8152C14.194 8.27244 15.7089 5.39919 17.5781 5.39919ZM22.8097 6.06753C23.4669 6.06753 24 8.64088 24 11.8153C24 14.9888 23.4671 17.5632 22.8097 17.5632C22.1522 17.5632 21.6196 14.9895 21.6196 11.8153C21.6196 8.64106 22.1525 6.06753 22.8097 6.06753Z" fill="#060B25"/>
                                            </g>
                                        </svg>
                                            
                                    </div>
                                    <div className="">
                                        <p className="text-xs sm:text-sm text-text">www.medium.com/ChrisHen</p>
                                        <p className="text-[10px] sm:text-xs text-text/40">Medium</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Profession  --> */}
                        <div className="py-6 flex flex-col gap-y-4 border-b border-text/5">
                            <div className="sm:py-4 flex">
                                <div className="flex items-center gap-x-2 w-full sm:w-1/2">
                                    <div className="w-10 h-10 bg-text/5 flex items-center justify-center">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                            <path d="M20.9297 6.75195H4.42969C4.01547 6.75195 3.67969 7.08774 3.67969 7.50195V19.502C3.67969 19.9162 4.01547 20.252 4.42969 20.252H20.9297C21.3439 20.252 21.6797 19.9162 21.6797 19.502V7.50195C21.6797 7.08774 21.3439 6.75195 20.9297 6.75195Z" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M16.4297 6.75195V5.25195C16.4297 4.85413 16.2717 4.4726 15.9903 4.19129C15.709 3.90999 15.3275 3.75195 14.9297 3.75195H10.4297C10.0319 3.75195 9.65033 3.90999 9.36903 4.19129C9.08772 4.4726 8.92969 4.85413 8.92969 5.25195V6.75195" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M21.6797 11.8418C18.9443 13.4238 15.8396 14.2549 12.6797 14.2512C9.51923 14.2594 6.41332 13.4279 3.67969 11.8418" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.5547 11.252H13.8047" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="text-sm text-text">Blog Writter,XYZ company</p>
                                        <p className="text-xs text-text/40">Current Profession</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- interest-in  --> */}
                        <div className="py-6 sm:py-10 border-b border-text/5">
                            <p className="text-xs text-text/40">Interest In</p>
                            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-4 w-full sm:w-[90%]">
                                <button className="text-xs text-primary px-4 py-2 bg-primary-10 rounded-[100px]">Tag</button>
                            </div>
                        </div>
                    
                        {/* <!-- password  --> */}
                        <div className="pt-5 sm:pt-10 pb-10 border-text/5">
                            <p className="text-xs text-text/40">Security</p>
                            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between">
                                <div className="py-3 flex flex-col sm:flex-row gap-x-20 items-start sm:items-center">
                                    <p className="text-primary text-base">Password</p>
                                    <p className="text-[#393E50] mt-4 sm:mt-0">******************</p>
                                </div>
                                <button onClick={()=>handleEdit("editPassword")} id="edit-password-btn" className="px-5 py-3 bg-text text-white rounded-[6px] text-sm w-fit">Edit Password</button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            }
            

            {/* <!-- profile editing  --> */}
            {
                (displayInfo === "editInfo") && 
                <motion.div id="profile-edit"
                initial = {{opacity: 0, translateX: 0, translateY: -50}}
                animate = {{opacity: 1, translateX: 0, translateY:0}}
                transition = {{duration: 0.4, delay : 0.2}}
                >
                    <div className="flex justify-center">
                        <form className="py-0 sm:py-8 w-full sm:w-[610px] flex flex-col gap-y-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="name">Name</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{first Name last Name}}"/>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="">Username</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{unique name}}"/>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full justify-start">
                                <label className="w-[160px] block text-sm font-bold sm:mt-[11px]" htmlFor="name">About</label>
                                <textarea className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] h-40 text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" name="" id="" cols="30" rows="10" placeholder="{{about bio}}"></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="name">Location</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{address}}"/>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="name">Phone</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{number}}"/>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="name">Email</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{email}}"/>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="name">Date of Birth</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{date}}"/>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start w-full">
                                <label className="w-[160px] block text-sm font-bold sm:mt-[11px]" htmlFor="name">Social Media</label>
                                <div className="flex flex-col gap-y-2 social media">
                                    {inputList.length > 0 ? inputList.map((input, index) => (
                                        <div key={index} className="relative">
                                            <input  onChange={(event) => handleInputChange(event, index)} variant="outlined" className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{url}}"/>
                                            {
                                                inputList.length > 1 ? 
                                                <span className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer' onClick={() => handleRemoveItem(index)}>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.48">
                                                        <path d="M12.5 3.5L3.5 12.5" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M12.5 12.5L3.5 3.5" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </g>
                                                    </svg>
                                                </span> 
                                                :
                                                ''
                                            }
                                        </div>
                                    ))
                                    : <p className='mt-[11px] text-sm'>No item in the list</p>}
                                </div>
                            </div>
                            <div className="flex justify-end sm:my-4 px-10">
                                <button onClick={handleListAdd} disabled={isDisabled} className="flex gap-x-2 items-center">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.8125 9H15.1875" stroke="#283683" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 2.8125V15.1875" stroke="#283683" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="text-sm font-bold text-primary/90">Add social media</span>
                                </button>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full justify-start">
                                <label className="w-[160px] block text-sm font-bold text-text mt-[11px]" htmlFor="name">Current Profession</label>
                                <div className="mt-2 sm:mt-0 flex flex-col gap-y-2 sm:gap-y-6 w-full sm:w-[450px]">
                                    <input className="p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{Position Name}}"/>
                                    <input className="p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{Company Name}}"/>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full justify-start items-start">
                                <label className="w-[160px] block text-sm font-bold text-text mt-[11px]" htmlFor="name">Interested In</label>
                                <div>
                                    {/* <input className="border-none bg-transparent outline-none text-sm font-bold placeholder:text-primary-80 rounded-[4px] w-full mr-2 " type="text" name="" id="tag-input1" placeholder="{{url}}"/> */}
                                    <TagsInput className="border-none bg-transparent outline-none text-sm font-bold placeholder:text-primary-80 rounded-[4px] w-full mr-2 "
                                        value={selected}
                                        onChange={setSelected}
                                        name="tags"
                                        placeHolder="enter tags"
                                    />
                                </div> 
                            </div>

                            <div className="flex justify-center mt-6 sm:mt-10">
                                <div className="buttons flex items-center gap-x-6">
                                    <button id="save-edit-info" className="bg-primary text-white text-sm font-bold px-7 py-3 rounded-[5px]">Save</button>
                                    <button className="bg-white text-primary text-sm font-bold px-7 py-3">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </motion.div>
            }
            

            {/* <!-- Edit password  -->  */}
            {
                (displayInfo === "editPassword") && 
                <motion.div id="edit-password"
                initial = {{opacity: 0, translateX: 0, translateY: -50}}
                animate = {{opacity: 1, translateX: 0, translateY:0}}
                transition = {{duration: 0.4, delay : 0.2}}
                >
                    <div className="flex justify-center">
                        <form className="py-0 sm:py-8 w-full sm:w-[610px] flex flex-col gap-y-6">

                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="name">Old Password</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{old password}}"/>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="name">New Password</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{new password}}"/>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                                <label className="w-[160px] block text-sm font-bold text-text" htmlFor="name">Confirm Password</label>
                                <input className="mt-2 sm:mt-0 p-3 border border-text-10 w-full sm:w-[450px] text-sm font-bold placeholder:text-primary-80 outline-none rounded-[4px]" type="text" name="" id="name" placeholder="{{confirm password}}"/>
                            </div>

                            <div className="flex justify-center mt-5 sm:mt-10">
                                <div className="buttons flex items-center gap-x-6">
                                    <button className="bg-primary text-white text-sm font-bold px-7 py-3 rounded-[5px]">Save</button>
                                    <button className="bg-white text-primary text-sm font-bold px-7 py-3">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </motion.div>
            }
            

        </div>

    </div>
  )
}

export default AuthorInformation