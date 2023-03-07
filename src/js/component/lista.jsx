import React,{ useState } from "react";
import { PrintLista } from "./printLista.jsx"
export const ListaToDo= () =>{
    const [inputValue, setInputValue] = useState("");
    const [todos , setTodos] = useState([]);

        //add into array => concat
    function BTN(e) {
        setInputValue(e.target.value)
        
    }
    function PrintToDo(e) {
        const minLength =3
        if(e.key === "Enter"  && inputValue.length >= minLength){
            setTodos(todos.concat([inputValue]));
            setInputValue("");
            

       }
    }
    return (
        <div className="container">
                            <h1 className="titulo">Todos</h1>
                    <div className="conten">
                            <ul className="lista">
                                    <li>
                                        <input 
                                        onChange={BTN}
                                        onKeyPress={PrintToDo}
                                        value={inputValue}
                                        type="text" 
                                        placeholder="What you needs to be done?"		
                                        />
                                    </li>
                            </ul>
         <PrintLista todos={todos} setTodos={setTodos}></PrintLista>
			</div>
        </div>
		
    )
}