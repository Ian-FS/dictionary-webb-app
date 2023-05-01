import React from 'react'
import WordPanel from '../WordPanel/WordPanel'
import NounPanel from '../NounPanel/NounPanel'
import VerbPanel from '../VerbPanel/VerbPanel'
import SourcePanel from '../SourcePanel/SourcePanel'

export default function Panel() {
    return (
        <div>
            <WordPanel />
            <NounPanel />
            <VerbPanel />
            <SourcePanel />
        </div>
    )
}
