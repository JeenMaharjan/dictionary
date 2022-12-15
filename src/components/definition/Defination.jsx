import React from 'react'
import './Defination.css'
const Defination = ({word, meanings,catagory}) => {
  return (
    <div className='meanings'>
        {
            meanings[0] && word && catagory === 'en' && (
                <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls style={{background:'#fff', borderRadius:10}}>
                    your browser doesnot work 
                </audio>
            )
        }
        {word ==='' ?(<span className='subtitle'>Please enter a word</span>): (
            meanings.map((mean)=>(
                mean.meanings.map((item)=>(
                    item.definitions.map((def)=>(
                        <div className='single' style={{background:'white', color:'black'}}>
                            <b>{def.definition}</b>
                            <hr style={{background:'black' , width:'100%'}} />
                            {
                                def.example && (<span>
                                    <b>Example : {def.example}</b>
                                </span>)
                            }
                            {
                                def.synonyms && (
                                    <span> 
                                        <b>synonyms: </b>
                                        {def.synonyms.map((s)=>`${s},`)}
                                    </span>
                                )
                            }
                        </div>
                        
                    ))
                ))
            ))
        )}
    </div>
  )
}

export default Defination