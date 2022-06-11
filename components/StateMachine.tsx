import React from 'react'
import {useMachine} from '@xstate/react'
import {machine2} from './machine'

const StateMachine = () => {
    const [state, send] = useMachine(machine2, {})

    return (
        <div>
            <pre style={{marginBottom: "2rem"}}>
                {JSON.stringify(
                    {
                        value: state.value,
                        context: state.context,
                    },
                    null,
                    2,
                )}
            </pre>
            {state.nextEvents.map(event => (
                <button key={event} onClick={() => send(event)}>
                    {event}
                </button>
            ))}
        </div>
    )
}

export default StateMachine