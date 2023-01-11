import { useEffect } from "react"

const useTitleHook = title =>{
    useEffect(()=>{
        document.title = `Treatise - ${title}`;
    } ,[title])
};

export default useTitleHook;