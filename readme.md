# TypeScript State Machine

A strongly typed finite state machine (FSM) implemented in TypeScript using generics and type inference.

This utility ensures that:
	*All states are fully type-safe
	*Transitions can only occur between declared states
	*State handlers receive a typed machine instance
	*Invalid state transitions are caught at compile time

The design uses advanced TypeScript techniques such as:
	*Generic constraints
	*Record type mapping
	*Inference control (DontInfer)
	*Self-referential generics for machine instances



## Overview

The system models a finite state machine where each state defines how it handles incoming messages.

Each state contains an onMessage handler that receives:
	1.	A requester capable of replying
	2.	The state machine instance itself

This allows the state to both:
	*Respond to requests
	*Transition to another state


