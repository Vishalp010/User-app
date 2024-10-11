"use client"
import { useState } from "react"

const Body = () => {

   const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [age,setAge] = useState("")
   const [city,setCity] = useState("")
   const [users,setUsers] = useState([])
   const [isEditing, setIsEditing] = useState(false) //yaha hum ise false se true tb krege jb editing krni ho then edit krdege ise   
   const [editIndex, setEditIndex] = useState(null)  //yaha humne null isliy kra h ki jb hum click kre for edit then isme index ki value aajaye and then us value ko chek krke null nahi ho tb edit krdege 

   const addUsers=()=>{
      if(!name||!email||!age||!city){
         alert("please enter all details")
         return
      }
      if(isEditing){   //age edit krna h tbhi isme ghusege
         const updatedUsers = users.map((item,index)=>
         index ===editIndex ? {name,email,age,city} : item
      )
      setUsers(updatedUsers)
      setIsEditing(false) // and same ise null krke 
      setEditIndex(null)  //yaha firse sb refresh krdiya ise null set krke 
      }  else{
      setUsers([...users,{name,email,age,city}])
      }

      setName ("")
      setEmail ("")
      setAge ("")
      setCity ("")
            //yaha firse sb kuchh reset krdiya
   }

   const handleEdit =(index)=>{
      const user = users[index]
      setName(user.name)
      setEmail(user.email);
      setAge(user.age);
      setCity(user.city);
      setIsEditing(true);   //yaha ise true krke hum edit krne ko bol re h 
      setEditIndex(index);   //yaha index paas krke btaare h ki konsa edit krna h
   }
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="flex flex-col w-[70%] h-[80%] overflow-y-auto rounded-md overflow-x-hidden border-1 border-black" >
      <h1 className="ml-4 w-[100%] h-10 text-3xl p-3 mb-6 ">LOGO</h1>
      <div className=" h-[60%]  flex flex-col justify-between  " >
         <input
         type="text"
         placeholder="Type your name here"
         value={name}
         onChange={(i)=>setName(i.target.value)}  //yaha jo ye e parameter paas hua h wo use hua h ki jese hi input me change hota h to wo jo b change hua h use element ya item (i) maankar usko i.target kro which means ki uski value ko target kr re h using i.target.value is trike se hum target kri hui value of setName me pass kr dere h 
         />
         <input
         type="email"
         placeholder="Type your Email here"
         value={email}
         onChange={(i)=>setEmail(i.target.value)}
         />
         <input
         type="number"
         placeholder="Type your Age here"
         value={age}
         onChange={(i)=>setAge(i.target.value)}
         />
         <input
         type="text"
         placeholder="Type your City here"
         value={city}
         onChange={(i)=>setCity(i.target.value)}
         />
         <button onClick={addUsers} 
         className="w-[10%] m-2 border-[1px] border-black rounded-md h-10 bg-blue-500 font-semibold text-white cursor-pointer"> {isEditing?"Update" : "Add User"} </button>    
         {/* button me humne name me condtion lgaa di ki agar edit krna h to update aaye wrna add user hi */}
      </div>
      <div className=" overflow-y-auto h-[40%] overflow-x-hidden " >
      <h1 className="ml-4 w-[100%] h-10 text-3xl p-3 mb-6 " >User List</h1>
      <div className="flex justify-between" >
         <span className="aqua user">Name</span>
         <span className="aqua user">Email</span>
         <span className="aqua user">Age</span>
         <span className="aqua user">Adress</span>
         <span className="aqua user">Action</span>
      </div>

      {
         users.map((item,index)=>( //yaha hum key , item,index isliy dere h kuki key is use for iteration at what index we want to iterate and item is that item  at taht index 
            <div key={index} className="flex justify-between "> 
               <span className=" red user" >{item.name}</span>
               <span className=" red user" >{item.email}</span>
               <span className=" red user" >{item.age}</span>
               <span className=" red user" >{item.city}</span>
               <button 
               className="w-[10%] m-2 border-[1px] border-black rounded-md h-10 bg-red-400 font-semibold text-white cursor-pointer"
               onClick={()=>{
                  setUsers(users.filter((_,i)=>i!==index))
               }}
               >Delete</button>
               <button className="w-[10%] m-2 border-[1px] border-black rounded-md h-10 green font-semibold text-white cursor-pointer" onClick={()=>handleEdit(index)} >Update</button> 
               {/* yaha hum onclik me wo index paas krege jisme edit hona h jaake element  */}
            </div>
         ))
      }

      </div>
      </div>
    </div>
  )
}

export default Body
