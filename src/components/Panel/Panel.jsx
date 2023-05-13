import React from 'react'
import WordPanel from '../WordPanel/WordPanel'
import MeaningPanel from '../MeaningPanel/MeaningPanel'
import Synonyms from '../Synonyms/Synonyms'
import SourcePanel from '../SourcePanel/SourcePanel'

export default function Panel({ data }) {
    return (
        <div>
            <WordPanel keyWord={data} />
            <MeaningPanel wordType={'Noum'} definitions={data.meanings[0].definitions} />
            <Synonyms />
            <MeaningPanel wordType={'Verb'} />
            <SourcePanel />
        </div>
    )
}
