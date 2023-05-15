import React from 'react'
import WordPanel from '../WordPanel/WordPanel'
import MeaningPanel from '../MeaningPanel/MeaningPanel'
import Synonyms from '../Synonyms/Synonyms'
import SourcePanel from '../SourcePanel/SourcePanel'

export default function Panel({ data }) {
    return (
        <div>
            <WordPanel keyWord={data} />
            <MeaningPanel wordType={'Noum'} meanings={data} />
            <Synonyms synonyms={data} />
            <MeaningPanel wordType={'Verb'} />
            <SourcePanel />
        </div>
    )
}
