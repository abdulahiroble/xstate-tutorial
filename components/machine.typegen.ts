// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    "Unmute microphone": "Unmute";
    "Mute microphone": "Mute";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: "Unmute microphone" | "Mute microphone";
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "Microphone"
    | "Microphone.Muted"
    | "Microphone.Unmuted"
    | "Video"
    | "Video.Showing video"
    | "Video.Hiding video"
    | {
        Microphone?: "Muted" | "Unmuted";
        Video?: "Showing video" | "Hiding video";
      };
  tags: never;
}
