# trimport

This script removes unused and useless import directives from Solidity contracts.

It should be executed from the root of a Truffle folder. It goes
through the `contracts` subfolder, and removes every import line as long as
`truffle compile` succeeds.
