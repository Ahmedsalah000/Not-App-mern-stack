export const addNote=async (title,description)=>{
    const note={
        title,
        description
    }
    return note
}  

export const getNotes=async ()=>{
    const notes=[
        {
            title:'Note 1',     
        }
    ]
}

export const deleteNote=async (title,description)=>{
    const note={
        title,  
        
    }
    
    return true 
}

