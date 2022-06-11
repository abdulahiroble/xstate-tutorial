import {createMachine} from "xstate";

// Compund & self transitions
export const promiseMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QBED2UB0BBA7gQwGswMBlAGzDAAcBPAYgDE8yzYACPWC6xUK1WAEsALoNQA7XiAAeiALQAWAAwKMARgBsAZgAcATgDsOtToBMSvQBoQNRAtNr1AVnunTGnU4NaFAX1-WaJi4hMTklLR0ADKoAK4QbOKogrBgUvxCohJSsghaBk4Y2gYaSm4aejpKBVrWtggmqnqmNRoKTlp6FS7+gejY+EQYAEJgUFCC4lB0AOKCAG5gbAAqAE5geMLpAiJikkgy8m0YWk4epjoaTnpK+aa1Nkc6GObKWvfXVQZ6fgEgQdguBFonEEgA5ZKpbaZPY5eTuDQnIw+NrvMqmBR1eRqaoYBQKAwKfRKJRtNRaXS9f79LBA6h0EgAWzALDYADNUKgINDdtkDrk5KZmhgSQVTE4zu8zFiEHo9CclGYXD8zjoCk5-H8khA4FIASEhuFqPU+DssvtQLk1ApHISzvjSYYhTLhVUFD41N4NNajDoqfrBmEAMZ4dbcg4ZXkWw6yortRU6D1qNReJymGWe572LQae4Y-FCzz+mmBkZjCZTHnmuGywqoz3k5RdFoGGVyQlFfQVIwlarGYvBQNV2H8+Q6Z6nc6Xa63Az3Ns+ore6oYvTvOWGAeA7hUYd8y3yM7yrwUnFaNRr66Yx4NdwnFzklNeZRORUDvfRgXXLQYE-n24XqcPxtm4ShFO8+IGMmShpiYBiar4QA */
    createMachine({
        id: "Dog",
        initial: "Awake",
        states: {
            Awake: {
                initial: "Begging",
                states: {
                    Sleepy: {
                        on: {
                            "Falls asleep": {
                                target: "#Dog.Asleep",
                            },
                            "Loud noise": {
                                target: "Scared",
                            },
                        },
                    },
                    Scared: {},
                    Begging: {
                        on: {
                            "Give Treat": {},
                        },
                    },
                },
            },
            Asleep: {
                on: {
                    "Loud Noise": {
                        target: "#Dog.Awake.Scared",
                    },
                    "Smell food": {
                        target: "Awake",
                    },
                },
            },
        },
    });


const machine =
    /** @xstate-layout N4IgpgJg5mDOIC5QHUCGAbA1gOjQSwBc8A7KAYgBkxUA3MAAgAsB7AWzEVAAdnZC9mxTiAAeiALQBGAAyTsANgBMAVgAcATgDMq6QBZ1kzbs0AaEAE9Eyzdl2LVqxfIDsizeuePFAX29m0WNgA8sT0qPQA7hiYZADiYAT0AEaoAMaYTGwcSCA8fESCwmII4oqK0tiqzrry7rrS6vXqLmaWCJKS8tjOncrSjuqKPcrO8r5+IMTMEHDCATj4RKTCefyFOcXimi7YklWairo6WvK1rRIdursG6jqSivfGyj4T88Gh4VFYK7xrQhuIDpyPqqGSSZz9JzlZznBDlVTYaSeezldTKeQ1ZyaXz+aK4aL0MDEGYQH75AT-UCbTSeBTuST6NzSZn6UwWRBlK7yZQeRRo0YGWrY17RMl-IoSeqKOkGRmaZl6LSwqRVXZC5zonr9aTC3xAA */
    createMachine({
        initial: "Waiting",
        states: {
            Waiting: {
                on: {
                    "Leave home": {
                        target: "On a walk",
                    },
                },
            },
            "On a walk": {
                on: {
                    "Get back home": {
                        target: "Walk ended",
                    },
                },
            },
            "Walk ended": {
                type: "final",
            },
        },
        id: "Walk",
    })


// Parrallel state 
export const machine2 =
    /** @xstate-layout N4IgpgJg5mDOIC5QGECGAbdACAtqgxgBYCWAdmAHQCyx+ATgPYAOhD51ArgC6QDEAqqRzcwiUEwaxiXYmzEgAHogC0AFlUA2CqoBMqgIwBWIwHZ9+vRoA0IAJ6IAnA+0AOBwAYNGkw4uqAzEYAvkE2aJi4BCTsNPTMrOyCwjwQvFQi8hJSMnJIiioa-v4UXl4u+qomJhoOqg429gg6RiX+liY6Li6GGoYuIWEY2HhEZJQAasQQYAwUAMqsAO5kUFgAblMzvAASm1iT0wyZktKypPJKCMo6N9qqxhouOkV11SYNiG2GJW4enfpFZ4DEDhYZRMYUA4zCi7CArdabBi8BYMRYIw7HbJnC4qfzOIomdyGTRtQlOFwfJqqdwUdxOWpuQJOfzufwhUIgUgMabwPKgyKjGK0RgsNiUdIpTGnXKgS7KDTuHQUfQmVQuEz+So+VmqSnKfxaAzPBwav6s9z9Dn8kbRcXC+JiihJEQQKU5c55OXqFzKow6Tz+crklzWOyffTOfQh1n6QpRmr6YHW8FCuKi8hu7GegqGEwlUrlLU1Op6-R0iiB-wdFy6HSqzU6JNDAW2yGI+ZLeEbDF5LLSj2ylR6fQlOs9ALuExuFWUiw0zSGG4+TUWbyqJsRG0QqGzWFdxGZmX5BAuGnudy6akBCqGBwufyUzVaapFQNuDVRhxsq3NrfsHeHgOx7XL0o4mOOLJTr47xhgglTaF+3RFLGHhqsSG5goKoi9ic7o4lcjwjqUhFFrU9SwcoUZKv4hjGOaeIOL0gTskEQA */
    createMachine({
        id: "Call machine",
        type: "parallel",
        states: {
            Microphone: {
                initial: "Muted",
                states: {
                    Muted: {
                        on: {
                            Unmute: {
                                target: "Unmuted",
                            },
                        },
                    },
                    Unmuted: {
                        on: {
                            Mute: {
                                target: "Muted",
                            },
                        },
                    },
                },
            },
            Video: {
                initial: "Showing video",
                states: {
                    "Showing video": {
                        on: {
                            "Hide Video": {
                                target: "Hiding video",
                            },
                        },
                    },
                    "Hiding video": {
                        on: {
                            "Show video": {
                                target: "Showing video",
                            },
                        },
                    },
                },
            },
        },
    })

    // Self transitions