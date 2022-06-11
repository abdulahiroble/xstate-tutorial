import React, {useEffect} from 'react'
import {useMachine} from '@xstate/react'
import {machine2} from './machine'

const consoleLogTransition = () => {
    const newState = machine2.transition(machine2.initialState, {
        type: "Unmute",
    })
    console.log(newState.value, newState.context)
}

const StateMachine = () => {
    const [state, send] = useMachine(machine2, {
        actions: {
            "Mute microphone": () => {
                // alert("WOOOW")
            }
        }
    })

    useEffect(() => {
        consoleLogTransition()
    }, [])

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