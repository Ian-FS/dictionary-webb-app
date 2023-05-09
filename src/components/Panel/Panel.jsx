import React from 'react'
import WordPanel from '../WordPanel/WordPanel'
import MeaningPanel from '../MeaningPanel/MeaningPanel'
import Synonyms from '../Synonyms/Synonyms'
import SourcePanel from '../SourcePanel/SourcePanel'

export default function Panel({ keyWord }) {
    return (
        <div>
            <WordPanel keyWord={keyWord} />
            <MeaningPanel wordType={'Noum'} />
            <Synonyms />
            <MeaningPanel wordType={'Verb'} />
            <SourcePanel />
        </div>
    )
}
