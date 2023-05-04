import React from 'react'

export const Activities = ({state, handleDelete}) => {
  return (
    <div className='my-5 p-5 flex flex-col bg-blue-600 bg-opacity-80 rounded-lg  w-[50vw] gap-y-2 max-h-[300px] overflow-y-auto  '>
            {
                state.map((item) => {   
                    return(
                        <div key={item.id} className='text-white bg-slate-200 bg-opacity-30  p-2 flex justify-between  rounded'>
                            <p className='max-w-[80%] overflow-x-auto'>{item.name}</p>
                            <div className='flex gap-x-2'>
                            {/* <button id={'status' + (id+1)} onClick={(e) => handleCompletion(e)} className=''>uncompleted</button> */}
                            <button onClick={(e) => handleDelete(e,item.id)} className='bg-red-500 h-[3vw] w-[3vw] rounded-full'>-</button>
                            </div>
                        </div>  
                     
                    )
                })
            }
            
        </div>
  )
}
