'use client'

import React, { ReactNode, createContext } from "react"
import LibraryHook, { genreAndPages, libraryHookCRUD, userList } from "../hooks/library.hook"

interface libraryHookReturn {
        init:boolean 
        userList:userList , 
        genres:string[] , 
        minAndMaxOfPages:number[] , 
        setGenreAndPages:(arg:genreAndPages) => void ,
        libraryHookCRUD:libraryHookCRUD
}
interface mainContextProps extends libraryHookReturn {}
const mainContext = createContext( {} as mainContextProps );
const MainProvider = ({children}:{children:ReactNode}) => {

    return(
    <mainContext.Provider value={{...LibraryHook()}}>
        {children}
    </mainContext.Provider>
    )

}

export { mainContext , MainProvider } 