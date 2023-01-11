import dynamic from 'next/dynamic';
import { useState } from 'react'
import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Image from 'next/image';
import useTitleHook from '../components/customHook/useTitleHook';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)


function Createblog() {

    useTitleHook('Create Blog')
      
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    };
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    };
    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    };


  return (
    <div className='mt-[56px] sm:mt-[87px]'>
        {/* <!-- banner and name details  --> */}
       <div className="banner-name">
            <div className="h-[120px] sm:h-[180px] w-full author-banner-img">
            </div>
            
            <div className="mt-[-40px] sm:mt-[-70px] md:mt-[-95px] lg:mt-[-100px] mx-4 md:mx-[5%] lg:mx-[8%] 2xl:[15%]">
                <div className="flex flex-col sm:flex-row gap-x-5 items-center sm:items-end ">
                    <div className="profile-pic flex-shrink-0 relative">
                    <Image className="border-[4px] border-[#7A7A7A]/60 rounded-full w-20 sm:w-[150px] md:w-[200px] h-20 sm:h-[150px] md:h-[200px]" src={require(`../public/assests/Author-Profile/avatar.webp`)} width={200} height={200} alt=""/>
                        <div className="absolute bottom-1 sm:bottom-4 right-0">
                            <label htmlFor="image">
                                <svg className="w-5 h-5 sm:w-12 sm:h-12" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_808_4575)">
                                    <path d="M4 20C4 31.0457 12.9543 40 24 40C35.0457 40 44 31.0457 44 20C44 8.95431 35.0457 0 24 0C12.9543 0 4 8.95431 4 20Z" fill="white"/>
                                    <path d="M32.2788 28.6904H15.7256C15.2866 28.6904 14.8656 28.516 14.5551 28.2055C14.2447 27.8951 14.0703 27.4741 14.0703 27.035V15.4479C14.0703 15.0088 14.2447 14.5878 14.5551 14.2774C14.8656 13.9669 15.2866 13.7925 15.7256 13.7925H17.5442C18.4763 13.7925 19.3468 13.3267 19.8639 12.5511C20.381 11.7754 21.2515 11.3096 22.1836 11.3096H25.8207C26.7529 11.3096 27.6234 11.7754 28.1405 12.5511C28.6575 13.3267 29.528 13.7925 30.4602 13.7925H32.2788C32.7178 13.7925 33.1388 13.9669 33.4492 14.2774C33.7597 14.5878 33.9341 15.0088 33.9341 15.4479V27.035C33.9341 27.4741 33.7597 27.8951 33.4492 28.2055C33.1388 28.516 32.7178 28.6904 32.2788 28.6904Z" fill="white" stroke="#0095C0" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M23.9979 24.5522C26.0549 24.5522 27.7223 22.8847 27.7223 20.8277C27.7223 18.7708 26.0549 17.1033 23.9979 17.1033C21.9409 17.1033 20.2734 18.7708 20.2734 20.8277C20.2734 22.8847 21.9409 24.5522 23.9979 24.5522Z" fill="white" stroke="#0095C0" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_808_4575" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_808_4575"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_808_4575" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </label>
                            <input className="hidden" id="image" type="file"/>
                        </div>
                    </div>

                    <div className="name-btn flex flex-col sm:flex-row sm:justify-between w-full items-center mt-10 sm:mt-0">
                        <div className="name">
                            <h2 className="text-lg sm:text-base md:text-lg lg:text-[24px] text-[#393E50] font-black text-center sm:text-left">Chris Hemsworth</h2>
                            <p className="text-text-40 text-sm sm:text-[13px] md:text-base mt-2 text-center sm:text-left">Chris H</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       <div className="mx-4 md:mx-[15%] mt-24 mb-10">

            <div className="min-h-[400px] border px-2 py-2">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                />
            </div>
        </div>
    </div>
  )
}

export default Createblog