import { createContext, useState } from "react";

const Content = createContext();

function ItemProvider({children}) {
 const [items, setItems] = useState([]);
    return (
        <>
            <Content.Provider value={{items, setItems}}>{children}</Content.Provider>
        </>
    )
}

export {
    ItemProvider,
    Content
}