import React from 'react'
import './style.scss'

export default function Synonyms({ synonyms }) {
    console.log(synonyms)
    return (
        <div>
            <div className='synonyms'>
                {
                    // synonyms &&
                    <h2>Synonyms:
                        <span>
                            {
                                (synonyms.slice(0, 4)).map((synonym) => ` ${synonym} `)
                            }
                        </span>
                    </h2>
                }
            </div>
        </div>
    )
}
