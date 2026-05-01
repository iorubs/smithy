---
title: Smithy
description: Tools for building agenting workflows
hide_table_of_contents: true
---

# Smithy

A family of composable tools for building agenting workflows.

![smithy forge](/img/forge.png)

### [MCPSmithy](https://iorubs.github.io/mcpsmithy/)

A lot of useful context lives in engineers' heads: how parts of a system relate, where things live, how to do common tasks. MCPSmithy is an easy way to expose that context, and the tools around it, to agents over MCP, defined in YAML instead of bespoke server code.

### [AgentSmithy](https://iorubs.github.io/agentsmithy/)

Most agents give you no control over the loop; you're at the mercy of the model to infer the next step, and decision making degrades as the context window grows. AgentSmithy is for building agenting flows with deterministic steps, so cheaper models can carry the workload too.

### [Smithy CLI](https://iorubs.github.io/smithy-cli/)

The engineer-friendly glue. Compose stacks of MCP servers and agents into a single declarative file, run them locally with one command, and share stacks with your team.

### Smithy Operator _(under construction)_

The same idea as the CLI, but for declarative agenting workloads on Kubernetes.
