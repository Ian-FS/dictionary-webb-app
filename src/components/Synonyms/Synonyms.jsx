import React from 'react'
import './style.scss'

export default function Synonyms({ synonyms }) {
    console.log(synonyms?.meanings[0].synonyms)
    return (
        <div>
            <div className='synonyms'>
                <h2>Synonyms
                    {/* <span>
                        {
                            synonyms?.meanings[0]?.synonyms?.map((synonym) => {
                                
                            })
                        }
                    </span> */}

                </h2>
            </div>
        </div>
    )
}
