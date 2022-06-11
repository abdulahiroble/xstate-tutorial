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
    /** @xstate-layout N4IgpgJg5mDOIC5QAUAWB7AdmABAYwEMAbInAWwL1QEtsA6AWWrwCd0AHDehgVwBdIAYgCqmMvzCJQ7dLGp9qWKSAAeiALQAmAMwBOOgA5dANmPaDxgwYCsV65oA0IAJ4bNdAIwWADABZrvr4e3tb23qYAvhFOaFi4hCTklDTczGyccXSi4gIQgrwCyjJyCkpIqhrW3voG4boeut4ezZoeTq4IWp4+-oHBoZre2lExXPHEpBRUtGB0AGrUEGDodADKGADutFA4AG6Ly4IAEgc4C0voRbLyipjKagia+sYhxgDsmgaBmi9v9u2IXwGOiaXy6Xx-fwNVr1EYgWLYfATJLTejnZZ0E4QbZ7A7oQTrdAbXEXK4lW73RCtdxvDzaN4WQJVIEQgGdel0bS+PwM3xPbm1axRaIgTDoJbwcoI8aJKYpWZMVgcMaMCQQMk3MqgB7qPTGTxgt7aLm6XQ-BpvNlabzeOi+cxGo3Ge306zGOHSpGy5IzRhpZWZbJqjWlO7lHXc7SeYweXzGTQfXQGVraNnQujWXRGoJZoZ54Yiz0JSY+1JKjLYEMU8OVY2GOoNJotNouNxGu3BZoNAweULgoWFsZekuo2bolaEraYHb7UnlYqasPaxDBO06BPvYxJ0y0y2tzq9-VZ6wNcEJhMuj1D4so+XzPGYxY42fLKtaioIY3uEJVHtVM1eAmbJbpymhPM01jaJmHgMgOoxxMOt6+uOb5Lh+6h0hmbzvOu2hNF+BipvuWhPHQ4LGNYbzcoEYLxgW8GIjecozKhlKdKEbz1lujZdq0Vpcvq5ixs6tTOtykHChEQA */
    createMachine({
        tsTypes: {} as import("./machine.typegen").Typegen0,
        id: "Phone call machine",
        type: "parallel",
        states: {
            Microphone: {
                initial: "Muted",
                states: {
                    Muted: {
                        entry: "Mute microphone",
                        exit: "Unmute microphone",
                        on: {
                            Unmute: {
                                actions: "Unmute microphone",
                                target: "Unmuted",
                            },
                        },
                    },
                    Unmuted: {
                        entry: "Unmute microphone",
                        on: {
                            Mute: {
                                actions: "Mute microphone",
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
    }).withConfig({
        actions: {
            "Mute microphone": () => {
                // alert("Microphone muted")
            },
            "Unmute microphone": () => {
                // alert("Microphone unmuted")
            }
        }
    });

    // {
        // actions: {
        //     "Mute microphone": () => {
        //         alert("Microphone muted")
        //     },
        //     "Unmute microphone": () => {
        //         alert("Microphone unmuted")
        //     }
        // }
    // })
