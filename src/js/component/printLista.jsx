import React from "react";
export const PrintLista=({ todos, setTodos })=>{
    //console.log('este es todos ', todos)
    //Delete from array -> filter
    // Update -> map
    return(
        <>
            {todos.map((item,index)=>(
                    <ul className="printul">	
                                <li className="print">
                                {item}{""}
                                        <i
                                class ="fas fa-trash-alt fa"
                                onClick={()=>
                                    setTodos(
                                        todos.filter (
                                            (t,currentIndex) =>
                                                index != currentIndex
                                                     )
                                            )
                                        }></i>	
                                </li>
                    </ul> ))}  
            <div className="conteo"> {todos.length}item left </div>
        </>
    )
}