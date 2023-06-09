import React from 'react'
import WordPanel from '../WordPanel/WordPanel'
import MeaningPanel from '../MeaningPanel/MeaningPanel'
import Synonyms from '../Synonyms/Synonyms'
import SourcePanel from '../SourcePanel/SourcePanel'

export default function Panel({ data }) {
    return (
        <div >
            <WordPanel keyWord={data} />
            {
                (data?.meanings?.slice(0, 2))?.map((meaning, index) =>
                    <div key={index}>
                        <MeaningPanel
                            key={meaning?.partOfSpeech}
                            wordType={meaning?.partOfSpeech}
                            definitions={meaning?.definitions}
                        />
                        <Synonyms synonyms={meaning?.synonyms} />
                    </div>

                )
            }
            < SourcePanel keyWord={data.word} />
        </div >
    )
}
