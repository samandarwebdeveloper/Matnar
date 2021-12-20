
import { createContext, useState } from "react";
const Context = createContext()

function Provider({children}) {
    const [product, setProduct] = useState([])
    return(
        <>
        <Context.Provider value={{product, setProduct}}>{children}</Context.Provider>
        </>
    )
}
export {
    Provider,
    Context
};