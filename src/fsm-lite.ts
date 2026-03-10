
type DontInfer<T> = [T][T extends any ? 0 : never];
type Msg = { reply(message: string): void };
type State<States extends string> = {
    onMessage: (requester: Msg, stateMachineInstance: Instance<States>) => any;
};

type Descriptor<States extends string> = {
    initialState: NoInfer<States>;
    states: Record<States, State<States>>;
};

type Instance<States extends string> = Descriptor<States> & {
    currentState: States;
    setState: (newState: States) => void;
    reset: () => void;
};


declare function createMachine<States extends string>(value: Descriptor<States>): Instance<States>;

const machine = createMachine({
    initialState: 'state1',
    states: {
        state1: {
            onMessage: (requester, stateMachine) => {
                requester.reply('hello1');
                stateMachine.setState('state2');
            },
        },
        state2: {
            onMessage: (requester, stateMachine) => {
                requester.reply('hello2');
                stateMachine.setState('state1');
            },
        },
    },
});
